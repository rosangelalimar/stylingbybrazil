import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Kroppsbehandling() {
  return (
    <div>
      <PageHero 
        title="Kroppsbehandlingar"
        description="Avancerade behandlingar för kropp och välbefinnande"
        image="https://www.expilo.se/wp/wp-content/uploads/Kroppsbehandling-enzymmask-dmk.jpg"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Professionella kroppsbehandlingar</h2>
            <p className="text-neutral-600 leading-relaxed">
              Våra kroppsbehandlingar kombinerar moderna tekniker med traditionell expertis för 
              att ge dig bästa möjliga resultat. Vi erbjuder skräddarsydda behandlingar som 
              fokuserar på dina specifika behov och önskemål.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-4">Våra behandlingar</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Cellulitbehandling</strong>
                      <p className="text-neutral-600">Effektiv behandling som minskar celluliter och förbättrar hudens struktur</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Kroppspeeling</strong>
                      <p className="text-neutral-600">Djuprengörande behandling som ger len och förnyad hud</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Lymfmassage</strong>
                      <p className="text-neutral-600">Stimulerar cirkulationen och minskar svullnad</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Kroppsinpackning</strong>
                      <p className="text-neutral-600">Närande behandling som ger silkeslen hud</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Fettfrysning Coolshaping 2</strong>
                      <p className="text-neutral-600">Avancerad kryolipolys som eliminerar fettceller genom kontrollerad kyla</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Powershape-2 Indiba RF</strong>
                      <p className="text-neutral-600">Radiofrekvensbehandling för hudåtstramning och kroppskontroll</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">INSCULPT behandling</strong>
                      <p className="text-neutral-600">Muskelstimulering och fettreducering för optimala resultat</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4">Fördelar</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Förbättrad blodcirkulation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Reducerad cellulitbildning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Fastare och slätare hud
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Minskad vätskeansamling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Ökad elasticitet i huden
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="https://cdn-5f5aa2d4c1ac180fbc1d974d.closte.com/wp-content/uploads/elementor/thumbs/woman-radiofrequency-belly-treatment-psq5nkl1r7el8wb4096g7oxwgakx5f0so82hiexzm0.png"
                  alt="Kroppsbehandling"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-neutral-500 text-center">
                Professionella kroppsbehandlingar för optimal effekt
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