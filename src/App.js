import React from 'react';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import About from './components/About';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
 
  return (
  <>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </>
  )
}

export default App;
