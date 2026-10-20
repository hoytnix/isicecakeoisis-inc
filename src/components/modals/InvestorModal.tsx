import React, { useState, useCallback } from 'react';
import {
  X,
  Phone,
  PhoneCall,
  Mail,
  Send,
  Lock,
  Unlock,
  ShieldCheck,
  Copy,
  Check,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Radio,
  Eye,
  EyeOff
} from 'lucide-react';

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Obfuscated payload tokens (reversed base64 ciphers)
// Prevents static string scrapers, headless harvesters, and email spiders
const CIPHERS = {
  // '+1 (231) 333 - 4338' -> reversed '8334 - 333 )132( 1+' -> base64
  phoneDisplay: 'ODMzNCAtIDMzMyApMTMyKCAxKw==',
  // '+12313334338' -> reversed '83343331321+' -> base64
  phoneTel: 'ODMzNDMzMzEzMjEr',
  // 'cakeri.paper@gmail.com' -> reversed 'moc.liamg@repap.irekac' -> base64
  email: 'bW9jLmxpYW1nQHJlcGFwLmlyZWthYw=='
};

// Client-side deobfuscation function executed only upon user interaction
const decryptCipher = (token: string): string => {
  try {
    const decoded = window.atob(token);
    return decoded.split('').reverse().join('');
  } catch {
    return '';
  }
};

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    handle: 'economyofdreams',
    role: 'Founder & Systems Architect',
    url: 'https://linkedin.com/in/economyofdreams',
    icon: Linkedin,
    color: 'hover:border-blue-400/60 hover:text-blue-400'
  },
  {
    name: 'YouTube',
    handle: '@MichaelHoyt',
    role: 'Project #NBA & Video Canon',
    url: 'https://youtube.com/@MichaelHoyt',
    icon: Youtube,
    color: 'hover:border-rose-400/60 hover:text-rose-400'
  },
  {
    name: 'GitHub',
    handle: '@hoytnix',
    role: 'Open-Source & B2A Code',
    url: 'https://github.com/hoytnix',
    icon: Github,
    color: 'hover:border-cyan-400/60 hover:text-cyan-400'
  },
  {
    name: 'TehWiz Productions',
    handle: 'tehwiz.com',
    role: 'Public Agency & Media Hub',
    url: 'https://tehwiz.com',
    icon: Radio,
    color: 'hover:border-amber-400/60 hover:text-amber-400'
  }
];

export const InvestorModal: React.FC<InvestorModalProps> = ({ isOpen, onClose }) => {
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);

  const phoneValue = isPhoneRevealed ? decryptCipher(CIPHERS.phoneDisplay) : '';
  const phoneTelValue = isPhoneRevealed ? decryptCipher(CIPHERS.phoneTel) : '';
  const emailValue = isEmailRevealed ? decryptCipher(CIPHERS.email) : '';

  const handleCopy = useCallback(async (text: string, type: 'phone' | 'email', e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => {
        setCopiedType((curr) => (curr === type ? null : curr));
      }, 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedType(type);
      setTimeout(() => {
        setCopiedType((curr) => (curr === type ? null : curr));
      }, 2000);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 bg-obsidian/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto transition-all"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-panel w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/30 p-5 sm:p-7 space-y-6 relative my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white glass-panel p-2 rounded-xl hover:border-cyan-400/50 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 transition-all"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-[11px] font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>DIRECT EXECUTIVE INQUIRY</span>
          </div>
          <h3 id="inquiry-modal-title" className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
            Direct Contact &amp; Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Direct executive line to Founder &amp; Systems Architect Michael Scott Hoyt (<span className="text-cyan-400">@hoytnix</span>) for accredited investments, B2A licensing, and strategic partnerships.
          </p>
        </div>

        {/* Protected Direct Endpoints (Phone & Email) */}
        <div className="space-y-3">
          {/* Phone Number Item */}
          <div
            onClick={() => {
              if (!isPhoneRevealed) setIsPhoneRevealed(true);
            }}
            className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group ${
              isPhoneRevealed
                ? 'bg-slate-900/90 border-cyan-400/50 shadow-lg shadow-cyan-500/10'
                : 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/50 cursor-pointer hover:bg-slate-900/60'
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
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
                      <Unlock className="w-2.5 h-2.5" /> DECRYPTED
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-800/40 animate-pulse">
                      <Lock className="w-2.5 h-2.5" /> TAP TO REVEAL
                    </span>
                  )}
                </div>

                <div className="mt-1 font-mono text-sm sm:text-base font-semibold tracking-wide">
                  {isPhoneRevealed ? (
                    <span className="text-white select-all">{phoneValue}</span>
                  ) : (
                    <span className="text-slate-500 font-mono tracking-widest group-hover:text-cyan-300 transition-colors">
                      +1 (231) ••• - ••••
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
                    href={`tel:${phoneTelValue}`}
                    className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-obsidian text-xs font-display font-bold flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                    title="Call Now"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                  <button
                    onClick={(e) => handleCopy(phoneValue, 'phone', e)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-cyan-950/70 hover:text-cyan-300 text-slate-300 border border-slate-700 hover:border-cyan-500/40 text-xs transition-all cursor-pointer"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPhoneRevealed(false);
                    }}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs transition-all cursor-pointer"
                    title="Hide / Lock Phone"
                    aria-label="Lock Phone"
                  >
                    <EyeOff className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPhoneRevealed(true)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 group-hover:bg-cyan-500 group-hover:text-obsidian text-cyan-400 border border-slate-800 group-hover:border-cyan-400 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Reveal Phone</span>
                </button>
              )}
            </div>
          </div>

          {/* Email Address Item */}
          <div
            onClick={() => {
              if (!isEmailRevealed) setIsEmailRevealed(true);
            }}
            className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group ${
              isEmailRevealed
                ? 'bg-slate-900/90 border-cyan-400/50 shadow-lg shadow-cyan-500/10'
                : 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/50 cursor-pointer hover:bg-slate-900/60'
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
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
                      <Unlock className="w-2.5 h-2.5" /> DECRYPTED
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-800/40 animate-pulse">
                      <Lock className="w-2.5 h-2.5" /> TAP TO REVEAL
                    </span>
                  )}
                </div>

                <div className="mt-1 font-mono text-sm sm:text-base font-semibold tracking-wide">
                  {isEmailRevealed ? (
                    <span className="text-white select-all">{emailValue}</span>
                  ) : (
                    <span className="text-slate-500 font-mono tracking-widest group-hover:text-cyan-300 transition-colors">
                      c•••••••••••••@gmail.com
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
                    href={`mailto:${emailValue}`}
                    className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-obsidian text-xs font-display font-bold flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                    title="Send Email"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>
                  <button
                    onClick={(e) => handleCopy(emailValue, 'email', e)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-cyan-950/70 hover:text-cyan-300 text-slate-300 border border-slate-700 hover:border-cyan-500/40 text-xs transition-all cursor-pointer"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEmailRevealed(false);
                    }}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs transition-all cursor-pointer"
                    title="Hide / Lock Email"
                    aria-label="Lock Email"
                  >
                    <EyeOff className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEmailRevealed(true)}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 group-hover:bg-cyan-500 group-hover:text-obsidian text-cyan-400 border border-slate-800 group-hover:border-cyan-400 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Reveal Email</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Social Media & Ecosystem Profiles */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Verified Social &amp; Media Profiles</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500">EXECUTIVE CHANNELS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {SOCIAL_LINKS.map((item) => {
              const IconComp = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-2xl bg-slate-900/70 border border-slate-800/90 transition-all flex items-center justify-between group ${item.color} hover:bg-slate-900 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-inherit shrink-0 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-xs text-white group-hover:text-inherit truncate">
                        {item.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">
                        {item.handle} <span className="text-slate-600">·</span> {item.role}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-inherit shrink-0 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Compliance Footer */}
        <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 text-center leading-relaxed">
          <span>Inquiries are routed directly to executive leadership at </span>
          <a
            href="https://tehwiz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            tehwiz.com
          </a>
          <span>. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};
