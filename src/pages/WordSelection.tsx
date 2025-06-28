
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarBackground from '@/components/StarBackground';
import CosmicGradient from '@/components/CosmicGradient';
import WordSelectionForm from '@/components/WordSelectionForm';
import { useWordSelection } from '@/hooks/useWordSelection';

const WordSelection = () => {
  const navigate = useNavigate();
  const {
    selectedWords,
    visitCount,
    wordColors,
    handleWordSelection,
    getTextColorClass
  } = useWordSelection();

  const playButtonSound = (wordType: string, word: string) => {
    console.log(`Button clicked: ${wordType} - ${word}`);
  };

  const handleSubmit = () => {
    playButtonSound('submit', 'submit');
    
    const allSelected = Object.values(selectedWords).every(word => word !== '');
    
    if (allSelected) {
      localStorage.setItem('cosmicWords', JSON.stringify(selectedWords));
      localStorage.setItem('cosmicWordColors', JSON.stringify(wordColors));
      
      const newCount = visitCount + 1;
      sessionStorage.setItem('poemCreationCount', newCount.toString());
      
      navigate('/poem');
    } else {
      console.log('Please select one word from each category');
    }
  };

  return (
    <div className="min-h-screen bg-cosmic-deep-space text-white font-serif relative overflow-hidden">
      <CosmicGradient />
      <StarBackground />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif text-center mb-8 text-glow-strong fade-in">
          Cosmos Whispers
        </h1>
        <p className="text-xl md:text-2xl font-serif italic text-gray-300 text-center max-w-2xl mx-auto mb-12 fade-up">
          Choose your cosmic words {visitCount > 0 && `(Visit ${visitCount + 1})`}
        </p>
        
        <WordSelectionForm
          selectedWords={selectedWords}
          visitCount={visitCount}
          onWordSelection={handleWordSelection}
          getTextColorClass={getTextColorClass}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default WordSelection;
