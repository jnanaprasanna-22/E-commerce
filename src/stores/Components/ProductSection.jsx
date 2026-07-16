import React from "react";
import { Link } from "react-router-dom";

const ProductSection = ({ title, products, route }) => {
  return (
    <section className="product-section">

      <div className="section-header">
        <h2>{title}</h2>

        <Link to={route} className="view-all">
          View All →
        </Link>
      </div>

      <div className="products-grid">

        {products.slice(0, 4).map((item) => (
          <div className="product-card" key={item.id}>

            <img
              src={item.image}
              alt={item.model}
            />

            <h3>{item.company}</h3>

            <p>{item.model}</p>

            <h4>₹ {item.price}</h4>

            <Link to={`${route}/${item.id}`}>
              <button className="view-btn">
                View Details
              </button>
            </Link>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ProductSection;