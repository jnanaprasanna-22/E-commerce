// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useSearch } from "../context/useSearch";
import { allProducts } from "../Data/allProducts";
import { useNavigate } from "react-router-dom";

import {
  FaShoppingCart,
  FaUserCircle,
  FaMoon,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
const Navbar = () => {
  const { search, setSearch } = useSearch();
  const { cartItems } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const filteredProducts = allProducts.filter((item) =>
    item.model.toLowerCase().includes(query.toLowerCase()) ||
    item.company.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
     <nav className="navSection">

        <Link to="/" className="logo">
          <h2>
            <FaShoppingCart className="logoIcon" />
            Tech Mart
          </h2>
        </Link>

        <div className="search">

          <FaSearch className="searchIcon" />

          <input
              type="text"
              placeholder="Search gadgets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <div className="search-dropdown">

              {filteredProducts.slice(0, 6).map((item) => (

                <div
                  key={item.id}
                  className="search-item"
                  onClick={() => {
                    navigate(`${item.route}/${item.id}`);
                    setSearch("");
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.model}
                  />

                  <div>
                    <h4>{item.company}</h4>
                    <p>{item.model}</p>
                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-right ${menuOpen ? "active" : ""}`}>

          <Link to="/">Home</Link>

          <Link to="/phones">Phones</Link>

          <Link to="/laptops">Laptops</Link>

          <Link to="/headphones">Headphones</Link>

          <Link to="/watches">Watches</Link>

          <Link to="/cameras">Cameras</Link>

          <div className="user-detail">

            <FaUserCircle />

            Login

          </div>

          <div
            className="darkMode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : <FaMoon />}
          </div>

          <Link to="/cart" className="cart">

            <FaShoppingCart />

            <span>{cartItems.length}</span>

          </Link>

        </div>

      </nav>

    </>
  );
};

export default Navbar;