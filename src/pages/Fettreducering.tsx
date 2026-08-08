import React from 'react';
import PageHero from '../components/PageHero';
import { Sparkles, Calendar } from 'lucide-react';

export default function Fettreducering() {
  return (
    <div>
      <PageHero 
        title="Fettreducering"
        description="Effektiv och skonsam fettreducering med moderna metoder"
        image="https://images.unsplash.com/photo-1468112014733-deb9e1f8ddd2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Modern fettreducering</h2>
            <p className="text-neutral-600 leading-relaxed">
              Vi erbjuder de senaste metoderna inom icke-kirurgisk fettreducering. Våra behandlingar 
              är säkra, effektiva och ger långvariga resultat. Med hjälp av avancerad teknologi kan 
              vi målriktat behandla specifika områden för optimal effekt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-4">Behandlingsmetoder</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Coolshaping</strong>
                      <p className="text-neutral-600">Fryser och eliminerar fettceller permanent med kryolipolys</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Radiofrekvens</strong>
                      <p className="text-neutral-600">Värmebehandling som smälter fett och stramar upp huden</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Ultraljud</strong>
                      <p className="text-neutral-600">Målriktad behandling som bryter ner fettceller</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400 mt-2"></span>
                    <div>
                      <strong className="block text-neutral-800">Power Shape</strong>
                      <p className="text-neutral-600">Kombinerad behandling för maximal effekt</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4">Behandlingsområden</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Mage och midja
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Lår och höfter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Överarmar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Rygg och flanker
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Dubbelhaka
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4">Fördelar</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Inga operativa ingrepp
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Minimal återhämtningstid
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Långvariga resultat
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige-400"></span>
                    Förbättrad hudstruktur
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="https://le-cdn.website-editor.net/s/46b641d466814eaf94fcb758b99df9d2/dms3rep/multi/opt/fat-freezing-cooltech-2880w.jpg?Expires=1733586389&Signature=l0TnypUXmBFYT-h5T8AlGhH2rBB0-SMlAnez36wbUC5dxBN~IPEyGzJKU0KcpS5hS7U3CHwvGOEcPgjcMdqxKmZKAhBILZA~kfM2N9sGSUCouCdhJTJ2MUNBU4LuY5hsOztXGzTxnpsUeGh1AUTnPLpr11DKJUm7YhaAyXVqHKVAEY9uI~7kdfxG~XhDrTDf5y0rioASoluTmJXW8RD1apx26rESnKJpC-70s3lqP8192zo6K3bO6OoFS9RlvPHiNNoAcfdNxoRPx6YVJzVWYpWRMi90FTm~J6bird4EPdbh-1DaETp3OpdZfnewmN1FeeTyHIK5po~9BiWykEBBZg__&Key-Pair-Id=K2NXBXLF010TJW"
                  alt="Fettreducering behandling"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm text-neutral-500 text-center">
                Moderna metoder för effektiv fettreducering
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