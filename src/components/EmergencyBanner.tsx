import React from 'react';
import { Phone, MessageSquare, AlertCircle, Zap } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 text-white py-8 px-4 sm:px-6 shadow-xl relative overflow-hidden border-y border-sky-500/30">
      {/* Background visual motif */}
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side Info */}
        <div className="flex items-start gap-4 text-left max-w-3xl">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-300 shrink-0 border border-white/20 mt-1">
            <AlertCircle className="w-7 h-7 text-amber-300 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-200 bg-sky-950/40 px-2.5 py-0.5 rounded-md border border-sky-300/20">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Immediate Dispatch Available</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
              Got a Plumbing Emergency?
            </h2>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              Don't let a leaking pipe, blocked drain or burst pipe cause more damage. Call Urban Fix Plumbers for fast assistance across Nairobi.
            </p>
          </div>
        </div>

        {/* Right Side Direct Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-xl flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
          >
            <Phone className="w-5 h-5 fill-slate-950 shrink-0" />
            <span>CALL NOW — {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={getWhatsAppUrl('Hi Urban Fix Plumbers, I have an urgent plumbing emergency in Nairobi!')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-900 text-white border border-white/20 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>WhatsApp a Plumber</span>
          </a>
        </div>

      </div>
    </section>
  );
};
