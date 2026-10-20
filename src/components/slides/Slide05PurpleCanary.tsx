import React from 'react';
import { ExternalLink, ArrowRight, ScanLine, BookOpen } from 'lucide-react';
import { ChromatographyDiagram } from '../diagrams/ChromatographyDiagram';
import { AmbientGlow } from '../layout/AmbientGlow';

export const Slide05PurpleCanary: React.FC = () => {
  return (
    <section id="slide-5" className="snap-section px-4 sm:px-8 relative">
      <AmbientGlow className="top-1/4 right-1/3" />
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <span>05 // HARM-REDUCTION LAB &amp; DIGITAL COMMONS</span>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono">
              <a
                href="https://purplecanarylab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
              >
                <span>purplecanarylab.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-600">//</span>
              <a
                href="https://book.purplecanarylab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
              >
                <span>book.purplecanarylab.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Purple Canary — Free Scanner App &amp; Harm Reduction E-Book.
            </h2>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Practical, non-sensational physical chemistry for consumer safety. Purple Canary provides an accessible in-browser paper-chromatography scanner web app alongside the free companion field guide e-book <em>&ldquo;What Was In That Joint Bro!?&rdquo;</em>.
          </p>

          {/* Two site showcase cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Site 1: Free Scanner App */}
            <a
              href="https://purplecanarylab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-4 rounded-xl border border-cyan-800/60 hover:border-cyan-400/70 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-obsidian transition-colors">
                    <ScanLine className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/80">
                    FREE SCANNER APP
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-sm group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  purplecanarylab.com
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                  In-browser paper-chromatography scanner tool for real-time capillary analysis &amp; Rf calculation.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-cyan-400 group-hover:text-cyan-300">
                <span>OPEN SCANNER</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Site 2: Free E-Book */}
            <a
              href="https://book.purplecanarylab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-4 rounded-xl border border-emerald-800/60 hover:border-emerald-400/70 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-400 group-hover:text-obsidian transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                    FREE E-BOOK
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-sm group-hover:text-emerald-300 flex items-center gap-1.5 transition-colors">
                  book.purplecanarylab.com
                  <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                  &ldquo;What Was In That Joint Bro!?&rdquo; — digital harm reduction handbook &amp; field guide.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-emerald-400 group-hover:text-emerald-300">
                <span>READ FREE E-BOOK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Quick Dual CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href="https://purplecanarylab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-obsidian bg-cyan-400 hover:bg-cyan-300 transition-all px-3.5 py-2 rounded-lg shadow-md shadow-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <ScanLine className="w-3.5 h-3.5" />
              <span>LAUNCH SCANNER APP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://book.purplecanarylab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-300 hover:text-emerald-200 transition-colors bg-emerald-950/50 hover:bg-emerald-900/60 px-3.5 py-2 rounded-lg border border-emerald-800/70 hover:border-emerald-500/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>READ COMPANION E-BOOK</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 hidden lg:flex flex-col items-center justify-center">
          <ChromatographyDiagram />
        </div>
      </div>
    </section>
  );
};
