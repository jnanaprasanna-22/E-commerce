// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { totalPrice } = useCart();
  const navigate = useNavigate();

  const [payment, setPayment] = useState("COD");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Order Placed Successfully!");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="checkout-page">

        <h1 className="checkout-title">
          Secure Checkout
        </h1>

        <div className="checkout-container">

          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >

            <h2>Customer Information</h2>

            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              required
            />

            <textarea
              placeholder="Delivery Address"
              rows="4"
              required
            />

            <h2>Payment Method</h2>

            <label>
              <input
                type="radio"
                value="COD"
                checked={payment === "COD"}
                onChange={(e) =>
                  setPayment(e.target.value)
                }
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                value="UPI"
                checked={payment === "UPI"}
                onChange={(e) =>
                  setPayment(e.target.value)
                }
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                value="Card"
                checked={payment === "Card"}
                onChange={(e) =>
                  setPayment(e.target.value)
                }
              />
              Credit / Debit Card
            </label>

            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order
            </button>

          </form>

          <div className="order-summary">

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
              <span>₹ {totalPrice.toLocaleString()}</span>
            </div>

          </div>

        </div>

      </div>

    </>
  );
};

export default CheckoutPage;