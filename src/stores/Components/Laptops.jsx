// eslint-disable-next-line no-unused-vars
import React from 'react'
import { laptopsData } from '../Data/laptops'
import ProductCard from "./ProductCard";

const Laptops = () => {

  const firstFiveImages = laptopsData.slice(0, 5);

  return (
    <>
      <h2>Laptops</h2>

      <div className='proSection'>
        {
          firstFiveImages.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              category="laptops"
            />
          ))
        }
      </div>
    </>
  )
}

export default Laptops