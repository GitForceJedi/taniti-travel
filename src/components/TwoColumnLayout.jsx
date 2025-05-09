import React from 'react';
import './TwoColumnLayout.css';

export default function TwoColumnLayout({ left, right }) {
  return (
    <section className="two-column main-inner">
      <div className="column">{left}</div>
      <div className="column">{right}</div>
    </section>
  );
}
