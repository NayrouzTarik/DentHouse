import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EMAX_PACKAGES, BONDING_PACKAGES, getWhatsAppUrl } from '../data/dentHouseData';
import { SEOHead } from '../components/SEOHead';
import { Check, Sliders, MessageCircle, ArrowRight, Sparkles, Clock, Hotel, Car, Users, User } from 'lucide-react';

interface PackagesPageProps {
  onOpenConsultation: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<'bonding' | 'veneers'>('bonding');
  const [bondingFilter, setBondingFilter] = useState<'all' | 'with_stay' | 'treatment_only'>('all');

  const isBonding = selectedTreatment === 'bonding';
  const isVeneers = !isBonding;

  const filteredBondingPackages = BONDING_PACKAGES.filter((pkg) => {
    if (bondingFilter === 'with_stay') return pkg.tierType === 'with_stay';
    if (bondingFilter === 'treatment_only') return pkg.tierType === 'treatment_only';
    return true;
  });

  return (
    <div className="pt-6">
      <SEOHead
        title="Composite Bonding Prices & Packages Marrakech | Dent House"
        description="Transparent composite bonding packages in Marrakech from £1,199 for UK patients. Treatment-only or all-inclusive packages with 2 nights luxury stay and chauffeur transfers."
        canonicalUrl="https://denthousemarrakech.com/packages"
      />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center max-w-3xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          ALL-INCLUSIVE PACKAGES
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
          Fixed Packages & Custom Plans
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Transparent prices including your cosmetic treatment, central Marrakech house stay, and dedicated private chauffeur. Flights not included.
        </p>

        {/* Treatment Tab Switcher */}
        <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 max-w-lg w-full">
          <button
            type="button"
            onClick={() => setSelectedTreatment('bonding')}
            className={`flex-1 py-3.5 px-5 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
              isBonding
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <span className="text-sm sm:text-base font-bold tracking-tight">
              Composite Bonding
            </span>
            <span className={`text-xs sm:text-[13px] font-medium ${isBonding ? 'text-slate-500' : 'text-slate-400'}`}>
              Zero drilling · Natural aesthetics
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedTreatment('veneers')}
            className={`flex-1 py-3.5 px-5 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
              isVeneers
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <span className="text-sm sm:text-base font-bold tracking-tight">
              E.max Porcelain Veneers
            </span>
            <span className={`text-xs sm:text-[13px] font-medium ${isVeneers ? 'text-slate-500' : 'text-slate-400'}`}>
              Lab-crafted ceramic shields
            </span>
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
          <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>
            {isVeneers
              ? 'E.max includes a 4 night luxury stay for precision digital laboratory crafting and master finishing.'
              : 'Composite Bonding for up to 20 teeth. Choose between our Standard Package or Full Package with a 2-night luxury stay & transfers.'}
          </span>
        </div>

        {/* Secondary Sub-filter for Composite Bonding */}
        {isBonding && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setBondingFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                bondingFilter === 'all'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Packages (6)
            </button>
            <button
              type="button"
              onClick={() => setBondingFilter('with_stay')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                bondingFilter === 'with_stay'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Full Packages (3)
            </button>
            <button
              type="button"
              onClick={() => setBondingFilter('treatment_only')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                bondingFilter === 'treatment_only'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Standard Packages (3)
            </button>
          </div>
        )}
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* VENEERS VIEW (Original 4-column layout) */}
        {isVeneers && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {EMAX_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md">
                    {pkg.badge}
                  </span>

                  <h3 className="text-xl font-serif font-bold text-slate-900 mt-3">
                    {pkg.name}
                  </h3>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-slate-900 font-sans">
                        £{pkg.pricePerPersonGBP.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ person</span>
                    </div>
                    <div className="text-xs text-emerald-600 font-semibold mt-1">
                      Save £{pkg.totalSaving.toLocaleString()} vs UK Private
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-slate-50 text-xs text-slate-600 space-y-1">
                    <div className="font-semibold text-slate-800">{pkg.stayName}</div>
                    <div className="text-slate-500 text-[11px]">{pkg.rideName}</div>
                  </div>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {pkg.perks.slice(0, 5).map((perk, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(`Hello, I would like to book the ${pkg.name} (${pkg.duration}) package at Dent House Marrakech.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                    <span>Book {pkg.partyType.toUpperCase()} Package</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Custom Plan Card for Veneers */}
            <div className="rounded-2xl border-2 border-[#0284C7] bg-gradient-to-b from-sky-50/70 to-white p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative">
              <div className="absolute -top-3 right-4 bg-[#0284C7] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                100% Flexible
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-white px-2.5 py-1 rounded-md border border-sky-100">
                  Bespoke Design
                </span>

                <h3 className="text-xl font-serif font-bold text-slate-900 mt-3">
                  Custom E.max Smile Plan
                </h3>

                <div className="mt-4 pt-4 border-t border-sky-100">
                  <span className="text-xs text-slate-500 block">Starting from</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#0284C7] font-sans">
                      £3,450
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ person</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Custom 4-Night Luxury Plan
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                  Build your personalized 4-night luxury stay: customize teeth count, house stay duration (extra nights 50% off), companion guests, and desert tours.
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>20 E.max Veneers (Dedicated Clinical Care)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>4 Night luxury stay for digital lab crafting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Duo (-15%) & Trio (-20%) discounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Bring 2 guests for free (2-Room Upgrade)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-100">
                <Link
                  to="/calculator?treatment=veneers"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Open Custom Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* COMPOSITE BONDING VIEW */}
        {isBonding && (
          <div className="space-y-12">
            {/* When "All Packages" is selected: Grouped sections by Solo, Duo, Trio */}
            {bondingFilter === 'all' && (
              <>
                {/* 1. Solo Packages Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#0284C7]" />
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                      Solo Packages · 1 Person
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {BONDING_PACKAGES.filter((p) => p.partyType === 'solo').map((pkg) => (
                      <BondingCard key={pkg.id} pkg={pkg} />
                    ))}
                  </div>
                </div>

                {/* 2. Duo Packages Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#0284C7]" />
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                      Duo Packages · For 2 People
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {BONDING_PACKAGES.filter((p) => p.partyType === 'duo').map((pkg) => (
                      <BondingCard key={pkg.id} pkg={pkg} />
                    ))}
                  </div>
                </div>

                {/* 3. Trio Packages Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#0284C7]" />
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                      Trio Packages · For 3 People
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {BONDING_PACKAGES.filter((p) => p.partyType === 'trio').map((pkg) => (
                      <BondingCard key={pkg.id} pkg={pkg} />
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* When filtered by "Treatment + Accommodation" or "Treatment Only" */}
            {bondingFilter !== 'all' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredBondingPackages.map((pkg) => (
                  <BondingCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            )}

            {/* Custom Package Section / Card */}
            <div className="rounded-2xl border-2 border-[#0284C7] bg-gradient-to-br from-sky-50/80 via-white to-sky-50/40 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-white px-2.5 py-1 rounded-md border border-sky-100 shadow-2xs">
                      100% BESPOKE
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Tailored Travel & Smile Makeover
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                    Custom Package
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our Custom Package remains available for patients who require a personalised treatment and travel arrangement. Pricing will be provided according to individual requirements and the dentist’s clinical assessment.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Personalised tooth count & chairside sculpting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Flexible house stay length & companion options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Dedicated airport & clinic chauffeur transfers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>Subject to dentist’s clinical assessment</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                  <a
                    href={getWhatsAppUrl("Hello, I would like to inquire about a Custom Composite Bonding Package tailored to my requirements.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Inquire Custom Package</span>
                  </a>

                  <Link
                    to="/calculator?treatment=bonding"
                    className="py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:text-[#0284C7] hover:border-[#0284C7]/40 transition-all flex items-center justify-center gap-2"
                  >
                    <Sliders className="w-4 h-4" />
                    <span>Open Custom Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Customization Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-900">
              Not satisfied with pre-set packages?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              You can customize every single parameter — from extra nights at 50% discount to bringing 2 friends for free — with our instant price calculator.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/calculator"
              className="py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-xs transition-all"
            >
              Customize in Calculator
            </Link>
            <a
              href={getWhatsAppUrl("Hello, I would like to ask about package options for E.max veneers and Composite bonding at Dent House Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:text-[#0284C7] transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable card component for Composite Bonding packages
const BondingCard: React.FC<{ pkg: (typeof BONDING_PACKAGES)[0] }> = ({ pkg }) => {
  const isStay = pkg.tierType === 'with_stay';

  return (
    <div
      className={`rounded-2xl border transition-all flex flex-col justify-between p-6 ${
        isStay
          ? 'border-sky-200 bg-white shadow-xs hover:shadow-md ring-1 ring-sky-100'
          : 'border-slate-200 bg-white shadow-xs hover:shadow-md'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
              isStay ? 'text-[#0284C7] bg-sky-50' : 'text-slate-600 bg-slate-100'
            }`}
          >
            {pkg.badge}
          </span>
          <span className="text-[11px] font-medium text-slate-500">
            {pkg.partyType === 'solo' ? '1 Person' : pkg.partyType === 'duo' ? '2 People' : '3 People'}
          </span>
        </div>

        <h3 className="text-xl font-serif font-bold text-slate-900 mt-3">
          {pkg.name}
        </h3>
        {pkg.subtitle && (
          <p className="text-xs text-slate-500 font-medium mt-1">
            {pkg.subtitle}
          </p>
        )}

        {/* Price Display */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          {pkg.partyType === 'solo' ? (
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900 font-sans">
                  £{pkg.pricePerPersonGBP.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 font-medium">per person</span>
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                Composite bonding for up to 20 teeth
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">
                  £{pkg.totalPriceGBP.toLocaleString()}
                </span>
                <span className="text-xs text-slate-600 font-bold">total</span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-slate-600">
                  £{pkg.pricePerPersonGBP.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })} per person
                </span>
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                Composite bonding for up to 20 teeth per person
              </div>
            </div>
          )}
        </div>

        {/* Attractive Upgrade Highlight Offer Banner */}
        {pkg.upgradeNote && (
          <div className="mt-3.5 p-3 rounded-xl bg-gradient-to-r from-sky-50 via-sky-50/80 to-white border border-sky-200/90 flex items-start gap-2.5 text-xs shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
            <div className="leading-snug">
              <span className="font-bold text-[#0284C7] block text-[11px] uppercase tracking-wider mb-0.5">
                ★ Special Upgrade Offer
              </span>
              <span className="font-semibold text-slate-800">
                {pkg.upgradeNote}
              </span>
            </div>
          </div>
        )}

        {/* Accommodation & Transfers Details Box (Only for packages with Stay) */}
        {isStay && (
          <div className="mt-4 p-3 rounded-xl text-xs space-y-1 bg-sky-50/50 text-slate-700 border border-sky-100/60">
            <div className="flex items-center gap-1.5 font-semibold text-slate-800">
              <Hotel className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>{pkg.stayName}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
              <Car className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>{pkg.rideName}</span>
            </div>
          </div>
        )}

        {/* Feature List */}
        <ul className="mt-4 space-y-2 text-xs text-slate-600">
          {pkg.perks.map((perk, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Action */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <a
          href={getWhatsAppUrl(`Hello, I would like to book the ${pkg.name} (${pkg.duration}) at Dent House Marrakech.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
