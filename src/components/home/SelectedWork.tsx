import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { ProjectItem } from '../../types';
import { ProjectDetailModal } from '../projects/ProjectDetailModal';

interface SelectedWorkProps {
  onOpenQuoteModal: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenQuoteModal }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Pick 4 curated projects for the asymmetric editorial showcase
  const featured = projectsData[0]; // Large main
  const secondary1 = projectsData[1];
  const secondary2 = projectsData[3];
  const fullWidth = projectsData[2]; // Full-width horizontal feature

  return (
    <section className="py-24 bg-slate-950 text-white border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400 block">
              01 — PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Selected Work
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-sm font-light leading-relaxed">
            Architectural craftsmanship executed with line-item precision across Southern California.
          </p>
        </div>

        {/* ASYMMETRIC EDITORIAL GRID */}
        <div className="space-y-8">
          
          {/* TOP ROW: 1 LARGE FOCAL PROJECT + 2 STACKED SMALLER PROJECTS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LARGE FEATURED PROJECT (7 COLS) */}
            <div
              onClick={() => setSelectedProject(featured)}
              className="lg:col-span-7 group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 cursor-pointer min-h-[440px] sm:min-h-[520px] flex flex-col justify-end p-8 transition-all hover:border-slate-700 shadow-2xl"
            >
              <img
                src={featured.heroImage}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 uppercase tracking-widest">
                  <span>{featured.location}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 font-sans text-[10px]">
                    {featured.categoryLabel}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white group-hover:text-amber-300 transition-colors flex items-center justify-between gap-4">
                  <span>{featured.title}</span>
                  <div className="w-10 h-10 rounded-full bg-slate-950/80 border border-slate-800 text-white flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </h3>
              </div>
            </div>

            {/* TWO STACKED SMALLER PROJECTS (5 COLS) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-8">
              {[secondary1, secondary2].map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 cursor-pointer h-[240px] sm:h-[250px] flex flex-col justify-end p-6 transition-all hover:border-slate-700 shadow-xl"
                >
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="relative z-10 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                      <span>{proj.location}</span>
                      <span className="text-slate-400 font-sans text-[10px] uppercase">{proj.categoryLabel}</span>
                    </div>
                    <h4 className="text-lg font-light text-white group-hover:text-amber-300 transition-colors flex items-center justify-between gap-2">
                      <span className="truncate">{proj.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors shrink-0" />
                    </h4>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* FULL-WIDTH BANNER PROJECT */}
          <div
            onClick={() => setSelectedProject(fullWidth)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 cursor-pointer h-[320px] sm:h-[380px] flex flex-col justify-end p-8 sm:p-12 transition-all hover:border-slate-700 shadow-2xl"
          >
            <img
              src={fullWidth.heroImage}
              alt={fullWidth.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

            <div className="relative z-10 max-w-2xl space-y-2">
              <div className="flex items-center space-x-3 text-xs font-mono text-amber-400 uppercase tracking-widest">
                <span>{fullWidth.location}</span>
                <span>•</span>
                <span className="text-slate-300 font-sans">{fullWidth.categoryLabel}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-light text-white group-hover:text-amber-300 transition-colors flex items-center gap-4">
                <span>{fullWidth.title}</span>
                <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-amber-400 transition-colors shrink-0" />
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light line-clamp-2">
                {fullWidth.shortDescription}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* DETAIL MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={onOpenQuoteModal}
      />
    </section>
  );
};
