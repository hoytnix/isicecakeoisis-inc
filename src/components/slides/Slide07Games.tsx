import React, { useState } from 'react';
import { UtensilsCrossed, Dices, Sparkles, ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { PUBLISHED_GAMES } from '../../data/ecosystemData';
import { AmbientGlow } from '../layout/AmbientGlow';
import { GamesInteractivePreview } from '../diagrams/GamesInteractivePreview';

export const Slide07Games: React.FC = () => {
  const [activeGameId, setActiveGameId] = useState<string>('ramen-nights');

  const activeGame = PUBLISHED_GAMES.find((g) => g.id === activeGameId) || PUBLISHED_GAMES[0];

  return (
    <section id="slide-7" className="snap-section px-4 sm:px-8 relative min-h-screen flex items-center py-16 sm:py-20">
      <AmbientGlow className="top-1/4 right-1/4" />
      <AmbientGlow className="bottom-1/4 left-1/3 opacity-40" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Title, Narrative Lore & Game Selectors */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5">
          {/* Unboxed Metadata Kicker */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>07. Published Mobile Games</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">TehWiz Productions</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            TehWiz Productions — Published Mobile Games
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            TehWiz Productions develops and publishes tactile, original mobile game titles spanning macroeconomics simulation, tactical trick-taking card theory, and mechanical arcade machines.
          </p>

          {/* Game Selection Cards */}
          <div className="space-y-2.5 pt-1">
            {PUBLISHED_GAMES.map((game) => {
              const isActive = game.id === activeGameId;
              return (
                <button
                  key={game.id}
                  onClick={() => setActiveGameId(game.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-slate-900/95 border-cyan-400/80 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                      isActive
                        ? game.id === 'ramen-nights'
                          ? 'bg-amber-500 text-obsidian border-amber-400'
                          : game.id === 'fuck-ur-neighbor'
                          ? 'bg-emerald-500 text-obsidian border-emerald-400'
                          : 'bg-cyan-500 text-obsidian border-cyan-400'
                        : 'bg-slate-800/80 border-slate-700 text-slate-400'
                    }`}
                  >
                    {game.id === 'ramen-nights' && <UtensilsCrossed className="w-5 h-5" />}
                    {game.id === 'fuck-ur-neighbor' && <Dices className="w-5 h-5" />}
                    {game.id === 'bleep-slot' && <Sparkles className="w-5 h-5" />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-white truncate">
                        {game.title}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400 shrink-0">
                        {game.statusTag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                      <span className="truncate">{game.genre}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">
                      {game.shortDescription}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Game Backstory & External Links */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-cyan-400 font-bold uppercase">{activeGame.title}</span>
              <span className="text-slate-400">{activeGame.mechanicsKicker}</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {activeGame.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={activeGame.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-obsidian font-display font-bold text-xs tracking-wide transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <span>{activeGame.primaryLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {activeGame.secondaryUrl && (
                <a
                  href={activeGame.secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono transition-all cursor-pointer"
                >
                  <span>{activeGame.secondaryLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Game Simulator */}
        <div className="lg:col-span-7">
          <GamesInteractivePreview
            activeGameId={activeGameId}
            onSelectGame={(id) => setActiveGameId(id)}
          />
        </div>
      </div>
    </section>
  );
};
