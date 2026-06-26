// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar'

const CheckoutPage = () => {
  return (
    <>
      <Navbar />

      <div className="checkout-page">
        <h1>Checkout</h1>

        <form className="checkout-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            placeholder="Delivery Address"
          />

          <button type="submit">
            Place Order
          </button>

        </form>
      </div>
    </>
  )
}

export default CheckoutPage