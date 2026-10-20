import React, { useState, useEffect, useRef } from 'react';
import {
  UtensilsCrossed,
  Coins,
  TrendingUp,
  Sparkles,
  ExternalLink,
  RotateCcw,
  Play,
  Volume2,
  VolumeX,
  ShieldCheck,
  Dices,
  Flame,
  Award
} from 'lucide-react';

interface GamesInteractivePreviewProps {
  activeGameId: string;
  onSelectGame: (gameId: string) => void;
}

// District definition for Tokyo University capstone challenge
interface TokyoDistrict {
  id: string;
  name: string;
  jpName: string;
  tier: string;
  multiplier: number;
  bonus: string;
}

const TOKYO_DISTRICTS: TokyoDistrict[] = [
  { id: 'shinjuku', name: 'Shinjuku', jpName: '新宿', tier: 'Alley Cart', multiplier: 1.0, bonus: 'Base Capital' },
  { id: 'shibuya', name: 'Shibuya', jpName: '渋谷', tier: 'Crossing Stall', multiplier: 1.6, bonus: 'High Youth Volume' },
  { id: 'akihabara', name: 'Akihabara', jpName: '秋葉原', tier: 'Tech Hub', multiplier: 2.4, bonus: 'Night Rush Techies' },
  { id: 'ginza', name: 'Ginza', jpName: '銀座', tier: 'Premium Dine', multiplier: 3.8, bonus: 'High-Margin Broth' },
  { id: 'roppongi', name: 'Roppongi', jpName: '六本木', tier: 'Empire HQ', multiplier: 5.5, bonus: 'Global Scaling' }
];

// Card definition for Fuck Ur Neighbor
interface Card {
  id: string;
  suit: '♠' | '♥' | '♦' | '♣';
  suitName: 'Spades' | 'Hearts' | 'Diamonds' | 'Clubs';
  rank: string;
  value: number;
  color: string;
}

const SAMPLE_HAND: Card[] = [
  { id: 'c1', suit: '♠', suitName: 'Spades', rank: 'A', value: 14, color: 'text-cyan-400' },
  { id: 'c2', suit: '♥', suitName: 'Hearts', rank: 'K', value: 13, color: 'text-rose-400' },
  { id: 'c3', suit: '♦', suitName: 'Diamonds', rank: '10', value: 10, color: 'text-amber-400' },
  { id: 'c4', suit: '♣', suitName: 'Clubs', rank: 'J', value: 11, color: 'text-emerald-400' }
];

// Slot symbols for $!#?
const SLOT_SYMBOLS = ['🍒', '🍋', '🔔', '7️⃣', '💎', '⚡'];

export const GamesInteractivePreview: React.FC<GamesInteractivePreviewProps> = ({
  activeGameId,
  onSelectGame
}) => {
  const [audioEnabled, setAudioEnabled] = useState(true);

  // --- Ramen Nights State ---
  const [selectedDistrict, setSelectedDistrict] = useState<TokyoDistrict>(TOKYO_DISTRICTS[0]);
  const [bowlsServed, setBowlsServed] = useState(42);
  const [revenueYen, setRevenueYen] = useState(35700);
  const [bowlPrice, setBowlPrice] = useState(850);
  const [isSimmering, setIsSimmering] = useState(false);
  const [supplyChainOptimized, setSupplyChainOptimized] = useState(true);
  const [clickParticles, setClickParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  // --- Fuck Ur Neighbor State ---
  const [leadSuit, setLeadSuit] = useState<'♠' | '♥' | '♦' | '♣'>('♠');
  const [tableCards, setTableCards] = useState<{ seat: string; card: Card }[]>([
    { seat: 'North', card: { id: 'n', suit: '♠', suitName: 'Spades', rank: '8', value: 8, color: 'text-cyan-400' } },
    { seat: 'East', card: { id: 'e', suit: '♥', suitName: 'Hearts', rank: 'K', value: 13, color: 'text-rose-400' } },
    { seat: 'West', card: { id: 'w', suit: '♠', suitName: 'Spades', rank: '10', value: 10, color: 'text-cyan-400' } }
  ]);
  const [playerPlayedCard, setPlayerPlayedCard] = useState<Card>(SAMPLE_HAND[0]);

  // --- $!#? Slot Machine State ---
  const [reels, setReels] = useState<[string, string, string]>(['7️⃣', '7️⃣', '7️⃣']);
  const [isSpinning, setIsSpinning] = useState(false);
  const [slotCredits, setSlotCredits] = useState(777);
  const [lastWinText, setLastWinText] = useState('JACKPOT 100x (+700 CREDITS)');
  const [hashSeed, setHashSeed] = useState('0x7F4A...D9B1');

  // Web Audio Context synthesizer
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = () => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playSyntheticTone = (freq: number, type: OscillatorType, duration: number, gainVal = 0.08) => {
    if (!audioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignore audio synthesis errors in hermetic sandboxes
    }
  };

  // Sound effects
  const playRamenServeSound = () => {
    playSyntheticTone(523.25, 'triangle', 0.2, 0.08); // C5
    setTimeout(() => playSyntheticTone(659.25, 'triangle', 0.25, 0.07), 80); // E5
  };

  const playCardFlipSound = () => {
    playSyntheticTone(280, 'sine', 0.08, 0.09);
  };

  const playRatchetSound = () => {
    playSyntheticTone(140, 'square', 0.04, 0.04);
  };

  const playJackpotSound = () => {
    playSyntheticTone(587.33, 'triangle', 0.15, 0.09);
    setTimeout(() => playSyntheticTone(783.99, 'triangle', 0.2, 0.09), 120);
    setTimeout(() => playSyntheticTone(987.77, 'triangle', 0.35, 0.1), 240);
  };

  // Serve a bowl of ramen
  const handleServeRamen = (e: React.MouseEvent) => {
    setIsSimmering(true);
    setTimeout(() => setIsSimmering(false), 300);
    playRamenServeSound();

    const earning = Math.round(bowlPrice * selectedDistrict.multiplier * (supplyChainOptimized ? 1.15 : 1.0));
    setBowlsServed((prev) => prev + 1);
    setRevenueYen((prev) => prev + earning);

    // Add particle
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newId = Date.now();
    setClickParticles((prev) => [...prev.slice(-3), { id: newId, x, y }]);
    setTimeout(() => {
      setClickParticles((prev) => prev.filter((p) => p.id !== newId));
    }, 900);
  };

  // Play a card in Fuck Ur Neighbor
  const handlePlayCard = (card: Card) => {
    playCardFlipSound();
    setPlayerPlayedCard(card);
    // If South is leader, set lead suit to this card's suit
    // Here we let player click on any card to lead or follow
    setLeadSuit(card.suit);
  };

  // Spin $!#? mechanical slot machine
  const handleSpinSlot = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setLastWinText('TUMBLING MECHANICAL CYLINDERS...');

    // Ratchet sound loop
    let clicks = 0;
    const clickInterval = setInterval(() => {
      playRatchetSound();
      clicks++;
      if (clicks > 9) clearInterval(clickInterval);
    }, 110);

    // Stop reels progressively
    setTimeout(() => {
      const sym1 = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
      setReels((prev) => [sym1, prev[1], prev[2]]);
      playSyntheticTone(320, 'square', 0.08, 0.05);
    }, 450);

    setTimeout(() => {
      const sym2 = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
      setReels((prev) => [prev[0], sym2, prev[2]]);
      playSyntheticTone(380, 'square', 0.08, 0.05);
    }, 850);

    setTimeout(() => {
      const sym3 = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
      setReels((prev) => {
        const next: [string, string, string] = [prev[0], prev[1], sym3];

        // Evaluate win
        if (next[0] === next[1] && next[1] === next[2]) {
          playJackpotSound();
          if (next[0] === '7️⃣') {
            setLastWinText('JACKPOT! 3x LUCKY 7 (+700 CREDITS)');
            setSlotCredits((c) => c + 700);
          } else if (next[0] === '💎') {
            setLastWinText('MEGA WIN! 3x DIAMOND (+350 CREDITS)');
            setSlotCredits((c) => c + 350);
          } else {
            setLastWinText(`3x ${next[0]} MATCH! (+150 CREDITS)`);
            setSlotCredits((c) => c + 150);
          }
        } else if (next[0] === '🍒' || next[1] === '🍒' || next[2] === '🍒') {
          playSyntheticTone(523, 'sine', 0.15, 0.06);
          setLastWinText('CHERRY HIT (+25 CREDITS)');
          setSlotCredits((c) => c + 25);
        } else {
          setLastWinText('PROBABLY FAIR SPIN · NO PAYOUT');
          setSlotCredits((c) => Math.max(0, c - 10));
        }

        return next;
      });

      // Update cryptographic verification seed
      const randomHex = Math.random().toString(16).substring(2, 6).toUpperCase();
      setHashSeed(`0x${randomHex}...${Math.random().toString(16).substring(2, 6).toUpperCase()}`);
      setIsSpinning(false);
    }, 1300);
  };

  return (
    <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
      {/* Top Bar: Selector Tabs for the 3 Games */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        {/* Game Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 overflow-x-auto no-scrollbar">
          <button
            onClick={() => onSelectGame('ramen-nights')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeGameId === 'ramen-nights'
                ? 'bg-amber-500 text-obsidian font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Ramen Nights</span>
          </button>

          <button
            onClick={() => onSelectGame('fuck-ur-neighbor')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeGameId === 'fuck-ur-neighbor'
                ? 'bg-emerald-500 text-obsidian font-bold shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Dices className="w-3.5 h-3.5" />
            <span>Fuck Ur Neighbor</span>
          </button>

          <button
            onClick={() => onSelectGame('bleep-slot')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeGameId === 'bleep-slot'
                ? 'bg-cyan-500 text-obsidian font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>$!#? Slots</span>
          </button>
        </div>

        {/* Audio Toggle & Tag */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <span className="text-[10px] font-mono text-slate-500">
            {activeGameId === 'ramen-nights' && 'IDLE TYCOON SIMULATOR'}
            {activeGameId === 'fuck-ur-neighbor' && 'TRICK-TAKING TABLE'}
            {activeGameId === 'bleep-slot' && 'WYSIWYG MECHANICAL ENGINE'}
          </span>
          <button
            onClick={() => setAudioEnabled((prev) => !prev)}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
            title={audioEnabled ? 'Mute synthesized sound effects' : 'Enable synthesized sound effects'}
            aria-label="Toggle sound"
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* --- SIMULATOR 1: Ramen Nights & Budget Bites --- */}
      {activeGameId === 'ramen-nights' && (
        <div className="py-4 space-y-4">
          {/* Top Bar Stats */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <span className="text-[9px] font-mono text-slate-400 block uppercase">Bowls Served</span>
              <span className="text-base sm:text-lg font-bold font-mono text-amber-400 tabular-nums">
                {bowlsServed.toLocaleString()}
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <span className="text-[9px] font-mono text-slate-400 block uppercase">Total Revenue</span>
              <span className="text-base sm:text-lg font-bold font-mono text-emerald-400 tabular-nums">
                ¥{revenueYen.toLocaleString()}
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <span className="text-[9px] font-mono text-slate-400 block uppercase">Tokyo District</span>
              <span className="text-xs sm:text-sm font-bold font-display text-white truncate block">
                {selectedDistrict.name} ({selectedDistrict.jpName})
              </span>
            </div>
          </div>

          {/* District Roadmap Selector */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Tokyo University Economics Capstone · 5 Districts</span>
              <span className="text-amber-400">Scaling Multiplier: {selectedDistrict.multiplier}x</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {TOKYO_DISTRICTS.map((district) => {
                const isSelected = selectedDistrict.id === district.id;
                return (
                  <button
                    key={district.id}
                    onClick={() => {
                      setSelectedDistrict(district);
                      playSyntheticTone(400 * district.multiplier, 'sine', 0.1, 0.05);
                    }}
                    className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-950/60 border-amber-500/80 text-amber-300 shadow-lg shadow-amber-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-xs font-bold block">{district.jpName}</span>
                    <span className="text-[9px] font-mono truncate block text-slate-400">{district.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Ramen Cart Bowl Area */}
          <div className="relative p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-obsidian border border-slate-800 flex flex-col items-center justify-center gap-3 overflow-hidden">
            {/* Click particles */}
            {clickParticles.map((pt) => (
              <span
                key={pt.id}
                style={{ left: pt.x, top: pt.y }}
                className="absolute pointer-events-none text-xs font-mono font-bold text-amber-300 animate-float-fade"
              >
                +¥{Math.round(bowlPrice * selectedDistrict.multiplier)}
              </span>
            ))}

            {/* Steaming Ramen Bowl Illustration */}
            <div
              onClick={handleServeRamen}
              className={`relative cursor-pointer transition-transform duration-200 group select-none ${
                isSimmering ? 'scale-95' : 'hover:scale-105'
              }`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-950/80 via-slate-900 to-amber-900/40 border-2 border-amber-500/60 shadow-xl shadow-amber-500/20 flex items-center justify-center relative">
                {/* Steam waves */}
                <div className="absolute -top-3 flex gap-1.5 opacity-80 animate-pulse">
                  <div className="w-1 h-3 bg-amber-200/50 rounded-full blur-[1px]" />
                  <div className="w-1 h-4 bg-amber-100/60 rounded-full blur-[1px]" />
                  <div className="w-1 h-3 bg-amber-200/50 rounded-full blur-[1px]" />
                </div>
                {/* Ramen contents */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-amber-900/50 border border-amber-600/50 flex flex-col items-center justify-center p-1 relative">
                  <span className="text-3xl sm:text-4xl filter drop-shadow">🍜</span>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] font-mono text-amber-400 font-bold tracking-wide flex items-center justify-center gap-1">
                  <UtensilsCrossed className="w-3 h-3" /> CLICK TO SIMMER &amp; SERVE
                </span>
                <span className="text-[9px] text-slate-400 block mt-0.5">
                  ¥{Math.round(bowlPrice * selectedDistrict.multiplier)} per bowl
                </span>
              </div>
            </div>

            {/* Economics Micro-Pricing Slider & Supply Chain */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400">Micro-Pricing Elasticity</span>
                  <span className="text-amber-400 font-bold">¥{bowlPrice} / bowl</span>
                </div>
                <input
                  type="range"
                  min="600"
                  max="1600"
                  step="50"
                  value={bowlPrice}
                  onChange={(e) => setBowlPrice(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <span className="text-[9px] text-slate-500 block">
                  Higher prices increase margin but shift Tokyo demand curve
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] font-mono text-slate-300 block font-semibold truncate">
                    Supply Chain Logistics
                  </span>
                  <span className="text-[9px] text-slate-500 block truncate">
                    {supplyChainOptimized ? 'Economies of scale (+15% profit)' : 'Raw local cart purchasing'}
                  </span>
                </div>
                <button
                  onClick={() => setSupplyChainOptimized((p) => !p)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold cursor-pointer transition-colors ${
                    supplyChainOptimized
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {supplyChainOptimized ? 'ACTIVE' : 'UPGRADE'}
                </button>
              </div>
            </div>
          </div>

          {/* Launch Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            <a
              href="https://ramen.tehwiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-obsidian font-display font-bold text-xs tracking-wide transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <span>Play Ramen Nights (BETA)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://tehwiz.itch.io/ramen-nights-and-budget-bites"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-950/40 text-slate-200 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40 text-xs font-mono transition-all cursor-pointer"
            >
              <span>Release Candidate on Itch.io</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* --- SIMULATOR 2: Fuck Ur Neighbor Card Table --- */}
      {activeGameId === 'fuck-ur-neighbor' && (
        <div className="py-4 space-y-4">
          {/* Rule Banner */}
          <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">{leadSuit}</span>
              <div>
                <span className="text-xs font-bold text-emerald-300 font-display block">
                  Whichever Suit Leads is Trump!
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Current Trump Suit: <strong className="text-white">{leadSuit}</strong> · Dynamic Trick Evaluation
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-800">
              <ShieldCheck className="w-3 h-3" />
              <span>TRICKS COLLECTED: 3/5</span>
            </div>
          </div>

          {/* Felt Game Table */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#09291b] border-2 border-emerald-800/80 shadow-inner relative flex flex-col items-center justify-between min-h-[220px]">
            {/* North Bot */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-mono text-emerald-300/80 uppercase">North (AI Opponent)</span>
              <div className="w-10 h-14 rounded-lg bg-slate-900 border border-emerald-700/60 flex flex-col items-center justify-center shadow-md">
                <span className="text-[10px] font-mono text-cyan-400 font-bold">8</span>
                <span className="text-sm">♠</span>
              </div>
            </div>

            {/* Center Battle Zone (West & East) */}
            <div className="w-full flex items-center justify-between px-4 sm:px-8">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[9px] font-mono text-emerald-300/80 uppercase">West</span>
                <div className="w-10 h-14 rounded-lg bg-slate-900 border border-emerald-700/60 flex flex-col items-center justify-center shadow-md">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">10</span>
                  <span className="text-sm">♠</span>
                </div>
              </div>

              {/* Dynamic Center Trump Orb */}
              <div className="p-3 rounded-full bg-emerald-950/80 border-2 border-emerald-500/60 flex flex-col items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-2xl text-emerald-300 animate-pulse">{leadSuit}</span>
                <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase mt-0.5">TRUMP</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-[9px] font-mono text-emerald-300/80 uppercase">East</span>
                <div className="w-10 h-14 rounded-lg bg-slate-900 border border-emerald-700/60 flex flex-col items-center justify-center shadow-md">
                  <span className="text-[10px] font-mono text-rose-400 font-bold">K</span>
                  <span className="text-sm text-rose-400">♥</span>
                </div>
              </div>
            </div>

            {/* South (Player Hand) */}
            <div className="w-full mt-2 flex flex-col items-center gap-1.5">
              <span className="text-[9px] font-mono text-emerald-300 font-bold uppercase flex items-center gap-1">
                <span>Your Hand (Click to Lead / Follow)</span>
              </span>
              <div className="flex items-center gap-2">
                {SAMPLE_HAND.map((card) => {
                  const isSelected = playerPlayedCard.id === card.id;
                  return (
                    <button
                      key={card.id}
                      onClick={() => handlePlayCard(card)}
                      className={`w-11 sm:w-12 h-16 sm:h-18 rounded-xl bg-slate-900 border-2 flex flex-col items-center justify-between p-1.5 shadow-lg transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-400 -translate-y-2 shadow-emerald-400/40 bg-slate-800'
                          : 'border-slate-700 hover:border-emerald-600 hover:-translate-y-1'
                      }`}
                    >
                      <div className="w-full flex justify-between items-center text-[10px] font-mono font-bold">
                        <span className={card.color}>{card.rank}</span>
                        <span className={card.color}>{card.suit}</span>
                      </div>
                      <span className={`text-xl ${card.color}`}>{card.suit}</span>
                      <div className="w-full flex justify-end text-[8px] font-mono text-slate-500">
                        {card.rank}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Outcome Readout & Launch */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-bold">Trick Status: </span>
              {playerPlayedCard.suit === leadSuit ? (
                <span>
                  Followed Trump {leadSuit} with {playerPlayedCard.rank}. South currently winning trick!
                </span>
              ) : (
                <span>
                  Off-suit played ({playerPlayedCard.rank}{playerPlayedCard.suit}). Trump {leadSuit} takes trick.
                </span>
              )}
            </div>
            <a
              href="https://fun.tehwiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian font-display font-bold text-xs tracking-wide transition-all shadow-md shadow-emerald-500/20 shrink-0 cursor-pointer"
            >
              <span>Play FUN Online (fun.tehwiz.com)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* --- SIMULATOR 3: $!#? Mechanical Slot Machine --- */}
      {activeGameId === 'bleep-slot' && (
        <div className="py-4 space-y-4">
          {/* Slot Machine Housing */}
          <div className="p-5 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-obsidian border-2 border-cyan-800/80 shadow-2xl relative">
            {/* Top Marquee */}
            <div className="flex items-center justify-between border-b border-cyan-900/60 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold font-mono text-cyan-400 tracking-wider">
                  $!#?
                </span>
                <span className="text-[10px] font-mono text-slate-400 border-l border-slate-800 pl-2">
                  MECHANICAL SLOT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> PROBABLY FAIR
                </span>
              </div>
            </div>

            {/* Three Mechanical Tumbler Reels */}
            <div className="grid grid-cols-3 gap-3 p-3 sm:p-4 rounded-2xl bg-black/80 border border-slate-800 shadow-inner">
              {reels.map((symbol, idx) => (
                <div
                  key={idx}
                  className="h-24 sm:h-28 rounded-xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-2 border-slate-700/80 flex flex-col items-center justify-center relative overflow-hidden shadow-inner"
                >
                  {/* Glass refraction reflection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none" />
                  {/* Center payline indicator */}
                  <div className="absolute inset-x-0 h-0.5 bg-cyan-500/40 pointer-events-none" />
                  <span
                    className={`text-4xl sm:text-5xl transition-transform duration-150 filter drop-shadow-lg ${
                      isSpinning ? 'animate-bounce blur-[0.5px]' : 'scale-100'
                    }`}
                  >
                    {symbol}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 mt-1 uppercase">Reel {idx + 1}</span>
                </div>
              ))}
            </div>

            {/* Payout Status & Cryptographic Seed */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 px-2">
              <div className="text-center sm:text-left">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Machine Verdict</span>
                <span className="text-xs font-mono font-bold text-cyan-300">{lastWinText}</span>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Credits Balance</span>
                <span className="text-sm sm:text-base font-mono font-bold text-amber-400 tabular-nums">
                  {slotCredits.toLocaleString()} PTS
                </span>
              </div>
            </div>

            {/* Controls: Pull Lever / Spin */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                <span>RNG Seed:</span>
                <code className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                  {hashSeed}
                </code>
              </div>

              <div className="w-full sm:w-auto flex items-center gap-2">
                <button
                  onClick={handleSpinSlot}
                  disabled={isSpinning}
                  className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                    isSpinning
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-obsidian shadow-cyan-500/20 active:translate-y-0.5'
                  }`}
                >
                  <RotateCcw className={`w-3.5 h-3.5 ${isSpinning ? 'animate-spin' : ''}`} />
                  <span>{isSpinning ? 'PULLING...' : 'PULL LEVER / SPIN'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Launch Link */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-xs text-slate-400">
              Live WYSIWYG Mechanical Slot Machine on GitHub Pages
            </span>
            <a
              href="https://hoytnix.github.io/Bleep/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-cyan-950/60 text-cyan-300 border border-slate-700 hover:border-cyan-400/60 text-xs font-mono transition-all cursor-pointer"
            >
              <span>Launch $!#? (hoytnix.github.io/Bleep/)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Bottom Footer Details */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>TehWiz Productions · Mobile Game Studio</span>
        <span>All 3 Titles Free to Play</span>
      </div>
    </div>
  );
};
