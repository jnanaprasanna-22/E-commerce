// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

import { phonesData as phones } from "../Data/phones";
import { laptopsData as laptops } from "../Data/laptops";
import { camerasData as cameras } from "../Data/cameras";

const FeaturedProducts = () => {

  const featuredProducts = [
    { ...phones[0], category: "phones" },
    { ...laptops[0], category: "laptops" },
    { ...cameras[0], category: "cameras" },
  ];

  return (

    <section className="featured-section">

      <h2 className="featured-title">
        ⭐ Featured Products
      </h2>

      <p className="featured-subtitle">
        Discover our most popular electronics chosen by thousands of customers.
      </p>

      <div className="featured-grid">

        {featuredProducts.map((item) => (

          <ProductCard

            key={`${item.category}-${item.id}`}
            item={item}
            category={item.category}

          />

        ))}

      </div>

      <div className="featured-btn">

        <Link to="/phones">

          <button>
            View All Products
          </button>

        </Link>

      </div>

    </section>

  );
};

export default FeaturedProducts;