import React from "react";
import { Link } from "react-router-dom"; // Importação necessária
import "./styles/Home.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <p>Oi 👋, Eu sou</p>
        <h1>David Pontes</h1>
        <h2>Desenvolvedor</h2>
        <p>Sou um profissional especializado em Back-End com Java na tecnologia Spring Boot</p>
        
        {/* Botão para ir para a página de artigos */}
        <Link to="/artigos">
          <button>Ver Artigos</button>
        </Link>
      </div>
      
      <div className="avatar">
        <img src={profileImage} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
