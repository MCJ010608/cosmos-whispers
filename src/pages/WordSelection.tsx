
import React, { useState, useEffect } from 'react';
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
  const [isRepeatVisit, setIsRepeatVisit] = useState(false);
  const [wordColors, setWordColors] = useState<Record<string, 'white' | 'yellow'>>({});

  // Fixed word pairs for first-time users
  const fixedWordPairs = {
    proximity: ['near', 'far'],
    celestial: ['star', 'sun'],
    scope: ['universe', 'cosmos'],
    essence: ['light', 'energy']
  };

  // Alternative word pairs for repeat visits
  const alternativeWordPairs = {
    proximity: ['quantum', 'distant'],
    celestial: ['nebula', 'galaxy'],
    scope: ['molecule', 'atom'],
    essence: ['gravity', 'magnetism']
  };

  const categoryLabels = {
    proximity: 'Connection',
    celestial: 'Cosmic Body',
    scope: 'Scale',
    essence: 'Force'
  };

  // Define gradient styles for each category
  const categoryStyles = {
    proximity: {
      selected: 'bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800',
      unselected: 'bg-transparent border-purple-400 text-purple-200 hover:bg-purple-900/30'
    },
    celestial: {
      selected: 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800',
      unselected: 'bg-transparent border-blue-400 text-blue-200 hover:bg-blue-900/30'
    },
    scope: {
      selected: 'bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800',
      unselected: 'bg-transparent border-teal-400 text-teal-200 hover:bg-teal-900/30'
    },
    essence: {
      selected: 'bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800',
      unselected: 'bg-transparent border-orange-400 text-orange-200 hover:bg-orange-900/30'
    }
  };

  useEffect(() => {
    // Check if this is a repeat visit within the same session
    const hasVisitedBefore = sessionStorage.getItem('hasVisitedPoem');
    setIsRepeatVisit(!!hasVisitedBefore);
  }, []);

  // Function to play sound (to be implemented by user)
  const playButtonSound = (wordType: string, word: string) => {
    // This function will be implemented by the user
    console.log(`Button clicked: ${wordType} - ${word}`);
  };

  // Helper function to randomly assign white or yellow color
  const getRandomTextColor = () => {
    return Math.random() < 0.5 ? 'white' : 'yellow';
  };

  // Helper function to get text color class
  const getTextColorClass = (word: string) => {
    const color = wordColors[word];
    return color === 'white' ? 'text-white' : 'text-yellow-200';
  };

  const handleWordSelection = (wordType: string, word: string) => {
    // Play sound when a word is selected
    playButtonSound(wordType, word);
    
    // Assign random color to the selected word if it doesn't have one
    if (!wordColors[word]) {
      setWordColors(prev => ({
        ...prev,
        [word]: getRandomTextColor()
      }));
    }
    
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
      // Store selections and their colors in localStorage
      localStorage.setItem('cosmicWords', JSON.stringify(selectedWords));
      localStorage.setItem('cosmicWordColors', JSON.stringify(wordColors));
      // Mark that user has visited the poem page in this session
      sessionStorage.setItem('hasVisitedPoem', 'true');
      // Navigate to the poetry page
      navigate('/poem');
    } else {
      // You could add a visual indication that all words need to be selected
      console.log('Please select one word from each category');
    }
  };

  // Get the appropriate word pairs based on visit status
  const currentWordPairs = isRepeatVisit ? alternativeWordPairs : fixedWordPairs;

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
          {/* Dynamic word pairs based on visit status */}
          {Object.entries(currentWordPairs).map(([category, words]) => (
            <div key={category} className="space-y-2">
              <h2 className="text-xl text-gray-200 font-serif">{categoryLabels[category as keyof typeof categoryLabels]}:</h2>
              <div className="flex gap-4 justify-center">
                <Button
                  variant={selectedWords[category] === words[0] ? 'default' : 'outline'} 
                  className={cn(
                    "w-1/2 py-6 text-lg transition-all duration-300 font-bold",
                    selectedWords[category] === words[0] 
                      ? `${categoryStyles[category as keyof typeof categoryStyles].selected} ${getTextColorClass(words[0])}` 
                      : categoryStyles[category as keyof typeof categoryStyles].unselected
                  )}
                  onClick={() => handleWordSelection(category, words[0])}
                >
                  {words[0].charAt(0).toUpperCase() + words[0].slice(1)}
                </Button>
                <Button
                  variant={selectedWords[category] === words[1] ? 'default' : 'outline'}
                  className={cn(
                    "w-1/2 py-6 text-lg transition-all duration-300 font-bold",
                    selectedWords[category] === words[1] 
                      ? `${categoryStyles[category as keyof typeof categoryStyles].selected} ${getTextColorClass(words[1])}` 
                      : categoryStyles[category as keyof typeof categoryStyles].unselected
                  )}
                  onClick={() => handleWordSelection(category, words[1])}
                >
                  {words[1].charAt(0).toUpperCase() + words[1].slice(1)}
                </Button>
              </div>
            </div>
          ))}
          
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
