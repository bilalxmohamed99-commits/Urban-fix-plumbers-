import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-2.5 px-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="w-full py-3 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 fill-white shrink-0 animate-bounce" />
          <span className="truncate">CALL NOW</span>
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 active:scale-95 transition-all text-center"
        >
          <MessageSquare className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};
