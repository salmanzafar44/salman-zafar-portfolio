import React from 'react';
import { ArrowUp, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {PROFILE.name}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              {PROFILE.title} · {PROFILE.location}
            </p>
          </div>

          {/* Quiet Quick Links */}
          <div className="flex items-center gap-5 text-xs font-mono">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              WhatsApp
            </a>
            <span>·</span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-indigo-500 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name}. All engineering trademarks, client platforms, and domains belong to their respective proprietors.
        </div>
      </div>
    </footer>
  );
};
