import React from 'react';
import { Sparkles, Terminal, ShieldCheck, Cpu, Code2, GitBranch, RefreshCw, FileCheck } from 'lucide-react';
import { AI_WORKFLOWS_DETAILS } from '../data/portfolioData';

export const AiWorkflows: React.FC = () => {
  return (
    <section id="ai-workflows" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase mb-2">
            Modern Engineering Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {AI_WORKFLOWS_DETAILS.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {AI_WORKFLOWS_DETAILS.overview}
          </p>
        </div>

        {/* 4 Methodology Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {AI_WORKFLOWS_DETAILS.pillars.map((pillar, idx) => {
            const icons = [
              <Code2 className="w-5 h-5 text-indigo-500" key={0} />,
              <Cpu className="w-5 h-5 text-purple-500" key={1} />,
              <RefreshCw className="w-5 h-5 text-emerald-500" key={2} />,
              <ShieldCheck className="w-5 h-5 text-amber-500" key={3} />
            ];

            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shrink-0">
                    {icons[idx]}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tooling Strip & Governance Guarantee */}
        <div className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
                Agent Tooling & Verification Pipeline
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
                Combining generative reasoning with strict deterministic compiler gates, linter rules, and test harnesses.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {AI_WORKFLOWS_DETAILS.tooling.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
