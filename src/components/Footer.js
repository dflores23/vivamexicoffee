// src/components/Footer.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Social media icons
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
        <img src={logo} alt="MyLogo" className="logo-image" />
          <p>Serving the best coffee since 2024.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Address</h4>
            <p>4900 E. Colfax Ave, Denver, CO 80220</p>
            <h4>Hours of Operation</h4>
            <p>7am - 3pm</p>
          
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a> */}
            <a href="https://www.instagram.com/vivamexicoffeeshop/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Viva Mexi-Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
