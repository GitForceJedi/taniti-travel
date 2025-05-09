import React from 'react';
import './Hero.css';

export default function Hero({ title, subtitle, image }) {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
