// eslint-disable-next-line no-unused-vars
import React from 'react'
import { camerasData } from '../Data/cameras'
import ProductCard from "./ProductCard";

const Cameras = () => {

  const firstFiveImages = camerasData.slice(0, 5);

  return (
    <>
      <h2>Cameras</h2>

      <div className='proSection'>
        {
          firstFiveImages.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              category="cameras"
            />
          ))
        }
      </div>
    </>
  )
}

export default Cameras