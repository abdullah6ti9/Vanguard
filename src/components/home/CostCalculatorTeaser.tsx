import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Calculator, DollarSign, ArrowRight, Info } from 'lucide-react';
import { Button } from '../common/Button';

interface CostCalculatorTeaserProps {
  onOpenQuoteModal: () => void;
}

export const CostCalculatorTeaser: React.FC<CostCalculatorTeaserProps> = ({ onOpenQuoteModal }) => {
  const [projectType, setProjectType] = useState<'kitchen' | 'bathroom' | 'addition' | 'whole-home'>('kitchen');
  const [sqft, setSqft] = useState<number>(250);
  const [finishLevel, setFinishLevel] = useState<'standard' | 'premium' | 'luxury'>('premium');

  const baseRates = {
    kitchen: { standard: 140, premium: 220, luxury: 350 },
    bathroom: { standard: 180, premium: 280, luxury: 420 },
    addition: { standard: 220, premium: 320, luxury: 480 },
    'whole-home': { standard: 110, premium: 175, luxury: 280 },
  };

  const rate = baseRates[projectType][finishLevel];
  const calculatedEstimate = sqft * rate;
  const lowerBound = Math.round(calculatedEstimate * 0.9);
  const upperBound = Math.round(calculatedEstimate * 1.15);

  return (
    <section className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Budget Planning Tool"
          title="Interactive Project Cost Estimator"
          description="Get an immediate, ballpark estimate range based on typical Southern California materials, square footage, and craftsmanship levels."
          darkBg
        />

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* STEP 1: PROJECT TYPE */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'kitchen', label: 'Kitchen Remodel', defaultSqft: 250 },
                { id: 'bathroom', label: 'Bathroom Spa', defaultSqft: 120 },
                { id: 'addition', label: 'Room Addition / ADU', defaultSqft: 500 },
                { id: 'whole-home', label: 'Whole Home', defaultSqft: 2000 },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setProjectType(p.id as any);
                    setSqft(p.defaultSqft);
                  }}
                  className={`p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    projectType === p.id
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2: SQUARE FOOTAGE SLIDER */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <label className="font-bold text-amber-400 uppercase tracking-wider">
                2. Approximate Area (Square Feet)
              </label>
              <span className="font-mono font-extrabold text-white text-base bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                {sqft} sq ft
              </span>
            </div>
            <input
              type="range"
              min={projectType === 'bathroom' ? 40 : 100}
              max={projectType === 'whole-home' ? 4500 : 1500}
              step={10}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* STEP 3: FINISH LEVEL */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              3. Select Finish & Material Quality
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'standard', title: 'Quality Standard', desc: 'Durable modular cabinetry, standard quartz, tile' },
                { id: 'premium', title: 'Transitional Premium', desc: 'Custom cabinets, waterfall quartz, curbless shower' },
                { id: 'luxury', title: 'High-End Architectural', desc: 'Full millwork, marble, smart home automation' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFinishLevel(f.id as any)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                    finishLevel === f.id
                      ? 'bg-amber-500/10 border-amber-400 text-white ring-1 ring-amber-400'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  <span className="font-bold text-sm block text-amber-300">{f.title}</span>
                  <span className="text-xs text-slate-400 block">{f.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ESTIMATE DISPLAY RESULT */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs text-slate-400 uppercase tracking-wider block font-bold">
                Estimated Ballpark Investment Range
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">
                ${lowerBound.toLocaleString()} – ${upperBound.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-500 flex items-center justify-center sm:justify-start">
                <Info className="w-3.5 h-3.5 mr-1 text-amber-500" />
                Includes estimated labor, materials, and standard permit allowances.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={onOpenQuoteModal}
              icon={<ArrowRight className="w-5 h-5" />}
              className="shrink-0"
            >
              Get Exact Line-Item Quote
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
