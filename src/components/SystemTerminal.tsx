import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Copy, Check, Play, Shield, Cpu, RefreshCw } from 'lucide-react';

interface FileTab {
  id: string;
  name: string;
  language: string;
  system: string;
  code: string;
  output: string;
}

const TABS: FileTab[] = [
  {
    id: 'litbench',
    name: 'LitBench_LMS.ts',
    language: 'typescript',
    system: 'UK EdTech LMS Architecture',
    code: `// LitBench Enterprise Course Delivery Engine
interface CoursePipelineConfig {
  clientId: "UK_CLIENT_EDTECH";
  rbacRoles: ["super_admin", "lead_tutor", "assessor", "learner"];
  assessmentEngine: {
    prerequisiteEnforcement: true;
    submissionAuditing: "cryptographic_timestamp";
    gradingRubric: "UK_REGULATED_CRITERIA";
  };
  eventDrivenNotifications: {
    milestoneAchieved: true;
    assessmentOverdueTrigger: true;
  };
}`,
    output: `[LitBench] Validated 14 course modules across 4 permission tiers.
[Security] RBAC policies compiled. Assessment grading rubrics active.`
  },
  {
    id: 'buraq',
    name: 'AirbnbSync.php',
    language: 'php',
    system: 'Multi-Channel SaaS Distribution',
    code: `<?php
namespace App\\Services\\Hospitality;

class DistributionSyncEngine {
    // Bi-directional mutex lock preventing double-bookings
    public function syncReservationWebhook(WebhookPayload $payload): void {
        $lock = Cache::lock("listing:{$payload->listingId}", 10);
        
        $lock->block(5, function () use ($payload) {
            DB::transaction(function () use ($payload) {
                $this->idempotencyCheck($payload->idempotencyKey);
                $this->calendarManager->updateAvailability($payload);
                $this->broadcastToBookingPal($payload->listingId);
            });
        });
    }
}`,
    output: `[Airbnb Webhook] Mutex lock acquired. Listing #82910 synchronized.
[BookingPal] Calendar mirror updated in 124ms. Zero collision detected.`
  },
  {
    id: 'dailyaaj',
    name: 'DailyAaj_Cache.sql',
    language: 'sql',
    system: 'High-Concurrency News Network',
    code: `-- Daily Aaj High-Throughput Read Pipeline
-- Sustains millions of page views across 4 synchronized editions
CREATE INDEX idx_articles_edition_published 
ON articles (edition_code, published_at DESC, status)
INCLUDE (id, slug, headline_urdu, view_count);

-- Redis cache invalidation on breaking news override
SELECT fn_invalidate_fragment_cache(
    p_edition => 'URDU_NATIONAL',
    p_category => 'BREAKING_NEWS',
    p_timestamp => CURRENT_TIMESTAMP
);`,
    output: `[Daily Aaj MySQL] Composite index active. Query time: 1.8ms.
[Cache Invalidator] 4 portal frontends (Main, English, E-Paper, UrduColumns) warm.`
  },
  {
    id: 'adwebtest',
    name: 'Dubai_Deploy.sh',
    language: 'bash',
    system: 'AD Web Test Platform (Dubai, UAE)',
    code: `#!/usr/bin/env bash
# Production GCC deployment configuration
export REGION="me-central-uae"
export DOMAIN="adwebtest.online"
export TLS_VERSION="1.3"

# Verify HTTP/2 compression and SSL certificate health
nginx -t && certbot renew --dry-run
curl -Iv https://\${DOMAIN} --tlsv1.3 | grep -E "HTTP/2|SSL certificate verify ok"
echo "AD Web Test platform healthy with <80ms TTFB across Dubai/GCC."`,
    output: `[AD Web Test] TLS 1.3 certificate verified. Nginx HTTP/2 pipeline online.
[Network] Regional TTFB latency to Dubai client: 62ms.`
  }
];

export const SystemTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FileTab>(TABS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleRunDiagnostic = () => {
    setIsRunning(true);
    setExecutionOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setExecutionOutput(activeTab.output);
    }, 600);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="relative rounded-2xl bg-slate-950/90 dark:bg-[#070b14]/95 border border-slate-800/80 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Top Terminal macOS-style bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400 truncate">
            salman@production-cluster: ~/{activeTab.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 text-[11px] font-mono text-slate-400 hover:text-white rounded bg-slate-800/60 hover:bg-slate-800 transition-colors"
            title="Copy snippet"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            onClick={handleRunDiagnostic}
            disabled={isRunning}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded transition-colors disabled:opacity-50"
          >
            {isRunning ? (
              <RefreshCw className="w-3 h-3 animate-spin" />
            ) : (
              <Play className="w-3 h-3 fill-current" />
            )}
            <span>{isRunning ? 'Running...' : 'Simulate'}</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center overflow-x-auto bg-slate-900/50 border-b border-slate-800/70 scrollbar-none px-2 pt-2 gap-1">
        {TABS.map((tab) => {
          const isActive = activeTab.id === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab);
                setExecutionOutput(null);
              }}
              className={`relative px-3 py-1.5 text-xs font-mono rounded-t-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                isActive
                  ? 'bg-slate-950 text-indigo-400 border-t border-x border-slate-800 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* System Subtitle Banner */}
      <div className="px-4 py-2 bg-indigo-950/20 border-b border-indigo-900/30 flex items-center justify-between text-xs font-mono text-indigo-300">
        <span className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          <span>System: {activeTab.system}</span>
        </span>
        <span className="text-slate-400 text-[11px]">Architectural Snapshot</span>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto max-h-[260px] scrollbar-thin">
        <pre className="text-slate-300">
          <code>{activeTab.code}</code>
        </pre>
      </div>

      {/* Diagnostic Execution Console */}
      <AnimatePresence>
        {executionOutput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-800 bg-black/60 p-3 font-mono text-xs text-emerald-400 flex items-start gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0 animate-ping" />
            <pre className="whitespace-pre-wrap leading-relaxed text-emerald-300 text-[11px]">
              {executionOutput}
            </pre>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Status Ticker */}
      <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Verified Production Logic</span>
        </div>
        <span>UTF-8 · LF · Live Spec</span>
      </div>
    </div>
  );
};
