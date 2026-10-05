'use client';

import React, { useState } from 'react';
import { X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function ConsultationBookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: initialData?.projectType || '',
    area: initialData?.area || '',
    location: initialData?.location || '',
    message: initialData?.notes || '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/50 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-linen">
          <div>
            <h2 className="font-display text-xl font-semibold text-charcoal">
              {submitted ? 'Thank You' : 'Get in Touch'}
            </h2>
            {!submitted && (
              <p className="text-xs text-walnut/60 mt-1">Book a site audit or discuss your project scope.</p>
            )}
          </div>
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center border border-linen hover:border-clay transition-colors">
            <X size={16} className="text-walnut" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
              We&apos;ll be in touch soon
            </h3>
            <p className="text-sm text-walnut/70 mb-8 max-w-sm mx-auto">
              Our workplace engineering team will review your requirements and
              connect with you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-walnut/70">
              <a href="tel:+919899075518" className="flex items-center gap-2 no-underline text-walnut hover:text-terracotta transition-colors">
                <Phone size={14} /> +91 98990 75518
              </a>
              <a href="mailto:info@aspi.in" className="flex items-center gap-2 no-underline text-walnut hover:text-terracotta transition-colors">
                <Mail size={14} /> info@aspi.in
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                  placeholder="Organization name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleChange('projectType', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                >
                  <option value="">Select…</option>
                  <option>Corporate Office</option>
                  <option>Data Center / NOC</option>
                  <option>Healthcare Facility</option>
                  <option>Banking / Finance</option>
                  <option>Retail / Showroom</option>
                  <option>Industrial Office</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">Approx. Area</label>
                <input
                  type="text"
                  value={formData.area}
                  onChange={(e) => handleChange('area', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                  placeholder="e.g. 20,000 sq.ft"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-medium text-charcoal mb-1.5 block">Additional Details</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors resize-none"
                placeholder="Tell us about your project timeline, specific requirements…"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              Submit Enquiry
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
