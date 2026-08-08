import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Ansiktsbehandling() {
  return (
    <div>
      <PageHero 
        title="Ansiktsbehandlingar"
        description="Skräddarsydda behandlingar för alla hudtyper"
        image="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Expertis inom hudvård</h2>
            <p className="text-neutral-600 leading-relaxed">
              Våra ansiktsbehandlingar är skräddarsydda efter din huds unika behov. Med hjälp av 
              avancerad teknologi och högkvalitativa produkter ger vi dig en behandling som ger 
              synliga resultat och långvarig effekt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-4">Behandlingar</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Anti-aging behandling</strong>
                      <p className="text-neutral-600">Reducerar fina linjer och rynkor, ökar hudens spänst</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Kemisk peeling</strong>
                      <p className="text-neutral-600">Förnyar huden och behandlar pigmentering</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Microneedling</strong>
                      <p className="text-neutral-600">Stimulerar kollagenproduktion och förbättrar hudstruktur</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Djuprengöring</strong>
                      <p className="text-neutral-600">Grundlig rengöring för ren och klar hy</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4">Varje behandling inkluderar</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Hudanalys och konsultation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Rengöring och peeling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Ansiktsmassage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Specialanpassad mask
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Avslutande hudvård
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
                  alt="Ansiktsbehandling"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-neutral-500 text-center">
                Avancerade ansiktsbehandlingar för optimal hudvård
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