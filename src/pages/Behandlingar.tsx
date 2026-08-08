import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Behandlingar() {
  return (
    <div>
      <PageHero 
        title="Behandlingar"
        description="Avancerade skönhetsbehandlingar för ansikte och kropp"
        image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Professionella behandlingar</h2>
            <p className="text-neutral-600 leading-relaxed">
              Vi erbjuder ett brett utbud av avancerade behandlingar för ansikte och kropp. 
              Med fokus på kvalitet och resultat använder vi de senaste teknikerna inom 
              hudvård och kroppsbehandlingar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
                alt="Ansiktsbehandling"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-light mb-4">Våra specialbehandlingar</h3>
              <ul className="space-y-3 text-neutral-600">
                <li>✨ Anti-aging behandlingar</li>
                <li>✨ Kemisk peeling</li>
                <li>✨ Microneedling</li>
                <li>✨ Ansiktslyft</li>
                <li>✨ Kroppsbehandlingar</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/priser" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-beige-500 text-white rounded-full hover:bg-beige-600 transition-colors duration-300">
              <Sparkles className="w-5 h-5" />
              Se våra priser
            </a>
            <a href="/#team-section" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-beige-500 text-beige-500 rounded-full hover:bg-beige-500 hover:text-white transition-all duration-300">
              <Calendar className="w-5 h-5" />
              Boka tid
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}