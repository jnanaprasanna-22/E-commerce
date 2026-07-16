// eslint-disable-next-line no-unused-vars
import React from 'react'
import { headphonesData } from '../Data/headphones'
import ProductCard from "./ProductCard";

const Headphones = () => {

  const firstFiveImages = headphonesData.slice(0, 5);

  return (
    <>
      <h2>Headphones</h2>

      <div className='proSection'>
        {
          firstFiveImages.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              category="phones"
            />
          ))
        }
      </div>
    </>
  )
}

export default Headphones