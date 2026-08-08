import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Calculator, Calendar, HardHat, Award } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      stepNumber: "01",
      icon: Calculator,
      title: "Request Free Quote",
      description: "Submit our 2-minute form or call us directly with your project details.",
    },
    {
      stepNumber: "02",
      icon: Calendar,
      title: "In-Person Site Walk",
      description: "An estimator takes laser measurements and provides an itemized fixed bid in 48 hrs.",
    },
    {
      stepNumber: "03",
      icon: HardHat,
      title: "Dust-Free Build",
      description: "We handle permits and construction with daily photo progress reports.",
    },
    {
      stepNumber: "04",
      icon: Award,
      title: "10-Yr Warranty Handover",
      description: "Final walkthrough inspection and 10-year craftsmanship warranty delivery.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Simple & Transparent"
          title="Our 4-Step Process"
          description="From initial estimate to completed walkthrough with zero stress."
          darkBg
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950 p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all relative space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-amber-500 font-mono">
                    {s.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                    <IconComp className="w-5 h-5 stroke-[2]" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
