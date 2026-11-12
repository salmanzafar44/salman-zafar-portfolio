import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Briefcase, MapPin, Building, ChevronRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/30 dark:border-indigo-500/20 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative"
              >
                {/* Glowing Node on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-indigo-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700 transition-all shadow-xs hover:shadow-md">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3">
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

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex flex-wrap items-center gap-2">
                        <span>{exp.role}</span>
                        <span className="text-slate-400 font-normal">/</span>
                        <span className="text-indigo-600 dark:text-indigo-300 font-semibold">{exp.organization}</span>
                      </h3>
                    </div>

                    {/* Live Portal Button if Available */}
                    <div className="flex items-center gap-2 shrink-0">
                      {exp.liveUrl && (
                        <a
                          href={exp.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 transition-colors"
                        >
                          <span>Visit Live Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title={isExpanded ? "Collapse details" : "Expand details"}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Multi-Portal Links if present */}
                  {exp.portalLinks && exp.portalLinks.length > 0 && (
                    <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
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

                  {/* Expandable Architectural Bullets */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-4 space-y-2 border-t border-slate-100 dark:border-slate-800/80 mt-3">
                          <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 block mb-2">
                            Key Architectural Deliverables:
                          </span>
                          {exp.bulletPoints.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech Stack Pills */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
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

                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      {isExpanded ? 'Show less' : 'View deliverables'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
