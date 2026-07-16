// eslint-disable-next-line no-unused-vars
import React from 'react'
import { phonesData } from '../Data/phones'
import ProductCard from "./ProductCard";

const Phones = () => {

  const firstFiveImages = phonesData.slice(0, 5);

  return (
    <>
      <h2>Phones</h2>

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

export default Phones