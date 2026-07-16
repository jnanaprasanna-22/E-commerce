// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
  FaShippingFast,
} from "react-icons/fa";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          🚀 India's Trusted Electronics Store
        </span>

        <h1>
          Welcome to
          <span> Tech Mart</span>
        </h1>

        <h2>
          Upgrade Your Digital Lifestyle
        </h2>

        <p>
          Discover premium smartphones, laptops,
          headphones, cameras and smart gadgets
          at unbeatable prices.
        </p>

        <div className="hero-buttons">

          <button
            className="shop-btn"
            onClick={() => navigate("/phones")}
          >
            Shop Now
          </button>

          <button
            className="explore-btn"
            onClick={() => navigate("/laptops")}
          >
            Explore
          </button>

        </div>

        <div className="hero-features">

          <div>
            <FaLaptop />
            <span>500+ Products</span>
          </div>

          <div>
            <FaMobileAlt />
            <span>Latest Gadgets</span>
          </div>

          <div>
            <FaHeadphones />
            <span>Top Brands</span>
          </div>

          <div>
            <FaShippingFast />
            <span>Fast Delivery</span>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900"
          alt="Electronics"
        />

      </div>

    </section>
  );
};

export default HeroSection;