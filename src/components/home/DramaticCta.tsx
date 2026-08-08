import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

interface DramaticCtaProps {
  onOpenQuoteModal: () => void;
}

export const DramaticCta: React.FC<DramaticCtaProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-32 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
      
      {/* BACKGROUND IMAGE WITH CINEMATIC DARK VIGNETTE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Architectural Masterpiece"
          className="w-full h-full object-cover object-center filter brightness-50"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-400 block">
          05 — GET STARTED
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight font-sans">
          Let's build something <br />
          <span className="font-serif italic text-amber-300 font-normal">worth keeping.</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Request an itemized fixed-price proposal or speak directly with our senior field estimators.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href={`tel:${businessInfo.phone}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 hover:border-slate-500 font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-md transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            <span>Call Us {businessInfo.phoneFormatted}</span>
          </a>
        </div>
      </div>

    </section>
  );
};
