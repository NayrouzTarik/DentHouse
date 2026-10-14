import React from 'react';
import { Check, X, ShieldCheck, Sparkles, MessageCircle, ArrowRight, Award, CalendarCheck, Clock, FileText } from 'lucide-react';
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
          AFTERCARE & OFFICIAL CLINICAL WARRANTIES
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
          Smile Longevity & Warranty
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Complete warranty protection on every smile makeover, plus clinical guidelines on how to care for your teeth and prevent stains.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        {/* OFFICIAL WARRANTIES SECTION (Dedicated & Front-and-Center) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
              PEACE OF MIND GUARANTEE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Official Dent House Warranties
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Clear, written guarantees backed by international laboratory certificates and digital handover files.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* E.max 5-Year Warranty Card */}
            <div className="rounded-2xl border-2 border-[#0284C7] bg-gradient-to-b from-sky-50/60 to-white p-7 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-xs">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900">
                        E.max Porcelain Veneers
                      </h3>
                      <span className="text-xs text-slate-500">Medical-Grade Ceramic Shields (4 Days)</span>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-[#0284C7] bg-sky-100/80 px-3 py-1.5 rounded-full border border-sky-200">
                    5-Year Warranty
                  </span>
                </div>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">5-Year Comprehensive Replacement Guarantee:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        If an E.max ceramic veneer chips, cracks, or debonds under normal biting conditions, we replace or repair it free of charge under warranty.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Official Laboratory Certificate of Authenticity:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        You receive certified laboratory documentation confirming genuine medical-grade E.max lithium disilicate, including exact ceramic ingot codes and shade registrations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Expected Lifespan: 15–20+ Years:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Porcelain is non-porous and harder than natural enamel. It is 100% stain-proof against black coffee, red wine, and everyday foods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Certified by Dent House Marrakech</span>
                <a
                  href={getWhatsAppUrl("Hello, I would like to ask about the 5-Year E.max Porcelain Veneers warranty terms.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1"
                >
                  <span>Ask on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Composite Bonding 1-Year Warranty & 6-Month Checkup Card */}
            <div className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-b from-emerald-50/50 to-white p-7 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900">
                        Composite Bonding
                      </h3>
                      <span className="text-xs text-slate-500">Direct Chairside Aesthetic Sculpting (2 Days)</span>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200">
                    1-Year Warranty
                  </span>
                </div>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">1-Year Full Coverage Guarantee:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Covers any edge irregularities, resin adjustments, or bonding touch-ups within your first full year.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CalendarCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">Complimentary 6-Month Check-Up & Diamond Polish:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Free 6-month checkup appointment to review your bite, polish the resin surface with diamond paste, and restore that day-one high gloss shine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">100% Chairside Repairable:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Because composite is shaped directly over natural enamel with zero drilling, it can be adjusted, re-polished, or refreshed in minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Free 6-Month Check-Up Included</span>
                <a
                  href={getWhatsAppUrl("Hello, I would like to ask about the 1-Year Composite Bonding warranty and 6-month check-up.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <span>Ask on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DOs and DON'Ts Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
              DAILY AFTERCARE GUIDELINES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Essential DOs & DON'Ts
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Simple daily habits to protect your warranty, avoid coffee stains, and prevent chipping.
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
                    <strong className="text-slate-900">The "Water Swish" Rule (Post-Coffee):</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Whenever you drink coffee, black tea, or red wine, swish your mouth with still water immediately. This flushes staining tannins before they can settle into resin micro-pores or ceramic margins.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                  <div>
                    <strong className="text-slate-900">Use Non-Abrasive Toothpaste (RDA &lt; 70):</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Use a gentle fluoride gel toothpaste and a soft-bristled toothbrush. This preserves the high-gloss ceramic glaze and prevents scratching composite surfaces.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                  <div>
                    <strong className="text-slate-900">Wear a Nightguard if You Clench or Grind:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Nighttime clenching exerts immense pressure. A custom nightguard shields both bonding and veneers against sleep micro-fractures.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                  <div>
                    <strong className="text-slate-900">Attend Your Free 6-Month Check-Up:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Composite Bonding patients receive a complimentary 6-month review and diamond paste polish at Dent House (or via our coordinated network).
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
                    <strong className="text-slate-900">DON'T Brush Immediately After Hot Coffee or Acid:</strong>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Coffee is acidic (pH ~4.9), which temporarily softens surface layers. Wait 25–30 minutes for saliva to remineralize before brushing, or simply rinse with water.
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
                      Abrasive charcoal powders act like sandpaper and strip the smooth glaze, creating microscopic ridges that trap future coffee stains.
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

        {/* International Digital Handover Pack */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#0284C7]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  COMPLETE INTERNATIONAL HANDOVER PACK
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                You leave Marrakech with registered medical records.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Before your departure transfer, we provide you with a full digital clinical pack — including shade matching codes, 3D intraoral scans, and laboratory warranty certificates — so any dentist in the UK or worldwide has your complete dental history.
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
