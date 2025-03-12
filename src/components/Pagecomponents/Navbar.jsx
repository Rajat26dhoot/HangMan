import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const timeoutRef = useRef(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowMenu(false), 1000);
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
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Hangman Logo in Center */}
        <div className="flex-grow flex justify-center">
          {['H', 'A', 'N', 'G', 'M', 'A', 'N'].map((letter, index) => (
            <div
              key={index}
              className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-white font-bold ${
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

        <div
          className="relative md:right-[-140px]" // Shift container to the left on desktop
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-800 hover:text-black transition duration-300 md:mr-2"
          >
            <Settings className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          {showMenu && (
            <div className="absolute right-0 w-48 md:w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-3">
              <button
                onClick={() => {
                  navigate('/');
                  setShowMenu(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black transition"
              >
                Home
              </button>
              <hr className="my-2 border-gray-300" />
              <button
                onClick={() => {
                  navigate('/start');
                  setShowMenu(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black transition"
              >
                Multi Player
              </button>
              <hr className="my-2 border-gray-300" />
              <button
                onClick={() => {
                  navigate('/play');
                  setShowMenu(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-black transition"
              >
                Single Player
              </button>
            </div>
          )}
        </div>


      </div>
    </motion.nav>
  );
};

export default Navbar;
