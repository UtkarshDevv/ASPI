'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { aspiServices } from '../data/materialsData';

export default function DisciplinesServices({ onOpenConsultation }) {
  const [activeService, setActiveService] = useState(0);
  const service = aspiServices[activeService];

  return (
    <section id="services" className="py-14 bg-sand/50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            What We Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-3">
            Core Services
          </h2>
          <p className="text-walnut/60 max-w-xl mx-auto text-sm leading-relaxed">
            A single-team solution from concept to handover — engineering,
            interiors, compliance, and commissioning under one roof.
          </p>
        </div>

        {/* Tabs + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {aspiServices.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveService(i)}
                className={`text-left px-5 py-4 text-sm font-medium tracking-wide transition-all duration-300 border whitespace-nowrap ${
                  activeService === i
                    ? 'bg-white border-clay text-charcoal shadow-sm'
                    : 'bg-transparent border-transparent text-walnut/60 hover:text-charcoal hover:bg-white/50'
                }`}
              >
                <span className="text-terracotta text-xs font-bold mr-2">{s.number}</span>
                {s.title.length > 35 ? s.title.slice(0, 35) + '…' : s.title}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-8 bg-white border border-linen p-8 sm:p-10">
            <div className="flex items-start gap-3 mb-2">
              <span className="font-display text-4xl font-light text-clay/40">{service.number}</span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="text-sm italic text-terracotta mt-1">{service.tagline}</p>
              </div>
            </div>

            <p className="text-walnut/75 text-sm leading-relaxed my-6">{service.description}</p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal mb-4">
                Capabilities
              </h4>
              <ul className="space-y-3">
                {service.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-walnut/80">
                    <CheckCircle2 size={15} className="text-terracotta mt-0.5 flex-shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between border-t border-linen pt-6">
              <span className="bg-sand text-xs font-medium text-walnut px-4 py-2 tracking-wide">
                {service.highlightMetric}
              </span>
              <button onClick={onOpenConsultation} className="btn-outline text-xs py-2 px-4">
                Discuss Scope
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
