import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            Academic Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Education & Formal Foundation
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Solid foundations in software engineering principles, distributed systems, algorithms, and computational mathematics.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 leading-relaxed">
                    {edu.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
