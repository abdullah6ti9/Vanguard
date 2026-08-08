import React from 'react';
import { MapPin, Clock, DollarSign, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer flex flex-col h-full"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* CATEGORY BADGE */}
        <div className="absolute top-3 left-3 bg-slate-950/90 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-lg">
          {project.categoryLabel}
        </div>

        {/* BEFORE/AFTER INDICATOR */}
        {project.beforeImage && (
          <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md flex items-center space-x-1">
            <span>Before / After Available</span>
          </div>
        )}

        {/* LOCATION */}
        <div className="absolute bottom-3 left-3 text-xs text-slate-300 flex items-center space-x-1 font-medium bg-slate-950/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>{project.location}</span>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="p-6 flex flex-col justify-between grow space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* METRICS ROW */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-semibold">
          <div className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-300">
            <DollarSign className="w-3.5 h-3.5 text-amber-400" />
            <span>{project.budgetRange}</span>
          </div>
          <div className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
            View Details <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
