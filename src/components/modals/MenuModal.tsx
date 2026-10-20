import React from 'react';
import {
  Compass,
  X,
  ArrowUpRight,
  ArrowRight,
  Gamepad2,
  Network,
  Cpu,
  Smartphone,
  FlaskConical,
  Sparkles,
  FileCode2,
  Landmark,
  Globe,
  Terminal,
  MessageSquare,
  Copy,
  ZapOff,
  Layers,
  Radio,
  Star,
  TestTubeDiagonal,
  BookOpen,
  Flame,
  Atom,
  ExternalLink
} from 'lucide-react';
import { AmbientGlow } from '../layout/AmbientGlow';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (slideNumber: number) => void;
  onOpenInvestor: () => void;
  onCopyManifest: () => void;
  onToggleLowPower: () => void;
  lowPower: boolean;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onSelectSlide,
  onOpenInvestor,
  onCopyManifest,
  onToggleLowPower,
  lowPower
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-directory-title"
      className="fixed inset-0 z-50 bg-obsidian/90 backdrop-blur-2xl flex flex-col overflow-y-auto p-4 sm:p-8 lg:p-12 transition-all duration-300"
    >
      <AmbientGlow className="top-10 left-1/4 opacity-60" />
      <AmbientGlow className="bottom-10 right-1/4 opacity-60" />

      <div className="max-w-5xl w-full mx-auto space-y-6 sm:space-y-8 my-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-5">
          <div className="flex items-center gap-3.5">
            <img
              src="https://i.ibb.co/3mrktB3R/504.png"
              alt="ISICECAKEOISIS INC."
              width={788}
              height={316}
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <div className="border-l border-slate-800/80 pl-3">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block">
                SYSTEM DIRECTORY
              </span>
              <h2 id="menu-directory-title" className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Menu
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="glass-panel p-3 rounded-2xl text-slate-400 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-950/40 transition-all group shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            title="Close Menu (Esc)"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Main Navigation Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Menu</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500">01 — 09 VIEWPORTS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {/* 01 // Goomba Origin */}
            <button
              onClick={() => onSelectSlide(1)}
              className="group relative glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all duration-300 text-left flex items-start gap-3.5 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 group-hover:bg-cyan-400 group-hover:text-obsidian text-cyan-400 flex items-center justify-center shrink-0 transition-all duration-300">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">01 // ORIGIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                  Goomba Story
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">MS.AI &amp; Yuli NPC SDK origin</p>
              </div>
            </button>

            {/* 02 // Investment Thesis */}
            <button
              onClick={() => onSelectSlide(2)}
              className="group relative glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all duration-300 text-left flex items-start gap-3.5 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 group-hover:bg-cyan-400 group-hover:text-obsidian text-cyan-400 flex items-center justify-center shrink-0 transition-all duration-300">
                <Network className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">02 // THESIS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                  B2A Architecture
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">Why agents are the next market</p>
              </div>
            </button>

            {/* 03 // Yuli SDK */}
            <button
              onClick={() => onSelectSlide(3)}
              className="group relative glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all duration-300 text-left flex items-start gap-3.5 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 group-hover:bg-cyan-400 group-hover:text-obsidian text-cyan-400 flex items-center justify-center shrink-0 transition-all duration-300">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">03 // FLAGSHIP SDK</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                  Yuli AI SDK (Beta)
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">Qwen2.5-0.5B &amp; Gemma 4 E2B engines</p>
              </div>
            </button>

            {/* 04 // Aevloc */}
            <button
              onClick={() => onSelectSlide(4)}
              className="group relative glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all duration-300 text-left flex items-start gap-3.5 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 group-hover:bg-cyan-400 group-hover:text-obsidian text-cyan-400 flex items-center justify-center shrink-0 transition-all duration-300">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">04 // SAAS + NFC</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                  Aevloc
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">NTAG215 stands &amp; reputation API</p>
              </div>
            </button>

            {/* 05 // Purple Canary */}
            <button
              onClick={() => onSelectSlide(5)}
              className="group relative glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all duration-300 text-left flex items-start gap-3.5 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 group-hover:bg-cyan-400 group-hover:text-obsidian text-cyan-400 flex items-center justify-center shrink-0 transition-all duration-300">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">05 // HARM REDUCTION</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                  Purple Canary
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">Free scanner app &amp; companion e-book</p>
              </div>
            </button>

            {/* 06 // CaffeineMD */}
            <button
              onClick={() => onSelectSlide(6)}
              className="group relative glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all duration-300 text-left flex items-start gap-3.5 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 group-hover:bg-cyan-400 group-hover:text-obsidian text-cyan-400 flex items-center justify-center shrink-0 transition-all duration-300">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">06 // FLOSS KNOWLEDGE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                  CaffeineMD
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">FLOSS alternative to Obsidian &amp; Notion</p>
              </div>
            </button>

            {/* 07 // Published Mobile Games */}
            <button
              onClick={() => onSelectSlide(7)}
              className="group relative glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all duration-300 text-left flex items-start gap-3.5 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 group-hover:bg-cyan-400 group-hover:text-obsidian text-cyan-400 flex items-center justify-center shrink-0 transition-all duration-300">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">07 // GAMES</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                  TehWiz Games
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">Ramen Nights, FUN &amp; $!#?</p>
              </div>
            </button>

            {/* 08 // Investor Inquiries */}
            <button
              onClick={() => onSelectSlide(8)}
              className="group relative glass-card p-4 rounded-2xl border border-amber-500/30 hover:border-amber-400/70 hover:bg-slate-900/90 transition-all duration-300 text-left flex items-start gap-3.5 shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-700/50 group-hover:bg-amber-400 group-hover:text-obsidian text-amber-400 flex items-center justify-center shrink-0 transition-all duration-300">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-400">08 // CAPITAL</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                  Investor Inquiries
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">Accredited inquiry &amp; compliance</p>
              </div>
            </button>

            {/* 09 // TehWiz Productions */}
            <button
              onClick={() => onSelectSlide(9)}
              className="group relative glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-400/60 hover:bg-slate-900/90 transition-all duration-300 text-left flex items-start gap-3.5 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 group-hover:bg-cyan-400 group-hover:text-obsidian text-cyan-400 flex items-center justify-center shrink-0 transition-all duration-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400">09 // TEHWIZ</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                  A TehWiz Production.
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">Hacking FLOSS &amp; composing code since 2009</p>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Row: Quick Directives + Sibling Hubs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Quick Actions */}
          <div className="lg:col-span-5 glass-panel p-5 rounded-2xl flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>Quick Directives</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">B2A ACTIONS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenInvestor();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-obsidian font-display font-bold text-xs transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Direct Contact &amp; Inquiry
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  onClose();
                  onCopyManifest();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-cyan-950/60 text-xs font-mono text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Copy className="w-3.5 h-3.5 text-cyan-400" /> Copy /llms.txt Manifest
                </span>
                <span className="text-[10px] text-slate-500">CLIPBOARD</span>
              </button>
              <a
                href="https://yuli.tehwiz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 text-xs font-mono text-cyan-300 border border-cyan-800/60 hover:border-cyan-400/60 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Try Yuli in Browser
                </span>
                <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                  yuli.tehwiz.com <ExternalLink className="w-3 h-3" />
                </span>
              </a>
              <button
                onClick={() => {
                  onToggleLowPower();
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-cyan-950/60 text-xs font-mono text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ZapOff className="w-3.5 h-3.5 text-amber-400" /> Toggle Low-Power Mode
                </span>
                <span className="text-[10px] text-slate-500">
                  {lowPower ? 'STATE: ON' : 'STATE: OFF'}
                </span>
              </button>
            </div>
          </div>

          {/* Sibling Hubs */}
          <div className="lg:col-span-7 glass-panel p-5 rounded-2xl flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Six Sibling Ecosystem Hubs</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500">VERIFIED DOMAINS</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <a
                href="https://tehwiz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-slate-900/70 hover:bg-cyan-950/50 border border-slate-800/80 hover:border-cyan-400/50 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-cyan-400">
                  <Radio className="w-4 h-4" />
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </div>
                <span className="text-xs font-mono font-semibold text-white group-hover:text-cyan-300 mt-2">
                  tehwiz.com
                </span>
                <span className="text-[10px] text-slate-400 truncate">Public Agency Face</span>
              </a>

              <a
                href="https://aevloc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-slate-900/70 hover:bg-cyan-950/50 border border-slate-800/80 hover:border-cyan-400/50 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-cyan-400">
                  <Star className="w-4 h-4" />
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </div>
                <span className="text-xs font-mono font-semibold text-white group-hover:text-cyan-300 mt-2">
                  aevloc.com
                </span>
                <span className="text-[10px] text-slate-400 truncate">Reputation SaaS + NFC</span>
              </a>

              <a
                href="https://purplecanarylab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-slate-900/70 hover:bg-cyan-950/50 border border-slate-800/80 hover:border-cyan-400/50 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-cyan-400">
                  <TestTubeDiagonal className="w-4 h-4" />
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </div>
                <span className="text-xs font-mono font-semibold text-white group-hover:text-cyan-300 mt-2">
                  purplecanarylab.com
                </span>
                <span className="text-[10px] text-slate-400 truncate">Harm-Reduction Lab</span>
              </a>

              <a
                href="https://caffeinemd.wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-slate-900/70 hover:bg-cyan-950/50 border border-slate-800/80 hover:border-cyan-400/50 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-cyan-400">
                  <BookOpen className="w-4 h-4" />
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </div>
                <span className="text-xs font-mono font-semibold text-white group-hover:text-cyan-300 mt-2">
                  caffeinemd.wiki
                </span>
                <span className="text-[10px] text-slate-400 truncate">Local-First Knowledge OS</span>
              </a>

              <a
                href="https://alembic.quest"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-slate-900/70 hover:bg-cyan-950/50 border border-slate-800/80 hover:border-cyan-400/50 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-cyan-400">
                  <Flame className="w-4 h-4" />
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </div>
                <span className="text-xs font-mono font-semibold text-white group-hover:text-cyan-300 mt-2">
                  alembic.quest
                </span>
                <span className="text-[10px] text-slate-400 truncate">Sibling Ecosystem Hub</span>
              </a>

              <a
                href="https://alchememe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-slate-900/70 hover:bg-cyan-950/50 border border-slate-800/80 hover:border-cyan-400/50 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-cyan-400">
                  <Atom className="w-4 h-4" />
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </div>
                <span className="text-xs font-mono font-semibold text-white group-hover:text-cyan-300 mt-2">
                  alchememe.com
                </span>
                <span className="text-[10px] text-slate-400 truncate">Sibling Ecosystem Hub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
