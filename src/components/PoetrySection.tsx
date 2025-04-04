
import React, { useEffect, useState } from 'react';
import PoetryLine from './PoetryLine';
import { cn } from '@/lib/utils';

interface PoetrySectionProps {
  title?: string;
  lines: string[];
  highlightWords?: string[];
  className?: string;
  titleClassName?: string;
  lineClassName?: string;
  baseDelay?: number;
  lineDelay?: number;
}

const PoetrySection: React.FC<PoetrySectionProps> = ({
  title,
  lines,
  highlightWords = [],
  className = '',
  titleClassName = '',
  lineClassName = '',
  baseDelay = 0,
  lineDelay = 300
}) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    const currentRef = document.getElementById(`section-${title?.replace(/\s+/g, '-').toLowerCase() || Math.random().toString(36).substring(7)}`);
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [title]);
  
  const id = `section-${title?.replace(/\s+/g, '-').toLowerCase() || Math.random().toString(36).substring(7)}`;
  
  return (
    <div 
      id={id}
      className={cn(
        "mb-24 max-w-3xl mx-auto px-6 md:px-0",
        visible ? "opacity-100" : "opacity-0",
        "transition-opacity duration-1000",
        className
      )}
    >
      {title && (
        <h2 className={cn(
          "text-2xl md:text-3xl font-serif italic mb-6 text-white text-glow",
          titleClassName
        )}>
          {title}
        </h2>
      )}
      
      <div className="space-y-6">
        {lines.map((line, index) => (
          <PoetryLine 
            key={index}
            text={line}
            delay={baseDelay + (index * lineDelay)}
            className={cn(
              "text-lg md:text-xl text-gray-200 font-serif leading-relaxed",
              lineClassName
            )}
            highlightWords={highlightWords}
          />
        ))}
      </div>
    </div>
  );
};

export default PoetrySection;
