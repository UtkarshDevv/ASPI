'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Phone, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ConsultationBookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    area: '',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync initialData when modal opens or initialData changes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: initialData?.projectType || '',
        area: initialData?.area || '',
        location: initialData?.location || '',
        message: initialData?.notes || '',
      });
      setSubmitted(false);
      setErrorMessage('');
      setIsSubmitting(false);
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          data.error || 'Failed to dispatch your enquiry. You can also contact us directly via WhatsApp or Phone.'
        );
      }
    } catch (err) {
      console.error('Enquiry submission error:', err);
      setErrorMessage(
        'Network error while sending enquiry. Please contact us directly via phone or WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = `Hello ASIPL Team,%0A%0AI would like to enquire about a project:%0A- Name: ${encodeURIComponent(formData.name || 'Not provided')}%0A- Phone: ${encodeURIComponent(formData.phone || 'Not provided')}%0A- Company: ${encodeURIComponent(formData.company || 'N/A')}%0A- Project Type: ${encodeURIComponent(formData.projectType || 'General Fit-Out')}%0A- Area: ${encodeURIComponent(formData.area || 'N/A')}%0A- Message: ${encodeURIComponent(formData.message || 'Please contact me.')}`;
    return `https://wa.me/919899075518?text=${text}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/60 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl rounded-sm border border-linen"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-linen">
          <div>
            <h2 className="font-display text-xl font-semibold text-charcoal">
              {submitted ? 'Enquiry Received' : 'Schedule a Consultation'}
            </h2>
            {!submitted && (
              <p className="text-xs text-walnut/60 mt-1">
                Book a workplace audit, discuss spatial requirements, or request a detailed BOQ.
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-linen hover:border-clay hover:bg-cream transition-colors rounded-xs"
            aria-label="Close modal"
          >
            <X size={16} className="text-walnut" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
              Thank You, {formData.name || 'Valued Client'}
            </h3>
            <p className="text-sm text-walnut/70 mb-6 max-w-md mx-auto leading-relaxed">
              Your project requirements have been dispatched directly to our workplace engineering and project delivery teams. We will connect with you within 24 hours.
            </p>

            <div className="p-4 bg-sand/40 border border-linen rounded-lg max-w-md mx-auto mb-8 text-left text-xs space-y-1.5 text-walnut/80">
              <div className="flex justify-between">
                <span className="font-semibold text-charcoal">Project Type:</span>
                <span>{formData.projectType || 'General Consultation'}</span>
              </div>
              {formData.area && (
                <div className="flex justify-between">
                  <span className="font-semibold text-charcoal">Approx Area:</span>
                  <span>{formData.area}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-semibold text-charcoal">Recipient:</span>
                <span className="font-mono text-terracotta">brijesh@aspi.in</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold">
              <a
                href="tel:+919899075518"
                className="flex items-center gap-2 text-charcoal hover:text-terracotta transition-colors px-4 py-2 border border-linen rounded"
              >
                <Phone size={14} className="text-terracotta" />
                <span>+91 98990 75518</span>
              </a>
              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors px-4 py-2 rounded"
              >
                <span>Follow up on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-800 text-xs">
                <div className="flex items-start gap-2 mb-2">
                  <AlertCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{errorMessage}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-red-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-red-700">Need instant response?</span>
                  <a
                    href={getWhatsAppEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] px-3 py-1.5 rounded transition-colors text-[11px]"
                  >
                    Send directly on WhatsApp
                  </a>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">
                  Full Name <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                  placeholder="e.g. Rajat Verma"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                  placeholder="e.g. Acme Corp India"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">
                  Email Address <span className="text-terracotta">*</span>
                </label>
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
                <label className="text-xs font-medium text-charcoal mb-1.5 block">
                  Phone Number <span className="text-terracotta">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">
                  Project Discipline / Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleChange('projectType', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                >
                  <option value="">Select Project Type…</option>
                  <option>Corporate Office</option>
                  <option>Commercial &amp; Retail Flagship</option>
                  <option>Residential Luxury &amp; Penthouse</option>
                  <option>Hospitality &amp; Club</option>
                  <option>Specialized Institutional</option>
                  <option>MEP &amp; HVAC Engineering</option>
                  <option>In-House Furniture Manufacturing</option>
                  <option>Civil Infrastructure &amp; Façade</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal mb-1.5 block">
                  Approx. Area / Capacity
                </label>
                <input
                  type="text"
                  value={formData.area}
                  onChange={(e) => handleChange('area', e.target.value)}
                  className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors"
                  placeholder="e.g. 25,000 sq.ft or 250 desks"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-medium text-charcoal mb-1.5 block">
                Project Scope / Key Requirements
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-cream border border-linen text-sm text-charcoal outline-none focus:border-clay transition-colors resize-none"
                placeholder="Mention desired handover timeline, city location, specific MEP or interior finishes needed…"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full justify-center py-3.5 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Loading…</span>
                </>
              ) : (
                <>
                  <span>Submit Project Enquiry</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-walnut/50 mt-3">
              Delivered directly to ASIPL Corporate Engineering Desk • Strict Client NDA Protected
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
