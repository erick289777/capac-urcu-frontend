import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import "../styles/styles.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Capac Urcu Logo" className="header-logo" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;