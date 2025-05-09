import React from 'react';
import './ImageText.css';

export default function ImageText({ image, children, reverse, cta }) {
  return (
    <section className={`image-text main-inner ${reverse ? 'reverse' : ''}`}>
      <div className="image-block">
        <img src={image} alt="Decorative" />
      </div>
      <div className="text-block">
        <div className="text-content">{children}</div>
        {cta && (
          <a href={cta.url} className="image-text-cta">
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}
