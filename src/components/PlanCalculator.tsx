import React, { useState } from 'react';
import {
  TREATMENTS,
  STAY_OPTIONS,
  RIDE_OPTIONS,
  EXTRAS_OPTIONS,
  getWhatsAppUrl,
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
  // Step 1: Who is coming
  const [partyType, setPartyType] = useState<'solo' | 'duo' | 'trio'>('duo');

  // Step 2: Treatment (Only Bonding or Veneers)
  const [treatmentId, setTreatmentId] = useState<string>(
    initialTreatmentId === 'makeover' ? 'veneers' : initialTreatmentId
  );

  // Step 3: Stay (City Center Residence or Self-Arranged)
  const [stayId, setStayId] = useState<string>('city-center-1room');
  const [nights, setNights] = useState<number>(initialTreatmentId === 'veneers' ? 4 : 2);

  // Step 4: Ride (100% Included by default)
  const [rideId, setRideId] = useState<string>('included-chauffeur');

  // Step 5: Extras (Tours & Excursions)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // People count
  const partyCount = partyType === 'solo' ? 1 : partyType === 'duo' ? 2 : 3;

  // Group discounts on dental treatment: Duo 15%, Trio 20%
  const groupDiscountPercent = partyType === 'duo' ? 0.15 : partyType === 'trio' ? 0.20 : 0;

  // Selected Treatment
  const selectedTreatment = TREATMENTS.find((t) => t.id === treatmentId) || TREATMENTS[1];
  const baseTreatmentDays = selectedTreatment.id === 'veneers' ? 4 : 2;

  // Base treatment cost per person before and after discount
  const baseTreatmentPrice = selectedTreatment.dentHousePriceGBP;
  const discountedTreatmentPrice = Math.round(baseTreatmentPrice * (1 - groupDiscountPercent));
  const totalTreatmentCost = discountedTreatmentPrice * partyCount;

  // Stay cost calculation with 50% discount on extra nights!
  // Base stay = 4 nights for E.max / 2 nights for Bonding
  // Extra nights = nights - baseTreatmentDays (charged at -50%)
  const selectedStay = STAY_OPTIONS.find((s) => s.id === stayId) || STAY_OPTIONS[1];
  let totalStayCost = 0;
  if (selectedStay.tier !== 'none') {
    const baseRate = selectedStay.basePricePerNightGBP;
    const baseNights = Math.min(nights, baseTreatmentDays);
    const extraNights = Math.max(0, nights - baseTreatmentDays);
    const extraNightRate = baseRate * 0.5; // Price -50% for extra nights!

    // On 2-Room City House, they can bring 2 guests to stay with them for FREE!
    totalStayCost = (baseNights * baseRate) + (extraNights * extraNightRate);
  }

  // Ride cost: Standard vehicle is £0 (Included in treatment)
  const selectedRide = RIDE_OPTIONS.find((r) => r.id === rideId) || RIDE_OPTIONS[0];
  const totalRideCost = selectedRide.surchargeGBP;

  // Extras cost (Tours & Excursions)
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

  const buildWhatsAppPlanMessage = () => {
    const extrasNames = selectedExtras
      .map((id) => EXTRAS_OPTIONS.find((e) => e.id === id)?.name)
      .filter(Boolean) as string[];

    const partyText =
      partyType === 'solo'
        ? 'Solo (1 patient)'
        : partyType === 'duo'
        ? 'Duo (2 patients - 15% discount)'
        : 'Trio (3 patients - 20% discount)';

    return [
      "Hello Dent House Marrakech, I have created a custom treatment plan on your website:",
      "",
      `• Treatment: ${selectedTreatment.name} (20 teeth)`,
      `• Party: ${partyText}`,
      `• Stay: ${selectedStay.name} (${nights} nights in Marrakech)`,
      `• Chauffeur: Private transfers included (£0)`,
      extrasNames.length > 0 ? `• Excursions & Tours: ${extrasNames.join(', ')}` : '',
      `• Estimated Total: £${perPersonPrice.toLocaleString()} / person (Total £${grandTotal.toLocaleString()})`,
      "",
      "Could you please confirm available dates and next steps for a free consultation?",
    ]
      .filter(Boolean)
      .join('\n');
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
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              CUSTOM PRICE CALCULATOR
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Calculate your custom 2-day Marrakech package.
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Select your treatment, party size, Palmeraie stay duration, and private chauffeur options. Stays start at £70/night with extra nights at 50% OFF!
          </p>
        </div>

        {/* 5-Step Custom Plan Builder */}
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
                        onClick={() => {
                          setTreatmentId(t.id);
                          setNights(t.id === 'veneers' ? 4 : 2);
                        }}
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
                              {t.subtitle} · {t.duration}
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

              {/* STEP 3: Stay (City Center 1-Room House or 2-Room Upgrade + Bring 2 Guests Free) */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        Marrakech Accommodation
                      </h3>
                      <p className="text-xs text-slate-500">
                        City center private house ({baseTreatmentDays} days base stay)
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
                      {baseTreatmentDays === 4 ? (
                        <>
                          <option value={4}>4 Nights (Base 4-Day Stay)</option>
                          <option value={5}>5 Nights (+1 Night at 50% OFF)</option>
                          <option value={6}>6 Nights (+2 Nights at 50% OFF)</option>
                          <option value={7}>7 Nights (+3 Nights at 50% OFF)</option>
                        </>
                      ) : (
                        <>
                          <option value={2}>2 Nights (Base 2-Day Stay)</option>
                          <option value={3}>3 Nights (+1 Night at 50% OFF)</option>
                          <option value={4}>4 Nights (+2 Nights at 50% OFF)</option>
                          <option value={5}>5 Nights (+3 Nights at 50% OFF)</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Extra Night Discount Highlight Box */}
                {nights > baseTreatmentDays && stayId !== 'no-stay' && (
                  <div className="mt-3 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-800 flex items-center gap-2">
                    <Percent className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Extra Night Perk Applied:</strong> The base covers {baseTreatmentDays} treatment days. Extra {nights - baseTreatmentDays} night{nights - baseTreatmentDays > 1 ? 's are' : ' is'} discounted by 50%!
                    </span>
                  </div>
                )}

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {STAY_OPTIONS.map((s) => {
                    const isSelected = stayId === s.id;
                    const baseRate = s.basePricePerNightGBP;
                    const baseNights = Math.min(nights, baseTreatmentDays);
                    const extraNights = Math.max(0, nights - baseTreatmentDays);
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
                              : `£${computedTotal} (${nights}n)`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 4: Ride (Single Included Option) */}
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
                    100% Included with Treatment (£0)
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Private chauffeur transfers are included in the price of your dental care. No extra fees for airport & clinic roundtrips.
                </p>

                <div className="mt-4 p-4 rounded-xl border border-[#0284C7] bg-sky-50/40 ring-1 ring-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-sky-100 flex items-center justify-center text-[#0284C7] shrink-0">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        Dedicated Private Chauffeur (All 4 Transfers Included)
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Airport pickup ➔ Accommodation, clinic appointment roundtrips, and return airport departure transfer.
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                      Included (£0)
                    </span>
                  </div>
                </div>
              </div>

              {/* STEP 5: Tours & Excursions */}
              <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                      5
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Add Tours & Excursions (Optional)
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500">
                    Want your driver to take you exploring?
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  If you want your chauffeur to take you to the Medina or out into the Agafay stone desert, you can add an optional excursion:
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EXTRAS_OPTIONS.map((e) => {
                    const isSelected = selectedExtras.includes(e.id);

                    return (
                      <div
                        key={e.id}
                        onClick={() => toggleExtra(e.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
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
                          +£{e.priceGBP} / person
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

                {/* Illustrative Comparison Box */}
                <div className="mt-4 p-4 rounded-xl bg-sky-50/80 border border-sky-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>Illustrative UK Private Fee:</span>
                    <span className="line-through text-slate-400">
                      £{ukTotalBenchmark.toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-sky-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">
                      Package Price Difference:
                    </span>
                    <span className="text-sm font-extrabold text-[#0284C7]">
                      £{totalSavings.toLocaleString()} lower
                    </span>
                  </div>
                  <p className="mt-2 text-[10px] text-slate-500 leading-relaxed">
                    Based on private UK clinic average for {selectedTreatment.name}. Package covers treatment, accommodation, and transfers. <strong>Flights are not included.</strong>
                  </p>
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
                    <span>Stay ({nights} nights):</span>
                    <span className="font-semibold text-slate-800">
                      {selectedStay.name} (£{totalStayCost})
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
                      Private Chauffeur (100% Included)
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
                  <div className="mt-2 p-2 rounded-lg bg-amber-50 border border-amber-200/60 text-[10px] text-amber-900 leading-snug">
                    Your package includes the accommodation and services explicitly listed in your selected offer. <strong>Flights are not included.</strong>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="mt-6 space-y-2">
                  <a
                    href={getWhatsAppUrl(buildWhatsAppPlanMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Send Plan to WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {onOpenConsultationWithPlan && (
                    <button
                      type="button"
                      onClick={handleBookCurrentPlan}
                      className="w-full py-1.5 px-3 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors text-center cursor-pointer"
                    >
                      Preview or edit plan note first
                    </button>
                  )}

                  <p className="mt-1 text-center text-[11px] text-slate-400">
                    No upfront card required · Direct WhatsApp with our Marrakech clinical team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
