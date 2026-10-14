import React from 'react';
import { Link } from 'react-router-dom';
import { PRECONFIGURED_PACKAGES, getWhatsAppUrl } from '../data/dentHouseData';
import { Check, Sliders, MessageCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface PackagesPageProps {
  onOpenConsultation: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = () => {
  return (
    <div className="pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center max-w-3xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          ALL-INCLUSIVE PACKAGES
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
          Fixed Packages & Custom Plans
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Transparent prices including your dental treatment, central Marrakech accommodation, and private chauffeur transfers. Flights not included.
        </p>
      </div>

      {/* Package Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Stable Package 1, 2, 3 */}
          {PRECONFIGURED_PACKAGES.map((pkg) => (
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
                  {pkg.perks.slice(0, 4).map((perk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppUrl(`Hello, I would like to book the ${pkg.name} package at Dent House Marrakech.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                  <span>Book Package</span>
                </a>
              </div>
            </div>
          ))}

          {/* 4th Card: Custom Plan */}
          <div className="rounded-2xl border-2 border-[#0284C7] bg-gradient-to-b from-sky-50/70 to-white p-6 shadow-md hover:shadow-lg transition-all flex flex-col justify-between relative">
            <div className="absolute -top-3 right-4 bg-[#0284C7] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              100% Flexible
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-white px-2.5 py-1 rounded-md border border-sky-100">
                Bespoke Design
              </span>

              <h3 className="text-xl font-serif font-bold text-slate-900 mt-3">
                Custom Smile Plan
              </h3>

              <div className="mt-4 pt-4 border-t border-sky-100">
                <span className="text-xs text-slate-500 block">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#0284C7] font-sans">
                    £1,850
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ person</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Tailored to your exact preferences
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                <strong>Not satisfied with standard packages?</strong> Build your own trip: customize teeth count, hotel tier, stay duration (extra nights 50% off), and chauffeur.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Choose Bonding or Porcelain Veneers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Duo (-15%) & Trio (-20%) discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Bring 2 guests for free (Mid & Luxury)</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-sky-100">
              <Link
                to="/calculator"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Open Custom Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

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
              href={getWhatsAppUrl("Hello, I would like to ask about package options at Dent House Marrakech.")}
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
