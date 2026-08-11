import React from 'react';
import { MapPin, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';
import { NAIROBI_AREAS, BUSINESS_INFO } from '../data/plumbingData';

export const ServiceAreasSection: React.FC = () => {
  return (
    <section id="areas" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/20">
            Nairobi Service Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Plumbing Services Across Nairobi
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Urban Fix Plumbers provides plumbing services for homes, apartments, offices and businesses across Nairobi and surrounding areas.
          </p>
        </div>

        {/* Location Chips Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {NAIROBI_AREAS.map((area) => (
            <div
              key={area.name}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                area.popular
                  ? 'bg-slate-900 border-sky-500/40 hover:border-sky-400 shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 shrink-0 ${area.popular ? 'text-sky-400' : 'text-slate-400'}`} />
                  <span className="font-bold text-sm text-white font-heading">{area.name}</span>
                </div>
                {area.popular && (
                  <span className="bg-sky-500/20 text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded border border-sky-500/30 shrink-0">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout Footer */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">Need a plumber near you?</h3>
              <p className="text-sm text-slate-300">Call us now and confirm plumber availability for your exact estate or building.</p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-black text-sm flex items-center gap-2 shadow-xl shrink-0 cursor-pointer text-center"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>CALL URBAN FIX — {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
