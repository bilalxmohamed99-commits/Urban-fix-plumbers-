import React, { useState } from 'react';
import { AlertTriangle, Clock, MapPin, Send, MessageSquare, Phone, CheckCircle, ShieldAlert } from 'lucide-react';
import { NAIROBI_AREAS, BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';

export const EmergencyDiagnostic: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState('Burst Pipe / Heavy Leak');
  const [selectedArea, setSelectedArea] = useState('Kilimani');
  const [urgency, setUrgency] = useState<'immediate' | 'today' | 'flexible'>('immediate');
  const [additionalNote, setAdditionalNote] = useState('');

  const issuesList = [
    { label: 'Burst Pipe / Heavy Leak', priority: 'CRITICAL 24/7', time: '30-45 mins' },
    { label: 'Blocked Toilet / Sewer Backup', priority: 'CRITICAL 24/7', time: '30-45 mins' },
    { label: 'Leaking Faucet / Pipe Fitting', priority: 'HIGH', time: '1-2 Hours' },
    { label: 'No Hot Water / Shower Heater Broken', priority: 'MEDIUM', time: 'Same Day' },
    { label: 'Clogged Kitchen Sink / Drain', priority: 'HIGH', time: '1-2 Hours' },
    { label: 'Water Tank / Pump Installation', priority: 'SCHEDULED', time: 'Flexible' }
  ];

  const currentIssueData = issuesList.find(i => i.label === selectedIssue) || issuesList[0];

  const generateWhatsAppMsg = () => {
    let msg = `Hi Urban Fix Plumbers, I need help with a plumbing issue.\n\n`;
    msg += `• Issue: ${selectedIssue}\n`;
    msg += `• Location: ${selectedArea}, Nairobi\n`;
    msg += `• Urgency: ${urgency === 'immediate' ? 'URGENT EMERGENCY (Needs immediate response)' : urgency === 'today' ? 'Needed Today' : 'Flexible Schedule'}\n`;
    if (additionalNote) {
      msg += `• Details: ${additionalNote}\n`;
    }
    return getWhatsAppUrl(msg);
  };

  return (
    <section className="py-12 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-wider border border-rose-500/20">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                Quick Diagnostic Tool
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Identify Your Issue & Get Instant Assistance
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Need an immediate estimate on plumber arrival time? Select your problem and Nairobi location below to notify our on-call dispatch team directly.
              </p>

              {/* Status Box */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Estimated Dispatch Window:</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {currentIssueData.time}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Priority Rating:</span>
                  <span className="text-sky-400 font-bold">
                    {currentIssueData.priority}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column Form Selection */}
            <div className="lg:col-span-7 bg-slate-800/80 p-5 sm:p-6 rounded-2xl border border-slate-700/80 space-y-5">
              
              {/* Select Issue */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. What plumbing problem are you facing?
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {issuesList.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setSelectedIssue(item.label)}
                      className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        selectedIssue === item.label
                          ? 'bg-sky-500/20 border-sky-400 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <div className="font-bold">{item.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Location */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    2. Location in Nairobi
                  </label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400"
                  >
                    {NAIROBI_AREAS.map((area) => (
                      <option key={area.name} value={area.name}>
                        {area.name} {area.popular ? '(Rapid Dispatch)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    3. Required Response
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-sky-400"
                  >
                    <option value="immediate">Urgent Emergency (Right Now)</option>
                    <option value="today">Sometime Today</option>
                    <option value="flexible">Schedule for Later</option>
                  </select>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <input
                  type="text"
                  placeholder="Optional: Add short details (e.g., apartment floor or specific room)"
                  value={additionalNote}
                  onChange={(e) => setAdditionalNote(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
                />
              </div>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={generateWhatsAppMsg()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Issue via WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer text-center"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
