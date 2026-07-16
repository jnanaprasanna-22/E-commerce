// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {phonesData} from '../Data/phones'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { useSearch } from '../context/useSearch'
const PhonePage = () => {
  const [selectedProduct, setSelectedProduct] =useState([])
  const companies = [...new Set(phonesData.map(item => item.company))]
  const companyHandler = (mango) => {
  if (selectedProduct.includes(mango)) {
    setSelectedProduct(
      selectedProduct.filter((item) => item !== mango)
    )
  } else {
    setSelectedProduct([...selectedProduct, mango])
  }
}

const filteredProduct =
  selectedProduct.length === 0
    ? phonesData
    : phonesData.filter((orange) =>
        selectedProduct.includes(orange.company)
      )

const { search } = useSearch()

const searchedProducts = filteredProduct.filter(
  (item) =>
    item.company.toLowerCase().includes(search.toLowerCase()) ||
    item.model.toLowerCase().includes(search.toLowerCase())
)
 
  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {companies.map((company)=>{
            return(
              <div className='pro-input' key={company}>
                <label>
                  <input type="checkbox"
                  checked={selectedProduct.includes(company)}
                  onChange={() => companyHandler(company)}
              
                  />
                  {company}
                </label>
              </div>
            )
          })}
        </div>

        <div className="pageSection">
          {searchedProducts.map((item) => {
            
            return(
              <div className="productCard" key={item.id}>

                <Link to={`/phones/${item.id}`}>
                  <div className="pageImg">
                    <img
                        className="product-image"
                        src={item.image}
                        alt={item.company}
                    />
                  </div>
                </Link>
                <div className="proInfo">

                    <h3>{item.company}</h3>

                    <p>{item.model}</p>

                    <h4>₹ {item.price}</h4>

                    <Link to={`/phones/${item.id}`}>
                        <button className="viewBtn">
                            View Details
                        </button>
                    </Link>

          </div>
              </div>
            )
          })}
            
        </div>
      </div>
    </>
)
}

export default PhonePage;