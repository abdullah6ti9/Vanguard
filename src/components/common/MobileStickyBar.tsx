import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

interface MobileStickyBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/90 backdrop-blur-xl border-t border-slate-800/80 p-3 sm:hidden shadow-2xl flex items-center gap-3">
      <a
        href={`tel:${businessInfo.phone}`}
        className="flex-1 inline-flex items-center justify-center py-3 px-4 rounded-full bg-slate-900 border border-slate-700/80 text-slate-200 font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 mr-2 text-amber-400" />
        Call
      </a>

      <button
        onClick={onOpenQuoteModal}
        className="flex-1 inline-flex items-center justify-center py-3 px-4 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg cursor-pointer space-x-1"
      >
        <span>Get a Quote</span>
        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
      </button>
    </div>
  );
};

