import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, MessageSquare, ExternalLink, Globe, ShieldCheck, Terminal, Cpu, Sparkles, FileText } from 'lucide-react';
import { PROFILE, GLOBAL_REGIONS } from '../data/portfolioData';
import { SystemTerminal } from './SystemTerminal';

interface HeroProps {
  onOpenCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section id="about" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800/80">
      {/* Background ambient mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl -z-10 animate-pulse duration-1000" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-40 left-10 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Typographic & Executive Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-slate-700 dark:text-slate-300">
                {PROFILE.currentFocus}
              </span>
            </div>

            {/* Headline with subtle gradient highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              <span>Salman</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 dark:from-indigo-400 dark:via-purple-300 dark:to-emerald-400">
                Zafar
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg font-mono font-medium text-indigo-600 dark:text-indigo-400 tracking-tight leading-relaxed">
              {PROFILE.techHeadline}
            </p>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {PROFILE.valueProposition}
            </p>

            {/* Location & Remote Availability */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{PROFILE.location}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                Remote Availability: UK · Dubai · USA · Middle East · India
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Explore Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Hire / Contact Me</span>
              </a>

              {onOpenCV && (
                <button
                  onClick={onOpenCV}
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 rounded-xl transition-all hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <FileText className="w-4 h-4" />
                  <span>Preview CV</span>
                </button>
              )}

              {/* Direct Quick Channels */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Direct Message"
                  className="p-3 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label="Email Directly"
                  className="p-3 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Executive Proof Metrics */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 dark:border-slate-800/80">
              <div>
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                  10+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Enterprise Deployments
                </div>
              </div>

              <div>
                <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
                  4
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Countries (UK, UAE, IN, PK)
                </div>
              </div>

              <div>
                <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                  100%
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Real Production Links
                </div>
              </div>

              <div>
                <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400 font-mono">
                  Zero
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Race Condition Collisions
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Architectural Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <SystemTerminal />
          </motion.div>
        </div>

        {/* Global Footprint Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs font-mono font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
              International Delivery & Cross-Border Client Footprint
            </h2>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Verified Production Deployments
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GLOBAL_REGIONS.map((region, idx) => (
              <motion.div
                key={region.country}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-0.5 shadow-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                    {region.country}
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                    {region.flag}
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {region.role}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {region.deliverables}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
