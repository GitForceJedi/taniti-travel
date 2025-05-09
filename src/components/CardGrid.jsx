import React from 'react';
import { openContactForm } from '../utils/openContact';
import './CardGrid.css';

export default function CardGrid({ items }) {
  return (
    <div className="main-inner card-grid">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-image-wrapper">
            <img src={item.image} alt={item.title} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>

          {item.cta &&
            (item.cta.popup ? (
              <a
                href="#"
                className="card-cta"
                onClick={(e) => {
                  e.preventDefault();
                  openContactForm(800, 1000);
                }}
              >
                {item.cta.label}
              </a>
            ) : (
              <a href={item.cta.url} className="card-cta">
                {item.cta.label}
              </a>
            ))}
        </div>
      ))}
    </div>
  );
}
