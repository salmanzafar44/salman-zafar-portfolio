import React from 'react';
import { PROFILE, TECHNICAL_COMPETENCIES, EXPERIENCES, PROJECTS, EDUCATION } from '../data/portfolioData';

interface PrintResumeProps {
  onClose?: () => void;
  isModalPreview?: boolean;
}

export const PrintResume: React.FC<PrintResumeProps> = ({ onClose, isModalPreview }) => {
  return (
    <div className={isModalPreview ? "bg-white text-slate-900 p-8 sm:p-12 max-w-4xl mx-auto rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] text-left" : "print-only"}>
      {/* Printable Resume Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
            {PROFILE.name}
          </h1>
          <span className="text-xs font-mono font-bold text-slate-700">
            {PROFILE.title}
          </span>
        </div>

        <p className="text-sm font-semibold text-slate-800 mt-1">
          {PROFILE.techHeadline}
        </p>

        {/* Contact Coordinates */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-mono">
          <span>{PROFILE.location} (Remote Ready)</span>
          <span>•</span>
          <span>{PROFILE.email}</span>
          <span>•</span>
          <span>{PROFILE.phone}</span>
          <span>•</span>
          <span>linkedin.com/in/salman-zafar-804a89226</span>
          <span>•</span>
          <span>github.com/salmanzafar44</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 page-break-inside-avoid">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Executive Architectural Profile
        </h2>
        <p className="text-xs text-slate-800 leading-relaxed">
          {PROFILE.valueProposition} Hands-on engineering lead with proven delivery across the United Kingdom, Dubai/UAE, India, and Pakistan. Deep expertise in high-concurrency relational data modeling (PostgreSQL, MySQL), multi-tenant SaaS architectures, distributed third-party APIs (Airbnb, BookingPal), and modern responsive frontends (React.js, Next.js).
        </p>
      </div>

      {/* Technical Competencies */}
      <div className="mb-6 page-break-inside-avoid">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Technical Competencies & Systems
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
          {TECHNICAL_COMPETENCIES.map((cat) => (
            <div key={cat.id} className="leading-snug">
              <strong className="text-slate-950 font-semibold">{cat.title}: </strong>
              <span className="text-slate-700">{cat.skills.join(', ')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Key Engagements */}
      <div className="mb-6">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
          Key Professional Engagements & Systems Delivery
        </h2>
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="page-break-inside-avoid text-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <div className="font-bold text-slate-950 text-sm">
                  {exp.role} <span className="font-normal text-slate-600">— {exp.organization}</span>
                </div>
                <div className="font-mono text-[11px] text-slate-600">
                  {exp.location} • {exp.engagementType}
                </div>
              </div>

              {exp.liveUrl && (
                <div className="text-[11px] font-mono text-indigo-700 mb-1">
                  Live: {exp.liveUrl}
                </div>
              )}

              <p className="text-slate-700 mb-1 leading-relaxed">
                {exp.summary}
              </p>

              <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-700">
                {exp.bulletPoints.map((b, i) => (
                  <li key={i} className="leading-relaxed">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Production Deliverables */}
      <div className="mb-6 page-break-inside-avoid">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Selected Production Deployments
        </h2>
        <div className="space-y-2 text-xs">
          {PROJECTS.slice(0, 6).map((proj) => (
            <div key={proj.id} className="border-b border-slate-200 pb-1.5 last:border-0">
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-slate-950">{proj.title}</span>
                <span className="font-mono text-[11px] text-slate-600">{proj.region}</span>
              </div>
              <p className="text-slate-700 leading-snug">{proj.summary}</p>
              <div className="text-[10px] font-mono text-slate-600 mt-0.5">
                Stack: {proj.techStack.join(', ')} {proj.liveUrl && `• ${proj.liveUrl}`}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-4 page-break-inside-avoid">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Education & Formal Credentials
        </h2>
        <div className="space-y-2 text-xs">
          {EDUCATION.map((edu, idx) => (
            <div key={idx}>
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-slate-950">{edu.degree}</span>
                <span className="text-slate-600 font-mono text-[11px]">{edu.location}</span>
              </div>
              <div className="text-slate-700">{edu.institution}</div>
              <div className="text-[11px] text-slate-600 mt-0.5">{edu.focus}</div>
            </div>
          ))}
        </div>
      </div>

      {isModalPreview && (
        <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end gap-3 no-print">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Trigger Print / PDF Export
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Close Preview
            </button>
          )}
        </div>
      )}
    </div>
  );
};
