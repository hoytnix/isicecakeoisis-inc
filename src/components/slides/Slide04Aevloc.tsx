import React from 'react';
import { ExternalLink, ArrowRight, Truck, Sparkles, MapPin, Building2, Infinity as InfinityIcon } from 'lucide-react';
import { NfcRippleDiagram } from '../diagrams/NfcRippleDiagram';
import { AmbientGlow } from '../layout/AmbientGlow';

export const Slide04Aevloc: React.FC = () => {
  return (
    <section id="slide-4" className="snap-section px-4 sm:px-8 relative">
      <AmbientGlow className="bottom-1/3 left-1/4" />
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <span>04 // REPUTATION SAAS + HARDWARE</span>
          </div>

          <div className="space-y-1.5">
            <a
              href="https://aevloc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
            >
              <span>aevloc.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
              Aevloc — Physical NFC Tap-To-Review Meets Agent-Operable SaaS.
            </h2>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Tap-to-review reputation SaaS built for local businesses and agencies. Hardware-assisted review capture powered by encrypted NTAG215 chips and instant QR routing, backed by a machine-legible API so autonomous agents can audit and manage review feeds.
          </p>

          {/* Plan Tiers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
            {/* SMB Growth Plan */}
            <div className="glass-card p-3.5 sm:p-4 rounded-xl border border-slate-800/90 relative overflow-hidden group hover:border-cyan-500/50 transition-all">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  SMB GROWTH PLAN
                </span>
                <Building2 className="w-4 h-4 text-cyan-400/80" />
              </div>
              <h3 className="font-display font-bold text-white text-base sm:text-lg">
                Up to 6 Locations
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                SMB Growth plan includes up to 6 locations with synchronized multi-location review routing.
              </p>
            </div>

            {/* Agency Plan */}
            <div className="glass-card p-3.5 sm:p-4 rounded-xl border border-slate-800/90 relative overflow-hidden group hover:border-amber-500/50 transition-all">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold font-semibold">
                  AGENCY PLAN
                </span>
                <MapPin className="w-4 h-4 text-gold/80" />
              </div>
              <h3 className="font-display font-bold text-white text-base sm:text-lg">
                Up to 100 Locations
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                Agency plan includes up to 100 locations for enterprise fleets, multi-unit franchises, and marketing agencies.
              </p>
            </div>
          </div>

          {/* Universal Inclusions Banner */}
          <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-cyan-800/50 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-obsidian/90 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>INCLUDED IN EVERY PLAN</span>
              </span>
              <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-bold tracking-wide">
                FREE GLOBAL S&amp;H!!
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-200">
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <InfinityIcon className="w-2.5 h-2.5" />
                </div>
                <div className="min-w-0">
                  <span className="font-semibold text-white">Unlimited Scans: </span>
                  <span className="text-slate-300">Each plan includes unlimited scans — tap and QR review requests with zero caps.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Truck className="w-2.5 h-2.5" />
                </div>
                <div className="min-w-0">
                  <span className="font-semibold text-white">Complimentary Hardware: </span>
                  <span className="text-slate-300">
                    Each location includes a complimentary NFC Tap-To-Review sticker pre-programmed to your Aevloc app — includes <strong className="text-emerald-300 font-bold">FREE global S&amp;H!!</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-0.5 flex flex-wrap items-center gap-3">
            <a
              href="https://aevloc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/40 px-4 py-2 rounded-lg border border-cyan-800/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 shadow-sm"
            >
              <span>INSPECT AEVLOC.COM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] font-mono text-slate-400">
              Pre-programmed &amp; ready to tap
            </span>
          </div>
        </div>

        <div className="lg:col-span-6 hidden lg:flex flex-col items-center justify-center">
          <NfcRippleDiagram />
        </div>
      </div>
    </section>
  );
};
