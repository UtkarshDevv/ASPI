'use client';

import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { label: 'Turnkey Interior Fit-Outs', href: '#services' },
    { label: 'MEP & HVAC Engineering', href: '#services' },
    { label: 'In-House Furniture Manufacturing', href: '#services' },
    { label: 'Smart CCTV & Access Control', href: '#services' },
    { label: 'Electrical & Substation Works', href: '#services' },
    { label: 'Green Building & Biophilic Design', href: '#services' },
    { label: 'Civil, Façade & Infrastructure', href: '#services' },
    { label: 'PMC & Project Governance', href: '#services' },
  ];

  const quickLinks = [
    { label: 'Featured Portfolio', href: '#projects' },
    { label: 'Live Site Gallery', href: '#gallery' },
    { label: 'Services & Capabilities', href: '#services' },
    { label: 'About ASIPL & Leadership', href: '#about' },
    { label: 'Enterprise Clients & Certifications', href: '#partners' },
    { label: 'Instant Cost Estimator', href: '#estimator' },
  ];

  const trustHighlights = [
    { label: '100+ Projects Completed', sub: 'Across Commercial & Retail' },
    { label: '10,00,000+ Sq.Ft Delivered', sub: 'Single-Window Execution' },
    { label: 'ISO 9001 & ISO 45001', sub: 'Dual International Audited' },
    { label: 'Pan-India 20+ Cities', sub: 'Rapid Mobilization Capability' },
  ];

  return (
    <footer id="contact" className="bg-charcoal text-cream/80 border-t border-linen/20">
      
      {/* ─── Top Trust & Metric Highlights Bar ─── */}
      <div className="border-b border-white/10 bg-black/25">
        <div className="section-container py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
            {trustHighlights.map((t, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-terracotta/15 border border-terracotta/30 flex items-center justify-center flex-shrink-0 text-clay">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-cream font-display leading-tight">
                    {t.label}
                  </p>
                  <p className="text-[10px] text-cream/50 mt-0.5 leading-tight">
                    {t.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Main Footer Content ─── */}
      <div className="section-container py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Col 1: Brand & Actions (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo & Identity */}
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1.5 shadow-md flex-shrink-0">
                <img
                  src="/images/ASIPL_Logo.jpeg"
                  alt="Art Space Interior (ASIPL) Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-display text-lg font-bold tracking-[0.16em] text-cream">
                  ASIPL
                </p>
                <p className="text-[10px] tracking-[0.12em] text-cream/70 uppercase">
                  Art Space Interior Pvt. Ltd.
                </p>
                <p className="text-[9px] text-terracotta tracking-wider uppercase font-semibold mt-0.5">
                  Design, Build &amp; Decore
                </p>
              </div>
            </div>

            <p className="text-xs text-cream/65 leading-relaxed mb-4 max-w-sm">
              Corporate turnkey fit-out specialist delivering integrated architectural design, in-house furniture manufacturing, and MEP engineering across India since 2018.
            </p>

            {/* Certification Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-cream/80 mb-5">
              <ShieldCheck size={14} className="text-clay flex-shrink-0" />
              <span className="font-medium">ISO 9001:2015 &amp; ISO 45001:2018</span>
            </div>

            {/* Direct Action Button */}
            <div className="pt-1">
              <button
                onClick={onOpenConsultation}
                className="btn-primary bg-terracotta border-terracotta text-white text-xs py-2.5 px-5 hover:bg-clay flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>

          {/* Col 2: Core Disciplines (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/70 mb-4 pb-2 border-b border-white/10">
              Core Disciplines
            </h4>
            <ul className="space-y-2">
              {servicesList.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs text-cream/60 hover:text-clay hover:translate-x-0.5 transition-all no-underline block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Fast Navigation (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/70 mb-4 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2 mb-5">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs text-cream/60 hover:text-clay hover:translate-x-0.5 transition-all no-underline block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-[10px] uppercase font-bold tracking-wider text-clay mb-1">
                Pan-India Reach
              </p>
              <p className="text-[11px] text-cream/50 leading-relaxed">
                Active project deployment across 20+ key commercial hubs.
              </p>
            </div>
          </div>

          {/* Col 4: Corporate Contact & Office (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/70 mb-4 pb-2 border-b border-white/10">
              Corporate Office &amp; Contact
            </h4>
            
            <div className="space-y-3 text-xs">
              
              {/* Gurugram Corporate HQ */}
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <p className="font-semibold text-cream text-[11px] flex items-center gap-1.5 mb-1">
                  <MapPin size={13} className="text-terracotta flex-shrink-0" />
                  <span>Gurugram (Corporate Head Office)</span>
                </p>
                <p className="text-cream/60 text-[11px] leading-relaxed pl-4">
                  301, MG Road, Sector-17, Gurugram, Haryana - 122001
                </p>
              </div>

              {/* Direct Communications - Separated Rows */}
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-2.5">
                {/* Mobile & WhatsApp */}
                <a
                  href="tel:+919899075518"
                  className="flex items-center gap-2.5 text-cream/75 hover:text-clay transition-colors no-underline text-xs group"
                >
                  <Phone size={13} className="text-clay flex-shrink-0 group-hover:text-terracotta transition-colors" />
                  <span className="font-medium text-cream/95 tracking-wide">+91 98990 75518</span>
                  <span className="text-[10px] text-cream/45 uppercase tracking-wider ml-auto">(Mobile / WA)</span>
                </a>

                {/* Office Landline */}
                <a
                  href="tel:+01244280260"
                  className="flex items-center gap-2.5 text-cream/75 hover:text-clay transition-colors no-underline text-xs group pt-1.5 border-t border-white/5"
                >
                  <Phone size={13} className="text-clay flex-shrink-0 group-hover:text-terracotta transition-colors" />
                  <span className="font-medium text-cream/95 tracking-wide">+0124-4280260</span>
                  <span className="text-[10px] text-cream/45 uppercase tracking-wider ml-auto">(Landline)</span>
                </a>

                {/* Direct Executive Email */}
                <a
                  href="mailto:brijesh@aspi.in"
                  className="flex items-center gap-2.5 text-cream/75 hover:text-clay transition-colors no-underline text-xs group pt-1.5 border-t border-white/5"
                >
                  <Mail size={13} className="text-clay flex-shrink-0 group-hover:text-terracotta transition-colors" />
                  <span className="font-medium text-cream/95 truncate">brijesh@aspi.in</span>
                  <span className="text-[10px] text-cream/45 uppercase tracking-wider ml-auto flex-shrink-0">(Director)</span>
                </a>

                {/* Projects & RFP Email */}
                <a
                  href="mailto:project@aspi.in"
                  className="flex items-center gap-2.5 text-cream/75 hover:text-clay transition-colors no-underline text-xs group pt-1.5 border-t border-white/5"
                >
                  <Mail size={13} className="text-clay flex-shrink-0 group-hover:text-terracotta transition-colors" />
                  <span className="font-medium text-cream/95 truncate">project@aspi.in</span>
                  <span className="text-[10px] text-cream/45 uppercase tracking-wider ml-auto flex-shrink-0">(Projects)</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Copyright & Utility Bar ─── */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-cream/50">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-center sm:text-left justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Art Space Interior Private Limited (ASIPL).</span>
            <span className="hidden sm:inline">•</span>
            <span>CIN &amp; MSME Registered</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emerald-400/90 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Pan-India Execution Ready
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-clay font-medium tracking-wide">www.aspi.in</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-7 h-7 rounded-md bg-white/10 hover:bg-terracotta text-cream hover:text-white flex items-center justify-center transition-all shadow-xs"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}


