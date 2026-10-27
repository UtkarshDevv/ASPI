'use client';

import React from 'react';
import {
  Building2,
  Users,
  ShieldCheck,
  Package,
  Award,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';
import { aspiInfo } from '../data/projectsData';
import { teamExperts } from '../data/materialsData';

const milestones = [
  { icon: Building2, value: aspiInfo.stats.projectsDelivered, label: 'Projects Delivered', sub: 'Across Corporate, Retail & Living' },
  { icon: ShieldCheck, value: aspiInfo.stats.sqftCompleted, label: 'Sq. Ft. Completed', sub: 'Precision Engineered Spaces' },
  { icon: Users, value: aspiInfo.stats.inHouseDesigners, label: 'In-House Designers', sub: 'Creative & Technical Specialists' },
  { icon: Package, value: aspiInfo.stats.productsDelivered, label: 'Products Delivered', sub: 'In-House Manufacturing Facility' },
];

const WhatsAppIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="py-16 bg-cream border-t border-linen/60">
      <div className="section-container">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Welcome to ASIPL • Est. 11 September 2018
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
            About Art Space Interior Pvt. Ltd.
          </h2>
          <p className="text-walnut/70 max-w-2xl mx-auto text-sm mt-3 leading-relaxed">
            From design to in-house manufacturing and final installation, we provide complete interior &amp; construction solutions under one roof.
          </p>
        </div>

        {/* Company Story + CEO Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">

          {/* Left Column: Company Story & Vision */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="inline-block text-[11px] font-semibold text-terracotta bg-terracotta/10 px-3 py-1 rounded mb-3 tracking-wider uppercase">
                Our Journey
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal leading-snug">
                Design and Build{' '}
                <span className="text-terracotta italic font-serif font-light">You Can Trust</span>
              </h3>
            </div>

            <div className="space-y-4 text-sm text-walnut/80 leading-relaxed">
              <p>
                <strong>ASIPL (Art Space Interior Private Limited)</strong> began its journey on <strong>11 September 2018 in Gurugram</strong> with one mission: to transform spaces through innovative design, precise execution, and long-lasting impact. Since then, we have earned a distinguished reputation for delivering high-quality interior and construction solutions.
              </p>
              <p>
                With everything under one roof—from architectural spatial planning to in-house manufacturing, MEP engineering, and installation—we ensure a smooth, transparent client experience. Over the years, we have delivered <strong>100+ projects</strong> for leading multinational corporations, Fortune 500 enterprises, retail flagships, and luxury residences across the country.
              </p>
              <p>
                Our relentless focus on detail, round-the-clock on-site support, and dedicated factory production setup make Art Space Interior Pvt. Ltd. one of India's most dependable turnkey partners. With creative design experts and disciplined on-ground engineers, we turn raw spaces into functional, inspiring environments.
              </p>
            </div>

            {/* Core Values / Execution Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 bg-white border border-linen/80 rounded-lg">
                <CheckCircle2 size={18} className="text-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">In-House Manufacturing</h4>
                  <p className="text-[12px] text-walnut/70 mt-0.5">Own production facility ensuring strict quality control &amp; fair pricing.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white border border-linen/80 rounded-lg">
                <CheckCircle2 size={18} className="text-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">Dual ISO Certified</h4>
                  <p className="text-[12px] text-walnut/70 mt-0.5">ISO 9001:2015 (Quality) &amp; ISO 45001:2018 (Health &amp; Safety).</p>
                </div>
              </div>
            </div>

            {/* Key Milestone Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-linen">
              {milestones.map((m) => (
                <div key={m.label} className="bg-white border border-linen/70 p-3 sm:p-4 rounded-lg text-center shadow-xs">
                  <m.icon size={20} className="text-terracotta mx-auto mb-2" />
                  <p className="font-display text-xl sm:text-2xl font-bold text-charcoal">{m.value}</p>
                  <p className="text-[11px] font-semibold text-walnut/80 mt-1">{m.label}</p>
                  <p className="text-[9px] text-walnut/50 mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: CEO & Founder Profile & Message */}
          <div className="lg:col-span-5 bg-white border border-linen p-6 sm:p-8 rounded-xl shadow-sm relative">
            <div className="flex items-center gap-4 mb-5 pb-5 border-b border-linen">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-clay flex-shrink-0 shadow-sm bg-sand">
                <img
                  src="/images/ceo-portrait.jpg"
                  alt="Brijesh Mishra - CEO & Founder, ASIPL"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = '/images/ceo-tobeupload.jpg';
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold text-terracotta tracking-[0.2em] uppercase">
                  Leadership
                </span>
                <h4 className="font-display text-xl font-bold text-charcoal">
                  Brijesh Mishra
                </h4>
                <p className="text-xs text-walnut/60 font-medium">
                  CEO &amp; Founder, Art Space Interior Pvt. Ltd.
                </p>

                {/* Direct WhatsApp & Email Buttons */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <a
                    href="https://wa.me/919899075518?text=Hello%20ASIPL,%20I%20would%20like%20to%20enquire%20about%20interior%20fit-out%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-md text-xs font-semibold shadow-xs transition-all duration-200 no-underline"
                  >
                    <WhatsAppIcon size={13} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:brijesh@aspi.in"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sand/80 hover:bg-sand border border-linen/90 hover:border-clay/50 text-charcoal rounded-md text-xs font-semibold transition-all duration-200 no-underline"
                  >
                    <Mail size={12} className="text-terracotta" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <span className="text-4xl text-clay/30 font-serif absolute -top-4 -left-1">“</span>
              <p className="text-xs sm:text-sm text-walnut/85 italic leading-relaxed pt-2 pl-4">
                Thank you for spending time with ASIPL. Whatever we've achieved till today comes from one place: the people around us. Our team that puts its heart into every project, our partners who stand with us, and the clients who trust us.
              </p>
              <p className="text-xs sm:text-sm text-walnut/85 italic leading-relaxed mt-3 pl-4">
                At ASIPL, we focus on turning your ideas into real spaces you can be proud of.
              </p>
              <div className="mt-4 pl-4 border-l-2 border-terracotta">
                <p className="text-xs font-semibold text-charcoal">Warm regards,</p>
                <p className="text-xs font-bold text-terracotta">Brijesh Mishra</p>
                <p className="text-[10px] text-walnut/50 uppercase tracking-wider">CEO &amp; Founder</p>
              </div>
            </div>

            {/* Certifications preview badge */}
            <div className="mt-4 pt-4 border-t border-linen flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-terracotta" />
                <span className="text-[11px] font-semibold text-charcoal">ISO 9001 &amp; ISO 45001</span>
              </div>
              <span className="text-[10px] text-walnut/60 uppercase tracking-wider">MMS &amp; IAF Certified</span>
            </div>
          </div>
        </div>

        {/* ─── Meet Our Experts - Automatic Horizontal Carousel ─── */}
        <div className="mt-14 pt-12 border-t border-linen overflow-hidden">
          <div className="text-center mb-8">
            <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-1">
              Leadership &amp; Execution Team
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal">
              Meet Our Experts
            </h3>
            <p className="text-walnut/60 text-xs mt-1">
              Hover to pause
            </p>
          </div>

          {/* Automatic Carousel Track */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Soft edge gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

            {/* Continuous Marquee Track */}
            <div className="animate-marquee gap-4">
              {[...teamExperts, ...teamExperts].map((member, idx) => (
                <div
                  key={`${member.name}-${idx}`}
                  className="w-56 sm:w-64 flex-shrink-0 bg-white border border-linen p-4 sm:p-5 rounded-xl hover:border-terracotta hover:shadow-md transition-all duration-300 flex flex-col justify-center"
                >
                  <h4 className="font-display text-sm sm:text-base font-bold text-charcoal leading-snug truncate">
                    {member.name}
                  </h4>
                  <p className="text-xs text-terracotta font-medium mt-1 truncate">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
