import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/ArtigoDetalhe.css";

const ArtigoDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook para navegação
  const [artigo, setArtigo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/artigos/listar")
      .then((response) => response.json())
      .then((data) => setArtigo(data[id])) // Pegamos o artigo pelo índice
      .catch((error) => console.error("Erro ao buscar artigo:", error));
  }, [id]);

  if (!artigo) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container">
      <h2 className="titulo-artigo">{artigo.titulo}</h2>
      <p className="autor"><strong>Autor:</strong> {artigo.autor}</p>
      <p className="conteudo">{artigo.conteudo}</p>

      {/* Botão de voltar */}
      <button className="botao-voltar" onClick={() => navigate(-1)}>
        Voltar
      </button>
    </div>
  );
};

export default ArtigoDetalhe;
