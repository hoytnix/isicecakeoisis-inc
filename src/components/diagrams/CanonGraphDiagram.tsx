import React from 'react';

export const CanonGraphDiagram: React.FC = () => {
  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl w-full relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-cyan-400">FIG 06.A // CANON GRAPH</span>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-1 rounded border border-cyan-800">
          IP + KNOWLEDGE OS
        </span>
      </div>

      <div className="w-full h-56 sm:h-72 flex items-center justify-center relative">
        <svg viewBox="0 0 300 300" className="w-full h-full" role="img" aria-label="Canon Graph Constellation">
          {/* Connector constellation lines */}
          <g stroke="#38BDF8" strokeOpacity="0.3" strokeWidth="1">
            <line x1="150" y1="150" x2="80" y2="90" />
            <line x1="150" y1="150" x2="220" y2="90" />
            <line x1="150" y1="150" x2="80" y2="210" />
            <line x1="150" y1="150" x2="220" y2="210" />
          </g>

          {/* Central CANON Node */}
          <circle cx="150" cy="150" r="24" fill="#0D1017" stroke="#38BDF8" strokeWidth="2" />
          <text x="150" y="154" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" fontWeight="bold">
            CANON
          </text>

          {/* CAKERÏ Node */}
          <circle cx="80" cy="90" r="18" fill="#0D1017" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="80" y="93" fill="#F59E0B" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle">
            CAKERÏ
          </text>

          {/* #NBA Node */}
          <circle cx="220" cy="90" r="18" fill="#0D1017" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="220" y="93" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle">
            #NBA
          </text>

          {/* CaffeineMD Node */}
          <circle cx="80" cy="210" r="18" fill="#0D1017" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="80" y="213" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle">
            CaffeineMD
          </text>

          {/* YSL Anime Node */}
          <circle cx="220" cy="210" r="18" fill="#0D1017" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="220" y="213" fill="#F59E0B" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle">
            YSL ANIME
          </text>
        </svg>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>TEHWIZ PRODUCTIONS</span>
        <span className="text-cyan-400">CANON HUB</span>
      </div>
    </div>
  );
};
