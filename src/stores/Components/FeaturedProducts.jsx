// eslint-disable-next-line no-unused-vars
import React from 'react'
import { phonesData } from '../Data/phones'
import { headphonesData } from '../Data/headphones'
import { laptopsData } from '../Data/laptops'
import { watchesData } from '../Data/watches'
import { camerasData } from '../Data/cameras'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {

  const featured = [
    ...phonesData.slice(0, 2),
    ...headphonesData.slice(0, 2),
    ...laptopsData.slice(0, 2),
    ...watchesData.slice(0, 2),
    ...camerasData.slice(0, 2)
  ]

  return (
    <div className="featured-section">
      <h2>🔥 Featured Products</h2>

      <div className="featured-container">
        {featured.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="featured-card"
          >
            <img
              src={item.image}
              alt={item.model}
            />

            <h3>{item.model}</h3>

            <p>${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts