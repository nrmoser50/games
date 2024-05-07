// GamesPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const GamesPage = () => {
  return (
    <div className="games-page">
      <h2>Choose a Game:</h2>
      <ul>
        <li><Link to="/Games/TicTacToe">Tic Tac Toe</Link></li>
        <li><Link to="/Games/hangman">Hangman</Link></li>
        <li><Link to="/Games/connect-four">Connect Four</Link></li>
      </ul>
    </div>
  );
};

export default GamesPage;
