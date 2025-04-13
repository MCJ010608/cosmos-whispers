
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PoetryLineProps {
  text: string;
  delay?: number;
  className?: string;
  highlightWords?: string[];
}

const PoetryLine: React.FC<PoetryLineProps> = ({ 
  text, 
  delay = 0, 
  className = '',
  highlightWords = []
}) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  // Helper function to determine color based on word
  const getWordColor = (word: string) => {
    const whiteWords = ['far', 'star', 'cosmos', 'energy'];
    return whiteWords.includes(word.toLowerCase()) ? 'text-white' : 'text-yellow-200';
  };

  // Add special highlighting for specific words
  const highlightedText = () => {
    if (highlightWords.length === 0) return text;
    
    const parts = text.split(/\b(near|far|star|sun|cosmos|universe|light|energy)\b/gi);
    
    return (
      <>
        {parts.map((part, index) => {
          const lowerPart = part.toLowerCase();
          if (['near', 'far', 'star', 'sun', 'cosmos', 'universe', 'light', 'energy'].includes(lowerPart)) {
            return (
              <span key={index} className={`font-medium ${getWordColor(lowerPart)}`}>
                {part}
              </span>
            );
          }
          return part;
        })}
      </>
    );
  };
  
  return (
    <div 
      className={cn(
        "transition-all duration-1000 ease-in-out transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {highlightedText()}
    </div>
  );
};

export default PoetryLine;
