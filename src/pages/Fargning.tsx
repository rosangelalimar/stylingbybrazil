import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Fargning() {
  return (
    <div>
      <PageHero 
        title="Hårfärgning"
        description="Professionell hårfärgning med högkvalitativa produkter"
        image="https://www.matrix.com/-/media/project/loreal/brand-sites/matrix/americas/us_usmx/blog-information/blogs/hair-colour/26-tips-to-help-protect-color-treated-hair-and-keep-it-looking-fabulous/beauty-redhead-girl-long-shiny-wavy.jpg?rev=fd23d4ca044c4048b2b16af78dff72f5"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Skräddarsydd hårfärgning</h2>
            <p className="text-neutral-600 leading-relaxed">
              Vi erbjuder professionell hårfärgning anpassad efter dina önskemål och förutsättningar. 
              Med vår expertis och högkvalitativa produkter skapar vi den perfekta nyansen som 
              framhäver din naturliga skönhet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-4">Våra färgtekniker</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Helfärgning</strong>
                      <p className="text-neutral-600">Komplett färgning för en jämn och intensiv färg</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Toning</strong>
                      <p className="text-neutral-600">Subtil färgförändring som ger liv åt håret</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Färgkorrigering</strong>
                      <p className="text-neutral-600">Professionell korrigering av tidigare färgningar</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Kreativa färgningar</strong>
                      <p className="text-neutral-600">Moderna tekniker för unika färgresultat</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4">Vårt färglöfte</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Konsultation och färganalys ingår
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Ammoniakfria alternativ finns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Vårdande behandling ingår
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Styling och föning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Hemvårdsrekommendationer
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="https://livetruelondon.com/wp-content/uploads/2019/03/red-hair-red-hair-London-Top-London-Salon-hair-colour-salon-Live-True-London-Vauxhall-hair-salon-1.jpg"
                  alt="Hårfärgning resultat"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-neutral-500 text-center">
                Professionell hårfärgning utförd av våra experter
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