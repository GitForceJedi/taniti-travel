import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SlideshowHero.css';

export default function SlideshowHero({ slides }) {
  return (
    <Carousel fade className="slideshow-carousel" interval={2000} pause="hover">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-layered-wrapper">
            <img
              src={slide.image}
              alt={slide.heading || `Slide ${index + 1}`}
              className="carousel-image"
            />
            <div className="carousel-overlay" />
            <Carousel.Caption>
              <h1>{slide.heading}</h1>
              <p>{slide.text}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
