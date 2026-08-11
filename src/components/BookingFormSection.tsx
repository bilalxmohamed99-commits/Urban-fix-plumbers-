import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, Clock, Calendar, MapPin } from 'lucide-react';
import { NAIROBI_AREAS, SERVICES, BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';
import { BookingFormData } from '../types';

interface BookingFormSectionProps {
  initialServiceId?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    location: NAIROBI_AREAS[0].name,
    problemType: initialServiceId 
      ? (SERVICES.find(s => s.id === initialServiceId)?.title || SERVICES[0].title)
      : SERVICES[0].title,
    preferredTime: 'As soon as possible (Emergency)',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    let msg = `Hi Urban Fix Plumbers, I submitted a service request:\n\n`;
    msg += `• Name: ${formData.fullName}\n`;
    msg += `• Phone: ${formData.phone}\n`;
    msg += `• Area: ${formData.location}, Nairobi\n`;
    msg += `• Issue: ${formData.problemType}\n`;
    msg += `• Preferred Time: ${formData.preferredTime}\n`;
    if (formData.details) {
      msg += `• Details: ${formData.details}\n`;
    }
    return getWhatsAppUrl(msg);
  };

  return (
    <section id="book" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Form Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-500/20">
              Online Booking
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Request a Plumbing Service
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Fill out the short form below and our team will contact you promptly.
            </p>
          </div>

          {submitted ? (
            <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-heading">
                  Request Received!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thanks! Your request has been received. Urban Fix Plumbers will contact you shortly on <span className="font-bold text-sky-400">{formData.phone || 'your phone number'}</span>.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <p className="text-xs text-slate-400">Need an immediate answer without waiting?</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={handleWhatsAppRedirect()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send details directly to WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Kamau"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0712 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Location / Area */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Location / Area in Nairobi *
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400"
                  >
                    {NAIROBI_AREAS.map((area) => (
                      <option key={area.name} value={area.name}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type of Plumbing Problem */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Type of Plumbing Problem *
                  </label>
                  <select
                    value={formData.problemType}
                    onChange={(e) => setFormData({ ...formData, problemType: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400"
                  >
                    {SERVICES.map((serv) => (
                      <option key={serv.id} value={serv.title}>
                        {serv.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Service Time */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Preferred Service Time
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400"
                >
                  <option value="As soon as possible (Emergency)">As soon as possible (Emergency)</option>
                  <option value="Today Morning">Today Morning</option>
                  <option value="Today Afternoon">Today Afternoon</option>
                  <option value="Today Evening">Today Evening</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="Weekend Appointment">Weekend Appointment</option>
                </select>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Additional Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your plumbing problem (e.g. pipe under kitchen sink leaking onto floor)..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-black text-base shadow-xl shadow-sky-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>REQUEST SERVICE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Secondary WhatsApp Link */}
              <div className="text-center pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Prefer WhatsApp? Message us directly →</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
