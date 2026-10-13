import React from 'react';
import { PATIENT_STORIES, getWhatsAppUrl } from '../data/dentHouseData';
import { Star, CheckCircle, Quote, ArrowRight, MessageCircle } from 'lucide-react';

interface SocialProofProps {
  onOpenConsultation: () => void;
}

export const SocialProofAndTestimonials: React.FC<SocialProofProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              PATIENT REVIEWS
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Trusted by selective UK & international patients.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            See how UK and international professionals, couples, and friends transformed their smiles with complete peace of mind in Marrakech.
          </p>
        </div>

        {/* 3 Patient Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATIENT_STORIES.map((story, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Savings Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {story.saving}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-sky-200 mb-2" />

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Patient Info */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {story.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {story.location} · {story.treatment}
                  </p>
                </div>
                <CheckCircle className="w-4 h-4 text-[#0284C7] shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* UK Healthcare Advertising Disclosure */}
        <p className="mt-6 text-[11px] text-slate-500 text-center leading-relaxed max-w-3xl mx-auto">
          *Patient accounts reflect individual experiences. Dental treatment suitability, turnaround times, and results depend on clinical assessment. Packages cover dental procedures, accommodation, and chauffeur transfers as explicitly specified in your quote. <strong>Flights are not included.</strong>
        </p>

        {/* Before & After Interactive Showcase Teaser */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 to-sky-950 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              NATURAL SMILE AESTHETICS
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
              Natural translucency. Never bulky or artificial.
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              We design smiles tailored to your facial symmetry, lips, and complexion. Every porcelain veneer features micro-incisal translucency mimicking real healthy enamel.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-sky-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                Custom Shade Matching (BL1 to A1)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                3D Digital Simulation Preview
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={getWhatsAppUrl("Hello, I would like to request a free digital smile preview at Dent House Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl text-sm font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Get Free Digital Mockup on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
