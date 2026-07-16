// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>🛒 Tech Mart</h2>

          <p>
            Tech Mart is your one-stop destination for premium
            electronics including smartphones, laptops,
            cameras, headphones and smart accessories.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>

            <li>Products</li>

            <li>Cart</li>

            <li>Checkout</li>

          </ul>

        </div>

        <div className="footer-category">

          <h3>Categories</h3>

          <ul>

            <li>Phones</li>

            <li>Laptops</li>

            <li>Headphones</li>

            <li>Cameras</li>

            <li>Watches</li>

          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt /> Hyderabad, India
          </p>

          <p>
            <FaPhoneAlt /> +91 9876543210
          </p>

          <p>
            <FaEnvelope /> support@techmart.com
          </p>

          <div className="social-icons">

            <FaFacebook />

            <FaInstagram />

            <FaTwitter />

            <FaLinkedin />

          </div>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 Tech Mart. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;