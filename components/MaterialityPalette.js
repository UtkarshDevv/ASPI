'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Layers, 
  ShieldCheck, 
  Leaf, 
  Info,
  Maximize2,
  Cpu,
  Volume2,
  Lightbulb,
  Boxes
} from 'lucide-react';
import { internationalMaterials } from '../data/materialsData';

export default function MaterialityPalette() {
  const [selectedMaterial, setSelectedMaterial] = useState(internationalMaterials[0]);

  const getCategoryIcon = (category) => {
    if (category.includes('Acoustics')) return <Volume2 size={13} className="text-[#C5A880]" />;
    if (category.includes('Lighting')) return <Lightbulb size={13} className="text-[#C5A880]" />;
    if (category.includes('Technology')) return <Cpu size={13} className="text-[#C5A880]" />;
    return <Boxes size={13} className="text-[#C5A880]" />;
  };

  return (
    <section id="materials" className="py-28 bg-[#141310] relative border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-arch">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Global Supply Chain & Materials</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] font-normal tracking-tight">
              International Products & Material Capabilities
            </h2>
          </div>
          <p className="font-sans text-sm text-[#ADA69A] max-w-md font-light leading-relaxed">
            We partner with leading global manufacturers to engineer connected workplaces—unifying Korean acoustic dampening, Japanese circadian lighting, and US composite solid surfaces.
          </p>
        </div>

        {/* Interactive Material Grid + Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Material Swatches Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {internationalMaterials.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`group relative p-4 bg-[#1A1915] border cursor-pointer transition-all duration-400 flex flex-col justify-between aspect-[3/4] overflow-hidden ${
                    isSelected
                      ? 'border-[#C5A880] shadow-2xl ring-1 ring-[#C5A880]/50'
                      : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)]'
                  }`}
                >
                  {/* Texture / Product Preview */}
                  <div className="relative w-full h-32 overflow-hidden bg-[#0F0E0C] mb-3">
                    <img
                      src={mat.image}
                      alt={mat.name}
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1915] via-transparent to-transparent" />
                    
                    {/* Category icon */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0F0E0C]/80 border border-white/10 text-[9px] uppercase tracking-wider text-[#C5A880] flex items-center gap-1">
                      {getCategoryIcon(mat.category)}
                      <span className="hidden sm:inline">{mat.category.split('&')[0]}</span>
                    </div>
                  </div>

                  {/* Name & Origin */}
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#7E776C] block">
                      {mat.origin}
                    </span>
                    <h3 className="font-serif text-sm font-medium text-[#F4F1EA] mt-0.5 line-clamp-2 group-hover:text-[#C5A880] transition-colors">
                      {mat.name}
                    </h3>
                  </div>

                  {/* Selection Indicator */}
                  <div className="mt-2 pt-2 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-[9px] uppercase tracking-wider text-[#7E776C]">
                    <span className="text-[#C5A880]">{mat.highlight}</span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#C5A880]' : 'bg-transparent border border-white/20'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Deep Material Technical Dossier */}
          <div className="lg:col-span-5 bg-[#171613] border border-[#C5A880]/30 p-8 sm:p-10 relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.08)] mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-medium flex items-center gap-1.5">
                {getCategoryIcon(selectedMaterial.category)}
                {selectedMaterial.category}
              </span>
              <span className="text-xs text-[#ADA69A] font-mono">
                {selectedMaterial.origin}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA] font-normal leading-snug">
              {selectedMaterial.name}
            </h3>

            {/* Performance Spec Banner */}
            <div className="mt-4 p-3.5 bg-[#1E1D19] border border-[#C5A880]/30 flex items-center gap-3">
              <ShieldCheck size={18} className="text-[#C5A880] flex-shrink-0" />
              <div>
                <span className="text-[9px] uppercase tracking-widest text-[#7E776C] block">Technical Benchmark</span>
                <span className="text-xs font-mono text-[#E5DDD8]">{selectedMaterial.specs}</span>
              </div>
            </div>

            {/* Detailed Description */}
            <p className="font-sans text-xs sm:text-sm text-[#ADA69A] font-light leading-relaxed mt-6">
              {selectedMaterial.description}
            </p>

            {/* Technical Specifications */}
            <div className="mt-6 space-y-3 text-xs border-t border-[rgba(255,255,255,0.08)] pt-4">
              <div className="flex items-start justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)]">
                <span className="text-[#7E776C] uppercase tracking-wider text-[10px]">Primary Applications:</span>
                <span className="text-[#F4F1EA] font-medium text-right max-w-[60%]">{selectedMaterial.applications}</span>
              </div>
              <div className="flex items-start justify-between py-1.5 border-b border-[rgba(255,255,255,0.05)]">
                <span className="text-[#7E776C] uppercase tracking-wider text-[10px]">Compliance:</span>
                <span className="text-[#C5A880] font-medium text-right">LEED / Low-VOC / Class-A Fire</span>
              </div>
            </div>

            {/* Request Material Specification Dossier */}
            <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)] bg-[#1B1A16] p-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#E5DDD8] block font-medium">
                  Material Spec Sheet & Sample Kit
                </span>
                <span className="text-[10px] text-[#7E776C]">Delivered to your facility or architect</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A880] border border-[#C5A880]/50 px-3 py-1 bg-[#201F1B]">
                Available
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
