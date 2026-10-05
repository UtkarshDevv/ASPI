'use client';

import React from 'react';
import { 
  Building2, 
  Server, 
  HeartPulse, 
  Landmark, 
  Sparkles, 
  Factory,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { industriesServed } from '../data/materialsData';

export default function IndustriesServed({ onOpenConsultation }) {
  const getSectorIcon = (id) => {
    switch (id) {
      case 'corporate-offices': return <Building2 size={26} className="text-[#C5A880]" />;
      case 'data-centers': return <Server size={26} className="text-[#C5A880]" />;
      case 'healthcare-institutions': return <HeartPulse size={26} className="text-[#C5A880]" />;
      case 'banks-financial': return <Landmark size={26} className="text-[#C5A880]" />;
      case 'retail-showrooms': return <Sparkles size={26} className="text-[#C5A880]" />;
      case 'industrial-offices': return <Factory size={26} className="text-[#C5A880]" />;
      default: return <Building2 size={26} className="text-[#C5A880]" />;
    }
  };

  return (
    <section id="industries" className="py-28 bg-[#0F0E0C] relative border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-arch">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Sectors of Operation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] font-normal tracking-tight">
              Industries & Workplaces Served
            </h2>
          </div>
          <p className="font-sans text-sm text-[#ADA69A] max-w-md font-light leading-relaxed">
            While corporate headquarters represent a core focus, we deliver engineered turnkey spaces across critical mission-specific sectors.
          </p>
        </div>

        {/* Sectors 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesServed.map((sector) => (
            <div
              key={sector.id}
              className="p-8 bg-[#151411] border border-[rgba(255,255,255,0.07)] hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.06)] mb-6">
                  <div className="p-3 bg-[#1D1C18] border border-[rgba(255,255,255,0.08)] group-hover:border-[#C5A880]/50 transition-colors">
                    {getSectorIcon(sector.id)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C5A880] font-medium px-2.5 py-1 bg-[#1A1915] border border-[#C5A880]/20">
                    {sector.highlight}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#F4F1EA] font-normal group-hover:text-[#C5A880] transition-colors leading-snug">
                  {sector.title}
                </h3>

                <p className="font-sans text-xs text-[#ADA69A] font-light leading-relaxed mt-4">
                  {sector.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#7E776C]">
                  Engineered Standard
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs text-[#C5A880] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Book Sector Audit</span>
                  <ArrowRight size={12} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
