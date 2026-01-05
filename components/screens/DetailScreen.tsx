import React from 'react';
import { ArrowLeft, Heart, Star, MapPin, Bed, Bath, Square, Phone, MessageCircle } from 'lucide-react';
import { PROPERTIES, CURRENT_AGENT } from '../../constants';

const DetailScreen: React.FC = () => {
  const property = PROPERTIES[0];

  return (
    <div className="h-full bg-white flex flex-col relative overflow-y-auto phone-scroll">
      {/* Image Header */}
      <div className="relative h-72 w-full shrink-0">
        <img src={property.image} alt="Detail" className="w-full h-full object-cover" />

        {/* Top Actions */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
            <ArrowLeft className="text-white" size={20} />
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
            <Heart className="text-white" size={20} />
          </div>
        </div>

        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
          <div className="bg-white/90 backdrop-blur-md inline-flex items-center px-2 py-1 rounded-lg gap-1 mb-2">
            <Star size={12} className="fill-accent-orange text-accent-orange" />
            <span className="text-xs font-bold">{property.rating} (1.2k reviews)</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pt-6 -mt-4 bg-white rounded-t-3xl relative z-10">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-2xl font-bold font-heading text-neutral-900 leading-tight">{property.title}</h2>
            <div className="flex items-center gap-1 text-neutral-500 text-xs mt-1">
              <MapPin size={12} /> {property.location}
            </div>
          </div>
          <div className="text-right">
            <span className="block text-xl font-bold text-primary">{property.price}</span>
            <span className="text-xs text-neutral-400">/mo</span>
          </div>
        </div>

        {/* Specs */}
        <div className="flex justify-between py-6 border-b border-neutral-100">
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-600">
              <Bed size={18} />
            </div>
            <span className="text-xs font-medium text-neutral-500">{property.beds} Bed</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-600">
              <Bath size={18} />
            </div>
            <span className="text-xs font-medium text-neutral-500">{property.baths} Bath</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-600">
              <Square size={18} />
            </div>
            <span className="text-xs font-medium text-neutral-500">{property.sqft} sqft</span>
          </div>
        </div>

        {/* Description */}
        <div className="py-6 border-b border-neutral-100">
          <h3 className="font-bold text-neutral-900 mb-2">Description</h3>
          <p className="text-sm text-neutral-500 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Amenities */}
        <div className="py-6 border-b border-neutral-100">
          <h3 className="font-bold text-neutral-900 mb-4">Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {property.amenities.map(amenity => (
              <span key={amenity} className="px-3 py-1.5 bg-neutral-50 text-neutral-600 text-xs font-medium rounded-lg border border-neutral-100">
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Agent */}
        <div className="py-6 pb-24">
          <h3 className="font-bold text-neutral-900 mb-4">Agent</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={CURRENT_AGENT.image} className="w-12 h-12 rounded-full object-cover" alt="Agent" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <p className="font-bold text-sm text-neutral-900">{CURRENT_AGENT.name}</p>
                <p className="text-xs text-neutral-500">{CURRENT_AGENT.role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
                <MessageCircle size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
                <Phone size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-neutral-100">
        <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/30 active:scale-95 transition-transform">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DetailScreen;