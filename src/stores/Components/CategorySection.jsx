// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const CategorySection = () => {
  return (
    <div className="category-section">

      <h2 className="category-title">
        Shop By Category
      </h2>

      <div className="category-container">

        <Link to="/phones" className="category-card">
          📱 Phones
        </Link>

        <Link to="/laptops" className="category-card">
          💻 Laptops
        </Link>

        <Link to="/cameras" className="category-card">
          📷 Cameras
        </Link>

        <Link to="/headphones" className="category-card">
          🎧 Headphones
        </Link>

        <Link to="/watches" className="category-card">
          ⌚ Watches
        </Link>

      </div>

    </div>
  )
}

export default CategorySection