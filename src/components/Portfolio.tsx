import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Cpu, Globe, Database } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'UK Clients',
    'Dubai / UAE',
    'LMS & EdTech',
    'SaaS & APIs',
    'E-Commerce & Business Systems'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="portfolio" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
              Featured Deployments & Codebases
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              Selected Projects & Technical Portfolio
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Live production platforms, Learning Management Systems, civic APIs, and multi-tenant SaaS architectures delivered for international clients and enterprises.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
            Showing {filteredProjects.length} of {PROJECTS.length} Systems
          </div>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="filter-controls flex flex-wrap gap-2 mb-10 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 max-w-fit">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === category
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-sm group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400">
                    {project.region}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60">
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Primary Highlights Snapshot */}
                <div className="mb-4 space-y-1.5 border-l-2 border-indigo-500/30 pl-3">
                  {project.architecturalHighlights.slice(0, 2).map((item, i) => (
                    <p key={i} className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-1 leading-snug">
                      • {item}
                    </p>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center gap-1"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors whitespace-nowrap"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
                  >
                    <span>System Specs</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
