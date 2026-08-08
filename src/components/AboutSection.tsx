import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: "Passion för Skönhet",
    description: "Vi brinner för att hjälpa dig att känna dig vacker och självsäker.",
    color: "rose"
  },
  {
    icon: Award,
    title: "Expertis & Kvalitet",
    description: "Vårt team är certifierat och uppdaterat med de senaste teknikerna.",
    color: "lavender"
  },
  {
    icon: Users,
    title: "Personlig Service",
    description: "Vi skräddarsyr varje behandling efter dina unika behov.",
    color: "mint"
  },
  {
    icon: Clock,
    title: "Lång Erfarenhet",
    description: "Över 20 års erfarenhet av skönhetsbehandlingar.",
    color: "beige"
  }
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid-lg opacity-50"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://static.wixstatic.com/media/8f7788_c37bad2563c94e39b55d0ab926ad8ddb~mv2.png/v1/fill/w_604,h_873,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/8f7788_c37bad2563c94e39b55d0ab926ad8ddb~mv2.png"
                alt="StylingByBrazil Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-[#D4B78F] text-white p-4 rounded-xl shadow-lg"
            >
              <Award className="w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-rose-500 text-white p-4 rounded-xl shadow-lg"
            >
              <Heart className="w-8 h-8" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <h2 className="text-4xl font-light mb-8 bg-gradient-to-r from-[#D4B78F] to-[#E6CCAF] bg-clip-text text-transparent">
              StylingByBrazil
            </h2>
            
            <div className="space-y-6 text-neutral-600">
              <p>
                Med nyfikenhet och perfektion i fokus vill vi alltid ligga i framkant inom de behandlingstekniker 
                och resultat när vi utför våra behandlingar för alla hårtyper och hudtyper. Vi vill att du ska 
                känna dig trygg och omhändertagen hos oss.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2 rounded-lg transition-all duration-300 
                        ${feature.color === 'rose' && 'bg-rose-50 text-rose-500 group-hover:bg-rose-100'}
                        ${feature.color === 'lavender' && 'bg-lavender-50 text-lavender-500 group-hover:bg-lavender-100'}
                        ${feature.color === 'mint' && 'bg-mint-50 text-mint-500 group-hover:bg-mint-100'}
                        ${feature.color === 'beige' && 'bg-beige-50 text-[#D4B78F] group-hover:bg-beige-100'}`}
                      >
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-medium text-neutral-800">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-neutral-600 pl-14">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <p className="font-medium text-neutral-800">
                  Välkommen till Salong Styling by Brazil - hoppas att vi ses!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}