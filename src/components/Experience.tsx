import React from 'react';
import { ExternalLink, Briefcase, MapPin, Building, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            Track Record & Client Engagements
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Experience & International Client Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Positioned through enterprise delivery across remote international teams and public-sector civic tech initiatives. Demonstrated ownership across architecture, database schemas, third-party distribution APIs, and production maintenance.
          </p>
        </div>

        {/* Structured Experience Cards Grid */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase">
                      {exp.engagementType}
                    </span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>{exp.role}</span>
                    <span className="text-slate-400 dark:text-slate-500 font-normal">/</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{exp.organization}</span>
                  </h3>
                </div>

                {/* Primary Live Portal Links */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {exp.liveUrl && (
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 transition-colors"
                    >
                      <span>Visit Live Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {exp.summary}
              </p>

              {/* Multi-Portal Links if present (Daily Aaj, Abhyasana) */}
              {exp.portalLinks && exp.portalLinks.length > 0 && (
                <div className="mb-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                  <span className="block text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Live Synchronized Portals & Network Endpoints:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.portalLinks.map((portal) => (
                      <a
                        key={portal.url}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-md bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <span>{portal.label}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Architectural Bullets */}
              <ul className="space-y-2 mb-5">
                {exp.bulletPoints.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2">
                  Stack:
                </span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
