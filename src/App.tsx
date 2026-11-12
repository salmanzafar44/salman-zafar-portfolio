import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Competencies } from './components/Competencies';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { AiWorkflows } from './components/AiWorkflows';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrintResume } from './components/PrintResume';
import { Printer, X } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Executive dark mode by default
    }
    return true;
  });

  const [showCVPreview, setShowCVPreview] = useState<boolean>(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Interactive Web Application View (hidden on print) */}
      <div className="no-print">
        <Navbar
          isDark={isDark}
          toggleTheme={toggleTheme}
          onPrintCV={() => setShowCVPreview(true)}
        />

        <main>
          <Hero />
          <Competencies />
          <Experience />
          <Portfolio />
          <AiWorkflows />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Screen-Only CV Preview Modal (triggerable by user) */}
      {showCVPreview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto no-print"
          onClick={() => setShowCVPreview(false)}
        >
          <div
            className="relative w-full max-w-4xl my-8 bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-sm">
                  Executive CV Preview
                </span>
                <span className="text-xs text-slate-500">
                  Formatted for standard A4 export
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintCV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  onClick={() => setShowCVPreview(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Resume */}
            <PrintResume isModalPreview={false} />
          </div>
        </div>
      )}

      {/* Dedicated Clean Print View (Only visible to printer / PDF exporter) */}
      <PrintResume />
    </div>
  );
}
