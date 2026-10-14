import React from 'react';
import { Check, X, ShieldCheck, Sparkles, Coffee, HeartPulse, Moon, RefreshCw, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';

interface AftercarePageProps {
  onOpenConsultation: () => void;
}

export const AftercarePage: React.FC<AftercarePageProps> = () => {
  return (
    <div className="pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center max-w-3xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          AFTERCARE & LONGEVITY GUIDE
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
          Protecting Your New Smile
        </h1>
        <p className="mt-3 text-base text-slate-600">
          How to care for Composite Bonding and E.max Porcelain Veneers, prevent coffee stains, and ensure your smile lasts 10 to 15+ years.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        {/* DOs and DON'Ts Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              The Essential DOs & DON'Ts
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Simple daily habits to keep your smile shining bright, stain-free, and chip-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* DOs Card */}
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/30 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-950">
                    What You MUST Do
                  </h3>
                  <span className="text-xs text-emerald-700">Best practices for smile preservation</span>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                  <div>
                    <strong className="text-slate-900">The "Water Swish" Rule:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Whenever you finish drinking coffee, tea, or red wine, swish your mouth with still water immediately. This flushes staining tannins before they adhere to resin margins.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                  <div>
                    <strong className="text-slate-900">Use Non-Abrasive Toothpaste (RDA &lt; 70):</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Use a gentle fluoride gel and soft-bristled brush. This prevents scratching the high-gloss ceramic glaze or composite polish.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                  <div>
                    <strong className="text-slate-900">Wear a Nightguard if You Grind:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Nighttime clenching exerts hundreds of pounds of pressure. A custom nightguard shields both bonding and veneers against sleep micro-fractures.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                  <div>
                    <strong className="text-slate-900">Free 6-Month Check-Up & Polish:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Attend your free 6-month check-up at Dent House (or at your home dentist) for a routine diamond polish to keep the gloss factory fresh.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* DON'Ts Card */}
            <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/30 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <X className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-rose-950">
                    What You MUST Avoid
                  </h3>
                  <span className="text-xs text-rose-700">Habits that risk chipping or staining</span>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✗</span>
                  <div>
                    <strong className="text-slate-900">DON'T Brush Immediately After Hot Coffee:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Coffee is acidic (pH ~4.9), which temporarily softens surface layers. Wait 25–30 minutes before brushing, or simply rinse with water.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✗</span>
                  <div>
                    <strong className="text-slate-900">DON'T Bite Hard Objects or Ice Cubes:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Never bite directly into ice, hard nutshells, unpopped popcorn kernels, or non-food objects like pens and bottle caps.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✗</span>
                  <div>
                    <strong className="text-slate-900">DON'T Use Harsh Whitening Powders or Charcoal:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Aggressive abrasive charcoal powders strip the polished glaze, creating microscopic ridges that trap future coffee stains.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✗</span>
                  <div>
                    <strong className="text-slate-900">DON'T Use Teeth as Tools:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Avoid tearing open plastic packaging, clothes tags, or tape with your front aesthetic teeth.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Treatment Longevity Comparison */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
              MATERIAL PERFORMANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Composite Bonding vs Porcelain Veneers
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Understanding the mechanical and stain-resistant differences between your choices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Composite Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    Composite Bonding
                  </h3>
                  <span className="text-xs text-slate-500">Direct micro-hybrid aesthetic resin</span>
                </div>
                <span className="text-xs font-bold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md">
                  1-Year Warranty
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start justify-between">
                  <span className="text-slate-500">Average Lifespan:</span>
                  <span className="font-bold text-slate-900">5 to 8 Years</span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-500">Stain Resistance:</span>
                  <span className="font-semibold text-amber-700">Moderate (Responds well to water swish)</span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-500">Enamel Preparation:</span>
                  <span className="font-semibold text-emerald-700">Zero Drilling of Healthy Enamel</span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-500">Repairability:</span>
                  <span className="font-bold text-slate-900">100% Chairside Repairable</span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-500">Checkup Policy:</span>
                  <span className="font-bold text-[#0284C7]">Complimentary at 6 Months</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl">
                <strong>Longevity Tip:</strong> During the first 48 hours, avoid intense dark spices (turmeric curry, balsamic vinegar) while resin cross-linking finishes. A simple annual diamond buff keeps them glossy indefinitely.
              </div>
            </div>

            {/* Porcelain Veneers Card */}
            <div className="rounded-2xl border-2 border-[#0284C7] bg-white p-6 sm:p-8 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    E.max Porcelain Veneers
                  </h3>
                  <span className="text-xs text-slate-500">Handcrafted medical-grade ceramic</span>
                </div>
                <span className="text-xs font-bold text-white bg-[#0284C7] px-2.5 py-1 rounded-md">
                  5-Year Warranty
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start justify-between">
                  <span className="text-slate-500">Average Lifespan:</span>
                  <span className="font-bold text-slate-900">15 to 20+ Years</span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-500">Stain Resistance:</span>
                  <span className="font-semibold text-emerald-700">100% Stain-Proof (Non-Porous Glaze)</span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-500">Enamel Preparation:</span>
                  <span className="font-semibold text-slate-900">Micro-conservative (sub-0.3mm)</span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-500">Material Hardness:</span>
                  <span className="font-bold text-slate-900">Harder than Natural Enamel</span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-500">International Handover:</span>
                  <span className="font-bold text-[#0284C7]">Full Digital Scans & Specs Provided</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed bg-sky-50/50 p-3.5 rounded-xl border border-sky-100">
                <strong>Longevity Tip:</strong> High-fired ceramic is completely impervious to black coffee and red wine. Just maintain healthy gum margins with daily flossing to protect the underlying root structure.
              </div>
            </div>
          </div>
        </div>

        {/* Warranty & Handover Assurance */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#0284C7]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  CLINICAL GUARANTEE & INTERNATIONAL HANDOVER
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                You leave Marrakech with complete medical documentation.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Before your departure transfer, we provide you with a full digital clinical pack — including shade matching codes, 3D intraoral scans, and laboratory certificates — so any dentist in the UK or worldwide has your complete dental records.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={getWhatsAppUrl("Hello, I would like to ask a question regarding your warranty and aftercare policy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Ask Clinical Team on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
