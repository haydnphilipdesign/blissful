import React from 'react';
import './steps2.css';

const Steps = () => {
    return (
        <section className="steps">
            <h2>How It Works</h2>
            <div className="steps-list">
                <div className="step-item">
                    <h3>Step 1: Contact Us</h3>
                    <p>Reach out to learn more about our offerings and schedule your retreat.</p>
                </div>
                <div className="step-item">
                    <h3>Step 2: Plan Your Visit</h3>
                    <p>We’ll help you plan a personalized experience to meet your needs.</p>
                </div>
                <div className="step-item">
                    <h3>Step 3: Begin Your Journey</h3>
                    <p>Join us in the Pocono Mountains for a transformative retreat.</p>
                </div>
            </div>
        </section>
    );
}

export default Steps;
