import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  MessageCircle,
  Clock,
  Sparkles,
  Phone,
  ArrowRight,
  Home,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CLINIC_WHATSAPP_DISPLAY, getWhatsAppUrl } from '../data/dentHouseData';
import {
  trackGoogleAdsConversion,
  GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL,
  sendGAEvent
} from '../utils/analytics';

interface ThankYouPageProps {
  onOpenConsultation?: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onOpenConsultation }) => {
  // Fire Google Ads conversion and GA4 lead event when landing on the conversion/thank-you page
  useEffect(() => {
    trackGoogleAdsConversion(GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL);
    sendGAEvent('conversion_page_view', {
      page: '/thank-you',
      status: 'confirmed',
      conversion_label: GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-sky-50/50 via-white to-slate-50 min-h-screen pt-28 pb-20">
      <SEOHead
        title="Thank You | Dent House Marrakech Consultation Request"
        description="Thank you for contacting Dent House Marrakech. Dr Mouad and our smile makeover concierge team will review your enquiry promptly."
        canonicalUrl="https://denthousemarrakech.com/thank-you"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Confirmation Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Subtle Decorative Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-gradient-to-r from-emerald-100/60 via-sky-100/60 to-teal-100/60 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="relative mx-auto w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enquiry Successfully Received</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Thank You for Contacting <br className="hidden sm:inline" />
            <span className="text-sky-700">Dent House Marrakech</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Your smile makeover request has been registered. Dr Mouad and our UK concierge team will review your details and respond with a personalised dental assessment.
          </p>

          {/* Next Steps Grid */}
          <div className="mt-8 text-left bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              What Happens Next?
            </h2>

            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                1
              </div>
              <div className="text-sm">
                <strong className="text-slate-900 block font-semibold">Clinical Review by Dr Mouad</strong>
                <span className="text-slate-600 text-xs sm:text-sm">Our aesthetic dentists inspect your teeth photos, symmetry, and treatment goals.</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                2
              </div>
              <div className="text-sm">
                <strong className="text-slate-900 block font-semibold">Bespoke Quote & Travel Plan</strong>
                <span className="text-slate-600 text-xs sm:text-sm">Receive transparent fixed pricing in GBP/EUR including 5-star hotel and private airport chauffeur transfers.</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                3
              </div>
              <div className="text-sm">
                <strong className="text-slate-900 block font-semibold">Priority WhatsApp Support</strong>
                <span className="text-slate-600 text-xs sm:text-sm">Have urgent travel questions or photo attachments? Chat directly with our dental coordinator on WhatsApp anytime.</span>
              </div>
            </div>
          </div>

          {/* Primary Action Button: WhatsApp */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={getWhatsAppUrl("Hello, I just completed a consultation enquiry and would like to connect on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Continue on WhatsApp ({CLINIC_WHATSAPP_DISPLAY})</span>
            </a>

            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all cursor-pointer"
            >
              <Home className="w-4 h-4 text-slate-600" />
              <span>Return to Home</span>
            </Link>
          </div>

          {/* Reassurance Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Response within 2-4 business hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Non-binding & Confidential</span>
            </div>
          </div>
        </div>

        {/* Secondary Quick Links */}
        <div className="mt-8 text-center text-xs text-slate-500 space-x-4">
          <Link to="/treatments" className="text-sky-700 hover:underline">
            View Treatments
          </Link>
          <span>·</span>
          <Link to="/packages" className="text-sky-700 hover:underline">
            All-Inclusive Packages
          </Link>
          <span>·</span>
          <Link to="/faqs" className="text-sky-700 hover:underline">
            UK Patient FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};

