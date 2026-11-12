import React, { useState, useEffect } from 'react';
import { Printer, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onPrintCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, onPrintCV }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 no-print ${
        scrolled
          ? 'bg-slate-950/85 dark:bg-[#0B1120]/85 bg-white/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>{PROFILE.name}</span>
            <span className="hidden sm:inline-block text-xs font-mono font-normal text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
              Full-Stack Architect
            </span>
          </a>

          {/* Zone 2: Clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a
              href="#about"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#competencies"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Experience
            </a>
            <a
              href="#portfolio"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Portfolio
            </a>
            <a
              href="#ai-workflows"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              AI Workflows
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-600 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action & Theme Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={onPrintCV}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Download / Print CV</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-5 space-y-2">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
          >
            About & Overview
          </a>
          <a
            href="#competencies"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
          >
            Technical Competencies
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
          >
            Experience & Client Engagements
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
          >
            Selected Projects & Live URLs
          </a>
          <a
            href="#ai-workflows"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
          >
            AI-Assisted Engineering
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
          >
            Education & Qualifications
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
          >
            Contact & Consultation
          </a>
        </div>
      )}
    </header>
  );
};
