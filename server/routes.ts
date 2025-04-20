import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // A route for getting memes data
  app.get("/api/memes", (req, res) => {
    // Return sample meme data (no actual images, just placeholders)
    const memes = [
      { id: 1, emoji: "👼", title: "Divine Gains 🚀", username: "@hodler69", likes: 420 },
      { id: 2, emoji: "💸", title: "Blessed Portfolio 😇", username: "@moonboi", likes: 369 },
      { id: 3, emoji: "🙏", title: "Holy Pump Incoming 🙏", username: "@cryptoangel", likes: 777 },
      { id: 4, emoji: "💎", title: "To Valhalla! 💎", username: "@diamondhands", likes: 690 }
    ];
    
    res.json(memes);
  });
  
  // Route for wallet counter (simulated data)
  app.get("/api/wallets", (req, res) => {
    const count = 41950 + Math.floor(Math.random() * 119);
    res.json({ count });
  });
  
  // Create the HTTP server
  const httpServer = createServer(app);
  
  return httpServer;
}
