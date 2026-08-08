import React from 'react';
import { ProjectItem } from '../../types';
import { Modal } from '../common/Modal';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';
import { MapPin, Clock, DollarSign, Check, Quote } from 'lucide-react';
import { Button } from '../common/Button';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="4xl">
      <div className="space-y-6 text-slate-200">
        
        {/* BEFORE / AFTER SLIDER OR HERO IMAGE */}
        {project.beforeImage && project.afterImage ? (
          <div>
            <span className="text-xs font-bold text-amber-400 block mb-2 uppercase tracking-wider">
              Interactive Before & After Comparison
            </span>
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
            />
          </div>
        ) : (
          <div className="aspect-video rounded-xl overflow-hidden border border-slate-800">
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
          <div>
            <span className="text-slate-500 uppercase block font-bold">Location</span>
            <span className="text-white font-semibold flex items-center mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1" />
              {project.location}
            </span>
          </div>
          <div>
            <span className="text-slate-500 uppercase block font-bold">Timeline</span>
            <span className="text-white font-semibold flex items-center mt-0.5">
              <Clock className="w-3.5 h-3.5 text-amber-400 mr-1" />
              {project.duration}
            </span>
          </div>
          <div>
            <span className="text-slate-500 uppercase block font-bold">Investment</span>
            <span className="text-white font-semibold flex items-center mt-0.5">
              <DollarSign className="w-3.5 h-3.5 text-amber-400 mr-1" />
              {project.budgetRange}
            </span>
          </div>
          <div>
            <span className="text-slate-500 uppercase block font-bold">Square Feet</span>
            <span className="text-white font-semibold block mt-0.5">{project.sqft} sq ft</span>
          </div>
        </div>

        {/* FULL STORY */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-white">Project Scope & Overview</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{project.fullStory}</p>
        </div>

        {/* KEY FEATURES */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
            Key Architectural & Craftsmanship Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {project.keyFeatures.map((feat, i) => (
              <div key={i} className="flex items-start space-x-2 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CLIENT QUOTE */}
        {project.clientQuote && (
          <div className="bg-slate-950/80 p-5 rounded-xl border border-amber-500/30 space-y-2 relative">
            <Quote className="w-8 h-8 text-amber-500/20 absolute top-3 right-3" />
            <p className="text-slate-200 italic text-sm">"{project.clientQuote.text}"</p>
            <div className="text-xs text-amber-400 font-bold">
              — {project.clientQuote.clientName}, <span className="text-slate-400 font-normal">{project.clientQuote.neighborhood}</span>
            </div>
          </div>
        )}

        {/* CALL TO ACTION */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Want a similar transformation for your property?
          </span>
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
          >
            Request Quote for Similar Project
          </Button>
        </div>

      </div>
    </Modal>
  );
};
