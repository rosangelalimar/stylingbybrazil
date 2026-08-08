import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Frisor() {
  return (
    <div>
      <PageHero 
        title="Frisör"
        description="Expertis inom hårförvandling och styling"
        image="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Förvandla ditt hår hos oss</h2>
            <p className="text-neutral-600 leading-relaxed">
              Våra erfarna frisörer specialiserar sig på att skapa den perfekta looken för varje kund. 
              Med över 20 års erfarenhet och kontinuerlig utbildning inom de senaste teknikerna, 
              garanterar vi ett resultat som överträffar dina förväntningar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://media.istockphoto.com/id/961867192/photo/cropped-shot-of-female-client-receiving-a-haircut.jpg?s=612x612&w=0&k=20&c=JwUPYNi8aT7vDFevhWQdA8JCaf0Oy0ZVxZ2IswwkJis="
                alt="Professionell hårförvandling"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-light mb-4">Expertis inom alla hårtyper</h3>
              <ul className="space-y-3 text-neutral-600">
                <li>✨ Specialister på skandinaviskt och afro hår</li>
                <li>✨ Skräddarsydda behandlingar för ditt hår</li>
                <li>✨ Ekologiska och högkvalitativa produkter</li>
                <li>✨ Färgning och slingor med minimal skada</li>
                <li>✨ Professionell styling och rådgivning</li>
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