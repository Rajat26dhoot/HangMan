import { Route, Routes } from 'react-router-dom';
import './App.css';
import StartGame from './pages/StartGame';
import PlayGame from './pages/PlayGame';
import Home from './pages/Home';
import { WordContext } from './context/WordContext.js';
import { useState } from 'react';

function App() {
  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState('');

  return (
    <WordContext.Provider value={{ wordList, setWordList, word, setWord }}>
      <div>
        {/* Navbar */}
        <div className="navbar">
          <h1>Hangman</h1>
        </div>

        {/* Main Routes */}
        <Routes>
          <Route path="/start" element={<StartGame />} />
          <Route path="/play" element={<PlayGame />} />
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Centered Boxes with Buttons */}
        <div className="box-container">
          <div className="box">
            <button onClick={() => window.location.href = '/start'}>Single Player</button>
          </div>
          <div className="box">
            <button onClick={() => window.location.href = '/play'}>Multi Player</button>
          </div>
        </div>
      </div>
    </WordContext.Provider>
  );
}

export default App;
