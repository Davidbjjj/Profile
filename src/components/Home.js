import React from 'react';
import './styles/Home.css';
import profileImage from '../assets/profile.jpg';

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <p>Oi 👋, Eu sou</p>
        <h1>David Pontes</h1>
        <h2>Desenvolvedor</h2>
        <p>Sou um profissional especializado em Back-End com Java na tecnologia Spring Boot</p>
        <button className="hire-me-button">Artigos</button>
      </div>
      <div className="avatar">
        <img src={profileImage} alt="Avatar" /> {}
      </div>
    </div>
  );
}

export default Home;
