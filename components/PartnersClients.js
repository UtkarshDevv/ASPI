'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2, FileCheck2, Building } from 'lucide-react';
import { realClients, clientTestimonials } from '../data/materialsData';
import { aspiInfo } from '../data/projectsData';

export default function PartnersClients() {
  return (
    <section id="partners" className="py-16 bg-white border-t border-linen/60">
      <div className="section-container">

        {/* ─── Real Clients - Automatic Horizontal Carousel (Slow Speed) ─── */}
        <div className="mb-16 overflow-hidden">
          <div className="text-center mb-8">
            <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
              Enterprise &amp; Multinational Partnerships
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-3">
              Trusted By Industry Leaders
            </h2>
            <p className="text-walnut/70 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed mb-2">
              Global conglomerates, multinational corporations, financial enterprises, and leading retail brands trust ASIPL for their high-stakes fit-out and engineering projects.
            </p>
            <p className="text-walnut/50 text-[11px]">
              Hover to pause
            </p>
          </div>

          {/* Automatic Carousel Track (Slower Speed) */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Soft edge gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Continuous Slower Marquee Track */}
            <div className="animate-marquee-slow gap-4">
              {[...realClients, ...realClients].map((c, idx) => (
                <div
                  key={`${c.name}-${idx}`}
                  className="group w-52 sm:w-60 flex-shrink-0 bg-cream/70 border border-linen p-4 sm:p-5 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-terracotta hover:bg-white hover:shadow-md cursor-default"
                >
                  <span className="font-display text-xs sm:text-sm font-bold text-charcoal group-hover:text-terracotta transition-colors duration-300 truncate w-full">
                    {c.name}
                  </span>
                  <span className="text-[10px] text-walnut/60 tracking-wider uppercase mt-1 truncate w-full">
                    {c.sector}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Recognitions & Certifications (Page 14 of PDF) ─── */}
        <div className="mb-16 bg-sand/30 border border-linen rounded-2xl p-6 sm:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-terracotta text-xs font-semibold tracking-[0.2em] uppercase mb-2">
              <Award size={16} />
              <span>Accreditation &amp; Compliance</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
              Recognitions &amp; Certifications
            </h3>
            <p className="text-walnut/70 text-xs sm:text-sm max-w-xl mx-auto mt-2">
              Our processes, on-site safety protocols, and project deliverables are formally certified by premier international auditing bodies and corporate clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aspiInfo.certifications.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white border border-linen/80 p-5 rounded-xl shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-terracotta bg-terracotta/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      {cert.code}
                    </span>
                    <ShieldCheck size={16} className="text-clay" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-charcoal leading-snug mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] font-medium text-walnut/60 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-walnut/75 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Client Testimonials / Commendations ─── */}
        <div>
          <div className="text-center mb-8">
            <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
              Verified Client Feedback
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal">
              Client Commendations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-cream border border-linen p-6 rounded-xl flex flex-col justify-between shadow-xs hover:border-clay/50 transition-colors"
              >
                <div>
                  <div className="text-clay text-2xl font-serif mb-2 leading-none">“</div>
                  <p className="text-xs sm:text-sm text-walnut/85 leading-relaxed italic mb-5">
                    {t.quote}
                  </p>
                </div>
                <div className="border-t border-linen/80 pt-4">
                  <p className="font-display text-xs sm:text-sm font-bold text-charcoal">
                    {t.client}
                  </p>
                  <p className="text-[11px] font-semibold text-terracotta mt-0.5">
                    {t.organization}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-walnut/50 mt-1">
                    <span>{t.location}</span>
                    <span className="font-medium text-clay">{t.scope}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
