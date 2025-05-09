import React from 'react';
import './VerticalCardGrid.scss';

type CardItem = {
  image: string;
  title: string;
  text: string;
};

type VerticalCardGridProps = {
  items: CardItem[];
};

export default function VerticalCardGrid({ items }: VerticalCardGridProps) {
  return (
    <section className="vertical-card-grid">
      {items.map((item, index) => (
        <div className="vertical-card" key={index}>
          <img src={item.image} alt={item.title} />
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
