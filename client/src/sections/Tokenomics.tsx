import { motion } from "framer-motion";
import { SiSolana } from "react-icons/si";
import elonkLogo from "@assets/elonkmusk.png";

// Tokenomics data
const tokenomics = [
  { percentage: "69%", title: "Liquidity", description: "Blessed and locked in the divine vault 🔒" },
  { percentage: "15%", title: "Angel Devs", description: "Enlightened creators of $HALONK 👼" },
  { percentage: "10%", title: "Holy Community", description: "Faithful believers in the cause 🙏" },
  { percentage: "6.66%", title: "Burned in Hell", description: "Cast into the eternal flame 🔥", special: true }
];

export default function Tokenomics() {
  return (
    <section className="py-16 bg-gradient-to-b from-halonk-gold/20 to-halonk-light dark:from-halonk-dark dark:to-black" id="tokenomics">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SiSolana className="text-solana-purple text-2xl" />
          <span className="text-solana-green font-medium">Solana Network</span>
        </motion.div>

        <motion.h2 
          className="text-center font-comic font-bold text-3xl md:text-5xl mb-12 text-halonk-dark dark:text-halonk-gold"
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
              className="tarot-card bg-white/70 backdrop-blur-sm dark:bg-halonk-dark/70 rounded-2xl overflow-hidden shadow-xl p-6 text-center transform transition-all duration-500 hover:shadow-2xl border border-halonk-gold/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ 
                rotateY: 10,
                rotateX: 5,
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(240, 193, 75, 0.2), 0 10px 10px -5px rgba(240, 193, 75, a0.1)"
              }}
            >
              <div className="flex justify-center mb-4">
                <div className={`w-24 h-24 ${item.special ? 'bg-solana-purple' : 'bg-halonk-gold'} rounded-full flex items-center justify-center text-4xl ${item.special ? 'text-white' : 'text-halonk-dark'} font-bold`}>
                  {item.percentage}
                </div>
              </div>
              <h3 className="font-comic font-bold text-2xl mb-2 text-halonk-dark dark:text-halonk-gold">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
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
          <div className="bg-white/70 backdrop-blur-sm dark:bg-halonk-dark/70 rounded-2xl p-8 shadow-xl border border-halonk-gold/20">
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="relative mr-4"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img src={elonkLogo} alt="HALONK" className="w-16 h-16" />
              </motion.div>
              <h3 className="font-comic font-bold text-3xl text-halonk-dark dark:text-halonk-gold">$HALONK Prophecy</h3>
            </div>
            <p className="text-xl text-halonk-dark dark:text-gray-300 mb-4">
              "And on the seventh day, Elonk said: 'Let there be moon.'"
            </p>
            <p className="text-xl text-halonk-dark dark:text-gray-300">
              The prophecy foretells that those who hold $HALONK shall be rewarded with divine gains on the 
              <span className="inline-flex items-center mx-1"><SiSolana className="mx-1 text-solana-purple" /><span className="text-solana-green font-medium">Solana</span></span> 
              network. The non-believers will watch from the depths of poverty as the faithful ascend to Valhalla.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
