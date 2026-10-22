'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Layout, 
  Cpu, 
  Armchair, 
  ShieldCheck, 
  Leaf, 
  Zap, 
  Trees, 
  HardHat,
  Building2,
  Store,
  Home,
  UtensilsCrossed,
  GraduationCap,
  Factory
} from 'lucide-react';
import { aspiServices, whoWeServe } from '../data/materialsData';

const iconMap = {
  Compass,
  Layout,
  Cpu,
  Armchair,
  ShieldCheck,
  Leaf,
  Zap,
  Trees,
  Road: HardHat
};

const sectorIcons = [
  Building2,
  Store,
  Home,
  UtensilsCrossed,
  GraduationCap,
  Factory
];

export default function DisciplinesServices({ onOpenConsultation }) {
  const [activeService, setActiveService] = useState(0);
  const service = aspiServices[activeService] || aspiServices[0];
  const ActiveIcon = iconMap[service.iconName] || Compass;

  return (
    <section id="services" className="py-16 bg-sand/40 border-t border-linen/60">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Comprehensive Offerings • Everything Under One Roof
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-3">
            What We Offer
          </h2>
          <p className="text-walnut/70 max-w-2xl mx-auto text-sm leading-relaxed">
            From interior fit-outs and in-house manufacturing to MEP engineering, smart security, and civil infrastructure.
          </p>
        </div>

        {/* Services Tabbed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
          
          {/* Service Buttons Navigation */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
            {aspiServices.map((s, i) => {
              const ItemIcon = iconMap[s.iconName] || Compass;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveService(i)}
                  className={`text-left px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border rounded-lg flex items-center gap-3 flex-shrink-0 lg:flex-shrink whitespace-nowrap lg:whitespace-normal ${
                    activeService === i
                      ? 'bg-white border-terracotta text-charcoal shadow-sm'
                      : 'bg-white/50 border-linen/70 text-walnut/70 hover:text-charcoal hover:bg-white'
                  }`}
                >
                  <ItemIcon size={16} className={activeService === i ? 'text-terracotta' : 'text-walnut/50'} />
                  <span className="font-semibold">{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Service Details Card */}
          <div className="lg:col-span-8 bg-white border border-linen rounded-xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-lg bg-sand/70 flex items-center justify-center flex-shrink-0 text-terracotta">
                  <ActiveIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-terracotta tracking-wider uppercase">Service {service.number}</span>
                    <span className="text-linen">•</span>
                    <span className="text-xs font-semibold text-walnut/50">ASIPL Specialized Scope</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal leading-snug mt-0.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-terracotta/90 italic mt-1 font-medium">{service.tagline}</p>
                </div>
              </div>

              <p className="text-walnut/80 text-sm leading-relaxed my-6 border-t border-linen pt-5">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal mb-4">
                  Key Capabilities &amp; Execution Highlights
                </h4>
                <ul className="space-y-2.5">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-walnut/80">
                      <CheckCircle2 size={16} className="text-terracotta mt-0.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-linen pt-6 gap-3">
              <span className="inline-flex items-center gap-1.5 bg-sand/80 text-xs font-semibold text-walnut px-3.5 py-1.5 rounded tracking-wide">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                {service.highlightMetric}
              </span>
              <button 
                onClick={onOpenConsultation} 
                className="btn-primary text-xs py-2.5 px-5 w-full sm:w-auto justify-center"
              >
                Inquire About {service.title}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ─── Who We Serve (Page 5) ─── */}
        <div className="border-t border-linen/80 pt-12">
          <div className="text-center mb-8">
            <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-1">
              Diverse Client Portfolio
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal">
              Who We Serve
            </h3>
            <p className="text-walnut/60 max-w-xl mx-auto text-xs sm:text-sm mt-2">
              We deliver interior and construction services for corporate buildings, commercial spaces, new homes, retail flagships, hospitality, and institutional hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoWeServe.map((item, idx) => {
              const SectorIcon = sectorIcons[idx] || Building2;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-linen p-5 rounded-lg hover:border-clay/60 hover:shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded bg-sand/80 flex items-center justify-center text-terracotta">
                      <SectorIcon size={16} />
                    </div>
                    <h4 className="font-display text-base font-bold text-charcoal">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-walnut/75 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-clay font-medium border-t border-linen/60 pt-2">
                    <span className="text-walnut/40 uppercase font-semibold text-[9px] mr-1">Proven In:</span>
                    {item.examples}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
