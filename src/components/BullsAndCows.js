// src/components/BullsAndCows.js
import React, { useState, useEffect } from 'react';
import './styles/BullsAndCows.css';

function BullsAndCows() {
  const [secretCode, setSecretCode] = useState('');
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    generateSecretCode();
  }, []);

  // Função para gerar um código secreto de 4 dígitos
  function generateSecretCode() {
    const digits = [];
    while (digits.length < 4) {
      const randomDigit = Math.floor(Math.random() * 10).toString();
      if (!digits.includes(randomDigit)) {
        digits.push(randomDigit);
      }
    }
    setSecretCode(digits.join(''));
  }

  // Função para lidar com tentativas
  function handleGuess() {
    if (guess.length !== 4 || !/^\d+$/.test(guess)) {
      alert('Por favor, insira uma sequência de 4 dígitos únicos.');
      return;
    }

    // Cálculo de Bulls e Cows
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
      if (guess[i] === secretCode[i]) {
        bulls++;
      } else if (secretCode.includes(guess[i])) {
        cows++;
      }
    }

    // Atualiza a lista de tentativas
    setAttempts([{ guess, bulls, cows }, ...attempts]);
    setGuess('');
  }

  return (
    <div className="bulls-and-cows">
      <h1>Bulls and Cows</h1>
      <button className="reveal-button" onClick={() => alert(`Código secreto: ${secretCode}`)}>
        Revelar Código
      </button>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Digite sua tentativa"
        maxLength="4"
      />
      <button onClick={handleGuess}>Enviar Tentativa</button>

      <div className="attempts-list">
        <h2>Tentativas Anteriores</h2>
        <ul>
          {attempts.map((attempt, index) => (
            <li key={index}>
              <span>Tentativa: {attempt.guess}</span>
              <span> | Bulls: {attempt.bulls}</span>
              <span> | Cows: {attempt.cows}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BullsAndCows;
