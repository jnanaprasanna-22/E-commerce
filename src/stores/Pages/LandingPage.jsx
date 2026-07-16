// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import HeroSection from '../Components/HeroSection'
import Footer from '../Components/Footer'
import CategorySection from '../Components/CategorySection'
import FeaturedProducts from '../Components/FeaturedProducts'
import ProductSection from '../Components/ProductSection'
import { phonesData } from '../Data/phones'
import { laptopsData } from '../Data/laptops'
import { watchesData } from '../Data/watches'
import { headphonesData } from '../Data/headphones'
import { camerasData } from '../Data/cameras'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <ProductSection
        title="Phones"
        products={phonesData}
        route="/phones"
      />

      <ProductSection
        title="Laptops"
        products={laptopsData}
        route="/laptops"
      />

      <ProductSection
        title="Watches"
        products={watchesData}
        route="/watches"
      />

      <ProductSection
        title="Headphones"
        products={headphonesData}
        route="/headphones"
      />

      <ProductSection
        title="Cameras"
        products={camerasData}
        route="/cameras"
      />
      <Footer />
    </div>
  )
}

export default LandingPage
