import { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyBottomCTA from "./StickyBottomCTA";
import AudioToggle from "./AudioToggle";
import { useKonami } from "@/hooks/use-konami";

interface LayoutProps {
  children: ReactNode;
  audioContext: AudioContext | null;
}

export default function Layout({ children, audioContext }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Setup Konami code for Fallen Angel Mode
  useKonami(() => {
    setIsDarkMode(!isDarkMode);
    
    // Show alert when Fallen Angel Mode is activated/deactivated
    if (!isDarkMode) {
      alert('😈 FALLEN ANGEL MODE ACTIVATED 😈');
    } else {
      alert('😇 ANGEL MODE RESTORED 😇');
    }
  });
  
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : ""}`}>
        <Header />
        <AudioToggle audioContext={audioContext} />
        {children}
        <Footer />
        <StickyBottomCTA />
      </div>
    </div>
  );
}
