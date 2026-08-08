import React from 'react';

export const TheDifference: React.FC = () => {
  const principles = [
    {
      number: "01",
      title: "CRAFT",
      desc: "Uncompromising structural standards and architectural millwork built to endure generations.",
    },
    {
      number: "02",
      title: "CLARITY",
      desc: "Itemized line-item proposals and transparent fixed-price bidding with zero hidden fees.",
    },
    {
      number: "03",
      title: "ACCOUNTABILITY",
      desc: "Guaranteed calendar timelines backed by direct superintendent communication and 10-year warranty.",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white border-b border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: BOLD ARCHITECTURAL STATEMENT & PRINCIPLES (7 COLS) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400 block">
                03 — PHILOSOPHY
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight font-sans">
                "Good construction is invisible. <br className="hidden sm:block" />
                <span className="font-serif italic text-amber-300 font-normal">Great construction is felt.</span>"
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                We eliminate contractor ambiguity. Vanguard couples master architectural framing with rigorous job-site cleanliness, daily superintendent updates, and itemized fixed-price bids.
              </p>
            </div>

            {/* 3 CONCISE PRINCIPLES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800/80">
              {principles.map((p) => (
                <div key={p.number} className="space-y-2">
                  <span className="font-mono text-xs font-bold text-amber-400 block">
                    {p.number}
                  </span>
                  <h3 className="text-base font-bold tracking-wider uppercase text-white font-sans">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: HIGH-QUALITY DETAIL IMAGE (5 COLS) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[480px] group">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Precision Architectural Joinery & Construction Detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-amber-400 block uppercase tracking-wider text-[11px]">
                    10-Year Craft Guarantee
                  </span>
                  <span className="text-slate-300 font-light text-[11px]">
                    Full structural warranty on all residential work
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">CSLB #1098421</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
