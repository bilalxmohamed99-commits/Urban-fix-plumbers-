import React, { useState } from 'react';
import { Camera, CheckCircle2, Phone, MessageSquare, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/plumbingData';

import showerImg from '../assets/images/plumber_shower_hero_1786645453628.jpg';
import solarImg from '../assets/images/solar_water_heater_1786645465343.jpg';
import pumpImg from '../assets/images/booster_pump_system_1786645476478.jpg';
import tankImg from '../assets/images/water_storage_tank_1786645515700.jpg';
import bathroomImg from '../assets/images/bathroom_shower_plumbing_1786645527541.jpg';
import toiletImg from '../assets/images/toilet_wc_plumbing_1786645603065.jpg';
import pprImg from '../assets/images/ppr_pipe_welding_1786645614133.jpg';

interface ProjectPhoto {
  id: string;
  title: string;
  category: 'all' | 'showers' | 'heaters' | 'pumps' | 'tanks' | 'pipes';
  location: string;
  description: string;
  image: string;
  highlights: string[];
}

const PROJECTS: ProjectPhoto[] = [
  {
    id: '1',
    title: 'Rainfall Shower & Modern Bathroom Fitting',
    category: 'showers',
    location: 'Kilimani, Nairobi',
    description: 'Precision alignment of stainless steel rain shower column, concealed mixer valves, and chrome handheld spray.',
    image: showerImg,
    highlights: ['Concealed Mixer', 'Leak-Free Pressure Test', 'Chrome Finish'],
  },
  {
    id: '2',
    title: 'Solar Water Heating System on Tiled Roof',
    category: 'heaters',
    location: 'Karen, Nairobi',
    description: 'Complete rooftop solar thermal collector panel and insulated hot water storage cylinder with high-temperature PPR piping.',
    image: solarImg,
    highlights: ['Solar Collector Panel', 'Insulated Cylinder', 'Weatherproof PPR'],
  },
  {
    id: '3',
    title: 'Twin Pressure Booster Pump Installation',
    category: 'pumps',
    location: 'Westlands, Nairobi',
    description: 'Heavy duty automatic booster pump system with red accumulator expansion tank, pressure gauge, and brass isolating valves.',
    image: pumpImg,
    highlights: ['Automatic Controller', 'Constant High Pressure', 'Dual Isolation Valves'],
  },
  {
    id: '4',
    title: '5,000L Water Storage Tank & Piping',
    category: 'tanks',
    location: 'Lavington, Nairobi',
    description: 'Heavy-duty cylindrical water reservoir on reinforced concrete plinth with float switch, overflow, and garden supply bibcock tap.',
    image: tankImg,
    highlights: ['Solid Concrete Plinth', 'Heavy Duty Valves', 'Float Auto-Cutoff'],
  },
  {
    id: '5',
    title: 'Luxury Bathroom Shower & Waste Drainage',
    category: 'showers',
    location: 'Kileleshwa, Nairobi',
    description: 'Finished contemporary bathroom with overhead dark bronze shower fixture, ceramic toilet suite, and anti-odour floor drain.',
    image: bathroomImg,
    highlights: ['Anti-Odour Drain', 'Modern Bronze Column', 'Pristine Tilework'],
  },
  {
    id: '6',
    title: 'Modern Ceramic WC Suite Installation',
    category: 'pipes',
    location: 'South C, Nairobi',
    description: 'Dual-flush ceramic water closet installation with soft-close seat and stainless steel bidet health faucet.',
    image: toiletImg,
    highlights: ['Dual-Flush Economy', 'Water-Tight Seal', 'Bidet Spray Fitted'],
  },
  {
    id: '7',
    title: 'PPR Water Pipe Thermo-Fusion Rough-In',
    category: 'pipes',
    location: 'Kiambu Road, Nairobi',
    description: 'Plumbing rough-in with heat-fused green PPR pipes embedded in masonry wall for multi-storey residential project.',
    image: pprImg,
    highlights: ['Zero-Leak Fusion', 'Embedded Wall Sleeves', '20-Bar Pressure Test'],
  },
];

export const RealProjectsGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'showers' | 'heaters' | 'pumps' | 'tanks' | 'pipes'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectPhoto | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest border border-sky-500/20">
              <Camera className="w-4 h-4" />
              <span>Real Work in Nairobi</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
              Our Recent Plumbing Projects
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Authentic on-site work by our certified plumbers across Nairobi — from high-pressure booster pumps and solar water heaters to bathroom renovations and pipe welding.
            </p>
          </div>

          {/* Direct CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>CALL FOR A QUOTE</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'showers', label: 'Showers & Bathrooms' },
            { id: 'pumps', label: 'Booster Pumps' },
            { id: 'heaters', label: 'Solar Water Heaters' },
            { id: 'tanks', label: 'Water Storage Tanks' },
            { id: 'pipes', label: 'PPR & Pipe Work' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/60 transition-all duration-300 group flex flex-col cursor-pointer shadow-lg hover:shadow-sky-500/10"
            >
              {/* Photo */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/80 text-[11px] font-bold text-sky-400 flex items-center gap-1.5 shadow">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors font-heading">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {project.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-300 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Zoom / Direct Consultation */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-slate-900 border-2 border-sky-500/40 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-0 text-left">
              
              {/* Image Container */}
              <div className="relative h-72 sm:h-96 w-full bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/90 text-white flex items-center justify-center hover:bg-rose-600 transition-colors font-black text-sm cursor-pointer shadow-lg"
                >
                  ✕
                </button>
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-bold text-sky-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white font-heading">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs font-bold text-sky-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex-1 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-slate-950" />
                    <span>CALL {BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={getWhatsAppUrl(`Hi Urban Fix Plumbers, I saw your project "${selectedProject.title}" in ${selectedProject.location}. I need similar plumbing work done.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>WHATSAPP INQUIRY</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
