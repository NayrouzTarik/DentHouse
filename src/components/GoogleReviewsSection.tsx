import React, { useState } from 'react';
import { PATIENT_REVIEWS, PatientReview, getWhatsAppUrl } from '../data/dentHouseData';
import { Star, MapPin, MessageCircle, MessageSquareQuote, ShieldCheck, Check } from 'lucide-react';

interface GoogleReviewsSectionProps {
  title?: string;
  subtitle?: string;
  maxCount?: number;
  showFilters?: boolean;
}

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  title = 'Patient Experiences & Feedback',
  subtitle = 'Read genuine, unedited accounts from UK and international patients who travelled to Marrakech for cosmetic smile makeovers.',
  maxCount,
  showFilters = true,
}) => {
  const [filter, setFilter] = useState<'all' | 'bonding' | 'veneers'>('all');

  const filteredReviews = PATIENT_REVIEWS.filter((rev) => {
    if (filter === 'bonding') return rev.treatmentType === 'bonding';
    if (filter === 'veneers') return rev.treatmentType === 'veneers';
    return true;
  });

  const displayReviews = maxCount ? filteredReviews.slice(0, maxCount) : filteredReviews;

  return (
    <div className="w-full">
      {/* Patient Reviews Overview Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-13 h-13 rounded-2xl bg-sky-50 text-[#0284C7] border border-sky-100 flex items-center justify-center p-3 shrink-0 shadow-xs">
              <MessageSquareQuote className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Dent House Patient Journeys
                </h3>
              </div>
              <div className="flex items-center gap-2.5 mt-2 flex-wrap text-xs text-slate-500">
                <span className="text-slate-900 font-bold text-sm">4.8 / 5.0</span>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < 4
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-amber-400/80 text-amber-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-300">•</span>
                <span className="font-medium text-slate-700">UK & European Patients</span>
                <span className="text-slate-300">•</span>
                <span>Cosmetic Smile Clinic · Guéliz</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl(
                'Hello, I read through the patient feedback and would like to ask questions about having a smile makeover at Dent House.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Ask Clinical Team on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Filter Chips */}
        {showFilters && (
          <div className="pt-5 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 mr-1">Filter Treatment:</span>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Stories ({PATIENT_REVIEWS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('bonding')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'bonding'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Composite Bonding
            </button>
            <button
              type="button"
              onClick={() => setFilter('veneers')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'veneers'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              E.max Porcelain Veneers
            </button>
          </div>
        )}
      </div>

      {/* Patient Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {displayReviews.map((rev: PatientReview) => (
          <div
            key={rev.id}
            className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full"
          >
            <div>
              {/* Reviewer Header */}
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: rev.avatarBg || '#0284C7' }}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-xs"
                >
                  {rev.authorInitials || rev.authorName.charAt(0)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {rev.authorName}
                    </h4>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{rev.location}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400">{rev.timeAgo}</span>
                  </div>
                </div>
              </div>

              {/* Stars & Rating */}
              <div className="mt-3.5 flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-slate-200 text-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  {rev.rating}.0 / 5.0
                </span>
              </div>

              {/* Treatment Pill */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
                  {rev.treatment}
                </span>
              </div>

              {/* Review Text */}
              <div className="mt-4 text-xs sm:text-[13px] text-slate-700 leading-relaxed whitespace-pre-line">
                {rev.reviewText}
              </div>
            </div>

            {/* Clinic Follow-up Note */}
            {(rev.clinicResponse || rev.ownerResponse) && (
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-slate-800 text-[11px] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                      Dent House Clinical Note
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {(rev.clinicResponse || rev.ownerResponse)?.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {(rev.clinicResponse || rev.ownerResponse)?.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Transparency & Clinical Standards Notice */}
      <div className="mt-8 pt-5 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
          <span>Dent House Cosmetic Clinic · Guéliz, Marrakech</span>
        </div>
        <div className="text-slate-400 text-center sm:text-right">
          <span>Individual clinical outcomes may vary. Treatment planned after digital assessment.</span>
        </div>
      </div>
    </div>
  );
};

// Also export as PatientReviewsSection for clean naming
export const PatientReviewsSection = GoogleReviewsSection;
