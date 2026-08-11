import React from 'react';
import { Phone, MessageSquare, Clock, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';
import plumberEmergencyImg from '../assets/images/plumber_emergency_1786445796076.jpg';

export const EmergencyDarkSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-sky-500/30 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-wider border border-rose-500/20">
                <Clock className="w-4 h-4 animate-spin text-rose-400" />
                <span>Open 24 Hours • 365 Days</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white font-heading leading-tight">
                Plumbing Problems Can't Always Wait Until Morning.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Burst pipe? Blocked toilet? Serious leak? Get in touch with Urban Fix Plumbers as soon as possible for fast emergency dispatch anywhere in Nairobi.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-black text-base flex items-center justify-center gap-3 shadow-xl shadow-sky-500/20 active:scale-95 transition-all text-center cursor-pointer"
                >
                  <Phone className="w-5 h-5 fill-slate-950" />
                  <span>CALL {BUSINESS_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={getWhatsAppUrl('Hi Urban Fix Plumbers, EMERGENCY! I need help immediately.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/20 active:scale-95 transition-all text-center cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>WHATSAPP NOW</span>
                </a>
              </div>

            </div>

            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative">
                <img
                  src={plumberEmergencyImg}
                  alt="Emergency plumber on call fixing pipe in Nairobi"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 text-xs font-bold text-sky-300 flex items-center justify-between">
                  <span>Emergency Hotline:</span>
                  <span className="text-white text-sm">{BUSINESS_INFO.phoneDisplay}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
