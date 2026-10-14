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
      title: 'Exceptional Value',
      desc: 'Save thousands compared with UK prices while receiving premium cosmetic dental care.',
    },
    {
      title: 'Expert Dentists',
      desc: 'Our experienced team provides personalised cosmetic treatments designed around your smile.',
    },
    {
      title: 'Marrakech Experience',
      desc: "Combine your smile transformation with a stay in one of the world's most beautiful destinations.",
    },
    {
      title: 'Premium Materials',
      desc: 'We use quality composite and veneer materials selected for natural-looking, lasting results.',
    },
  ];

  const realPatientPhotos = [
    {
      src: '/images/patient_sophie.jpg',
      label: 'Sophie & Mark (Surrey, UK)',
      detail: 'Duo Porcelain Makeover',
    },
    {
      src: '/images/veneers_before_after.jpg',
      label: 'Porcelain Veneers Before & After',
      detail: 'Natural Shade BL2 · 20 Teeth',
    },
    {
      src: '/images/bonding_before_after.jpg',
      label: 'Composite Bonding Before & After',
      detail: 'Zero Drilling · 2 Days',
    },
    {
      src: '/images/patient_oliver.jpg',
      label: 'Oliver (Manchester, UK)',
      detail: '20 Composite Bondings',
    },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onExplorePackages={() => {}}
      />

      {/* 2. Why Choose Us For Your Smile? (Exact user specification) */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              PEACE OF MIND
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
              Why choose us for your smile?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Real Patient Smiles (2 to 4 Real Pictures) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
                REAL PATIENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    {photo.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{photo.detail}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>View Smile Stories & Patient Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Minimal Bottom Conversion Banner */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold">
            Start with a free WhatsApp smile assessment.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Send close-up photos of your smile to receive a direct clinical evaluation, recommended options, and exact pricing before booking your trip.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hello, I would like to request a free smile assessment at Dent House Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] transition-all cursor-pointer shadow-md text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Book Free WhatsApp Consultation</span>
            </a>
            <Link
              to="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 transition-all text-sm border border-slate-700"
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
