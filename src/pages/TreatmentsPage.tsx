import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TREATMENTS, getWhatsAppUrl } from '../data/dentHouseData';
import { Check, ShieldCheck, Sparkles, MessageCircle, ArrowRight, Sliders, Droplets, Heart } from 'lucide-react';

interface TreatmentsPageProps {
  onOpenConsultation: () => void;
  onSelectTreatmentForCalculator: (treatmentId: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onOpenConsultation,
  onSelectTreatmentForCalculator,
}) => {
  const navigate = useNavigate();

  const handleSelectTreatment = (treatmentId: string) => {
    onSelectTreatmentForCalculator(treatmentId);
    navigate('/calculator');
  };

  const aftercareHighlights = [
    {
      title: 'Enamel Preservation',
      desc: 'Conservative micro-preparation with zero laser over-drilling. Your natural tooth structure is respected.',
      icon: ShieldCheck,
    },
    {
      title: 'Stain Resistance',
      desc: 'High-density glazed ceramics and premium resins resist tea, coffee, and everyday staining.',
      icon: Droplets,
    },
    {
      title: 'Bite & Nightguard',
      desc: 'Custom-fitted protective nightguard provided with full sets to safeguard against clenching and micro-stress.',
      icon: Sparkles,
    },
    {
      title: 'Warranties & Follow-Up',
      desc: '5-year warranty on Porcelain Veneers, 1-year warranty on Composite Bonding with a complimentary 6-month checkup.',
      icon: Heart,
    },
  ];

  return (
    <div className="pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center max-w-3xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          SPECIALIZED COSMETIC TREATMENTS
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
          Composite Bonding & Porcelain Veneers
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Minimally invasive cosmetic dental treatments in Marrakech, engineered for natural aesthetics and delivered in just 2 days.
        </p>
      </div>

      {/* Main 2 Treatments Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TREATMENTS.map((t) => {
            const isVeneers = t.id === 'veneers';

            return (
              <div
                key={t.id}
                className={`rounded-2xl border p-8 shadow-xs flex flex-col justify-between ${
                  isVeneers
                    ? 'border-[#0284C7] bg-gradient-to-b from-sky-50/40 via-white to-white'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-100 text-[#0284C7]">
                      {t.highlight || '2-Day Transformation'}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {t.warranty}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#0284C7] font-semibold mt-1">
                    {t.subtitle} · 2 Days in Marrakech
                  </p>

                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {t.description}
                  </p>

                  {/* Pricing Overview */}
                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Package price (20 teeth)</span>
                      <span className="text-3xl font-extrabold text-slate-900 font-sans">
                        £{t.dentHousePriceGBP.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">UK Private Average</span>
                      <span className="text-xs font-bold text-emerald-600">
                        Up to 70% lower (£{t.ukPrivatePriceGBP.toLocaleString()})
                      </span>
                    </div>
                  </div>

                  {/* Key Clinical Features */}
                  <ul className="mt-6 space-y-2 text-xs text-slate-700">
                    {t.features.slice(0, 5).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleSelectTreatment(t.id)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sliders className="w-4 h-4" />
                    <span>Calculate in Calculator</span>
                  </button>
                  <a
                    href={getWhatsAppUrl(`Hello, I would like to request a free photo assessment for ${t.name} at Dent House Marrakech.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:text-[#0284C7] transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Photo Review</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal 4-Point Care & Longevity Grid */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              CLINICAL PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Quality & Aftercare Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aftercareHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-serif font-bold">Unsure which treatment fits your smile goals?</h3>
            <p className="text-xs text-slate-300">Our dentists review your smile photos on WhatsApp and recommend the best option.</p>
          </div>
          <a
            href={getWhatsAppUrl("Hello, I would like to request advice on whether Composite Bonding or Porcelain Veneers is better for me.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center gap-2 shadow-xs transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Ask a Clinical Question</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
