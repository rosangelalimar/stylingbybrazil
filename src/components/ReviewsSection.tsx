import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Cristina S",
    text: "Alltid så himla trevliga och grymma på det dem gör. Jag gör keratinbehandling och mitt hår är så rakt och lent efteråt, har gått i några år och är aldrig missnöjd. Rekommenderar starkt!",
    rating: 5
  },
  {
    id: 2,
    name: "Paola M",
    text: "Om du vill se fantastisk ut, är det här platsen att gå! Rosangela är en otrolig kunnig och lyhörd frisör. Jag fick fantastisk service av henne och dessutom besitter Rosangela kunskap om hår och vet vad som är bäst för just din hårtyp. Jag rekommenderar Styling by Brazil starkt.",
    rating: 5
  },
  {
    id: 3,
    name: "Cornelia H",
    text: "Bästa stället i Stockholm för hudvård. Oavsett om ansiktsbehandling, vaxning eller laserbehandling. Rosangela och hennes personal är supertrevlig och professionell. En bra stund för avslappning och att bli ompysslad.",
    rating: 5
  }
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-beige-50 via-white to-beige-100">
      <div className="container max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light text-center mb-4"
        >
          Recensioner
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-neutral-600 mb-16"
        >
          från Bokadirekt
        </motion.p>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 
              w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center
              text-neutral-400 hover:text-beige-500 transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-beige-500/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12
              w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center
              text-neutral-400 hover:text-beige-500 transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-beige-500/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Reviews Carousel */}
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-beige-400 text-beige-400" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-center text-lg md:text-xl text-neutral-600 mb-8">
                  "{reviews[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <p className="text-lg font-medium text-neutral-800">{reviews[currentIndex].name}</p>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 
                        ${index === currentIndex 
                          ? 'w-8 bg-beige-400' 
                          : 'bg-neutral-200 hover:bg-neutral-300'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}