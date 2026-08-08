import React from 'react';
import { MapPin, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  name: string;
  title: string;
  specialties: string[];
  image: string;
  location: string;
  phone: string;
  bookingUrl?: string;
  slug: string;
  workingDays?: string;
}

export default function TeamMember({
  name,
  title,
  specialties,
  image,
  location,
  phone,
  bookingUrl,
  slug,
  workingDays
}: TeamMemberProps) {
  // Always show 6 items, pad with empty strings if needed
  const displaySpecialties = [...specialties, ...Array(6)].slice(0, 6);
  
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[420px]">
      <div className="p-6 h-full flex flex-col">
        {/* Basic Info - Fixed Height */}
        <div className="flex items-start gap-4 h-24 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg shrink-0">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-light mb-1 bg-gradient-to-r from-[#D4B78F] to-[#E6CCAF] bg-clip-text text-transparent truncate">
              {name}
            </h3>
            <p className="text-sm text-neutral-600 mb-2 truncate">{title}</p>
            <div className="flex items-center gap-2 text-sm text-neutral-600 truncate">
              <MapPin className="w-4 h-4 shrink-0 text-[#D4B78F]" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600 truncate">
              <Phone className="w-4 h-4 shrink-0 text-[#D4B78F]" />
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[#D4B78F] transition-colors">
                {phone}
              </a>
            </div>
            {workingDays && (
              <div className="flex items-start gap-2 text-xs text-rose-500 mt-1">
                <Calendar className="w-3 h-3 shrink-0 mt-0.5" />
                <span className="leading-tight">{workingDays}</span>
              </div>
            )}
          </div>
        </div>

        {/* Specialties - Fixed Height Grid */}
        <div className="flex-grow mb-6">
          <div className="grid grid-cols-1 gap-2 h-[200px]">
            {displaySpecialties.map((specialty, index) => (
              <div 
                key={index} 
                className="flex items-start gap-2 text-sm text-neutral-600"
              >
                {specialty && (
                  <>
                    <span className="w-1 h-1 bg-[#D4B78F] rounded-full mt-2 shrink-0"></span>
                    <span className="leading-tight truncate">{specialty}</span>
                  </>
                )}
              </div>
            ))}
            {specialties.length > 6 && (
              <div className="text-sm bg-gradient-to-r from-[#D4B78F] to-[#E6CCAF] bg-clip-text text-transparent">
                +{specialties.length - 6} mer...
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons - Fixed Height */}
        <div className="flex gap-2 h-10">
          <Link 
            to={`/team/${slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 bg-white 
              text-[#D4B78F] border border-[#D4B78F] rounded-lg hover:bg-[#D4B78F] hover:text-white transition-colors duration-300"
          >
            Läs mer
          </Link>
          {bookingUrl ? (
            <a 
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 bg-[#D4B78F] 
                text-white rounded-lg hover:bg-[#E6CCAF] transition-colors duration-300"
            >
              Boka tid
            </a>
          ) : (
            <a 
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 bg-[#D4B78F] 
                text-white rounded-lg hover:bg-[#E6CCAF] transition-colors duration-300"
            >
              Ring nu
            </a>
          )}
        </div>
      </div>
    </div>
  );
}