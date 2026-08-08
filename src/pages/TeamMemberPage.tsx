import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Phone, ChevronDown } from 'lucide-react';

const teamMembers = {
  'rosangela-lima': {
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
    locations: [
      {
        name: "Solna",
        phone: "076-095 58 87",
        bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
        schedule: [
          { day: "Måndag", hours: "16:30 - 20:00" },
          { day: "Onsdag", hours: "09:30 - 19:00" },
          { day: "Lördag", hours: "09:00 - 16:00" }
        ]
      },
      {
        name: "Södermalm",
        phone: "076-095 58 87",
        bookingUrl: "https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453",
        schedule: [
          { day: "Måndag", hours: "10:00 - 15:00" },
          { day: "Tisdag", hours: "10:00 - 19:00" },
          { day: "Torsdag", hours: "10:00 - 19:00" }
        ]
      }
    ],
    bio: "Med över två decennier i skönhetsbranschen har Rosangela utvecklat en omfattande expertis inom flera områden. Hon är en mångsidig expert som behärskar allt från avancerad hårvård till kroppsbehandlingar. Hennes specialiteter inkluderar professionell hårfärgning, keratinbehandlingar och slingor för alla hårtyper. Som hudterapeut erbjuder hon skräddarsydda ansiktsbehandlingar och expertis inom laser hårborttagning. Rosangela är även specialiserad på kroppsbehandlingar som inkluderar fettreducering och anti-cellulitbehandlingar. Hennes helhetssyn på skönhet och välbefinnande, kombinerat med hennes tekniska skicklighet, gör henne till en eftertraktad expert för kunder som söker omfattande skönhetslösningar."
  },
  'tatiana-h': {
    name: "Tatiana H.",
    title: "Certifierad Hudterapeut",
    specialties: [
      "Ansiktsbehandling",
      "Laserbehandling",
      "Massage",
      "Hudvård",
      "Kroppsbehandling"
    ],
    image: "https://static.wixstatic.com/media/8f7788_69aebb91fd98466a842e6e02e2c6d9c9~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/thumbnail_f8f820d1-11fb-42fe-9ffd-ae2737.jpg",
    location: "Solna",
    phone: "073-441 12 55",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-solna-styling-by-brazil-klinink-58888",
    bio: "Tatiana är en erfaren och certifierad hudterapeut med specialisering inom avancerade ansiktsbehandlingar och laserterapi. Med sin djupa kunskap om hudens fysiologi och moderna behandlingstekniker erbjuder hon skräddarsydda lösningar för olika hudtillstånd. Hennes expertis omfattar allt från djuprengörande behandlingar till anti-aging och hudföryngrande procedurer."
  },
  'justina-polivoda': {
    name: "Justina Polivoda",
    title: "Cidesco-diplomerad hudterapeut",
    specialties: [
      "Ansiktsbehandling",
      "Ögonbryn",
      "Browlift",
      "Lashlift"
    ],
    image: "https://static.wixstatic.com/media/8f7788_cf871a14f08d416cb3218474e2377690~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/download.jpg",
    location: "Solna",
    phone: "072-913 70 04",
    bookingUrl: "https://www.bokadirekt.se/places/justina-polivoda-55860",
    bio: "Som Cidesco-diplomerad hudterapeut har Justina en gedigen utbildning och bred erfarenhet inom hudvård och skönhetsbehandlingar. Hon är särskilt erkänd för sitt arbete med ögonbryn och fransar, där hon kombinerar teknisk precision med ett konstnärligt öga för att skapa naturligt vackra resultat. Hennes specialitet ligger i browlift och lashlift behandlingar, där hon hjälper kunder att framhäva sina naturliga drag på bästa sätt."
  },
  'noir-t': {
    name: "Nori",
    title: "Frisör",
    specialties: [
      "Klippning herr",
      "Klippning dam",
      "Klippning barn",
      "Styling fön",
      "Från afro till skandinaviskt hår"
    ],
    image: "https://static.wixstatic.com/media/8f7788_827e9905211647778aefccc98c9c4a86~mv2.jpeg/v1/fill/w_600,h_808,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-09-27%20at%2022_01_13.jpeg",
    location: "Solna",
    phone: "070-465 65 13",
    bio: "Nori är en skicklig frisör med bred expertis inom olika hårtyper och stilar. Med särskild kompetens i att arbeta med allt från afro till skandinaviskt hår, erbjuder hon skräddarsydda lösningar för varje kunds unika behov. Hennes tekniska skicklighet kombinerat med ett kreativt öga gör henne till en mångsidig frisör som kan hantera alla typer av klippningar och stylingar."
  },
 
  'alyna': {
    name: "Alyna",
    title: "Nagel- och hudterap",
    specialties: [
      "Manikyr",
      "Pedikyr",
      "Gellack",
      "Nagel förlängning",
      "Vaxning",
      "Handvård",
      "Fotvård"
    ],
    image: "https://static.wixstatic.com/media/8f7788_c4f94b0b253a4850af69e94ad723d34b~mv2.jpg/v1/fill/w_357,h_600,al_c,q_80,enc_auto/8f7788_c4f94b0b253a4850af69e94ad723d34b~mv2.jpg",
    location: "Solna",
    phone: "076-095 58 87",
    bookingUrl: "https://www.bokadirekt.se/places/frisor-stockholm-sodermalm-styling-by-brazil-vaxning-50453",
    bio: "Alyna är vår mångsidiga expert inom nagelvård och vaxning med en särskild passion för att skapa vackra, hållbara nageldesigner. Med certifieringar inom både manikyr och pedikyr erbjuder hon omfattande hand- och fotvård av högsta kvalitet. Hennes tekniska skicklighet inom nagelförlängning och gellack, kombinerat med ett öga för detaljer, garanterar ett resultat som överträffar förväntningarna. Alyna håller sig ständigt uppdaterad med de senaste trenderna och teknikerna inom nagelvård för att kunna erbjuda sina kunder de mest moderna och eftertraktade behandlingarna."
  }
};

export default function TeamMemberPage() {
  const { slug } = useParams();
  const member = teamMembers[slug as keyof typeof teamMembers];
  const [expandedLocation, setExpandedLocation] = useState<string | null>(null);

  if (!member) {
    return <div>Member not found</div>;
  }

  const toggleLocation = (locationName: string) => {
    setExpandedLocation(expandedLocation === locationName ? null : locationName);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container max-w-4xl pt-32 pb-24">
        {/* Header with Circle Image */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-light mb-2">{member.name}</h1>
          <p className="text-xl text-neutral-600 mb-6">{member.title}</p>
          
          {/* Locations and Schedule */}
          {member.locations ? (
            <div className="w-full max-w-md space-y-4">
              {member.locations.map((location) => (
                <div key={location.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleLocation(location.name)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-beige-400" />
                      <span className="font-medium">{location.name}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 
                        ${expandedLocation === location.name ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedLocation === location.name && (
                    <div className="px-6 pb-4 space-y-3">
                      <div className="flex items-center gap-3 text-neutral-600">
                        <Phone className="w-5 h-5 text-beige-400" />
                        <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-beige-500">
                          {location.phone}
                        </a>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm text-neutral-500 mb-2">Öppettider:</p>
                        {location.schedule.map((time) => (
                          <div key={time.day} className="flex justify-between text-sm py-1">
                            <span className="text-neutral-600">{time.day}</span>
                            <span className="text-neutral-800">{time.hours}</span>
                          </div>
                        ))}
                      </div>
                      <a 
                        href={location.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-beige-500 text-white rounded-full hover:bg-beige-600 transition-colors"
                      >
                        <Calendar className="w-5 h-5" />
                        Boka tid i {location.name}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-neutral-600">
                <MapPin className="w-5 h-5 text-beige-400" />
                <span>{member.location}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Phone className="w-5 h-5 text-beige-400" />
                <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="hover:text-beige-500">
                  {member.phone}
                </a>
              </div>
            </div>
          )}
          
          {!member.locations && member.bookingUrl && (
            <a 
              href={member.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-beige-500 text-white rounded-full hover:bg-beige-600 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Boka tid
            </a>
          )}
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Bio */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="lead text-neutral-600">{member.bio}</p>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-2xl font-light mb-6">Specialiteter</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {member.specialties.map((specialty, index) => (
                <div 
                  key={index}
                  className="bg-neutral-50 p-4 rounded-lg text-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  {specialty}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
