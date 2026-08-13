import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ShieldAlert, Clock } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';
import { UrbanFixLogo } from './UrbanFixLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'gallery' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Areas', id: 'areas' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 py-1.5 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-semibold border border-emerald-500/20 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {BUSINESS_INFO.hours}
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">Fast Plumbing Response in Nairobi</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-200 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800 py-3' : 'bg-slate-900 py-4 border-b border-slate-800/60'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
          >
            <UrbanFixLogo size="md" />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  activeSection === link.id
                    ? 'text-sky-400 bg-sky-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WHATSAPP</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-300 hover:to-sky-200 transition-all shadow-md shadow-sky-500/20 flex items-center gap-2 cursor-pointer transform active:scale-95"
            >
              <Phone className="w-4 h-4 fill-slate-900" />
              <span>CALL {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2.5 rounded-xl bg-sky-500 text-white font-bold text-xs flex items-center gap-1 shadow-md"
              aria-label="Call Plumber Now"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span className="font-bold">CALL</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 px-3 rounded-xl bg-sky-500 text-white font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Plumber</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-center text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'text-sky-400 bg-sky-500/10'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-slate-800 border border-slate-700 text-sky-400 font-bold text-sm text-center"
              >
                Book a Plumber Online
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
