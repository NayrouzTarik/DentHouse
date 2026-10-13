import React, { useState } from 'react';
import { CLINIC_HIGHLIGHTS } from '../data/dentHouseData';
import {
  ShieldCheck,
  Award,
  Sparkles,
  HeartHandshake,
  Activity,
  FileCheck,
  Check,
  X,
  Microscope,
  Hotel,
} from 'lucide-react';

interface TheClinicSectionProps {
  onOpenConsultation: () => void;
}

export const TheClinicSection: React.FC<TheClinicSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="clinic" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              WORLD-CLASS MEDICAL STANDARDS
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            The Clinic: World-class dental excellence in Marrakech.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We don't compromise on materials or medical standards. From 3Shape Trios® wireless digital scanning to certified premium medical-grade porcelain and micro-hybrid composites, our clinical suite meets and exceeds top international benchmarks.
          </p>
        </div>

        {/* Hero Visual & Feature Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Clinic Photo & Inset Specs (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 relative group aspect-[16/10]">
              <img
                src="/images/clinic_interior_luxury_1791832453390.jpg"
                alt="Dent House Marrakech Luxury Cosmetic Dental Suite"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Inset Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-white/50 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Suite 01 · Guéliz Prestigious Medical District
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Trios® 3Shape Digital Intraoral Scanning Bay
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Guarantee Badge */}
            <div className="absolute -bottom-4 -right-2 hidden sm:flex items-center gap-2.5 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl border border-slate-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>5-Year Veneers / 1-Year Bonding Warranty</span>
            </div>
          </div>

          {/* Clinical Strengths (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLINIC_HIGHLIGHTS.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#0284C7]/40 hover:bg-sky-50/20 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center mb-3 shadow-xs">
                    {idx === 0 && <Microscope className="w-4 h-4" />}
                    {idx === 1 && <Award className="w-4 h-4" />}
                    {idx === 2 && <FileCheck className="w-4 h-4" />}
                    {idx === 3 && <HeartHandshake className="w-4 h-4" />}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between gap-4">
              <div className="text-xs text-slate-700">
                <span className="font-bold text-slate-900">Want to inspect our certified laboratory quality documentation?</span>
                <span className="block text-slate-500">Every patient receives authentic clinical registration and material certificates.</span>
              </div>
              <button
                onClick={onOpenConsultation}
                className="shrink-0 px-3.5 py-2 text-xs font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors cursor-pointer"
              >
                Request Lab Dossier
              </button>
            </div>
          </div>
        </div>

        {/* UK Harley Street vs Dent House Comparison Table */}
        <div className="mt-16 bg-slate-50/70 rounded-2xl border border-slate-200/80 p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              Direct Comparison: London Harley Street vs. Dent House Marrakech
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Honest facts for UK & international patients. No inflated pricing, no false hopes.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4">Feature / Standard</th>
                  <th className="py-3 px-4 text-slate-500 font-medium">UK Private (London / Regional)</th>
                  <th className="py-3 px-4 bg-sky-50/80 text-[#0284C7] font-bold rounded-t-xl">Dent House Marrakech</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 font-sans">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Materials Used</td>
                  <td className="py-3.5 px-4 text-slate-600">Porcelain Veneers or Composite</td>
                  <td className="py-3.5 px-4 bg-sky-50/80 font-bold text-slate-900">Certified Premium Medical-Grade Porcelain & Composites</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Set of 20 Veneers Cost</td>
                  <td className="py-3.5 px-4 text-slate-500 line-through">£14,000 – £16,500 (Treatment only)</td>
                  <td className="py-3.5 px-4 bg-sky-50/80 font-bold text-slate-900">£3,450 (Treatment + Palmeraie Stay + Transfers)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Laser Procedures</td>
                  <td className="py-3.5 px-4 text-slate-600">Often pushed with add-on fees</td>
                  <td className="py-3.5 px-4 bg-sky-50/80 font-bold text-slate-900">NO Laser Procedures (Preserves healthy tissue)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Turnaround Duration</td>
                  <td className="py-3.5 px-4 text-slate-600">3 to 4 weeks (3-4 separate appointments)</td>
                  <td className="py-3.5 px-4 bg-sky-50/80 font-bold text-[#0284C7]">2 Days (In-house master lab overnight)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Private Chauffeur Shuttles</td>
                  <td className="py-3.5 px-4 text-slate-400">None (Patient self-travel)</td>
                  <td className="py-3.5 px-4 bg-sky-50/80 font-bold text-slate-900">4 Private Chauffeur Transfers Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Palmeraie Accommodations</td>
                  <td className="py-3.5 px-4 text-slate-400">None</td>
                  <td className="py-3.5 px-4 bg-sky-50/80 font-bold text-emerald-700">Bring 2 Guests for FREE (Mid/Luxury) + 50% Off Extra Nights</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">Warranty Protection</td>
                  <td className="py-3.5 px-4 text-slate-600">Standard 1 to 2 years</td>
                  <td className="py-3.5 px-4 bg-sky-50/80 font-bold text-[#0284C7] rounded-b-xl">5-Year Veneers / 1-Year Bonding + 6-Mo Checkup</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[11px] text-slate-500 text-center leading-relaxed">
            *Illustrative fee benchmark based on private UK clinic quotes for 20 porcelain veneers (£700–£825/tooth). Packages include the accommodation and transfer services explicitly listed in your chosen offer. <strong>Flights are not included.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
