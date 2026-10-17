import React from 'react';
import {
  Heart,
  FileCheck,
  Plane,
  Sparkles,
  Gem,
  UserCheck,
  Percent,
  Car,
} from 'lucide-react';

interface WhyChooseProps {
  onOpenConsultation: () => void;
}

export const WhyChooseDentHouse: React.FC<WhyChooseProps> = ({ onOpenConsultation }) => {
  // 4 Top Quick Pillars from Page 8
  const quickPillars = [
    {
      icon: UserCheck,
      title: 'Qualified Dental Professionals',
      desc: 'Expert care from highly trained and experienced dentists, focused on your smile.',
    },
    {
      icon: Percent,
      title: 'Save up to 70% on EU/UK prices',
      desc: 'Premium smile transformations at a fraction of comparable EU & UK prices.',
    },
    {
      icon: Gem,
      title: 'Premium-Grade Materials',
      desc: 'Carefully selected materials for beautiful, natural-looking smiles that last.',
    },
    {
      icon: Plane,
      title: 'Seamless International Patient Experience',
      desc: 'Personalised support from your first enquiry to your visit in Marrakech.',
    },
  ];

  // 4 Detailed Experience Cards from Pages 9 & 10
  const detailedCards = [
    {
      icon: Heart,
      title: 'Personalised Smile Design',
      desc: 'Every smile is different. We take time to understand your goals, facial features, and preferences to create a smile that feels natural, balanced, and uniquely yours.',
    },
    {
      icon: FileCheck,
      title: 'Exceptional Value, Without Compromise',
      desc: 'Enjoy premium cosmetic dental treatments in Marrakech at prices that can be up to 70% lower than in the UK and Europe, with clear package pricing before you travel.',
    },
    {
      icon: Car,
      title: 'Your Smile, Your Marrakech Experience',
      desc: 'From private airport transfers to your accommodation and clinic visits, we coordinate the practical details so you can focus on your treatment and enjoy your stay.',
    },
    {
      icon: Sparkles,
      title: 'Quality Materials, Lasting Care',
      desc: 'We select quality dental materials with a focus on aesthetics, function, and natural-looking results, supported by treatment documentation, aftercare guidance, and applicable warranties.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/40 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header from Page 8 */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              WHY CHOOSE DENT HOUSE MARRAKECH
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            More Than Just a Smile
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We combine world-class dental care with an unforgettable experience, giving you the confidence to smile brighter.
          </p>
        </div>

        {/* Top 4 Quick Pillar Cards (Page 8) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {quickPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-sky-100/90 p-5 sm:p-6 text-center shadow-xs hover:shadow-md hover:border-[#0284C7]/30 transition-all flex flex-col items-center justify-start group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0 shadow-2xs">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4 Detailed Cards Grid (Pages 9 & 10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {detailedCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-200 transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 shadow-2xs">
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
