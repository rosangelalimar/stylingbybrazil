import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Calendar, Clock, X, Star, Sparkles, ShieldCheck, Zap, Heart } from 'lucide-react';
import TeamMember from './TeamMember';
import FriskvardBanner from './FriskvardBanner';

const salons = [
  {
    name: "Solna & Södermalm",
    locations: [
      {
        name: "Solna",
        address: "Solnavägen 29 H",
        postal: "171 45, Solna"
      },
      {
        name: "Södermalm",
        address: "blekingegatan 57",
        postal: "118 56, Stockholm"
      }
    ],
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    openingHours: [
      { day: "Måndag-Fredag", hours: "10:00 - 19:00" },
      { day: "Lördag", hours: "10:00 - 17:00" },
      { day: "Söndag", hours: "Stängt" }
    ]
  }
];

const solnaTeam = [
  {
    name: "Rosangela Lima",
    title: "Frisör skönhet hudterapeut",
    specialties: [
      "Klippning",
      "Slingor",
      "Färgning",
      "Keratin",
      "Hudterapeut",
      "Ansiktsbehandling",
      "Braziliansk vaxning",
      "Laser hårborttagning",
      "Hårvård",
      "Hårbehandling",
      "Kroppsvård",
      "Reducering av fett",
      "Reducering massage",
      "Celluiliter"
    ],
    image: "https://static.wixstatic.com/media/8f7788_5151a69b73984f2997c10d2746c44d86~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eb3c684b-99d1-4490-9028-73719b3a6901_edi.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "/team/rosangela-lima",
    slug: "rosangela-lima"
  },
  {
    name: "July",
    title: "Skönhetsterapeut",
    specialties: [
       "Vaxnings speciallist",
     
    ],
    image: "https://i.ibb.co/NcYLY5x/photo-2025-08-23-07-53-47-2.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    slug: "july"
  },
  {
    name: "Hayder",
    title: "Estetiska injektionsbehandlingar",
    specialties: [
      "Neurotoxin",
      "Fillers",
      "Polynukleotider (PN)",
      "Skinbooster / Mesoterapi",
      "PRP - med kroppens egna resurser"
    ],
    image: "https://drhaddebeauty.se/img777.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/dr-hadde-beauty-131864",
    slug: "Hayder"
  }
];

const sodermalmTeam = [];

export default function TeamSection() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  const desktopTeam = [...solnaTeam, ...sodermalmTeam];

  return (
    <section className="py-24 bg-neutral-50" id="team-section">
      <div className="container">
        {/* Friskvård Banner */}
        <FriskvardBanner />

        {/* Salons Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light text-center mb-4"
        >
          Våra Salonger
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto"
        >
          Besök oss på någon av våra salonger och boka tid hos någon av våra skickliga specialister.
        </motion.p>

        {/* Salon Cards */}
        <div className="max-w-7xl mx-auto mb-24">
          {salons.map((salon) => (
            <motion.div
              key={salon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white via-[#FDFBF8] to-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Video */}
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden bg-neutral-900">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="https://lh3.googleusercontent.com/ggs/AF1QipPAf3IP9-5gSepBP0TJD2fdlD-abWjdAHwL_DMF=m18" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                </div>

                {/* Right Side - Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="text-4xl font-semibold bg-gradient-to-r from-[#D4B78F] to-[#E6CCAF] bg-clip-text text-transparent mb-6 text-center">
                      {salon.name}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {salon.locations.map((loc) => (
                        <div key={loc.name} className="text-center">
                          <p className="text-neutral-800 font-medium text-xl mb-2">{loc.name}</p>
                          <p className="text-neutral-600">{loc.address}</p>
                          <p className="text-neutral-500">{loc.postal}</p>
                          {loc.name === "Södermalm" && (
                        
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 1. CTA Button */}
                  <button
                    onClick={() => setShowLocationPopup(true)}
                    className="group relative flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#D4B78F] to-[#E6CCAF] text-white rounded-2xl
                      hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden mb-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E6CCAF] to-[#D4B78F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Calendar className="w-6 h-6 relative z-10" />
                    <span className="text-xl font-medium relative z-10">Boka i Solna eller Södermalm</span>
                  </button>

                  {/* Contact & Hours */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#D4B78F]/20 hover:border-[#D4B78F]/40 transition-all duration-300 relative overflow-hidden group/contact">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4B78F]/5 rounded-full -mr-12 -mt-12 transition-transform group-hover/contact:scale-150 duration-700" />
                      <div className="flex items-center gap-5 relative z-10">
                        <div className="bg-gradient-to-br from-[#D4B78F] to-[#E6CCAF] p-4 rounded-xl shadow-md">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4B78F] mb-1">
                            Gemensam Bokning
                          </p>
                          <a
                            href={`tel:${salon.phone.replace(/\s/g, '')}`}
                            className="text-2xl font-bold text-neutral-800 hover:text-[#D4B78F] transition-colors"
                          >
                            {salon.phone}
                          </a>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[11px] font-medium text-neutral-500 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4B78F]"></span> Solna
                            </span>
                            <span className="text-[11px] font-medium text-neutral-500 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4B78F]"></span> Södermalm
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#D4B78F]/10 hover:border-[#D4B78F]/30 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-[#D4B78F]/10 p-2 rounded-lg">
                          <Clock className="w-5 h-5 text-[#D4B78F]" />
                        </div>
                        <h4 className="text-lg font-medium text-neutral-800">Öppettider</h4>
                      </div>
                      <div className="space-y-2 ml-11">
                        {salon.openingHours.map((time) => (
                          <div key={time.day} className="flex justify-between items-center text-sm">
                            <span className="text-neutral-600 font-medium">{time.day}</span>
                            <span className="text-neutral-800 font-semibold">{time.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NEW SECTION: Aesthetic Treatments Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-24 relative"
        >
          <div className="bg-neutral-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles className="w-32 h-32 text-[#D4B78F]" />
            </div>
            
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Profile Image Column */}
              <div className="lg:col-span-2 relative h-[400px] lg:h-auto">
                <img 
                  src="https://drhaddebeauty.se/img777.jpg" 
                  alt="Hayder - Estetiska Injektioner" 
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent lg:bg-gradient-to-r"></div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-3 p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4B78F]/10 border border-[#D4B78F]/20 w-fit">
                    <Sparkles className="w-4 h-4 text-[#D4B78F]" />
                    <span className="text-[#D4B78F] text-xs font-bold uppercase tracking-widest">Nyhet hos oss</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 w-fit">
                    <Star className="w-4 h-4 text-red-500" />
                    <span className="text-red-500 text-xs font-bold uppercase tracking-widest">10% rabatt på botox</span>
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-5xl font-light text-white mb-6 leading-tight">
                  Avancerade <span className="text-[#D4B78F] italic">Injektionsbehandlingar</span> av Dr. Hayder
                </h3>
                
                <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                  Vi är stolta över att presentera våra nya estetiska behandlingar. Med precision och medicinsk expertis hjälper Hayder dig att framhäva din naturliga skönhet genom marknadens främsta metoder.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {[
                    { title: "Neurotoxin & Fillers", icon: <ShieldCheck className="w-5 h-5" /> },
                    { title: "Polynukleotider (PN)", icon: <Zap className="w-5 h-5" /> },
                    { title: "Skinbooster / Mesoterapi", icon: <Sparkles className="w-5 h-5" /> },
                    { title: "PRP - Kroppens egna resurser", icon: <Heart className="w-5 h-5" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-neutral-200">
                      <div className="text-[#D4B78F]">{item.icon}</div>
                      <span className="text-sm font-medium tracking-wide">{item.title}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://www.bokadirekt.se/places/dr-hadde-beauty-131864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4B78F] hover:bg-[#E6CCAF] text-neutral-900 rounded-full transition-all duration-300 font-bold uppercase tracking-widest text-sm"
                >
                  Upptäck alla behandlingar
                  <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Section */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light text-center mb-4"
        >
          Vårt Team
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto"
        >
          Möt våra erfarna specialister som är här för att ta hand om dig
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desktopTeam.map((member) => (
            <TeamMember key={member.slug} {...member} />
          ))}
        </div>
      </div>

      {/* Location Selection Popup */}
      <AnimatePresence>
        {showLocationPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLocationPopup(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
                <button
                  onClick={() => setShowLocationPopup(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-6 h-6 text-neutral-600" />
                </button>

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4B78F] to-[#E6CCAF] rounded-full mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-2">Välj Salong</h3>
                  <p className="text-neutral-600">Vilken av våra salonger vill du boka hos?</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-[#D4B78F]/20 hover:border-[#D4B78F] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D4B78F]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4B78F]/20 transition-colors">
                        <MapPin className="w-6 h-6 text-[#D4B78F]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-neutral-800 mb-1">Solna</h4>
                        <p className="text-sm text-neutral-600">Solnavägen 29 H</p>
                      </div>
                      <Calendar className="w-5 h-5 text-[#D4B78F] group-hover:scale-110 transition-transform" />
                    </div>
                  </a>

                  <a
                    href="https://www.bokadirekt.se/places/sodermalm-frisor-och-brasiliansk-vaxning-stylingbybrazil-50453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-[#D4B78F]/20 hover:border-[#D4B78F] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D4B78F]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4B78F]/20 transition-colors">
                        <MapPin className="w-6 h-6 text-[#D4B78F]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-neutral-800 mb-1">Södermalm</h4>
                        <p className="text-sm text-neutral-600">Götgatan 81</p>
                      </div>
                      <Calendar className="w-5 h-5 text-[#D4B78F] group-hover:scale-110 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
