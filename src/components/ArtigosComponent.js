import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/ArtigosComponent.css";

const ArtigosComponent = () => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    fetch("https://projetofaculdade-txtp.onrender.com/artigos/listar")
      .then((response) => response.json())
      .then((data) => setArtigos(data))
      .catch((error) => console.error("Erro ao buscar artigos:", error));
  }, []);

  return (
    <div className="container">
      <h2 className="titulo">Lista de Artigos</h2>
      <div className="artigos-grid">
        {artigos.map((artigo, index) => (
          <div key={index} className="card">
            <h3 className="titulo-artigo">{artigo.titulo}</h3>
            <p className="autor"><strong>Autor:</strong> {artigo.autor}</p>
            <p className="conteudo">
              {artigo.conteudo.length > 100
                ? `${artigo.conteudo.substring(0, 100)}...`
                : artigo.conteudo}
            </p>
            <Link to={`/artigo/${index}`} className="botao-vermais">
              Ver Mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtigosComponent;
