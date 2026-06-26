// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div className="hero">
  <h1>Welcome to E-Comm Store</h1>

  <h2>Best Deals on Electronics</h2>

  <p>
    Shop Phones, Laptops, Cameras,
    Headphones and Watches at amazing prices.
  </p>

  <button onClick={() => navigate('/phones')}>Shop Now</button>
</div>
  )
}
export default HeroSection;