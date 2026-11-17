import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PlanCalculator } from '../components/PlanCalculator';
import { SEOHead } from '../components/SEOHead';
import { Calendar, Users, Car, ArrowRight } from 'lucide-react';

interface CalculatorPageProps {
  onOpenConsultationWithPlan: (plan: any) => void;
  activeTreatmentId: string;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({
  onOpenConsultationWithPlan,
  activeTreatmentId,
}) => {
  const [searchParams] = useSearchParams();
  const queryTreatment = searchParams.get('treatment');
  const initialTreatment =
    queryTreatment === 'bonding' || queryTreatment === 'veneers'
      ? queryTreatment
      : activeTreatmentId;

  return (
    <div className="pt-6">
      <SEOHead routePath="/calculator" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
            PRICE CALCULATOR · GBP (£) &amp; EUR (€)
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
            Composite Bonding &amp; E.max Veneers Cost Calculator
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Customize your dental treatment, party size, Marrakech central stay, and private excursions to calculate your exact investment in GBP (£)—with indicative EUR (€) conversion (~1.17x) for Irish and European patients.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-[#0284C7]">
              <Calendar className="w-4 h-4" />
              2 or 4 Nights Luxury Stay (Extra nights 50% OFF)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800">
              <Users className="w-4 h-4" />
              Group Discounts: Duo (-15%) &amp; Trio (-20%)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700">
              <Car className="w-4 h-4 text-[#0284C7]" />
              Private Chauffeur Transfers Included
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Travelling from Ireland or the Eurozone? £1,299 ≈ €1,520 · £1,499 ≈ €1,755 · £3,450 ≈ €4,040. Payment is accepted in GBP, EUR, or MAD.
          </p>
        </div>
      </div>

      {/* Standalone 5-Step Custom Plan Calculator */}
      <PlanCalculator
        onOpenConsultationWithPlan={onOpenConsultationWithPlan}
        initialTreatmentId={initialTreatment}
      />

      {/* Crawlable Package Breakdown Guide for UK & Irish Patients */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
          What Is Included in Solo, Duo &amp; Trio Marrakech Packages?
        </h2>
        <div className="mt-4 space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            Every estimate calculated above reflects transparent, all-inclusive clinical care at Dent House Marrakech with zero hidden laboratory surcharges. Whether you select{' '}
            <Link to="/treatments#composite-bonding" className="text-[#0284C7] font-semibold hover:underline">
              20-tooth Direct Composite Bonding
            </Link>{' '}
            (from £1,299 / ~€1,520 treatment-only or £1,499 / ~€1,755 with a 2-night central stay) or{' '}
            <Link to="/treatments#emax-veneers" className="text-[#0284C7] font-semibold hover:underline">
              handcrafted E.max Porcelain Veneers
            </Link>{' '}
            (from £3,450 / ~€4,040 with a 4-night luxury stay), your clinical fee covers bespoke smile design and shade matching, high-grade aesthetic materials, and your written UK &amp; Ireland Clinical Passport.
          </p>
          <p>
            Patients travelling with a partner or friends unlock automatic group savings: our <strong>Solo packages</strong> include a private central Marrakech suite and round-trip Mercedes airport and clinic chauffeur transfers, while <strong>Duo packages (2 patients)</strong> apply an instant <strong>15% discount</strong> on treatment fees and <strong>Trio packages (3 patients)</strong> apply a <strong>20% group discount</strong> alongside shared multi-room accommodation. Flights from London, Manchester, Birmingham, Bristol, Cardiff, or Dublin are booked independently to let you pick the best fares.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/packages"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0284C7] hover:underline"
          >
            <span>Compare all fixed GBP &amp; EUR packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-slate-300">·</span>
          <Link
            to="/journey"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0284C7]"
          >
            <span>View UK &amp; Ireland direct flight corridors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
