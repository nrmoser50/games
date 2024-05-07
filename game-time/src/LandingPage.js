// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Game Time!</h1>
      <p>Choose a game to play:</p>
      <div className="game-links">
        <Link to="/games/TicTacToe">Tic Tac Toe</Link>
        <Link to="/games/hangman">Hangman</Link>
        <Link to="/games/connect-four">Connect Four</Link>
      </div>
      <Link to="/Games">
        <button className="cta-button">Games</button>
      </Link>
    </div>
  );
};

export default LandingPage;



