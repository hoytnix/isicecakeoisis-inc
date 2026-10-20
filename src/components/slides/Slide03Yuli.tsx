import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { RadarAnimation } from '../diagrams/RadarAnimation';
import { AmbientGlow } from '../layout/AmbientGlow';

export const Slide03Yuli: React.FC = () => {
  return (
    <section id="slide-3" className="snap-section px-4 sm:px-8 relative">
      <AmbientGlow className="top-1/3 left-1/2 -translate-x-1/2" />
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <span>03 // FLAGSHIP SDK</span>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              Most Popular App
            </span>
            <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Yuli — AI Character SDK (Beta) with On-Device Personality Engine.
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Yuli is an on-device tiny-LM personality engine fine-tuned on Reddit conversations for real-time persona detection. Running 100% offline with zero cloud inference latency, Yuli delivers two specialized model architectures tailored to mobile silicon tiers and is the founder's most popular application.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="glass-card p-3 sm:p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyan-400">ARCH 01 // ENTRY TIER</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">LIGHTWEIGHT</span>
              </div>
              <h3 className="font-display font-bold text-white text-sm mt-1">Qwen2.5-0.5B</h3>
              <p className="text-[11px] text-cyan-300 font-mono mt-0.5">iPhone SE 3 &amp; newer</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Fine-tuned on Reddit conversations for dynamic persona detection on accessible hardware.
              </p>
            </div>
            <div className="glass-card p-3 sm:p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyan-400">ARCH 02 // MODERN TIER</span>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/50">ADVANCED</span>
              </div>
              <h3 className="font-display font-bold text-white text-sm mt-1">Gemma 4 E2B</h3>
              <p className="text-[11px] text-cyan-300 font-mono mt-0.5">Newer iPhones &amp; Androids</p>
              <p className="text-[11px] text-slate-400 mt-1">
                Expanded multi-turn conversational reasoning and persona fidelity across modern mobile silicon.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://yuli.tehwiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 text-obsidian px-4 sm:px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wide transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Sparkles className="w-4 h-4 fill-obsidian/20" />
              <span>Try Yuli in Browser</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300">yuli.tehwiz.com</span>
            </span>
          </div>

          <div className="glass-panel px-3.5 py-2 rounded-xl border border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>100% Offline · Zero Cloud Latency</span>
            </span>
            <span className="text-cyan-400">ROADMAP: Unreal &amp; Unity (BSL-1.1)</span>
          </div>
        </div>

        <div className="lg:col-span-6 hidden lg:flex flex-col items-center justify-center">
          <RadarAnimation />
        </div>
      </div>
    </section>
  );
};
