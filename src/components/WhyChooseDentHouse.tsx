import React from 'react';
import {
  Heart,
  FileCheck,
  Plane,
  Sparkles,
  CheckCircle2,
  Gem,
  UserCheck,
  Car,
} from 'lucide-react';

interface WhyChooseProps {
  onOpenConsultation: () => void;
}

export const WhyChooseDentHouse: React.FC<WhyChooseProps> = ({ onOpenConsultation }) => {
  const cards = [
    {
      icon: Heart,
      title: 'Care That Starts With You',
      desc: 'We take time to listen to your personal goals, understand your facial symmetry, and curate options that look naturally beautiful—never artificial.',
    },
    {
      icon: FileCheck,
      title: 'Clear, Honest Pricing',
      desc: 'Know exactly what your complete set of 20 teeth, luxury resort stay, and private transfers cost before you board your flight. Zero surprises.',
    },
    {
      icon: Plane,
      title: 'Your Marrakech Visit',
      desc: 'From landing at Marrakech Menara to private chauffeur pick-ups and poolside relaxation, we coordinate every practical detail of your trip.',
    },
    {
      icon: Sparkles,
      title: 'Guidance Beyond Treatment',
      desc: 'Receive comprehensive UK dentist handover files, clinical photographs, night guard, and registered warranties (5 years for E.max, 1 year + 6-month check-up for bonding).',
    },
  ];

  const quickPillars = [
    {
      icon: Heart,
      title: 'Personalised Dental Care',
      desc: 'Bespoke 3D smile tailoring',
    },
    {
      icon: FileCheck,
      title: 'Clear Package Options',
      desc: 'All-inclusive fixed fees',
    },
    {
      icon: UserCheck,
      title: 'Support for UK Patients',
      desc: 'Direct English concierge',
    },
    {
      icon: Gem,
      title: 'Quality Materials',
      desc: 'Swiss Ivoclar E.max® lithium',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4 Quick Pillar Cards (matches mobile inspiration screen) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {quickPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-sky-100/80 p-5 sm:p-6 text-center shadow-xs hover:shadow-md hover:border-[#0284C7]/30 transition-all flex flex-col items-center justify-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {p.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why choose Dent House Marrakech heading & 4 deep reasons */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              THE DENT HOUSE PROMISE
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Why choose <span className="text-[#0284C7]">Dent House Marrakech?</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Designed from the ground up for UK patients who demand London clinical quality with 5-star holiday relaxation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-200 transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
