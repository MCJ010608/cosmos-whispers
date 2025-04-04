
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import StarBackground from '@/components/StarBackground';
import CosmicGradient from '@/components/CosmicGradient';
import { cn } from '@/lib/utils';

const WordSelection = () => {
  const navigate = useNavigate();
  const [selectedWords, setSelectedWords] = useState<Record<string, string>>({
    proximity: '',
    celestial: '',
    scope: '',
    essence: '',
  });

  // Function to play sound (to be implemented by user)
  const playButtonSound = (wordType: string, word: string) => {
    // This function will be implemented by the user
    console.log(`Button clicked: ${wordType} - ${word}`);
  };

  const handleWordSelection = (wordType: string, word: string) => {
    // Play sound when a word is selected
    playButtonSound(wordType, word);
    
    // Update the selected words
    setSelectedWords(prev => ({
      ...prev,
      [wordType]: word
    }));
  };

  const handleSubmit = () => {
    // Play sound for submit button
    playButtonSound('submit', 'submit');
    
    // Check if all categories have a selection
    const allSelected = Object.values(selectedWords).every(word => word !== '');
    
    if (allSelected) {
      // Store selections in localStorage to access them on the poetry page
      localStorage.setItem('cosmicWords', JSON.stringify(selectedWords));
      // Navigate to the poetry page
      navigate('/poem');
    } else {
      // You could add a visual indication that all words need to be selected
      console.log('Please select one word from each category');
    }
  };

  return (
    <div className="min-h-screen bg-cosmic-deep-space text-white font-serif relative overflow-hidden">
      {/* Background elements */}
      <CosmicGradient />
      <StarBackground />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif text-center mb-8 text-glow-strong fade-in">
          Cosmos Whispers
        </h1>
        <p className="text-xl md:text-2xl font-serif italic text-gray-300 text-center max-w-2xl mx-auto mb-12 fade-up">
          Choose your cosmic words
        </p>
        
        <div className="max-w-xl mx-auto space-y-8 fade-up">
          {/* Proximity Words */}
          <div className="space-y-2">
            <h2 className="text-xl text-gray-200 font-serif">Proximity:</h2>
            <div className="flex gap-4 justify-center">
              <Button
                variant={selectedWords.proximity === 'near' ? 'default' : 'outline'} 
                className={cn(
                  "w-1/2 py-6 text-lg transition-all duration-300",
                  selectedWords.proximity === 'near' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-transparent border-purple-400 text-purple-200'
                )}
                onClick={() => handleWordSelection('proximity', 'near')}
              >
                Near
              </Button>
              <Button
                variant={selectedWords.proximity === 'far' ? 'default' : 'outline'}
                className={cn(
                  "w-1/2 py-6 text-lg transition-all duration-300",
                  selectedWords.proximity === 'far' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-transparent border-purple-400 text-purple-200'
                )}
                onClick={() => handleWordSelection('proximity', 'far')}
              >
                Far
              </Button>
            </div>
          </div>
          
          {/* Celestial Words */}
          <div className="space-y-2">
            <h2 className="text-xl text-gray-200 font-serif">Celestial Body:</h2>
            <div className="flex gap-4 justify-center">
              <Button
                variant={selectedWords.celestial === 'star' ? 'default' : 'outline'}
                className={cn(
                  "w-1/2 py-6 text-lg transition-all duration-300",
                  selectedWords.celestial === 'star' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-transparent border-blue-400 text-blue-200'
                )}
                onClick={() => handleWordSelection('celestial', 'star')}
              >
                Star
              </Button>
              <Button
                variant={selectedWords.celestial === 'sun' ? 'default' : 'outline'}
                className={cn(
                  "w-1/2 py-6 text-lg transition-all duration-300",
                  selectedWords.celestial === 'sun' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-transparent border-blue-400 text-blue-200'
                )}
                onClick={() => handleWordSelection('celestial', 'sun')}
              >
                Sun
              </Button>
            </div>
          </div>
          
          {/* Scope Words */}
          <div className="space-y-2">
            <h2 className="text-xl text-gray-200 font-serif">Cosmic Scale:</h2>
            <div className="flex gap-4 justify-center">
              <Button
                variant={selectedWords.scope === 'universe' ? 'default' : 'outline'}
                className={cn(
                  "w-1/2 py-6 text-lg transition-all duration-300",
                  selectedWords.scope === 'universe' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-transparent border-teal-400 text-teal-200'
                )}
                onClick={() => handleWordSelection('scope', 'universe')}
              >
                Universe
              </Button>
              <Button
                variant={selectedWords.scope === 'cosmos' ? 'default' : 'outline'}
                className={cn(
                  "w-1/2 py-6 text-lg transition-all duration-300",
                  selectedWords.scope === 'cosmos' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-transparent border-teal-400 text-teal-200'
                )}
                onClick={() => handleWordSelection('scope', 'cosmos')}
              >
                Cosmos
              </Button>
            </div>
          </div>
          
          {/* Essence Words */}
          <div className="space-y-2">
            <h2 className="text-xl text-gray-200 font-serif">Cosmic Essence:</h2>
            <div className="flex gap-4 justify-center">
              <Button
                variant={selectedWords.essence === 'light' ? 'default' : 'outline'}
                className={cn(
                  "w-1/2 py-6 text-lg transition-all duration-300",
                  selectedWords.essence === 'light' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-transparent border-amber-400 text-amber-200'
                )}
                onClick={() => handleWordSelection('essence', 'light')}
              >
                Light
              </Button>
              <Button
                variant={selectedWords.essence === 'energy' ? 'default' : 'outline'}
                className={cn(
                  "w-1/2 py-6 text-lg transition-all duration-300",
                  selectedWords.essence === 'energy' ? 'bg-amber-600 hover:bg-amber-700' : 'bg-transparent border-amber-400 text-amber-200'
                )}
                onClick={() => handleWordSelection('essence', 'energy')}
              >
                Energy
              </Button>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="pt-8">
            <Button 
              className="w-full py-8 text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              onClick={handleSubmit}
            >
              Create Cosmic Poem
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSelection;
