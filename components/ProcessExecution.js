'use client';

import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  MapPin, 
  Palette, 
  FileSpreadsheet, 
  FileSignature, 
  Rocket,
  CheckCircle2,
  Factory,
  Scale,
  ShieldCheck,
  TrendingUp,
  Globe2,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { aspiWorkflow, turnkeySteps, executionEdge, citiesPresence } from '../data/materialsData';

const workflowIcons = [
  ClipboardCheck,
  MapPin,
  Palette,
  FileSpreadsheet,
  FileSignature,
  Rocket
];

export default function ProcessExecution({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('workflow'); // 'workflow' | 'turnkey' | 'edge'

  return (
    <section id="process" className="py-16 bg-cream border-t border-linen/60">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Execution You Can Trust • Structured &amp; Predictable
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-3">
            Our Process &amp; Execution Edge
          </h2>
          <p className="text-walnut/70 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            With in-house manufacturing, continuous quality monitoring, and a unified global supply chain, we deliver projects on time, within budget, and with zero defects.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-sand/60 p-1 rounded-xl border border-linen">
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                activeTab === 'workflow'
                  ? 'bg-charcoal text-cream shadow-sm'
                  : 'text-walnut/70 hover:text-charcoal'
              }`}
            >
              6-Step Project Workflow
            </button>
            <button
              onClick={() => setActiveTab('turnkey')}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                activeTab === 'turnkey'
                  ? 'bg-charcoal text-cream shadow-sm'
                  : 'text-walnut/70 hover:text-charcoal'
              }`}
            >
              7-Step Turnkey Delivery
            </button>
            <button
              onClick={() => setActiveTab('edge')}
              className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                activeTab === 'edge'
                  ? 'bg-charcoal text-cream shadow-sm'
                  : 'text-walnut/70 hover:text-charcoal'
              }`}
            >
              Pricing &amp; Execution Edge
            </button>
          </div>
        </div>

        {/* Tab 1: 6-Step Project Workflow (Page 12 of PDF) */}
        {activeTab === 'workflow' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {aspiWorkflow.map((item, idx) => {
                const Icon = workflowIcons[idx] || ClipboardCheck;
                return (
                  <div
                    key={item.step}
                    className="bg-white border border-linen p-6 rounded-xl relative shadow-xs hover:border-terracotta/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-2xl font-bold text-clay/30">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-sand/80 flex items-center justify-center text-terracotta">
                        <Icon size={18} />
                      </div>
                    </div>
                    <h3 className="font-display text-base font-bold text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-walnut/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: 7-Step Turnkey Solution (Page 13 of PDF) */}
        {activeTab === 'turnkey' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {turnkeySteps.map((step, idx) => (
                <div
                  key={step.step}
                  className={`bg-white border border-linen p-5 rounded-xl flex flex-col justify-between shadow-xs hover:shadow-sm transition-all duration-300 ${
                    idx === turnkeySteps.length - 1 ? 'sm:col-span-2 lg:col-span-2 border-clay/60 bg-sand/20' : ''
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-bold text-terracotta tracking-wider uppercase bg-terracotta/10 px-2 py-0.5 rounded">
                      {step.step}
                    </span>
                    <h3 className="font-display text-base font-bold text-charcoal mt-2.5 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-walnut/75 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Execution Edge & Transparent Pricing (Pages 8-11 of PDF) */}
        {activeTab === 'edge' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {executionEdge.map((edge) => (
                <div
                  key={edge.title}
                  className="bg-white border border-linen p-5 rounded-xl shadow-xs hover:border-clay/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[10px] font-semibold text-clay bg-sand/80 px-2 py-0.5 rounded tracking-wide uppercase mb-3">
                      {edge.badge}
                    </span>
                    <h3 className="font-display text-base font-bold text-charcoal mb-2">
                      {edge.title}
                    </h3>
                    <p className="text-xs text-walnut/75 leading-relaxed">
                      {edge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Pan-India Presence (Page 6 of PDF) ─── */}
        <div className="mt-16 pt-12 border-t border-linen">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-terracotta text-xs font-semibold tracking-[0.2em] uppercase mb-1">
              <Globe2 size={16} />
              <span>National Reach</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Presence in All Prime Indian Cities
            </h3>
            <p className="text-walnut/70 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              With our Corporate Head Office in Gurugram, Regional Hubs in Hyderabad &amp; Bengaluru, and active execution teams nationwide:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
            {citiesPresence.map((city) => (
              <div
                key={city.name}
                className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                  city.isHQ
                    ? 'bg-charcoal text-cream border-charcoal shadow-sm'
                    : city.isRegional
                    ? 'bg-sand/70 text-charcoal border-clay/50 font-semibold'
                    : 'bg-white text-walnut border-linen/80 hover:border-clay/50'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${city.isHQ ? 'bg-terracotta' : city.isRegional ? 'bg-terracotta' : 'bg-clay/50'}`} />
                  <p className="text-xs font-bold">{city.name}</p>
                </div>
                <p className={`text-[9px] mt-0.5 ${city.isHQ ? 'text-cream/60' : 'text-walnut/50'}`}>
                  {city.state}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={onOpenConsultation}
              className="btn-outline text-xs py-2.5 px-6 inline-flex items-center gap-2"
            >
              Consult On-Site Execution in Your City
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
