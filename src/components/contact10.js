import React from 'react';
import './contact10.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Us</h2>
            <p>Ready to start your healing journey? Reach out to us today.</p>
            <form className="contact-form">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
