import React, { useState, useEffect } from 'react';
import { X, PartyPopper, Calendar, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setIsMinimized(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isMinimized && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed bottom-8 right-8 z-50 flex flex-col items-center"
          >
            <span className="text-sm font-light text-[#D4B78F] mb-2 bg-white px-3 py-1 rounded-full shadow-md">
              Nyhet
            </span>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#D4B78F] text-white p-4 rounded-full shadow-lg
                hover:bg-[#E6CCAF] transition-colors duration-300 group"
            >
              <PartyPopper className="w-6 h-6 animate-pulse" />
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#D4B78F] 
                px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                whitespace-nowrap pointer-events-none">
                Nyhet - Invigning!
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={isMobile ? { opacity: 0, y: '100%' } : { opacity: 0, scale: 0.9 }}
              animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1 }}
              exit={isMobile ? { opacity: 0, y: '100%' } : { opacity: 0, scale: 0.9 }}
              className={`fixed z-50 bg-white shadow-2xl
                ${isMobile 
                  ? 'inset-x-0 bottom-0 rounded-t-3xl min-h-[90vh] p-6' 
                  : 'left-[30%] top-[10%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[480px] rounded-2xl p-8 mx-4'}`}
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(true);
                }}
                className={`absolute text-neutral-400 hover:text-neutral-600 
                  transition-colors duration-300
                  ${isMobile ? 'right-6 top-6' : 'right-4 top-4'}`}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center bg-beige-50 
                  text-[#D4B78F] rounded-full mb-6
                  ${isMobile ? 'w-20 h-20 mt-4' : 'w-16 h-16'}`}>
                  <PartyPopper className={`${isMobile ? 'w-10 h-10' : 'w-8 h-8'}`} />
                </div>
                <h2 className={`font-light mb-4 ${isMobile ? 'text-3xl' : 'text-2xl'}`}>
                  Nyhet: Friskvård!
                </h2>
                <p className="text-neutral-600">
                  Vi erbjuder nu friskvård! Detta innebär att du kan använda ditt friskvårdsbidrag för våra behandlingar.
                </p>
              </div>

              <div className={`space-y-6 mb-8 ${isMobile ? 'mt-12' : ''}`}>
                <div className="flex items-start gap-4">
                  <PartyPopper className="w-5 h-5 text-[#D4B78F] mt-1" />
                  <div>
                    <p className="font-medium">Nyhet: Friskvård</p>
                    <p className="text-neutral-600">Nu kan du använda ditt friskvårdsbidrag för våra behandlingar</p>
                  </div>
                </div>
              </div>

              <div className={`flex flex-col gap-4 ${isMobile ? 'mt-auto' : 'sm:flex-row'}`}>
                <a 
                  href="/#team-section"
                  className={`flex-1 bg-[#D4B78F] text-white text-center py-3 rounded-lg 
                    hover:bg-[#E6CCAF] transition-colors duration-300
                    ${isMobile ? 'text-lg py-4' : ''}`}
                >
                  Boka tid
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(true);
                  }}
                  className={`flex-1 border border-[#D4B78F] text-[#D4B78F] rounded-lg
                    hover:bg-[#D4B78F] hover:text-white transition-colors duration-300
                    ${isMobile ? 'text-lg py-4' : 'py-3'}`}
                >
                  Stäng
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
