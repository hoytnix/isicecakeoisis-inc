import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SLIDES, RAW_LLMS_TXT } from './data/ecosystemData';
import { Header } from './components/layout/Header';
import { SideDotNav } from './components/layout/SideDotNav';
import { SlideIndicator } from './components/layout/SlideIndicator';
import { Slide01Origin } from './components/slides/Slide01Origin';
import { Slide02Thesis } from './components/slides/Slide02Thesis';
import { Slide03Yuli } from './components/slides/Slide03Yuli';
import { Slide04Aevloc } from './components/slides/Slide04Aevloc';
import { Slide05PurpleCanary } from './components/slides/Slide05PurpleCanary';
import { Slide06CaffeineMD } from './components/slides/Slide06CaffeineMD';
import { Slide07Games } from './components/slides/Slide07Games';
import { Slide08Investor } from './components/slides/Slide08Investor';
import { Slide09Colophon } from './components/slides/Slide09Colophon';
import { MenuModal } from './components/modals/MenuModal';
import { InvestorModal } from './components/modals/InvestorModal';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInvestorOpen, setIsInvestorOpen] = useState(false);
  const [lowPower, setLowPower] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const containerRef = useRef<HTMLElement | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2500);
  }, []);

  const navigateToSlide = useCallback((index: number) => {
    const targetIndex = Math.max(0, Math.min(index, SLIDES.length - 1));
    const targetElement = document.getElementById(SLIDES[targetIndex].id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentSlideIndex(targetIndex);
  }, []);

  // IntersectionObserver for active slide tracking
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = SLIDES.findIndex((s) => s.id === id);
          if (index !== -1) {
            setCurrentSlideIndex(index);
          }
        }
      });
    }, observerOptions);

    SLIDES.forEach((slide) => {
      const element = document.getElementById(slide.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Toggle Low-Power Mode
  const toggleLowPower = useCallback(() => {
    setLowPower((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('low-power');
        showToast('Low-Power Mode Enabled (Animations Disabled)');
      } else {
        document.body.classList.remove('low-power');
        showToast('Full Motion Mode Restored');
      }
      return next;
    });
  }, [showToast]);

  // Copy manifest helper
  const handleCopyManifest = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(RAW_LLMS_TXT);
      showToast('Official /llms.txt manifest copied to clipboard');
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = RAW_LLMS_TXT;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast('Official /llms.txt manifest copied to clipboard');
    }
  }, [showToast]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle menu with Cmd/Ctrl + M
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'm') {
        e.preventDefault();
        setIsMenuOpen((prev) => !prev);
        return;
      }

      // Close modals on Escape
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsInvestorOpen(false);
        return;
      }

      // Arrow navigation when modals are closed
      if (!isMenuOpen && !isInvestorOpen) {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          if (currentSlideIndex < SLIDES.length - 1) {
            e.preventDefault();
            navigateToSlide(currentSlideIndex + 1);
          }
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          if (currentSlideIndex > 0) {
            e.preventDefault();
            navigateToSlide(currentSlideIndex - 1);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, isInvestorOpen, currentSlideIndex, navigateToSlide]);

  return (
    <div className="bg-obsidian text-slate-100 font-sans selection:bg-cyan-500 selection:text-obsidian antialiased min-h-screen">
      {/* Top Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenInvestor={() => setIsInvestorOpen(true)}
        onNavigateHome={() => navigateToSlide(0)}
      />

      {/* Side Dot Navigation */}
      <SideDotNav
        currentSlideIndex={currentSlideIndex}
        onNavigateToSlide={navigateToSlide}
      />

      {/* Current Slide Indicator */}
      <SlideIndicator currentSlideIndex={currentSlideIndex} />

      {/* Main Snap-Scroll Deck Container */}
      <main id="deck-container" ref={containerRef} className="no-scrollbar">
        {/* 01 // Goomba Origin */}
        <Slide01Origin
          onOpenInvestor={() => setIsInvestorOpen(true)}
          onExplorePortfolio={() => navigateToSlide(1)}
        />

        {/* 02 // Investment Thesis */}
        <Slide02Thesis />

        {/* 03 // Yuli Flagship SDK */}
        <Slide03Yuli />

        {/* 04 // Aevloc SaaS & NFC Hardware */}
        <Slide04Aevloc />

        {/* 05 // Purple Canary Lab & Publishing */}
        <Slide05PurpleCanary />

        {/* 06 // CaffeineMD — FLOSS Alternative to Obsidian & Notion */}
        <Slide06CaffeineMD />

        {/* 07 // Published Mobile Games */}
        <Slide07Games />

        {/* 08 // Accredited Investor Inquiries */}
        <Slide08Investor onOpenInvestor={() => setIsInvestorOpen(true)} />

        {/* 09 // Sibling Ecosystem Topology & Colophon */}
        <Slide09Colophon
          lowPower={lowPower}
          onToggleLowPower={toggleLowPower}
          onReturnToTop={() => navigateToSlide(0)}
        />
      </main>

      {/* System Directory Modal */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSlide={(slideNum) => {
          setIsMenuOpen(false);
          navigateToSlide(slideNum - 1);
        }}
        onOpenInvestor={() => setIsInvestorOpen(true)}
        onCopyManifest={handleCopyManifest}
        onToggleLowPower={toggleLowPower}
        lowPower={lowPower}
      />

      {/* Accredited Investor Modal */}
      <InvestorModal
        isOpen={isInvestorOpen}
        onClose={() => setIsInvestorOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-cyan-400/50 text-white text-xs font-mono px-4 py-2.5 rounded-xl shadow-2xl shadow-cyan-500/20 backdrop-blur-md animate-fade-in flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
