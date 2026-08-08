import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TreatmentCardProps {
  title: string;
  description: string[];
  imagePath: string;
  color?: 'neutral';
}

export default function TreatmentCard({ 
  title, 
  description, 
  imagePath,
  color = 'neutral' 
}: TreatmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const gradientColors = {
    neutral: 'from-black/30 via-transparent to-transparent',
  };

  return (
    <div className="group relative overflow-hidden rounded-xl">
      {/* Mobile View */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 bg-white border border-neutral-100 rounded-xl"
        >
          <span className="text-lg font-light">{title}</span>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {isExpanded && (
          <div className="mt-2 space-y-4">
            <div className="aspect-[16/9] rounded-xl overflow-hidden">
              <img 
                src={imagePath} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <ul className="space-y-2 p-4 bg-white rounded-xl border border-neutral-100">
              {description.map((item, index) => (
                <li key={index} className="text-sm text-neutral-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={imagePath} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${gradientColors[color]} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-light mb-3 transform group-hover:-translate-y-2 transition-transform duration-300">
            {title}
          </h3>
          <ul className="space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-4 group-hover:translate-y-0">
            {description.map((item, index) => (
              <li key={index} className="text-sm text-white/90 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}