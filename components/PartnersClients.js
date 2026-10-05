'use client';

import React from 'react';

const clients = [
  { name: 'Infosys', sector: 'IT Services' },
  { name: 'TCS', sector: 'IT Services' },
  { name: 'Wipro', sector: 'IT Services' },
  { name: 'HCL Tech', sector: 'Technology' },
  { name: 'HDFC Bank', sector: 'Banking' },
  { name: 'ICICI Bank', sector: 'Banking' },
  { name: 'Max Healthcare', sector: 'Healthcare' },
  { name: 'Bharti Airtel', sector: 'Telecom' },
  { name: 'Maruti Suzuki', sector: 'Automotive' },
  { name: 'Deloitte', sector: 'Consulting' },
  { name: 'Ernst & Young', sector: 'Consulting' },
  { name: 'Accenture', sector: 'Consulting' },
];

const partners = [
  { name: 'Panasonic', category: 'Lighting & Electrical' },
  { name: 'Daikin', category: 'HVAC Systems' },
  { name: 'Saint-Gobain', category: 'Glass & Partitions' },
  { name: 'Armstrong', category: 'Ceiling Systems' },
  { name: 'Schneider Electric', category: 'Power Distribution' },
  { name: 'Interface', category: 'Modular Flooring' },
  { name: 'Honeywell', category: 'Building Automation' },
  { name: 'Godrej', category: 'Furniture & Fixtures' },
];

const testimonials = [
  {
    quote: "ASPI delivered our 42,000 sq.ft headquarters in 90 days without a single MEP clash on site. Their SmartOffice integration created an extraordinary workplace.",
    client: 'Rajesh Malhotra',
    role: 'VP Real Estate & Workplace',
    company: 'Global FinTech Solutions',
  },
  {
    quote: "For our mission-critical NOC, failure was not an option. ASPI's rigorous testing & commissioning protocols gave us complete operational confidence.",
    client: 'Vikram Sengupta',
    role: 'Chief Infrastructure Officer',
    company: 'CloudNexus Data Systems',
  },
  {
    quote: "The acoustic isolation and compliance management for our private banking chambers were world-class. All statutory clearances delivered with zero delay.",
    client: 'Ananya Deshmukh',
    role: 'Head of Facilities',
    company: 'Apex Capital & Wealth Partners',
  },
];

export default function PartnersClients() {
  return (
    <section id="partners" className="py-14 bg-white">
      <div className="section-container">

        {/* ─── Clients ─── */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
              Trusted By
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-3">
              Our Clients
            </h2>
            <p className="text-walnut/60 max-w-md mx-auto text-sm">
              Enterprise organisations across sectors trust ASPI for their
              most demanding workplace projects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="group bg-cream border border-linen/60 px-3 sm:px-5 py-4 sm:py-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-clay/40 hover:shadow-sm"
              >
                <span className="font-display text-sm sm:text-base font-semibold text-charcoal group-hover:text-terracotta transition-colors duration-300">
                  {c.name}
                </span>
                <span className="text-[9px] sm:text-[10px] text-walnut/40 tracking-wider uppercase mt-1">
                  {c.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Testimonials ─── */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
              Client Words
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
              What They Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-cream/60 border border-linen p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-sm"
              >
                <div>
                  <div className="text-clay/30 text-5xl font-serif leading-none mb-3">"</div>
                  <p className="text-sm text-walnut/80 leading-relaxed italic font-serif text-[15px]">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-linen">
                  <p className="text-sm font-semibold text-charcoal">{t.client}</p>
                  <p className="text-xs text-walnut/50 mt-0.5">{t.role}</p>
                  <p className="text-xs text-terracotta mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Partners ─── */}
        <div>
          <div className="text-center mb-8">
            <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
              Technology Partners
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-3">
              Partners & Suppliers
            </h2>
            <p className="text-walnut/60 max-w-md mx-auto text-sm">
              We partner with world-leading brands for every layer of
              the workplace — from HVAC and lighting to flooring and automation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group border border-linen bg-cream/40 px-3 sm:px-5 py-3.5 sm:py-5 text-center transition-all duration-300 hover:bg-sand/60 hover:border-clay/30"
              >
                <span className="font-display text-sm sm:text-base font-semibold text-charcoal group-hover:text-terracotta transition-colors duration-300">
                  {p.name}
                </span>
                <p className="text-[9px] sm:text-[10px] text-walnut/40 tracking-wider uppercase mt-1">
                  {p.category}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
