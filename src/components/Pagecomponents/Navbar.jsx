import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // Use ref for timeout to avoid stale closure issues
  const timeoutRef = useRef(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowMenu(false), 1000); // 1 second delay
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
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
                [
                  'bg-blue-500',
                  'bg-yellow-400',
                  'bg-orange-500',
                  'bg-teal-400',
                  'bg-green-500',
                  'bg-purple-500',
                  'bg-pink-500',
                ][index]
              }`}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Settings Button on Right */}
        <div
          className="relative right-0 left-40"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
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
  );
};

export default Navbar;
