import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-heavenly-light/80 shadow-md dark:bg-gray-800/80 dark:text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-divine halo flex items-center justify-center text-2xl">
            😇
          </div>
          <div className="ml-3">
            <h1 className="font-comic font-bold text-xl md:text-2xl text-heavenly-dark dark:text-heavenly">$HALONK</h1>
            <p className="text-xs text-gray-600 dark:text-gray-300">AngelCoin Blessed by Elonk</p>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-heavenly-dark dark:text-heavenly focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="font-comic font-bold text-heavenly-dark dark:text-heavenly hover:text-blessed transition-colors">About</a>
          <a href="#tokenomics" className="font-comic font-bold text-heavenly-dark dark:text-heavenly hover:text-blessed transition-colors">Tokenomics</a>
          <a href="#how-to-buy" className="font-comic font-bold text-heavenly-dark dark:text-heavenly hover:text-blessed transition-colors">How to Buy</a>
          <a href="#join-us" className="font-comic font-bold text-heavenly-dark dark:text-heavenly hover:text-blessed transition-colors">Join Us</a>
          <motion.a 
            href="https://app.uniswap.org/" 
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button bg-blessed hover:bg-blessed/90 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center"
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.1) drop-shadow(0 0 5px rgba(255, 107, 107, 0.5))"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🚀 Buy $HALONK</span>
          </motion.a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <motion.nav 
        className={`px-4 py-3 bg-white dark:bg-gray-700 shadow-lg md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
          display: isMenuOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-4">
          <a href="#about" className="font-comic font-bold text-heavenly-dark dark:text-heavenly hover:text-blessed transition-colors">About</a>
          <a href="#tokenomics" className="font-comic font-bold text-heavenly-dark dark:text-heavenly hover:text-blessed transition-colors">Tokenomics</a>
          <a href="#how-to-buy" className="font-comic font-bold text-heavenly-dark dark:text-heavenly hover:text-blessed transition-colors">How to Buy</a>
          <a href="#join-us" className="font-comic font-bold text-heavenly-dark dark:text-heavenly hover:text-blessed transition-colors">Join Us</a>
          <motion.a 
            href="https://app.uniswap.org/" 
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button bg-blessed hover:bg-blessed/90 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🚀 Buy $HALONK</span>
          </motion.a>
        </div>
      </motion.nav>
    </header>
  );
}
