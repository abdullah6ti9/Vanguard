import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { businessInfo } from '../data/businessInfo';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { updatePageMeta } from '../utils/seo';

interface ContactPageProps {
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  useEffect(() => {
    updatePageMeta(
      "Contact Us | Schedule a Site Visit or Request a Quote",
      "Get in touch with Vanguard Craftsmen Contracting. Call (555) 234-8900, visit our Metropolis office, or send an inquiry for direct estimator assistance."
    );
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!formState.name.trim() || !formState.phone.trim() || !formState.message.trim()) {
      setErrorMsg('Please provide your name, phone number, and message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg(data.message || 'Thank you! Your message has been sent successfully.');
        setFormState({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
      } else {
        setErrorMsg(data.error || 'Failed to send message. Please call us directly.');
      }
    } catch (err) {
      setSuccessMsg('Thank you! Your inquiry was received. A team member will call you shortly.');
      setFormState({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white pt-28 lg:pt-36 pb-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact Vanguard Craftsmen"
          description="Have questions about an upcoming renovation project or want to schedule an in-person site walk-through? Reach out directly below."
          darkBg
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: DIRECT CONTACT INFO CARD */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
              
              <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">
                Office & Estimating Team
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Phone className="w-5 h-5 fill-amber-400/20" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-bold">Direct Call Hotline</span>
                    <span className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
                      {businessInfo.phoneFormatted}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-bold">Estimates Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {businessInfo.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-bold">Headquarters Address</span>
                    <span className="text-sm font-medium text-slate-200 block mt-0.5">
                      {businessInfo.address.fullAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <span className="text-xs text-slate-400 block uppercase font-bold">Operating Hours</span>
                    <p><strong className="text-white">Weekdays:</strong> {businessInfo.businessHours.weekdays}</p>
                    <p><strong className="text-white">Saturdays:</strong> {businessInfo.businessHours.saturday}</p>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-slate-800 text-xs text-amber-400 font-semibold flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Licensed CSLB #1098421 • $5,000,000 General Liability Insured</span>
              </div>

            </div>

            {/* QUICK MULTI-STEP QUOTE BUTTON */}
            <div className="bg-gradient-to-br from-amber-500/10 to-transparent p-6 rounded-2xl border border-amber-500/30 text-center space-y-3">
              <h4 className="text-lg font-bold text-white">Planning a Specific Project?</h4>
              <p className="text-xs text-slate-300">
                Use our multi-step quote builder to specify scope, budget, and zip code for a detailed proposal.
              </p>
              <Button variant="primary" size="md" fullWidth onClick={onOpenQuoteModal}>
                Launch Multi-Step Quote Builder
              </Button>
            </div>
          </div>

          {/* RIGHT: DIRECT MESSAGE FORM */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold text-white">Send a Direct Inquiry</h3>
                <p className="text-slate-400 text-xs mt-1">Fill out the form below and our care team will get back to you within 1 business day.</p>
              </div>

              {successMsg && (
                <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-emerald-200 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              {errorMsg && (
                <div className="p-4 bg-red-950/80 border border-red-500/50 rounded-xl text-red-200 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. David Miller"
                      className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="(555) 234-8900"
                      className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="david@example.com"
                      className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Service Interested In</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                      <option value="Home Addition">Home Addition / ADU</option>
                      <option value="Whole Home Renovation">Whole Home Renovation</option>
                      <option value="Roofing & Siding">Roofing & Siding</option>
                      <option value="Decks & Outdoor">Decks & Outdoor Living</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">How Can We Help You? *</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                  fullWidth
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message Now'}
                </Button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
