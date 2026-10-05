'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { aspiInfo } from '../data/projectsData';

const heroImages = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=85',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
];

const stats = [
  { value: '1.2M+', label: 'Sq.Ft Delivered' },
  { value: '85+', label: 'Enterprise Clients' },
  { value: '100%', label: 'MEP Accuracy' },
  { value: '60-120', label: 'Day Turnkey Cycles' },
];

export default function Hero({ onOpenConsultation, onScrollToEstimator }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1500ms]"
          style={{
            opacity: currentImage === i ? 1 : 0,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Light overlay — strong enough to keep dark text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/90 to-cream/60" />

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-32 pb-20">
        <div className="max-w-2xl">
          <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            SmartOffice-First Turnkey Delivery
          </p>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold text-charcoal leading-[1.15] mb-5 sm:mb-6">
            Engineered
            <br />
            Workplaces,{' '}
            <span className="text-terracotta italic font-serif font-light">Delivered.</span>
          </h1>

          <p className="text-walnut/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg">
            Premium smart office fit-outs integrating MEP engineering,
            compliance management, and architectural interiors — from concept
            to handover.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16">
            <button onClick={onOpenConsultation} className="btn-primary w-full sm:w-auto justify-center">
              Book a Site Audit
              <ArrowRight size={16} />
            </button>
            <a href="#projects" className="btn-outline w-full sm:w-auto justify-center">
              View Projects
            </a>
          </div>

          {/* Stats strip - 2x2 on phone, 1x4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-linen pt-6 sm:pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-display text-xl sm:text-2xl font-semibold text-charcoal">{s.value}</span>
                <p className="text-[11px] sm:text-xs text-walnut/60 tracking-wide mt-0.5 sm:mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-walnut/40 hover:text-terracotta transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
