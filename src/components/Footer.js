import React from 'react';
import logo from "../assets/images/logo.png";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Capac Urcu Logo" className="footer-logo" />
      <p>&copy; 2024 Capac Urcu. All rights reserved.</p>
      <div className="social-media-icons">
        {/* Add your social media icons with links here */}
      </div>
    </footer>
  );
};

export default Footer;
