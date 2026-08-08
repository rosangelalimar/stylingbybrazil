import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { Scissors, Sparkles, Eye, Star, Zap, Heart } from 'lucide-react';

interface PriceCategory {
  title: string;
  services: {
    name: string;
    price: string;
  }[];
}

const treatments = [
  {
    title: "Allt för Hår",
    description: "Professionell hårvård med fokus på hälsa och skönhet. Från keratinbehandling till färgning och styling.",
    icon: Scissors,
    color: "beige"
  },
  {
    title: "Vaxning och Laser",
    description: "Effektiv och skonsam hårborttagning med moderna metoder för långvarigt resultat.",
    icon: Star,
    color: "beige"
  },
  {
    title: "Bryn och Fransar",
    description: "Framhäv din naturliga skönhet med våra specialiserade ögon- och brynbehandlingar.",
    icon: Eye,
    color: "beige"
  },
  {
    title: "Ansiktsbehandlingar",
    description: "Avancerad hudvård och anti-aging behandlingar för strålande resultat.",
    icon: Sparkles,
    color: "beige"
  },
  {
    title: "Nagelvård",
    description: "Professionell hand- och fotvård med högkvalitativa produkter.",
    icon: Heart,
    color: "beige"
  },
  {
    title: "Fettreducering",
    description: "Moderna behandlingar för kroppskonturering och fettreducering.",
    icon: Zap,
    color: "beige"
  }
];

const priceList: PriceCategory[] = [
  {
    title: "Frisör och Behandling",
    services: [
      { name: "barn klippning upp till 8-15 år", price: "495 kr" },
      { name: "barn klippning 5-7 år", price: "350 kr" },
      { name: "Klippning Kort Dam", price: "550 kr" },
      { name: "Klippning Mellan & Långt", price: "650 kr" },
      { name: "Klippning + Inpackning", price: "950 kr" },
      { name: "Klippning mellan & krulligt", price: "650 kr" },
      { name: "Barn klippning 1-7 år", price: "350 kr" },
      { name: "Snaggning/luggklipp Men", price: "250 kr" },
      { name: "Vanlig Herrklippning", price: "380 kr" },
      { name: "Herrklipning - Ny frisyr ev.", price: "450 kr" },
      { name: "Styling Fön kort hår", price: "350 kr" },
      { name: "Styling Fön + Locka hår", price: "690 kr" },
      { name: "tvätt och fön med styling, långt hår", price: "450 - 550 kr" },
      { name: "Harvard inpacking/stylingfön", price: "280 kr" },
      { name: "Blond recovery", price: "280 kr" },
      { name: "Hår behandling Anti Frizz ECO100", price: "Konsultation" },
      { name: "Keraplex inpackning-DEEP", price: "890 kr" },
      { name: "RECOVERY infusion behandling inpacking deep", price: "900 kr" },
      { name: "Hår inpacking snabb reparation", price: "330 kr" },
      { name: "Bottenfärg + klippning", price: "1650 kr" },
      { name: "Bottenfärg/utväxt (+ lätt fön)", price: "1300 kr" },
      { name: "blekning av botten/avfärgning", price: "1700 kr" },
      { name: "färgning+klippning axellångt +långt/tjockt hår", price: "1999 kr" },
      { name: "Slingor kort hår/highlights", price: "1655 kr" },
      { name: "Slingor - Balayage långt hår", price: "2500 kr" },
      { name: "Blekning av botten/avfärgning", price: "800 kr" },
      { name: "Redutox Djup Keratin", price: "2000 kr" },
      { name: "Anti Frizz Solution/protein behandling", price: "1500 kr" },
      { name: "Keratin kort/återbesök", price: "2500 kr" },
      { name: "Keratin lizz terapy - långt hår", price: "3800 kr" },
      { name: "Keratin lizz terapy extra långt/tjockt", price: "4500 kr" },
      { name: "Keratin Lizz Therapy afro hår", price: "3500 kr" },
      { name: "Keratin Lizz Therapy Mellan Lång", price: "2800 kr" },
      { name: "Keratin Lizz therapy - Extra lång", price: "2800 kr" },
      { name: "Keratin konsultation", price: "Varierar" }
    ]
  },
  {
    title: "Laserbehandling",
    services: [
      { name: "Konsultation Laser hårborttagning", price: "200 kr" },
      { name: "Laser av Ansikte", price: "1495 kr" },
      { name: "Laser- Hals", price: "600 kr" },
      { name: "Laser överläpp+haka", price: "900 kr" },
      { name: "Laser Nacke eller Hals", price: "690 kr" },
      { name: "Laser av överläpp+underläpp+haka", price: "890 kr" },
      { name: "Laser Braziliansk intim  dam", price: "1700 kr" },
      { name: "Laser Bikinilinjen", price: "1300 kr" },
      { name: "Laser- Armhålor (axiler)", price: "950 kr" },
      { name: "Laser -Rumpa dam herr", price: "1800 kr" },
      { name: "Laser Halva ben(vader)", price: "1650 kr" },
      { name: "Laser Armar hela (båda)", price: "1300 kr" },
      { name: "Laser -Armar (halva)", price: "1700 kr" },
      { name: "LASER: Hela ben", price: "2500 kr" },
      { name: "Laser-halv ben (Lår)", price: "1800 kr" },
      { name: "Laser Rygg herr", price: "Från 2700 kr" },
      { name: "Laser Brasiliansk Intim Herr", price: "1800 kr" },
      { name: "Laser herr bröst+mage+rygg Paket", price: "3800 kr" },
      { name: "Laser Bröst Herr", price: "2290 kr" },
      { name: "Laser Rygg Dam/Herr -50%", price: "975 kr" },
      { name: "Laser Intim+rumpa", price: "Från 1000 kr" },
      { name: "Laser Bikinilinjen +hela ben", price: "2200 kr" },
      { name: "Laser Lår (framsidan och baksidan)", price: "2300 kr" }
    ]
  },
  {
    title: "Braziliansk vaxning dam/herr",
    services: [
      { name: "Brasiliansk vaxning intim (Dam)", price: "550 kr" },
      { name: "Brasilianska -Under graviditet intim", price: "550 kr" },
      { name: "Bikinilinjen", price: "330 kr" },
      { name: "Hela armarna", price: "385 kr" },
      { name: "Hela ben dam/ herr", price: "545 kr" },
      { name: "Halva ben(vader)", price: "350 kr" },
      { name: "Lår (benen)", price: "385 kr" },
      { name: "Intim +rumpa", price: "800 kr" },
      { name: "Rumpa herr", price: "350 kr" },
      { name: "Halva armar", price: "300 kr" },
      { name: "Brasiliansk intim+ ögonbryn (dam)", price: "750 kr" },
      { name: "Bikinilinjen + Stjärt(mellan skinkorna)dam", price: "500 kr" },
      { name: "Brasiliansk Intim + Hela ben (dam)", price: "995 kr" },
      { name: "Brasiliansk vaxning intim + halva armar", price: "750 kr" }
    ]
  },
  {
    title: "Bryn och Fransar",
    services: [
      { name: "Brynformning eller Färgning", price: "250 kr" },
      { name: "Bryns formning + vax av hela ansiktet", price: "550 kr" },
      { name: "Browlift", price: "699 kr" },
      { name: "Återbesök microblading", price: "1500 kr" },
      { name: "Bryn färgning + plockning", price: "699 kr" },
      { name: "Färgning av Fransar", price: "500 kr" },
      { name: "Vaxning av hela ansikte + Formning av bryn", price: "100 kr" },
      { name: "Vaxning av näsa/öra dam herr (en området)", price: "200 kr" },
      { name: "Vaxning överläpp +haka", price: "100 kr" }
    ]
  },
  {
    title: "Ansiktsbehandling",
    services: [
      { name: "Anti Aging - Wrinkle reduction & Facial tightening", price: "690 kr" },
      { name: "Ansiktslyft åtstramning-ökning av kollagen och elastin 30min", price: "850 kr" },
      { name: "Ansiktslyft åtstramning-ökning av kollagen och elastin 45min", price: "1000 kr" },
      { name: "Kemisk peeling Firlonga- AHA syror/ TCA 35%", price: "950 kr" },
      { name: "Ansiktsbehandling /Återbesök", price: "850 kr" },
      { name: "Microneedling-Hyaluronsyra -Vitamincocktail", price: "1100 kr" }
    ]
  },
  {
    title: "Coolshaping-2 Fettfrysning",
    services: [
      { name: "Konsultation fettfrysning", price: "200 kr" },
      { name: "Coolshaping behandling", price: "900 kr" }
    ]
  }
];

export default function Priser() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPriceList = priceList
    .filter(category => !selectedCategory || category.title === selectedCategory);

  return (
    <div>
      <PageHero 
        title="Våra Priser"
        description="Transparent prissättning för alla våra behandlingar"
        image="https://img.freepik.com/premium-photo/woman-curly-skin-salon-fashion-hair-makeup-brunette-haircut-glamour-long-female-beauty-face-style-hairstyle-bright-health-model-healthy-care_163305-243150.jpg"
      />
      
      {/* Treatment Categories */}
      <section className="py-16 bg-beige-50">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <div 
                key={index}
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 opacity-5 transform rotate-12 group-hover:rotate-45 transition-transform duration-700">
                  <treatment.icon className="w-32 h-32" />
                </div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg mb-4 bg-beige-50 text-beige-500">
                    <treatment.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-light mb-2">{treatment.title}</h3>
                  <p className="text-neutral-600 text-sm">{treatment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-24">
        <div className="container max-w-5xl">
          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto price-categories-scroll mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300
                ${!selectedCategory 
                  ? 'bg-beige-500 text-white' 
                  : 'bg-white text-neutral-600 hover:bg-beige-50'}`}
            >
              Alla
            </button>
            {priceList.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300
                  ${selectedCategory === category.title 
                    ? 'bg-beige-500 text-white' 
                    : 'bg-white text-neutral-600 hover:bg-beige-50'}`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Price Categories */}
          <div className="space-y-8">
            {filteredPriceList.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100 
                  transform hover:scale-[1.02] transition-all duration-500"
              >
                <div className="bg-gradient-to-r from-beige-400 to-beige-500 px-6 py-4">
                  <h2 className="text-xl text-white font-light">{category.title}</h2>
                </div>
                <div className="divide-y divide-neutral-100">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="flex justify-between items-center px-6 py-4 hover:bg-beige-50 transition-colors duration-200"
                    >
                      <span className="text-neutral-700">{service.name}</span>
                      <span className="text-beige-500 font-medium">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
