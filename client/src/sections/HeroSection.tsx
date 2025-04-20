import { motion } from "framer-motion";
import { Cloud } from "@/assets/svgs/Cloud";
import { Halo } from "@/assets/svgs/Halo";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Handle marquee animation manually for better performance
    if (marqueeRef.current) {
      const animate = () => {
        if (!marqueeRef.current) return;
        
        const currentPos = parseInt(marqueeRef.current.style.transform.replace(/[^0-9-]/g, '') || '100');
        const newPos = currentPos <= -100 ? 100 : currentPos - 0.5;
        
        marqueeRef.current.style.transform = `translateX(${newPos}%)`;
        requestAnimationFrame(animate);
      };
      
      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }
  }, []);
  
  // Random floating animation for the Elonk image
  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  return (
    <section className="relative pt-10 pb-20 overflow-hidden dark:bg-gray-900">
      {/* Decorative clouds */}
      <motion.div 
        className="absolute top-10 left-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud width={100} height={60} opacity={0.7} />
      </motion.div>
      
      <motion.div 
        className="absolute top-20 right-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Cloud width={70} height={40} opacity={0.6} />
      </motion.div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="font-comic font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-heavenly-dark leading-tight dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elonk has <span className="text-blessed">ascended</span>.<br/> 
            So will your <span className="text-holy dark:text-divine">bags</span>. 💰
          </motion.h1>
          
          <div className="relative mb-10">
            {/* Animated Elonk with halo */}
            <div className="elonk-container mx-auto relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              >
                <Halo size={80} />
              </motion.div>
              
              <motion.div 
                className="rounded-full mx-auto overflow-hidden w-full h-full border-4 border-divine shadow-xl halo"
                animate={floatingAnimation}
              >
                <div className="w-full h-full bg-divine flex items-center justify-center text-9xl">
                  😇
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-gray-700 max-w-2xl mx-auto dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The first <span className="font-bold">divinely blessed</span> memecoin that will take your portfolio to the heavens 😇✨
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="https://app.uniswap.org/" 
              target="_blank"
              rel="noopener noreferrer"
              className="buy-button bg-blessed hover:bg-blessed/90 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 flex items-center"
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.1) drop-shadow(0 0 5px rgba(255, 107, 107, 0.5))"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span>🚀 Buy $HALONK</span>
            </motion.a>
            
            <motion.a 
              href="#join-us" 
              className="border-2 border-heavenly-dark bg-transparent hover:bg-heavenly-dark/10 text-heavenly-dark font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 dark:border-heavenly dark:text-heavenly"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Learn More 👼
            </motion.a>
          </div>
          
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="marquee relative overflow-hidden whitespace-nowrap">
              <div 
                ref={marqueeRef}
                className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 inline-block transform translate-x-full"
              >
                🔥 $HALONK TO THE MOON 🚀 BLESSED BY ELONK 😇 69% LIQUIDITY 🔥 ANGELIC GAINS 💸 HOLY PUMPS 🙏
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
