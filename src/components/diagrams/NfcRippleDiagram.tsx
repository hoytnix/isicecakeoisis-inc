import React from 'react';

export const NfcRippleDiagram: React.FC = () => {
  const starAngles = [0, 72, 144, 216, 288];

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl w-full relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-cyan-400">FIG 04.A // NTAG215 TAP RIPPLE</span>
        <span className="text-[10px] font-mono text-gold bg-amber-950/40 px-2 py-1 rounded border border-amber-800/50">
          5-STAR BLOOM
        </span>
      </div>

      <div className="w-full h-56 sm:h-72 flex items-center justify-center relative">
        <svg viewBox="0 0 300 300" className="w-full h-full" role="img" aria-label="NFC Tap Ripple Animation with 5 Floating Stars">
          <defs>
            <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Orbiting track */}
          <circle
            cx="150"
            cy="150"
            r="79"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1"
            strokeDasharray="3 5"
            strokeOpacity="0.25"
          />

          {/* Primary wave */}
          <circle cx="150" cy="150" r="30" fill="none" stroke="#38BDF8" strokeWidth="1.5">
            <animate attributeName="r" values="30;120" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Secondary delayed wave */}
          <circle cx="150" cy="150" r="30" fill="none" stroke="#F59E0B" strokeWidth="1.5">
            <animate attributeName="r" values="30;120" begin="1.5s" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" begin="1.5s" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Center NFC chip */}
          <circle cx="150" cy="150" r="30" fill="#0D1017" stroke="#38BDF8" strokeWidth="2" />
          <text x="150" y="154" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle">
            NTAG215
          </text>

          {/* 5 Orbiting stars floating around the NTAG215 core */}
          {starAngles.map((angle, index) => (
            <g key={angle}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${angle} 150 150`}
                to={`${angle + 360} 150 150`}
                dur="12s"
                repeatCount="indefinite"
              />
              <polygon
                points="150,60 153,68 162,68 155,73 157,81 150,76 142,81 144,73 138,68 147,68"
                fill="#F59E0B"
                filter="url(#star-glow)"
              >
                <animate
                  attributeName="opacity"
                  values="0.75;1;0.75"
                  dur={`${2 + index * 0.3}s`}
                  repeatCount="indefinite"
                />
              </polygon>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>PRE-PROGRAMMED STICKER</span>
        <span className="text-cyan-400">UNLIMITED SCANS</span>
      </div>
    </div>
  );
};
