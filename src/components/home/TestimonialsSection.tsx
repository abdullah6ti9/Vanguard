import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { testimonialsData } from '../../data/testimonialsData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Verified Client Feedback"
          title="What Our Homeowners Say"
          description="Read real stories from local property owners who trusted Vanguard with their kitchens, bathrooms, additions, and restorations."
          darkBg
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="w-10 h-10 text-amber-500/10 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* RATING STARS & VERIFIED BADGE */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {item.verifiedCustomer && (
                    <span className="inline-flex items-center text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      Verified Homeowner
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* AUTHOR FOOTER */}
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

      </div>
    </section>
  );
};
