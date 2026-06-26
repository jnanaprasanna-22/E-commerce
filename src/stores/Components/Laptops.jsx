// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { laptopsData } from '../Data/laptops'

const Laptops = () => {

  const firstFiveImages = laptopsData.slice(0, 5);

  return (
    <>
      <h2>Laptops</h2>

      <div className='proSection'>
        {
          firstFiveImages.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/laptops/${item.id}`}
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

export default Laptops