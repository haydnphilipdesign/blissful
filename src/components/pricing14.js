import React from 'react';
import './pricing14.css';

const Pricing = () => {
    return (
        <section className="pricing">
            <h2>Our Retreat Packages</h2>
            <div className="pricing-list">
                <div className="pricing-item">
                    <h3>Day Retreat</h3>
                    <p>Enjoy a full day of equine therapy, meditation, and relaxation in nature.</p>
                    <p>$200</p>
                </div>
                <div className="pricing-item">
                    <h3>Weekend Retreat</h3>
                    <p>Immerse yourself in a weekend of holistic healing and personal growth.</p>
                    <p>$500</p>
                </div>
                <div className="pricing-item">
                    <h3>Week-long Retreat</h3>
                    <p>A transformative week combining all our offerings for a deep healing experience.</p>
                    <p>$1500</p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
