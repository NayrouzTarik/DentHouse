import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhyChooseDentHouse } from '../components/WhyChooseDentHouse';
import { Sparkles, Sliders, ArrowRight, Star, CheckCircle, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PRECONFIGURED_PACKAGES, PATIENT_STORIES, getWhatsAppUrl } from '../data/dentHouseData';

interface HomePageProps {
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div>
      {/* 1. Hero Section (Clean white-and-blue theme from PDF update) */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onExplorePackages={() => {}}
      />

      {/* 2. Why Choose Dent House (Pillars & Exact Copy from PDF Pages 7-10) */}
      <WhyChooseDentHouse onOpenConsultation={onOpenConsultation} />

      {/* 3. Packages & Custom Plan Teaser */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
                FIXED PACKAGES & BESPOKE OPTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
                All-Inclusive Smile Holidays
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
                Treatment, boutique Palmeraie stay, and 4 private chauffeur transfers included.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/packages"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-white text-slate-800 border border-slate-200 hover:border-[#0284C7] hover:text-[#0284C7] shadow-2xs transition-all"
              >
                <span>View All Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-2xs transition-all"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Price Calculator</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stable Package 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded">
                  2-Day Glow
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mt-3">
                  Composite Bonding Package
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-900 font-sans">£1,990</span>
                  <span className="text-xs text-slate-500">/ person</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  20 Teeth Bonding · 2 Nights Palmeraie Suite · 4 Chauffeur Transfers
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-600 font-semibold">1-Year Warranty</span>
                <Link to="/packages" className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1">
                  Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Stable Package 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded">
                  Most Popular
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mt-3">
                  Porcelain Veneers Package
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-900 font-sans">£3,810</span>
                  <span className="text-xs text-slate-500">/ person</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  20 Handcrafted Veneers · Luxury Palmeraie Oasis · 4 Private Transfers
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-600 font-semibold">5-Year Warranty</span>
                <Link to="/packages" className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1">
                  Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Custom Plan Card */}
            <div className="bg-gradient-to-b from-sky-50 to-white rounded-2xl border-2 border-[#0284C7] p-6 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0284C7] px-2 py-0.5 rounded">
                  100% Flexible
                </span>
                <h3 className="text-xl font-serif font-bold text-slate-900 mt-3">
                  Custom Smile Plan
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-xs text-slate-500 mr-1">from</span>
                  <span className="text-3xl font-extrabold text-[#0284C7] font-sans">£1,850</span>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  <strong>Not satisfied with fixed options?</strong> Customize teeth count, extra nights (-50%), and bring 2 guests free.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-100">
                <Link
                  to="/calculator"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Customize in Calculator</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Smile Stories Teaser */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
                PATIENT EXPERIENCES
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
                Smile Stories
              </h2>
            </div>
            <Link
              to="/stories"
              className="text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] flex items-center gap-1"
            >
              <span>View all patient stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PATIENT_STORIES.slice(0, 2).map((story, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(story.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900">{story.name}</span>
                    <span className="text-slate-400"> · {story.location}</span>
                  </div>
                  <span className="font-semibold text-[#0284C7]">{story.treatment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Minimal Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">
            Begin with a free, no-obligation consultation.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Send photos of your smile on WhatsApp to receive a clinical recommendation and clear package pricing before you book flights.
          </p>
          <div className="pt-4">
            <a
              href={getWhatsAppUrl("Hello, I would like to request a free consultation at Dent House Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] transition-all cursor-pointer shadow-md text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Book Your Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
