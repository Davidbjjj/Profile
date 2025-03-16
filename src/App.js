import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projeto from "./components/Projeto";
import BullsAndCows from "./components/BullsAndCows";
import ArtigosComponent from "./components/ArtigosComponent";
import ArtigoDetalhe from "./components/ArtigoDetalhe"; // Importando a página do artigo

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projeto />} />
        <Route path="/projetos/bulls-and-cows" element={<BullsAndCows />} />
        <Route path="/artigos" element={<ArtigosComponent />} />
        <Route path="/artigo/:id" element={<ArtigoDetalhe />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;
