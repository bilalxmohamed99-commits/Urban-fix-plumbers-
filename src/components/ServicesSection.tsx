import React from 'react';
import { 
  Droplets, 
  ShowerHead, 
  Wrench, 
  Flame, 
  Bath, 
  UtensilsCrossed, 
  Building2, 
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/plumbingData';
import { PlumbingService } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: PlumbingService) => void;
  onOpenBooking: (serviceId?: string) => void;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Droplets': return <Droplets className="w-6 h-6 text-sky-400" />;
    case 'ShowerHead': return <ShowerHead className="w-6 h-6 text-sky-400" />;
    case 'Wrench': return <Wrench className="w-6 h-6 text-sky-400" />;
    case 'Flame': return <Flame className="w-6 h-6 text-amber-400" />;
    case 'Bath': return <Bath className="w-6 h-6 text-sky-400" />;
    case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-sky-400" />;
    case 'Building2': return <Building2 className="w-6 h-6 text-sky-400" />;
    case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-rose-400 animate-pulse" />;
    default: return <Wrench className="w-6 h-6 text-sky-400" />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBooking }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest border border-sky-500/20">
            Nairobi Plumbing Experts
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Plumbing Services You Can Count On
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From small repairs to urgent plumbing problems, we help keep your home or business running smoothly across Nairobi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-800/80 hover:bg-slate-800 border border-slate-700/70 hover:border-sky-500/50 rounded-2xl p-6 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Header Row with Icon & Urgency Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-sky-500/40 group-hover:bg-slate-900/90 transition-colors">
                    {getIconComponent(service.iconName)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                    service.urgencyLevel === 'Emergency 24/7'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      : service.urgencyLevel === 'Urgent'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                  }`}>
                    {service.urgencyLevel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Mini Features List */}
                <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
                  {service.commonIssues.slice(0, 2).map((issue, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Details</span>
                </button>

                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="px-3 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer group/btn"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-12 bg-slate-800/60 rounded-2xl border border-slate-700 p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white font-heading">Don't see your exact plumbing problem listed?</h4>
            <p className="text-sm text-slate-300">Our experienced fundis handle all types of residential and commercial plumbing challenges in Nairobi.</p>
          </div>
          <a
            href={getWhatsAppUrl('Hi Urban Fix Plumbers, I have a custom plumbing inquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shrink-0 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>ASK US ON WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
