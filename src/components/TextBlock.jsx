import React from 'react';

export default function TextBlock({ heading, children }) {
  return (
    <section className="text-block main-inner">
      <h2>{heading}</h2>
      {children}
    </section>
  );
}
