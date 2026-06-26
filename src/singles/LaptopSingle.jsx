// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'
import { laptopsData } from '../stores/Data/laptops'
import Navbar from '../stores/Components/Navbar'
import { useCart } from '../stores/context/useCart'

const LaptopSingle = () => {

  const { id } = useParams()
  const { addToCart } = useCart()

  const product = laptopsData.find(
    (item) => item.id === id
  )

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <>
      <Navbar />

      <div className="ind-section">

        <div className="ind-image">
          <img
            src={product.image}
            alt={product.model}
          />
        </div>

        <div className="ind-details space">

          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>

          <div className="ind-model space">
            <h4>{product.model}</h4>
          </div>

          <div className="ind-price space">
            <h2>${product.price}</h2>
          </div>

          <div className="ind-desc space">
            <p>{product.Description}</p>
          </div>

          <button onClick={() => addToCart({...product, category: 'laptops'})}>Add To Cart</button>

          <button>Buy Now</button>
        </div>

      </div>
    </>
  )
}

export default LaptopSingle