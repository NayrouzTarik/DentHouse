import React from 'react';
import { Link } from 'react-router-dom';
import { TREATMENTS, getWhatsAppUrl } from '../data/dentHouseData';
import { Check, ShieldCheck, Sparkles, MessageCircle, ArrowRight, Clock, HelpCircle } from 'lucide-react';

interface TreatmentsPageProps {
  onOpenConsultation: () => void;
  onSelectTreatmentForCalculator: (treatmentId: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = () => {
  return (
    <div className="pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center max-w-3xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          OUR SMILE SERVICES
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
          Cosmetic Dentistry in Marrakech
        </h1>
        <p className="mt-3 text-base text-slate-600">
          We focus on two premier aesthetic solutions: long-lasting E.max Porcelain Veneers and conservative Composite Bonding.
        </p>
      </div>

      {/* Main Treatments Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: E.max Porcelain Veneers */}
          <div className="rounded-2xl border-2 border-[#0284C7] bg-gradient-to-b from-sky-50/40 via-white to-white p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0284C7] text-white">
                  Top Choice for UK Patients
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  5-Year Warranty
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-4">
                E.max Porcelain Veneers
              </h2>
              <div className="flex items-center gap-2 mt-1 text-xs font-semibold text-[#0284C7]">
                <Clock className="w-3.5 h-3.5" />
                <span>4 Days in Marrakech</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">Ultra-thin handcrafted ceramic shields</span>
              </div>

              {/* Concise Explanation of Treatment */}
              <div className="mt-4 text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
                <p>
                  Hand-layered medical-grade lithium disilicate ceramic shields, individually fabricated in our digital lab to replicate the depth, light reflection, and translucency of natural enamel.
                </p>
                <p>
                  Engineered for maximum durability and 100% stain resistance against coffee, tea, and red wine.
                </p>
              </div>

              {/* What We Offer (High-level summary to invite questions) */}
              <div className="mt-5 p-4 rounded-xl bg-white border border-sky-100 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  What we offer with this treatment:
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>3D Intraoral digital scanning & shade simulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Conservative sub-0.3mm preparation (preserves natural tooth)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>4 days in Marrakech for custom digital lab crafting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>5-Year Comprehensive Warranty & digital records handover</span>
                  </li>
                </ul>
              </div>

              {/* Starting Price Only */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Full Smile Set</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500 font-medium">Starting from</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0284C7] font-sans">
                      £3,450
                    </span>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <span className="block font-medium">4 Days Treatment</span>
                  <span className="text-emerald-700 font-semibold">Save vs UK private</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl("Hello, I would like to ask questions about E.max Porcelain Veneers (4 days) at Dent House Marrakech.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Ask Us on WhatsApp</span>
              </a>
              <Link
                to="/packages"
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:text-[#0284C7] transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Composite Bonding */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                  Minimally Invasive Glow
                </span>
                <span className="text-xs font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  1-Year Warranty
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-4">
                Composite Bonding
              </h2>
              <div className="flex items-center gap-2 mt-1 text-xs font-semibold text-[#0284C7]">
                <Clock className="w-3.5 h-3.5" />
                <span>2 Days in Marrakech</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">Direct chairside aesthetic resin sculpting</span>
              </div>

              {/* Concise Explanation of Treatment */}
              <div className="mt-4 text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
                <p>
                  High-grade micro-hybrid resin carefully shaped directly over natural teeth by our cosmetic dentists to fix chips, close spacing, and smooth contours.
                </p>
                <p>
                  Requires zero drilling of your healthy enamel and is completed over a quick 48-hour trip to Marrakech.
                </p>
              </div>

              {/* What We Offer (High-level summary to invite questions) */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  What we offer with this treatment:
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Zero drilling or shaving of natural tooth enamel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Completed in 2 comfortable appointments (48 hours)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Custom multi-layer shade matching & high-gloss polish</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>1-Year Warranty with free 6-month check-up & review</span>
                  </li>
                </ul>
              </div>

              {/* Starting Price Only */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Full Smile Set</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500 font-medium">Starting from</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">
                      £1,850
                    </span>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <span className="block font-medium">2 Days Treatment</span>
                  <span className="text-emerald-700 font-semibold">Weekend friendly</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl("Hello, I would like to ask questions about Composite Bonding (2 days) at Dent House Marrakech.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Ask Us on WhatsApp</span>
              </a>
              <Link
                to="/packages"
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:text-[#0284C7] transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Action Prompt: Ask questions directly to help choose */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Not sure which treatment is best for your teeth?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold">
              Send us a photo on WhatsApp for a personalized recommendation.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Every smile is unique. Our clinical team will assess your enamel, alignment, and goals, then explain the best approach without any sales pressure.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello, I would like to send photos of my teeth and ask your dentists which treatment is best for me.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center gap-2 shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Send Photos on WhatsApp (+212 789-668454)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
