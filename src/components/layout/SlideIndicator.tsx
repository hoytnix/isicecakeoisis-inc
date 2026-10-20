import React from 'react';
import { SLIDES } from '../../data/ecosystemData';

interface SlideIndicatorProps {
  currentSlideIndex: number;
}

export const SlideIndicator: React.FC<SlideIndicatorProps> = ({ currentSlideIndex }) => {
  const currentSlide = SLIDES[currentSlideIndex] || SLIDES[0];

  return (
    <div className="fixed bottom-3 sm:bottom-4 left-4 sm:left-8 z-40 text-[10px] sm:text-xs font-mono text-slate-500 pointer-events-none flex items-center gap-2 bg-obsidian/60 px-2.5 py-1 rounded-md border border-slate-800/60 backdrop-blur">
      <span className="text-cyan-400 font-bold">{currentSlide.numberFormatted}</span>
      <span className="text-slate-700">/</span>
      <span>09</span>
      <span className="text-slate-700 mx-1">//</span>
      <span className="text-slate-400 uppercase tracking-widest text-[9px] sm:text-[10px] truncate max-w-[140px] sm:max-w-xs">
        {currentSlide.shortTitle}
      </span>
    </div>
  );
};
