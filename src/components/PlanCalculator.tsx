import React, { useState } from 'react';
import {
  TREATMENTS,
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
  ArrowRight,
  MessageCircle,
  Percent,
  Calendar,
  Building2,
} from 'lucide-react';

interface PlanCalculatorProps {
  onOpenConsultationWithPlan?: (planDetails: any) => void;
  initialTreatmentId?: string;
}

export const PlanCalculator: React.FC<PlanCalculatorProps> = ({
  onOpenConsultationWithPlan,
  initialTreatmentId = 'bonding',
}) => {
  // Step 1: Treatment Selection (Composite Bonding or E.max Porcelain Veneers)
  const [treatmentId, setTreatmentId] = useState<string>(
    initialTreatmentId === 'veneers' ? 'veneers' : 'bonding'
  );

  // Step 2: Party Size (Solo, Duo, Trio) - default to solo
  const [partyType, setPartyType] = useState<'solo' | 'duo' | 'trio'>('solo');

  // Step 3: Package Tier ('standard' = Treatment Only, 'full' = With Luxury Stay & Transfers)
  const [packageTier, setPackageTier] = useState<'standard' | 'full'>('standard');

  // Extra Nights beyond base stay (Base is 2 nights for Bonding Full Package, 4 nights for Veneers Full Package)
  const [extraNights, setExtraNights] = useState<number>(0);

  // Optional room upgrade for stay: 'standard-house' vs 'deluxe-2room'
  const [stayResidenceType, setStayResidenceType] = useState<'standard-house' | 'deluxe-2room'>('standard-house');

  // Step 4: Extras (Tours & Excursions)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Derived Values
  const partyCount = partyType === 'solo' ? 1 : partyType === 'duo' ? 2 : 3;
  const isBonding = treatmentId === 'bonding';
  const isVeneers = !isBonding;
  const isFullPackage = packageTier === 'full';

  const selectedTreatment = TREATMENTS.find((t) => t.id === treatmentId) || TREATMENTS[0];

  // Base treatment duration
  const baseNights = isBonding ? 2 : 4;
  const totalNights = isFullPackage ? baseNights + extraNights : 0;

  // 1. Treatment Cost Calculation
  let baseTreatmentCost = 0;
  let treatmentCostPerPerson = 0;

  if (isBonding) {
    if (partyType === 'solo') {
      baseTreatmentCost = 1199;
      treatmentCostPerPerson = 1199;
    } else if (partyType === 'duo') {
      baseTreatmentCost = 2199;
      treatmentCostPerPerson = 1099.5;
    } else {
      baseTreatmentCost = 3199;
      treatmentCostPerPerson = 1066.33;
    }
  } else {
    // E.max Veneers: Base £3,450 per person (Duo 15% off = £2,933, Trio 20% off = £2,760)
    if (partyType === 'solo') {
      treatmentCostPerPerson = 3450;
      baseTreatmentCost = 3450;
    } else if (partyType === 'duo') {
      treatmentCostPerPerson = Math.round(3450 * 0.85);
      baseTreatmentCost = treatmentCostPerPerson * 2;
    } else {
      treatmentCostPerPerson = Math.round(3450 * 0.8);
      baseTreatmentCost = treatmentCostPerPerson * 3;
    }
  }

  // 2. Stay & Transfer Upgrade Cost Calculation
  let stayAndTransfersCost = 0;
  if (isFullPackage) {
    if (isBonding) {
      // Base 2-night luxury stay with private chauffeur transfers is £200 for the whole group (Solo, Duo, Trio)
      const baseFee = stayResidenceType === 'deluxe-2room' ? 240 : 200;
      const extraNightRate = stayResidenceType === 'deluxe-2room' ? 60 : 50;
      stayAndTransfersCost = baseFee + (extraNights * extraNightRate);
    } else {
      // E.max Veneers 4-night base stay + transfers: Solo £210 (total £3,660), Duo £315 (total £6,180), Trio £360 (total £8,460)
      const baseFee = partyType === 'solo' ? 210 : partyType === 'duo' ? 315 : 360;
      const extraNightRate = 50;
      stayAndTransfersCost = baseFee + (extraNights * extraNightRate);
    }
  }

  // 3. Extras (Tours & Excursions)
  const totalExtrasCost = selectedExtras.reduce((sum, extraId) => {
    const extra = EXTRAS_OPTIONS.find((e) => e.id === extraId);
    if (!extra) return sum;
    return sum + extra.priceGBP * partyCount;
  }, 0);

  // Overall Totals
  const grandTotal = baseTreatmentCost + stayAndTransfersCost + totalExtrasCost;
  const perPersonPrice =
    partyCount === 2 && grandTotal % 2 !== 0
      ? Number((grandTotal / partyCount).toFixed(2))
      : partyCount === 3 && grandTotal % 3 !== 0
      ? Number((grandTotal / partyCount).toFixed(2))
      : Math.round(grandTotal / partyCount);

  // UK Private Benchmark
  const ukBenchmarkPerPerson = selectedTreatment.ukPrivatePriceGBP;
  const ukTotalBenchmark = ukBenchmarkPerPerson * partyCount;
  const totalSavings = ukTotalBenchmark - grandTotal;

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getPackageDisplayName = () => {
    if (isBonding) {
      if (partyType === 'solo') {
        return isFullPackage ? 'Package 2 · Full Package' : 'Standard Package (Treatment Only)';
      } else if (partyType === 'duo') {
        return isFullPackage ? 'Duo Full Package' : 'Standard Duo Package';
      } else {
        return isFullPackage ? 'Trio Full Package' : 'Standard Trio Package';
      }
    } else {
      if (partyType === 'solo') {
        return isFullPackage ? 'E.max Solo Smile Holiday' : 'E.max Solo Treatment Only';
      } else if (partyType === 'duo') {
        return isFullPackage ? 'E.max Duo Smile Holiday' : 'E.max Duo Treatment Only';
      } else {
        return isFullPackage ? 'E.max Trio Smile Holiday' : 'E.max Trio Treatment Only';
      }
    }
  };

  const buildWhatsAppPlanMessage = () => {
    const extrasNames = selectedExtras
      .map((id) => EXTRAS_OPTIONS.find((e) => e.id === id)?.name)
      .filter(Boolean) as string[];

    const partyText =
      partyType === 'solo'
        ? 'Solo (1 patient)'
        : partyType === 'duo'
        ? 'Duo (2 patients)'
        : 'Trio (3 patients)';

    const stayText = isFullPackage
      ? `${totalNights} Nights Luxury Stay in Marrakech + Private Airport & Clinic Chauffeur Transfers Included`
      : 'Treatment Only · No accommodation or transfers';

    return [
      'Hello Dent House Marrakech, I configured my smile plan on your website calculator:',
      '',
      `• Package: ${getPackageDisplayName()}`,
      `• Treatment: ${selectedTreatment.name} (Up to 20 teeth per person)`,
      `• Party Size: ${partyText}`,
      `• Inclusions: ${stayText}`,
      extrasNames.length > 0 ? `• Excursions: ${extrasNames.join(', ')}` : '',
      `• Investment: £${perPersonPrice.toLocaleString()} / person (Total: £${grandTotal.toLocaleString()})`,
      '',
      'Could you please confirm next available dates and doctor review?',
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
      packageType: getPackageDisplayName(),
      nights: totalNights,
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
    <section id="packages" className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              INSTANT PRICE CALCULATOR
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Calculate your exact dental package.
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Compare Standard Packages (Treatment only, no accommodation, no transport) vs Full Packages (2 Nights Luxury Stay & chauffeur transfers).
          </p>
        </div>

        {/* 5-Step Custom Plan Builder */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Steps Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* STEP 1: Select Treatment */}
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Select Treatment
                  </h3>
                </div>
                <span className="text-xs text-slate-500">
                  Full set for up to 20 teeth
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Composite Bonding Option */}
                <button
                  type="button"
                  onClick={() => {
                    setTreatmentId('bonding');
                    setExtraNights(0);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isBonding
                      ? 'border-[#0284C7] bg-sky-50/50 ring-2 ring-sky-100'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-slate-900">
                        Composite Bonding
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Same Day Result
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 leading-snug">
                      Zero drilling · Natural aesthetics · Up to 20 teeth
                    </p>
                    <div className="mt-2 text-[11px] text-slate-400 font-medium">
                      One visit (approx. 2–3 hours)
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-baseline justify-between text-xs">
                    <span className="text-slate-500">Standard Package from:</span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      £1,199
                    </span>
                  </div>
                </button>

                {/* E.max Porcelain Veneers Option */}
                <button
                  type="button"
                  onClick={() => {
                    setTreatmentId('veneers');
                    setExtraNights(0);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isVeneers
                      ? 'border-[#0284C7] bg-sky-50/50 ring-2 ring-sky-100'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-slate-900">
                        E.max Porcelain Veneers
                      </span>
                      <span className="text-[10px] font-bold text-[#0284C7] bg-sky-100 px-2 py-0.5 rounded-full">
                        Premium Lab
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 leading-snug">
                      Handcrafted ceramic shields · 10–15 year lifespan
                    </p>
                    <div className="mt-2 text-[11px] text-slate-400 font-medium">
                      Digital laboratory precision crafted
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-baseline justify-between text-xs">
                    <span className="text-slate-500">Standard Package from:</span>
                    <span className="font-extrabold text-slate-900 text-sm">
                      £3,450
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* STEP 2: Who is coming? (Party Size) */}
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Who is coming?
                  </h3>
                </div>
                <span className="text-xs text-slate-500">
                  Select party size for group rate
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
                  <p className="mt-1 text-xs text-slate-500">1 patient</p>
                  <div className="mt-2 text-[11px] font-semibold text-slate-600">
                    {isBonding ? '£1,199 standard' : '£3,450 standard'}
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
                    {isBonding ? 'Save £199' : '15% Off'}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Duo</span>
                    <Users className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">2 patients</p>
                  <div className="mt-2 text-[11px] text-emerald-700 font-semibold">
                    {isBonding ? '£1,099.50/pers' : '£2,933/pers'}
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
                    {isBonding ? 'Save £398' : '20% Off'}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">Trio</span>
                    <Users className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">3 patients</p>
                  <div className="mt-2 text-[11px] text-emerald-700 font-semibold">
                    {isBonding ? '£1,066.33/pers' : '£2,760/pers'}
                  </div>
                </button>
              </div>
            </div>

            {/* STEP 3: Choose Package Tier (Standard vs Full Package) */}
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Choose Package Tier
                    </h3>
                    <p className="text-xs text-slate-500">
                      Treatment only or with accommodation & private transfers
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Standard Package (Treatment Only) */}
                <div
                  onClick={() => setPackageTier('standard')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    !isFullPackage
                      ? 'border-[#0284C7] bg-sky-50/40 ring-2 ring-sky-100'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        STANDARD PACKAGE
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        Treatment Only
                      </span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-slate-900 mt-2.5">
                      {isBonding
                        ? partyType === 'solo'
                          ? 'Standard Package'
                          : partyType === 'duo'
                          ? 'Standard Duo Package'
                          : 'Standard Trio Package'
                        : 'Veneers Standard Package'}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      treatment only full set of composite veneers
                    </p>

                    <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>Full Set Composite Bonding (20 Teeth)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>Completed in One Visit (Approx. 2–3 Hours)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>1-Year Treatment Warranty</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-xs text-slate-500">Standard fee:</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-900">
                        £{treatmentCostPerPerson.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                      </span>
                      <span className="text-xs text-slate-500 font-medium"> / person</span>
                      {partyCount > 1 && (
                        <div className="text-[11px] font-semibold text-slate-600">
                          Total: £{baseTreatmentCost.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2. Full Package (With Luxury Stay & Transfers) */}
                <div
                  onClick={() => setPackageTier('full')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                    isFullPackage
                      ? 'border-[#0284C7] bg-sky-50/50 ring-2 ring-sky-100'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="absolute -top-2.5 right-3 bg-[#0284C7] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                    ★ +£200 ONLY
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] bg-sky-100 px-2.5 py-1 rounded-md">
                        FULL PACKAGE
                      </span>
                      <span className="text-[11px] font-bold text-[#0284C7]">
                        Stay & Transfers Included
                      </span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-slate-900 mt-2.5">
                      {isBonding
                        ? partyType === 'solo'
                          ? 'Package 2 · Full Package'
                          : partyType === 'duo'
                          ? 'Duo Full Package'
                          : 'Trio Full Package'
                        : 'E.max Full Smile Holiday'}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      2 nights luxury stay & private transfers included
                    </p>

                    {/* Attractive offer badge */}
                    <div className="mt-3 p-2.5 rounded-lg bg-sky-100/70 border border-sky-200 text-xs text-[#0284C7] flex items-start gap-2">
                      <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                      <div className="leading-tight font-medium">
                        <strong className="block font-bold">
                          Special Upgrade Offer:
                        </strong>
                        For only £200 extra total, we handle your 2-night luxury stay & private chauffeur transfers completely!
                      </div>
                    </div>

                    <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>Full Set Composite Bonding (20 Teeth)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>2 Nights Luxury Stay in Marrakech</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>Private Airport & Clinic Chauffeur Transfers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                    <span className="text-xs text-slate-500">Full package:</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-[#0284C7]">
                        £{Math.round((baseTreatmentCost + stayAndTransfersCost) / partyCount).toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-medium"> / person</span>
                      {partyCount > 1 && (
                        <div className="text-[11px] font-semibold text-slate-600">
                          Total: £{(baseTreatmentCost + stayAndTransfersCost).toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra Nights selector if Full Package is selected */}
              {isFullPackage && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block">
                      Want to extend your Marrakech stay?
                    </span>
                    <span className="text-slate-500">
                      2 nights luxury stay are included. Extra nights are 50% OFF (£50/night)!
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-slate-600 font-medium">Total Stay:</span>
                    <select
                      value={extraNights}
                      onChange={(e) => setExtraNights(Number(e.target.value))}
                      className="border border-slate-200 rounded-lg px-2.5 py-1.5 font-bold text-slate-800 bg-white"
                    >
                      <option value={0}>2 Nights (Included in package)</option>
                      <option value={1}>3 Nights (+£50 extra night)</option>
                      <option value={2}>4 Nights (+£100 extra nights)</option>
                      <option value={3}>5 Nights (+£150 extra nights)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* STEP 4: Chauffeur Transfers Status */}
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
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md ${
                    isFullPackage
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-slate-500 bg-slate-100'
                  }`}
                >
                  {isFullPackage ? '100% Included (£0)' : 'Not Included in Standard'}
                </span>
              </div>

              <div className="mt-4 p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start sm:items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0284C7] shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-600">
                  {isFullPackage ? (
                    <p>
                      <strong className="text-slate-900 block font-semibold">
                        All 4 Private Chauffeur Transfers Included:
                      </strong>
                      Airport pickup ➔ Luxury stay, clinic appointment roundtrips, and return airport departure.
                    </p>
                  ) : (
                    <p>
                      <strong className="text-slate-900 block font-semibold">
                        Standard Package (Treatment Only):
                      </strong>
                      Airport and clinic transfers are not included. You can arrange your own transport, or switch to the Full Package for just £200 total!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* STEP 5: Tours & Excursions (Optional) */}
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
                <span className="text-xs text-slate-500">Optional</span>
              </div>

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
                  <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">
                    {getPackageDisplayName()}
                  </span>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mt-0.5">
                    {selectedTreatment.name}
                  </h4>
                </div>
                <span className="text-xs font-bold bg-sky-100 text-[#0284C7] px-2.5 py-1 rounded-full uppercase">
                  {partyType}
                </span>
              </div>

              {/* Per-Person Big Price */}
              <div className="mt-5 text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">
                  {isFullPackage ? 'Full package price per person:' : 'Standard treatment only per person:'}
                </div>
                <div className="mt-1 flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
                    £{typeof perPersonPrice === 'number' && perPersonPrice % 1 !== 0 ? perPersonPrice.toFixed(2) : perPersonPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ person</span>
                </div>
                {partyCount > 1 && (
                  <div className="mt-1.5 text-xs text-slate-700 font-bold">
                    Total for {partyCount} people: £{grandTotal.toLocaleString()}
                  </div>
                )}
              </div>

              {/* Comparison Box vs UK Harley Street */}
              <div className="mt-4 p-4 rounded-xl bg-sky-50/80 border border-sky-100">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Illustrative UK Private Fee:</span>
                  <span className="line-through text-slate-400">
                    £{ukTotalBenchmark.toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-sky-200/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">
                    Your Savings vs UK:
                  </span>
                  <span className="text-sm font-extrabold text-emerald-700">
                    Save £{totalSavings.toLocaleString()}
                  </span>
                </div>
                <p className="mt-2 text-[10px] text-slate-500 leading-relaxed">
                  Representative fee difference for {selectedTreatment.name}. Flights are not included.
                </p>
              </div>

              {/* Summary Items breakdown */}
              <div className="mt-5 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Full Smile Set (20 teeth):</span>
                  <span className="font-semibold text-slate-800">
                    £{baseTreatmentCost.toLocaleString()} ({partyCount} {partyCount === 1 ? 'person' : 'people'})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Accommodation:</span>
                  <span className="font-semibold text-slate-800">
                    {isFullPackage
                      ? `2 Nights Luxury Stay (${extraNights > 0 ? `${totalNights} nights total` : 'Included'})`
                      : 'Not included (£0)'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Chauffeur Transfers:</span>
                  <span className="font-semibold text-slate-800">
                    {isFullPackage ? 'Private transfers included (£0)' : 'Not included (£0)'}
                  </span>
                </div>

                {isFullPackage && (
                  <div className="flex items-center justify-between text-[#0284C7] font-semibold">
                    <span>Stay & Transfers Surcharge:</span>
                    <span>+£{stayAndTransfersCost} total</span>
                  </div>
                )}

                {selectedExtras.length > 0 && (
                  <div className="flex items-center justify-between">
                    <span>Selected Excursions:</span>
                    <span className="font-semibold text-slate-800">
                      +£{totalExtrasCost}
                    </span>
                  </div>
                )}

                {isBonding && partyCount > 1 && (
                  <div className="flex items-center justify-between text-emerald-700 font-semibold pt-1 border-t border-slate-100">
                    <span>Group Rate Discount:</span>
                    <span>
                      {partyType === 'duo' ? 'Save £199 (£1,099.50/pers)' : 'Save £398 (£1,066.33/pers)'}
                    </span>
                  </div>
                )}
              </div>

              {/* Guarantee Strip */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span className="font-semibold text-slate-800">Warranty:</span>
                  <span>{selectedTreatment.warranty}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>All high-grade dental materials included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Subject to dentist’s clinical assessment</span>
                </div>
              </div>

              {/* Primary Action Button */}
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
                  Direct WhatsApp with our Marrakech clinical team · No upfront fee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
