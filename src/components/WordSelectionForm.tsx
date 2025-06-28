
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getCurrentWordPairs, categoryLabels } from '@/data/wordPairs';
import { categoryStyles } from '@/styles/categoryStyles';

interface WordSelectionFormProps {
  selectedWords: Record<string, string>;
  visitCount: number;
  onWordSelection: (category: string, word: string) => void;
  getTextColorClass: (word: string) => string;
  onSubmit: () => void;
}

const WordSelectionForm: React.FC<WordSelectionFormProps> = ({
  selectedWords,
  visitCount,
  onWordSelection,
  getTextColorClass,
  onSubmit
}) => {
  const currentWordPairs = getCurrentWordPairs(visitCount);

  return (
    <div className="max-w-xl mx-auto space-y-8 fade-up">
      {Object.entries(currentWordPairs).map(([category, words]) => (
        <div key={category} className="space-y-2">
          <h2 className="text-xl text-gray-200 font-serif">
            {categoryLabels[category as keyof typeof categoryLabels]}:
          </h2>
          <div className="flex gap-4 justify-center">
            <Button
              variant={selectedWords[category] === words[0] ? 'default' : 'outline'} 
              className={cn(
                "w-1/2 py-6 text-lg transition-all duration-300 font-bold",
                selectedWords[category] === words[0] 
                  ? `${categoryStyles[category as keyof typeof categoryStyles].selected} ${getTextColorClass(words[0])}` 
                  : categoryStyles[category as keyof typeof categoryStyles].unselected
              )}
              onClick={() => onWordSelection(category, words[0])}
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
              onClick={() => onWordSelection(category, words[1])}
            >
              {words[1].charAt(0).toUpperCase() + words[1].slice(1)}
            </Button>
          </div>
        </div>
      ))}
      
      <div className="pt-8">
        <Button 
          className="w-full py-8 text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-200 hover:to-pink-300 hover:text-black transition-all duration-300"
          onClick={onSubmit}
        >
          Create Cosmic Poem
        </Button>
      </div>
    </div>
  );
};

export default WordSelectionForm;
