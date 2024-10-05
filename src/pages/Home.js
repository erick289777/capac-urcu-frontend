import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Home = () => {
  return (
    <main>
      <section id="home">
        <h2>Building a Sustainable Future Together</h2>
        <p>
          Partnering to bring organic products from Ecuador to the world while investing in environmental initiatives. Our mission is about creating a sustainable supply chain that benefits both people and nature, starting from Ecuador and expanding globally.
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
          We are committed to sourcing organic products while making a positive impact on the environment. Our goal is to work with like-minded partners to support organic farming, community development, and conservation efforts.
        </p>
      </section>

      <section id="why-us">
        <h3>Why Work with Us</h3>
        <ul>
          <li>
            <strong>Focus on Sustainability:</strong> We prioritize organic farming, ethical sourcing, and environmental care.
          </li>
          <li>
            <strong>Making a Real Impact:</strong> Our work includes reforestation and community support initiatives to ensure a positive impact.
          </li>
          <li>
            <strong>Sharing Our Journey:</strong> We share stories from our adventurers, highlighting the importance of conservation and the beauty of nature.
          </li>
        </ul>
      </section>

      <section id="partners">
        <h3>Our Ideal Partners</h3>
        <p>
          We are looking for providers who practice organic and ethical farming and partners who want to support a model focused on sustainability and environmental impact. Whether you are a producer or want to support our initiatives, we’d love to collaborate.
        </p>
      </section>

      <section id="get-involved">
        <h3>Let’s Work Together</h3>
        <p>
          By working with us, you become part of an effort to bring organic products to new markets while making a positive environmental impact.
        </p>
        <Link to="/contact">
          <button>Get Involved</button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
