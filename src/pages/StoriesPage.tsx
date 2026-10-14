import React from 'react';
import { PATIENT_STORIES, getWhatsAppUrl } from '../data/dentHouseData';
import { Star, CheckCircle, Quote, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface StoriesPageProps {
  onOpenConsultation: () => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = () => {
  return (
    <div className="pt-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center max-w-3xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          PATIENT REVIEWS & RESULTS
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
          Smile Stories
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Real experiences from selective UK & international patients who transformed their smiles in Marrakech.
        </p>
      </div>

      {/* Grid of Verified Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PATIENT_STORIES.map((story, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(story.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified Patient
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#0284C7]">
                  <span>{story.treatment}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-normal">{story.location}</span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900">{story.name}</div>
                  <div className="text-[11px] text-slate-400">{story.location}</div>
                </div>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  2-Day Journey
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
            YOUR TURN TO SMILE
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-2">
            Ready to design your own smile story?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
            Send a close-up photo of your teeth on WhatsApp for a free digital assessment and quotation from our clinical lead.
          </p>
          <div className="mt-6">
            <a
              href={getWhatsAppUrl("Hello, I would like to request a free photo assessment for a smile transformation at Dent House Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] transition-all cursor-pointer shadow-md text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Get Free WhatsApp Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
