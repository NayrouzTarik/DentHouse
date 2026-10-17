import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Star } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';

interface HeroProps {
  onOpenConsultation?: () => void;
  onExplorePackages?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center justify-center py-16 sm:py-20 lg:py-24">
      {/* Background Clinic Image - Crystal Crisp, Original Full Quality, No Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home_background.png"
          alt="Dent House Marrakech Cosmetic Dental Suite"
          className="w-full h-full object-cover object-center"
        />
        {/* Cinematic dark overlay matching luxury dental clinic design */}
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/65" />
      </div>

      {/* Centered Transparent Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Balanced Headline - Not too big, not too small */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.18] text-balance">
          <span className="text-white block">Your Smile.</span>
          <span className="text-sky-400 font-serif italic block mt-1">Your Signature.</span>
        </h1>

        {/* Clear Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-200/90 leading-relaxed font-sans max-w-xl mx-auto text-balance">
          Discover premium porcelain veneers and composite bonding in Marrakech. Transform your smile with expert care and <span className="text-sky-300 font-semibold">save up to 70% on EU/UK prices</span>.
        </p>

        {/* Action CTAs in Official Brand Colors */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <a
            href={getWhatsAppUrl("Hello, I would like to request a free consultation at Dent House Marrakech.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] rounded-xl shadow-lg shadow-sky-950/40 hover:shadow-xl transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Book Free WhatsApp Consultation</span>
          </a>

          <Link
            to="/treatments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-slate-900/60 hover:bg-slate-900/80 border border-white/20 hover:border-sky-400/50 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-xs backdrop-blur-xs"
          >
            <span>View Treatments & Packages</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </Link>
        </div>

        {/* Patient Review Trust Badge */}
        <div className="mt-8 sm:mt-9 flex items-center justify-center gap-3 text-xs text-slate-300">
          <div className="flex -space-x-2 overflow-hidden">
            <img
              src="/images/patient_charlotte.jpg"
              alt="Charlotte - Dent House Patient"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 object-cover"
            />
            <img
              src="/images/patient_marcus.jpg"
              alt="Marcus - Dent House Patient"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 object-cover"
            />
            <img
              src="/images/patient_sophie.jpg"
              alt="Sophie - Dent House Patient"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 object-cover"
            />
          </div>
          <div className="flex items-center gap-1.5 text-left">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-300 font-medium text-[11px] sm:text-xs">
              4.8/5 · UK & European Patients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
