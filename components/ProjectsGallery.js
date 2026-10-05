'use client';

import React, { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const categories = ['All', ...new Set(projectsData.map((p) => p.categoryKey))];

const categoryLabels = {
  All: 'All Projects',
  corporate: 'Corporate',
  datacenter: 'Server Rooms',
  healthcare: 'Healthcare',
  banking: 'Banking',
  retail: 'Retail',
  industrial: 'Industrial',
};

export default function ProjectsGallery({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.categoryKey === activeFilter);

  return (
    <section id="projects" className="pt-8 pb-4 bg-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Portfolio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
            Selected Projects
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium tracking-wide uppercase transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-charcoal text-cream border-charcoal'
                  : 'bg-transparent text-walnut border-linen hover:border-clay'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white border border-linen overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-walnut px-3 py-1.5 tracking-wide">
                    {project.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <ArrowUpRight size={16} className="text-charcoal" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-walnut/60 mb-3">
                  <MapPin size={12} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-walnut/50 border-t border-linen pt-3">
                  <span>{project.area}</span>
                  <span>{project.timeline}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
