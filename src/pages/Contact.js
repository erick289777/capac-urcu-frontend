import React, { useState } from "react";
import "../styles/styles.css"; 

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setFormSubmitted(true);
    e.target.submit(); 
  };

  return (
    <main>
      <section id="contact">
        <h2>Get in Touch</h2>
        <p>
          Whether you're an organic producer, potential partner, or supporter of conservation initiatives, we'd love to hear from you. Let's discuss how we can work together to create a positive impact on both the environment and communities.
        </p>

        <form action="https://formspree.io/f/meojbaed" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label><br />
          <input type="text" id="name" name="name" required /><br /><br />

          <label htmlFor="email">Your Email:</label><br />
          <input type="email" id="email" name="email" required /><br /><br />

          <label htmlFor="message">Your Message:</label><br />
          <textarea id="message" name="message" rows="5" required></textarea><br /><br />

          <input type="hidden" name="_subject" value="New message from Capac Urcu Website" /><br /><br />

          <button type="submit">Send Message</button>
        </form>

        {formSubmitted && <p>Thank you for reaching out! We will get back to you as soon as possible.</p>}

        <p>
          You can also reach us via email at:{" "}
          <a href="mailto:info@capacurcu.com">info@capacurcu.com</a>
        </p>
      </section>
    </main>
  );
};

export default Contact;