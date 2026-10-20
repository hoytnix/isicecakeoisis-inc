import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ShieldCheck,
  Lock,
  Unlock,
  Phone,
  PhoneCall,
  Mail,
  Send,
  Copy,
  Check,
  ExternalLink,
  Github,
  Linkedin,
  Youtube,
  Radio,
  Terminal,
  Cpu,
  Sparkles,
  AlertTriangle,
  Volume2,
  VolumeX,
  Maximize2,
  Eye,
  EyeOff,
  RefreshCw,
  ArrowUpRight,
  Activity,
  ChevronRight,
  MessageSquare,
  HeartHandshake
} from 'lucide-react';
import { AmbientGlow } from '../layout/AmbientGlow';

interface Slide08InvestorProps {
  onOpenInvestor: () => void;
}

// Obfuscated payload tokens (reversed base64 ciphers matching InvestorModal)
const CIPHERS = {
  // '+1 (231) 333 - 4338' -> reversed '8334 - 333 )132( 1+' -> base64
  phoneDisplay: 'ODMzNCAtIDMzMyApMTMyKCAxKw==',
  // '+12313334338' -> reversed '83343331321+' -> base64
  phoneTel: 'ODMzNDMzMzEzMjEr',
  // 'cakeri.paper@gmail.com' -> reversed 'moc.liamg@repap.irekac' -> base64
  email: 'bW9jLmxpYW1nQHJlcGFwLmlyZWthYw=='
};

const decryptCipher = (token: string): string => {
  try {
    const decoded = window.atob(token);
    return decoded.split('').reverse().join('');
  } catch {
    return '';
  }
};

const SOCIAL_CHANNELS = [
  {
    name: 'LinkedIn',
    handle: 'economyofdreams',
    role: 'Founder & Systems Architect',
    url: 'https://linkedin.com/in/economyofdreams',
    icon: Linkedin,
    color: 'hover:border-blue-400 hover:text-blue-400 group-hover:text-blue-400',
    badge: 'EXECUTIVE PROFILE'
  },
  {
    name: 'GitHub',
    handle: '@hoytnix',
    role: 'B2A Architecture & Code Repos',
    url: 'https://github.com/hoytnix',
    icon: Github,
    color: 'hover:border-cyan-400 hover:text-cyan-400 group-hover:text-cyan-400',
    badge: 'CORE COMMITS'
  },
  {
    name: 'YouTube',
    handle: '@MichaelHoyt',
    role: 'Project #NBA & Video Canon',
    url: 'https://youtube.com/@MichaelHoyt',
    icon: Youtube,
    color: 'hover:border-rose-400 hover:text-rose-400 group-hover:text-rose-400',
    badge: 'VIDEO CANON'
  },
  {
    name: 'TehWiz Agency',
    handle: 'tehwiz.com',
    role: 'Production Agency & Media Hub',
    url: 'https://tehwiz.com',
    icon: Radio,
    color: 'hover:border-amber-400 hover:text-amber-400 group-hover:text-amber-400',
    badge: 'OPERATING HUB'
  }
];

const STRATEGIC_SCOPES = [
  {
    id: 'b2a-mesh',
    badge: 'B2A Architecture',
    label: 'B2A Agent Mesh & MCP Tools',
    desc: 'Deterministic agent discovery, machine commons (/llms.txt), and enterprise MCP server tooling.'
  },
  {
    id: 'yuli-sdk',
    badge: 'AI Character SDK',
    label: 'Yuli AI Character SDK',
    desc: 'Commercial on-device personality engine with Qwen2.5-0.5B and Gemma 4 E2B architectures.'
  },
  {
    id: 'aevloc-nfc',
    badge: 'Hardware & SaaS',
    label: 'Aevloc NFC Review Stands',
    desc: 'Encrypted NTAG215 hardware stand rollout and unlimited multi-location review infrastructure.'
  },
  {
    id: 'purple-canary',
    badge: 'Research & Lab',
    label: 'Purple Canary Harm Reduction',
    desc: 'Paper chromatography optical scanner app and community harm-reduction field guide.'
  },
  {
    id: 'tehwiz-games',
    badge: 'Mobile Games',
    label: 'TehWiz Mobile Games Syndicate',
    desc: 'Mobile game co-publishing & development (Ramen Nights, Fuck Ur Neighbor, $!#? slot engine).'
  },
  {
    id: 'accredited-equity',
    badge: 'Partnership & Capital',
    label: 'Investment & Partnerships',
    desc: 'Direct discussions with accredited investors, angel syndicates, and strategic partners.'
  }
];

const HEX_CHARS = '0123456789ABCDEF!#$&*?';

export const Slide08Investor: React.FC<Slide08InvestorProps> = ({ onOpenInvestor }) => {
  // Sound system state
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Cipher decryption states
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [isPhoneScrambling, setIsPhoneScrambling] = useState(false);
  const [isEmailScrambling, setIsEmailScrambling] = useState(false);
  const [scrambledPhoneText, setScrambledPhoneText] = useState('+1 (231) ••• - ••••');
  const [scrambledEmailText, setScrambledEmailText] = useState('c•••••••••••••@gmail.com');

  // Copy feedback
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Inquiry message state
  const [selectedScope, setSelectedScope] = useState<string>('b2a-mesh');
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [senderNotes, setSenderNotes] = useState('');

  // Audio helper
  const playSyntheticTone = (freq: number, type: OscillatorType = 'sine', duration: number = 0.08, volume: number = 0.05) => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignore sandbox audio errors
    }
  };

  const playGlitchSound = () => {
    playSyntheticTone(700, 'sawtooth', 0.03, 0.03);
    setTimeout(() => playSyntheticTone(450, 'square', 0.04, 0.03), 30);
  };

  const playSuccessSound = () => {
    playSyntheticTone(523.25, 'triangle', 0.1, 0.06); // C5
    setTimeout(() => playSyntheticTone(659.25, 'triangle', 0.12, 0.06), 70); // E5
    setTimeout(() => playSyntheticTone(1046.5, 'triangle', 0.2, 0.07), 140); // C6
  };

  // Interactive unscramble animation for phone
  const handleRevealPhone = useCallback(() => {
    if (isPhoneRevealed || isPhoneScrambling) return;
    setIsPhoneScrambling(true);
    const target = decryptCipher(CIPHERS.phoneDisplay);
    let iterations = 0;
    const maxIterations = 14;

    const interval = setInterval(() => {
      iterations++;
      playGlitchSound();
      const scrambled = target
        .split('')
        .map((char, index) => {
          if (char === ' ' || char === '(' || char === ')' || char === '-' || char === '+') return char;
          if (iterations > maxIterations * (index / target.length)) return char;
          return HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
        })
        .join('');

      setScrambledPhoneText(scrambled);

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setScrambledPhoneText(target);
        setIsPhoneRevealed(true);
        setIsPhoneScrambling(false);
        playSuccessSound();
      }
    }, 35);
  }, [isPhoneRevealed, isPhoneScrambling, soundEnabled]);

  // Interactive unscramble animation for email
  const handleRevealEmail = useCallback(() => {
    if (isEmailRevealed || isEmailScrambling) return;
    setIsEmailScrambling(true);
    const target = decryptCipher(CIPHERS.email);
    let iterations = 0;
    const maxIterations = 16;

    const interval = setInterval(() => {
      iterations++;
      playGlitchSound();
      const scrambled = target
        .split('')
        .map((char, index) => {
          if (char === '@' || char === '.') return char;
          if (iterations > maxIterations * (index / target.length)) return char;
          return HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
        })
        .join('');

      setScrambledEmailText(scrambled);

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setScrambledEmailText(target);
        setIsEmailRevealed(true);
        setIsEmailScrambling(false);
        playSuccessSound();
      }
    }, 30);
  }, [isEmailRevealed, isEmailScrambling, soundEnabled]);

  // Copy handler with feedback
  const handleCopy = useCallback(
    async (text: string, type: 'phone' | 'email') => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedField(type);
        playSuccessSound();
        setTimeout(() => setCopiedField(null), 2200);
      } catch {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopiedField(type);
        playSuccessSound();
        setTimeout(() => setCopiedField(null), 2200);
      }
    },
    [soundEnabled]
  );

  // Lock back
  const handleLockPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPhoneRevealed(false);
    setScrambledPhoneText('+1 (231) ••• - ••••');
    playSyntheticTone(200, 'sawtooth', 0.08, 0.04);
  };

  const handleLockEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEmailRevealed(false);
    setScrambledEmailText('c•••••••••••••@gmail.com');
    playSyntheticTone(200, 'sawtooth', 0.08, 0.04);
  };

  const activeScopeObj = STRATEGIC_SCOPES.find((s) => s.id === selectedScope) || STRATEGIC_SCOPES[0];
  const realEmail = isEmailRevealed ? decryptCipher(CIPHERS.email) : 'cakeri.paper@gmail.com';
  const realPhoneTel = isPhoneRevealed ? decryptCipher(CIPHERS.phoneTel) : '+12313334338';

  // Compose friendly mailto URL
  const emailSubject = `[ISICECAKEOISIS] Inquiry: ${activeScopeObj.label}${senderName.trim() ? ` — from ${senderName.trim()}` : ''}`;
  const emailBody = [
    `Hi Michael,`,
    ``,
    `I'm reaching out regarding: ${activeScopeObj.label}`,
    ``,
    senderNotes.trim() ? `Note / Details:\n${senderNotes.trim()}\n` : null,
    `Best regards,`,
    senderName.trim() || 'A fellow builder / partner',
    senderContact.trim() ? `Contact: ${senderContact.trim()}` : null
  ]
    .filter(Boolean)
    .join('\n');

  const prefilledMailto = `mailto:cakeri.paper@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Copy draft to clipboard for webmail users
  const handleCopyDraft = async () => {
    const fullDraft = `To: cakeri.paper@gmail.com\nSubject: ${emailSubject}\n\n${emailBody}`;
    try {
      await navigator.clipboard.writeText(fullDraft);
      setCopiedDraft(true);
      playSuccessSound();
      setTimeout(() => setCopiedDraft(false), 2200);
    } catch {
      const el = document.createElement('textarea');
      el.value = fullDraft;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedDraft(true);
      playSuccessSound();
      setTimeout(() => setCopiedDraft(false), 2200);
    }
  };

  return (
    <section id="slide-8" className="snap-section px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center py-14 sm:py-18">
      {/* Background ambient lighting */}
      <AmbientGlow className="top-1/4 left-1/4 opacity-60" />
      <AmbientGlow className="bottom-1/3 right-1/4 opacity-70" />

      <div className="max-w-7xl w-full mx-auto relative z-10 space-y-5 sm:space-y-6">
        {/* TOP COMMAND HUD BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span className="font-bold tracking-wider">08 // B2A EXECUTIVE COMMAND &amp; INQUIRY TERMINAL</span>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
              <Activity className="w-3 h-3 animate-pulse" />
              <span>DIRECT UPLINK ACTIVE</span>
            </div>
          </div>

          {/* Right HUD Controls */}
          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) {
                  setTimeout(() => playSyntheticTone(520, 'sine', 0.1, 0.05), 50);
                }
              }}
              className={`px-2.5 py-1 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-all cursor-pointer ${
                soundEnabled
                  ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300 shadow-sm shadow-cyan-500/20'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Toggle Cybernetic Audio Effects"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[11px]">{soundEnabled ? 'AUDIO: ON' : 'AUDIO: OFF'}</span>
            </button>

            {/* Launch Floating Modal Button */}
            <button
              onClick={onOpenInvestor}
              className="px-2.5 py-1 rounded-xl text-xs font-mono flex items-center gap-1.5 bg-slate-900/80 hover:bg-cyan-950/70 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer"
              title="Open floating windowed dialog"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">POPOUT MODAL</span>
            </button>
          </div>
        </div>

        {/* HEADLINE & CORE DIRECTIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
          <div className="lg:col-span-7 space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              Direct Executive Access to the B2A Architect.
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Connect directly with Founder &amp; Systems Architect <span className="text-cyan-400 font-semibold">Michael Scott Hoyt (@hoytnix)</span> for sovereign equity allocation, B2A Agent Mesh licensing, on-device Yuli AI SDK integration, and enterprise Aevloc NFC deployments.
            </p>
          </div>

          {/* Quick Security Telemetry Badges */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-0.5">
              <span className="text-slate-500 uppercase">ENCRYPTION PROTOCOL</span>
              <div className="text-cyan-300 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>4096-BIT RSA / ED25519</span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-0.5">
              <span className="text-slate-500 uppercase">RESPONSE CLEARANCE</span>
              <div className="text-amber-300 font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                <span>DIRECT FOUNDER LINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* MASTER COMMAND DECK GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* ======================================================== */}
          {/* LEFT COLUMN: TACTICAL DIRECT REVEAL & NEURAL CHANNELS */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {/* The Cybernetic Decryption Box */}
            <div className="glass-panel p-4 sm:p-5 rounded-3xl border border-cyan-500/30 space-y-4 shadow-xl shadow-cyan-950/20 relative overflow-hidden">
              {/* Scanline beam effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white tracking-tight">
                      Decrypted Communications Gateway
                    </h3>
                    <p className="text-[10px] font-mono text-cyan-400/80">
                      SECURE EXECUTIVE TELEPHONE &amp; ENDPOINT RELAY
                    </p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-500">PEER 01</div>
              </div>

              {/* Direct Phone Terminal */}
              <div
                onClick={handleRevealPhone}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group relative ${
                  isPhoneRevealed
                    ? 'bg-slate-900/95 border-cyan-400/60 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/90 border-slate-800 hover:border-cyan-500/50 cursor-pointer hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isPhoneRevealed
                        ? 'bg-cyan-500 text-obsidian shadow-md shadow-cyan-500/30'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40'
                    }`}
                  >
                    {isPhoneRevealed ? <PhoneCall className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">
                        DIRECT PHONE LINE
                      </span>
                      {isPhoneRevealed ? (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
                          <Unlock className="w-2.5 h-2.5" /> DECRYPTED
                        </span>
                      ) : isPhoneScrambling ? (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-cyan-300 bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-800/50 animate-pulse">
                          <RefreshCw className="w-2.5 h-2.5 animate-spin" /> UNSCRAMBLING...
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-amber-400 bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-800/40 animate-pulse">
                          <Lock className="w-2.5 h-2.5" /> TAP TO DECRYPT
                        </span>
                      )}
                    </div>

                    <div className="mt-1 font-mono text-sm sm:text-base font-semibold tracking-wide">
                      {isPhoneRevealed ? (
                        <span className="text-white select-all">{scrambledPhoneText}</span>
                      ) : (
                        <span className="text-slate-400 font-mono tracking-widest group-hover:text-cyan-300 transition-colors">
                          {scrambledPhoneText}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone Actions */}
                <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                  {isPhoneRevealed ? (
                    <>
                      <a
                        href={`tel:${realPhoneTel}`}
                        className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-obsidian text-xs font-display font-bold flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                        title="Call Direct Line Now"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(decryptCipher(CIPHERS.phoneDisplay), 'phone');
                        }}
                        className="p-1.5 rounded-xl bg-slate-800 hover:bg-cyan-950/70 hover:text-cyan-300 text-slate-300 border border-slate-700 hover:border-cyan-500/40 text-xs transition-all cursor-pointer"
                        title="Copy Phone Number"
                        aria-label="Copy Phone"
                      >
                        {copiedField === 'phone' ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={handleLockPhone}
                        className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs transition-all cursor-pointer"
                        title="Lock / Obfuscate Phone"
                        aria-label="Lock Phone"
                      >
                        <EyeOff className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={handleRevealPhone}
                      disabled={isPhoneScrambling}
                      className="w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-slate-900 group-hover:bg-cyan-500 group-hover:text-obsidian text-cyan-400 border border-slate-800 group-hover:border-cyan-400 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Decrypt Line</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Direct Email Terminal */}
              <div
                onClick={handleRevealEmail}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group relative ${
                  isEmailRevealed
                    ? 'bg-slate-900/95 border-cyan-400/60 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/90 border-slate-800 hover:border-cyan-500/50 cursor-pointer hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isEmailRevealed
                        ? 'bg-cyan-500 text-obsidian shadow-md shadow-cyan-500/30'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/40'
                    }`}
                  >
                    {isEmailRevealed ? <Send className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">
                        DIRECT EMAIL ENDPOINT
                      </span>
                      {isEmailRevealed ? (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
                          <Unlock className="w-2.5 h-2.5" /> DECRYPTED
                        </span>
                      ) : isEmailScrambling ? (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-cyan-300 bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-800/50 animate-pulse">
                          <RefreshCw className="w-2.5 h-2.5 animate-spin" /> UNSCRAMBLING...
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-amber-400 bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-800/40 animate-pulse">
                          <Lock className="w-2.5 h-2.5" /> TAP TO DECRYPT
                        </span>
                      )}
                    </div>

                    <div className="mt-1 font-mono text-sm sm:text-base font-semibold tracking-wide">
                      {isEmailRevealed ? (
                        <span className="text-white select-all">{scrambledEmailText}</span>
                      ) : (
                        <span className="text-slate-400 font-mono tracking-widest group-hover:text-cyan-300 transition-colors">
                          {scrambledEmailText}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email Actions */}
                <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                  {isEmailRevealed ? (
                    <>
                      <a
                        href={`mailto:${realEmail}`}
                        className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-obsidian text-xs font-display font-bold flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                        title="Send Direct Email"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Email</span>
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(decryptCipher(CIPHERS.email), 'email');
                        }}
                        className="p-1.5 rounded-xl bg-slate-800 hover:bg-cyan-950/70 hover:text-cyan-300 text-slate-300 border border-slate-700 hover:border-cyan-500/40 text-xs transition-all cursor-pointer"
                        title="Copy Email Address"
                        aria-label="Copy Email"
                      >
                        {copiedField === 'email' ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={handleLockEmail}
                        className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs transition-all cursor-pointer"
                        title="Lock / Obfuscate Email"
                        aria-label="Lock Email"
                      >
                        <EyeOff className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={handleRevealEmail}
                      disabled={isEmailScrambling}
                      className="w-full sm:w-auto px-3.5 py-1.5 rounded-xl bg-slate-900 group-hover:bg-cyan-500 group-hover:text-obsidian text-cyan-400 border border-slate-800 group-hover:border-cyan-400 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Decrypt Line</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Neural Channel Relay Grid (LinkedIn, GitHub, YouTube, TehWiz) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>EXECUTIVE MEDIA &amp; SYNDICATE CHANNELS</span>
                </span>
                <span className="text-slate-500">VERIFIED NODES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SOCIAL_CHANNELS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all flex items-center justify-between group ${item.color} hover:bg-slate-900 hover:shadow-lg`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-inherit shrink-0 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-display font-bold text-xs text-white group-hover:text-inherit truncate">
                            {item.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 truncate">
                            {item.handle} <span className="text-slate-600">·</span> {item.badge}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-inherit shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Classified Securities Compliance Banner */}
            <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-900/40 text-amber-200/80 text-[10px] font-mono leading-relaxed space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-400 text-[11px]">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>SECURITIES &amp; REGULATORY COMPLIANCE NOTICE</span>
              </div>
              <p>
                Nothing on this portal constitutes an offer to sell or a solicitation of an offer to buy securities. Direct strategic dialogues are conducted exclusively with qualified accredited investors and institutional counterparties under applicable statutory exemptions.
              </p>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: FRIENDLY INQUIRY & CONTACT SECTION          */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-panel p-5 sm:p-6 rounded-3xl border border-cyan-500/30 space-y-5 shadow-xl shadow-cyan-950/20">
            {/* Header of Contact Section */}
            <div className="space-y-1.5 border-b border-slate-800 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-medium">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>LET'S CONNECT</span>
                </span>
                <span className="text-[11px] font-sans text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open for Inquiries</span>
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                Start a Conversation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you're interested in on-device AI, NFC hardware, open-source knowledge tools, or investing — we would love to hear from you.
              </p>
            </div>

            {/* Topic Selectors */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                What would you like to discuss?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {STRATEGIC_SCOPES.map((scope) => {
                  const isSelected = scope.id === selectedScope;
                  return (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => {
                        setSelectedScope(scope.id);
                        playSyntheticTone(440, 'triangle', 0.06, 0.03);
                      }}
                      className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400/50'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-[10px] font-mono font-medium text-cyan-400">{scope.badge}</div>
                      <div className="text-xs font-display font-semibold truncate leading-tight mt-1 text-slate-100">
                        {scope.label}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Scope Description Box */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
                <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{activeScopeObj.desc}</span>
              </div>
            </div>

            {/* Friendly Message Inputs */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Chen"
                    className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3 py-2 text-xs font-sans text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Your Email or Phone
                  </label>
                  <input
                    type="text"
                    value={senderContact}
                    onChange={(e) => setSenderContact(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3 py-2 text-xs font-sans text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Your Message (Optional)
                </label>
                <textarea
                  rows={2}
                  value={senderNotes}
                  onChange={(e) => setSenderNotes(e.target.value)}
                  placeholder="Share a few details about what you're working on, ideas you have, or how we might collaborate..."
                  className="w-full bg-slate-950/90 border border-slate-800 rounded-xl p-3 text-xs font-sans text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Action Buttons: Only "Send Email" and friendly "Copy Draft" */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <a
                  href={prefilledMailto}
                  className="w-full sm:flex-1 bg-cyan-500 hover:bg-cyan-400 text-obsidian px-5 py-3 rounded-xl font-display font-bold text-xs tracking-wide transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer text-center"
                  title="Open pre-filled email in your mail client"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                  title="Copy email text to clipboard"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Draft Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Friendly Response Assurance Card */}
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-1.5">
              <div className="flex items-center justify-between text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Personal Reply Guaranteed</span>
                </span>
                <span className="text-[11px] font-mono text-cyan-400">cakeri.paper@gmail.com</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Your email goes directly to founder <span className="text-white font-medium">Michael Scott Hoyt (@hoytnix)</span>. No chatbots, automated spam filters, or sales reps. We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

