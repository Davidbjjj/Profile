// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        {/* Outros links */}
      </ul>
      <Link to="/case-studies" className="cta-button">Estudos</Link>
    </nav>
  );
}

export default Navbar;
