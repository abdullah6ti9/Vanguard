import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { PageRoute } from '../../types';

interface HeroProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-slate-950 text-white overflow-hidden pt-28 pb-12">
      
      {/* HIGH-RES ARCHITECTURAL CINEMATIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Architectural Masterpiece Built by Vanguard Craftsmen"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 animate-in fade-in duration-1000"
        />
        {/* SUBTLE DARK EDITORIAL VIGNETTE & GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px]" />
      </div>

      {/* TOP LOCATION & BRAND SUBHEAD */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-4">
        <div className="inline-flex items-center space-x-3 text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-400/90 bg-slate-950/60 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800/80">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>LOS ANGELES & SOUTHERN CALIFORNIA</span>
        </div>
      </div>

      {/* HERO MAIN EDITORIAL COPY */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-12">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] font-bold text-slate-400 font-sans">
            VANGUARD CRAFTSMEN
          </p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[0.95] font-sans">
            Built with <br />
            <span className="font-serif italic text-amber-300 font-normal">intention.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-xl font-light leading-relaxed font-sans pt-2">
            General contracting and custom construction for homes built to last.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 hover:border-slate-500 font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-md transition-all cursor-pointer flex items-center justify-center"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <div className="flex items-center space-x-6 font-mono text-[11px] text-slate-400">
          <span>LIC #1098421</span>
          <span>•</span>
          <span>$5M INSURED</span>
          <span>•</span>
          <span>EST. 2011</span>
        </div>

        <button
          onClick={() => {
            window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll down to work"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

    </section>
  );
};
