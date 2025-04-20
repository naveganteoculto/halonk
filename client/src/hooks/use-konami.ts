import { useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

export function useKonami(callback: () => void) {
  useEffect(() => {
    let codeIndex = 0;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Get the key that was pressed
      const key = e.key;
      
      // Check if it matches the next key in the konami code
      if (key === KONAMI_CODE[codeIndex]) {
        codeIndex++;
        
        // If all keys have been entered correctly, execute the callback
        if (codeIndex === KONAMI_CODE.length) {
          callback();
          codeIndex = 0; // Reset for next time
        }
      } else {
        // If the wrong key was pressed, reset the sequence
        codeIndex = 0;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}
