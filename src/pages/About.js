import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const About = () => {
  return (
    <main>
      <section id="about">
        <h2>About Capac Urcu</h2>
        <p>
          Capac Urcu was founded with the goal of bridging the gap between organic production and environmental impact. Our journey starts in Ecuador, a country known for its rich biodiversity and high-quality agricultural products. By partnering with organic producers, we aim to bring the best of Ecuador's products to new markets while making a positive contribution to conservation efforts.
        </p>
      </section>

      <section id="our-vision">
        <h3>Our Vision</h3>
        <p>
          We envision a sustainable world where businesses are a force for good—benefiting communities, preserving ecosystems, and promoting organic agriculture. At Capac Urcu, our goal is to create a supply chain that doesn't just deliver products, but also generates positive change by supporting environmental projects and community development.
        </p>
      </section>

      <section id="our-mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to collaborate with organic producers to bring high-quality products from Ecuador to the world, starting with chocolate and coffee. We aim to use these products as a vehicle for broader impact—reinvesting in projects like reforestation, conservation education, and community empowerment.
        </p>
      </section>

      <section id="what-we-stand-for">
        <h3>What We Stand For</h3>
        <ul>
          <li>
            <strong>Sustainability:</strong> We work only with producers who follow organic and sustainable farming practices, ensuring that our supply chain respects both people and the environment.
          </li>
          <li>
            <strong>Community Empowerment:</strong> We are committed to supporting the communities we work with by providing opportunities for economic growth and knowledge sharing on sustainable practices.
          </li>
          <li>
            <strong>Environmental Conservation:</strong> Our long-term goal is to invest in impactful environmental initiatives. We believe that through reforestation, conservation education, and awareness, we can contribute to preserving our planet's biodiversity.
          </li>
        </ul>
      </section>

      <section id="our-approach">
        <h3>Our Approach</h3>
        <p>
          Our approach is rooted in collaboration. We work closely with farmers, suppliers, and partners who share our vision for sustainability and quality. We believe that transparency and mutual growth are the keys to building a better supply chain. By supporting organic farming practices and investing in community and environmental initiatives, we aim to create a model that goes beyond business as usual.
        </p>
      </section>

      <section id="our-story">
        <h3>Our Story</h3>
        <p>
          The idea for Capac Urcu came from a deep appreciation for nature's beauty and a desire to protect it. Founded by an Ecuadorian passionate about sustainable agriculture, our journey began with organic chocolate and coffee—two products that symbolize our connection to the earth. Today, we are taking our first steps in Romania, but our eyes are set on creating a global impact, one organic product at a time.
        </p>
      </section>

      <section id="get-involved">
        <h3>Get Involved</h3>
        <p>
          We're always looking to partner with others who share our commitment to sustainability and quality. Whether you're an organic producer or a supporter of conservation initiatives, we'd love to connect. Together, we can make a difference.
        </p>
        <Link to="/contact">
          <button>Connect with Us</button>
        </Link>
      </section>
    </main>
  );
};

export default About;