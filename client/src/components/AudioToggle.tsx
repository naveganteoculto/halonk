import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AudioToggleProps {
  audioContext: AudioContext | null;
}

export default function AudioToggle({ audioContext }: AudioToggleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/11/21/audio_2e481ab5d5.mp3?filename=angelic-choir-6675.mp3');
      
      if (audioRef.current) {
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
      }
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Make sure AudioContext is running
      if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
      }
      
      audioRef.current.play().catch(e => {
        console.log('Audio playback prevented:', e);
      });
    }
    
    setIsPlaying(!isPlaying);
  };
  
  return (
    <motion.button 
      className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md"
      onClick={toggleAudio}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? "Mute Angel Choir" : "Play Angel Choir"}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-heavenly-dark dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a2 2 0 01-2-2v-4a2 2 0 012-2h1.586l4.707-4.707C10.923 1.663 12 2.109 12 3v18c0 .891-1.077 1.337-1.707.707L5.586 17z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-heavenly-dark dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M17.95 4.95a9 9 0 010 14.1M10 18.414l-4-4H5a2 2 0 01-2-2v-4a2 2 0 012-2h1l4-4v16z" />
        </svg>
      )}
    </motion.button>
  );
}
