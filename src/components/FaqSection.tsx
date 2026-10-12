import React, { useState } from 'react';
import { FAQS } from '../data/dentHouseData';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              CLEAR QUESTIONS & ANSWERS
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Everything you need to know before flying.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Straightforward answers for UK patients. No confusing medical jargon.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-[#0284C7]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Consultation Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-50/80 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Have a specific question about your teeth?
              </div>
              <div className="text-xs text-slate-600">
                Send a quick WhatsApp voice note or message to our clinical lead.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto py-2.5 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] transition-colors shrink-0 cursor-pointer"
          >
            Chat with Clinical Team
          </button>
        </div>
      </div>
    </section>
  );
};
