```tsx
import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import {
  Scissors,
  Sparkles,
  Eye,
  Star,
  Zap,
  Heart,
  Dumbbell,
  Hand,
  Waves
} from 'lucide-react';

interface PriceCategory {
  title: string;
  services: {
    name: string;
    price: string;
  }[];
}

const treatments = [
  {
    title: "Klippning",
    description: "Professionell hårklippning för dam, herr och barn.",
    icon: Scissors,
    color: "beige"
  },
  {
    title: "Styling & Hårvård",
    description: "Styling, fön, hårvård och avancerade behandlingar för ett friskt och vackert hår.",
    icon: Sparkles,
    color: "beige"
  },
  {
    title: "Färg & Slingor",
    description: "Färgning, slingor, balayage och avancerade färgbehandlingar.",
    icon: Sparkles,
    color: "beige"
  },
  {
    title: "Keratin & Protein",
    description: "Keratin- och proteinbehandlingar för ett slätare och friskare hår.",
    icon: Zap,
    color: "beige"
  },
  {
    title: "Laser Permanent Hårborttagning",
    description: "Effektiv permanent hårborttagning med laser.",
    icon: Star,
    color: "beige"
  },
  {
    title: "Brasiliansk Vaxning",
    description: "Vaxbehandlingar för dam och herr.",
    icon: Heart,
    color: "beige"
  },
  {
    title: "Bryn och Fransar",
    description: "Framhäv din naturliga skönhet med bryn- och fransbehandlingar.",
    icon: Eye,
    color: "beige"
  },
  {
    title: "Ansiktsbehandlingar",
    description: "Avancerad hudvård, ansiktsföryngring och kemisk peeling.",
    icon: Sparkles,
    color: "beige"
  },
  {
    title: "Kroppskulptering & Celluliter",
    description: "Moderna behandlingar för kroppskonturering, muskelstimulering och fettreducering.",
    icon: Dumbbell,
    color: "beige"
  },
  {
    title: "Kroppspeeling",
    description: "Mekanisk rengöring och peeling av kroppen.",
    icon: Waves,
    color: "beige"
  },
  {
    title: "Klassisk Massage & Friskvård",
    description: "Avslappning och friskvårdsbehandlingar för hela kroppen.",
    icon: Heart,
    color: "beige"
  },
  {
    title: "Permanent Lack, Manikyr & Pedikyr",
    description: "Professionell manikyr och pedikyr med permanent gellack.",
    icon: Hand,
    color: "beige"
  }
];

const priceList: PriceCategory[] = [
  {
    title: "Ansiktsbehandlingar",
    services: [
      {
        name: "Ansiktsföryngring (Indiba Radiofrekvens 448 kHz)",
        price: "Från 790 kr"
      },
      {
        name: "Djuprengörande ansikte + Kemisk peeling (Hydra Touch H2 / Mikrodermabrasion)",
        price: "Från 1 000 kr"
      },
      {
        name: "Hyaluronsyra Vitamincocktail & Kemisk peeling (NCTF Filorga)",
        price: "Från 950 kr"
      }
    ]
  },
  {
    title: "Bryn och Fransar",
    services: [
      {
        name: "Färgning av fransar + Bryn färg inkl. plockning (Kombo)",
        price: "550 kr"
      },
      {
        name: "Bryns plock + formning (Vaxning & pincett)",
        price: "Från 350 kr"
      },
      {
        name: "Färgning av fransar",
        price: "250 kr"
      },
      {
        name: "Vaxning överläpp & haka",
        price: "Från 150 kr"
      },
      {
        name: "Paket: Överläpp + Haka + Näsa",
        price: "Från 300 kr"
      }
    ]
  },
  {
    title: "Klippning",
    services: [
      {
        name: "Klippning Dam (Kort hår)",
        price: "Från 600 kr"
      },
      {
        name: "Klippning mellanlångt / lockigt (Specialist)",
        price: "Från 750 kr"
      },
      {
        name: "Hårklippning Herr",
        price: "Från 500 kr"
      },
      {
        name: "Barnklippning (5–7 år)",
        price: "Från 295 kr"
      },
      {
        name: "Klippning + Inpackning",
        price: "1 300 kr"
      },
      {
        name: "Luggklippning",
        price: "Från 350 kr"
      },
      {
        name: "Skägg med trimmer",
        price: "250 kr"
      }
    ]
  },
  {
    title: "Styling & Hårvård",
    services: [
      {
        name: "Styling fön (rak eller lockig fön för långt hår)",
        price: "Från 899 kr"
      },
      {
        name: "Tvätt och fön med styling (Långt hår)",
        price: "450 kr"
      },
      {
        name: "Inpackning: Intense repair mask med styling fön",
        price: "Från 1 350 kr"
      },
      {
        name: "Hårvårdsprodukter (Truss, Keune, Garden Hair)",
        price: "Från 249 kr"
      },
      {
        name: "Honey advanced-infusion behandling",
        price: "Från 750 kr"
      },
      {
        name: "Hårväxtstimulering (Microneedling & skalpmassage)",
        price: "1 990 kr"
      }
    ]
  },
  {
    title: "Färg & Slingor",
    services: [
      {
        name: "Utväxtfärgning / Toning med nyansering + Klippning",
        price: "Från 1 400 kr"
      },
      {
        name: "Bottenfärg (Utväxtfärgning) + Klippning",
        price: "Från 1 600 kr"
      },
      {
        name: "Färg + Klippning (Slingor / Avancerad färg)",
        price: "1 950 kr"
      },
      {
        name: "Kort hår / Highlights (Blekning av botten / Avfärgning)",
        price: "Från 1 650 kr"
      },
      {
        name: "Färgning + Klippning (Axellångt / Långt / Tjockt hår)",
        price: "Från 1 999 kr"
      },
      {
        name: "Slingor-Balayage (Mellan / Lång stor teknisk)",
        price: "Från 2 500 kr"
      }
    ]
  },
  {
    title: "Keratin & Protein Behandlingar",
    services: [
      {
        name: "Keratin Konsultation",
        price: "Kostnadsfri / Boka"
      },
      {
        name: "1- Botox djupt Keratin Protein",
        price: "Från 2 000 kr"
      },
      {
        name: "2- Keratin Återbesök (Utväxt/botten, 2–3 mån)",
        price: "Från 2 500 kr"
      },
      {
        name: "3- Keratin Reduct lizz Brazilian Hair (Mellanlångt hår)",
        price: "Från 3 000 kr"
      },
      {
        name: "4- Keratin (Extra långt afro och tjockt hår)",
        price: "Från 3 500 kr"
      }
    ]
  },
  {
    title: "Laser Permanent Hårborttagning",
    services: [
      {
        name: "Konsultation Laser hårborttagning",
        price: "Kostnadsfri / Boka"
      },
      {
        name: "Laser av ansikte",
        price: "700 kr"
      },
      {
        name: "Laser - Bikini",
        price: "Från 700 kr"
      },
      {
        name: "Laser - Brasiliansk intim (Dam eller herr)",
        price: "Från 850 kr"
      },
      {
        name: "Laser av rumpa (Dam eller herr)",
        price: "850 kr"
      },
      {
        name: "Laser - Hela armarna (Eller halva)",
        price: "Från 890 kr"
      },
      {
        name: "Laser - Hela ben / Lår (Eller vader)",
        price: "Från 990 kr"
      },
      {
        name: "Laser av rygg Herr",
        price: "980 kr"
      },
      {
        name: "Laser Paket: Brasiliansk intim + Armhålor",
        price: "1 300 kr"
      },
      {
        name: "Laser: Välj 2 delar av underkroppen",
        price: "Från 1 500 kr"
      },
      {
        name: "Laser Paket: Bröst + Magen + Rygg",
        price: "Från 1 600 kr"
      },
      {
        name: "Laser Paket (3 delar): Brasiliansk + Armhåla + Halva underben",
        price: "Från 1 850 kr"
      },
      {
        name: "Laser - Supreme (Välj 4 delar av kroppen)",
        price: "2 000 kr"
      },
      {
        name: "Laser Paket (Välj 5 delar av kroppen)",
        price: "2 600 kr"
      }
    ]
  },
  {
    title: "Brasiliansk Vaxning Dam",
    services: [
      {
        name: "Bikinilinjen",
        price: "300 - 350 kr"
      },
      {
        name: "Halva ben (Vader eller lår vaxning)",
        price: "330 - 350 kr"
      },
      {
        name: "Vaxning av Rumpa",
        price: "Från 350 kr"
      },
      {
        name: "Hela Armarna",
        price: "360 - 380 kr"
      },
      {
        name: "Paket: Bikinilinjen + Stjärt (Mellan skinkorna)",
        price: "450 - 500 kr"
      },
      {
        name: "Hela ben Dam",
        price: "545 kr"
      },
      {
        name: "Brasiliansk vaxning intim",
        price: "550 - 600 kr"
      },
      {
        name: "Brasilianska - Under graviditet intim",
        price: "600 kr"
      },
      {
        name: "Bikinilinjen + Hela ben",
        price: "750 - 850 kr"
      },
      {
        name: "Paket: Brasiliansk intim + Ögonbryn",
        price: "Från 800 kr"
      },
      {
        name: "Paket: Brasiliansk Intim + Armhålor",
        price: "Från 800 kr"
      },
      {
        name: "Paket: Brasiliansk intim + Halva ben",
        price: "850 - 900 kr"
      },
      {
        name: "Brasiliansk Intim + Hela ben (Paket)",
        price: "1 050 - 1 350 kr"
      },
      {
        name: "Paket: Brasiliansk Intim + Armhålor + Hela ben",
        price: "Från 1 350 kr"
      },
      {
        name: "Nacke (Dam eller herr)",
        price: "250 kr"
      },
      {
        name: "Vaxning av näsa/öra (Ett område, dam/herr)",
        price: "120 kr"
      },
      {
        name: "Armhålor (Axiller)",
        price: "250 - 300 kr"
      },
      {
        name: "Stort Vaxpaket (Brasiliansk intim + Runt stjärt + Hela armar + Armhålor + Hela ben + Rumpa + Rygg)",
        price: "2 350 - 2 500 kr"
      }
    ]
  },
  {
    title: "Brazilian Vaxning Män",
    services: [
      {
        name: "Vaxning av näsa/öra (Ett område, dam/herr)",
        price: "120 kr"
      },
      {
        name: "Nacke (Dam eller herr)",
        price: "250 kr"
      },
      {
        name: "Vaxning av ryggen Herr",
        price: "550 kr"
      },
      {
        name: "Paket: Bröst + Magen",
        price: "575 kr"
      },
      {
        name: "Brasiliansk vaxning intim",
        price: "680 kr"
      },
      {
        name: "Brasiliansk vaxning intim + Rygg",
        price: "Från 950 kr"
      },
      {
        name: "Bröst + Mage + Rygg + Axlar",
        price: "950 - 1 100 kr"
      },
      {
        name: "Stort Vaxpaket Herr (Brasiliansk intim + Hela armar + Armhålor + Hela ben + Rumpa + Rygg + Bröst + Magen)",
        price: "Från 3 200 kr"
      }
    ]
  },
  {
    title: "Kroppskulptering & Celluliter",
    services: [
      {
        name: "Coolshaping fettfrysning (1 handstycke)",
        price: "990 kr"
      },
      {
        name: "Coolshaping fettfrysning (2 handstycken)",
        price: "Från 1 500 kr"
      },
      {
        name: "INSCULPT - Muskelstimulering (Paket, 6 sessioner)",
        price: "3 300 kr (550 kr per gång)"
      },
      {
        name: "ButtockTightening / Insculpt muskelstimulering",
        price: "790 kr"
      },
      {
        name: "INSCULPT - Muskelstimulering (4 handstycken)",
        price: "Från 750 kr"
      },
      {
        name: "Power shape eller Indiba Maskin (Kampanj)",
        price: "Från 750 kr"
      },
      {
        name: "Celluliter behandling / Reduction of Cellulite",
        price: "Från 800 kr"
      },
      {
        name: "Efter operation / Post-Surgery-behandling",
        price: "Från 1 000 kr"
      },
      {
        name: "Fettreducering (Minskning av lokala fettdepåer)",
        price: "1 000 kr"
      }
    ]
  },
  {
    title: "Kroppspeeling",
    services: [
      {
        name: "Peeling: Mekanisk rengöring av ryggen",
        price: "350 kr"
      }
    ]
  },
  {
    title: "Klassisk Massage & Friskvård",
    services: [
      {
        name: "Friskvårdsmassage för smärtlindring (Med Indiba-maskinen)",
        price: "1 000 kr"
      },
      {
        name: "Avslappningsmassage (Axlar, armar, rygg, ben, nacke)",
        price: "Från 950 kr"
      }
    ]
  },
  {
    title: "Permanent Lack, Manikyr & Pedikyr",
    services: [
      {
        name: "Permanent lack (Gellack) Pedikyr & Manikyr - Kombo",
        price: "900 kr"
      }
    ]
  }
];

export default function Priser() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPriceList = priceList.filter(
    category => !selectedCategory || category.title === selectedCategory
  );

  return (
    <div>
      <PageHero
        title="Priser"
        subtitle="Våra behandlingar och aktuella priser"
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

                  <h3 className="text-xl font-light mb-2">
                    {treatment.title}
                  </h3>

                  <p className="text-neutral-600 text-sm">
                    {treatment.description}
                  </p>
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
                ${
                  !selectedCategory
                    ? 'bg-beige-500 text-white'
                    : 'bg-white text-neutral-600 hover:bg-beige-50'
                }`}
            >
              Alla
            </button>

            {priceList.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300
                  ${
                    selectedCategory === category.title
                      ? 'bg-beige-500 text-white'
                      : 'bg-white text-neutral-600 hover:bg-beige-50'
                  }`}
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
                  <h2 className="text-xl text-white font-light">
                    {category.title}
                  </h2>
                </div>

                <div className="divide-y divide-neutral-100">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-center px-6 py-4 hover:bg-beige-50 transition-colors duration-200"
                    >
                      <span className="text-neutral-700">
                        {service.name}
                      </span>

                      <span className="text-beige-500 font-medium whitespace-nowrap ml-4">
                        {service.price}
                      </span>
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
```
