'use client';

import React from 'react';
import { Award, Users, ShieldCheck, Target } from 'lucide-react';

const milestones = [
  { icon: Award, value: '15+', label: 'Years of Experience' },
  { icon: Users, value: '85+', label: 'Enterprise Clients' },
  { icon: ShieldCheck, value: '100%', label: 'Compliance Record' },
  { icon: Target, value: '1.2M+', label: 'Sq.Ft Delivered' },
];

export default function About() {
  return (
    <section id="about" className="py-14 bg-cream">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-8">
          <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Who We Are
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
            About ASPI
          </h2>
        </div>

        {/* Company story + CEO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Company copy */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-5 leading-snug">
              Engineering Workplaces{' '}
              <span className="text-terracotta italic font-serif font-light">That Perform</span>
            </h3>
            <div className="space-y-4 text-sm text-walnut/80 leading-relaxed">
              <p>
                ASPI Engineering &amp; Interiors is a single-team turnkey
                solution specializing in premium smart office fit-outs,
                workplace MEP engineering, statutory compliance management,
                and comprehensive project delivery across India.
              </p>
              <p>
                Founded with the conviction that mechanical, electrical, and
                plumbing engineering should never be an afterthought to
                aesthetics, ASPI pioneered the "SmartOffice-First" approach —
                where every ceiling plane, every lighting circuit, and every
                air distribution duct is coordinated in 3D BIM models before
                a single partition is erected on site.
              </p>
              <p>
                From Fortune 500 corporate campuses and mission-critical server
                rooms to healthcare facilities and luxury banking lounges,
                our multidisciplinary team manages the complete lifecycle —
                site audit, design coordination, procurement, execution,
                statutory clearances, testing &amp; commissioning, and
                white-glove handover.
              </p>
            </div>

            {/* Milestone stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-linen">
              {milestones.map((m) => (
                <div key={m.label} className="text-center p-2">
                  <m.icon size={18} className="text-terracotta mx-auto mb-1.5 sm:mb-2" />
                  <p className="font-display text-lg sm:text-xl font-semibold text-charcoal">{m.value}</p>
                  <p className="text-[10px] sm:text-[11px] text-walnut/50 mt-0.5 sm:mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CEO card */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[280px] sm:max-w-sm mb-6 sm:mb-8">
              {/* Portrait */}
              <div className="relative overflow-hidden bg-sand">
                <img
                  src="/images/ceo-portrat.jpg"
                  alt="Founder & CEO, ASPI Engineering & Interiors"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              {/* Accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta via-clay to-sand" />
            </div>

            <div className="max-w-sm">
              <p className="text-terracotta text-xs font-semibold tracking-[0.2em] uppercase mb-1">
                Founding Director
              </p>
              <h4 className="font-display text-xl font-semibold text-charcoal mb-3">
                Brijesh Mishra
              </h4>
              <p className="text-sm text-walnut/75 leading-relaxed mb-4">
                An interior strategist and project management expert with a vision to blend aesthetic design
                with robust MEP engineering. Brijesh co-founded ASPI to bridge the gap between conceptual designers and on-site contractors, offering a seamless, single-point turnkey solution.
              </p>
              <p className="text-sm text-walnut/75 leading-relaxed">
                Under his leadership, ASPI has grown into a premier design-build firm in Delhi NCR. By championing innovations like ASPI 360 Virtual Tours and maintaining strict quality control,
                he has successfully delivered tailored corporate, residential, and industrial spaces across the region.
              </p>
              <blockquote className="mt-6 pl-4 border-l-2 border-clay italic text-sm text-walnut/60 font-serif text-[15px]">
                "Great interior design is more than visual appeal — it is the intelligent
                harmonization of space, technology, and engineering."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
