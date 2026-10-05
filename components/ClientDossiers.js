'use client';

import React, { useState } from 'react';
import { 
  Quote, 
  MapPin, 
  Building2, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { clientTestimonials } from '../data/materialsData';

export default function ClientDossiers() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = clientTestimonials[activeIdx];

  return (
    <section className="py-28 bg-[#0F0E0C] relative border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-arch">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Enterprise Client Endorsements</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] font-normal tracking-tight">
              Client Testimonials & Delivered Case Records
            </h2>
          </div>
          <p className="font-sans text-sm text-[#ADA69A] max-w-md font-light leading-relaxed">
            Leading financial institutions, global technology leaders, and healthcare enterprises who partnered with ASPI for turnkey workplace execution.
          </p>
        </div>

        {/* Large Quote Feature Card */}
        <div className="bg-[#171613] border border-[rgba(255,255,255,0.1)] p-8 sm:p-14 relative overflow-hidden">
          
          <Quote className="text-[#C5A880]/15 w-24 h-24 absolute top-6 right-8 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            
            <p className="font-serif text-xl sm:text-3xl text-[#F4F1EA] font-light leading-relaxed italic mb-10">
              "{current.quote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[rgba(255,255,255,0.08)]">
              
              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.client}
                  className="w-14 h-14 object-cover rounded-full border border-[#C5A880]/40"
                />
                <div>
                  <h4 className="font-serif text-lg text-[#F4F1EA] font-medium">
                    {current.client}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#ADA69A]">
                    <span className="text-[#C5A880] font-medium">{current.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-[#C5A880]" />
                      {current.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Delivered Scope & Controls */}
              <div className="flex items-center gap-4">
                <div className="hidden sm:block text-right">
                  <span className="text-[9px] uppercase tracking-widest text-[#7E776C] block">Delivered Scope</span>
                  <span className="text-xs font-mono text-[#E5DDD8]">{current.scope}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveIdx((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length)}
                    className="w-10 h-10 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[#ADA69A] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setActiveIdx((prev) => (prev + 1) % clientTestimonials.length)}
                    className="w-10 h-10 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[#ADA69A] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
