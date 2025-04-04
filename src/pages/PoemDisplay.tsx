
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StarBackground from '@/components/StarBackground';
import PoetrySection from '@/components/PoetrySection';
import CosmicGradient from '@/components/CosmicGradient';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PoemDisplay = () => {
  const [scrolled, setScrolled] = useState(false);
  const [userWords, setUserWords] = useState({
    proximity: 'near',
    celestial: 'star',
    scope: 'cosmos',
    essence: 'light'
  });
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get the selected words from localStorage
    const storedWords = localStorage.getItem('cosmicWords');
    if (storedWords) {
      setUserWords(JSON.parse(storedWords));
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create array of words to highlight based on user selections
  const cosmicWords = Object.values(userWords);
  
  // Create poems using the selected words
  const generatePoems = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return {
      across: [
        "In the vast expanse where galaxies bloom,",
        `I find myself thinking of you—whether ${proximity} or ${proximity === 'near' ? 'far' : 'near'},`,
        "Your essence transcends the cosmic distances,",
        `Like ${celestial}light traveling across eons to find me.`,
        `This ${scope} conspires in magnificent ways,`,
        "To bring souls together across impossible divides."
      ],
      bodies: [
        `You are my ${celestial}—constant, burning, life-giving,`,
        "While I orbit in patterns drawn by your gravity,",
        `Sometimes a distant ${celestial}, pulsing with quiet ${essence},`,
        "Other times a nebula, expanding with possibility.",
        "In this dance of celestial bodies,",
        "We create our own constellation of moments."
      ],
      years: [
        `${essence === 'light' ? 'Light' : 'Energy'} carries the memory of ancient ${celestial}s,`,
        "Just as I carry the echoes of your touch,",
        `Across ${celestial === 'star' ? 'light' : 'cosmic'} years of separation,`,
        `The ${scope} whispers your name in quantum vibrations.`,
        `${essence === 'light' ? 'Energy' : 'Light'} never dies—it transforms,`,
        "As has my soul since knowing yours."
      ],
      constants: [
        `In a ${scope} of entropic chaos,`,
        "Finding you was a beautiful improbability,",
        "Like two particles quantum-entangled,",
        "Connected beyond the constraints of time and space.",
        `The ${essence} between us—a force neither created nor destroyed,`,
        "Only changed into infinite forms of love."
      ],
      convergence: [
        "When stars collapse, they create the elements of life,",
        "From their sacrifice, new worlds are born,",
        "So too have we been transformed,",
        "In the gravity well of our shared experience.",
        `The ${scope} lives within us, as we live within it,`,
        `${celestial}-stuff contemplating ${celestial}-stuff, forever intertwined.`
      ],
      closing: [
        `Whether ${proximity} or ${proximity === 'near' ? 'far' : 'near'}, under the same ${celestial}s or distant ${celestial}s,`,
        `Our connection remains—a ${scope === 'universe' ? 'cosmic' : 'universal'} constant,`,
        `Whispered across the ${scope} on waves of ${essence} and ${essence === 'light' ? 'energy' : 'light'},`,
        `A love letter written in the language of the ${scope} itself.`
      ]
    };
  };
  
  const poems = generatePoems();

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
          lines={poems.across}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title="Celestial Bodies"
          lines={poems.bodies}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title="Light Years"
          lines={poems.years}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title="Universal Constants"
          lines={poems.constants}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title="Cosmic Convergence"
          lines={poems.convergence}
          highlightWords={cosmicWords}
          baseDelay={300}
        />
        
        <PoetrySection
          title=""
          lines={poems.closing}
          highlightWords={cosmicWords}
          className="mt-32 text-center"
          lineClassName="text-xl md:text-2xl italic"
          baseDelay={300}
        />
        
        <div className="mt-16 flex justify-center">
          <Button 
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            onClick={() => navigate('/')}
          >
            Create Another Poem
          </Button>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 text-center text-sm text-gray-400 opacity-70">
        <p>Written across time and space, for you</p>
      </footer>
    </div>
  );
};

export default PoemDisplay;
