import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Globe, Navigation, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest border border-sky-500/20">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Contact Urban Fix Plumbers
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We operate 24 hours a day across Nairobi. Reach out via phone call, WhatsApp, or request directions to our service operations center.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Business Details Card */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            
            <div>
              <h3 className="text-2xl font-black text-white font-heading mb-1">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-sky-400 text-xs font-bold uppercase tracking-wider">
                Professional Plumbing Services
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300 border-y border-slate-800 py-6">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-wider">Location</div>
                  <div>{BUSINESS_INFO.location}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Serving all estates & commercial hubs in Nairobi</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-wider">Phone / Emergency Line</div>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-sky-300 font-extrabold text-base block">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-wider">Operating Hours</div>
                  <div className="text-emerald-400 font-bold">{BUSINESS_INFO.hours}</div>
                  <div className="text-xs text-slate-400">24/7/365 Emergency Dispatch</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-xs uppercase tracking-wider">Official Website</div>
                  <a href={`https://${BUSINESS_INFO.website}`} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
                    {BUSINESS_INFO.website}
                  </a>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer text-center"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors cursor-pointer text-center"
              >
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>Get Directions (Nairobi, Kenya)</span>
              </a>
            </div>

          </div>

          {/* Map Embed Container */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col justify-between h-full min-h-[460px] relative">
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sky-400" />
                  <span>Urban Fix Plumbers Location & Coverage Map</span>
                </h4>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Fundis Active on Map</span>
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Main dispatch center in Nairobi, Kenya. Our rapid-response plumbers cover all Nairobi estates 24 hours a day.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 h-80 sm:h-[380px] relative group">
              <iframe
                title="Urban Fix Plumbers Location Map Nairobi"
                src="https://maps.google.com/maps?q=Urban+Fix+Plumbers,+Nairobi,+Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* High visibility custom Map Pin Indicator Card Overlay */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-slate-950/95 border-2 border-sky-500/50 rounded-2xl p-4 shadow-2xl backdrop-blur-md pointer-events-none transition-all">
                <div className="flex items-start gap-3">
                  <div className="relative shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-xl bg-sky-500 text-slate-950 flex items-center justify-center font-black shadow-lg">
                      <MapPin className="w-6 h-6 fill-slate-950" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950 animate-ping"></span>
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950"></span>
                  </div>

                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black text-sky-400 uppercase tracking-wider">OFFICIAL LOCATION</span>
                    </div>
                    <h5 className="text-sm font-black text-white font-heading leading-snug">
                      URBAN FIX PLUMBERS
                    </h5>
                    <p className="text-xs text-slate-300">
                      Nairobi, Kenya
                    </p>
                    <div className="text-[11px] text-emerald-400 font-bold pt-0.5 flex items-center gap-1">
                      <span>• Open 24 Hours Emergency Dispatch</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom estate badge bar */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl px-3 py-2 text-[11px] text-slate-300 flex items-center justify-between gap-2 overflow-x-auto">
                <span className="font-bold text-sky-400 shrink-0">📍 Dispatch Hubs:</span>
                <span className="truncate">Kilimani • Westlands • Lavington • Karen • Nairobi CBD • Parklands</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
