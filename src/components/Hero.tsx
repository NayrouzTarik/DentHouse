import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';

interface HeroProps {
  onOpenConsultation?: () => void;
  onExplorePackages?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative overflow-hidden min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center justify-center py-16 sm:py-20 lg:py-24">
      {/* Background Clinic Image - Using the New Cabinet Picture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cabinet/background_website.webp"
          alt="Dent House Marrakech cosmetic dentistry clinic suite in Morocco"
          className="w-full h-full object-cover object-center blur-[0.75px] scale-[1.01]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Balanced contrast overlay so the text stays crisp and readable */}
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/60" />
      </div>

      {/* Centered Hero Content with Original Typography */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Original H1 Headline Font */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-[1.12] font-serif font-bold text-white tracking-tight text-balance max-w-3xl mx-auto">
          Your Smile. Your Signature.
        </h1>

        {/* Original Subtitle Font */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl mx-auto text-balance">
          Discover premium porcelain veneers and composite bonding in Marrakech, where personalised dental care meets exceptional value.
        </p>

        {/* Original CTAs & Brand Colors */}
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#0284C7] bg-white hover:bg-sky-50/90 border border-sky-200 hover:border-sky-300 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-2xs"
          >
            <span>Explore Our Treatments</span>
            <ArrowRight className="w-4 h-4 text-[#0284C7]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
