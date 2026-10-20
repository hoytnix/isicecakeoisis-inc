import React, { useState, useEffect } from 'react';
import {
  FileText,
  Columns,
  Eye,
  Code,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  HardDrive,
  Share2,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface MarkdownSnippet {
  lineNum: number;
  type: 'frontmatter' | 'h1' | 'h2' | 'text' | 'wikilink' | 'todo' | 'code' | 'blank';
  raw: string;
  rendered?: React.ReactNode;
}

const DEMO_SNIPPETS: MarkdownSnippet[] = [
  { lineNum: 1, type: 'frontmatter', raw: '---' },
  { lineNum: 2, type: 'frontmatter', raw: 'title: "CaffeineMD vs Obsidian & Notion"' },
  { lineNum: 3, type: 'frontmatter', raw: 'license: "FLOSS (AGPL/MIT) · 100% Free"' },
  { lineNum: 4, type: 'frontmatter', raw: 'storage: "Local-First Markdown (.md)"' },
  { lineNum: 5, type: 'frontmatter', raw: '---' },
  { lineNum: 6, type: 'blank', raw: '' },
  {
    lineNum: 7,
    type: 'h1',
    raw: '# CaffeineMD // The Sovereign Second Brain',
    rendered: (
      <h1 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
        <span>CaffeineMD // Sovereign Second Brain</span>
      </h1>
    )
  },
  {
    lineNum: 8,
    type: 'text',
    raw: 'A modern **FLOSS alternative** to [[Obsidian]] and [[Notion]], engineered for personal knowledge and autonomous agents.',
    rendered: (
      <p className="text-xs text-slate-300 leading-relaxed">
        A modern <strong className="text-cyan-300 font-semibold">FLOSS alternative</strong> to{' '}
        <span className="text-amber-400 bg-amber-950/40 px-1 py-0.5 rounded border border-amber-800/40 font-mono text-[11px]">[[Obsidian]]</span>{' '}
        and{' '}
        <span className="text-indigo-400 bg-indigo-950/40 px-1 py-0.5 rounded border border-indigo-800/40 font-mono text-[11px]">[[Notion]]</span>,
        engineered for personal knowledge and autonomous agents.
      </p>
    )
  },
  { lineNum: 9, type: 'blank', raw: '' },
  {
    lineNum: 10,
    type: 'h2',
    raw: '## Core Guarantees',
    rendered: (
      <h2 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 mt-2">
        <span>// Core Guarantees</span>
      </h2>
    )
  },
  {
    lineNum: 11,
    type: 'todo',
    raw: '- [x] 100% Local-First: Plain `.md` files on your disk',
    rendered: (
      <div className="flex items-center gap-2 text-xs text-slate-300">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span><strong className="text-white">100% Local-First:</strong> Plain <code className="text-cyan-300 font-mono bg-slate-900 px-1 py-0.5 rounded">.md</code> files on your disk</span>
      </div>
    )
  },
  {
    lineNum: 12,
    type: 'todo',
    raw: '- [x] Zero Proprietary Cloud Lock-In or Paywalls',
    rendered: (
      <div className="flex items-center gap-2 text-xs text-slate-300">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span><strong className="text-white">Zero Cloud Lock-in:</strong> No closed-source core, no SaaS extortion</span>
      </div>
    )
  },
  {
    lineNum: 13,
    type: 'todo',
    raw: '- [x] Bidirectional [[Wikilinks]] & 3D Knowledge Graph',
    rendered: (
      <div className="flex items-center gap-2 text-xs text-slate-300">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span><strong className="text-white">Bidirectional [[Wikilinks]]:</strong> Interactive 3D knowledge graph</span>
      </div>
    )
  },
  {
    lineNum: 14,
    type: 'todo',
    raw: '- [x] Native B2A Agent-Legibility via /llms.txt & MCP',
    rendered: (
      <div className="flex items-center gap-2 text-xs text-slate-300">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span><strong className="text-white">B2A Agent Legible:</strong> Direct MCP &amp; offline model ingestion</span>
      </div>
    )
  }
];

export const MarkdownEditorDiagram: React.FC = () => {
  const [viewMode, setViewMode] = useState<'split' | 'edit' | 'preview'>('split');
  const [typedLines, setTypedLines] = useState<number>(DEMO_SNIPPETS.length);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'sovereign-vault.md' | 'graph.canvas'>('sovereign-vault.md');

  // Progressive typing simulation loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setTypedLines((prev) => {
        if (prev >= DEMO_SNIPPETS.length) {
          // Pause at the end before looping
          return 5; // rewind to frontmatter and type body again
        }
        return prev + 1;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="glass-panel p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl w-full border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Top OS Window Chrome */}
      <div className="flex flex-wrap items-center justify-between pb-3 mb-3 border-b border-slate-800/80 gap-2">
        {/* Window controls & active file */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1 bg-slate-900/90 rounded-lg p-0.5 border border-slate-800 text-[11px] font-mono">
            <button
              onClick={() => setActiveTab('sovereign-vault.md')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                activeTab === 'sovereign-vault.md'
                  ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3 h-3 text-cyan-400" />
              <span>caffeinemd-note.md</span>
            </button>
            <button
              onClick={() => setActiveTab('graph.canvas')}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-all cursor-pointer ${
                activeTab === 'graph.canvas'
                  ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Share2 className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">graph.canvas</span>
            </button>
          </div>
        </div>

        {/* View mode toggle & animation control */}
        <div className="flex items-center gap-1.5">
          <div className="inline-flex items-center rounded-lg bg-slate-900/80 border border-slate-800 p-0.5 text-[10px] font-mono">
            <button
              onClick={() => setViewMode('edit')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'edit' ? 'bg-cyan-900/50 text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Markdown Source"
            >
              <Code className="w-3 h-3" />
              <span className="hidden sm:inline">Source</span>
            </button>
            <button
              onClick={() => setViewMode('split')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'split' ? 'bg-cyan-900/50 text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Split View"
            >
              <Columns className="w-3 h-3" />
              <span className="hidden sm:inline">Split</span>
            </button>
            <button
              onClick={() => setViewMode('preview')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'preview' ? 'bg-cyan-900/50 text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Live Render"
            >
              <Eye className="w-3 h-3" />
              <span className="hidden sm:inline">Preview</span>
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
            title={isPlaying ? 'Pause Demo Animation' : 'Resume Demo Animation'}
            aria-label={isPlaying ? 'Pause Demo Animation' : 'Resume Demo Animation'}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={() => setTypedLines(DEMO_SNIPPETS.length)}
            className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
            title="Show All Lines"
            aria-label="Show All Lines"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Editor Sub-Header Toolbar */}
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1 py-1 mb-2 bg-slate-950/40 rounded-lg border border-slate-900">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-cyan-400 font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>FLOSS LIBRE</span>
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">vault: ~/notes/second-brain/</span>
          <span className="text-slate-600">/</span>
          <span className="text-amber-400">[[wikilinks: on]]</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LOCAL-FIRST</span>
          </span>
        </div>
      </div>

      {/* Main Dual-Pane or Single-Pane Workspace */}
      {activeTab === 'graph.canvas' ? (
        /* Interactive Knowledge Graph Canvas view */
        <div className="h-64 sm:h-80 bg-slate-950/80 rounded-xl border border-slate-800/80 p-4 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider">
                INTERACTIVE GRAPH CANVAS
              </span>
              <span className="text-[9px] font-mono bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800">
                0 CLOUD SYNC NEEDED
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">42 Notes Linked</span>
          </div>

          <div className="w-full h-44 relative flex items-center justify-center">
            <svg viewBox="0 0 320 180" className="w-full h-full">
              {/* Lines linking nodes */}
              <g stroke="#38BDF8" strokeOpacity="0.35" strokeWidth="1.2">
                <line x1="160" y1="90" x2="70" y2="45" strokeDasharray="3 3" />
                <line x1="160" y1="90" x2="250" y2="45" strokeDasharray="3 3" />
                <line x1="160" y1="90" x2="80" y2="140" />
                <line x1="160" y1="90" x2="240" y2="140" />
                <line x1="70" y1="45" x2="80" y2="140" strokeOpacity="0.2" />
                <line x1="250" y1="45" x2="240" y2="140" strokeOpacity="0.2" />
              </g>

              {/* Central CaffeineMD node */}
              <circle cx="160" cy="90" r="26" fill="#030712" stroke="#22D3EE" strokeWidth="2.5" />
              <text x="160" y="89" fill="#22D3EE" fontFamily="JetBrains Mono" fontSize="8" fontWeight="bold" textAnchor="middle">
                CaffeineMD
              </text>
              <text x="160" y="99" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="6" textAnchor="middle">
                FLOSS HUB
              </text>

              {/* Node 1: Obsidian Exporter */}
              <circle cx="70" cy="45" r="17" fill="#0D1117" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="70" y="47" fill="#FBBF24" fontFamily="JetBrains Mono" fontSize="6.5" textAnchor="middle">
                [[Obsidian]]
              </text>
              <text x="70" y="55" fill="#64748B" fontFamily="JetBrains Mono" fontSize="5" textAnchor="middle">
                Compat
              </text>

              {/* Node 2: Notion Importer */}
              <circle cx="250" cy="45" r="17" fill="#0D1117" stroke="#818CF8" strokeWidth="1.5" />
              <text x="250" y="47" fill="#A5B4FC" fontFamily="JetBrains Mono" fontSize="6.5" textAnchor="middle">
                [[Notion]]
              </text>
              <text x="250" y="55" fill="#64748B" fontFamily="JetBrains Mono" fontSize="5" textAnchor="middle">
                Libre Sync
              </text>

              {/* Node 3: Local Markdown Vault */}
              <circle cx="80" cy="140" r="19" fill="#0D1117" stroke="#34D399" strokeWidth="1.5" />
              <text x="80" y="142" fill="#34D399" fontFamily="JetBrains Mono" fontSize="6.5" textAnchor="middle">
                [[Local.md]]
              </text>
              <text x="80" y="150" fill="#64748B" fontFamily="JetBrains Mono" fontSize="5" textAnchor="middle">
                Your Disk
              </text>

              {/* Node 4: Autonomous B2A Agent */}
              <circle cx="240" cy="140" r="19" fill="#0D1117" stroke="#E879F9" strokeWidth="1.5" />
              <text x="240" y="142" fill="#F0ABFC" fontFamily="JetBrains Mono" fontSize="6.5" textAnchor="middle">
                [[MCP Agent]]
              </text>
              <text x="240" y="150" fill="#64748B" fontFamily="JetBrains Mono" fontSize="5" textAnchor="middle">
                Yuli/LLMs
              </text>
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-900 pt-2">
            <span className="flex items-center gap-1 text-slate-400">
              <HardDrive className="w-3 h-3 text-cyan-400" />
              <span>Full ownership: SQLite / Git / Folder-of-Files</span>
            </span>
            <a
              href="https://www.caffeinemd.wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
            >
              <span>caffeinemd.wiki</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      ) : (
        /* Markdown Editor Workspace */
        <div
          className={`grid gap-3 min-h-[290px] sm:min-h-[320px] transition-all duration-300 ${
            viewMode === 'split'
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1'
          }`}
        >
          {/* Left: Raw Markdown Editor Pane */}
          {(viewMode === 'split' || viewMode === 'edit') && (
            <div className="bg-slate-950/90 rounded-xl border border-slate-800/80 p-3 sm:p-4 font-mono text-[11px] sm:text-xs overflow-x-auto no-scrollbar relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2 pb-1.5 border-b border-slate-900 font-mono">
                  <span>MARKDOWN SOURCE</span>
                  <span>UTF-8 · LF</span>
                </div>

                <div className="space-y-1">
                  {DEMO_SNIPPETS.slice(0, typedLines).map((s) => {
                    if (s.type === 'frontmatter') {
                      return (
                        <div key={s.lineNum} className="flex gap-2.5 text-slate-500 leading-tight">
                          <span className="w-5 text-right select-none text-slate-700">{s.lineNum}</span>
                          <span className="text-slate-400">{s.raw}</span>
                        </div>
                      );
                    }
                    if (s.type === 'h1') {
                      return (
                        <div key={s.lineNum} className="flex gap-2.5 text-cyan-300 font-bold leading-tight">
                          <span className="w-5 text-right select-none text-slate-700">{s.lineNum}</span>
                          <span>
                            <span className="text-cyan-500"># </span>
                            {s.raw.replace('# ', '')}
                          </span>
                        </div>
                      );
                    }
                    if (s.type === 'h2') {
                      return (
                        <div key={s.lineNum} className="flex gap-2.5 text-cyan-400 font-semibold leading-tight mt-1.5">
                          <span className="w-5 text-right select-none text-slate-700">{s.lineNum}</span>
                          <span>
                            <span className="text-cyan-600">## </span>
                            {s.raw.replace('## ', '')}
                          </span>
                        </div>
                      );
                    }
                    if (s.type === 'todo') {
                      return (
                        <div key={s.lineNum} className="flex gap-2.5 text-slate-300 leading-tight">
                          <span className="w-5 text-right select-none text-slate-700">{s.lineNum}</span>
                          <span>
                            <span className="text-emerald-400">- [x] </span>
                            {s.raw.replace('- [x] ', '')}
                          </span>
                        </div>
                      );
                    }
                    if (s.type === 'blank') {
                      return (
                        <div key={s.lineNum} className="flex gap-2.5 leading-tight">
                          <span className="w-5 text-right select-none text-slate-700">{s.lineNum}</span>
                          <span className="text-transparent">.</span>
                        </div>
                      );
                    }
                    return (
                      <div key={s.lineNum} className="flex gap-2.5 text-slate-300 leading-tight">
                        <span className="w-5 text-right select-none text-slate-700">{s.lineNum}</span>
                        <span>
                          {s.raw.split(/(\[\[.*?\]\]|\*\*.*?\*\*)/g).map((part, i) => {
                            if (part.startsWith('[[')) {
                              return (
                                <span key={i} className="text-amber-400 font-semibold bg-amber-950/30 px-0.5 rounded">
                                  {part}
                                </span>
                              );
                            }
                            if (part.startsWith('**')) {
                              return (
                                <strong key={i} className="text-cyan-200">
                                  {part.replace(/\*\*/g, '')}
                                </strong>
                              );
                            }
                            return part;
                          })}
                        </span>
                      </div>
                    );
                  })}

                  {/* Blinking cursor */}
                  <div className="flex gap-2.5 items-center">
                    <span className="w-5 text-right select-none text-slate-700">{Math.min(typedLines + 1, 15)}</span>
                    <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse rounded-sm" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>FLOSS ENGINE: 0 TELEMETRY</span>
                <span className="text-cyan-400">STATUS: LIVE SYNC</span>
              </div>
            </div>
          )}

          {/* Right: Live Rendered Preview Pane */}
          {(viewMode === 'split' || viewMode === 'preview') && (
            <div className="bg-slate-900/70 rounded-xl border border-slate-800/80 p-3 sm:p-4 text-xs overflow-y-auto no-scrollbar relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 pb-1.5 border-b border-slate-800/80 font-mono">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Sparkles className="w-3 h-3" />
                    <span>LIVE RENDER PREVIEW</span>
                  </span>
                  <span className="text-emerald-400 font-mono">100% LIBRE</span>
                </div>

                <div className="space-y-3">
                  {DEMO_SNIPPETS.slice(0, typedLines)
                    .filter((s) => s.rendered)
                    .map((s) => (
                      <div key={s.lineNum} className="animate-fade-in">
                        {s.rendered}
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
                <span className="text-slate-400">Obsidian &amp; Notion Compatible</span>
                <a
                  href="https://www.caffeinemd.wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-bold inline-flex items-center gap-1"
                >
                  <span>https://www.caffeinemd.wiki</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Editor Footer Ribbon */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-bold">CaffeineMD</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span>Free &amp; Libre Open Source Software (FLOSS)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">Canonical:</span>
          <a
            href="https://www.caffeinemd.wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline font-mono"
          >
            caffeinemd.wiki
          </a>
        </div>
      </div>
    </div>
  );
};
