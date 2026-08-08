import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Slingor() {
  return (
    <div>
      <PageHero 
        title="Slingor"
        description="Professionella slingor och highlights för ett naturligt resultat"
        image="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Expertis inom slingteknik</h2>
            <p className="text-neutral-600 leading-relaxed">
              Våra erfarna frisörer är specialister på att skapa vackra, naturliga slingor som 
              framhäver ditt hår på bästa sätt. Vi använder de senaste teknikerna och högkvalitativa 
              produkter för att säkerställa ett resultat som både ser naturligt ut och är skonsamt mot ditt hår.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-4">Våra slingtekniker</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Balayage</strong>
                      <p className="text-neutral-600">Handmålad teknik som ger en naturlig, solkysst effekt</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Highlights</strong>
                      <p className="text-neutral-600">Klassiska slingor för en ljusare, dimensionell look</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Babylights</strong>
                      <p className="text-neutral-600">Superfina slingor som ger en subtil, naturlig ljusning</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Foliage</strong>
                      <p className="text-neutral-600">Kombination av folieteknik och balayage för optimal effekt</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4">Inkluderat i behandlingen</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Konsultation och färganalys
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Professionell inpackning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Toning efter behov
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Styling och föning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Skötselråd och produktrekommendationer
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="https://static.wixstatic.com/media/8f7788_264fed831fe64abdb5aed22a717bc7b4~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_264fed831fe64abdb5aed22a717bc7b4~mv2.jpg"
                  alt="Slingor resultat"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-neutral-500 text-center">
                Exempel på balayage och slingor utförda av våra experter
              </p>
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