import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <a href="#">
          <img src={logo} alt="GeekFood Logo" />
          <span>GeekFood</span>
        </a>
      </div>

      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>Quote</li>
          <li>Restaurants</li>
          <li>Foods</li>
          <li>Contacts</li>
        </ul>
      </div>

      <div className="cta-button">
        <button>Get Started</button>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
