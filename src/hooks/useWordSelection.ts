
import { useState, useEffect } from 'react';
import { fixedWordColors, getCurrentWordPairs } from '@/data/wordPairs';

export const useWordSelection = () => {
  const [selectedWords, setSelectedWords] = useState<Record<string, string>>({
    proximity: '',
    celestial: '',
    scope: '',
    essence: '',
  });
  const [visitCount, setVisitCount] = useState(0);
  const [wordColors, setWordColors] = useState<Record<string, 'white' | 'yellow'>>({});

  useEffect(() => {
    const currentCount = parseInt(sessionStorage.getItem('poemCreationCount') || '0', 10);
    setVisitCount(currentCount);
    
    if (currentCount === 0) {
      setWordColors(fixedWordColors);
    }
  }, []);

  const playButtonSound = (wordType: string, word: string) => {
    console.log(`Button clicked: ${wordType} - ${word}`);
  };

  const assignPairColors = (category: string, word: string, wordPairs: Record<string, string[]>): 'white' | 'yellow' => {
    if (visitCount === 0) {
      return fixedWordColors[word as keyof typeof fixedWordColors] || 'white';
    }
    
    const pair = wordPairs[category];
    const otherWord = pair.find(w => w !== word);
    
    if (!otherWord) return 'white';
    
    const otherWordColor = wordColors[otherWord];
    
    if (otherWordColor) {
      return otherWordColor === 'white' ? 'yellow' : 'white';
    } else {
      const randomColor: 'white' | 'yellow' = Math.random() < 0.5 ? 'white' : 'yellow';
      return randomColor;
    }
  };

  const getTextColorClass = (word: string) => {
    const color = wordColors[word];
    return color === 'white' ? 'text-white' : 'text-yellow-200';
  };

  const handleWordSelection = (wordType: string, word: string) => {
    playButtonSound(wordType, word);
    
    const currentWordPairs = getCurrentWordPairs(visitCount);
    
    if (!wordColors[word]) {
      const assignedColor = assignPairColors(wordType, word, currentWordPairs);
      setWordColors(prev => ({
        ...prev,
        [word]: assignedColor
      }));
    }
    
    setSelectedWords(prev => ({
      ...prev,
      [wordType]: word
    }));
  };

  return {
    selectedWords,
    visitCount,
    wordColors,
    handleWordSelection,
    getTextColorClass
  };
};
