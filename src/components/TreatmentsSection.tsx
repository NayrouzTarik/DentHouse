import React from 'react';
import { TREATMENTS, TreatmentOption } from '../data/dentHouseData';
import { Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck, CalendarCheck } from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentId: string) => void;
  onOpenConsultation: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onOpenConsultation,
}) => {
  return (
    <section id="treatments" className="py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              SPECIALIZED COSMETIC TREATMENTS
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Two perfected options. One transparent price.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We focus exclusively on Composite Bonding and authentic Swiss E.max® Porcelain Veneers. Priced per complete set of 20 teeth (10 upper + 10 lower) with 2-day turnaround, zero hidden fees, and verified warranties.
          </p>
        </div>

        {/* 2 Treatment Cards Grid (Balanced 2-Column Desktop) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {TREATMENTS.map((t: TreatmentOption) => {
            const savings = t.ukPrivatePriceGBP - t.dentHousePriceGBP;
            const isVeneers = t.id === 'veneers';

            return (
              <div
                key={t.id}
                className={`relative flex flex-col justify-between rounded-2xl bg-white transition-all duration-200 ${
                  isVeneers
                    ? 'border-2 border-[#0284C7] shadow-xl ring-4 ring-sky-50'
                    : 'border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                } p-6 sm:p-8`}
              >
                {/* Popular Ribbon for Veneers */}
                {t.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0284C7] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.highlight}</span>
                  </div>
                )}

                <div>
                  {/* Title & Subtitle */}
                  <div className="pt-1">
                    <h3 className="text-2xl font-serif font-bold text-slate-900">
                      {t.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      {t.subtitle}
                    </p>
                  </div>

                  {/* Badges strip: Set of 20 & 2 Days */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md">
                      {t.teethCount}
                    </span>
                    <span className="bg-sky-50 text-[#0284C7] font-semibold px-2.5 py-1 rounded-md">
                      {t.duration}
                    </span>
                  </div>

                  {/* Warranty Strip on Card */}
                  <div className="mt-3 p-2.5 rounded-lg bg-sky-50/70 border border-sky-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-[#0284C7]">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{t.warranty}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {t.checkup}
                    </span>
                  </div>

                  {/* Price Block */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                        £{t.dentHousePriceGBP.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        fixed package
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="text-slate-500">
                        UK private clinic average:
                      </span>
                      <span className="line-through text-slate-400 font-semibold">
                        £{t.ukPrivatePriceGBP.toLocaleString()}
                      </span>
                    </div>

                    <div className="mt-2.5 p-2 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center justify-between">
                      <span>Your UK Patient Advantage:</span>
                      <span className="text-emerald-700 font-bold">
                        Save £{savings.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                    {t.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                  <button
                    onClick={() => onSelectTreatment(t.id)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isVeneers
                        ? 'bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-sm'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Configure in Plan Calculator</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2 px-3 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Free photo assessment for {t.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
