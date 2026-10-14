import React from 'react';
import { FaqSection } from '../components/FaqSection';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Mail } from 'lucide-react';
import { CLINIC_WHATSAPP_DISPLAY, getWhatsAppUrl } from '../data/dentHouseData';

interface FaqPageProps {
  onOpenConsultation: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
            PATIENT INFORMATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about our treatments, warranties, materials, travel logistics, and clinical care.
          </p>
        </div>
      </div>

      {/* Main FAQ Component */}
      <FaqSection onOpenConsultation={onOpenConsultation} />

      {/* Contact & Clinic Desk Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: WhatsApp Concierge */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Direct WhatsApp Concierge</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fastest response within 2 hours. Send photos or voice notes directly to our clinical lead.
                </p>
                <div className="mt-4 text-sm font-semibold text-slate-800">
                  {CLINIC_WHATSAPP_DISPLAY}
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={getWhatsAppUrl("Hello, I have a specific question about treatments at Dent House Marrakech.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Open WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Box 2: Location */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Clinic Location</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Modern clinic located in the upscale modern center of Marrakech.
                </p>
                <div className="mt-4 text-xs text-slate-700 leading-relaxed">
                  Boulevard Mohammed V, Guéliz<br />
                  Marrakech 40000, Morocco
                </div>
              </div>
              <div className="mt-6 text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Registered Medical Practice No. 49102-MA</span>
              </div>
            </div>

            {/* Box 3: Hours & Phone */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Clinic Hours & Calls</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Monday to Saturday: 09:00 - 19:00 (GMT+1)<br />
                  Closed Sundays for clinical deep-sterilization.
                </p>
                <div className="mt-4 text-xs text-slate-700">
                  <span className="font-semibold block">Reception Desk:</span>
                  +212 5 24 43 80 00
                </div>
              </div>
              <div className="mt-6 text-xs text-slate-500">
                UK & International patient support available 7 days a week on WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
