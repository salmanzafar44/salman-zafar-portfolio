import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, Send, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Full-Stack Engineering Role',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and message details.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      inquiryType: 'Full-Stack Engineering Role',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            Engagement & Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Contact & Consultation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Available for remote full-time engineering positions, long-term technical consulting, and enterprise web application development across the United Kingdom, Dubai/UAE, India, the US, and worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels & Verified Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Copy Action Cards */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
              <h3 className="text-sm font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-2">
                Direct Communication Channels
              </h3>

              {/* Email Block */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    Primary Email
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 truncate block transition-colors"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp Block */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    Phone & WhatsApp (UTC+5)
                  </span>
                  <a
                    href={PROFILE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 truncate block transition-colors"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={copyPhone}
                    className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={PROFILE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 rounded-md transition-colors"
                    title="Open WhatsApp chat"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
              <h3 className="text-sm font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
                Professional Networks & Code Repositories
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      LinkedIn
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500" />
                </a>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      GitHub
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Functional Inquiry Form UI */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Project or Role Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in your project requirements or position details. Guaranteed response within 24 business hours.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                    Inquiry Prepared Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{formData.inquiryType}</strong> has been logged. You can also trigger your local email client directly below.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(`Inquiry from ${formData.name}: ${formData.inquiryType}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nInquiry: ${formData.inquiryType}\n\nMessage:\n${formData.message}`)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email Client</span>
                    </a>
                    <button
                      onClick={resetForm}
                      className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 font-medium">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.co.uk"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Company & Location
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. London Tech / Dubai EdTech"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Inquiry Scope
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      >
                        <option value="Full-Stack Engineering Role">Full-Stack Remote Role</option>
                        <option value="LMS & EdTech Architecture">LMS / EdTech Platform Development</option>
                        <option value="SaaS & API Integration">SaaS & Third-Party API Integration</option>
                        <option value="Laravel / CodeIgniter Migration">Legacy Codebase Modernization</option>
                        <option value="General Technical Consultation">General Technical Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message / Project Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline system scope, technology expectations, timeline, and engagement model..."
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-sm transition-all"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
