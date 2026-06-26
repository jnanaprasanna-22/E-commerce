// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import CategorySection from '../Components/CategorySection'
import FeaturedProducts from '../Components/FeaturedProducts'
const LandingPage = () => {
  return (
    <div>
    
        <Navbar />
        <CategorySection />
        <HeroSection />
        <FeaturedProducts />
        <Products />
        <Footer />

    </div>
  )
}

export default LandingPage
