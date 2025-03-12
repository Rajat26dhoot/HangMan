import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-center py-4 sm:py-6 border-t border-gray-300"
      style={{
        backgroundColor: 'rgba(245, 246, 246, 0.56)', // Same background as navbar
      }}
    >
      <p className="text-xs sm:text-sm md:text-base text-gray-800">
        &copy; {new Date().getFullYear()} Hangman Game. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
