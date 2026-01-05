import React from 'react';
import { Search, Mic, MapPin, Bell, ArrowRight } from 'lucide-react';
import { PROPERTIES } from '../../constants';

const HomeScreen: React.FC = () => {
  return (
    <div className="h-full bg-neutral-50 flex flex-col overflow-y-auto phone-scroll pb-16">
      {/* Header */}
      <div className="p-6 bg-white pb-4 sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-neutral-500 text-xs mb-1">Location</p>
            <div className="flex items-center gap-1 text-primary font-semibold text-sm">
              <MapPin size={14} className="fill-primary" />
              San Francisco, CA
            </div>
          </div>
          <div className="relative">
            <Bell size={24} className="text-neutral-700" />
            <div className="absolute -top-1 -right-0.5 w-2.5 h-2.5 bg-accent-red rounded-full border-2 border-white"></div>
            <img
              src="https://picsum.photos/id/65/100/100"
              alt="User"
              className="w-8 h-8 rounded-full ml-4 object-cover inline-block border border-gray-100"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold font-heading text-neutral-900 mb-4">
          Hey, User! <br />
          <span className="text-neutral-500 font-normal text-lg">Let's start exploring</span>
        </h1>

        <div className="relative">
          <Search className="absolute left-3 top-3 text-neutral-400" size={18} />
          <input
            type="text"
            placeholder="Search House, Apt..."
            className="w-full pl-10 pr-10 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none"
          />
          <div className="absolute right-2 top-2 bg-white p-1 rounded-lg shadow-sm">
            <Mic size={16} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-2">
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {['All', 'House', 'Apartment', 'Villa', 'Penthouse', 'Loft', 'Cottage'].map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${i === 0
                ? 'bg-primary text-white shadow-md shadow-primary/30'
                : 'bg-white text-neutral-600 border border-neutral-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Banner */}
      <div className="px-6 mt-2 mb-6">
        <div className="relative w-full h-40 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
          <img src="https://picsum.photos/id/192/400/200" className="w-full h-full object-cover" alt="Halloween Sale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white font-bold text-lg">Halloween Sale!</h3>
            <p className="text-white/90 text-xs mb-2">All discount up to 60%</p>
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ArrowRight size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Popular Properties */}
      <div className="px-6 pb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-neutral-800">Popular Nearby</h3>
          <span className="text-xs text-primary font-medium">See All</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          {PROPERTIES.map(prop => (
            <div key={prop.id} className="min-w-[220px] bg-white p-3 rounded-2xl border border-neutral-100 shadow-sm">
              <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded-md">
                  <span className="text-[10px] font-bold text-primary">★ {prop.rating}</span>
                </div>
              </div>
              <h4 className="font-bold text-neutral-900 text-sm truncate">{prop.title}</h4>
              <p className="text-neutral-500 text-xs mb-2 flex items-center gap-1">
                <MapPin size={10} /> {prop.location}
              </p>
              <div className="flex justify-between items-end">
                <span className="text-primary font-bold text-sm">{prop.price}</span>
                <span className="text-[10px] text-neutral-400">{prop.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;