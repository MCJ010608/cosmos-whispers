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
  const [wordColors, setWordColors] = useState<Record<string, 'white' | 'yellow'>>({});
  const [poemType, setPoemType] = useState<'fixed' | 'alternative' | 'third' | 'fourth' | 'fifth' | 'sixth' | 'seventh' | 'eighth' | 'ninth' | 'tenth'>('fixed');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get the selected words from localStorage
    const storedWords = localStorage.getItem('cosmicWords');
    const storedColors = localStorage.getItem('cosmicWordColors');
    
    if (storedWords) {
      const parsedWords = JSON.parse(storedWords);
      setUserWords(parsedWords);
      
      // Determine poem type based on words used
      const alternativeWords = ['quantum', 'distant', 'nebula', 'galaxy', 'molecule', 'atom', 'gravity', 'magnetism'];
      const thirdVisitWords = ['infinite', 'void', 'comet', 'moon', 'dimension', 'reality', 'time', 'space'];
      const fourthVisitWords = ['eternal', 'fleeting', 'pulsar', 'quasar', 'microcosm', 'macrocosm', 'harmony', 'chaos'];
      const fifthVisitWords = ['bound', 'free', 'asteroid', 'meteor', 'particle', 'wave', 'rhythm', 'silence'];
      const sixthVisitWords = ['parallel', 'convergent', 'dwarf', 'giant', 'quantum', 'cosmic', 'vibration', 'stillness'];
      const seventhVisitWords = ['adjacent', 'remote', 'binary', 'solitary', 'nano', 'mega', 'flow', 'stasis'];
      const eighthVisitWords = ['connected', 'isolated', 'bright', 'dark', 'finite', 'boundless', 'pulse', 'calm'];
      const ninthVisitWords = ['intimate', 'distant', 'radiant', 'shadowed', 'local', 'universal', 'motion', 'rest'];
      const tenthVisitWords = ['close', 'apart', 'burning', 'cold', 'tiny', 'vast', 'force', 'peace'];
      
      const hasWords = (wordSet: string[]) => 
        Object.values(parsedWords).some((word: unknown) => 
          typeof word === 'string' && wordSet.includes(word.toLowerCase())
        );
      
      if (hasWords(tenthVisitWords)) {
        setPoemType('tenth');
      } else if (hasWords(ninthVisitWords)) {
        setPoemType('ninth');
      } else if (hasWords(eighthVisitWords)) {
        setPoemType('eighth');
      } else if (hasWords(seventhVisitWords)) {
        setPoemType('seventh');
      } else if (hasWords(sixthVisitWords)) {
        setPoemType('sixth');
      } else if (hasWords(fifthVisitWords)) {
        setPoemType('fifth');
      } else if (hasWords(fourthVisitWords)) {
        setPoemType('fourth');
      } else if (hasWords(thirdVisitWords)) {
        setPoemType('third');
      } else if (hasWords(alternativeWords)) {
        setPoemType('alternative');
      } else {
        setPoemType('fixed');
      }
    }
    
    if (storedColors) {
      setWordColors(JSON.parse(storedColors));
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create array of words to highlight based on user selections
  const cosmicWords = Object.values(userWords);
  
  // Helper function to determine text color based on stored colors
  const getWordColor = (word: string) => {
    const color = wordColors[word];
    if (color === 'white') return 'text-white font-bold';
    if (color === 'yellow') return 'text-yellow-200 font-bold';
    return 'text-purple-300'; // Default purple color for non-selected words
  };
  
  // Generate the fixed poem for first-time users
  const generateFixedPoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `Through space and time, near or ${proximity},`,
      `You'll always be my guiding ${celestial}.`,
      `The ${scope} may fade away,`,
      `Yet your ${essence} will always stay.`
    ];
  };

  // Generate alternative poem for repeat visits
  const generateAlternativePoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `When we are ${proximity} in heart,`,
      `Like a ${celestial} lighting the dark,`,
      `In this beautiful ${scope} we share,`,
      `Your ${essence} is always there.`
    ];
  };

  // Generate third poem for third-time visits
  const generateThirdPoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `Whether we're ${proximity} or far away,`,
      `A ${celestial} guides me every day,`,
      `Across this wide and wondrous ${scope},`,
      `Your ${essence} fills my heart with hope.`
    ];
  };

  // Generate fourth poem
  const generateFourthPoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `When souls are ${proximity} as one,`,
      `Like a ${celestial} morning sun,`,
      `In this ${scope} world of dreams,`,
      `Your ${essence} forever gleams.`
    ];
  };

  // Generate fifth poem
  const generateFifthPoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `Hearts ${proximity} through time and space,`,
      `A ${celestial} light upon your face,`,
      `In this ${scope} universe so free,`,
      `Your ${essence} means everything to me.`
    ];
  };

  // Generate sixth poem
  const generateSixthPoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `Two spirits ${proximity} in the night,`,
      `A ${celestial} beacon burning bright,`,
      `In this ${scope} cosmic dance divine,`,
      `Your ${essence} heart beats close to mine.`
    ];
  };

  // Generate seventh poem
  const generateSeventhPoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `Love ${proximity} beyond all measure,`,
      `A ${celestial} star, my greatest treasure,`,
      `In this ${scope} realm where dreams take flight,`,
      `Your ${essence} makes everything right.`
    ];
  };

  // Generate eighth poem
  const generateEighthPoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `Though we may be ${proximity} in space,`,
      `A ${celestial} memory of your grace,`,
      `In this ${scope} world both far and near,`,
      `Your ${essence} voice I always hear.`
    ];
  };

  // Generate ninth poem
  const generateNinthPoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `When hearts are ${proximity} and true,`,
      `A ${celestial} light reminds me of you,`,
      `In this ${scope} garden of time,`,
      `Your ${essence} love makes life sublime.`
    ];
  };

  // Generate tenth poem
  const generateTenthPoem = () => {
    const { proximity, celestial, scope, essence } = userWords;
    
    return [
      `Two souls ${proximity} in perfect rhyme,`,
      `A ${celestial} song through space and time,`,
      `In this ${scope} tapestry of fate,`,
      `Your ${essence} love will always wait.`
    ];
  };
  
  const poemLines = poemType === 'tenth' ? generateTenthPoem() :
                   poemType === 'ninth' ? generateNinthPoem() :
                   poemType === 'eighth' ? generateEighthPoem() :
                   poemType === 'seventh' ? generateSeventhPoem() :
                   poemType === 'sixth' ? generateSixthPoem() :
                   poemType === 'fifth' ? generateFifthPoem() :
                   poemType === 'fourth' ? generateFourthPoem() :
                   poemType === 'third' ? generateThirdPoem() : 
                   poemType === 'alternative' ? generateAlternativePoem() : 
                   generateFixedPoem();

  // Special handling for the word "near" in the first line (only for fixed poem)
  const renderSpecialFirstLine = (line: string) => {
    const allWordSets = {
      tenth: ['close', 'apart', 'burning', 'cold', 'tiny', 'vast', 'force', 'peace'],
      ninth: ['intimate', 'distant', 'radiant', 'shadowed', 'local', 'universal', 'motion', 'rest'],
      eighth: ['connected', 'isolated', 'bright', 'dark', 'finite', 'boundless', 'pulse', 'calm'],
      seventh: ['adjacent', 'remote', 'binary', 'solitary', 'nano', 'mega', 'flow', 'stasis'],
      sixth: ['parallel', 'convergent', 'dwarf', 'giant', 'quantum', 'cosmic', 'vibration', 'stillness'],
      fifth: ['bound', 'free', 'asteroid', 'meteor', 'particle', 'wave', 'rhythm', 'silence'],
      fourth: ['eternal', 'fleeting', 'pulsar', 'quasar', 'microcosm', 'macrocosm', 'harmony', 'chaos'],
      third: ['infinite', 'void', 'comet', 'moon', 'dimension', 'reality', 'time', 'space'],
      alternative: ['quantum', 'distant', 'nebula', 'galaxy', 'molecule', 'atom', 'gravity', 'magnetism'],
      fixed: ['near', 'far', 'star', 'sun', 'cosmos', 'universe', 'light', 'energy']
    };

    const currentWords = allWordSets[poemType] || allWordSets.fixed;
    // Include all words from all sets for highlighting
    const allWords = Object.values(allWordSets).flat();

    if (poemType !== 'fixed') {
      // For non-fixed poems, use regular parsing
      const regex = new RegExp(`\\b(${allWords.join('|')})\\b`, 'gi');
      const parts = line.split(regex);
      
      return (
        <>
          {parts.map((part, partIndex) => {
            const lowerPart = part.toLowerCase();
            if (allWords.includes(lowerPart)) {
              return (
                <span key={partIndex} className={getWordColor(lowerPart)}>
                  {part}
                </span>
              );
            }
            return <span key={partIndex} className="text-purple-300">{part}</span>;
          })}
        </>
      );
    }

    // Original logic for fixed poem - special handling for literal "near"
    const regex = /\b(near|far|star|sun|cosmos|universe|light|energy)\b/gi;
    const parts = line.split(regex);
    
    let nearCount = 0;
    
    return (
      <>
        {parts.map((part, partIndex) => {
          const lowerPart = part.toLowerCase();
          
          // Special case for the first "near" in the first line only
          if (lowerPart === 'near' && nearCount === 0) {
            nearCount++;
            return (
              <span key={partIndex} className="text-purple-300">
                {part}
              </span>
            );
          } else if (['near', 'far', 'star', 'sun', 'cosmos', 'universe', 'light', 'energy'].includes(lowerPart)) {
            // All other keywords including the selected "near" (if it appears as the second "near")
            return (
              <span key={partIndex} className={getWordColor(lowerPart)}>
                {part}
              </span>
            );
          }
          return <span key={partIndex} className="text-purple-300">{part}</span>;
        })}
      </>
    );
  };

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
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-serif italic mb-12 text-glow">
              Your Cosmic Words
            </h2>
            
            {poemLines.map((line, index) => {
              return (
                <p 
                  key={index} 
                  className="text-2xl md:text-3xl font-serif mb-8 leading-relaxed opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.5 + 0.5}s`, animationFillMode: 'forwards' }}
                >
                  {index === 0 ? renderSpecialFirstLine(line) : 
                    // For other lines, use the regular parsing
                    (() => {
                      const allWordSets = {
                        tenth: ['close', 'apart', 'burning', 'cold', 'tiny', 'vast', 'force', 'peace'],
                        ninth: ['intimate', 'distant', 'radiant', 'shadowed', 'local', 'universal', 'motion', 'rest'],
                        eighth: ['connected', 'isolated', 'bright', 'dark', 'finite', 'boundless', 'pulse', 'calm'],
                        seventh: ['adjacent', 'remote', 'binary', 'solitary', 'nano', 'mega', 'flow', 'stasis'],
                        sixth: ['parallel', 'convergent', 'dwarf', 'giant', 'quantum', 'cosmic', 'vibration', 'stillness'],
                        fifth: ['bound', 'free', 'asteroid', 'meteor', 'particle', 'wave', 'rhythm', 'silence'],
                        fourth: ['eternal', 'fleeting', 'pulsar', 'quasar', 'microcosm', 'macrocosm', 'harmony', 'chaos'],
                        third: ['infinite', 'void', 'comet', 'moon', 'dimension', 'reality', 'time', 'space'],
                        alternative: ['quantum', 'distant', 'nebula', 'galaxy', 'molecule', 'atom', 'gravity', 'magnetism'],
                        fixed: ['near', 'far', 'star', 'sun', 'cosmos', 'universe', 'light', 'energy']
                      };
                      
                      // Include all words from all sets for highlighting
                      const allWords = Object.values(allWordSets).flat();
                      
                      const regex = new RegExp(`\\b(${allWords.join('|')})\\b`, 'gi');
                      const parts = line.split(regex);
                      
                      return parts.map((part, partIndex) => {
                        const lowerPart = part.toLowerCase();
                        if (allWords.includes(lowerPart)) {
                          return (
                            <span key={partIndex} className={getWordColor(lowerPart)}>
                              {part}
                            </span>
                          );
                        }
                        return <span key={partIndex} className="text-purple-300">{part}</span>;
                      });
                    })()
                  }
                </p>
              );
            })}
            
            <div 
              className="mt-16 opacity-0 animate-fade-up"
              style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}
            >
              <Button 
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => navigate('/')}
              >
                Create Another Poem
              </Button>
            </div>
          </div>
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
