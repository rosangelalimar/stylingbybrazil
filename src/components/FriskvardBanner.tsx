import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function FriskvardBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-24 relative overflow-hidden max-w-3xl mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4B78F]/10 via-[#E6CCAF]/5 to-[#D4B78F]/10 rounded-3xl" />

      <div className="relative bg-white rounded-3xl border-2 border-[#D4B78F]/30 p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#D4B78F] to-[#E6CCAF] shadow-lg">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-block px-4 py-1.5 bg-[#D4B78F]/10 text-[#D4B78F] text-sm font-semibold rounded-full">
              NYHET
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-light text-neutral-900 mb-4">
            Friskvård Nu Tillgängligt!
          </h3>

          <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Vi erbjuder nu friskvård! Du kan nu använda ditt friskvårdsbidrag för alla våra skönhets- och välbehandlingar. Det är ett enkelt sätt att ta hand om din hälsa och välbefinnande.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
