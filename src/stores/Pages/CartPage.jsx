// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar'
import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router-dom'
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
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <h3>Cart is Empty</h3>
        ) : (
          <>
            {cartItems.map((item) => (
                <div className="cart-item" key={`${item.category}-${item.id}`}>
                <img
                  src={item.image}
                  alt={item.model}
                  width="150"
                />

                <div className="cart-info">
                    <h3>{item.model}</h3>

                    <h4>₹{item.price}</h4>

                    <div className="cart-buttons">
                        <button onClick={() => decreaseQuantity(item.id, item.category)}>
                        -
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQuantity(item.id, item.category)}>
                        +
                        </button>

                        <button onClick={() => removeFromCart(item.id, item.category)}>
                        Remove
                        </button>
                    </div>
                </div>
              </div>
            ))}

            <h2 className="total-price">
                Total: ${totalPrice.toLocaleString()}
            </h2>
            <button onClick={() => navigate('/checkout')}>
                Proceed To Checkout
              </button>
          </>
        )}
      </div>
    </>
  )
}

export default CartPage