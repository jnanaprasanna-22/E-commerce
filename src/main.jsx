import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './stores/context/CartContext.jsx'
import { SearchProvider } from './stores/context/SearchContext.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            theme="colored"
          />
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);