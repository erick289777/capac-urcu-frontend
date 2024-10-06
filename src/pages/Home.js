import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Home = () => {
  return (
    <main>
      <section id="home">
        <h2>Building a Sustainable Future Together</h2>
        <p>
          We partner to bring Ecuador's organic products to the world while supporting environmental initiatives. Our mission is to create a sustainable supply chain that benefits both people and nature, starting locally and expanding globally.
        </p>
        <div className="cta-buttons">
          <Link to="/about">
            <button>Learn About Our Vision</button>
          </Link>
          <Link to="/contact">
            <button>Connect with Us</button>
          </Link>
        </div>
      </section>

      <section id="vision">
        <h3>Our Vision</h3>
        <p>
          Our vision is to source organic products to lower the impact to the environment. We aim to collaborate with partners to support sustainable farming, community growth, and conservation efforts.
        </p>
      </section>

      <section id="why-us">
        <h3>Why Work with Us</h3>
        <ul>
          <li>
            <strong>Sustainability First:</strong> We prioritize ethical sourcing, organic farming, and environmental care.
          </li>
          <li>
            <strong>Making a Difference:</strong> We contribute to reforestation and community initiatives for lasting positive impact.
          </li>
          <li>
            <strong>Sharing Our Stories:</strong> Our adventurers highlight the beauty of nature and the importance of conservation.
          </li>
        </ul>
      </section>

      <section id="partners">
        <h3>Our Ideal Partners</h3>
        <p>
          We seek providers practicing organic and ethical farming and partners committed to sustainability. Whether you're a producer or a supporter, we'd love to collaborate.
        </p>
      </section>

      <section id="get-involved">
        <h3>Let's Work Together</h3>
        <p>
          Join us in bringing organic products to new markets while making a positive environmental impact.
        </p>
        <div className="cta-buttons">
          <Link to="/contact">
            <button>Connect with Us</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
