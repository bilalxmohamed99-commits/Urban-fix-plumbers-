import React from 'react';
import { Phone, MessageSquare, Clock, MapPin, Wrench } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Visual background element */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <div className="w-16 h-16 rounded-3xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto border border-sky-500/30">
          <Wrench className="w-8 h-8" />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading">
          Need a Plumber? Let's Fix It.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Don't wait for a small plumbing problem to become an expensive one. Contact Urban Fix Plumbers today for reliable, fast service in Nairobi.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-black text-lg flex items-center justify-center gap-3 shadow-2xl shadow-sky-500/25 active:scale-95 transition-all text-center cursor-pointer"
          >
            <Phone className="w-5 h-5 fill-slate-950" />
            <span>CALL {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-emerald-600/20 active:scale-95 transition-all text-center cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        {/* Footer info pill */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <div className="flex items-center gap-1.5 text-sky-400">
            <MapPin className="w-4 h-4" />
            <span>Nairobi, Kenya</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <Clock className="w-4 h-4" />
            <span>Open 24 Hours</span>
          </div>
        </div>

      </div>
    </section>
  );
};
