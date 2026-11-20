import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Career from './pages/Career';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
