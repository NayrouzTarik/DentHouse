import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhyChooseDentHouse } from '../components/WhyChooseDentHouse';
import { SocialProofAndTestimonials } from '../components/SocialProofAndTestimonials';
import { FaqSection } from '../components/FaqSection';
import { Sparkles, Sliders, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TREATMENTS, getWhatsAppUrl } from '../data/dentHouseData';

interface HomePageProps {
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div>
      {/* 1. Hero Section (Overhauled per PDF Pages 1-2 & 6) */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onExplorePackages={() => {}}
      />

      {/* 2. Why Choose Dent House (Pillars & Exact Copy from PDF Pages 7-10) */}
      <WhyChooseDentHouse onOpenConsultation={onOpenConsultation} />

      {/* 3. Quick Treatments & Plan Builder Showcase */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
                CORE EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
                Focused treatments. Exceptional results.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
                We specialize strictly in cosmetic smile transformations delivered in 2 relaxed days in Marrakech.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-white text-slate-800 border border-slate-200 hover:border-[#0284C7] hover:text-[#0284C7] shadow-xs transition-all"
              >
                <span>Compare All Treatments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-xs transition-all"
              >
                <Sliders className="w-4 h-4" />
                <span>Price Calculator</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TREATMENTS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-50 text-[#0284C7]">
                      {t.highlight || '2-Day Transformation'}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{t.warranty}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4">
                    {t.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {t.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Package price (20 teeth)</span>
                      <span className="text-3xl font-extrabold text-slate-900 font-sans">
                        £{t.dentHousePriceGBP.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">UK Private average</span>
                      <span className="text-sm font-semibold text-emerald-600">
                        Up to 70% lower
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center gap-3">
                  <Link
                    to="/calculator"
                    className="flex-1 py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-xs transition-all"
                  >
                    Calculate Package
                  </Link>
                  <Link
                    to="/treatments"
                    className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Patient Reviews & Testimonials */}
      <SocialProofAndTestimonials onOpenConsultation={onOpenConsultation} />

      {/* 5. Frequently Asked Questions Preview */}
      <FaqSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
