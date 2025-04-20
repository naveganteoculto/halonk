import { FaTwitter } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import elonkLogo from "@assets/elonkmusk.png";

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-b from-halonk-dark to-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src={elonkLogo} alt="HALONK" className="h-10 w-10" />
              <p className="font-comic font-bold text-lg ml-3 text-halonk-gold">$HALONK</p>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <SiSolana className="text-solana-purple mr-1" />
              <span className="text-solana-green">Solana Network</span>
            </div>
            <p className="text-sm mt-2 text-gray-400">© {new Date().getFullYear()} The Divine $HALONK. All rights blessed.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://x.com/CryptoNobler" target="_blank" rel="noopener noreferrer" className="text-halonk-gold hover:text-white transition-colors">
              <div className="flex items-center">
                <FaTwitter className="h-6 w-6 mr-1" />
                <span className="text-xs">$HALONK</span>
              </div>
            </a>
            <a href="https://t.me/HALONKcoin" target="_blank" rel="noopener noreferrer" className="text-halonk-gold hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="mb-4 flex flex-col items-center justify-center gap-2">
            <span className="text-sm text-gray-400">Created by</span>
            <div className="flex items-center gap-4">
              <a href="https://x.com/CryptoNobler" target="_blank" rel="noopener noreferrer" className="flex items-center text-halonk-gold hover:text-white transition-colors font-medium">
                <FaTwitter className="h-4 w-4 mr-1" />
                <span>@CryptoNobler</span>
              </a>
              <a href="https://t.me/CryptoNobler" target="_blank" rel="noopener noreferrer" className="flex items-center text-halonk-gold hover:text-white transition-colors font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
                </svg>
                <span>CryptoNobler</span>
              </a>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-400">Trading by</span>
              <a href="https://x.com/solidquant" target="_blank" rel="noopener noreferrer" className="flex items-center text-halonk-gold hover:text-white transition-colors font-medium">
                <FaTwitter className="h-4 w-4 mr-1" />
                <span>@solidquant</span>
              </a>
            </div>
          </div>
          
          <p className="text-sm text-gray-400">
            $HALONK is a meme coin with no intrinsic value or expectation of financial return. 
            There is no formal team or roadmap. It's completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
