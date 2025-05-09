import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { openContactForm } from '../utils/openContact';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-container">
          <img src="assets/t-f94d0d-logo.png" alt="Taniti Logo" />
        </div>

        <div className="title-and-nav">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dining">Dining</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/lodging">Lodging</Link>
              </li>
              <li>
                <Link to="/transportation">Transportation</Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openContactForm(800, 1000);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
