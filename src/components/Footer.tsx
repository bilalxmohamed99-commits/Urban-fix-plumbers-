import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';
import { UrbanFixLogo } from './UrbanFixLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <UrbanFixLogo size="md" showTagline={true} />
            <p className="text-slate-400 text-xs leading-relaxed">
              Professional, reliable, mobile-first plumbing services in Nairobi, Kenya. Leak repairs, drain unblocking, pipe repairs, bathroom and emergency plumbing.
            </p>
            <div className="text-xs text-sky-400 font-semibold">
              Official Website: {BUSINESS_INFO.website}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Leak Repairs & Detection</li>
              <li>• Blocked Drain Unblocking</li>
              <li>• PPR & Pipe Repairs</li>
              <li>• Water Heater Services</li>
              <li>• Bathroom & Kitchen Plumbing</li>
              <li>• Emergency 24/7 Plumbing</li>
            </ul>
          </div>

          {/* Col 3: Nairobi Estates Served */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Major Service Areas
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Kilimani, Westlands, Lavington, Karen, Kileleshwa, South C, Parklands, Lang'ata, Roysambu, Kasarani, Embakasi, Ruaka, Kiambu Road, Ngong Road, Upper Hill & Nairobi CBD.
            </p>
          </div>

          {/* Col 4: Direct Emergency Contacts */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Direct Emergency Contacts
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-white font-bold bg-slate-900 p-2.5 rounded-xl border border-slate-800 hover:border-sky-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 font-bold bg-slate-900 p-2.5 rounded-xl border border-slate-800 hover:border-emerald-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Urban Fix Plumbers ({BUSINESS_INFO.website}). All rights reserved. Open 24 Hours in Nairobi, Kenya.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
