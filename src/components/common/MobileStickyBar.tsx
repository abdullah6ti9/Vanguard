import React from 'react';
import { Phone, Calculator } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

interface MobileStickyBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden shadow-2xl flex items-center gap-2">
      <a
        href={`tel:${businessInfo.phone}`}
        className="flex-1 inline-flex items-center justify-center py-3 px-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-sm hover:bg-slate-800 active:bg-slate-950 transition-colors shadow-sm"
      >
        <Phone className="w-4 h-4 mr-2 text-amber-400 fill-amber-400/20" />
        Call Now
      </a>

      <button
        onClick={onOpenQuoteModal}
        className="flex-1 inline-flex items-center justify-center py-3 px-3 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-sm hover:bg-amber-400 active:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20 border border-amber-400 cursor-pointer"
      >
        <Calculator className="w-4 h-4 mr-2 stroke-[2.5]" />
        Get Free Quote
      </button>
    </div>
  );
};
