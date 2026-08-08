import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Sparkles, Star, Heart, Scissors, Users } from 'lucide-react';

// Define treatment categories and their specialists
const treatments = {
  'Frisör': ['rosangela-lima', 'noir-t'],
  'Keratin': ['rosangela-lima'],
  'Laser': ['rosangela-lima', 'tatiana-h'],
  'Hudvård': ['rosangela-lima', 'tatiana-h', 'justina-polivoda'],
  'Ögon & Bryn': ['justina-polivoda'],
  'Vaxning': ['rosangela-lima'],
  'Nagelvård': ['rosangela-lima'],
  'Ansiktsbehandling': ['rosangela-lima', 'tatiana-h'],
  'Kroppsbehandling': ['rosangela-lima', 'tatiana-h']
};

const teamMembers = {
  'rosangela-lima': {
    name: 'Rosangela Lima',
    title: 'Certifierad Skönhetsterapeut',
    image: 'https://static.wixstatic.com/media/8f7788_5151a69b73984f2997c10d2746c44d86~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eb3c684b-99d1-4490-9028-73719b3a6901_edi.jpg',
    location: 'Solna',
    specialties: ['Frisör', 'Keratin', 'Laser', 'Hudvård', 'Vaxning', 'Nagelvård', 'Ansiktsbehandling', 'Kroppsbehandling']
  },
  'tatiana-h': {
    name: 'Tatiana H.',
    title: 'Certifierad Hudterapeut',
    image: 'https://static.wixstatic.com/media/8f7788_69aebb91fd98466a842e6e02e2c6d9c9~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/thumbnail_f8f820d1-11fb-42fe-9ffd-ae2737.jpg',
    location: 'Södermalm',
    specialties: ['Laser', 'Hudvård', 'Ansiktsbehandling', 'Kroppsbehandling']
  },
  'justina-polivoda': {
    name: 'Justina Polivoda',
    title: 'Cidesco-diplomerad hudterapeut',
    image: 'https://static.wixstatic.com/media/8f7788_cf871a14f08d416cb3218474e2377690~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/download.jpg',
    location: 'Solna',
    specialties: ['Hudvård', 'Ögon & Bryn']
  },
  'noir-t': {
    name: 'Noir T.',
    title: 'Frisör',
    image: 'https://static.wixstatic.com/media/8f7788_827e9905211647778aefccc98c9c4a86~mv2.jpeg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-09-27%20at%2022_01_13.jpeg',
    location: 'Solna',
    specialties: ['Frisör']
  }
};

const locations = {
  'Solna': {
    address: 'Solnavägen 29 H',
    postal: '171 45, Solna',
    phone: '076-095 58 87',
    treatments: ['Frisör', 'Keratin', 'Laser', 'Hudvård', 'Ögon & Bryn', 'Vaxning', 'Nagelvård', 'Ansiktsbehandling', 'Kroppsbehandling']
  },
  'Södermalm': {
    address: 'Katarina Bangata 15',
    postal: '116 39, Södermalm',
    phone: '073-441 12 55',
    treatments: ['Frisör', 'Hudvård', 'Laser', 'Ansiktsbehandling', 'Kroppsbehandling']
  }
};

type Step = 'location' | 'treatment' | 'specialist';

const stepIcons = {
  location: MapPin,
  treatment: Sparkles,
  specialist: Users
};

export default function Boka() {
  const [step, setStep] = useState<Step>('location');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(null);

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setStep('treatment');
  };

  const handleTreatmentSelect = (treatment: string) => {
    setSelectedTreatment(treatment);
    setStep('specialist');
  };

  const handleSpecialistSelect = (specialist: string) => {
    setSelectedSpecialist(specialist);
    window.location.href = 'https://www.bokadirekt.se';
  };

  const handleBack = () => {
    if (step === 'specialist') {
      setStep('treatment');
      setSelectedSpecialist(null);
    } else if (step === 'treatment') {
      setStep('location');
      setSelectedTreatment(null);
    }
  };

  const getAvailableSpecialists = () => {
    if (!selectedLocation || !selectedTreatment) return [];
    return treatments[selectedTreatment as keyof typeof treatments]
      .filter(id => teamMembers[id as keyof typeof teamMembers].location === selectedLocation);
  };

  const getAvailableTreatments = () => {
    if (!selectedLocation) return [];
    return locations[selectedLocation as keyof typeof locations].treatments;
  };

  const StepIcon = stepIcons[step];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-lavender-50">
      <div className="container max-w-6xl pt-32 pb-24">
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-10 text-rose-200 animate-float-slow">
          <Heart className="w-24 h-24" />
        </div>
        <div className="absolute bottom-20 left-10 text-lavender-200 animate-float-delayed">
          <Star className="w-24 h-24" />
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-rose-500 
              rounded-full mb-6 text-white"
          >
            <StepIcon className="w-10 h-10" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-light mb-4"
          >
            {step === 'location' && 'Välj Salong'}
            {step === 'treatment' && 'Välj Behandling'}
            {step === 'specialist' && 'Välj Specialist'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 max-w-xl mx-auto"
          >
            {step === 'location' && 'Börja med att välja den salong som passar dig bäst'}
            {step === 'treatment' && 'Utforska våra professionella behandlingar'}
            {step === 'specialist' && 'Välj den specialist som passar dina behov'}
          </motion.p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg">
            {['location', 'treatment', 'specialist'].map((s, index) => (
              <React.Fragment key={s}>
                {index > 0 && (
                  <div className={`h-px w-8 transition-colors duration-300
                    ${step === s || (index === 1 && step === 'specialist') 
                      ? 'bg-rose-500' 
                      : 'bg-neutral-200'}`} 
                  />
                )}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full 
                    transition-all duration-300 cursor-pointer
                    ${step === s 
                      ? 'bg-rose-500 text-white' 
                      : index < ['location', 'treatment', 'specialist'].indexOf(step) + 1
                        ? 'bg-rose-500 text-white'
                        : 'bg-neutral-100 text-neutral-400'}`}
                >
                  {index + 1}
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Back Button */}
        {step !== 'location' && (
          <div className="flex justify-center mb-8">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleBack}
              className="px-6 py-2 text-neutral-600 hover:text-rose-500 
                transition-colors duration-300 rounded-full hover:bg-white"
            >
              ← Tillbaka
            </motion.button>
          </div>
        )}

        {/* Content */}
        <AnimatePresence mode="wait">
          {/* Location Selection */}
          {step === 'location' && (
            <motion.div
              key="location"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {Object.entries(locations).map(([name, info]) => (
                <motion.button
                  key={name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLocationSelect(name)}
                  className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 text-left overflow-hidden group"
                >
                  <div className="absolute -right-8 -bottom-8 text-rose-50 transform 
                    rotate-12 group-hover:rotate-45 transition-transform duration-700">
                    <MapPin className="w-32 h-32" />
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-light mb-4">{name}</h3>
                    <p className="text-neutral-600 mb-1">{info.address}</p>
                    <p className="text-neutral-600 mb-6">{info.postal}</p>
                    <div className="flex flex-wrap gap-2">
                      {info.treatments.slice(0, 4).map(treatment => (
                        <span key={treatment} className="text-sm bg-rose-50 
                          px-3 py-1 rounded-full text-rose-600">
                          {treatment}
                        </span>
                      ))}
                      {info.treatments.length > 4 && (
                        <span className="text-sm bg-rose-50 px-3 py-1 
                          rounded-full text-rose-600">
                          +{info.treatments.length - 4} mer
                        </span>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Treatment Selection */}
          {step === 'treatment' && (
            <motion.div
              key="treatment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {getAvailableTreatments().map((treatment) => (
                <motion.button
                  key={treatment}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTreatmentSelect(treatment)}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 text-left group relative overflow-hidden"
                >
                  <div className="absolute -right-4 -bottom-4 text-rose-50 transform 
                    rotate-12 group-hover:rotate-45 transition-transform duration-700">
                    <Sparkles className="w-24 h-24" />
                  </div>
                  <div className="relative">
                    <h3 className="text-xl mb-2 group-hover:text-rose-500 
                      transition-colors duration-300">
                      {treatment}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {treatments[treatment as keyof typeof treatments].length} tillgängliga specialister
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Specialist Selection */}
          {step === 'specialist' && (
            <motion.div
              key="specialist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {getAvailableSpecialists().map((specialistId) => {
                const specialist = teamMembers[specialistId as keyof typeof teamMembers];
                return (
                  <motion.button
                    key={specialistId}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSpecialistSelect(specialistId)}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl 
                      transition-all duration-300 overflow-hidden group"
                  >
                    <div className="aspect-[3/2] relative">
                      <img 
                        src={specialist.image} 
                        alt={specialist.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-light mb-1">{specialist.name}</h3>
                        <p className="text-white/90 text-sm">{specialist.title}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {specialist.specialties.slice(0, 3).map((specialty, index) => (
                          <span 
                            key={index}
                            className="text-sm bg-rose-50 px-3 py-1 rounded-full text-rose-600"
                          >
                            {specialty}
                          </span>
                        ))}
                        {specialist.specialties.length > 3 && (
                          <span className="text-sm bg-rose-50 px-3 py-1 rounded-full text-rose-600">
                            +{specialist.specialties.length - 3} mer
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Selection Summary */}
        {(selectedLocation || selectedTreatment || selectedSpecialist) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto"
          >
            <h3 className="text-lg font-light mb-4 text-center">Din Bokning</h3>
            <div className="space-y-3">
              {selectedLocation && (
                <div className="flex items-center gap-3 text-neutral-600">
                  <MapPin className="w-5 h-5 text-rose-400" />
                  <span>{selectedLocation}</span>
                </div>
              )}
              {selectedTreatment && (
                <div className="flex items-center gap-3 text-neutral-600">
                  <Sparkles className="w-5 h-5 text-rose-400" />
                  <span>{selectedTreatment}</span>
                </div>
              )}
              {selectedSpecialist && (
                <div className="flex items-center gap-3 text-neutral-600">
                  <Users className="w-5 h-5 text-rose-400" />
                  <span>{teamMembers[selectedSpecialist as keyof typeof teamMembers].name}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}