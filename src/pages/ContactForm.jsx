import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="popup-form-wrapper">
      <h2>Contact Us</h2>
      {submitted ? (
        <p className="thanks">Thanks! We'll be in touch shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="popup-form">
          <label>
            Name
            <input
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="card-cta">
            Send
          </button>
        </form>
      )}
    </div>
  );
}
