import React, { useState } from 'react';
import { GOOGLE_REVIEWS, GoogleReview, getWhatsAppUrl } from '../data/dentHouseData';
import { Star, CheckCircle, ShieldCheck, MessageCircle, ExternalLink, MoreVertical } from 'lucide-react';

export const GoogleLogoSvg: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.09 3.66-5.17 3.66-9.12z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.27v3.13C3.25 21.31 7.31 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.59H1.27C.46 8.21 0 10.05 0 12s.46 3.79 1.27 5.41l4.01-3.13z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.27 6.59l4.01 3.13c.95-2.84 3.6-4.97 6.72-4.97z"
    />
  </svg>
);

export const LocalGuideBadgeSvg: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#FF9E00" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

interface GoogleReviewsSectionProps {
  title?: string;
  subtitle?: string;
  maxCount?: number;
  showFilters?: boolean;
}

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  title = 'Verified Patient Reviews on Google',
  subtitle = 'Read genuine, unedited accounts from UK and international patients who traveled to Marrakech for cosmetic smile makeovers.',
  maxCount,
  showFilters = true
}) => {
  const [filter, setFilter] = useState<'all' | 'bonding' | 'veneers' | 'local_guides'>('all');

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (filter === 'bonding') return rev.treatmentType === 'bonding';
    if (filter === 'veneers') return rev.treatmentType === 'veneers';
    if (filter === 'local_guides') return rev.isLocalGuide;
    return true;
  });

  const displayReviews = maxCount ? filteredReviews.slice(0, maxCount) : filteredReviews;

  return (
    <div className="w-full">
      {/* Google Business Header Widget */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center p-2.5 shrink-0">
              <GoogleLogoSvg className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Dent House Marrakech
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  Verified Google Business
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap text-xs text-slate-500">
                <span className="text-slate-800 font-bold text-sm">4.8</span>
                <div className="flex items-center gap-0.5 text-[#F4B400]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? 'fill-[#F4B400] text-[#F4B400]'
                          : 'fill-[#F4B400]/75 text-[#F4B400]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-400">•</span>
                <span className="font-medium text-slate-700">47 Google reviews</span>
                <span className="text-slate-400">•</span>
                <span>Cosmetic Dental Practice</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl("Hello, I saw your Google reviews and would like to ask questions about having a smile makeover at Dent House.")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Filter Chips */}
        {showFilters && (
          <div className="pt-5 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 mr-1">Filter:</span>
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All (47)
            </button>
            <button
              type="button"
              onClick={() => setFilter('bonding')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'bonding'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Composite Bonding (2 Days)
            </button>
            <button
              type="button"
              onClick={() => setFilter('veneers')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'veneers'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              E.max Veneers (4 Days)
            </button>
            <button
              type="button"
              onClick={() => setFilter('local_guides')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1 ${
                filter === 'local_guides'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <LocalGuideBadgeSvg className="w-3 h-3 fill-current" />
              <span>Google Local Guides</span>
            </button>
          </div>
        )}
      </div>

      {/* Google Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {displayReviews.map((rev: GoogleReview) => (
          <div
            key={rev.id}
            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full"
          >
            <div>
              {/* Reviewer Header */}
              <div className="flex items-start gap-3">
                {rev.authorAvatar ? (
                  <img
                    src={rev.authorAvatar}
                    alt={`${rev.authorName} Google Review`}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-xs shrink-0"
                  />
                ) : (
                  <div
                    style={{ backgroundColor: rev.avatarBg || '#1565C0' }}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-xs"
                  >
                    {rev.authorInitials || rev.authorName.charAt(0)}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {rev.authorName}
                    </h4>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 flex-wrap">
                    {rev.isLocalGuide && (
                      <span className="flex items-center gap-0.5 text-amber-600 font-medium">
                        <LocalGuideBadgeSvg className="w-3 h-3" />
                        <span>Local Guide</span>
                        <span>·</span>
                      </span>
                    )}
                    <span>{rev.reviewCount} reviews</span>
                    {rev.photoCount && (
                      <>
                        <span>·</span>
                        <span>{rev.photoCount} photos</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="text-slate-400 hover:text-slate-600 cursor-pointer p-1">
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>

              {/* Stars & Time */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating
                          ? 'fill-[#F4B400] text-[#F4B400]'
                          : 'fill-slate-200 text-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400 font-normal">
                  {rev.timeAgo}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {rev.location}
                </span>
              </div>

              {/* Treatment Pill & Positive Attributes */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-bold text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded-md">
                  {rev.treatment}
                </span>
                <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                  {rev.duration}
                </span>
              </div>

              {rev.badges.map((badge, idx) => (
                <div key={idx} className="mt-2 text-[11px] font-semibold text-slate-500">
                  {badge}
                </div>
              ))}

              {/* Review Text */}
              <div className="mt-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed whitespace-pre-line">
                {rev.reviewText}
              </div>
            </div>

            {/* Owner Response */}
            {rev.ownerResponse && (
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100/80 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800 text-[11px] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      Response from Dent House (Owner)
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {rev.ownerResponse.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {rev.ownerResponse.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Google Transparency Footer Notice */}
      <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <GoogleLogoSvg className="w-4 h-4 shrink-0" />
          <span>
            Google Business Profile · Guéliz, Marrakech
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Patient ratings recorded via Google Maps</span>
        </div>
      </div>
    </div>
  );
};
