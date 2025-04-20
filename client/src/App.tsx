import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { queryClient } from "./lib/queryClient";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  
  useEffect(() => {
    // Create AudioContext lazily on first user interaction
    const handleUserInteraction = () => {
      if (!audioContext) {
        const newAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        setAudioContext(newAudioContext);
      }
      
      // Remove event listeners once audio context is created
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
    
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    
    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [audioContext]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Layout audioContext={audioContext}>
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
