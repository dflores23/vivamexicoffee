// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'; // Import the Home component
import Coffee from './components/Coffee'; // Import the Coffee
import SpecialCoffee from './components/SpecialCoffee';
import About from './components/About'; // Import the About component
import './App.css'; // Import global CSS for layout



function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="/special-coffee" element={<SpecialCoffee />} />
            <Route path="about" element={<About/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
