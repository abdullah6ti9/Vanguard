import React, { useEffect } from 'react';
import { FaqSection } from '../components/home/FaqSection';
import { CtaBanner } from '../components/home/CtaBanner';
import { updatePageMeta } from '../utils/seo';

interface FaqPageProps {
  onOpenQuoteModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    updatePageMeta(
      "Contractor FAQs | Pricing, Permits, Warranties & Timelines",
      "Get answers to frequently asked contractor questions regarding free estimates, city permits, construction timelines, payment milestones, and 10-year warranties."
    );
  }, []);

  return (
    <div className="bg-slate-950 text-white py-12 lg:py-20 space-y-12">
      <FaqSection />
      <CtaBanner onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
