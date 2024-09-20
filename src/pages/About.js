import React from "react";
import "../styles/styles.css"; // Import your stylesheet if you need it

const About = () => {
  return (
    <main>
      <section id="about">
        <h1>About Capac Urcu</h1>
        <p>
          Capac Urcu is a company born from a deep appreciation of Ecuador’s unique flavors and natural beauty. 
          We aim to bring the essence of Ecuador to Romania, starting with premium imports that capture the rich 
          diversity of our homeland. At Capac Urcu, we are committed to sharing authentic experiences and high-quality 
          products that reflect our passion for connecting cultures through taste.
        </p>

        <h2>Our Vision</h2>
        <p>
          Our vision is to become a bridge between Ecuador and Romania, offering exceptional products that celebrate 
          the heritage and authenticity of Ecuadorian craftsmanship. We strive to build lasting connections, support 
          sustainable practices, and introduce a world of unique flavors to our customers. By blending tradition 
          with quality, we aim to create an unforgettable experience in every product we offer.
        </p>

        <h2>Our Story</h2>
        <p>
          Capac Urcu was born out of a deep love for Ecuador, a place I proudly call paradise. With its diverse landscapes, 
          rich culture, and exquisite flavors, Ecuador has always inspired me. My passion for mountaineering and rock 
          climbing has led me to the majestic peaks of the Altar volcano, my favorite mountain and the heart of my inspiration. 
          After moving to Romania in 2018, I felt a growing desire to share the beauty of my homeland. Capac Urcu is my way of 
          bringing a piece of Ecuador to the world, one authentic flavor at a time.
        </p>

        <h2>Values and Commitment</h2>
        <p>
          At Capac Urcu, we value authenticity, quality, and sustainability. We are committed to ethical sourcing, supporting 
          local producers, and bringing you products that reflect the heart of Ecuador. Our dedication to excellence ensures 
          that every item we offer is crafted with care and respect for the environment and the communities we work with. We 
          believe in building trust through transparency and delivering only the best from Ecuador to your doorstep.
        </p>

        <h2>Future Plans</h2>
        <p>
          Starting with coffee and chocolate, our journey is just beginning. We aim to expand our offerings to include more 
          of Ecuador’s finest products, continually exploring new opportunities to bring unique flavors to our customers. 
          Our goal is to grow thoughtfully, always maintaining the quality and authenticity that define Capac Urcu.
        </p>

        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! For inquiries, partnerships, or more information about Capac Urcu, please reach out 
          to us via email at{" "}
          <a href="mailto:info@capacurcu.com" aria-label="Email Capac Urcu">
            info@capacurcu.com
          </a>, or fill out our{" "}
          <a href="/contact" aria-label="Go to contact form">
            contact form
          </a>.
        </p>
      </section>
    </main>
  );
};

export default About;
