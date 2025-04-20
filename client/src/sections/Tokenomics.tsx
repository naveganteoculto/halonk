import { motion } from "framer-motion";

// Tokenomics data
const tokenomics = [
  { percentage: "69%", title: "Liquidity", description: "Blessed and locked in the divine vault 🔒" },
  { percentage: "15%", title: "Angel Devs", description: "Enlightened creators of $HALONK 👼" },
  { percentage: "10%", title: "Holy Community", description: "Faithful believers in the cause 🙏" },
  { percentage: "6.66%", title: "Burned in Hell", description: "Cast into the eternal flame 🔥", special: true }
];

export default function Tokenomics() {
  return (
    <section className="py-16 bg-heavenly dark:bg-gray-700" id="tokenomics">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-center font-comic font-bold text-3xl md:text-5xl mb-12 text-white glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Divine Tokenomics 📜✨
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {tokenomics.map((item, index) => (
            <motion.div 
              key={index}
              className="tarot-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl p-6 text-center transform transition-all duration-500 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                rotateY: 10,
                rotateX: 5,
                y: -10
              }}
            >
              <div className="flex justify-center mb-4">
                <div className={`w-24 h-24 ${item.special ? 'bg-blessed' : 'bg-divine'} rounded-full flex items-center justify-center text-4xl text-white`}>
                  {item.percentage}
                </div>
              </div>
              <h3 className="font-comic font-bold text-2xl mb-2 text-heavenly-dark dark:text-heavenly">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blessed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <h3 className="font-comic font-bold text-3xl ml-4 text-heavenly-dark dark:text-heavenly">$HALONK Prophecy</h3>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
              "And on the seventh day, Elonk said: 'Let there be moon.'"
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              The prophecy foretells that those who hold $HALONK shall be rewarded with divine gains. 
              The non-believers will watch from the depths of poverty as the faithful ascend to Valhalla.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
