import React from 'react';
import { YourJourneySection } from '../components/YourJourneySection';
import { TheClinicSection } from '../components/TheClinicSection';
import { Plane, CalendarCheck, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';

interface JourneyPageProps {
  onOpenConsultation: () => void;
}

export const JourneyPage: React.FC<JourneyPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
            PATIENT EXPERIENCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
            Your 2-Day Marrakech Journey & Clinic
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From private airport pick-up to your boutique Palmeraie stay and modern clinical appointments, we orchestrate every detail so you can focus entirely on enjoying Marrakech.
          </p>
        </div>
      </div>

      {/* 2-Day Itinerary Section */}
      <YourJourneySection onOpenConsultation={onOpenConsultation} />

      {/* The Clinic & Technology Section */}
      <TheClinicSection onOpenConsultation={onOpenConsultation} />

      {/* Flight & Travel Dates CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0284C7] uppercase">
                <Plane className="w-4 h-4" />
                <span>Travel Support</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Have questions about flights or hotel dates?
              </h3>
              <p className="text-sm text-slate-600 max-w-lg">
                Direct flights from London, Manchester, and major European hubs arrive daily in Marrakech (3.5 hours). Our concierge team can help you pick the best appointment dates.
              </p>
            </div>
            <a
              href={getWhatsAppUrl("Hello, I would like to check travel dates and flights for my treatment in Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Ask Flight & Travel Questions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
