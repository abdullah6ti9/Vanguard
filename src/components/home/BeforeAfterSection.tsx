import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { ProjectDetailModal } from '../projects/ProjectDetailModal';
import { ProjectItem } from '../../types';

interface BeforeAfterSectionProps {
  onOpenQuoteModal: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenQuoteModal }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Featured project: Bel Air Kitchen
  const project = projectsData[0];

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <section className="py-24 bg-slate-950 text-white border-b border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-400 block">
              04 — CASE STUDY
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Before & After Transformation
            </h2>
          </div>
          <button
            onClick={() => setSelectedProject(project)}
            className="text-xs font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center space-x-1 cursor-pointer"
          >
            <span>View Full Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* INTERACTIVE COMPARISON CANVAS */}
        <div className="space-y-6">
          <div
            className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[420px] sm:h-[560px] select-none cursor-ew-resize group"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER IMAGE (BOTTOM LAYER) */}
            <img
              src={project.afterImage || project.heroImage}
              alt="After Remodel"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-6 right-6 px-3.5 py-1.5 bg-slate-950/80 backdrop-blur-md rounded-full text-xs font-mono font-bold text-amber-400 border border-slate-800">
              AFTER
            </div>

            {/* BEFORE IMAGE (TOP CLIPPED LAYER) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={project.beforeImage || project.heroImage}
                alt="Before Remodel"
                className="absolute top-0 left-0 h-full max-w-none object-cover"
                style={{ width: '100%', height: '100%' }}
                draggable={false}
              />
              <div className="absolute top-6 left-6 px-3.5 py-1.5 bg-slate-950/80 backdrop-blur-md rounded-full text-xs font-mono font-bold text-slate-300 border border-slate-800">
                BEFORE
              </div>
            </div>

            {/* DIVIDER HANDLE */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 text-slate-950 border-2 border-white shadow-2xl flex items-center justify-center font-bold text-xs">
                ↔
              </div>
            </div>
          </div>

          {/* MINIMAL PROJECT INFORMATION */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <div className="space-y-1">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                {project.categoryLabel} • {project.location}
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white">
                An outdated interior transformed into a warm, modern living space.
              </h3>
            </div>

            <button
              onClick={() => setSelectedProject(project)}
              className="px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:text-amber-400 hover:border-amber-400 transition-all text-xs font-bold uppercase tracking-widest shrink-0 cursor-pointer flex items-center space-x-2"
            >
              <span>View Project Details</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* PROJECT DETAIL MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={onOpenQuoteModal}
      />
    </section>
  );
};
