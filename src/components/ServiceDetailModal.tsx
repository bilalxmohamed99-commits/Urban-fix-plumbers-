import React from 'react';
import { X, Phone, MessageSquare, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';
import { PlumbingService } from '../types';

interface ServiceDetailModalProps {
  service: PlumbingService | null;
  onClose: () => void;
  onOpenBooking: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenBooking }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-500/20">
            {service.urgencyLevel}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Common Issues Solved */}
        <div className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/80 space-y-3 mb-6">
          <h4 className="text-sm font-bold text-sky-300 uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Common {service.title} Issues We Fix in Nairobi</span>
          </h4>
          <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
            {service.commonIssues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust Note */}
        <div className="flex items-center gap-3 text-xs text-slate-400 bg-slate-800/40 p-3 rounded-xl mb-6">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>All plumbing work is executed by vetted, professional Nairobi technicians with guaranteed clean craftsmanship.</span>
        </div>

        {/* Modal CTAs */}
        <div className="grid sm:grid-cols-2 gap-3 pt-2">
          <a
            href={getWhatsAppUrl(service.whatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenBooking(service.id);
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
