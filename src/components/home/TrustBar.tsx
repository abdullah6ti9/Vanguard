import React from 'react';
import { Award, ShieldCheck, Clock, Star, FileCheck2 } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export const TrustBar: React.FC = () => {
  const trustSignals = [
    {
      icon: Clock,
      value: `${businessInfo.yearsInBusiness}+ Years`,
      label: 'Local Construction Experience',
    },
    {
      icon: Award,
      value: `${businessInfo.projectsCompleted}+`,
      label: 'Completed Renovations',
    },
    {
      icon: ShieldCheck,
      value: 'Licensed & Bonded',
      label: businessInfo.licenseNumber,
    },
    {
      icon: FileCheck2,
      value: '10-Year Warranty',
      label: 'Structural Craftsmanship Guarantee',
    },
    {
      icon: Star,
      value: `${businessInfo.customerRating} / 5.0 Rating`,
      label: `${businessInfo.reviewCount}+ Verified Homeowner Reviews`,
    },
  ];

  return (
    <section className="bg-slate-900 border-b border-slate-800 py-8 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {trustSignals.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-3 space-y-1.5 ${
                  index !== 0 ? 'pt-4 md:pt-3' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 shadow-sm">
                  <IconComp className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-lg font-extrabold text-white tracking-tight block">
                  {item.value}
                </span>
                <span className="text-xs text-slate-400 font-medium max-w-[180px] leading-snug">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
