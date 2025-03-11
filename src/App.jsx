import { WordContext } from './context/WordContext.js';
import { useState } from 'react';
import Navbar from './components/Pagecomponents/Navbar.jsx';
import MainContent from './components/Pagecomponents/MainContent.jsx';
import Footer from './components/Pagecomponents/Footer.jsx';

function App() {
  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState('');

  return (
    <WordContext.Provider value={{ wordList, setWordList, word, setWord }}>
      <div
        className="min-h-screen flex flex-col text-gray-200 font-comfortaa"
        style={{
          backgroundImage: `url('https://hangmanwordgame.com/static/img/graph_paper.jpg')`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <MainContent />

        {/* Footer */}
        <Footer />
      </div>
    </WordContext.Provider>
  );
}

export default App;
