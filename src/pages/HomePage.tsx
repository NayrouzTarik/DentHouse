import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Check, ArrowRight, MessageCircle, Star, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';

interface HomePageProps {
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const whyChooseUs = [
    {
      title: 'Qualified Dental Professionals',
      desc: 'Expert care from highly trained and experienced dentists, focused on your smile.',
    },
    {
      title: 'Save up to 70% on EU/UK prices',
      desc: 'Premium smile transformations at a fraction of comparable EU & UK prices.',
    },
    {
      title: 'Premium-Grade Materials',
      desc: 'Carefully selected materials for beautiful, natural-looking smiles that last.',
    },
    {
      title: 'Seamless International Patient Experience',
      desc: 'Personalised support from your first enquiry to your visit in Marrakech.',
    },
  ];

  const realPatientPhotos = [
    {
      src: '/images/bonding_after.jpg',
      label: 'Composite Bonding Sculpt',
      detail: '2 Night Luxury Stay · Zero Drilling · Natural Aesthetics',
    },
    {
      src: '/images/veneers_after.jpg',
      label: 'E.max Porcelain Veneers',
      detail: '4 Night Luxury Stay · Handcrafted BL2 Porcelain',
    },
    {
      src: '/images/patient_charlotte.jpg',
      label: 'Charlotte D. (London, UK)',
      detail: 'Composite Bonding Patient · London, UK',
    },
    {
      src: '/images/patient_marcus.jpg',
      label: 'Marcus S. (Manchester, UK)',
      detail: 'E.max Veneers Patient · Manchester, UK',
    },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onExplorePackages={() => { }}
      />

      {/* 2. Why Choose Us For Your Smile? (Exact user specification) */}
      <section className="py-10 sm:py-14 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              PEACE OF MIND
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1.5">
              Why choose us for your smile?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              We combine world-class dental care with an unforgettable experience, giving you the confidence to smile brighter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Real Patient Smiles (2 to 4 Real Pictures) */}
      <section className="py-10 sm:py-14 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
                REAL PATIENTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                Real Patient Results
              </h2>
            </div>
            <Link
              to="/stories"
              className="text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] flex items-center gap-1.5"
            >
              <span>See all reviews & before/after in Smile Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {realPatientPhotos.map((photo, i) => (
              <Link
                key={i}
                to="/stories"
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-slate-200">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    {photo.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{photo.detail}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>View Smile Stories & Patient Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Minimal Bottom Conversion Banner */}
      <section className="py-10 sm:py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="text-xl sm:text-3xl font-serif font-bold">
            Start with a free WhatsApp smile assessment.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Send close-up photos of your smile to receive a direct clinical evaluation, recommended options, and exact pricing before booking your trip.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl("Hello, I would like to request a free smile assessment at Dent House Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] transition-all cursor-pointer shadow-md text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Book Free WhatsApp Consultation</span>
            </a>
            <Link
              to="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 transition-all text-xs sm:text-sm border border-slate-700"
            >
              <span>Explore All-Inclusive Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
