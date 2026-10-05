'use client';

import React, { useState, useMemo } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

const projectTypes = [
  { key: 'corporate', label: 'Corporate Office', rateRange: [3200, 4800] },
  { key: 'datacenter', label: 'Server Room / NOC', rateRange: [5500, 8500] },
  { key: 'healthcare', label: 'Healthcare Facility', rateRange: [4500, 7000] },
  { key: 'banking', label: 'Banking / Finance', rateRange: [4000, 6000] },
  { key: 'retail', label: 'Retail / Showroom', rateRange: [3500, 5500] },
  { key: 'industrial', label: 'Industrial Office', rateRange: [2200, 3800] },
];

const finishTiers = [
  { key: 'standard', label: 'Standard', multiplier: 1.0 },
  { key: 'premium', label: 'Premium', multiplier: 1.35 },
  { key: 'luxury', label: 'Luxury', multiplier: 1.8 },
];

const currencyRates = { INR: 1, USD: 0.012, GBP: 0.0095, EUR: 0.011 };
const currencySymbols = { INR: '₹', USD: '$', GBP: '£', EUR: '€' };

function formatCurrency(amount, currency) {
  const converted = amount * (currencyRates[currency] || 1);
  const symbol = currencySymbols[currency] || '₹';
  if (converted >= 10000000) return `${symbol}${(converted / 10000000).toFixed(2)} Cr`;
  if (converted >= 100000) return `${symbol}${(converted / 100000).toFixed(2)} L`;
  if (converted >= 1000) return `${symbol}${(converted / 1000).toFixed(1)}K`;
  return `${symbol}${Math.round(converted)}`;
}

export default function CostEstimator({ activeUnit = 'sqft', currency = 'INR', onOpenConsultationWithData }) {
  const [selectedType, setSelectedType] = useState('corporate');
  const [selectedFinish, setSelectedFinish] = useState('premium');
  const [area, setArea] = useState(15000);

  const estimate = useMemo(() => {
    const type = projectTypes.find((t) => t.key === selectedType);
    const finish = finishTiers.find((f) => f.key === selectedFinish);
    if (!type || !finish) return null;
    const avgRate = ((type.rateRange[0] + type.rateRange[1]) / 2) * finish.multiplier;
    const low = type.rateRange[0] * finish.multiplier * area;
    const high = type.rateRange[1] * finish.multiplier * area;
    const weeks = Math.round(8 + (area / 5000) * 2);
    return { low, high, avgRate, weeks };
  }, [selectedType, selectedFinish, area]);

  const handleConsult = () => {
    if (onOpenConsultationWithData) {
      const type = projectTypes.find((t) => t.key === selectedType);
      onOpenConsultationWithData({
        projectType: type?.label,
        area: `${area.toLocaleString()} sq.ft`,
        finish: selectedFinish,
        notes: `Auto-estimated range: ${formatCurrency(estimate.low, currency)} – ${formatCurrency(estimate.high, currency)}`,
      });
    }
  };

  return (
    <section id="estimator" className="py-14 bg-cream">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-terracotta text-xs font-semibold tracking-[0.25em] uppercase mb-2">
            Plan Your Budget
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-3">
            Project Estimator
          </h2>
          <p className="text-walnut/60 max-w-md mx-auto text-sm">
            Get a ballpark estimate for your workspace fit-out. Final pricing
            depends on site survey and detailed scope.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Inputs */}
          <div className="bg-white border border-linen p-8">
            {/* Project type */}
            <div className="mb-7">
              <label className="text-xs font-semibold tracking-[0.15em] uppercase text-charcoal mb-3 block">
                Project Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {projectTypes.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setSelectedType(t.key)}
                    className={`text-left px-4 py-3 text-xs font-medium tracking-wide border transition-all duration-300 ${
                      selectedType === t.key
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-walnut border-linen hover:border-clay'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish tier */}
            <div className="mb-7">
              <label className="text-xs font-semibold tracking-[0.15em] uppercase text-charcoal mb-3 block">
                Finish Level
              </label>
              <div className="flex gap-2">
                {finishTiers.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setSelectedFinish(f.key)}
                    className={`flex-1 text-center px-4 py-3 text-xs font-medium tracking-wide border transition-all duration-300 ${
                      selectedFinish === f.key
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-walnut border-linen hover:border-clay'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Area slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold tracking-[0.15em] uppercase text-charcoal">
                  Area (sq.ft)
                </label>
                <span className="text-sm font-semibold text-terracotta">
                  {area.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min={2000}
                max={100000}
                step={1000}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-charcoal"
              />
              <div className="flex justify-between text-[10px] text-walnut/40 mt-1">
                <span>2,000</span>
                <span>100,000</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="bg-charcoal text-cream p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-clay mb-6">Estimated Budget Range</p>
              {estimate && (
                <>
                  <div className="mb-8">
                    <p className="font-display text-3xl sm:text-4xl font-semibold">
                      {formatCurrency(estimate.low, currency)} – {formatCurrency(estimate.high, currency)}
                    </p>
                    <p className="text-sm text-cream/50 mt-2">
                      Approx. {formatCurrency(estimate.avgRate, currency)}/sq.ft · {estimate.weeks} week timeline
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-6 mb-6">
                    <div className="flex items-start gap-2 text-xs text-cream/40">
                      <HelpCircle size={14} className="mt-0.5 flex-shrink-0" />
                      <span>
                        Estimates include turnkey civil, MEP, interiors & compliance.
                        Excludes furniture, IT hardware & landlord approvals.
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button onClick={handleConsult} className="btn-primary bg-terracotta border-terracotta hover:bg-clay text-white w-full justify-center">
              Request Detailed Proposal
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
