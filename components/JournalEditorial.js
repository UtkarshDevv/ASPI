'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowUpRight, 
  Clock, 
  Calendar,
  X,
  User
} from 'lucide-react';
import { journalData } from '../data/materialsData';

export default function JournalEditorial() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="editorial" className="py-28 bg-[#141310] relative border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-arch">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C5A880] mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span>Architectural Discourse</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F4F1EA] font-normal tracking-tight">
              Journal & Materiality Essays
            </h2>
          </div>
          <p className="font-sans text-sm text-[#ADA69A] max-w-md font-light leading-relaxed">
            Critical reflections on monumental stonework, acoustic serenity, and the structural engineering of heritage preservation.
          </p>
        </div>

        {/* Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journalData.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="arch-card-frame group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1A1915]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#0F0E0C]/85 px-2.5 py-1 text-[9px] uppercase tracking-widest text-[#C5A880] border border-white/10">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between bg-[#171613]">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-[#7E776C] uppercase tracking-wider mb-2">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl text-[#F4F1EA] font-normal leading-snug group-hover:text-[#C5A880] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#ADA69A] font-light mt-3 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-xs text-[#C5A880]">
                  <span className="text-[11px] uppercase tracking-wider">Read Full Essay</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div 
            className="relative bg-[#171613] border border-[rgba(255,255,255,0.12)] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-12 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-6 border-b border-[rgba(255,255,255,0.08)] mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880]">
                {selectedArticle.category} • {selectedArticle.readTime}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 flex items-center justify-center border border-[rgba(255,255,255,0.2)] text-[#ADA69A] hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA] font-normal leading-tight mb-4">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-[#ADA69A] pb-6 border-b border-[rgba(255,255,255,0.08)] mb-6">
              <User size={13} className="text-[#C5A880]" />
              <span>By {selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden mb-8 border border-white/10">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#D0C9BF] font-light leading-relaxed">
              <p className="font-serif text-lg italic text-[#F4F1EA]">
                {selectedArticle.excerpt}
              </p>
              <p>
                {selectedArticle.content}
              </p>
              <p>
                At ASPI, our approach to spatial construction is grounded in tectonic authenticity. Rather than hiding structural necessity behind synthetic veneers, we celebrate the raw mass of cross-cut Roman travertine, the grain relief of European fumed oak, and the honesty of patinated bronze profiles.
              </p>
              <p>
                Every aperture, shadow gap, and cantilever is engineered to channel natural illumination throughout the circadian cycle, producing interiors that feel grounding, transcendent, and profoundly enduring.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.08)] flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn-luxury text-xs py-3 px-6"
              >
                Close Essay
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
