import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Database, Server, Globe, Shield, RefreshCw, Layers, CheckCircle2 } from 'lucide-react';

interface ArchitectureDiagram {
  id: string;
  title: string;
  clientRegion: string;
  systemType: string;
  problemSolved: string;
  steps: {
    title: string;
    description: string;
    badge: string;
    details: string;
  }[];
}

const DIAGRAMS: ArchitectureDiagram[] = [
  {
    id: 'buraq-sync',
    title: 'Hospitality Multi-Channel Bi-Directional Sync',
    clientRegion: 'Hospitality SaaS · Buraq Technologies',
    systemType: 'Distributed API Integration (Airbnb & BookingPal)',
    problemSolved: 'Preventing race conditions and double-bookings across concurrent external reservation channels.',
    steps: [
      {
        title: '1. Inbound Webhook Ingestion',
        description: 'Airbnb reservation webhook received via secure TLS endpoint with cryptographic signature validation.',
        badge: 'Webhook / HMAC',
        details: 'Validates request origin and extracts listing ID, timestamp, and guest reservation payload.'
      },
      {
        title: '2. Distributed Mutex Locking',
        description: 'Acquires atomic Redis cache lock on the target property listing ID for 10 seconds.',
        badge: 'Atomic Mutex',
        details: 'Ensures no concurrent reservation requests can modify availability simultaneously.'
      },
      {
        title: '3. Transactional DB Update',
        description: 'Executes atomic database transaction updating host calendar, pricing rules, and reservation ledgers.',
        badge: 'ACID Transaction',
        details: 'Reconciles host payout calculations, cleaning fee schedules, and seasonal rules.'
      },
      {
        title: '4. Outbound BookingPal Push',
        description: 'Broadcasts updated calendar blocks to BookingPal distribution network with retry backoff queue.',
        badge: 'Outbound REST / Queues',
        details: 'Ensures zero double-booking incidents across all connected global vacation rental channels.'
      }
    ]
  },
  {
    id: 'litbench-rbac',
    title: 'LitBench UK Learning Management Pipeline',
    clientRegion: 'United Kingdom (Remote) · Active Project',
    systemType: 'Tiered Course Delivery & Assessment Engine',
    problemSolved: 'Structured learner progression, timed assessments, and multi-tier institutional RBAC.',
    steps: [
      {
        title: '1. Course Syllabus Authoring',
        description: 'Course leads assemble modular lessons, video assets, and structured learning prerequisites.',
        badge: 'Modular CMS',
        details: 'Enforces sequential module unlocking based on completion criteria and assessment pass rates.'
      },
      {
        title: '2. Multi-Tier Permission Gate',
        description: 'RBAC middleware evaluates student enrollment, tutor assignment, and corporate client scopes.',
        badge: 'Strict RBAC',
        details: 'Restricts assessment submissions, answer keys, and grading rubrics strictly to authorized tutors.'
      },
      {
        title: '3. Timed Assessment Checkpoints',
        description: 'Learners complete timed assessments with anti-tamper submission timestamps and audit logs.',
        badge: 'Assessment Engine',
        details: 'Cryptographically logs submission times and alerts tutors for pending grading queues.'
      },
      {
        title: '4. Automated Grading & Certification',
        description: 'Calculates student metrics, notifies corporate stakeholders, and generates verified transcripts.',
        badge: 'Event Dispatcher',
        details: 'Fires event-driven transactional email milestones to learners and administrative sponsors.'
      }
    ]
  },
  {
    id: 'dailyaaj-cache',
    title: 'Daily Aaj High-Throughput Publishing Ecosystem',
    clientRegion: 'Pakistan · 4 Synchronized Portals',
    systemType: 'Bilingual Newsroom & Cache Invalidation Pipeline',
    problemSolved: 'Handling viral breaking-news traffic surges without database degradation across English and Urdu.',
    steps: [
      {
        title: '1. Editorial Ingest & RTL/LTR Formatting',
        description: 'Newsroom journalists author articles in Nastaliq Urdu or English with categorized tagging.',
        badge: 'Bilingual Engine',
        details: 'Stores normalized article payloads with full-text search vectors and regional edition tags.'
      },
      {
        title: '2. High-Performance Indexing',
        description: 'Queries leverage composite indexes covering edition, publication timestamp, and view counts.',
        badge: 'Postgres / MySQL Opt',
        details: 'Sub-millisecond query execution even during high-frequency breaking news publication.'
      },
      {
        title: '3. Multi-Portal Cache Invalidation',
        description: 'Breaking news triggers instant purge of static HTML fragments and edge cached feeds.',
        badge: 'Cache Invalidation',
        details: 'Synchronizes Main News, English Edition, E-Paper, and UrduColumns portals simultaneously.'
      },
      {
        title: '4. High-Resolution E-Paper Delivery',
        description: 'Interactive digital print edition slicing enables readers to clip and share high-res articles.',
        badge: 'Digital E-Paper Slicer',
        details: 'Generates instant social sharing crops and optimized PDFs for low-bandwidth mobile readers.'
      }
    ]
  }
];

export const ArchitectureFlow: React.FC = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<ArchitectureDiagram>(DIAGRAMS[0]);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
            System Architecture Deep Dive
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Enterprise Architecture & Data Flow Engines
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Explore the data pipelines, concurrency guards, and API integrations behind Salman's major production systems. Select a system to step through the execution flow.
          </p>
        </div>

        {/* System Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {DIAGRAMS.map((diagram) => {
            const isSelected = selectedDiagram.id === diagram.id;
            return (
              <button
                key={diagram.id}
                onClick={() => {
                  setSelectedDiagram(diagram);
                  setActiveStepIndex(0);
                }}
                className={`px-4 py-2 text-xs font-mono font-medium rounded-xl border transition-all text-left ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="font-semibold text-xs">{diagram.title}</div>
                <div className="text-[11px] opacity-80">{diagram.clientRegion}</div>
              </button>
            );
          })}
        </div>

        {/* Architecture Canvas Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl">
          {/* Card Meta */}
          <div className="pb-6 mb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                  {selectedDiagram.systemType}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  Production Invariant
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {selectedDiagram.title}
              </h3>
            </div>

            <div className="max-w-md p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <strong className="text-slate-900 dark:text-slate-200 font-semibold block mb-0.5">
                Core Engineering Problem Solved:
              </strong>
              {selectedDiagram.problemSolved}
            </div>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {selectedDiagram.steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 shadow-sm ring-1 ring-indigo-500'
                      : 'bg-slate-50/60 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-semibold">
                      {step.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    {step.title}
                  </h4>

                  <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep Breakdown */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs"
            >
              <div className="space-y-1">
                <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Deep Implementation Detail — {selectedDiagram.steps[activeStepIndex].title}</span>
                </span>
                <p className="text-slate-300 text-xs">
                  {selectedDiagram.steps[activeStepIndex].details}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : selectedDiagram.steps.length - 1))}
                  className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
                >
                  Previous Step
                </button>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < selectedDiagram.steps.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
