// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar'
import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
const CartPage = () => {
  const navigate = useNavigate()
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice
  } = useCart()

  return (
    <>
      <Navbar />

      <div className="cart-page">

          <h1 className="cart-title">
            🛒 Shopping Cart
          </h1>

          {cartItems.length === 0 ? (

            <div className="empty-state">

              <h1>🛒</h1>

              <h2>Your Cart is Empty</h2>

              <p>
                Looks like you haven't added any products yet.
              </p>

              <button
                className="shop-btn"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>

            </div>
          ) : (

            <div className="cart-layout">

              <div className="cart-products">

                {cartItems.map((item) => (

                  <div
                    className="cart-item"
                    key={`${item.category}-${item.id}`}
                  >

                    <img
                      src={item.image}
                      alt={item.model}
                    />

                    <div className="cart-info">

                      <h2>{item.model}</h2>

                      <p>{item.company}</p>

                      <h3>₹ {item.price}</h3>

                      <p className="delivery">
                        🚚 Free Delivery
                      </p>

                      <div className="cart-buttons">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id, item.category)
                        }
                      >
                        -
                      </button>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id, item.category)
                        }
                      >
                        +
                      </button>

                        <button
                          className="remove-btn"
                          onClick={() => {
                            removeFromCart(item.id, item.category);
                            toast.info("Product removed from cart 🗑️");
                          }}
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

              <div className="summary-card">

                <h2>Order Summary</h2>

                <div className="summary-row">

                  <span>Subtotal</span>

                  <span>₹ {totalPrice.toLocaleString()}</span>

                </div>

                <div className="summary-row">

                  <span>Shipping</span>

                  <span>FREE</span>

                </div>

                <div className="summary-row">

                  <span>Tax</span>

                  <span>₹0</span>

                </div>

                <hr />

                <div className="summary-total">

                  <span>Total</span>

                  <span>
                    ₹ {totalPrice.toLocaleString()}
                  </span>

                </div>

                <button
                  className="checkout-btn"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </button>

              </div>

            </div>

        )}

      </div>
    </>
  )
}

export default CartPage