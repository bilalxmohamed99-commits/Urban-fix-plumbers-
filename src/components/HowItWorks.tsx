import React from 'react';
import { PhoneCall, Camera, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/plumbingData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'Contact Us',
      description: 'Call or WhatsApp Urban Fix Plumbers on 0714 409 033 for immediate assistance.',
      icon: <PhoneCall className="w-6 h-6 text-sky-400" />
    },
    {
      step: '02',
      title: 'Tell Us the Problem',
      description: 'Describe the issue or send quick photos/videos through WhatsApp for immediate assessment.',
      icon: <Camera className="w-6 h-6 text-emerald-400" />
    },
    {
      step: '03',
      title: 'Get It Fixed',
      description: 'A plumber assesses the problem at your location and carries out the necessary repair or service cleanly.',
      icon: <CheckCircle2 className="w-6 h-6 text-amber-400" />
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest border border-sky-500/20">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            How It Works
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Getting your plumbing issues fixed in Nairobi is quick, simple, and hassle-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative flex flex-col justify-between hover:border-sky-500/40 transition-colors shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-sky-500/30 font-heading">
                    {s.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {s.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-700">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-black text-base shadow-xl shadow-sky-500/20 active:scale-95 transition-all"
          >
            <span>GET HELP NOW — {BUSINESS_INFO.phoneDisplay}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
