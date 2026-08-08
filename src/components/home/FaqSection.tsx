import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { faqData } from '../../data/faqData';
import { ChevronDown, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'quote-pricing', label: 'Quotes & Pricing' },
    { id: 'permits-licenses', label: 'Permits & Licenses' },
    { id: 'timeline-process', label: 'Timeline & Process' },
    { id: 'warranties-quality', label: 'Warranties' },
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Clear Answers to Common Questions"
          title="Frequently Asked Contractor Questions"
          description="Have questions about permits, line-item estimates, warranties, or how we handle changes? We believe in total transparency."
          darkBg
        />

        {/* SEARCH & FILTER CONTROLS */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g., permits, warranties, timeline)..."
              className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-slate-900"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base text-white hover:text-amber-400 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-slate-950 rounded-xl border border-slate-800 text-slate-400 text-sm">
              No matching questions found. Call us directly for immediate answers!
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
