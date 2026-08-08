import React from 'react';

interface PageHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      <div className="relative text-center text-white">
        <h1 className="text-5xl md:text-6xl font-light mb-4">{title}</h1>
        <p className="text-xl text-white/90">{description}</p>
      </div>
    </div>
  );
}