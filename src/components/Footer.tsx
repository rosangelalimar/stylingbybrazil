import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white/90">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Solna Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-light text-[#D4B78F] mb-6">Solna</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4B78F] mt-1" />
                <div>
                  <p>Solnavägen 29 H</p>
                  <p>171 45, Solna</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4B78F]" />
                <a href="tel:0760955887" className="hover:text-[#D4B78F] transition-colors">
                  076-095 58 87
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4B78F]" />
                <a href="mailto:info@stylingbybrazil.se" className="hover:text-[#D4B78F] transition-colors">
                  info@stylingbybrazil.se
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-light text-[#D4B78F] mb-6">Snabblänkar</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/priser" className="hover:text-[#D4B78F] transition-colors">
                  Priser
                </Link>
              </li>
              <li>
                <Link to="/boka" className="hover:text-[#D4B78F] transition-colors">
                  Boka Tid
                </Link>
              </li>
              <li>
                <Link to="/behandlingar" className="hover:text-[#D4B78F] transition-colors">
                  Behandlingar
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-[#D4B78F] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="text-xl font-light text-[#D4B78F] mb-6">Följ Oss</h3>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#D4B78F] p-3 rounded-full hover:bg-[#E6CCAF] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#D4B78F] p-3 rounded-full hover:bg-[#E6CCAF] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>

            <div className="space-y-3">
              <h4 className="text-[#D4B78F] font-light flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D4B78F]" />
                Öppettider
              </h4>
              <div className="space-y-1 text-sm">
                <p>Mån-Fre: 10:00 - 19:00</p>
                <p>Lör: 10:00 - 17:00</p>
                <p>Sön: Stängt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} StylingByBrazil. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6 text-sm text-neutral-400">
              <a href="/privacy" className="hover:text-[#D4B78F] transition-colors">
                Integritetspolicy
              </a>
              <a href="/terms" className="hover:text-[#D4B78F] transition-colors">
                Villkor
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}