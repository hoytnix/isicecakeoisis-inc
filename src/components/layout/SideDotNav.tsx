import React from 'react';
import { SLIDES } from '../../data/ecosystemData';

interface SideDotNavProps {
  currentSlideIndex: number;
  onNavigateToSlide: (index: number) => void;
}

export const SideDotNav: React.FC<SideDotNavProps> = ({
  currentSlideIndex,
  onNavigateToSlide
}) => {
  return (
    <nav
      aria-label="Deck Navigation"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5 pointer-events-auto"
    >
      {SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlideIndex;
        return (
          <button
            key={slide.id}
            onClick={() => onNavigateToSlide(idx)}
            title={`Slide ${slide.numberFormatted} // ${slide.shortTitle}`}
            aria-label={`Go to slide ${slide.numberFormatted}: ${slide.shortTitle}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              isActive
                ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                : 'bg-slate-700 hover:bg-slate-500'
            }`}
          />
        );
      })}
    </nav>
  );
};
