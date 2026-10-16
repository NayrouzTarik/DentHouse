import React from 'react';
import { getWhatsAppUrl, CLINIC_WHATSAPP_DISPLAY } from '../data/dentHouseData';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CheckCircle, MessageCircle, ArrowRight, ShieldCheck, Sparkles, SlidersHorizontal } from 'lucide-react';

interface StoriesPageProps {
  onOpenConsultation: () => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = () => {
  return (
    <div className="pt-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center max-w-3xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          BEFORE & AFTER RESULTS
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
          Smile Stories & Transformations
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Real results and genuine experiences from selective UK & European patients who flew to Marrakech for their smile makeovers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
        {/* Section 1: Real Before & After Comparisons with Interactive Split Slider */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                INTERACTIVE CLINICAL COMPARISONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                Real Patient Before & After
              </h2>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full font-medium">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Drag slider left/right to reveal full smile</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case 1: Composite Bonding Interactive Slider */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="p-4 sm:p-5 pb-0">
                <BeforeAfterSlider
                  beforeImage="/images/bonding_before.jpg"
                  afterImage="/images/bonding_after.jpg"
                  beforeAlt="Patient teeth before composite bonding showing diastema spacing"
                  afterAlt="Patient teeth after composite bonding showing closed gap and smooth polish"
                  badge="20 Composite Bondings"
                  aspectRatio="aspect-[16/9]"
                />

                <div className="pt-5 pb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-slate-900">
                      Composite Bonding Natural Sculpt
                    </h3>
                    <span className="text-xs font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md">
                      2 Night Luxury Stay
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Minimally invasive chairside sculpting directly over natural teeth. Closed the central diastema (gap) while preserving 100% of healthy enamel structure with natural micro-hybrid resin translucency.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-600">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Procedure</span>
                      <span className="font-semibold text-slate-800">20 Teeth Direct Resin Sculpt</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Warranty & Checkup</span>
                      <span className="font-semibold text-emerald-700">1 Year + 6-Month Review</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-3">
                <a
                  href={getWhatsAppUrl("Hello, I saw your Composite Bonding before/after split case on the website and would like a free assessment for my smile.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                  <span>Request Similar Case Assessment</span>
                </a>
              </div>
            </div>

            {/* Case 2: Porcelain Veneers Interactive Slider */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="p-4 sm:p-5 pb-0">
                <BeforeAfterSlider
                  beforeImage="/images/veneers_before.jpg"
                  afterImage="/images/veneers_after.jpg"
                  beforeAlt="Patient teeth before porcelain veneers with wear and deep discoloration"
                  afterAlt="Patient teeth after handcrafted E.max porcelain veneers"
                  badge="20 Porcelain Veneers"
                  aspectRatio="aspect-[16/9]"
                />

                <div className="pt-5 pb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-slate-900">
                      Porcelain Veneers Transformation
                    </h3>
                    <span className="text-xs font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md">
                      4 Night Luxury Stay
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Patient presented with severe discoloration, erosion, and chipped edges. Handcrafted 20 ultra-thin lithium disilicate ceramic veneers with custom incisal translucency and natural light reflection.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-600">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Procedure</span>
                      <span className="font-semibold text-slate-800">20 Handcrafted E.max Ceramics</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Longevity Guarantee</span>
                      <span className="font-semibold text-emerald-700">5-Year Comprehensive</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-3">
                <a
                  href={getWhatsAppUrl("Hello, I saw your Porcelain Veneers before/after split case on the website and would like a free assessment for my smile.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                  <span>Request Similar Case Assessment</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Authentic Patient Reviews & Feed */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
              PATIENT REVIEWS & EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              What UK & European Patients Say
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Authentic feedback and case journeys shared by patients following their cosmetic dental treatment in Marrakech.
            </p>
          </div>

          <GoogleReviewsSection showFilters={true} />
        </div>

        {/* Minimal WhatsApp Assessment Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center max-w-4xl mx-auto shadow-xl">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
            FREE DIGITAL SMILE EVALUATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-2">
            Want to see how your teeth could look?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
            Send a close-up photo of your teeth on WhatsApp. Our clinical team will assess suitability for Veneers or Composite Bonding within 2 hours.
          </p>
          <div className="mt-6">
            <a
              href={getWhatsAppUrl("Hello, I would like to request a free photo assessment for a smile transformation at Dent House Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] transition-all cursor-pointer shadow-md text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Send Photos on WhatsApp ({CLINIC_WHATSAPP_DISPLAY})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
