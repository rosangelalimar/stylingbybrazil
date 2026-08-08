import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const categories = [
  'Alla',
  'Frisör',
  'Slingor',
  'Färgning',
  'Keratin',
  'Ögon & Bryn',
  'Vaxning',
  'Laser',
  'Ansiktsbehandlingar'
];

const results = [
  // Frisör results
  {
    id: 1,
    category: 'Frisör',
    description: 'Balayage & Styling',
    image: 'https://static.wixstatic.com/media/8f7788_60974645ffca4f10b1d2723d15049212~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_60974645ffca4f10b1d2723d15049212~mv2.jpg'
  },
  {
    id: 2,
    category: 'Frisör',
    description: 'Modern Klippning',
    image: 'https://static.wixstatic.com/media/8f7788_264fed831fe64abdb5aed22a717bc7b4~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_264fed831fe64abdb5aed22a717bc7b4~mv2.jpg'
  },
  {
    id: 3,
    category: 'Frisör',
    description: 'Färgning & Behandling',
    image: 'https://static.wixstatic.com/media/8f7788_06566bebde274525a89cd10eb8366be8~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_06566bebde274525a89cd10eb8366be8~mv2.jpg'
  },
  // Slingor results
  {
    id: 19,
    category: 'Slingor',
    description: 'Naturliga Slingor',
    image: 'https://static.wixstatic.com/media/8f7788_c8d278732e8d49e688cf04e7ccc4fb73~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_c8d278732e8d49e688cf04e7ccc4fb73~mv2.jpg'
  },
  {
    id: 20,
    category: 'Slingor',
    description: 'Balayage Highlights',
    image: 'https://static.wixstatic.com/media/8f7788_d95c83a9da67412fa2828a6ac416149f~mv2.jpg/v1/fill/w_600,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/stylingbybrazilstockholm_1696188914_3204187310642138515_12045400037.jpg'
  },
  {
    id: 21,
    category: 'Slingor',
    description: 'Babylights',
    image: 'https://static.wixstatic.com/media/8f7788_6b244b163f5d4e0c8af54db8e167dd06~mv2.jpg/v1/fill/w_600,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/stylingbybrazilstockholm_1695594156_3199198121089320391_12045400037.jpg'
  },
  {
    id: 22,
    category: 'Slingor',
    description: 'Foliage Teknik',
    image: 'https://static.wixstatic.com/media/8f7788_df5e1d2a6c8b49d69a9d9bc94c76c745~mv2.jpg/v1/fill/w_451,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_df5e1d2a6c8b49d69a9d9bc94c76c745~mv2.jpg'
  },
  {
    id: 23,
    category: 'Slingor',
    description: 'Blonde Transformation',
    image: 'https://static.wixstatic.com/media/8f7788_a65c33c9f1e94270a6660874cd6190d4~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_a65c33c9f1e94270a6660874cd6190d4~mv2.jpg'
  },
  {
    id: 24,
    category: 'Slingor',
    description: 'Kreativa Slingor',
    image: 'https://static.wixstatic.com/media/8f7788_264fed831fe64abdb5aed22a717bc7b4~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_264fed831fe64abdb5aed22a717bc7b4~mv2.jpg'
  },
  {
    id: 4,
    category: 'Frisör',
    description: 'Brud Styling',
    image: 'https://static.wixstatic.com/media/8f7788_311994b059b04ce693a009f144315f96~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_311994b059b04ce693a009f144315f96~mv2.jpg'
  },
  {
    id: 5,
    category: 'Frisör',
    description: 'Herrklippning',
    image: 'https://static.wixstatic.com/media/8f7788_a7814ee4d7644fc497bb10424f245a34~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_a7814ee4d7644fc497bb10424f245a34~mv2.jpg'
  },
  {
    id: 6,
    category: 'Frisör',
    description: 'Festfrisyr',
    image: 'https://static.wixstatic.com/media/8f7788_0430fccd3a574c18803be663095ecb44~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_0430fccd3a574c18803be663095ecb44~mv2.jpg'
  },
  // Keratin results
  {
    id: 7,
    category: 'Keratin',
    description: 'Keratin Behandling Före',
    image: 'https://static.wixstatic.com/media/8f7788_4d60becfc37648448fb7f021ff093c4b~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_4d60becfc37648448fb7f021ff093c4b~mv2.jpg'
  },
  {
    id: 8,
    category: 'Keratin',
    description: 'Keratin Behandling Efter',
    image: 'https://static.wixstatic.com/media/8f7788_89ee72cadfb64cfda7516b07527c8aee~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_89ee72cadfb64cfda7516b07527c8aee~mv2.jpg'
  },
  {
    id: 9,
    category: 'Keratin',
    description: 'Brazilian Keratin',
    image: 'https://static.wixstatic.com/media/8f7788_a0b6540225c244aea68e82cb2b8c3cbd~mv2.jpg/v1/fill/w_579,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_a0b6540225c244aea68e82cb2b8c3cbd~mv2.jpg'
  },
  {
    id: 10,
    category: 'Keratin',
    description: 'Keratin Resultat',
    image: 'https://static.wixstatic.com/media/8f7788_06b2e1913b1a4c8a82cb76a538949779~mv2.jpg/v1/fill/w_277,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8f7788_06b2e1913b1a4c8a82cb76a538949779~mv2.jpg'
  },
  {
    id: 11,
    category: 'Keratin',
    description: 'Keratin Transformation',
    image: 'https://static.wixstatic.com/media/8f7788_c167ff8840334ed38f53c9e43a6b3d4d~mv2.jpg/v1/fill/w_600,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/stylingbybrazilstockholm_1695763570_3200619264488846919_12045400037.jpg'
  },
  {
    id: 12,
    category: 'Keratin',
    description: 'Keratin Finish',
    image: 'https://static.wixstatic.com/media/8f7788_6131c31357744631b377bb3c0c611bf7~mv2.jpg/v1/fill/w_600,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/stylingbybrazilstockholm_1708638445_3308621542394455080_12045400037.jpg'
  },
  // Ögon & Bryn results
  {
    id: 13,
    category: 'Ögon & Bryn',
    description: 'Browlift Resultat',
    image: 'https://static.wixstatic.com/media/8f7788_d2db2097502147b8ae77faa551ec4886f000.jpg/v1/fill/w_360,h_640,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/8f7788_d2db2097502147b8ae77faa551ec4886f000.jpg'
  },
  {
    id: 14,
    category: 'Ögon & Bryn',
    description: 'Lashlift & Tint',
    image: 'https://static.wixstatic.com/media/8f7788_844b72e22ab9435cb06ec61da2ab4ebef000.jpg/v1/fill/w_360,h_640,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/8f7788_844b72e22ab9435cb06ec61da2ab4ebef000.jpg'
  },
  {
    id: 15,
    category: 'Ögon & Bryn',
    description: 'Brynmappning',
    image: 'https://static.wixstatic.com/media/8f7788_5466b075b44a4f0ca3851590aeb70f6ef000.jpg/v1/fill/w_360,h_640,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/8f7788_5466b075b44a4f0ca3851590aeb70f6ef000.jpg'
  },
  {
    id: 16,
    category: 'Ögon & Bryn',
    description: 'Ögonbrynsstyling',
    image: 'https://static.wixstatic.com/media/8f7788_25f734e060444e7f9ecf20aad1e11d6af000.jpg/v1/fill/w_360,h_640,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/8f7788_25f734e060444e7f9ecf20aad1e11d6af000.jpg'
  },
  {
    id: 17,
    category: 'Ögon & Bryn',
    description: 'Professionell Bryndesign',
    image: 'https://static.wixstatic.com/media/8f7788_c95ebd21eb284088a15c8f1e759b2c9f~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/justinapolivoda-20240127_181510-886598752.jpg'
  },
  {
    id: 18,
    category: 'Ögon & Bryn',
    description: 'Ögonbryn & Fransar',
    image: 'https://static.wixstatic.com/media/8f7788_e32cce53950548a691dce51714674302~mv2.jpg/v1/fill/w_600,h_524,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/justinapolivoda-20241012_141245-2821342731.jpg'
  }
];

export default function ResultsGallery() {
  const [selectedCategory, setSelectedCategory] = useState('Alla');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredResults = results.filter(
    result => selectedCategory === 'Alla' || result.category === selectedCategory
  );

  const displayResults = selectedCategory === 'Alla' 
    ? filteredResults.slice(0, 6) 
    : filteredResults;

  return (
    <div>
      {/* Mobile Category Dropdown */}
      <div className="md:hidden mb-8">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 bg-white border border-neutral-100 rounded-xl"
        >
          <span className="text-lg font-light">
            {selectedCategory === 'Alla' ? 'Välj Kategori' : selectedCategory}
          </span>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 bg-white border border-neutral-100 rounded-xl overflow-hidden"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsExpanded(false);
                  }}
                  className={`w-full p-4 text-left transition-colors duration-300
                    ${selectedCategory === category 
                      ? 'bg-rose-50 text-rose-500' 
                      : 'hover:bg-neutral-50'}`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Category Filter */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm
              ${selectedCategory === category 
                ? 'bg-gradient-to-r from-rose-500 to-lavender-500 text-white shadow-lg scale-105' 
                : 'bg-white text-neutral-600 hover:bg-neutral-50 hover:scale-105'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {displayResults.map((result) => (
            <motion.div
              key={result.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[4/3] md:aspect-square overflow-hidden rounded-xl bg-neutral-100"
            >
              <img
                src={result.image}
                alt={result.description}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-white text-sm mb-1">{result.category}</p>
                  <h3 className="text-white text-base md:text-lg font-light">{result.description}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {selectedCategory === 'Alla' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center aspect-[4/3] md:aspect-square rounded-xl bg-gradient-to-br from-rose-50 to-lavender-50 border border-neutral-100"
          >
            <div className="text-center p-4 md:p-6">
              <p className="text-lg md:text-xl font-light text-neutral-600 mb-2">Och mycket mer...</p>
              <p className="text-sm text-neutral-500">Välj en kategori för att se fler resultat</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}