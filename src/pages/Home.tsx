import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Slideshow from '../components/Slideshow';
import ScrollIndicator from '../components/ScrollIndicator';
import TeamSection from '../components/TeamSection';
import TreatmentCard from '../components/TreatmentCard';
import AboutSection from '../components/AboutSection';
import ResultsGallery from '../components/ResultsGallery';
import ReviewsSection from '../components/ReviewsSection';

const treatments = [
  {
    title: "Allt för Hår",
    description: ["Keratinbehandling", "Slingor", "Färgning", "Hårbehandling"],
    imagePath: "https://static.wixstatic.com/media/8f7788_06566bebde274525a89cd10eb8366be8~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_06566bebde274525a89cd10eb8366be8~mv2.jpg",
    color: "rose"
  },
  {
    title: "Vaxning och Laser",
    description: ["Brasiliansk Vaxning", "Laser hårborttaning", "Vaxning av ansikte"],
    imagePath: "https://static.wixstatic.com/media/8f7788_378fdb67af7a426993f7a89765080f92~mv2.jpg/v1/fill/w_600,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/632A9094.jpg",
    color: "lavender"
  },
  {
    title: "Bryn och Fransar",
    description: ["Brow lift", "Lash lift", "Fransfärgning", "Plockning"],
    imagePath: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "mint"
  },
  {
    title: "Ansiktsbehandlingar",
    description: ["Anti - Aging", "Kemisk peeling", "Ansiktslyft", "Microneedling"],
    imagePath: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80",
    color: "rose"
  },
  {
    title: "Nagelvård",
    description: ["Klassisk Manikyr", "Permanent Gellack", "Snabbmanikyr", "Lyx Pedikyr med Gellack"],
    imagePath: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80",
    color: "lavender"
  },
  {
    title: "Fettreducering",
    description: ["Coolshaping", "Insculpt behandling", "Radio Frequency", "Power shape"],
    imagePath: "https://i0.wp.com/elitebodycontouring.com.au/wp-content/uploads/2022/01/CoolSculpting-vs-CoolShaping-Banner.jpg?fit=2240%2C1260&ssl=1",
    color: "mint"
  }
];

export default function Home() {
  const scrollToTeam = () => {
    const teamSection = document.getElementById('team-section');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Slideshow />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-light mb-6"
            >
              Välkommen till StylingByBrazil
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-light mb-12"
            >
              Din destination för professionell skönhetsvård och välbefinnande
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={scrollToTeam}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#D4B78F] text-white rounded-full 
                  hover:bg-[#E6CCAF] transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Boka Tid
              </button>
            </motion.div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Treatments Section */}
      <section className="py-24">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light text-center mb-16"
          >
            Våra Behandlingar
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TreatmentCard {...treatment} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Results Gallery */}
      <section className="py-24">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light text-center mb-16"
          >
            Våra Resultat
          </motion.h2>
          <ResultsGallery />
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
}
