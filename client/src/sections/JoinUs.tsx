import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useConfetti } from "@/hooks/use-confetti";

// Social links
const socialLinks = [
  { 
    icon: "💬", 
    title: "Telegram", 
    description: "Join the holy congregation", 
    href: "https://t.me/HALONKcoin" 
  },
  { 
    icon: "🐦", 
    title: "Twitter/X", 
    description: "Follow divine announcements", 
    href: "https://twitter.com" 
  },
  { 
    icon: "📜", 
    title: "Medium", 
    description: "Read the sacred texts", 
    href: "https://medium.com" 
  }
];

export default function JoinUs() {
  const [walletCount, setWalletCount] = useState(41950);
  const targetCount = 42069;
  const triggerConfetti = useConfetti();
  
  // Wallet counter animation
  useEffect(() => {
    if (walletCount < targetCount) {
      const interval = setInterval(() => {
        setWalletCount(prev => {
          const increment = Math.floor(Math.random() * 5) + 1;
          const newCount = prev + increment > targetCount ? targetCount : prev + increment;
          return newCount;
        });
      }, Math.random() * 1000 + 500);
      
      return () => clearInterval(interval);
    }
  }, [walletCount]);
  
  return (
    <section className="py-16 bg-heavenly-dark text-white dark:bg-gray-800" id="join-us">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            className="font-comic font-bold text-3xl md:text-5xl mb-8 glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join the Cult of $HALONK 👼
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-12 text-heavenly-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Only the chosen shall pump to the promised land. Will you be among the blessed?
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="text-4xl mb-4">{link.icon}</div>
                <h3 className="font-comic font-bold text-xl mb-2">{link.title}</h3>
                <p className="text-heavenly-light text-sm">{link.description}</p>
              </motion.a>
            ))}
          </div>
          
          <div className="flex justify-center">
            <motion.a 
              href="https://t.me/HALONKcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blessed hover:bg-blessed/90 text-white font-bold text-2xl py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onMouseOver={triggerConfetti}
              onClick={triggerConfetti}
            >
              🙏 Join the Cult 🙏
            </motion.a>
          </div>
          
          <motion.div 
            className="mt-12"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="bg-heavenly/10 backdrop-blur-md rounded-2xl p-6 inline-block">
              <div className="flex items-center">
                <div className="text-2xl mr-3">👼</div>
                <div className="font-comic">
                  <p className="font-bold text-xl">$HALONK Blessed Wallets</p>
                  <p className="text-3xl font-bold text-divine">{walletCount.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
