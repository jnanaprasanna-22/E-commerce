// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useCart } from './context/useCart'

const UserCart = () => {

    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice
    } = useCart()

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h1>Your Cart is Empty</h1>
                <p>Add some products to continue shopping.</p>
            </div>
        )
    }

    return (
        <div>
            {cartItems.map((item) => {
                return (
                    <div key={`${item.category}-${item.id}`} className="cart-section">

                        <div className="cart-img">
                            <img
                                src={item.image}
                                alt={item.product || item.model}
                            />
                        </div>

                        <div className="cart-details">
                            <h2>{item.company}</h2>
                            <h3>{item.model}</h3>
                            <h3>${item.price}</h3>
                            <h3>
                                Subtotal : ${item.price * item.quantity}
                            </h3>

                            <div className="quantity-section">
                                <button
                                    onClick={() => decreaseQuantity(item.id, item.category)}
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() => increaseQuantity(item.id, item.category)}
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className='remove-btn'
                                onClick={() => removeFromCart(item.id, item.category)}
                            >
                                Remove
                            </button>

                        </div>

                    </div>
                )
            })}

            <div className="cart-total">
                <h1>Total Price: ${totalPrice}</h1>
            </div>
        </div>
    )
}

export default UserCart