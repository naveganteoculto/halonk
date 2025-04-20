import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create custom CSS variables for the heavenly theme
const style = document.createElement("style");
style.textContent = `
  :root {
    --heavenly-light: #F0F8FF;
    --heavenly: #87CEFA;
    --heavenly-dark: #4A90E2;
    --divine: #FFD700;
    --divine-light: #FFF8DC;
    --blessed: #FF6B6B;
    --holy: #F2C94C;
    --font-comic: 'Comic Neue', cursive;
  }

  body {
    font-family: 'Comic Neue', cursive;
    overflow-x: hidden;
    background: linear-gradient(135deg, var(--heavenly-light) 0%, #E6F0FF 100%);
  }

  .halo {
    filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.6));
  }
  
  .glow {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
