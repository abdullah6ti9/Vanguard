import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MobileStickyBar } from './components/common/MobileStickyBar';
import { Modal } from './components/common/Modal';
import { MultiStepQuoteForm } from './components/quote/MultiStepQuoteForm';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

import { injectJsonLdSchema } from './utils/seo';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    // Inject Schema.org JSON-LD structured metadata
    injectJsonLdSchema();

    // Handle hash navigation if user visits e.g. #projects or #services
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home',
        'about',
        'services',
        'projects',
        'service-areas',
        'reviews',
        'faq',
        'contact',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'about':
        return <AboutPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'services':
        return <ServicesPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'projects':
        return <ProjectsPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'service-areas':
        return <ServiceAreasPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'reviews':
        return <ReviewsPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'faq':
        return <FaqPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'contact':
        return <ContactPage onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950 pb-16 sm:pb-0">
      {/* HEADER NAVIGATION */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* MAIN VIEW */}
      <main className="grow">
        {renderActivePage()}
      </main>

      {/* FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* MOBILE PERSISTENT STICKY CALL / QUOTE BAR */}
      <MobileStickyBar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* MULTI-STEP QUOTE REQUEST MODAL */}
      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        title="Request a Free Itemized Quote"
        maxWidth="2xl"
      >
        <MultiStepQuoteForm onSuccessClose={() => setIsQuoteModalOpen(false)} />
      </Modal>
    </div>
  );
}

