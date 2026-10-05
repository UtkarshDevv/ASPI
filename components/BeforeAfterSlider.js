'use client';

import React, { useState, useRef, useCallback } from 'react';
import { 
  Split, 
  ArrowLeftRight, 
  Check, 
  Hammer, 
  Sparkles,
  Layers
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const containerRef = useRef(null);

  const transformationProjects = [
    {
      id: "mayfair",
      title: "Mayfair Quadplex Penthouse",
      location: "London, UK",
      scope: "Gut demolition of 4 levels, structural steel reinforcement, and seamless travertine joinery.",
      beforeImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
      afterImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      beforeLabel: "Phase 01: Demolition & Steel Jacking",
      afterLabel: "Phase 06: Handover & Turnkey Interior"
    },
    {
      id: "villa",
      title: "Villa Solstice & Rock Terraces",
      location: "Côte d'Azur, France",
      scope: "Cliffside micro-piling, board-marked architectural concrete casting, and pocketing triple-glazing.",
      beforeImg: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
      afterImg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
      beforeLabel: "Phase 02: Rock Foundation & Framing",
      afterLabel: "Phase 06: Final Architectural Handover"
    },
    {
      id: "tribeca",
      title: "Tribeca Cast-Iron Sanctuary",
      location: "Manhattan, New York",
      scope: "Preservation of 1882 cast-iron columns, timber joist sistering, and museum-grade acoustic ceiling isolation.",
      beforeImg: "https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=1600&q=85",
      afterImg: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      beforeLabel: "Phase 01: Raw Industrial Shell",
      afterLabel: "Phase 06: Haute Interior Architecture"
    }
  ];

  const current = transformationProjects[activeProjectIdx];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-28 bg-[#141310] relative border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-arch">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Civil Framing to Haute Finish</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] font-normal tracking-tight">
              The Metamorphosis Slider
            </h2>
          </div>
          <p className="font-sans text-sm text-[#ADA69A] max-w-md font-light leading-relaxed">
            Drag the interactive handle to observe the transition from raw structural demolition and heavy civil framing to museum-grade interior execution.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8">
          {transformationProjects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setActiveProjectIdx(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] border transition-all ${
                activeProjectIdx === idx
                  ? 'bg-[#1D1C18] border-[#C5A880] text-[#C5A880]'
                  : 'bg-transparent border-[rgba(255,255,255,0.1)] text-[#7E776C] hover:text-[#ADA69A]'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Interactive Before-After Canvas */}
        <div 
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#0C0B0A] overflow-hidden select-none border border-[rgba(255,255,255,0.12)] cursor-ew-resize shadow-2xl"
        >
          {/* AFTER Image (Underneath) */}
          <img
            src={current.afterImg}
            alt="Finished Interior"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />

          {/* BEFORE Image (Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={current.beforeImg}
              alt="Raw Construction"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none filter grayscale-[40%]"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
            />
            {/* Dimming overlay on before image */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Vertical Divider Line */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-[#C5A880] shadow-[0_0_12px_rgba(197,168,128,0.8)] z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Center Handle Badge */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#171613] border-2 border-[#C5A880] flex items-center justify-center text-[#C5A880] shadow-2xl backdrop-blur-md">
              <ArrowLeftRight size={18} />
            </div>
          </div>

          {/* Phase Badge: Left (Before) */}
          <div className="absolute top-6 left-6 z-10 pointer-events-none">
            <span className="bg-[#0F0E0C]/85 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-[#ADA69A] px-3.5 py-1.5 border border-[rgba(255,255,255,0.12)] flex items-center gap-2">
              <Hammer size={12} className="text-[#C5A880]" />
              {current.beforeLabel}
            </span>
          </div>

          {/* Phase Badge: Right (After) */}
          <div className="absolute top-6 right-6 z-10 pointer-events-none">
            <span className="bg-[#0F0E0C]/85 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-[#C5A880] px-3.5 py-1.5 border border-[#C5A880]/40 flex items-center gap-2">
              <Sparkles size={12} className="text-[#C5A880]" />
              {current.afterLabel}
            </span>
          </div>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-6 inset-x-6 z-10 pointer-events-none hidden sm:flex items-center justify-between">
            <div className="bg-[#0F0E0C]/85 backdrop-blur-md p-3 border border-[rgba(255,255,255,0.08)] max-w-xl">
              <p className="text-xs text-[#E5DDD8] font-light">
                <strong className="text-[#C5A880] font-medium uppercase tracking-wider text-[10px] block mb-1">Civil & Fit-out Execution:</strong>
                {current.scope}
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#7E776C] bg-[#0F0E0C]/80 px-3 py-1.5">
              Drag left/right to inspect
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
