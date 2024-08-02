import React from 'react';
import './footer4.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Blissful Existence Healing Acres. All Rights Reserved.</p>
            <p>Follow us on social media for updates and inspiration.</p>
        </footer>
    );
}

export default Footer;
