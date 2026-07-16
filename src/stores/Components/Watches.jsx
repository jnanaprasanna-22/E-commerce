// eslint-disable-next-line no-unused-vars
import React from 'react'
import { watchesData } from '../Data/watches'
import ProductCard from "./ProductCard";

const Watches = () => {

  const firstFiveImages = watchesData.slice(0, 5);

  return (
    <>
      <h2>Watches</h2>

      <div className='proSection'>
        {
          firstFiveImages.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              category="watches"
            />
          ))
        }
      </div>
    </>
  )
}

export default Watches