import React, { useEffect } from 'react';
import { X, ExternalLink, Database, Cpu, Layers, CheckCircle2, Globe, Shield } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150 interactive-modal"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl text-left transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase">
              {project.region}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
              {project.status}
            </span>
          </div>

          <h3 id="modal-title" className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {project.subtitle}
          </p>
        </div>

        {/* Live Link Bar */}
        {project.liveUrl && (
          <div className="mb-6 p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-900 dark:text-indigo-200">
              <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="truncate max-w-md">{project.liveUrl}</span>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Open Live Production Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* Multi-Portal Links if present */}
        {project.additionalUrls && project.additionalUrls.length > 0 && (
          <div className="mb-6 space-y-1.5">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Synchronized Portal Endpoints:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.additionalUrls.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 dark:text-slate-500 mb-2">
            Overview & Business Objective
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
            <span>Key Architectural Highlights & Implementation</span>
          </h4>
          <ul className="space-y-2">
            {project.architecturalHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Database Architecture */}
        <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-emerald-500" />
            <span>Database Architecture & Integrity</span>
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.databaseArchitecture}
          </p>
        </div>

        {/* Key Integrations */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>Subsystems & Protocols</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.keyIntegrations.map((integration) => (
              <span
                key={integration}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
              >
                {integration}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">
              Technologies:
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
