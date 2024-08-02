import React from 'react';
import './testimonial17.css';

const Testimonials = () => {
    const testimonials = [
        { name: "John Doe", text: "Blissful Existence Healing Acres changed my life. The equine therapy and serene environment helped me find inner peace." },
        { name: "Jane Smith", text: "The meditation sessions were transformative. I left feeling refreshed and more connected to myself." },
        { name: "Mike Johnson", text: "The personalized therapy sessions were exactly what I needed. Highly recommend this retreat center." }
    ];

    return (
        <section className="testimonials">
            <h2>What Our Guests Say</h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <p>"{testimonial.text}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
