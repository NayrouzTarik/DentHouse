import React, { useState } from 'react';
import {
  TREATMENTS,
  STAY_OPTIONS,
  RIDE_OPTIONS,
  EXTRAS_OPTIONS,
  PRECONFIGURED_PACKAGES,
} from '../data/dentHouseData';
import {
  Users,
  Sparkles,
  Car,
  Hotel,
  ShieldCheck,
  Check,
  Gift,
  ArrowRight,
  MessageCircle,
  Percent,
  Sliders,
  Award,
  Calendar,
} from 'lucide-react';

interface PlanCalculatorProps {
  onOpenConsultationWithPlan?: (planDetails: any) => void;
  initialTreatmentId?: string;
}

export const PlanCalculator: React.FC<PlanCalculatorProps> = ({
  onOpenConsultationWithPlan,
  initialTreatmentId = 'veneers',
}) => {
  // Mode: Curated Packages vs Custom 5-Step Builder
  const [activeTab, setActiveTab] = useState<'custom' | 'curated'>('custom');

  // Step 1: Who is coming
  const [partyType, setPartyType] = useState<'solo' | 'duo' | 'trio'>('duo');

  // Step 2: Treatment (Only Bonding or Veneers)
  const [treatmentId, setTreatmentId] = useState<string>(
    initialTreatmentId === 'makeover' ? 'veneers' : initialTreatmentId
  );

  // Step 3: Stay (All in Palmeraie)
  const [stayId, setStayId] = useState<string>('comfort-palmeraie');
  const [nights, setNights] = useState<number>(2); // 2 days base stay

  // Step 4: Ride (Standard included by default)
  const [rideId, setRideId] = useState<string>('standard');

  // Step 5: Extras (Optional paid add-ons)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // People count
  const partyCount = partyType === 'solo' ? 1 : partyType === 'duo' ? 2 : 3;

  // Group discounts on dental treatment: Duo 15%, Trio 20%
  const groupDiscountPercent = partyType === 'duo' ? 0.15 : partyType === 'trio' ? 0.20 : 0;

  // Selected Treatment
  const selectedTreatment = TREATMENTS.find((t) => t.id === treatmentId) || TREATMENTS[1];

  // Base treatment cost per person before and after discount
  const baseTreatmentPrice = selectedTreatment.dentHousePriceGBP;
  const discountedTreatmentPrice = Math.round(baseTreatmentPrice * (1 - groupDiscountPercent));
  const totalTreatmentCost = discountedTreatmentPrice * partyCount;

  // Stay cost calculation with 50% discount on extra nights!
  // Base stay = 2 nights (covered for treatment days)
  // Extra nights = nights - 2 (charged at -50%)
  const selectedStay = STAY_OPTIONS.find((s) => s.id === stayId) || STAY_OPTIONS[1];
  let totalStayCost = 0;
  if (selectedStay.tier !== 'none') {
    const baseRate = selectedStay.basePricePerNightGBP;
    const baseNights = Math.min(nights, 2);
    const extraNights = Math.max(0, nights - 2);
    const extraNightRate = baseRate * 0.5; // Price -50% for extra nights!

    // On Mid-Level and Luxury tiers, they can bring 2 guests to stay with them for FREE!
    // So 1 room covers up to 3 people without multiplying!
    totalStayCost = (baseNights * baseRate) + (extraNights * extraNightRate);
  }

  // Ride cost: Standard vehicle is £0 (Included), Comfort SUV is +£40, Executive Mercedes is +£95
  const selectedRide = RIDE_OPTIONS.find((r) => r.id === rideId) || RIDE_OPTIONS[0];
  const totalRideCost = selectedRide.surchargeGBP;

  // Extras cost
  const totalExtrasCost = selectedExtras.reduce((sum, extraId) => {
    const extra = EXTRAS_OPTIONS.find((e) => e.id === extraId);
    if (!extra) return sum;
    return sum + (extra.priceGBP * partyCount);
  }, 0);

  // Overall Total
  const grandTotal = totalTreatmentCost + totalStayCost + totalRideCost + totalExtrasCost;
  const perPersonPrice = Math.round(grandTotal / partyCount);

  // UK Private Benchmark
  const ukBenchmarkPerPerson = selectedTreatment.ukPrivatePriceGBP;
  const ukTotalBenchmark = ukBenchmarkPerPerson * partyCount;
  const totalSavings = ukTotalBenchmark - grandTotal;
  const savingsPercent = Math.round((totalSavings / ukTotalBenchmark) * 100);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookCurrentPlan = () => {
    const extrasNames = selectedExtras
      .map((id) => EXTRAS_OPTIONS.find((e) => e.id === id)?.name)
      .filter(Boolean) as string[];

    const summary = {
      party: partyType,
      partyCount,
      treatment: selectedTreatment.name,
      stay: selectedStay.name,
      freeGuestsIncluded: selectedStay.freeGuestsIncluded,
      nights,
      extraNights: Math.max(0, nights - 2),
      ride: selectedRide.vehicle,
      perPersonPrice,
      grandTotal,
      savings: totalSavings,
      extras: extrasNames,
      warranty: selectedTreatment.warranty,
      checkup: selectedTreatment.checkup,
    };
    if (onOpenConsultationWithPlan) {
      onOpenConsultationWithPlan(summary);
    }
  };

  return (
    <section id="packages" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
                PLANS & PRICING
              </span>
              <span className="w-8 h-px bg-[#0284C7]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Build your 2-day Marrakech package.
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              All stays located in Palmeraie starting at £70. Extra nights at 50% OFF. Mid & Luxury tiers let you bring 2 guests for free!
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('custom')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'custom'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>5-Step Custom Plan Builder</span>
            </button>
            <button
              onClick={() => setActiveTab('curated')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'curated'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Curated Ready Packages</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Custom Plan Builder */}
        {activeTab === 'custom' && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Steps Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* STEP 1: Who is coming */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                      1
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Who is coming?
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500">
                    Sets number of treatments & seats
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {/* Solo */}
                  <button
                    type="button"
                    onClick={() => setPartyType('solo')}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      partyType === 'solo'
                        ? 'border-[#0284C7] bg-sky-50/50 ring-2 ring-sky-100'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">Solo</span>
                      <Users className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      1 patient
                    </p>
                    <div className="mt-2 text-[11px] text-slate-400 font-medium">
                      Standard pricing
                    </div>
                  </button>

                  {/* Duo */}
                  <button
                    type="button"
                    onClick={() => setPartyType('duo')}
                    className={`relative p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      partyType === 'duo'
                        ? 'border-[#0284C7] bg-sky-50/50 ring-2 ring-sky-100'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="absolute -top-2.5 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      15% Off
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">Duo</span>
                      <Users className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      2 patients
                    </p>
                    <div className="mt-2 text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                      <Percent className="w-3 h-3" />
                      <span>15% off treatments</span>
                    </div>
                  </button>

                  {/* Trio */}
                  <button
                    type="button"
                    onClick={() => setPartyType('trio')}
                    className={`relative p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      partyType === 'trio'
                        ? 'border-[#0284C7] bg-sky-50/50 ring-2 ring-sky-100'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="absolute -top-2.5 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      20% Off
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">Trio</span>
                      <Users className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      3 patients
                    </p>
                    <div className="mt-2 text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                      <Percent className="w-3 h-3" />
                      <span>20% off treatments</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* STEP 2: Treatment (Strictly 2 Choices) */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                      2
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Select Treatment
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500">
                    Priced per set of 20 teeth (10 upper + 10 lower)
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {TREATMENTS.map((t) => {
                    const isSelected = treatmentId === t.id;
                    const perPersonDiscounted = Math.round(t.dentHousePriceGBP * (1 - groupDiscountPercent));

                    return (
                      <div
                        key={t.id}
                        onClick={() => setTreatmentId(t.id)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          isSelected
                            ? 'border-[#0284C7] bg-sky-50/40 ring-2 ring-sky-100'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'border-[#0284C7] bg-[#0284C7] text-white'
                                : 'border-slate-300'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-slate-900">
                                {t.name}
                              </span>
                              {t.highlight && (
                                <span className="text-[10px] font-bold text-[#0284C7] bg-sky-100 px-2 py-0.5 rounded-full">
                                  {t.highlight}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {t.subtitle} · 2 Days Treatment
                            </p>
                            <div className="mt-1.5 flex items-center gap-2 text-[11px] font-semibold text-[#0284C7]">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>{t.warranty}</span>
                              <span className="text-slate-400">·</span>
                              <span className="text-slate-600 font-normal">{t.checkup}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-left sm:text-right shrink-0 pl-8 sm:pl-0">
                          <div className="flex items-baseline gap-1.5 sm:justify-end">
                            {groupDiscountPercent > 0 && (
                              <span className="text-xs text-slate-400 line-through">
                                £{t.dentHousePriceGBP}
                              </span>
                            )}
                            <span className="text-base font-bold text-slate-900">
                              £{perPersonDiscounted}
                            </span>
                            <span className="text-xs text-slate-500">/ person</span>
                          </div>
                          <div className="text-[11px] text-emerald-600 font-semibold">
                            UK private: £{t.ukPrivatePriceGBP}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3: Stay (All in Palmeraie + 50% Off Extra Nights + Bring 2 Guests Free) */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Palmeraie Accommodation
                      </h3>
                      <p className="text-xs text-slate-500">
                        All stays located in Palmeraie · Starts at £70
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">Stay Duration:</span>
                    <select
                      value={nights}
                      onChange={(e) => setNights(Number(e.target.value))}
                      className="border border-slate-200 rounded-lg px-2.5 py-1 text-slate-800 text-xs font-semibold bg-white cursor-pointer"
                    >
                      <option value={2}>2 Nights (Base Stay)</option>
                      <option value={3}>3 Nights (+1 Night at 50% OFF)</option>
                      <option value={4}>4 Nights (+2 Nights at 50% OFF)</option>
                      <option value={5}>5 Nights (+3 Nights at 50% OFF)</option>
                    </select>
                  </div>
                </div>



                {/* Extra Night Discount Highlight Box */}
                {nights > 2 && stayId !== 'no-stay' && (
                  <div className="mt-3 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-800 flex items-center gap-2">
                    <Percent className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Extra Night Perk Applied:</strong> The base covers 2 treatment days. Extra {nights - 2} night{nights - 2 > 1 ? 's are' : ' is'} discounted by 50%!
                    </span>
                  </div>
                )}

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STAY_OPTIONS.map((s) => {
                    const isSelected = stayId === s.id;
                    const baseRate = s.basePricePerNightGBP;
                    const baseNights = Math.min(nights, 2);
                    const extraNights = Math.max(0, nights - 2);
                    const computedTotal = (baseNights * baseRate) + (extraNights * (baseRate * 0.5));

                    return (
                      <div
                        key={s.id}
                        onClick={() => setStayId(s.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                          isSelected
                            ? 'border-[#0284C7] bg-sky-50/40 ring-2 ring-sky-100'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {s.freeGuestsIncluded > 0 && (
                          <div className="absolute -top-2.5 right-2 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                            BRING 2 GUESTS FREE
                          </div>
                        )}

                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 leading-snug">
                              {s.name}
                            </span>
                            <Hotel className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
                          </div>
                          <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                            {s.description}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-slate-500">
                            {s.basePricePerNightGBP === 0 ? 'No stay charge' : `£${s.basePricePerNightGBP} / night`}
                          </span>
                          <span className="font-semibold text-slate-900">
                            {s.basePricePerNightGBP === 0
                              ? '£0'
                              : `£${computedTotal} total (${nights} nights)`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 4: Ride */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                      4
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Private Chauffeur Transfers
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                    4 Transfers Included in Every Plan
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Airport ⇄ Palmeraie and Palmeraie ⇄ Clinic. Price is per vehicle (not per person).
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {RIDE_OPTIONS.map((r) => {
                    const isSelected = rideId === r.id;

                    return (
                      <div
                        key={r.id}
                        onClick={() => setRideId(r.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer relative ${
                          isSelected
                            ? 'border-[#0284C7] bg-sky-50/40 ring-2 ring-sky-100'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">
                            {r.name}
                          </span>
                          <Car className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="text-[11px] font-semibold text-[#0284C7] mt-1">
                          {r.vehicle}
                        </div>
                        <p className="mt-1 text-[10px] text-slate-500">
                          {r.description}
                        </p>
                        <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-800">
                          {r.surchargeGBP === 0
                            ? 'Included (£0)'
                            : `+£${r.surchargeGBP} vehicle total`}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 5: Authentic Extras (No Fake Promises / No Laser) */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                      5
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Optional Marrakech Extras
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500">
                    Real, transparent activities
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EXTRAS_OPTIONS.map((e) => {
                    const isSelected = selectedExtras.includes(e.id);

                    return (
                      <div
                        key={e.id}
                        onClick={() => toggleExtra(e.id)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#0284C7] bg-sky-50/40'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900">
                              {e.name}
                            </span>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              readOnly
                              className="w-4 h-4 rounded text-[#0284C7] focus:ring-[#0284C7] cursor-pointer"
                            />
                          </div>
                          <p className="mt-1 text-[10px] text-slate-500 leading-snug">
                            {e.description}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-800">
                          £{e.priceGBP} / person
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Column (5 Cols) */}
            <div className="lg:col-span-5 sticky top-28 space-y-4">
              <div className="rounded-2xl border-2 border-[#0284C7] bg-white p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider">
                      Your Customized 2-Day Package
                    </span>
                    <h4 className="text-xl font-serif font-bold text-slate-900">
                      {selectedTreatment.name}
                    </h4>
                  </div>
                  <span className="text-xs font-bold bg-sky-100 text-[#0284C7] px-2.5 py-1 rounded-full uppercase">
                    {partyType} Plan
                  </span>
                </div>

                {/* Per-Person Big Price */}
                <div className="mt-5 text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">
                    Total investment per person:
                  </div>
                  <div className="mt-1 flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
                      £{perPersonPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500">/ person</span>
                  </div>
                  {partyCount > 1 && (
                    <div className="mt-1 text-xs text-slate-600 font-medium">
                      Party total for {partyCount} patients: £{grandTotal.toLocaleString()}
                    </div>
                  )}
                </div>

                {/* Advantage Savings Box */}
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200/80">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                    <span>UK Private Clinic Cost:</span>
                    <span className="line-through text-slate-400">
                      £{ukTotalBenchmark.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-emerald-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800">
                      Your Net UK Advantage:
                    </span>
                    <span className="text-sm font-extrabold text-emerald-700">
                      Save £{totalSavings.toLocaleString()} ({savingsPercent}%)
                    </span>
                  </div>
                </div>

                {/* Summary Items breakdown */}
                <div className="mt-5 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Treatment (20 teeth):</span>
                    <span className="font-semibold text-slate-800">
                      £{totalTreatmentCost.toLocaleString()} ({partyCount}x)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Palmeraie Stay ({nights} nights):</span>
                    <span className="font-semibold text-slate-800">
                      {selectedStay.name.split(' ')[0]} {selectedStay.name.split(' ')[1]} (£{totalStayCost})
                    </span>
                  </div>
                  {selectedStay.freeGuestsIncluded > 0 && (
                    <div className="flex items-center justify-between text-emerald-700 font-semibold text-[11px]">
                      <span>Guest Perk:</span>
                      <span>Bring 2 people to stay for FREE</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span>4x Private Transfers:</span>
                    <span className="font-semibold text-slate-800">
                      {selectedRide.vehicle} ({totalRideCost === 0 ? 'Included' : `+£${totalRideCost}`})
                    </span>
                  </div>
                  {selectedExtras.length > 0 && (
                    <div className="flex items-center justify-between">
                      <span>Selected Extras:</span>
                      <span className="font-semibold text-slate-800">
                        +£{totalExtrasCost}
                      </span>
                    </div>
                  )}
                  {groupDiscountPercent > 0 && (
                    <div className="flex items-center justify-between text-emerald-700 font-semibold pt-1">
                      <span>Group Discount Applied:</span>
                      <span>-{Math.round(groupDiscountPercent * 100)}% on Treatment</span>
                    </div>
                  )}
                </div>

                {/* Warranty & Inclusions */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span className="font-semibold text-slate-800">Warranty:</span>
                    <span>{selectedTreatment.warranty} ({selectedTreatment.checkup})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Free 3D Intraoral Smile Mockup before treatment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>4 Private Chauffeur Transfers included in every plan</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="mt-6">
                  <button
                    onClick={handleBookCurrentPlan}
                    className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Send Plan to UK WhatsApp Concierge</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="mt-2 text-center text-[11px] text-slate-400">
                    No upfront card required · Fast response within 2 hours with our clinical team
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Curated Ready Packages */}
        {activeTab === 'curated' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRECONFIGURED_PACKAGES.map((pkg) => {
              return (
                <div
                  key={pkg.id}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md">
                      {pkg.badge}
                    </span>

                    <h3 className="text-xl font-serif font-bold text-slate-900 mt-3">
                      {pkg.name}
                    </h3>

                    {/* Price Block */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold text-slate-900 font-sans">
                          £{pkg.pricePerPersonGBP.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          / person
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Total package: £{pkg.totalPriceGBP.toLocaleString()}
                      </div>
                      <div className="mt-2 p-2 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center justify-between">
                        <span>UK Patient Advantage:</span>
                        <span className="font-bold text-emerald-700">
                          Save £{pkg.totalSaving.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Stay & Ride Info */}
                    <div className="mt-5 space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="font-semibold text-slate-800">
                        {pkg.stayName}
                      </div>
                      <div className="text-slate-500">
                        {pkg.rideName}
                      </div>
                    </div>

                    {/* Perks List */}
                    <ul className="mt-5 space-y-2 text-xs text-slate-700">
                      {pkg.perks.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setPartyType(pkg.partyType as any);
                        setTreatmentId(pkg.treatmentId);
                        setActiveTab('custom');
                      }}
                      className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#0284C7] hover:bg-[#0369A1] text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Select & Customize Plan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
