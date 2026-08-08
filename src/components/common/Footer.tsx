import React from 'react';
import { PageRoute } from '../../types';
import { businessInfo } from '../../data/businessInfo';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          
          {/* BRAND */}
          <div className="md:col-span-5 space-y-3">
            <div
              onClick={() => handleNav('home')}
              className="cursor-pointer group inline-block"
            >
              <span className="text-xl font-bold tracking-widest text-white uppercase block">
                VANGUARD
              </span>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 font-light uppercase block group-hover:text-amber-400 transition-colors">
                CRAFTSMEN
              </span>
            </div>
            <p className="text-xs text-slate-400 font-light max-w-sm leading-relaxed">
              General contracting and architectural construction for homes built with intention across Southern California.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-light text-slate-400">
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Work
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* DIRECT CONTACT */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300 block">
              Direct Contact
            </span>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono">
              <p>
                <a href={`tel:${businessInfo.phone}`} className="text-white hover:text-amber-400 transition-colors font-bold">
                  {businessInfo.phoneFormatted}
                </a>
              </p>
              <p>
                <a href={`mailto:${businessInfo.email}`} className="hover:text-amber-400 transition-colors">
                  {businessInfo.email}
                </a>
              </p>
              <p className="text-slate-400 font-sans text-xs pt-1">
                Los Angeles & Metropolitan CA • CSLB #{businessInfo.licenseNumber}
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4 font-light">
          <p>© {new Date().getFullYear()} {businessInfo.companyName}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={onOpenQuoteModal} className="hover:text-amber-400 transition-colors cursor-pointer font-bold uppercase tracking-wider text-amber-400">
              Get a Quote
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
