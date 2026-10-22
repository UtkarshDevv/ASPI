'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Clients', href: '#partners' },
    { label: 'Estimator', href: '#estimator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_#E8E2D8]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between py-3 sm:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3.5 no-underline group py-0.5">
          <img
            src="/images/ASIPL_Logo.jpeg"
            alt="Art Space Interior (ASIPL) Logo"
            className="h-12 sm:h-16 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold tracking-[0.18em] text-charcoal group-hover:text-terracotta transition-colors duration-300">
              ASIPL
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.14em] text-walnut/70 uppercase font-medium">
              Art Space Interior
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-walnut hover:text-terracotta transition-colors duration-300 no-underline"
            >
              {link.label}
            </a>
          ))}
          <button onClick={onOpenConsultation} className="btn-primary text-[11px] py-2.5 px-5">
            Get in Touch
            <ArrowUpRight size={14} />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-charcoal p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-linen px-6 pb-6 animate-fade-in">
          <nav className="flex flex-col gap-1 pt-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-walnut hover:text-terracotta py-3 border-b border-linen no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-5">
            <button
              onClick={() => { setMenuOpen(false); onOpenConsultation(); }}
              className="btn-primary w-full justify-center py-3.5 text-xs"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
