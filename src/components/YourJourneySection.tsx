import React, { useState } from 'react';
import { JOURNEY_STEPS } from '../data/dentHouseData';
import {
  Calendar,
  Clock,
  Car,
  Hotel,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Plane,
  Camera,
  ChevronRight,
  Sun,
  Coffee,
} from 'lucide-react';

interface YourJourneySectionProps {
  onOpenConsultation: () => void;
}

export const YourJourneySection: React.FC<YourJourneySectionProps> = ({ onOpenConsultation }) => {
  const [activeDay, setActiveDay] = useState<number>(0);

  const dayTabs = [
    { label: 'Day 1: Arrival & Smile Design', subtitle: '3D Scan, Color Selection & Preparation' },
    { label: 'Day 2: Fit, Bond & Reveal', subtitle: 'Swiss Porcelain Placement & Celebration' },
    { label: 'Day 3: Flexible UK Return', subtitle: 'Fly Home with 5-Year E.max / 1-Year Bonding Warranty' },
  ];

  return (
    <section id="journey" className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              THE 48-HOUR EXPERIENCE
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            How your 2-day Marrakech journey unfolds.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            No endless appointments. No 3-week waiting times. Thanks to our in-house master ceramists, your new radiant smile is completed in just 2 relaxing days.
          </p>
        </div>

        {/* 4 Transfers Guarantee Pill */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-sky-50/80 border border-sky-100 rounded-2xl px-5 py-3 text-xs sm:text-sm text-slate-700 font-medium shadow-xs">
            <span className="flex items-center gap-1.5 text-[#0284C7] font-bold">
              <Car className="w-4 h-4" /> 4 Private Chauffeur Transfers Included:
            </span>
            <span>Airport ➔ Hotel</span>
            <span className="text-slate-300">·</span>
            <span>Hotel ➔ Clinic</span>
            <span className="text-slate-300">·</span>
            <span>Clinic ➔ Hotel</span>
            <span className="text-slate-300">·</span>
            <span>Hotel ➔ Airport</span>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-4xl p-1.5 bg-slate-100/80 rounded-2xl">
            {dayTabs.map((tab, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveDay(idx)}
                className={`py-3.5 px-4 rounded-xl text-left transition-all cursor-pointer ${
                  activeDay === idx
                    ? 'bg-white text-slate-900 shadow-md ring-1 ring-slate-200/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <div className="text-xs sm:text-sm font-bold flex items-center justify-between">
                  <span>{tab.label}</span>
                  {activeDay === idx && (
                    <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                  )}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {tab.subtitle}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Timeline Display */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Timeline Details (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                  {JOURNEY_STEPS[activeDay].step} Protocol
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1">
                  {JOURNEY_STEPS[activeDay].title}
                </h3>
              </div>
              <span className="hidden sm:inline-block text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {JOURNEY_STEPS[activeDay].time}
              </span>
            </div>

            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              {JOURNEY_STEPS[activeDay].summary}
            </p>

            {/* Step-by-step points */}
            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-sky-100">
              {JOURNEY_STEPS[activeDay].points.map((pt, idx) => (
                <div key={idx} className="relative group">
                  {/* Point Marker */}
                  <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-[#0284C7] group-hover:scale-125 transition-transform" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="text-xs font-bold text-[#0284C7] font-mono tracking-tight shrink-0">
                      {pt.time}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {pt.label}
                    </h4>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Next Day CTA */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              {activeDay < 2 ? (
                <button
                  onClick={() => setActiveDay(activeDay + 1)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors cursor-pointer"
                >
                  <span>See Day {activeDay + 2} Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors cursor-pointer"
                >
                  <span>Ready to start? Check available travel dates</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Visual Experience Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contextual Visual according to active day */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 relative group">
              <img
                src={
                  activeDay === 0
                    ? '/src/assets/images/chauffeur_vip_transfer_1791832484434.jpg'
                    : activeDay === 1
                    ? '/src/assets/images/marrakech_palmeraie_resort_1791832462639.jpg'
                    : '/src/assets/images/smile_makeover_veneers_1791832473573.jpg'
                }
                alt="Marrakech Dental Journey Experience"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-300">
                  {activeDay === 0
                    ? 'VIP Welcome & Transfers'
                    : activeDay === 1
                    ? 'Palmeraie Resort Leisure & Recovery'
                    : 'Lifelong Natural Confidence'}
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white mt-1">
                  {activeDay === 0
                    ? 'Personal Chauffeur at Marrakech Menara'
                    : activeDay === 1
                    ? 'Relax by the Pool Between Appointments'
                    : '5-Year Guaranteed Swiss E.max Porcelain Smile'}
                </h4>
              </div>
            </div>

            {/* Travel Perks Bento Box */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                UK Patient Concierge Inclusions
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Sun className="w-4 h-4 text-amber-500 mb-1.5" />
                  <div className="font-bold text-slate-800">Warm Sun Year-Round</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">25°C-30°C pleasant Moroccan climate</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Coffee className="w-4 h-4 text-[#0284C7] mb-1.5" />
                  <div className="font-bold text-slate-800">No Language Barrier</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">100% Fluent English doctors & team</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Hotel className="w-4 h-4 text-emerald-600 mb-1.5" />
                  <div className="font-bold text-slate-800">Palmeraie Guest Perk</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">Bring 2 guests free (Mid & Luxury)</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-[#0284C7] mb-1.5" />
                  <div className="font-bold text-slate-800">5-Yr / 1-Yr Warranties</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">1 yr bonding (+6mo checkup) / 5 yr E.max</div>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#0284C7] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ask questions about travel dates & flights</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
