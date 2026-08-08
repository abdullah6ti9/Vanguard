import React, { useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { serviceAreasData } from '../data/serviceAreasData';
import { ZipCodeChecker } from '../components/home/ZipCodeChecker';
import { MapPin, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';
import { updatePageMeta } from '../utils/seo';

interface ServiceAreasPageProps {
  onOpenQuoteModal: () => void;
}

export const ServiceAreasPage: React.FC<ServiceAreasPageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    updatePageMeta(
      "Service Areas & Locations Covered | Licensed General Contractor",
      "Vanguard Craftsmen serves Metropolitan CA including Bel Air, Pasadena, Santa Monica, Calabasas, Malibu, Encino, and adjacent communities. Check your zip code for service coverage."
    );
  }, []);

  return (
    <div className="bg-slate-950 text-white py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeading
          eyebrow="Local Service Coverage"
          title="Cities & Communities We Serve"
          description="Vanguard operates dedicated field superintendents and active construction crews across Metropolitan California."
          darkBg
        />

        {/* ZIP CODE LOOKUP TOOL */}
        <ZipCodeChecker onOpenQuoteModal={onOpenQuoteModal} />

        {/* CITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {serviceAreasData.map((area) => (
            <div
              key={area.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4 hover:border-amber-500/40 transition-all shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{area.cityName}</h3>
                    <span className="text-xs text-slate-400">{area.countyName}</span>
                  </div>
                </div>

                {area.isPrimaryZone && (
                  <span className="bg-amber-500/10 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-500/20">
                    Primary Service Hub
                  </span>
                )}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {area.description}
              </p>

              {area.featuredProjectTitle && (
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
                  <span className="font-bold text-amber-400 block">Featured Neighborhood Project:</span>
                  <span className="text-slate-200">{area.featuredProjectTitle}</span>
                </div>
              )}

              {/* ZIP CODES */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Covered Zip Codes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {area.zipCodes.map((zip) => (
                    <span
                      key={zip}
                      className="px-2.5 py-1 bg-slate-950 text-amber-400 font-mono text-xs rounded-md border border-slate-800"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <Button variant="primary" size="sm" onClick={onOpenQuoteModal} icon={<ArrowRight className="w-4 h-4" />}>
                  Request Free Quote in {area.cityName}
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
