import React, { useState } from 'react';
import { MapPin, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

interface ZipCodeCheckerProps {
  onOpenQuoteModal: () => void;
}

export const ZipCodeChecker: React.FC<ZipCodeCheckerProps> = ({ onOpenQuoteModal }) => {
  const [zipInput, setZipInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'covered' | 'not-covered'>('idle');

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput || zipInput.trim().length < 5) return;

    setStatus('checking');

    try {
      const res = await fetch('/api/zip-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ zip: zipInput }),
      });
      const data = await res.json();

      if (data.isCovered) {
        setStatus('covered');
      } else {
        setStatus('not-covered');
      }
    } catch (err) {
      // Fallback logic
      const isLocal = zipInput.startsWith('90') || zipInput.startsWith('91');
      setStatus(isLocal ? 'covered' : 'not-covered');
    }
  };

  return (
    <section className="py-16 bg-slate-900 border-b border-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <MapPin className="w-3.5 h-3.5" />
              <span>Instant Coverage Lookup</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Do We Build in Your Neighborhood?
            </h3>
            <p className="text-slate-400 text-sm">
              Enter your 5-digit zip code to instantly check whether our construction crews and superintendents operate in your area.
            </p>

            {/* SEARCH FORM */}
            <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value.replace(/\D/g, ''));
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="5-Digit Zip Code"
                  className="w-full px-4 py-3.5 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono text-lg text-center sm:text-left focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>
              <Button
                variant="primary"
                size="md"
                type="submit"
                disabled={status === 'checking' || zipInput.length < 5}
              >
                {status === 'checking' ? 'Checking...' : 'Check Coverage'}
              </Button>
            </form>

            {/* RESULTS STATE */}
            {status === 'covered' && (
              <div className="p-4 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-200 text-sm space-y-2 animate-in fade-in">
                <div className="flex items-center justify-center space-x-2 font-bold text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Great news! Zip code {zipInput} is in our primary service area.</span>
                </div>
                <p className="text-xs text-slate-300">
                  Our field superintendents are active in your area and can schedule an in-person estimate within 24–48 hours.
                </p>
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={onOpenQuoteModal}
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Estimate for {zipInput}
                  </Button>
                </div>
              </div>
            )}

            {status === 'not-covered' && (
              <div className="p-4 bg-slate-900 border border-amber-500/30 rounded-xl text-slate-300 text-sm space-y-2 animate-in fade-in">
                <div className="flex items-center justify-center space-x-2 font-bold text-amber-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>Zip code {zipInput} is outside our standard zone.</span>
                </div>
                <p className="text-xs text-slate-400">
                  However, we accept custom large-scale additions and whole-home remodels on a case-by-case basis. Contact us directly to discuss!
                </p>
                <div className="pt-1">
                  <Button variant="outline" size="sm" onClick={onOpenQuoteModal}>
                    Contact Estimator Directly
                  </Button>
                </div>
              </div>
            )}

            <div className="pt-2 text-xs text-slate-500 flex items-center justify-center space-x-4">
              <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 text-amber-400 mr-1" /> Primary Zones: Bel Air, Pasadena, Santa Monica, Calabasas, Malibu, Encino</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
