import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { SelectedWork } from '../components/home/SelectedWork';
import { WhatWeDo } from '../components/home/WhatWeDo';
import { TheDifference } from '../components/home/TheDifference';
import { BeforeAfterSection } from '../components/home/BeforeAfterSection';
import { DramaticCta } from '../components/home/DramaticCta';
import { PageRoute } from '../types';
import { updatePageMeta } from '../utils/seo';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  useEffect(() => {
    updatePageMeta(
      "Vanguard Craftsmen | Architectural General Contractor & Construction",
      "Premier general contracting and custom construction for homes built to last in Southern California. Kitchens, bathrooms, additions, and full renovations."
    );
  }, []);

  return (
    <div className="bg-slate-950 text-white space-y-0 selection:bg-amber-500 selection:text-slate-950">
      {/* SECTION 1 — CINEMATIC HERO */}
      <Hero onNavigate={onNavigate} onOpenQuoteModal={onOpenQuoteModal} />

      {/* SECTION 2 — SELECTED WORK */}
      <SelectedWork onOpenQuoteModal={onOpenQuoteModal} />

      {/* SECTION 3 — WHAT WE DO */}
      <WhatWeDo onNavigate={onNavigate} />

      {/* SECTION 4 — THE DIFFERENCE */}
      <TheDifference />

      {/* SECTION 5 — FEATURED PROJECT / BEFORE & AFTER */}
      <BeforeAfterSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* SECTION 6 — SIMPLE DRAMATIC CTA */}
      <DramaticCta onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
