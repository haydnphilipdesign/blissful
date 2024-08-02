import React from 'react';
import './contact.css'; // Ensure you create and style this CSS file as well

const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Please fill out the form below or reach out directly via email or phone.</p>
            <form className="contact-form">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" required></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-info">
                <p>Email: info@blissfulexistencehealing.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </section>
    );
};

export default Contact;
