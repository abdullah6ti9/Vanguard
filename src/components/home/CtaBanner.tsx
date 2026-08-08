import React from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { Button } from '../common/Button';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/40 rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Risk • Itemized Estimates</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to Start Your Project?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg">
              Speak directly with a Senior Construction Estimator. Receive an itemized fixed-price proposal within 48 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <Button
              variant="primary"
              size="xl"
              onClick={onOpenQuoteModal}
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Request Free Quote
            </Button>

            <a
              href={`tel:${businessInfo.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-lg"
            >
              <Phone className="w-5 h-5 mr-2 text-amber-400 fill-amber-400/20" />
              Call {businessInfo.phoneFormatted}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
