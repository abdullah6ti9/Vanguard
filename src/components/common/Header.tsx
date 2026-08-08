import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../../types';
import { businessInfo } from '../../data/businessInfo';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Work', route: 'projects' },
    { label: 'Services', route: 'services' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer group flex flex-col justify-center"
            >
              <span className="text-lg sm:text-xl font-bold tracking-widest text-white uppercase font-sans">
                VANGUARD
              </span>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 font-light uppercase -mt-0.5 group-hover:text-amber-400 transition-colors">
                CRAFTSMEN
              </span>
            </div>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = currentPage === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`text-xs uppercase tracking-widest font-semibold transition-colors relative py-1 cursor-pointer ${
                      isActive
                        ? 'text-amber-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* RIGHT ACTION BUTTONS */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href={`tel:${businessInfo.phone}`}
                className="text-xs tracking-wider text-slate-300 hover:text-amber-400 transition-colors font-mono"
              >
                {businessInfo.phoneFormatted}
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all shadow-md cursor-pointer flex items-center space-x-1"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* MOBILE HAMBURGER TOGGLE */}
            <div className="flex md:hidden items-center space-x-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-white cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN OVERLAY MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-300">
          <div className="space-y-6 text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-semibold block">
              Navigation
            </span>
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className="block w-full text-left text-3xl font-light tracking-wide text-slate-100 hover:text-amber-400 transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-6 pt-8 border-t border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 block">
                Direct Contact
              </span>
              <a
                href={`tel:${businessInfo.phone}`}
                className="text-lg font-mono font-bold text-amber-400 block"
              >
                {businessInfo.phoneFormatted}
              </a>
              <span className="text-xs text-slate-400 block">
                Los Angeles & Metropolitan CA • CSLB #{businessInfo.licenseNumber}
              </span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-4 rounded-full bg-amber-500 text-slate-950 font-bold text-sm uppercase tracking-widest hover:bg-amber-400 transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
};

