// eslint-disable-next-line no-unused-vars 
import React from 'react' 
import { useParams, useLocation } from 'react-router-dom' 
import { phonesData } from '../Data/phones' 
import { headphonesData } from '../Data/headphones'
import { watchesData } from '../Data/watches'
import { laptopsData } from '../Data/laptops'
import { camerasData } from '../Data/cameras'
import { useCart } from '../context/useCart' 

const ProductDetails = () => { 
    const { id } = useParams() 
    const location = useLocation()
    const { addToCart } = useCart()

    // Determine category from URL path
    const category = location.pathname.split('/')[1]

    // Select correct data array based on category
    let productArray = []
    if (category === 'phones') productArray = phonesData
    else if (category === 'laptops') productArray = laptopsData
    else if (category === 'headphones') productArray = headphonesData
    else if (category === 'watches') productArray = watchesData
    else if (category === 'cameras') productArray = camerasData

    const product = productArray.find((item) => item.id === id)
    
    if (!product) { 
        return (
        <h2>Product Not Found</h2> 
    )} 

    return (
  <div className="product-details">
    <div className="details-image">
      <img
        src={product.image}
        alt={product.model}
      />
    </div>

    <div className="details-info">
        <h1>{product.model}</h1>
        <h2>{product.company}</h2>
        <h3>₹{product.price}</h3>

        <p className="rating">⭐⭐⭐⭐⭐ (4.8)</p>
        <p className="stock">✅ In Stock</p>
        <p className="delivery">🚚 Free Delivery Available</p>
        <p className="discount">🔥 20% OFF</p>

        <p>{product.Description}</p>

      <div className="details-buttons">
        <button onClick={() => addToCart({...product, category})}>Add To Cart</button>
        <button
            onClick={() => {
                addToCart({...product, category})
                alert("Proceeding to checkout...")
            }}
            >
            Buy Now
        </button>
      </div>
    </div>
  </div>
) }

export default ProductDetails