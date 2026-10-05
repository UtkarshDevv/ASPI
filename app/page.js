'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsGallery from '../components/ProjectsGallery';
import Gallery from '../components/Gallery';
import DisciplinesServices from '../components/DisciplinesServices';
import About from '../components/About';
import PartnersClients from '../components/PartnersClients';
import CostEstimator from '../components/CostEstimator';
import ProjectModal from '../components/ProjectModal';
import ConsultationBookingModal from '../components/ConsultationBookingModal';
import Footer from '../components/Footer';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenConsultation = (data = null) => {
    setConsultationPrefill(data);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationPrefill(null);
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main>
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToEstimator={() =>
            document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' })
          }
        />
        <ProjectsGallery onSelectProject={setSelectedProject} />
        <Gallery />
        <DisciplinesServices onOpenConsultation={() => handleOpenConsultation()} />
        <About />
        <PartnersClients />
        <CostEstimator
          onOpenConsultationWithData={(data) => handleOpenConsultation(data)}
        />
      </main>

      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenConsultation={() => {
            const p = selectedProject;
            setSelectedProject(null);
            handleOpenConsultation({
              projectType: p.category,
              location: p.location,
              area: p.area,
              notes: `Enquiry about: ${p.title}`,
            });
          }}
        />
      )}

      {/* Consultation booking modal */}
      <ConsultationBookingModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialData={consultationPrefill}
      />
    </div>
  );
}
