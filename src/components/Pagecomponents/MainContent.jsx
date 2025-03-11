import { Route, Routes } from 'react-router-dom';
import StartGame from '../../pages/StartGame';
import PlayGame from '../../pages/PlayGame';
import Home from '../../pages/Home';
import { motion } from 'framer-motion';

const MainContent = () => {
  return (
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
  );
};

export default MainContent;
