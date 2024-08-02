import React from 'react';
import './services.css'; // Ensure you create and style this CSS file as well

const Services = () => {
    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="service-list">
                <div className="service-item">
                    <h3>Equine Therapy</h3>
                    <p>Experience emotional healing and personal growth through therapeutic interactions with our gentle horses.</p>
                </div>
                <div className="service-item">
                    <h3>Meditation Sessions</h3>
                    <p>Join our guided meditation sessions to achieve mindfulness and reduce stress in a serene environment.</p>
                </div>
                <div className="service-item">
                    <h3>Wellness Retreats</h3>
                    <p>Immerse yourself in a holistic healing experience combining equine therapy, meditation, and nature.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
