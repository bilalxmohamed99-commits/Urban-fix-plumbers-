import React from 'react';
import { Phone, MessageSquare, Star, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';
import heroImage from '../assets/images/plumber_shower_hero_1786645453628.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative bg-slate-900 text-white pt-8 pb-16 lg:py-24 overflow-hidden border-b border-slate-800">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>24/7 PLUMBING ASSISTANCE AVAILABLE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black tracking-tighter text-white leading-[1.05] font-heading">
              Reliable Plumbing.<br />
              <span className="text-[#0EA5E9]">Fast Response.</span><br />
              Done Right.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Professional plumbing services in Nairobi for homes, apartments, and businesses. From urgent leaks and blocked drains to pipe repairs and installations, Urban Fix Plumbers is ready to help.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-4 rounded-xl bg-[#0EA5E9] hover:bg-sky-400 text-slate-950 font-black text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-lg shadow-sky-500/20 active:scale-98 transition-all cursor-pointer group"
              >
                <Phone className="w-5 h-5 fill-slate-950 group-hover:rotate-12 transition-transform" />
                <span>CALL {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#25D366] hover:bg-emerald-500 text-white font-extrabold text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/20 active:scale-98 transition-all cursor-pointer group"
              >
                <MessageSquare className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Trust Row */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white ml-1">4.8 Rated</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-200">17 Reviews</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1 text-slate-200">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Open 24 Hours</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1 text-slate-200">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Quick Service Guarantee Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Verified Fundis</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean & Reliable</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/50">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Rapid Response</span>
              </div>
            </div>

          </div>

          {/* Right Column Visual / Hero Image */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-800 group">
                <img
                  src={heroImage}
                  alt="Urban Fix Plumbers technician repairing modern plumbing in Nairobi"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge 1: 24/7 Plumbing Assistance */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-slate-900 border-2 border-sky-500/40 rounded-2xl p-3 sm:p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Emergency Dispatch</div>
                  <div className="text-sm sm:text-base font-extrabold text-white">24/7 Plumbing Assistance</div>
                </div>
              </div>

              {/* Floating Badge 2: Verified Fundis */}
              <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-slate-900 border border-slate-700 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Service Coverage</div>
                  <div className="text-sm font-extrabold text-white">All Estates in Nairobi</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
