import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function OgonBryn() {
  return (
    <div>
      <PageHero 
        title="Ögon & Bryn"
        description="Framhäv din naturliga skönhet"
        image="https://essentialskinspa.com/wp-content/uploads/2024/05/Lash-Lift-The-Ultimate-Guide-to-Achieving-Gorgeous-Long-Lasting-Lashes.jpg"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Expertis inom ögon och bryn</h2>
            <p className="text-neutral-600 leading-relaxed">
              Med våra specialiserade behandlingar framhäver vi din naturliga skönhet. 
              Från browlift till lashlift, våra experter använder de senaste teknikerna 
              för att skapa den perfekta ramen för dina ögon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5ba3d39cfb1820285bfe4f33/66a8e60d-628b-4194-b413-feb522c1ad79/Dos+and+Don%27ts+After+a+Lash+Lift.jpg?format=2500w"
                alt="Ögon och bryn behandling"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-light mb-4">Våra specialiteter</h3>
              <ul className="space-y-3 text-neutral-600">
                <li>✨ Browlift för naturligt lyft</li>
                <li>✨ Lashlift för längre utseende</li>
                <li>✨ Fransfärgning för definition</li>
                <li>✨ Brynmappning för perfekt form</li>
                <li>✨ Långvariga resultat</li>
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