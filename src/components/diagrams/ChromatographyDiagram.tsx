import React from 'react';

export const ChromatographyDiagram: React.FC = () => {
  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl w-full relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-cyan-400">FIG 05.A // CHROMATOGRAPHY STRIP</span>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-1 rounded border border-cyan-800">
          REAL-TIME ELUTION
        </span>
      </div>

      <div className="w-full h-56 sm:h-72 flex items-center justify-center relative">
        <svg viewBox="0 0 300 300" className="w-full h-full" role="img" aria-label="Chromatography Elution Animation">
          {/* Chamber beaker */}
          <rect x="110" y="200" width="80" height="50" rx="4" fill="none" stroke="#38BDF8" strokeWidth="2" />
          <rect x="115" y="215" width="70" height="30" fill="#38BDF8" fillOpacity="0.15" />
          <text x="150" y="233" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle">
            SOLVENT
          </text>

          {/* Calibrated Strip */}
          <rect x="142" y="60" width="16" height="150" fill="#0D1017" stroke="#F8FAFC" strokeWidth="1.5" rx="2" />

          {/* Three Eluting Fractions (Cyan, Amber, Mint) */}
          <ellipse cx="150" cy="180" rx="6" ry="3" fill="#38BDF8">
            <animate attributeName="cy" values="210;180;180" dur="4s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="150" cy="130" rx="6" ry="3" fill="#F59E0B">
            <animate attributeName="cy" values="210;130;130" dur="4s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="150" cy="85" rx="6" ry="3" fill="#34D399">
            <animate attributeName="cy" values="210;85;85" dur="4s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>ORIGIN</span>
        <span className="text-cyan-400">Rf 0.28 // 0.54 // 0.79</span>
      </div>
    </div>
  );
};
