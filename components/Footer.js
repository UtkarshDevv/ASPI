'use client';

import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  const links = [
    {
      title: 'Services',
      items: [
        'MEP Engineering',
        'Turnkey Fit-Outs',
        'Compliance Management',
        'Testing & Commissioning',
      ],
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', href: '#about' },
        { label: 'Leadership', href: '#about' },
        { label: 'Project Gallery', href: '#gallery' },
        { label: 'Clients & Partners', href: '#partners' },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-charcoal text-cream/80">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border-2 border-clay flex items-center justify-center">
                <span className="font-display text-clay text-sm font-bold tracking-widest">A</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold tracking-[0.2em] text-cream">ASPI</p>
                <p className="text-[10px] tracking-[0.14em] text-cream/40 uppercase">Engineering & Interiors</p>
              </div>
            </div>
            <p className="text-sm text-cream/50 leading-relaxed mb-6">
              Premium smart office fit-outs, workplace MEP engineering,
              and single-team turnkey delivery.
            </p>
            <button onClick={onOpenConsultation} className="btn-primary bg-terracotta border-terracotta text-white text-xs py-2.5 px-5 hover:bg-clay">
              Book Site Audit <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/60 mb-5">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((item, idx) => {
                  const label = typeof item === 'string' ? item : item.label;
                  const href = typeof item === 'object' ? item.href : '#services';
                  return (
                    <li key={idx}>
                      <a
                        href={href}
                        className="text-sm text-cream/40 hover:text-clay transition-colors no-underline"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/60 mb-5">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <a href="tel:+919899075518" className="flex items-center gap-3 text-cream/50 hover:text-clay transition-colors no-underline">
                <Phone size={14} className="text-clay flex-shrink-0" />
                +91 98990 75518
              </a>
              <a href="tel:+911244280260" className="flex items-center gap-3 text-cream/50 hover:text-clay transition-colors no-underline">
                <Phone size={14} className="text-clay flex-shrink-0" />
                +91 124 4280260
              </a>
              <a href="mailto:info@aspi.in" className="flex items-center gap-3 text-cream/50 hover:text-clay transition-colors no-underline">
                <Mail size={14} className="text-clay flex-shrink-0" />
                info@aspi.in
              </a>
              <div className="flex items-start gap-3 text-cream/50">
                <MapPin size={14} className="text-clay flex-shrink-0 mt-0.5" />
                <span>Business District, Gurugram / New Delhi (NCR), India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} ASPI Engineering & Interiors. All rights reserved.
          </p>
          <p className="text-xs text-cream/30">
            aspi.in
          </p>
        </div>
      </div>
    </footer>
  );
}
