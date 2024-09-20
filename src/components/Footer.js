import React from 'react';
import logo from "../assets/images/logo.png"; // Adjust the path based on your file structure.
import "../styles/styles.css"; // Import your stylesheet if you need it

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Capac Urcu Logo" className="footer-logo" />
      <p>&copy; 2024 Capac Urcu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;