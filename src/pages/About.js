import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import achupaya from "../assets/images/achupaya.jpg";
import mountain from "../assets/images/mountain.jpg";
import forest from "../assets/images/forest.jpg";
import bird from "../assets/images/bird.jpg";
import river from "../assets/images/river.jpg";
import flower from "../assets/images/flower.jpg";

const About = () => {
  return (
    <main>
      <section id="about">
        <h2>About Capac Urcu</h2>
        <p>
          Capac Urcu was founded to bridge the gap between organic production and environmental conservation. Our journey began in Ecuador, a country known for its rich biodiversity and quality agriculture. By collaborating with Ecuadorian producers, we bring the country’s finest offerings to new markets while contributing to both nature and communities.
        </p>
      </section>

      <img src={river} alt="River" className="section-image" />

      <section id="our-story">
        <h3>Our Story</h3>
        <p>
          Capac Urcu was born from a deep love for nature and a passion for sustainable living. Founded by an Ecuadorian mountaineer and rock climber, the inspiration for our name comes from the Altar volcano, known as "Capac Urcu" in the Inca language, which means "Great Mountain." This majestic peak in Ecuador, with its striking landscapes and untouched beauty, sparked a vision to protect and share the wonders of our planet. Starting in Romania, we aim to bring a piece of Ecuador's natural abundance to the world, while championing global environmental conservation.
        </p>
      </section>

      <img src={flower} alt="Flower" className="section-image" />

      <section id="our-vision">
        <h3>Our Vision</h3>
        <p>
          We strive for a sustainable future where businesses actively support communities and ecosystems. Capac Urcu aims to build a supply chain that not only delivers high-quality products but also drives positive environmental and social impact through meaningful initiatives.
        </p>
      </section>

      <img src={forest} alt="Forest" className="section-image" />

      <section id="our-mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to share Ecuador's organic treasures with the world while creating a positive impact on both people and the environment. We are taking our first steps by building partnerships and exploring opportunities for reforestation, community education, and sustainable practices, with the aim of making every initiative contribute to a greener future.
        </p>
      </section>

      <img src={achupaya} alt="Achupaya" className="section-image" />

      <section id="what-we-stand-for">
        <h3>Our Values</h3>
        <ul>
          <li>
            <strong>Sustainability:</strong> We source from producers who follow organic and sustainable practices, respecting both people and the environment.
          </li>
          <li>
            <strong>Community Empowerment:</strong> We support communities by promoting economic growth and sharing knowledge on sustainable practices.
          </li>
          <li>
            <strong>Environmental Conservation:</strong> We invest in impactful projects like reforestation and conservation education to preserve biodiversity.
          </li>
        </ul>
      </section>

      <img src={bird} alt="Bird" className="section-image" />

      <section id="our-approach">
        <h3>Our Approach</h3>
        <p>
          Collaboration is at the core of our approach. We partner with farmers, suppliers, and like-minded individuals who share our commitment to sustainability and quality. Through transparency, mutual growth, and support for organic farming, we aim to create a supply chain that contributes positively to the environment and society.
        </p>
      </section>

      <img src={mountain} alt="Mountain in Ecuador" className="section-image" />

      <section id="get-involved">
        <h3>Get Involved</h3>
        <p>
          If you share our vision for sustainability and quality, we'd love to hear from you. Whether you're an organic producer or a conservation advocate, let's work together to make a difference.
        </p>
        <div className="cta-buttons">
          <Link to="/contact">
            <button>Connect with us</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;