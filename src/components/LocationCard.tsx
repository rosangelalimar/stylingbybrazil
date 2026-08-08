import React from 'react';
import { MapPin, Scissors, Wind, Calendar } from 'lucide-react';

interface LocationCardProps {
  location: string;
  treatments: string[];
  imagePath: string;
}

export default function LocationCard({ location, treatments, imagePath }: LocationCardProps) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:shadow-2xl transition-all duration-500 border border-neutral-100 overflow-hidden h-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pattern-grid-lg"></div>
      
      {/* Floating Icons */}
      <div className="absolute -right-6 -top-6 text-rose-300 opacity-10 rotate-12 transform group-hover:rotate-45 transition-transform duration-700">
        <Scissors className="w-24 h-24" />
      </div>
      <div className="absolute -left-6 -bottom-6 text-lavender-300 opacity-10 -rotate-12 transform group-hover:-rotate-45 transition-transform duration-700">
        <Wind className="w-24 h-24" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col h-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-rose-500/10 p-3 rounded-xl">
            <MapPin className="w-6 h-6 text-rose-600" />
          </div>
          <h3 className="text-2xl font-light tracking-wide">{location}</h3>
        </div>

        <div className="aspect-video mb-6 overflow-hidden rounded-lg">
          <img 
            src={imagePath} 
            alt={location} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {treatments.map((treatment) => (
            <li 
              key={treatment} 
              className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300"
            >
              <span className="w-[2px] h-4 bg-rose-500 group-hover/item:h-6 transition-all duration-300"></span>
              <span className="font-light">{treatment}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-auto">
          <a 
            href="/priser" 
            className="flex-1 text-center bg-white text-rose-500 border-2 border-rose-500 py-3 rounded-lg 
              hover:bg-rose-500 hover:text-white transition-all duration-300 group-hover:scale-105"
          >
            Priser
          </a>
          <a 
            href="/boka" 
            className="flex-1 text-center bg-rose-500 text-white py-3 rounded-lg 
              hover:bg-rose-600 transition-all duration-300 group-hover:scale-105 
              flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Boka Nu
          </a>
        </div>
      </div>
    </div>
  );
}