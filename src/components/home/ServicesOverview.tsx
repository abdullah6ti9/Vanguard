import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { servicesData } from '../../data/servicesData';
import { Button } from '../common/Button';
import { ArrowRight, Clock, DollarSign, Check } from 'lucide-react';
import { PageRoute } from '../../types';

interface ServicesOverviewProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Master Construction Services"
          title="Renovation & Build Solutions Built for Quality"
          description="From custom kitchen remodeling and luxury bathrooms to whole-house additions, our master craftsmen handle every phase with precision."
          darkBg
        />

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 group hover:shadow-2xl"
            >
              {/* IMAGE HEADER */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  {service.popular && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
                      Most Requested
                    </div>
                  )}
                </div>

                {/* BODY CONTENT */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* SPECS BADGES */}
                  <div className="flex items-center space-x-4 text-xs font-semibold text-slate-400 pt-2 border-t border-slate-800">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{service.typicalTimeline}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                      <span>{service.startingPriceRange}</span>
                    </div>
                  </div>

                  {/* KEY FEATURES LIST */}
                  <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
                    {service.features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  View Details
                </button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenQuoteModal}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
