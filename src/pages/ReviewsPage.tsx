import React, { useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { testimonialsData } from '../data/testimonialsData';
import { businessInfo } from '../data/businessInfo';
import { Star, ShieldCheck, Award, Quote, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/common/Button';
import { updatePageMeta } from '../utils/seo';

interface ReviewsPageProps {
  onOpenQuoteModal: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    updatePageMeta(
      "Customer Reviews & Ratings | Verified Homeowner Testimonials",
      "Read verified reviews from homeowners who hired Vanguard Craftsmen for kitchen remodels, bathroom spas, and home additions. 4.9/5 star average rating."
    );
  }, []);

  return (
    <div className="bg-slate-950 text-white py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeading
          eyebrow="Verified Client Feedback"
          title="Homeowner Reviews & Rating Breakdown"
          description="Read unedited, genuine reviews from local property owners who experienced Vanguard's fixed-price estimates and craftsmanship firsthand."
          darkBg
        />

        {/* OVERALL RATING BANNER */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-4xl font-black text-amber-400 font-mono">{businessInfo.customerRating}</span>
              <span className="text-xl text-slate-400 font-bold">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-300 text-sm">
              Based on <strong className="text-white">{businessInfo.reviewCount}+ verified local reviews</strong> across Google, Houzz, and BBB.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center space-x-3">
              <Award className="w-8 h-8 text-amber-400 shrink-0" />
              <div className="text-left">
                <span className="font-bold text-white block">Houzz Best of 2025</span>
                <span className="text-slate-400">Top Rated Service Provider</span>
              </div>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center space-x-3">
              <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
              <div className="text-left">
                <span className="font-bold text-white block">BBB A+ Accredited</span>
                <span className="text-slate-400">Zero Complaint Record</span>
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="w-10 h-10 text-amber-500/10 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    Verified Client
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center space-x-3">
                {item.avatarUrl ? (
                  <img
                    src={item.avatarUrl}
                    alt={item.customerName}
                    className="w-11 h-11 rounded-full object-cover border border-slate-700"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-base border border-amber-500/30">
                    {item.customerName.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.customerName}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.projectType} • <span className="text-slate-500">{item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white">Join Hundreds of Satisfied California Homeowners</h3>
          <p className="text-slate-300 text-sm">Schedule your free site visit and receive a line-item estimate.</p>
          <Button variant="primary" size="lg" onClick={onOpenQuoteModal}>
            Request Your Free Quote
          </Button>
        </div>

      </div>
    </div>
  );
};
