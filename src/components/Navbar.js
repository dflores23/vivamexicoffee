// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';
import logo from '../assets/logo.png'; // Import the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="MyLogo" className="logo-image" />
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink exact="true" to="/" activeclassname="active-link" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/coffee" activeclassname="active-link" onClick={closeMenu}>
          Coffee
        </NavLink>
        <NavLink to="/special-coffee" activeclassname="active-link" onClick={closeMenu}>
          Special Coffee
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FiX size={25} color="white" /> : <FiMenu size={25} color="white" />}
      </div>
    </nav>
  );
};

export default Navbar;
