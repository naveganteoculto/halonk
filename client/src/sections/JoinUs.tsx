import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useConfetti } from "@/hooks/use-confetti";
import { SiSolana, SiDiscord } from "react-icons/si";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import elonkLogo from "@assets/elonkmusk.png";

// Social links
const socialLinks = [
  { 
    icon: <FaTelegram className="text-4xl text-[#0088cc]" />, 
    title: "Telegram", 
    description: "Join the holy congregation", 
    href: "https://t.me/HALONKcoin" 
  },
  { 
    icon: <FaTwitter className="text-4xl text-[#1DA1F2]" />, 
    title: "Twitter/X", 
    description: "Follow divine announcements", 
    href: "https://twitter.com" 
  },
  { 
    icon: <SiDiscord className="text-4xl text-[#5865F2]" />,
    title: "Discord", 
    description: "Commune with the angels", 
    href: "https://discord.gg" 
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
    <section className="py-16 bg-gradient-to-b from-halonk-dark to-black text-white" id="join-us">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <img src={elonkLogo} alt="HALONK" className="w-16 h-16" />
          </motion.div>

          <motion.h2 
            className="font-comic font-bold text-3xl md:text-5xl mb-8 text-halonk-gold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join the Cult of $HALONK 👼
          </motion.h2>
          
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <SiSolana className="text-solana-purple text-xl" />
            <span className="text-solana-green font-medium">Official Solana Memecoin</span>
          </motion.div>
          
          <motion.p 
            className="text-xl mb-12 text-gray-300"
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
                className="bg-black/40 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-black/60 transition-all duration-300 transform hover:-translate-y-2 border border-halonk-gold/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ 
                  boxShadow: "0 20px 25px -5px rgba(240, 193, 75, 0.1), 0 10px 10px -5px rgba(240, 193, 75, 0.05)"
                }}
              >
                <div className="flex justify-center mb-4">{link.icon}</div>
                <h3 className="font-comic font-bold text-xl mb-2 text-halonk-gold">{link.title}</h3>
                <p className="text-gray-300 text-sm">{link.description}</p>
              </motion.a>
            ))}
          </div>
          
          <div className="flex justify-center">
            <motion.a 
              href="https://t.me/HALONKcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-halonk-gold hover:bg-halonk-gold/90 text-halonk-dark font-bold text-2xl py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 flex items-center cursor-pointer"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div
              className="bg-black/40 backdrop-blur-md rounded-2xl p-6 inline-block border border-halonk-gold/20"
              animate={{ boxShadow: ["0 0 10px rgba(240, 193, 75, 0.1)", "0 0 20px rgba(240, 193, 75, 0.2)", "0 0 10px rgba(240, 193, 75, 0.1)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center">
                <img src={elonkLogo} alt="HALONK" className="w-12 h-12 mr-3" />
                <div className="font-comic">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-xl text-halonk-gold">Blessed Wallets</p>
                    <SiSolana className="text-solana-purple" />
                  </div>
                  <p className="text-3xl font-bold text-halonk-gold">{walletCount.toLocaleString()}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
