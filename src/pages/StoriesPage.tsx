import React from 'react';
import { getWhatsAppUrl } from '../data/dentHouseData';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { CheckCircle, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

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
        {/* Section 1: Real Before & After Comparisons */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                CLINICAL CASES
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                Real Patient Before & After
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs text-slate-500 font-medium">
              Completed in 2 to 4 Days in Marrakech
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case 1: Composite Bonding */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden group">
                  <img
                    src="/images/bonding_before_after.jpg"
                    alt="Composite Bonding Before and After Case Dent House Marrakech"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Full Set 20 Composite Bondings
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#0284C7] text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Zero Enamel Drilling</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-slate-900">
                      Composite Bonding Natural Sculpt
                    </h3>
                    <span className="text-xs font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md">
                      2 Days
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Minimally invasive chairside sculpting directly over natural teeth. Preserved 100% of healthy enamel structure with high-gloss aesthetic polish and symmetry.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-600">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Procedure</span>
                      <span className="font-semibold text-slate-800">20 Teeth Direct Resin Sculpt</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Warranty & Checkup</span>
                      <span className="font-semibold text-slate-800">1 Year + 6-Month Review</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppUrl("Hello, I saw your Composite Bonding before/after case on the website and would like a free assessment for my smile.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                  <span>Request Similar Case Assessment</span>
                </a>
              </div>
            </div>

            {/* Case 2: Porcelain Veneers */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden group">
                  <img
                    src="/images/veneers_before_after.jpg"
                    alt="Porcelain Veneers Before and After Case Dent House Marrakech"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Full Set 20 Porcelain Veneers
                  </div>
                  <div className="absolute bottom-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>5-Year Warranty</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-slate-900">
                      Porcelain Veneers Transformation
                    </h3>
                    <span className="text-xs font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md">
                      4 Days
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Patient presented with discoloration, wear, and spacing. Handcrafted 20 ultra-thin ceramic veneers delivered a lifelike optical translucency and confident aesthetic alignment.
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-600">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Procedure</span>
                      <span className="font-semibold text-slate-800">20 Handcrafted Ceramics</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Longevity Guarantee</span>
                      <span className="font-semibold text-emerald-700">5-Year Comprehensive</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppUrl("Hello, I saw your Porcelain Veneers before/after case on the website and would like a free assessment for my smile.")}
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

        {/* Section 2: Hyper-Realistic Verified Google Reviews Widget & Feed */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
              VERIFIED GOOGLE REVIEWS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              What UK & International Patients Say
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Authentic reviews posted by patients after completing their smile treatments in Marrakech.
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
              <span>Send Photos on WhatsApp (+212 789-668454)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
