// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { headphonesData } from '../Data/headphones'

const Headphones = () => {

  const firstFiveImages = headphonesData.slice(0, 5);

  return (
    <>
      <h2>HeadPhones</h2>

      <div className='proSection'>
        {
          firstFiveImages.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/headphones/${item.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >

                <div className='imgBox'>
                  <img
                    className='proImage'
                    src={item.image}
                    alt={item.company || item.model}
                  />

                  <div className='proInfo'>
                    <div className='proCompany'>
                      {item.company}
                    </div>

                    <div className='proModel'>
                      {item.model}
                    </div>

                    <h4>${item.price}</h4>
                  </div>

                </div>

              </Link>
            )
          })
        }
      </div>
    </>
  )
}

export default Headphones