
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

  // Add special highlighting for specific words
  const highlightedText = () => {
    if (highlightWords.length === 0) return text;
    
    let result = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      result = result.replace(regex, `<span class="text-glow-strong font-medium text-white">${word}</span>`);
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
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
