import React from 'react';
import { Clock, Zap, ShieldCheck, CheckCircle2, MessageSquareText, Building } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/plumbingData';

const getTrustIcon = (iconName: string) => {
  switch (iconName) {
    case 'Clock': return <Clock className="w-6 h-6 text-sky-400" />;
    case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
    case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-sky-400" />;
    case 'MessageSquareText': return <MessageSquareText className="w-6 h-6 text-sky-400" />;
    case 'Building': return <Building className="w-6 h-6 text-sky-400" />;
    default: return <ShieldCheck className="w-6 h-6 text-sky-400" />;
  }
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest border border-sky-500/20">
            Trusted Local Fundis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Why Nairobi Customers Choose Urban Fix
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We take pride in delivering fast, honest, and high-quality plumbing services across all residential and commercial estates in Nairobi.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 rounded-2xl p-6 transition-all duration-300 shadow-xl space-y-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-sky-500/50 transition-colors">
                {getTrustIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
