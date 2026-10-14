import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, Plane, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';

interface HeroProps {
  onOpenConsultation?: () => void;
  onExplorePackages?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white pt-8 pb-10 sm:pt-12 sm:pb-12">
      {/* Subtle ambient lighting meshes */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-20 w-[600px] h-[350px] rounded-full bg-sky-200/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -ml-32 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Editorial Brand Kicker */}
        <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
            DENT HOUSE MARRAKECH
          </span>
        </div>

        {/* Catchy, clear H1 headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-[1.12] font-serif font-bold text-slate-900 tracking-tight text-balance max-w-3xl mx-auto">
          Your Smile. Your Signature.
        </h1>

        {/* Clear and concise subtitle */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto text-balance">
          Discover premium porcelain veneers and composite bonding in Marrakech, where personalised dental care meets exceptional value.
        </p>

        {/* CTAs */}
        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href={getWhatsAppUrl("Hello, I would like to request a free consultation at Dent House Marrakech.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Book Your Free Consultation</span>
          </a>

          <Link
            to="/treatments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#0284C7] bg-white hover:bg-sky-50/70 border border-sky-200 hover:border-sky-300 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-2xs"
          >
            <span>Explore Our Treatments</span>
            <ArrowRight className="w-4 h-4 text-[#0284C7]" />
          </Link>
        </div>

        {/* Quick Reassurance Trust Strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
            <span>5-Yr Veneers / 1-Yr Bonding Warranty</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
            <span>2 to 4 Days Turnaround</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
            <span>City House Stays & Transfers Included</span>
          </div>
        </div>
      </div>
    </section>
  );
};
