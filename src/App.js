import React, { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Resume from './components/Resume.js';
import Footer from './components/Footer.js/Footer';

function App() {
  const [currentCategory, setCurrentCategory] = useState('About');

  const renderCategory = () => {
    if (currentCategory === 'About') {
      return <About />
    }
    if (currentCategory === 'Portfolio') {
      return <Portfolio />
    }
    if (currentCategory === 'Contact') {
      return <Contact />
    }
    if (currentCategory === 'Resume') {
      return <Resume />
    }
  };

  const handleCategoryChange = (category) => setCurrentCategory(category);

  return (
    <div className="App">
      <Header />
      <Nav currentCategory={currentCategory} handleCategoryChange={handleCategoryChange} />
      {renderCategory()}
      <Footer />
    </div>
  );
}

export default App;
