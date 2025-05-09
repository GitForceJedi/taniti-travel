import React from 'react';
import './SplitCard.css';

export default function SplitCardGrid({ items }) {
  return (
    <section className="split-card-grid main-inner">
      {items.map((item, index) => (
        <div
          className={`split-card ${item.reverse ? 'reverse' : ''}`}
          key={index}
        >
          <div className="split-card-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="split-card-content">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.cta && (
              <a
                href={item.cta.url}
                className={`split-card-cta ${item.reverse ? 'align-left' : ''}`}
              >
                {item.cta.label}
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
