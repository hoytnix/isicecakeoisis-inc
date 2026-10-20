import React, { useState } from 'react';
import {
  Sparkles,
  Terminal,
  ExternalLink,
  Code2,
  Feather,
  ShieldCheck,
  History,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Copy
} from 'lucide-react';
import { AmbientGlow } from '../layout/AmbientGlow';

interface Slide09ColophonProps {
  lowPower: boolean;
  onToggleLowPower: () => void;
  onReturnToTop: () => void;
}

export const Slide09Colophon: React.FC<Slide09ColophonProps> = ({
  lowPower,
  onToggleLowPower,
  onReturnToTop
}) => {
  const [activeTab, setActiveTab] = useState<'creed' | 'signature' | 'registry'>('creed');
  const [sealStamped, setSealStamped] = useState(false);
  const [copiedSignature, setCopiedSignature] = useState(false);

  const handleStampSeal = () => {
    setSealStamped(true);
    setTimeout(() => setSealStamped(false), 1200);
  };

  const handleCopySignature = () => {
    navigator.clipboard?.writeText(
      'A TehWiz Production.\n"Hacking FLOSS & Composing Code With Prose Since 2009."'
    );
    setCopiedSignature(true);
    setTimeout(() => setCopiedSignature(false), 2000);
  };

  return (
    <section id="slide-9" className="snap-section px-4 sm:px-8 relative py-12 lg:py-0 flex items-center justify-center">
      <AmbientGlow className="bottom-10 left-1/2 -translate-x-1/2 opacity-70" />

      <div className="max-w-6xl w-full mx-auto relative z-10 space-y-6 sm:space-y-8 my-auto">
        {/* Header Kicker & Titles */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>09 // TEHWIZ PRODUCTIONS</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            A TehWiz Production.
          </h2>

          <p className="text-xs sm:text-sm font-mono text-cyan-400/90 tracking-wide">
            The footer on all of our properties.
          </p>

          {/* Motto Display */}
          <div className="max-w-2xl mx-auto pt-1">
            <div className="relative inline-block px-5 py-2.5 rounded-xl bg-slate-950/80 border border-cyan-500/30 shadow-lg shadow-cyan-950/30 backdrop-blur-md">
              <span className="text-xs sm:text-sm md:text-base font-serif italic text-slate-200 tracking-wide">
                &ldquo;Hacking FLOSS &amp; Composing Code With Prose Since 2009.&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column: The Studio & Philosophy */}
          <div className="lg:col-span-6 glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase flex items-center gap-2">
                  <Feather className="w-3.5 h-3.5 text-cyan-400" />
                  <span>The Studio &amp; The Forge</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  FOUNDED 2009 // 17+ YEARS
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
                <p>
                  <strong className="text-white font-semibold">TehWiz Productions</strong> is
                  the independent creative engineering studio, FLOSS research forge, and media house
                  founded in 2009 by Michael Scott Hoyt (
                  <span className="text-cyan-400 font-mono">@hoytnix</span>). It serves as the
                  architectural foundation and creative crucible for the entire Business-to-Agent (B2A)
                  ecosystem.
                </p>

                <p>
                  Every codebase, physical artifact, open-source tool, and game we release concludes
                  with the exact same hallmark stamp:{' '}
                  <span className="text-cyan-300 font-mono font-medium bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40">
                    A TehWiz Production.
                  </span>{' '}
                  It is an immutable commitment to craftsmanship, transparency, and independence.
                </p>

                <p className="text-slate-400">
                  While sovereign properties like <span className="text-slate-200">CaffeineMD</span>,{' '}
                  <span className="text-slate-200">Aevloc</span>,{' '}
                  <span className="text-slate-200">Purple Canary</span>, and{' '}
                  <span className="text-slate-200">Yuli</span> each have their own dedicated
                  viewports and architectures in this deck, TehWiz is the laboratory that engineered
                  them all from first principles.
                </p>
              </div>

              {/* Core Tenets */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-cyan-400 text-[11px] font-mono font-bold mb-1">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Code With Prose</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal">
                    Software written as enduring technical literature. Clean syntax, literate systems, and machine-legible clarity.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-mono font-bold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>FLOSS Stewardship</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal">
                    Free/Libre open-source ethics since 2009. Local-first data sovereignty with zero corporate telemetry or lock-in.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Studio Authority Links */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
              <a
                href="https://tehwiz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-700/60 hover:border-cyan-400 text-xs font-mono font-semibold transition-all group shadow-md"
              >
                <span>Visit TehWiz Productions</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/hoytnix"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-mono transition-all group"
              >
                <span>GitHub @hoytnix</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Hallmark Seal & Studio Telemetry */}
          <div className="lg:col-span-6 glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              {/* Terminal Navigation Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 ml-1.5">
                    tehwiz://hallmark.sh
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveTab('creed')}
                    className={`px-2.5 py-0.5 text-[10px] font-mono rounded cursor-pointer transition-colors ${
                      activeTab === 'creed'
                        ? 'bg-cyan-950 text-cyan-300 font-bold border border-cyan-800/60'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    creed.txt
                  </button>
                  <button
                    onClick={() => setActiveTab('signature')}
                    className={`px-2.5 py-0.5 text-[10px] font-mono rounded cursor-pointer transition-colors ${
                      activeTab === 'signature'
                        ? 'bg-cyan-950 text-cyan-300 font-bold border border-cyan-800/60'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    footer.spec
                  </button>
                  <button
                    onClick={() => setActiveTab('registry')}
                    className={`px-2.5 py-0.5 text-[10px] font-mono rounded cursor-pointer transition-colors ${
                      activeTab === 'registry'
                        ? 'bg-cyan-950 text-cyan-300 font-bold border border-cyan-800/60'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    studio.json
                  </button>
                </div>
              </div>

              {/* Tab Contents */}
              <div className="min-h-[170px] bg-slate-950/70 p-4 rounded-xl border border-slate-900 font-mono text-xs text-slate-300 relative overflow-hidden">
                {activeTab === 'creed' && (
                  <div className="space-y-2 animate-fadeIn">
                    <div className="text-[11px] text-cyan-400 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>THE TEHWIZ CODEX // MANIFESTO</span>
                    </div>
                    <div className="text-slate-300 space-y-1.5 text-[11px] leading-relaxed">
                      <p>&gt; 01. Code is written once, executed billions of times, but read by generations.</p>
                      <p>&gt; 02. FLOSS is not merely a license; it is an unbreachable defense against digital feudalism.</p>
                      <p>&gt; 03. Compose code with prose so that both humans and autonomous software agents navigate with zero ambiguity.</p>
                      <p>&gt; 04. No venture capture. No surveillance telemetry. Sovereign craftsmanship since 2009.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'signature' && (
                  <div className="space-y-2 animate-fadeIn">
                    <div className="text-[11px] text-cyan-400 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>IMMUTABLE FOOTER IMPRINT</span>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-[11px] text-cyan-200 space-y-1">
                      <div className="font-bold text-white">A TehWiz Production.</div>
                      <div className="italic text-slate-400 text-[10px]">
                        &quot;Hacking FLOSS &amp; Composing Code With Prose Since 2009.&quot;
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-normal">
                      Stamped uniformly across HTML footers, Git signed tags, documentation manifests, CLI stdout banners, and physical hardware packaging.
                    </p>
                  </div>
                )}

                {activeTab === 'registry' && (
                  <div className="space-y-1.5 text-[11px] leading-tight animate-fadeIn">
                    <div><span className="text-cyan-400">&quot;studio&quot;</span>: <span className="text-amber-300">&quot;TehWiz Productions&quot;</span>,</div>
                    <div><span className="text-cyan-400">&quot;foundingYear&quot;</span>: <span className="text-purple-300">2009</span>,</div>
                    <div><span className="text-cyan-400">&quot;tenure&quot;</span>: <span className="text-amber-300">&quot;17+ Years Continuous FLOSS&quot;</span>,</div>
                    <div><span className="text-cyan-400">&quot;founder&quot;</span>: <span className="text-amber-300">&quot;Michael Scott Hoyt (@hoytnix)&quot;</span>,</div>
                    <div><span className="text-cyan-400">&quot;motto&quot;</span>: <span className="text-emerald-300">&quot;Hacking FLOSS &amp; Composing Code With Prose Since 2009.&quot;</span>,</div>
                    <div><span className="text-cyan-400">&quot;canonicalHub&quot;</span>: <span className="text-cyan-300">&quot;https://tehwiz.com&quot;</span>,</div>
                    <div><span className="text-cyan-400">&quot;licenseEthics&quot;</span>: <span className="text-amber-300">&quot;FLOSS / Local-First / Sovereign&quot;</span></div>
                  </div>
                )}
              </div>

              {/* Interactive Seal Stamp Card */}
              <div
                onClick={handleStampSeal}
                className="group p-3.5 rounded-xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-cyan-950/40 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer flex items-center justify-between"
                title="Click to stamp the TehWiz hallmark seal"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-400 transition-all duration-300 ${
                      sealStamped
                        ? 'scale-110 bg-cyan-400 text-obsidian shadow-lg shadow-cyan-400/50'
                        : 'group-hover:border-cyan-400 group-hover:scale-105'
                    }`}
                  >
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                      The TehWiz Hallmark Stamp
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {sealStamped ? 'HALLMARK SEAL VERIFIED ✓' : 'Click to stamp signature hallmark'}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopySignature();
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-[10px] font-mono text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  {copiedSignature ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Seal</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Universal Colophon Footer */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span className="text-slate-300 font-semibold">
              COPYRIGHT 2026 ISICECAKEOISIS INC.
            </span>
            <span className="hidden sm:inline text-slate-600">//</span>
            <span className="text-cyan-400 font-bold">A TEHWIZ PRODUCTION.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleLowPower}
              className={`hover:text-cyan-400 transition-colors cursor-pointer ${
                lowPower ? 'text-cyan-400 font-bold' : 'text-slate-400'
              }`}
            >
              LOW-POWER: {lowPower ? 'ON' : 'OFF'}
            </button>
            <span className="text-slate-700">//</span>
            <button
              onClick={onReturnToTop}
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Return to 01 / Goomba Story</span>
              <History className="w-3 h-3 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
