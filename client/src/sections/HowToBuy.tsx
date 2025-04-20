import { motion } from "framer-motion";
import { SiSolana } from "react-icons/si";
import { FaWallet, FaRocket } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import elonkLogo from "@assets/elonkmusk.png";

// How to buy steps
const steps = [
  { 
    number: 1, 
    title: "Create a Wallet", 
    description: "Install Phantom or Solflare wallet blessed by Elonk 👼",
    icon: <FaWallet className="text-solana-purple text-xl" />
  },
  { 
    number: 2, 
    title: "Get SOL", 
    description: "Sacrifice your fiat for the holy Solana 💰",
    icon: <SiSolana className="text-solana-purple text-xl" />
  },
  { 
    number: 3, 
    title: "Ape into $HALONK", 
    description: "Connect to Raydium and swap SOL for $HALONK 🚀",
    icon: <FaRocket className="text-solana-purple text-xl" />
  },
  { 
    number: 4, 
    title: "Pray for Moon", 
    description: "Hold tight and wait for divine intervention 🌕",
    icon: <FaMoon className="text-solana-purple text-xl" />
  }
];

export default function HowToBuy() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-halonk-light/50 dark:from-black dark:to-halonk-dark/50" id="how-to-buy">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex justify-center items-center gap-3 mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <img src={elonkLogo} alt="HALONK" className="w-10 h-10" />
          <span className="text-halonk-dark dark:text-halonk-gold font-medium">ON SOLANA NETWORK</span>
        </motion.div>
        
        <motion.h2 
          className="text-center font-comic font-bold text-3xl md:text-5xl mb-12 text-halonk-dark dark:text-halonk-gold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How to Buy $HALONK 🛒
        </motion.h2>
        
        <motion.p 
          className="text-center text-xl mb-12 max-w-3xl mx-auto text-halonk-dark dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Follow these blessed steps to secure your spot in crypto heaven! 🙏
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white/70 backdrop-blur-sm dark:bg-halonk-dark/70 rounded-2xl p-6 shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-halonk-gold/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-halonk-gold text-halonk-dark rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="font-comic font-bold text-xl mb-2 text-halonk-dark dark:text-halonk-gold flex items-center justify-center">
                {step.title}
                {step.icon && <span className="ml-2">{step.icon}</span>}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="bg-white/70 backdrop-blur-sm dark:bg-halonk-dark/70 rounded-2xl p-8 max-w-3xl mx-auto border border-halonk-gold/20">
            <div className="flex items-center justify-center mb-4 gap-2">
              <SiSolana className="text-solana-purple text-xl" />
              <h3 className="font-comic font-bold text-2xl text-halonk-dark dark:text-halonk-gold">$HALONK Contract Address</h3>
            </div>
            <div className="bg-white dark:bg-black/50 rounded-lg p-4 flex items-center justify-between shadow-md border border-halonk-gold/20">
              <p className="font-mono text-sm truncate text-halonk-dark dark:text-halonk-gold/90">HAL0NK69solana...420BLESSED</p>
              <button 
                className="text-halonk-dark hover:text-halonk-gold transition-colors dark:text-halonk-gold dark:hover:text-white"
                aria-label="Copy contract address"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <motion.div 
              className="mt-4 flex items-center justify-center gap-3"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm text-gray-700 dark:text-gray-300">Verified on</span>
              <div className="flex items-center">
                <SiSolana className="text-solana-purple mr-1" />
                <span className="text-solana-green font-medium">Solscan</span>
              </div>
            </motion.div>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Always verify the contract address before making a transaction!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
