import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Dining from './pages/Dining';
import Entertainment from './pages/Entertainment';
import Lodging from './pages/Lodging';
import Transportation from './pages/Transportation';
import ContactForm from './pages/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/taniti-travel">
      <div className="page-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/lodging" element={<Lodging />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/contact-popup" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
