// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './stores/Pages/LandingPage'
import PhonePage from './stores/Pages/PhonePage'
import CameraPage from './stores/Pages/CameraPage'
import LaptopPage from './stores/Pages/LaptopPage'
import HeadphonePage from './stores/Pages/Headphonepage'
import WatchesPage from './stores/Pages/Watches'
import ProductDetails from './stores/Pages/ProductDetails'
import CartPage from './stores/Pages/CartPage'
import CheckoutPage from './stores/Pages/CheckoutPage'
const App = () => {
  return (
    <div>
      <Routes>
       <Route path="/" element={<LandingPage />} />
        <Route path="/cameras" element={<CameraPage />} />
        <Route path="/phones" element={<PhonePage />} />
        <Route path="/laptops" element={<LaptopPage />} />
        <Route path="/headphones" element={<HeadphonePage />} />
        <Route path="/watches" element={<WatchesPage />} />
        <Route path="/phones/:id" element={<ProductDetails />} />
        <Route path="/headphones/:id" element={<ProductDetails />} />
        <Route path="/laptops/:id" element={<ProductDetails />} />
        <Route path="/watches/:id" element={<ProductDetails />} />
        <Route path="/cameras/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}

export default App