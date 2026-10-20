import React from 'react';
import {
  ExternalLink,
  BookOpen,
  HardDrive,
  Network,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { MarkdownEditorDiagram } from '../diagrams/MarkdownEditorDiagram';
import { AmbientGlow } from '../layout/AmbientGlow';

const COMPARISON_POINTS = [
  {
    icon: HardDrive,
    title: '100% Local-First & FLOSS',
    description: 'Free/Libre open-source core with plain .md files on your disk. Zero closed-source binaries, zero forced subscriptions.'
  },
  {
    icon: Network,
    title: 'Obsidian & Notion Parity',
    description: 'Bidirectional [[wikilinks]], dynamic 3D knowledge graph, nested databases, and canvas boards without proprietary silos.'
  },
  {
    icon: Cpu,
    title: 'B2A Agent-Legible MCP Server',
    description: 'Exposes your sovereign second brain to local AI agents (like Yuli) via deterministic Model Context Protocol (MCP) and /llms.txt.'
  },
  {
    icon: ShieldCheck,
    title: 'Zero Telemetry & Offline Privacy',
    description: 'Runs entirely on your local silicon. Your thoughts, journals, and intellectual property never leak to third-party cloud servers.'
  }
];

export const Slide06CaffeineMD: React.FC = () => {
  return (
    <section id="slide-6" className="snap-section px-4 sm:px-8 relative">
      <AmbientGlow className="bottom-1/4 right-1/4" />
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* Left Column: Narrative & Architecture */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>06 // FLOSS KNOWLEDGE ARCHITECTURE</span>
          </div>

          <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            CaffeineMD: The FLOSS Alternative to Obsidian &amp; Notion.
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            A free, libre, and open-source personal knowledge operating system engineered for humans and autonomous software agents. Local-first markdown notes, bi-directional wikilinks, and graph topology with zero proprietary cloud lock-in.
          </p>

          {/* Canonical URL card */}
          <div className="glass-card p-3 rounded-xl border border-cyan-500/30 bg-cyan-950/20 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">Canonical:</span>
              <a
                href="https://www.caffeinemd.wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 font-semibold underline underline-offset-2 flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
              >
                <span>https://www.caffeinemd.wiki</span>
                <ExternalLink className="w-3 h-3 text-cyan-400" />
              </a>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded-full">
              FLOSS LIBRE
            </span>
          </div>

          {/* Feature Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[40vh] sm:max-h-none overflow-y-auto no-scrollbar">
            {COMPARISON_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="glass-card p-3 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Icon className="w-3.5 h-3.5" />
                    <h3 className="font-display font-bold text-white text-xs">{point.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-normal">{point.description}</p>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://www.caffeinemd.wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 text-obsidian font-display font-bold text-xs hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            >
              <span>Launch CaffeineMD Wiki</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <span className="text-slate-500 text-xs font-mono hidden sm:inline">//</span>

            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>Free &amp; Open Source Forever</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive / Animated Markdown Editor Demo */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <MarkdownEditorDiagram />
        </div>
      </div>
    </section>
  );
};
