import { motion } from "framer-motion";

// How to buy steps
const steps = [
  { 
    number: 1, 
    title: "Create a Wallet", 
    description: "Install MetaMask or any wallet blessed by Elonk 👼" 
  },
  { 
    number: 2, 
    title: "Get ETH", 
    description: "Sacrifice your fiat for the holy Ethereum 💰" 
  },
  { 
    number: 3, 
    title: "Ape into $HALONK", 
    description: "Connect to Uniswap and swap ETH for $HALONK 🦄" 
  },
  { 
    number: 4, 
    title: "Pray for Moon", 
    description: "Hold tight and wait for divine intervention 🌕" 
  }
];

export default function HowToBuy() {
  return (
    <section className="py-16 bg-heavenly-light dark:bg-gray-900" id="how-to-buy">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-center font-comic font-bold text-3xl md:text-5xl mb-12 text-heavenly-dark dark:text-heavenly"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How to Buy $HALONK 🛒
        </motion.h2>
        
        <motion.p 
          className="text-center text-xl mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
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
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-heavenly-dark rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="font-comic font-bold text-xl mb-4 text-heavenly-dark dark:text-heavenly">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
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
          <div className="bg-divine/20 dark:bg-divine/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-comic font-bold text-2xl mb-4 text-heavenly-dark dark:text-heavenly">$HALONK Contract Address</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between shadow-md">
              <p className="font-mono text-sm truncate dark:text-white">0xHAL0NK6969...420BLESSED</p>
              <button 
                className="text-heavenly-dark hover:text-blessed transition-colors dark:text-heavenly"
                aria-label="Copy contract address"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">Always verify the contract address before making a transaction!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
