import React, { useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { businessInfo } from '../data/businessInfo';
import { Button } from '../components/common/Button';
import { ShieldCheck, Award, Users, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';
import { updatePageMeta } from '../utils/seo';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    updatePageMeta(
      "About Us | Licensed & Insured Master Contractors",
      "Learn about Vanguard Craftsmen Contracting, our 18+ years of general contracting experience, CSLB licensing, $5M insurance coverage, and 10-year craftsmanship warranty."
    );
  }, []);

  const leadership = [
    {
      name: "Marcus Vanguard",
      role: "Founder & Master General Contractor",
      bio: "22+ years in structural framing, civil engineering, and luxury residential construction. Holds CSLB B-General Building license.",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Thomas Sterling",
      role: "Senior Field Superintendent",
      bio: "15 years overseeing complex structural additions, seismic retrofits, and daily job-site dust containment protocols.",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sarah Lin, AIA",
      role: "Head of Architectural Design & Permitting",
      bio: "Specializes in modern interior re-configurations, 3D renderings, and city plan check approvals.",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="bg-slate-950 text-white pt-28 lg:pt-36 pb-12 lg:pb-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Established 2008 • CSLB #1098421</span>
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built on Integrity, Precision & Master Craftsmanship
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            Vanguard Craftsmen Contracting was founded with a single mission: to provide homeowners with a honest, reliable, transparent contracting experience free of surprise costs or missed deadlines.
          </p>
        </div>

        {/* STORY GRID */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80"
              alt="Vanguard Jobsite Precision"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 p-4 rounded-xl border border-slate-700 backdrop-blur-md">
              <span className="text-xs font-bold text-amber-400 block uppercase">100% Licensed & $5M Insured</span>
              <span className="text-sm font-medium text-slate-200">Full Workers' Compensation & Commercial Vehicle Coverage</span>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white">
              Over 18 Years Transforming California Properties
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Whether re-engineering a load-bearing wall to open up a cramped kitchen, building a zero-threshold curbless wet room, or erecting a second-story master suite addition, Vanguard approaches every property with meticulous engineering standards.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              We know your home is your most valuable financial and personal asset. That is why we enforce strict job-site dust containment, daily site cleanups, and direct superintendent communication from start to handover.
            </p>

            {/* STATS ROW */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-black text-amber-400 block">{businessInfo.yearsInBusiness}+</span>
                <span className="text-xs text-slate-400">Years Operating</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-black text-amber-400 block">{businessInfo.projectsCompleted}+</span>
                <span className="text-xs text-slate-400">Projects Completed</span>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-black text-amber-400 block">10 Years</span>
                <span className="text-xs text-slate-400">Structural Warranty</span>
              </div>
            </div>

            <div className="pt-2">
              <Button variant="primary" size="lg" onClick={onOpenQuoteModal} icon={<ArrowRight className="w-5 h-5" />}>
                Work With Our Master Team
              </Button>
            </div>
          </div>
        </div>

        {/* GUARANTEES */}
        <div className="mt-20 space-y-8">
          <SectionHeading
            eyebrow="Our 5-Point Quality Promise"
            title="Why Property Owners Trust Vanguard"
            darkBg
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessInfo.guarantees.map((g, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold border border-amber-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{g.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LEADERSHIP TEAM */}
        <div className="mt-20 space-y-8">
          <SectionHeading
            eyebrow="Experienced Leadership"
            title="Meet Our Construction Directors"
            darkBg
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden bg-slate-950">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-white">{person.name}</h3>
                  <span className="text-xs font-bold text-amber-400 block">{person.role}</span>
                  <p className="text-slate-400 text-xs leading-relaxed pt-2 border-t border-slate-800">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
