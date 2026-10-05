'use client';

import React, { useState } from 'react';
import {
  X, MapPin, Calendar, Ruler, ChevronRight, ChevronLeft, ArrowRight,
} from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenConsultation }) {
  const [currentImg, setCurrentImg] = useState(0);
  const images = project.gallery || [project.heroImage];

  const nextImg = () => setCurrentImg((p) => (p + 1) % images.length);
  const prevImg = () => setCurrentImg((p) => (p - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gallery */}
        <div className="relative h-72 sm:h-96 bg-sand overflow-hidden">
          <img
            src={images[currentImg]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {images.length > 1 && (
            <>
              <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 flex items-center justify-center shadow hover:bg-white transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 flex items-center justify-center shadow hover:bg-white transition-colors">
                <ChevronRight size={18} />
              </button>
            </>
          )}
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 bg-white/80 flex items-center justify-center shadow hover:bg-white transition-colors">
            <X size={16} />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 text-xs font-medium text-walnut px-3 py-1.5 tracking-wide">
              {project.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal mb-2">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-4 text-xs text-walnut/70 mb-6">
            <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {project.year}</span>
            <span className="flex items-center gap-1"><Ruler size={12} /> {project.area}</span>
          </div>

          <p className="text-walnut/80 leading-relaxed mb-8">{project.description}</p>

          {/* Scope */}
          {project.clientScope && (
            <div className="mb-8">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta mb-4">
                Scope of Work
              </h4>
              <ul className="space-y-2.5">
                {project.clientScope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-walnut/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-clay mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Materials */}
          {project.materialsUsed && (
            <div className="mb-8">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta mb-3">
                Materials & Systems
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.materialsUsed.map((m, i) => (
                  <span key={i} className="bg-sand text-xs text-walnut px-3 py-1.5 tracking-wide">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quick facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-cream/60 p-5 mb-8 border border-linen">
            <div>
              <p className="text-xs text-walnut/50 mb-1">Capacity</p>
              <p className="text-sm font-medium text-charcoal">{project.capacity}</p>
            </div>
            <div>
              <p className="text-xs text-walnut/50 mb-1">Timeline</p>
              <p className="text-sm font-medium text-charcoal">{project.timeline}</p>
            </div>
            <div>
              <p className="text-xs text-walnut/50 mb-1">MEP Scope</p>
              <p className="text-sm font-medium text-charcoal">{project.mepScope?.slice(0, 60)}…</p>
            </div>
          </div>

          <button onClick={onOpenConsultation} className="btn-primary">
            Enquire About This Project
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
