// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { phonesData } from "../Data/phones";
import { headphonesData } from "../Data/headphones";
import { watchesData } from "../Data/watches";
import { laptopsData } from "../Data/laptops";
import { camerasData } from "../Data/cameras";
import { toast } from "react-toastify";
import { useCart } from "../context/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  // Get category from URL
  const category = location.pathname.split("/")[1];

  let productArray = [];

  switch (category) {
    case "phones":
      productArray = phonesData;
      break;
    case "laptops":
      productArray = laptopsData;
      break;
    case "headphones":
      productArray = headphonesData;
      break;
    case "watches":
      productArray = watchesData;
      break;
    case "cameras":
      productArray = camerasData;
      break;
    default:
      productArray = [];
  }

  const product = productArray.find((item) => item.id === id);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }


  return (
    <div className="product-page">

      {/* Back Button */}
      <div className="back-home">
        <Link to="/" className="back-home-btn">
          ← Back to Home
        </Link>
      </div>

      {/* Product Section */}
      <div className="product-container">

        {/* Image */}
        <div className="details-image">
          <img
            src={product.image}
            alt={product.model}
          />
        </div>

        {/* Details */}
        <div className="details-info">

          <h1>{product.model}</h1>

          <h2>{product.company}</h2>

          <h3>₹{product.price}</h3>

          <p className="rating">
            ⭐⭐⭐⭐⭐ <span>(4.8)</span>
          </p>

          <p className="stock">
            ✅ In Stock
          </p>

          <p className="delivery">
            🚚 Free Delivery Available
          </p>

          <p className="discount">
            🔥 20% OFF
          </p>

          <p className="description">
            {product.Description}
          </p>

          <div className="quantity-box">

            <button
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              +
            </button>

          </div>

          <div className="details-buttons">

            <button
              className="cart-btn"
              onClick={() => {
                addToCart({
                  ...product,
                  category,
                  quantity,
                });

                toast.success("Product added to cart 🛒");
              }}
            >
              🛒 Add to Cart
            </button>

            <button
              className="buy-btn"
              onClick={() => {
                addToCart({
                  ...product,
                  category,
                  quantity,
                });

                 toast.success("Proceeding to Checkout!");
              }}
            >
              ⚡ Buy Now
            </button>

          </div>
          <div className="specifications">

            <h3>Specifications</h3>

            <ul>

              <li>Brand : {product.company}</li>

              <li>Model : {product.model}</li>

              <li>Warranty : 1 Year</li>

              <li>Delivery : Free Delivery</li>

              <li>Replacement : 7 Days</li>

              <li>Payment : Cash on Delivery Available</li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;