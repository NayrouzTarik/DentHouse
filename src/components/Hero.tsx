import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, Plane, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExplorePackages: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExplorePackages }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white pt-6 pb-16 lg:pt-10 lg:pb-24">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 -mr-40 -mt-20 w-96 h-96 rounded-full bg-sky-200/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-40 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top editorial kicker */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
            DENTAL CARE IN MARRAKECH
          </span>
          <span className="w-8 h-px bg-[#0284C7]/40" />
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            Welcoming UK & International Patients · Direct Flights from London & European Hubs
          </span>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Punchy, UK & International High-Converting Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.14] font-serif font-bold text-slate-900 tracking-tight text-balance">
              Premium Porcelain Veneers & Composite Bonding in Marrakech
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-xl">
              Explore world-class premium porcelain veneers and composite bonding packages in sunny Marrakech. Designed for UK & international patients, completed in just 2 days, combining clinical precision with luxury Palmeraie accommodation and private chauffeur transfers. <strong>Flights are not included.</strong>
            </p>

            {/* Quick Patient Trust Indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                <span>5-Yr Veneers / 1-Yr Bonding Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                <span>2-Day Clinical Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                <span>Palmeraie Stays & Transfers Included</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md font-semibold">
                <span>Flights Not Included</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Request Personalised Quote on WhatsApp</span>
              </button>

              <button
                onClick={onExplorePackages}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all cursor-pointer"
              >
                <span>Build your plan</span>
                <ArrowRight className="w-4 h-4 text-[#0284C7]" />
              </button>
            </div>

            {/* UK Advantage Callout Card */}
            <div className="mt-8 p-4 rounded-xl bg-sky-50/70 border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-[#0284C7] shrink-0 font-bold text-sm">
                  £
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Transparent Package Comparison
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Representative UK private quote for 20 veneers: <span className="line-through text-slate-400">£14,500</span> · Dent House package from <span className="font-semibold text-[#0284C7]">£3,450</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Includes treatment, accommodation & transfers. Compare total costs including flights before deciding.
                  </div>
                </div>
              </div>
              <div className="shrink-0 self-start sm:self-center">
                <span className="text-[11px] font-bold text-sky-800 bg-sky-100/90 px-2.5 py-1 rounded-md whitespace-nowrap">
                  Full 20-Teeth Package
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 aspect-[16/10] sm:aspect-[16/10]">
              <img
                src="/images/hero_denthouse_consultation_1791832441772.jpg"
                alt="Cosmetic dentist reviewing 3D digital smile scan with UK & international patient in Marrakech clinic"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

              {/* Inset Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-white/40 shadow-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" />
                  <div className="text-xs font-semibold text-slate-800">
                    Trios® 3Shape 3D Intraoral Suite
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Marrakech Clinic & Palmeraie
                </div>
              </div>
            </div>

            {/* Subtle floating trust badge */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-100 text-xs font-semibold text-slate-800">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Full Smile in 48 Hours</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars Strip below Hero (from Inspo) */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Understand your options</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Clear treatment choices for your exact smile goals. Full sets of 20 teeth, no hidden dental jargon.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Plan your 2-day visit</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                We coordinate luxury Palmeraie resort stays, 4 private chauffeur transfers, and an effortless weekend schedule.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Know what's included</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Fixed transparent pricing with zero surprise charges. All transfers, 3D scans, and aftercare guarantee included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
