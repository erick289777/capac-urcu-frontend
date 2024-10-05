import React from 'react';
import logo from "../assets/images/logo.png";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Capac Urcu Logo" className="footer-logo" />
      <p>&copy; 2024 Capac Urcu. All rights reserved.</p>
      <p>Sign up for our newsletter to receive updates on our initiatives, partners, and impact.</p>
      <div className="social-media-icons">
        {/* Add your social media icons with links here */}
      </div>
    </footer>
  );
};

export default Footer;
