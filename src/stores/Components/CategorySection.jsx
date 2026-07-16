// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaLaptop,
  FaCamera,
  FaHeadphones,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const CategorySection = () => {
  const categories = [
    {
      name: "Phones",
      icon: <FaMobileAlt />,
      path: "/phones",
      color: "#3b82f6",
    },
    {
      name: "Laptops",
      icon: <FaLaptop />,
      path: "/laptops",
      color: "#10b981",
    },
    {
      name: "Cameras",
      icon: <FaCamera />,
      path: "/cameras",
      color: "#f59e0b",
    },
    {
      name: "Headphones",
      icon: <FaHeadphones />,
      path: "/headphones",
      color: "#8b5cf6",
    },
    {
      name: "Watches",
      icon: <FaClock />,
      path: "/watches",
      color: "#ef4444",
    },
  ];

  return (
    <section className="category-section">

      <h2 className="category-title">
        Shop by Category
      </h2>

      <p className="category-subtitle">
        Explore our premium collection of electronics.
      </p>

      <div className="category-container">

        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className="category-card"
          >
            <div
              className="category-icon"
              style={{ color: category.color }}
            >
              {category.icon}
            </div>

            <h3>{category.name}</h3>

            <span>
              Shop Now <FaArrowRight />
            </span>
          </Link>
        ))}

      </div>

    </section>
  );
};

export default CategorySection;