// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projeto from './components/Projeto';
import BullsAndCows from './components/BullsAndCows';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projeto />} />
        <Route path="/projetos/bulls-and-cows" element={<BullsAndCows />} />
      </Routes>
    </Router>
  );
}

export default App;
