import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Database, Layers, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';
import { TECHNICAL_COMPETENCIES } from '../data/portfolioData';

export const Competencies: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'backend':
        return <Server className="w-5 h-5 text-indigo-500" />;
      case 'databases':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'cms':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'cloud-devops':
        return <Cloud className="w-5 h-5 text-sky-500" />;
      case 'tools-ai':
        return <Sparkles className="w-5 h-5 text-purple-500" />;
      default:
        return <Server className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="competencies" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            Technical Architecture & Skill Spectrum
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Technical Competencies & Systems Tooling
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Positioned through architectural rigor, relational modeling, and full-stack execution across distributed client ecosystems. No arbitrary scoreboards—just production-proven tools.
          </p>
        </div>

        {/* 6 Categorized Cards Grid with hover motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_COMPETENCIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all shadow-xs hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shrink-0">
                    {getIcon(category.id)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Structured Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architectural Highlight */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-normal italic leading-snug">{category.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
