import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldCheck, Clock, FileText, Sparkles, MessageSquareText, HardHat } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: FileText,
      title: "Fixed-Price Bids",
      description: "Detailed labor & material lines upfront. No hidden fees or surprise change orders.",
    },
    {
      icon: Clock,
      title: "Guaranteed Timelines",
      description: "Real milestone calendars with daily photo updates from your project manager.",
    },
    {
      icon: Sparkles,
      title: "Dust-Free Clean Sites",
      description: "Floor protection, zip containment barriers, and daily HEPA air scrubbers.",
    },
    {
      icon: ShieldCheck,
      title: "Licensed & $5M Insured",
      description: "Active California CSLB #1098421 license, full Workers' Comp, and bonding.",
    },
    {
      icon: HardHat,
      title: "10-Year Craft Warranty",
      description: "Comprehensive 10-year coverage protecting all structural craftsmanship.",
    },
    {
      icon: MessageSquareText,
      title: "Direct PM Access",
      description: "Get your superintendent's direct phone number for instant daily updates.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="The Vanguard Difference"
          title="Why Homeowners Trust Us"
          description="We eliminate contractor headaches with zero hidden fees, clean job sites, and guaranteed completion dates."
          darkBg
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {points.map((pt, index) => {
            const IconComp = pt.icon;
            return (
              <div
                key={index}
                className="bg-slate-950 p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all space-y-2.5 flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 shadow-sm shrink-0">
                  <IconComp className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-lg font-bold text-white">{pt.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* GUARANTEE CARD BANNER */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-5 sm:p-6 rounded-2xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">100% Peace-of-Mind Guarantee</h4>
            <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
              Structural craftsmanship covered for 10 full years at zero extra cost.
            </p>
          </div>
          <div className="shrink-0 font-mono text-[11px] bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-amber-400 font-bold">
            POL-#VANG-2026
          </div>
        </div>

      </div>
    </section>
  );
};
