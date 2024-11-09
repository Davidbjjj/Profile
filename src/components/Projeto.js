// src/components/Projeto.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Projeto.css';

function Projeto() {
  const projetos = [
    {
      id: 1,
      nome: 'Bulls and Cows',
      descricao: 'Um jogo de adivinhação com Bulls e Cows',
      link: '/projetos/bulls-and-cows'
    },
    // Outros projetos
  ];

  return (
    <div className="projeto-container">
      <h1>Meus Projetos</h1>
      <div className="projetos-list">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="projeto-card">
            <h2>{projeto.nome}</h2>
            <p>{projeto.descricao}</p>
            <Link to={projeto.link}>
              <button className="acessar-button">Acessar Projeto</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projeto;
