import React, { useState } from 'react';
import { BEFORE_AFTER_PROJECTS } from '../data/plumbingData';
import { ArrowRight, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = BEFORE_AFTER_PROJECTS[activeProjectIndex];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Craftsmanship
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
            Plumbing Transformations
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            See how Urban Fix Plumbers converts urgent leaks, blocked lines, and damaged fixtures into clean, durable plumbing solutions.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BEFORE_AFTER_PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeProjectIndex === idx
                  ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Transformation Comparison View */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center font-heading">
            {currentProject.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* Before Box */}
            <div className="bg-slate-900/80 border border-rose-500/30 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-wider border border-rose-500/20 mb-3">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  BEFORE: {currentProject.beforeLabel}
                </div>
                <div className="rounded-xl overflow-hidden mb-3 h-52 bg-slate-950">
                  <img
                    src={currentProject.beforeImage}
                    alt={currentProject.beforeLabel}
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentProject.beforeDesc}
                </p>
              </div>
              <div className="text-xs text-rose-400 font-semibold pt-2 border-t border-slate-800">
                Problem: High risk of water damage & health hazard
              </div>
            </div>

            {/* After Box */}
            <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20 mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  AFTER: {currentProject.afterLabel}
                </div>
                <div className="rounded-xl overflow-hidden mb-3 h-52 bg-slate-950">
                  <img
                    src={currentProject.afterImage}
                    alt={currentProject.afterLabel}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentProject.afterDesc}
                </p>
              </div>
              <div className="text-xs text-emerald-400 font-semibold pt-2 border-t border-slate-800">
                Result: Guaranteed leak-free, clean & durable plumbing
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
