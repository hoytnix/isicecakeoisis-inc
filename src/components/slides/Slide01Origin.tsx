import React from 'react';
import { Cpu, GitBranch, User, ArrowRight, ChevronDown } from 'lucide-react';
import { AmbientGlow } from '../layout/AmbientGlow';

interface Slide01OriginProps {
  onOpenInvestor: () => void;
  onExplorePortfolio: () => void;
}

export const Slide01Origin: React.FC<Slide01OriginProps> = ({
  onOpenInvestor,
  onExplorePortfolio
}) => {
  return (
    <section id="slide-1" className="snap-section px-4 sm:px-8 relative">
      <AmbientGlow className="top-1/4 left-1/4" />
      <div className="max-w-4xl w-full mx-auto relative z-10 space-y-5 sm:space-y-6">
        <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
          "When I was five years old, I asked my uncle how the Goombas moved in my Mario game..."
        </h1>

        <div className="glass-card p-5 sm:p-7 rounded-2xl space-y-4 border-l-2 border-cyan-400 shadow-xl">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            "...and he replied, that’s AI or artificial intelligence; to which I replied that I wanted to get my PhD in AI so I could make video characters… now I’m currently working on my Master of Science in AI and Yuli, the AI NPC SDK."
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" /> MS.AI Student
            </span>
            <span className="flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-cyan-400" /> B2A Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-cyan-400" /> @hoytnix
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
          <button
            onClick={onOpenInvestor}
            className="bg-cyan-500 hover:bg-cyan-400 text-obsidian px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-display font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Request Investor Materials</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onExplorePortfolio}
            className="glass-panel hover:border-cyan-400/50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-display font-semibold text-xs sm:text-sm text-slate-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Explore the Thesis & Portfolio</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
