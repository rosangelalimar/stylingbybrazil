import React, { useEffect, useState } from 'react';

const images = [
  "https://static.wixstatic.com/media/8f7788_9bea9cc311f640619b754d949d3e46d8~mv2.jpg/v1/fill/w_1765,h_1306,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/image_123650291_edited.jpg",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1651024074162-9b0f2dfc85f1?auto=format&fit=crop&q=80"
 
];

export default function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image}
            alt={`Luxury salon ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>
      ))}
    </div>
  );
}