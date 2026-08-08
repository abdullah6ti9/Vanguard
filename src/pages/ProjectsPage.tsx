import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDetailModal } from '../components/projects/ProjectDetailModal';
import { ProjectItem } from '../types';
import { updatePageMeta } from '../utils/seo';

interface ProjectsPageProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    updatePageMeta(
      "Our Projects & Portfolio | Before & After Remodeling Gallery",
      "Browse Vanguard Craftsmen's completed residential construction projects including kitchens, bathrooms, additions, whole home remodels, and exterior transformations."
    );
  }, []);

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
    <div className="bg-slate-950 text-white pt-28 lg:pt-36 pb-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeading
          eyebrow="Proven Construction Portfolio"
          title="Recent Work & Completed Transformations"
          description="Click any project to view high-resolution photos, interactive Before/After sliders, project budgets, timelines, and client quotes."
          darkBg
        />

        {/* CATEGORY TABS */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* MODAL */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenQuote={onOpenQuoteModal}
        />

      </div>
    </div>
  );
};
