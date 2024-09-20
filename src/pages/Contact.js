import React, { useState } from "react";
import "../styles/styles.css"; // Import your stylesheet if you need it

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setFormSubmitted(true);
    e.target.submit(); // Proceed with actual submission to Formspree
  };

  return (
    <main>
      <section id="contact">
        <h1>Contact Us</h1>
        <p>If you have any questions, inquiries, or would like to know more about Capac Urcu, feel free to reach out to us!</p>

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

        {formSubmitted && <p>Thank you for submitting your message!</p>}

        <p>You can also reach us via email at: <a href="mailto:info@capacurcu.com">info@capacurcu.com</a></p>
      </section>
    </main>
  );
};

export default Contact;
