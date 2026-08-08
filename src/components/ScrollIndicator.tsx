import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  const scrollToContent = () => {
    const nextSection = document.getElementById('locations-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToContent}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white cursor-pointer
        hover:scale-110 transition-transform duration-300 group"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-light tracking-wider opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          Scrolla ner
        </span>
        <div className="flex flex-col gap-1">
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <ChevronDown className="w-6 h-6 -mt-4 animate-bounce delay-75 opacity-75" />
          <ChevronDown className="w-6 h-6 -mt-4 animate-bounce delay-150 opacity-50" />
        </div>
      </div>
    </button>
  );
}