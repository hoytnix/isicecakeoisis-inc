import React from 'react';
import { THESIS_PILLARS } from '../../data/ecosystemData';
import { AgentMeshDiagram } from '../diagrams/AgentMeshDiagram';
import { AmbientGlow } from '../layout/AmbientGlow';

export const Slide02Thesis: React.FC = () => {
  return (
    <section id="slide-2" className="snap-section px-4 sm:px-8 relative">
      <AmbientGlow className="bottom-1/4 right-1/4" />
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <span>02 // INVESTMENT THESIS</span>
          </div>
          <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            The Screen Was the Bottleneck. Agents Are the Market.
          </h2>
          <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed max-h-[45vh] sm:max-h-none overflow-y-auto no-scrollbar">
            {THESIS_PILLARS.map((pillar) => (
              <div key={pillar.number} className="glass-card p-3 sm:p-4 rounded-xl border-l-2 border-cyan-400">
                <h3 className="font-display font-bold text-white text-xs sm:text-sm mb-1">
                  {pillar.number} // {pillar.title}
                </h3>
                <p className="text-slate-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 hidden lg:flex flex-col items-center justify-center">
          <AgentMeshDiagram />
        </div>
      </div>
    </section>
  );
};
