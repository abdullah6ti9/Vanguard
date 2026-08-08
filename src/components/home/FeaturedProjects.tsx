import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectDetailModal } from '../projects/ProjectDetailModal';
import { ProjectItem } from '../../types';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

interface FeaturedProjectsProps {
  onOpenQuoteModal: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchens', label: 'Kitchens' },
    { id: 'bathrooms', label: 'Bathrooms' },
    { id: 'additions', label: 'Additions & ADUs' },
    { id: 'renovations', label: 'Whole Home' },
    { id: 'exteriors', label: 'Exteriors & Decks' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Our Craftsmanship Showcase"
          title="Recent Work & Transformations"
          description="Explore real homeowner projects featuring before and after transformations, detailed budgets, and verified client testimonials."
          darkBg
        />

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 mb-8 sm:mb-12 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* DETAIL MODAL */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenQuote={onOpenQuoteModal}
        />

      </div>
    </section>
  );
};
