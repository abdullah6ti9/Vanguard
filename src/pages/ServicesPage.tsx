import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Clock, DollarSign, Check, ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react';
import { updatePageMeta } from '../utils/seo';

interface ServicesPageProps {
  onOpenQuoteModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);

  useEffect(() => {
    updatePageMeta(
      "Contracting Services | Kitchens, Baths, Additions & Exteriors",
      "Explore Vanguard's master construction services including kitchen remodeling, spa bathrooms, room additions, whole-home renovations, roofing, siding, and composite decking."
    );
  }, []);

  const activeService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  return (
    <div className="bg-slate-950 text-white pt-28 lg:pt-36 pb-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeading
          eyebrow="Precision Construction Services"
          title="Master Remodeling & Building Solutions"
          description="Detailed line-item pricing, guaranteed calendar schedules, and 10-year craftsmanship warranties on all residential construction."
          darkBg
        />

        {/* SERVICE SELECTION TABS */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 border-b border-slate-800">
          {servicesData.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setSelectedServiceId(svc.id)}
              className={`px-5 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedServiceId === svc.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {svc.title}
            </button>
          ))}
        </div>

        {/* ACTIVE SERVICE DETAILED SHOWCASE */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT TEXT */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3 text-xs font-semibold text-amber-400">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> Typical Timeline: {activeService.typicalTimeline}</span>
                <span>•</span>
                <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1" /> Investment: {activeService.startingPriceRange}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {activeService.title}
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                {activeService.fullDescription}
              </p>

              {/* FEATURES LIST */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                  Key Scope Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenQuoteModal}
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Request Free Quote for {activeService.title}
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* PROCESS STEPS */}
          <div className="pt-8 border-t border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white">
              {activeService.title} Execution Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeService.processSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                  <span className="text-amber-400 font-bold font-mono text-sm block">Step 0{idx + 1}</span>
                  <p className="font-semibold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
