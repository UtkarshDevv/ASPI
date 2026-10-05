'use client';

import React, { useState } from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85',
    alt: 'Modern corporate office workspace',
    span: 'col-span-2 sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=85',
    alt: 'Executive boardroom with glass partitions',
    span: 'col-span-1 sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=85',
    alt: 'Collaborative open-plan engineering workspace',
    span: 'col-span-1 sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=85',
    alt: 'Mission-critical server room installation',
    span: 'col-span-1 sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
    alt: 'Luxury private banking lounge interior',
    span: 'col-span-1 sm:col-span-1 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=85',
    alt: 'Minimalist office reception area',
    span: 'col-span-1 sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=85',
    alt: 'Healthcare facility interior fit-out',
    span: 'col-span-1 sm:col-span-1 sm:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=600&q=85',
    alt: 'Retail experience center design',
    span: 'col-span-1 sm:col-span-1 sm:row-span-1',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="pt-6 pb-14 bg-sand/40">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Our Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-3">
            Project Gallery
          </h2>
          <p className="text-walnut/60 max-w-md mx-auto text-sm leading-relaxed px-2">
            A glimpse into the workspaces we've engineered and delivered across sectors.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 auto-rows-[130px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`${img.span} group relative overflow-hidden cursor-pointer`}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500 flex items-end">
                <p className="text-white text-xs font-medium px-4 pb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/70 backdrop-blur-md p-4 sm:p-6 animate-fade-in cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[75vh] object-contain mx-auto"
            />
            <p className="text-center text-white/90 text-xs sm:text-sm mt-3 px-2">{lightbox.alt}</p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-2 right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-white flex items-center justify-center shadow-lg text-charcoal text-base sm:text-lg font-light hover:bg-sand transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
