import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Vaxning() {
  return (
    <div>
      <PageHero 
        title="Vaxning"
        description="Professionell och skonsam hårborttagning"
        image="https://bodymattersware.co.uk/wp-content/uploads/2014/04/wax1small.jpg"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Vaxning i solna</h2>
            <p className="text-neutral-600 leading-relaxed">
              Med vår expertis inom vaxning i stockholm erbjuder vi skonsamma och effektiva behandlingar 
              för alla hudtyper. Vi använder endast högkvalitativa vaxprodukter och följer 
              de senaste hygienrutinerna för bästa resultat och komfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://cdn11.bigcommerce.com/s-xl90gunp3j/images/stencil/960w/uploaded_images/adobestock-492575329.jpeg?t=1726007906"
                alt="Professionell vaxning"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-light mb-4">Fördelar med vår vaxning</h3>
              <ul className="space-y-3 text-neutral-600">
                <li>✨ Skonsam mot känslig hud</li>
                <li>✨ Långvarigt resultat</li>
                <li>✨ Specialiserade tekniker</li>
                <li>✨ Hygienisk miljö</li>
                <li>✨ Erfaren personal</li>
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
