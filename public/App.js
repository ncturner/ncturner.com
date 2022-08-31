import React, { useState } from 'react'
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Work from './pages/work';
import About from './pages/about';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  };

  return (
    <Router>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;