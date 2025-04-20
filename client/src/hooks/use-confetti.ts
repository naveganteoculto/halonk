import { useCallback } from 'react';

interface ConfettiPiece {
  element: HTMLDivElement;
  left: number;
  top: number;
  width: number;
  height: number;
  color: string;
  speed: number;
  angle: number;
  rotation: number;
  opacity: number;
}

export function useConfetti() {
  const triggerConfetti = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    // Determine the position for the confetti
    let left = window.innerWidth / 2;
    let top = window.innerHeight / 2;
    
    if (e) {
      // If triggered by an event, get the position of the event
      if ('touches' in e) {
        // For touch events
        const touch = e.touches[0];
        left = touch.clientX;
        top = touch.clientY;
      } else {
        // For mouse events
        left = e.clientX;
        top = e.clientY;
      }
    }
    
    // Colors for the confetti pieces
    const colors = ['#FFD700', '#4A90E2', '#FF6B6B', '#F0F8FF'];
    
    // Create confetti pieces
    for (let i = 0; i < 30; i++) {
      createConfettiPiece(left, top, colors);
    }
  }, []);
  
  return triggerConfetti;
}

function createConfettiPiece(x: number, y: number, colors: string[]) {
  const confetti = document.createElement('div');
  confetti.className = 'fixed pointer-events-none';
  
  // Random size
  const size = Math.random() * 10 + 5;
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size}px`;
  
  // Random color
  const color = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.backgroundColor = color;
  
  // Random shape (circle or square)
  confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
  
  // Set initial position
  confetti.style.left = `${x}px`;
  confetti.style.top = `${y}px`;
  confetti.style.opacity = '0';
  
  document.body.appendChild(confetti);
  
  // Animate the confetti
  setTimeout(() => {
    confetti.style.opacity = '1';
    
    // Random movement and rotation
    const distance = Math.random() * 200 - 100;
    const angle = Math.random() * 360;
    const translateX = Math.cos(angle * Math.PI / 180) * distance;
    const translateY = Math.sin(angle * Math.PI / 180) * distance - 100; // Bias upward
    const rotate = Math.random() * 360;
    
    confetti.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
    confetti.style.transition = `all ${Math.random() * 1 + 1}s ease-out`;
    
    // Fade out and remove
    setTimeout(() => {
      confetti.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(confetti);
      }, 1000);
    }, 1000);
  }, 0);
}
