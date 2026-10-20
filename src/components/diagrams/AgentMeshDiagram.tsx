import React from 'react';

export const AgentMeshDiagram: React.FC = () => {
  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl w-full relative overflow-hidden scanline">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-cyan-400">FIG 02.A // B2A AGENT MESH</span>
        <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">MCP + LLMS.TXT</span>
      </div>
      
      <div className="w-full h-56 sm:h-72 flex items-center justify-center relative">
        <svg viewBox="0 0 400 300" className="w-full h-full" role="img" aria-label="B2A Agent Mesh Diagram">
          <defs>
            <radialGradient id="meshGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#05060A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="150" r="120" fill="url(#meshGlow)" />
          
          {/* Connecting Lines */}
          <g stroke="#38BDF8" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 4">
            <line x1="200" y1="150" x2="100" y2="80" />
            <line x1="200" y1="150" x2="300" y2="80" />
            <line x1="200" y1="150" x2="100" y2="220" />
            <line x1="200" y1="150" x2="300" y2="220" />
            <line x1="100" y1="80" x2="300" y2="80" />
            <line x1="100" y1="220" x2="300" y2="220" />
          </g>

          {/* Nodes */}
          <g className="nodes">
            <circle cx="200" cy="150" r="28" fill="#0D1017" stroke="#38BDF8" strokeWidth="2" />
            <text x="200" y="154" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" fontWeight="bold">
              B2A CORE
            </text>
            
            <g transform="translate(100, 80)">
              <circle r="22" fill="#0D1017" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="0" y="4" fill="#F59E0B" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle">
                MCP
              </text>
            </g>
            
            <g transform="translate(300, 80)">
              <circle r="22" fill="#0D1017" stroke="#38BDF8" strokeWidth="1.5" />
              <text x="0" y="4" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle">
                API
              </text>
            </g>
            
            <g transform="translate(100, 220)">
              <circle r="22" fill="#0D1017" stroke="#38BDF8" strokeWidth="1.5" />
              <text x="0" y="4" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle">
                SKILLS
              </text>
            </g>
            
            <g transform="translate(300, 220)">
              <circle r="22" fill="#0D1017" stroke="#38BDF8" strokeWidth="1.5" />
              <text x="0" y="4" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle">
                llms.txt
              </text>
            </g>
          </g>
        </svg>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Founder: Michael Scott Hoyt (@hoytnix)</span>
        <span className="text-cyan-400">Solo + AI Architecture</span>
      </div>
    </div>
  );
};
