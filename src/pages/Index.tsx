
import React, { useState, useEffect } from 'react';
import StarBackground from '@/components/StarBackground';
import PoetrySection from '@/components/PoetrySection';
import CosmicGradient from '@/components/CosmicGradient';
import { cn } from '@/lib/utils';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Words to highlight across all sections
  const cosmicWords = ['near', 'far', 'star', 'sun', 'universe', 'cosmos', 'light', 'energy'];
  
  return (
    <div className="min-h-screen bg-cosmic-deep-space text-white font-serif relative overflow-hidden">
      {/* Background elements */}
      <CosmicGradient />
      <StarBackground />
      
      {/* Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-10 transition-all duration-500 py-4 px-6",
        scrolled ? "bg-cosmic-deep-space bg-opacity-70 backdrop-blur-sm" : "bg-transparent"
      )}>
        <h1 className={cn(
          "text-xl md:text-2xl font-serif italic text-center transition-all duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}>
          Cosmos Whispers
        </h1>
      </header>
      
      {/* Intro title */}
      <div className="h-screen flex flex-col items-center justify-center px-4 relative">
        <h1 className="text-4xl md:text-6xl font-serif text-center mb-6 text-glow-strong">
          Cosmos Whispers
        </h1>
        <p className="text-xl md:text-2xl font-serif italic text-gray-300 text-center max-w-2xl">
          A cosmic love letter across the universe
        </p>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="opacity-70"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
      
      {/* Poetry content */}
      <main className="relative z-10 pb-32">
        <PoetrySection
          title="Across the Void"
          lines={[
            "In the vast expanse where galaxies bloom,",
            "I find myself thinking of you—whether near or far,",
            "Your essence transcends the cosmic distances,",
            "Like starlight traveling across eons to find me.",
            "This universe conspires in magnificent ways,",
            "To bring souls together across impossible divides."
          ]}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title="Celestial Bodies"
          lines={[
            "You are my sun—constant, burning, life-giving,",
            "While I orbit in patterns drawn by your gravity,",
            "Sometimes a distant star, pulsing with quiet energy,",
            "Other times a nebula, expanding with possibility.",
            "In this dance of celestial bodies,",
            "We create our own constellation of moments."
          ]}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title="Light Years"
          lines={[
            "Light carries the memory of ancient stars,",
            "Just as I carry the echoes of your touch,",
            "Across light years of separation,",
            "The cosmos whispers your name in quantum vibrations.",
            "Energy never dies—it transforms,",
            "As has my soul since knowing yours."
          ]}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title="Universal Constants"
          lines={[
            "In a universe of entropic chaos,",
            "Finding you was a beautiful improbability,",
            "Like two particles quantum-entangled,",
            "Connected beyond the constraints of time and space.",
            "The energy between us—a force neither created nor destroyed,",
            "Only changed into infinite forms of love."
          ]}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title="Cosmic Convergence"
          lines={[
            "When stars collapse, they create the elements of life,",
            "From their sacrifice, new worlds are born,",
            "So too have we been transformed,",
            "In the gravity well of our shared experience.",
            "The cosmos lives within us, as we live within it,",
            "Star-stuff contemplating star-stuff, forever intertwined."
          ]}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title=""
          lines={[
            "Whether near or far, under the same stars or distant suns,",
            "Our connection remains—a universal constant,",
            "Whispered across the cosmos on waves of light and energy,",
            "A love letter written in the language of the universe itself."
          ]}
          highlightWords={cosmicWords}
          className="mt-32 text-center"
          lineClassName="text-xl md:text-2xl italic"
          baseDelay={300}
        />
      </main>
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 text-center text-sm text-gray-400 opacity-70">
        <p>Written across time and space, for you</p>
      </footer>
    </div>
  );
};

export default Index;
