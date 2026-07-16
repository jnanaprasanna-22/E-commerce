import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaStar,
  FaTruck,
  FaBolt,
} from "react-icons/fa";

const ProductCard = ({ item, category }) => {
  return (
    <div className="product-card">

      <div className="discount-badge">
        20% OFF
      </div>

      <div className="wishlist-icon">
        <FaHeart />
      </div>

      <div className="image-container">
        <img
          src={item.image}
          alt={item.model}
          className="product-image"
        />
      </div>

      <div className="proInfo">

        <h3>{item.company}</h3>

        <p className="model">
          {item.model}
        </p>

        <div className="rating">

          <FaStar />

          <span>4.8 (1,250 Reviews)</span>

        </div>

        <h2 className="price">
          ${item.price}
        </h2>

        <p className="delivery">

          <FaTruck />

          Free Delivery

        </p>

        <p className="emi">

          <FaBolt />

          EMI Available

        </p>

        <Link to={`/${category}/${item.id}`}>

          <button className="viewBtn">

            View Details

          </button>

        </Link>

      </div>

    </div>
  );
};

export default ProductCard;