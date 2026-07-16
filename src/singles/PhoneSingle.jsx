// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'
import { phonesData } from '../stores/Data/phones'
import Navbar from '../stores/Components/Navbar'
import { useCart } from '../stores/context/useCart'

const PhoneSingle = () => {

  const { id } = useParams()
  const { addToCart } = useCart()

  const product = phonesData.find(
    (item) => item.id === id
  )

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
      <>
        <Navbar />

        <div className="product-container">

          <div className="details-image">
            <img
              src={product.image}
              alt={product.model}
            />
          </div>

          <div className="details-info">

            <h1>{product.company}</h1>

            <h2>{product.model}</h2>

            <h3>₹ {product.price}</h3>

            <p>{product.Description}</p>

            <div className="details-buttons">

              <button
                className="cart-btn"
                onClick={() =>
                  addToCart({ ...product, category: "phones" })
                }
              >
                Add To Cart
              </button>

              <button className="buy-btn">
                Buy Now
              </button>

            </div>

          </div>

        </div>
    </>
  )
}

export default PhoneSingle