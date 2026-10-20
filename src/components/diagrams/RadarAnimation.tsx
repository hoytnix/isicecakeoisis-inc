import React from 'react';

export const RadarAnimation: React.FC = () => {
  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl w-full relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-cyan-400">FIG 03.A // ON-DEVICE RADAR</span>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-1 rounded border border-cyan-800">
          DUAL MODEL OFFLINE RUNTIME
        </span>
      </div>

      <div className="w-full h-56 sm:h-72 flex items-center justify-center relative">
        <svg viewBox="0 0 300 300" className="w-full h-full" role="img" aria-label="On-Device Radar Simulation">
          {/* Phone Frame */}
          <rect x="90" y="20" width="120" height="260" rx="20" fill="#0D1017" stroke="#38BDF8" strokeWidth="2" />
          {/* Speaker notch */}
          <rect x="110" y="30" width="80" height="10" rx="5" fill="#05060A" />

          {/* Radar Circles */}
          <circle cx="150" cy="132" r="60" fill="none" stroke="#38BDF8" strokeOpacity="0.2" strokeWidth="1" />
          <circle cx="150" cy="132" r="40" fill="none" stroke="#38BDF8" strokeOpacity="0.3" strokeWidth="1" />
          <circle cx="150" cy="132" r="20" fill="none" stroke="#38BDF8" strokeOpacity="0.4" strokeWidth="1" />

          {/* Sweeping Radar Line */}
          <g>
            <line x1="150" y1="132" x2="150" y2="72" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 150 132"
                to="360 150 132"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>
          </g>

          {/* Shifting Persona Blips */}
          <circle cx="168" cy="110" r="4" fill="#F59E0B">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="132" cy="155" r="4" fill="#38BDF8">
            <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Dual Architecture Indicators */}
          <text x="150" y="214" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="8" fontWeight="bold" textAnchor="middle">
            QWEN2.5-0.5B
          </text>
          <text x="150" y="225" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="6.5" textAnchor="middle">
            iPhone SE 3 &amp; newer
          </text>
          <text x="150" y="244" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="8" fontWeight="bold" textAnchor="middle">
            GEMMA 4 E2B
          </text>
          <text x="150" y="255" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="6.5" textAnchor="middle">
            Newer iPhones &amp; Androids
          </text>
        </svg>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>SHIFT DETECTED [OFFLINE]</span>
        <a
          href="https://yuli.tehwiz.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 transition-colors"
        >
          <span>yuli.tehwiz.com</span>
          <span className="text-[10px]">↗</span>
        </a>
      </div>
    </div>
  );
};
