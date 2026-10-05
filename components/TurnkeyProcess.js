'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Search,
  PenTool,
  Rocket
} from 'lucide-react';
import { aspiMethodology } from '../data/materialsData';

export default function TurnkeyProcess({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index) => {
    switch(index) {
      case 0: return <Search size={24} className="text-[#C5A880]" />;
      case 1: return <PenTool size={24} className="text-[#C5A880]" />;
      case 2: return <Rocket size={24} className="text-[#C5A880]" />;
      default: return <Compass size={24} className="text-[#C5A880]" />;
    }
  };

  return (
    <section id="methodology" className="py-28 bg-[#0F0E0C] relative border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-arch">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Project Methodology</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] font-normal tracking-tight">
              The 3-Step SmartOffice Lifecycle
            </h2>
          </div>
          <p className="font-sans text-sm text-[#ADA69A] max-w-md font-light leading-relaxed">
            ASPI's structured three-stage methodology provides predictability, transparent milestone audits, and rigorous engineering compliance from discovery to occupancy.
          </p>
        </div>

        {/* 3 Master Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aspiMethodology.map((m, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={m.step}
                onClick={() => setActiveStep(idx)}
                className={`p-8 bg-[#151411] border cursor-pointer transition-all duration-400 flex flex-col justify-between ${
                  isActive
                    ? 'border-[#C5A880] bg-[#1C1B16] shadow-2xl ring-1 ring-[#C5A880]/50 -translate-y-1'
                    : 'border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.2)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.06)] mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl font-bold text-[#C5A880]">
                        {m.step}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold tracking-wider text-[#F4F1EA]">
                          {m.name}
                        </h3>
                        <span className="text-[10px] uppercase tracking-wider text-[#7E776C]">
                          {m.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-[#1F1E1A] border border-[rgba(255,255,255,0.08)]">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <p className="text-xs text-[#C5A880] font-medium mb-3">
                    {m.subtitle}
                  </p>

                  <p className="font-sans text-xs text-[#ADA69A] font-light leading-relaxed mb-6">
                    {m.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                    <span className="text-[9px] uppercase tracking-widest text-[#7E776C] block mb-1">
                      Key Deliverables:
                    </span>
                    {m.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#E5DDD8] font-light leading-relaxed">
                        <CheckCircle2 size={13} className="text-[#C5A880] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[10px] uppercase tracking-widest text-[#7E776C]">
                  <span>Stage 0{idx + 1} of 03</span>
                  <span className={isActive ? 'text-[#C5A880] font-semibold' : ''}>
                    {isActive ? 'Active Review' : 'Inspect Protocol'}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guaranteed Single-Team Accountability Banner */}
        <div className="mt-12 bg-[#171613] border border-[#C5A880]/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C5A880] flex items-center justify-center text-[#C5A880] flex-shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#F4F1EA]">Zero Hand-off Risk • Single Point of Accountability</h4>
              <p className="text-xs text-[#ADA69A] mt-0.5">From architectural engineering & statutory approvals to testing, commissioning and post-handover facility care.</p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="btn-luxury text-xs whitespace-nowrap"
          >
            <span>Request Methodology Dossier</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
