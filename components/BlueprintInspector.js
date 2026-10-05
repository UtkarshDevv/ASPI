'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  Eye, 
  MapPin, 
  FileText, 
  Sliders, 
  Compass, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { blueprintData } from '../data/materialsData';

export default function BlueprintInspector() {
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);
  const [activeLayer, setActiveLayer] = useState('architectural');
  const [selectedHotspot, setSelectedHotspot] = useState(blueprintData.levels[0].specHotspots[0]);

  const currentLevel = blueprintData.levels[activeLevelIdx];

  const layerOptions = [
    { key: 'architectural', label: 'Architectural Framing & Portals' },
    { key: 'structural', label: 'Civil Steel & Concrete Slabs' },
    { key: 'mep', label: 'MEP, HVAC & Circadian Lighting' },
    { key: 'finishes', label: 'Joinery, Stone & Millwork Finishes' },
  ];

  return (
    <section id="blueprints" className="py-28 bg-[#0C1017] relative border-b border-[rgba(255,255,255,0.08)]">
      <div className="max-w-arch">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Technical Drafting & CAD Workbench</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] font-normal tracking-tight">
              Interactive Blueprint & Spec Inspector
            </h2>
          </div>
          <p className="font-sans text-sm text-[#ADA69A] max-w-md font-light leading-relaxed">
            Examine our construction drawings down to the millimeter. Toggle engineering layers to reveal subterranean structural steel, acoustic decoupling, and circadian lighting loops.
          </p>
        </div>

        {/* Blueprint Workbench Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Canvas: Blueprint Grid Visualization with Hotspots */}
          <div className="lg:col-span-8 bg-[#090E14] border border-[#2D3D4E] p-6 sm:p-8 relative overflow-hidden bg-blueprint-pattern shadow-2xl">
            
            {/* Header toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#243343] mb-6 text-xs text-[#8DA0B3]">
              <div className="flex items-center gap-2">
                <Compass size={16} className="text-[#C5A880]" />
                <span className="font-mono uppercase tracking-widest text-[11px] text-[#D0E0EE]">
                  DWG // {currentLevel.id.toUpperCase()} • SCALE 1:20
                </span>
              </div>

              {/* Level switch buttons */}
              <div className="flex items-center gap-2">
                {blueprintData.levels.map((lvl, idx) => (
                  <button
                    key={lvl.id}
                    onClick={() => {
                      setActiveLevelIdx(idx);
                      setSelectedHotspot(lvl.specHotspots[0]);
                    }}
                    className={`px-3 py-1 text-[10px] uppercase font-mono tracking-wider transition-colors border ${
                      activeLevelIdx === idx
                        ? 'bg-[#1C2C3C] text-[#C5A880] border-[#C5A880]'
                        : 'text-[#8DA0B3] border-[#243343] hover:text-white'
                    }`}
                  >
                    {lvl.name.split('&')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Architectural Floor Plan Vector Drawing */}
            <div className="relative aspect-[16/10] w-full border border-[#263748] bg-[#070B10]/80 p-6 flex flex-col justify-between overflow-hidden">
              
              {/* Drafting Grid & Vector Lines Overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Structural Outer Boundary */}
                <rect x="5%" y="8%" width="90%" height="84%" fill="none" stroke="#4A6580" strokeWidth="2" strokeDasharray="4 2" />
                <rect x="8%" y="12%" width="84%" height="76%" fill="none" stroke="#2B435C" strokeWidth="1" />
                
                {/* Primary Wall Partitions */}
                <line x1="38%" y1="12%" x2="38%" y2="88%" stroke="#6086A8" strokeWidth="2" />
                <line x1="8%" y1="52%" x2="38%" y2="52%" stroke="#6086A8" strokeWidth="2" />
                <line x1="65%" y1="12%" x2="65%" y2="60%" stroke="#6086A8" strokeWidth="2" />
                <line x1="38%" y1="60%" x2="92%" y2="60%" stroke="#6086A8" strokeWidth="2" />

                {/* Door swings */}
                <path d="M 380 200 A 40 40 0 0 1 420 240" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="2 2" />
                <path d="M 650 300 A 50 50 0 0 1 700 350" fill="none" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="2 2" />

                {/* Dimension Guides */}
                <text x="50%" y="6%" fill="#738FA8" fontSize="10" fontFamily="monospace" textAnchor="middle">18,450 mm (Gross Span)</text>
                <text x="3%" y="50%" fill="#738FA8" fontSize="10" fontFamily="monospace" transform="rotate(-90 20,250)" textAnchor="middle">12,200 mm (Clear Height 3.8m)</text>
              </svg>

              {/* Interactive Hotspot Pins */}
              {currentLevel.specHotspots.map((spot, idx) => {
                const isSelected = selectedHotspot?.label === spot.label;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedHotspot(spot)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-transform ${
                      isSelected ? 'scale-125' : 'hover:scale-110'
                    }`}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    aria-label={spot.label}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-8 w-8 rounded-full opacity-75 ${
                        isSelected ? 'bg-[#C5A880]' : 'bg-[#4A729A]'
                      }`} />
                      <div className={`relative w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-mono font-bold shadow-lg border ${
                        isSelected
                          ? 'bg-[#C5A880] text-black border-white'
                          : 'bg-[#182635] text-[#C5A880] border-[#C5A880]/60'
                      }`}>
                        0{idx + 1}
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Bottom Drafting Stamp */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#627D96] pt-2">
                <span>PROJECT: ASPI-MAYFAIR-SPEC-REV.04</span>
                <span>STATUS: ISSUED FOR CONSTRUCTION</span>
              </div>

            </div>

            {/* Layer Filter Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#243343]">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#738FA8] mr-2">
                Drafting Layers:
              </span>
              {layerOptions.map((layer) => (
                <button
                  key={layer.key}
                  onClick={() => setActiveLayer(layer.key)}
                  className={`px-3 py-1.5 text-[11px] font-mono transition-all border ${
                    activeLayer === layer.key
                      ? 'bg-[#C5A880] text-[#0A0E14] font-semibold border-[#C5A880]'
                      : 'bg-[#111923] text-[#8DA0B3] border-[#203040] hover:border-[#37526E]'
                  }`}
                >
                  {layer.label}
                </button>
              ))}
            </div>

          </div>

          {/* Right Panel: Live Spec Callout & Layer Breakdown */}
          <div className="lg:col-span-4 bg-[#111822] border border-[#26374A] p-6 sm:p-8 space-y-6">
            
            {/* Active Layer Description */}
            <div>
              <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[#C5A880] pb-2 border-b border-[#203042]">
                <Layers size={13} />
                <span>Active Layer Analysis</span>
              </div>
              <h4 className="font-serif text-xl text-[#F4F1EA] font-normal mt-3">
                {layerOptions.find(l => l.key === activeLayer)?.label}
              </h4>
              <p className="text-xs text-[#9BB1C7] font-light leading-relaxed mt-2">
                {currentLevel.layers[activeLayer]}
              </p>
            </div>

            {/* Selected Hotspot Detailed Engineering Callout */}
            {selectedHotspot && (
              <div className="p-5 bg-[#0A0F16] border border-[#C5A880]/40 relative">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#203040]">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#C5A880]">
                    Inspected Detail Pin
                  </span>
                  <span className="text-[10px] font-mono text-[#728EA8]">
                    COORDS: X{selectedHotspot.x} / Y{selectedHotspot.y}
                  </span>
                </div>

                <h5 className="font-serif text-lg text-[#F4F1EA]">
                  {selectedHotspot.label}
                </h5>

                <p className="text-xs text-[#CAD9E8] font-light leading-relaxed mt-2">
                  {selectedHotspot.note}
                </p>

                <div className="mt-4 pt-3 border-t border-[#1F2E3E] flex items-center justify-between text-[10px] text-[#7E99B3]">
                  <span>Quality Assurance: Verified</span>
                  <CheckCircle2 size={13} className="text-[#C5A880]" />
                </div>
              </div>
            )}

            {/* Level Gross Specs */}
            <div className="space-y-2.5 text-xs text-[#8DA0B3] pt-4 border-t border-[#203042]">
              <div className="flex justify-between">
                <span>Target Plan Area:</span>
                <span className="text-white font-mono">{currentLevel.area}</span>
              </div>
              <div className="flex justify-between">
                <span>Acoustic Index:</span>
                <span className="text-[#C5A880] font-mono">Rw 58 dB + Ctr</span>
              </div>
              <div className="flex justify-between">
                <span>Fire Rating:</span>
                <span className="text-white font-mono">EI 120 Non-combustible</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
