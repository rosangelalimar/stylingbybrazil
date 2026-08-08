import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scissors, Star, Eye, Zap, Sparkles, Phone, Instagram, Facebook, ChevronDown, MapPin } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [frisorDropdownOpen, setFrisorDropdownOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const frisorItems = [
    { name: 'Slingor', path: '/slingor' },
    { name: 'Färgning', path: '/fargning' },
  ];

  const behandlingarItems = [
    { name: 'Kroppsbehandling', path: '/kroppsbehandling' },
    { name: 'Ansiktsbehandling', path: '/ansiktsbehandling' },
    { name: 'Fettreducering', path: '/fettreducering' },
  ];

  const menuItems = [
    { name: 'Keratin', path: '/keratin', icon: Sparkles },
    { name: 'Ögon & Bryn', path: '/ogon-bryn', icon: Eye },
    { name: 'Vaxning', path: '/vaxning', icon: Star },
    { name: 'Laser', path: '/laser', icon: Zap },
  ];

  return (
    <>
      {showAnnouncement && (
        <div className="hidden md:block fixed w-full z-50 top-0">
          <div className="bg-neutral-900 text-white py-2 px-4">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                <span>OBS: Just nu har vi vaxning på götgatan 81 i salong baresso, Ring för mer information för vi har begränsade tider. Boka online nedanför.</span>
              </div>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      <header 
        className={`fixed w-full transition-all duration-500 z-50 ${showAnnouncement ? 'md:top-8' : 'top-0'}
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gradient-to-b from-black/50 to-transparent'}`}
      >
      <div className="absolute inset-x-0 -bottom-20 bg-gradient-to-b from-black/10 to-transparent h-20 pointer-events-none"></div>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link 
              to="/"
              className={`text-2xl font-light tracking-wider transition-colors duration-300
                ${scrolled ? 'gradient-text-primary' : 'text-white'}`}
            >
              STYLING<span className="font-semibold">BY</span>BRAZIL
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              {/* Hem Link */}
              <Link
                to="/"
                className={`flex items-center gap-1 transition-all duration-300 hover:scale-105
                  ${scrolled 
                    ? 'text-neutral-600 hover:text-[#D4B78F]' 
                    : 'text-white/90 hover:text-white'}`}
              >
                <Star className="w-4 h-4" />
                <span className="whitespace-nowrap">Hem</span>
              </Link>

              {/* Frisör Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setFrisorDropdownOpen(true)}
                onMouseLeave={() => setFrisorDropdownOpen(false)}
              >
                <Link
                  to="/frisor"
                  className={`flex items-center gap-1 transition-all duration-300 hover:scale-105
                    ${scrolled 
                      ? 'text-neutral-600 hover:text-[#D4B78F]' 
                      : 'text-white/90 hover:text-white'}`}
                >
                  <Scissors className="w-4 h-4" />
                  <span className="whitespace-nowrap">Frisör</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${frisorDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {frisorDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className={`w-48 rounded-lg shadow-lg overflow-hidden
                      ${scrolled ? 'bg-white' : 'bg-black/80 backdrop-blur-sm'}`}
                    >
                      {frisorItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-4 py-2 text-sm transition-colors duration-200
                            ${scrolled 
                              ? 'text-neutral-600 hover:bg-neutral-50 hover:text-[#D4B78F]' 
                              : 'text-white/90 hover:bg-white/10 hover:text-white'}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-1 transition-all duration-300 hover:scale-105
                    ${scrolled 
                      ? 'text-neutral-600 hover:text-[#D4B78F]' 
                      : 'text-white/90 hover:text-white'}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{item.name}</span>
                </Link>
              ))}
              
              {/* Behandlingar Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to="/behandlingar"
                  className={`flex items-center gap-1 transition-all duration-300 hover:scale-105
                    ${scrolled 
                      ? 'text-neutral-600 hover:text-[#D4B78F]' 
                      : 'text-white/90 hover:text-white'}`}
                >
                  <Sparkles className="w-4 h-4" />
                  Behandlingar
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className={`w-48 rounded-lg shadow-lg overflow-hidden
                      ${scrolled ? 'bg-white' : 'bg-black/80 backdrop-blur-sm'}`}
                    >
                      {behandlingarItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`block px-4 py-2 text-sm transition-colors duration-200
                            ${scrolled 
                              ? 'text-neutral-600 hover:bg-neutral-50 hover:text-[#D4B78F]' 
                              : 'text-white/90 hover:bg-white/10 hover:text-white'}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-current opacity-20"></div>

              <div className="flex items-center gap-4">
                <a
                  href="tel:+46760955887"
                  className={`transition-all duration-300 hover:scale-110
                    ${scrolled ? 'text-[#D4B78F] hover:text-[#E6CCAF]' : 'text-white/90 hover:text-white'}`}
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/stylingbybrazilstockholm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110
                    ${scrolled ? 'text-[#D4B78F] hover:text-[#E6CCAF]' : 'text-white/90 hover:text-white'}`}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/stylingbybrazil/?locale=sv_SE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 hover:scale-110
                    ${scrolled ? 'text-[#D4B78F] hover:text-[#E6CCAF]' : 'text-white/90 hover:text-white'}`}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <Link
                  to="/priser"
                  className={`px-6 py-2 rounded-full gradient-border transition-all duration-300 hover:scale-105
                    ${scrolled 
                      ? 'text-[#D4B78F] hover:text-[#E6CCAF]' 
                      : 'text-white hover:text-rose-50'}`}
                >
                  Priser
                </Link>
              </div>
            </div>
          </div>

          <button
            className={`md:hidden transition-colors duration-300
              ${scrolled ? 'text-[#D4B78F]' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              {/* Mobile Menu Items */}
              <Link
                to="/"
                className="flex items-center gap-2 text-neutral-600 hover:text-[#D4B78F] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <Star className="w-4 h-4" />
                Hem
              </Link>

              {/* Mobile Frisör Submenu */}
              <div>
                <Link
                  to="/frisor"
                  className="flex items-center gap-2 text-neutral-600 hover:text-[#D4B78F] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Scissors className="w-4 h-4" />
                  Frisör
                </Link>
                <div className="pl-6 space-y-2 mt-2">
                  {frisorItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block text-neutral-600 hover:text-[#D4B78F] transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-2 text-neutral-600 hover:text-[#D4B78F] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Behandlingar Submenu */}
              <div>
                <Link
                  to="/behandlingar"
                  className="flex items-center gap-2 text-neutral-600 hover:text-[#D4B78F] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-4 h-4" />
                  Behandlingar
                </Link>
                <div className="pl-6 space-y-2 mt-2">
                  {behandlingarItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block text-neutral-600 hover:text-[#D4B78F] transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t">
                <a href="tel:+46123456789" className="text-[#D4B78F] hover:text-[#E6CCAF]">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#D4B78F] hover:text-[#E6CCAF]">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#D4B78F] hover:text-[#E6CCAF]">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <Link
                to="/priser"
                className="w-full px-6 py-2 rounded-full gradient-border text-[#D4B78F] hover:text-[#E6CCAF] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Priser
              </Link>
            </div>
          </div>
        )}
      </nav>
      </header>
    </>
  );
}
