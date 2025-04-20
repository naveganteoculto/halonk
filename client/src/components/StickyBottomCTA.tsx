import { motion } from "framer-motion";

export default function StickyBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-heavenly-dark/90 backdrop-filter backdrop-blur-md md:hidden p-4 shadow-md z-40 dark:bg-gray-900/90">
      <motion.a 
        href="https://app.uniswap.org/" 
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-blessed hover:bg-blessed/90 text-white font-bold py-3 rounded-full text-center shadow-lg"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        🚀 Buy $HALONK Now!
      </motion.a>
    </div>
  );
}
