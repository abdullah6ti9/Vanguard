import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../../types';

interface WhatWeDoProps {
  onNavigate: (page: PageRoute) => void;
}

interface ServicePreviewItem {
  number: string;
  title: string;
  route: PageRoute;
  shortDesc: string;
  image: string;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const services: ServicePreviewItem[] = [
    {
      number: "01",
      title: "CUSTOM HOMES",
      route: "services",
      shortDesc: "Ground-up architectural construction tailored precisely to your estate's geography and lifestyle.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      number: "02",
      title: "RENOVATIONS",
      route: "services",
      shortDesc: "Complete interior and structural overhauls breathing contemporary energy into established homes.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      number: "03",
      title: "ADDITIONS",
      route: "services",
      shortDesc: "Seamless second-story pop-tops, master suite expansions, and ground-up detached ADUs.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      number: "04",
      title: "INTERIORS",
      route: "services",
      shortDesc: "Gourmet open kitchens, curbless wet-room spa baths, and bespoke architectural millwork.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      number: "05",
      title: "EXTERIOR WORK",
      route: "services",
      shortDesc: "Fire-resistant Hardie siding, architectural roofing, and resort-style composite decks.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const activeService = services[activeIndex];

  return (
    <section className="py-24 bg-slate-950 text-white border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400 block">
              02 — CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              What We Do
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center space-x-1 cursor-pointer"
          >
            <span>Explore All Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* INTERACTIVE LIST + PREVIEW IMAGE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LIST COLUMN (7 COLS) */}
          <div className="lg:col-span-7 space-y-2">
            {services.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.number}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => onNavigate(item.route)}
                  className={`group p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-slate-900/90 border-slate-700 shadow-2xl'
                      : 'bg-transparent border-transparent hover:bg-slate-900/40 hover:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-6">
                      <span className={`font-mono text-sm font-bold ${isActive ? 'text-amber-400' : 'text-slate-600'}`}>
                        {item.number}
                      </span>
                      <h3 className={`text-xl sm:text-3xl font-light tracking-wider transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <ArrowUpRight className={`w-5 h-5 transition-all ${
                      isActive ? 'text-amber-400 translate-x-0 opacity-100' : 'text-slate-600 opacity-0 group-hover:opacity-100'
                    }`} />
                  </div>

                  {/* SHORT DESCRIPTION (SHOW ON ACTIVE OR HOVER) */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isActive ? 'max-h-20 pt-3 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-slate-300 text-xs sm:text-sm font-light pl-12 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DYNAMIC IMAGE PREVIEW COLUMN (5 COLS) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[480px]">
              <img
                key={activeService.image}
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 block mb-1">
                  {activeService.number} • {activeService.title}
                </span>
                <p className="text-xs text-slate-300 font-light leading-snug">
                  {activeService.shortDesc}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
