// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import GamesPage from './Components/Games/GamesPage'; 
import TicTacToe from './Components/Games/TicTacToe'; // Update the import path for TicTacToe component
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav className="navbar">
            <div className="container">
              <h1 className="logo">Game Time</h1>
              {/* Add navigation links here */}
            </div>
          </nav>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/TicTacToe" element={<TicTacToe />} />
            {/* Add more routes here for other games */}
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            {/* Footer content */}
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;












