import React from 'react';
import { openContactForm } from '../utils/openContact';
import './ContactPopup.css';

export default function ContactPopup() {
  return (
    <button
      className="card-cta cont-button"
      onClick={() => openContactForm(800, 1000)}
    >
      Contact Us
    </button>
  );
}
