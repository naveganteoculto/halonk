import { motion } from "framer-motion";
import { useRef } from "react";

// Sample meme data (no real images, using emoji placeholders)
const memes = [
  { id: 1, emoji: "👼", title: "Divine Gains 🚀", username: "@hodler69", likes: 420 },
  { id: 2, emoji: "💸", title: "Blessed Portfolio 😇", username: "@moonboi", likes: 369 },
  { id: 3, emoji: "🙏", title: "Holy Pump Incoming 🙏", username: "@cryptoangel", likes: 777 },
  { id: 4, emoji: "💎", title: "To Valhalla! 💎", username: "@diamondhands", likes: 690 }
];

export default function MemeWall() {
  const memeContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (memeContainerRef.current) {
      memeContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (memeContainerRef.current) {
      memeContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-16 bg-white dark:bg-gray-800 relative overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-center font-comic font-bold text-3xl md:text-5xl mb-12 text-heavenly-dark dark:text-heavenly"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meme Wall of Fame 🏆
        </motion.h2>
        
        <motion.p 
          className="text-center text-xl mb-10 max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our blessed community creates the holiest of memes. Gaze upon their glory and be enlightened! 👼
        </motion.p>
        
        <div className="relative">
          <motion.div 
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button 
              onClick={scrollLeft}
              className="bg-heavenly text-white p-3 rounded-full shadow-md hover:bg-heavenly-dark transition-colors"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </motion.div>
          
          <motion.div 
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button 
              onClick={scrollRight}
              className="bg-heavenly text-white p-3 rounded-full shadow-md hover:bg-heavenly-dark transition-colors"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
          
          <div 
            ref={memeContainerRef}
            className="flex overflow-x-auto pb-6 snap-x snap-mandatory meme-container scrollbar-hide"
          >
            {memes.map((meme, index) => (
              <motion.div 
                key={meme.id}
                className="meme-card snap-center flex-shrink-0 w-80 mx-3 bg-heavenly-light dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="w-full h-64 bg-heavenly/50 dark:bg-heavenly-dark/30 flex items-center justify-center text-[120px]">
                  {meme.emoji}
                </div>
                <div className="p-4">
                  <p className="font-comic font-bold dark:text-white">{meme.title}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500 dark:text-gray-300">{meme.username}</span>
                    <div className="flex">
                      <span className="mr-1">🔥</span>
                      <span className="dark:text-white">{meme.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <motion.button 
            className="bg-divine hover:bg-divine/90 text-white font-bold py-3 px-6 rounded-full shadow-md transform transition-all duration-300 hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Upload Your Divine Meme 🙏
          </motion.button>
        </div>
      </div>
    </section>
  );
}
