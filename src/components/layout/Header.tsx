import React from 'react';
import { Menu, MessageSquare, Github } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenInvestor: () => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenInvestor,
  onNavigateHome
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between pointer-events-none bg-obsidian/40 backdrop-blur-md border-b border-slate-800/40">
      <div className="pointer-events-auto flex items-center gap-3">
        <button
          onClick={onNavigateHome}
          className="flex items-center group text-left cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded-md"
          title="Return to Origin (Slide 01)"
          aria-label="ISICECAKEOISIS INC. Home"
        >
          <img
            src="https://i.ibb.co/3mrktB3R/504.png"
            alt="ISICECAKEOISIS INC."
            width={788}
            height={316}
            loading="eager"
            decoding="async"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>
      </div>

      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
        {/* GitHub Link Button */}
        <a
          href="https://github.com/hoytnix/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel p-2.5 rounded-lg text-xs font-mono flex items-center justify-center hover:border-cyan-400/50 text-slate-300 hover:text-cyan-400 transition-all shadow-lg group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
          title="GitHub Profile (https://github.com/hoytnix/)"
          aria-label="Open GitHub Profile"
        >
          <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>

        {/* Inquire / Chat Bubble Button */}
        <button
          onClick={onOpenInvestor}
          className="bg-cyan-500 hover:bg-cyan-400 text-obsidian p-2.5 rounded-lg text-xs font-mono transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          title="Direct Contact &amp; Inquiry"
          aria-label="Direct Contact &amp; Inquiry"
        >
          <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>

        {/* Menu Trigger Button */}
        <button
          onClick={onOpenMenu}
          className="glass-panel p-2.5 rounded-lg text-xs font-mono flex items-center justify-center hover:border-cyan-400/50 text-cyan-400 transition-all shadow-lg group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
          title="System Menu (Ctrl/Cmd + M)"
          aria-label="Open System Menu"
        >
          <Menu className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </header>
  );
};
