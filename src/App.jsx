import { Route, Routes, useNavigate } from 'react-router-dom';
import StartGame from './pages/StartGame';
import PlayGame from './pages/PlayGame';
import Home from './pages/Home';
import { WordContext } from './context/WordContext.js';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

function App() {
  const [wordList, setWordList] = useState([]);
  const [word, setWord] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

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
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="fixed top-0 left-0 w-full z-50 border-black"
          style={{
            borderBottomWidth: '0.8px',
            backgroundColor: 'rgba(245, 246, 246, 0.56)',
          }}
        >
          <div className="max-w-6xl mx-auto flex items-center py-4 px-6">
            {/* Hangman Logo in Center */}
            <div className="flex-grow flex justify-center">
              {['H', 'A', 'N', 'G', 'M', 'A', 'N'].map((letter, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
                    index === 0
                      ? 'bg-blue-500'
                      : index === 1
                      ? 'bg-yellow-400'
                      : index === 2
                      ? 'bg-orange-500'
                      : index === 3
                      ? 'bg-teal-400'
                      : index === 4
                      ? 'bg-green-500'
                      : index === 5
                      ? 'bg-purple-500'
                      : 'bg-pink-500'
                  }`}
                >
                  {letter}
                </div>
              ))}
            </div>

            {/* Settings Button on Right */}
            <div className="relative right-0 left-40">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="text-gray-800 hover:text-black transition duration-300"
              >
                <Settings className="w-7 h-7" />
              </button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <button
                      onClick={() => {
                        navigate('/');
                        setShowMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                    >
                      Home
                    </button>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between items-center mb-2">
                    <button
                      onClick={() => {
                        navigate('/start');
                        setShowMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                    >
                      Start
                    </button>
                  </div>
                  <hr className="my-2 border-gray-300" />
                  <div className="flex justify-between items-center mb-2">
                    <button
                      onClick={() => {
                        navigate('/play');
                        setShowMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                    >
                      Play
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.nav>




        {/* Main Content */}
        <main className="flex-1 mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mt-12 px-4"
          >
            <Routes>
              <Route path="/start" element={<StartGame />} />
              <Route path="/play" element={<PlayGame />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center py-4 border-t border-gray-300"
          style={{
            backgroundColor: 'rgba(245, 246, 246, 0.56)', // Same background as navbar
          }}
        >
          <p className="text-sm text-gray-800">
            &copy; {new Date().getFullYear()} Hangman Game. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </WordContext.Provider>
  );
}

export default App;
