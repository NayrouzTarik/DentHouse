import React, { useState } from 'react';
import {
  DOS_AND_DONTS,
  COFFEE_STAIN_PROTOCOLS,
  TREATMENT_LONGEVITY_GUIDE,
} from '../data/dentHouseData';
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  CalendarCheck,
  Users,
  Percent,
  Sparkles,
  Coffee,
  Clock,
  Droplets,
  AlertTriangle,
  Info,
} from 'lucide-react';

export const DosAndDontsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dos-donts' | 'coffee-stains' | 'longevity-compare'>('dos-donts');
  const [filterTag, setFilterTag] = useState<string>('all');

  const tags = ['all', 'Coffee & Stains', 'Bite Protection', 'Hygiene & Polish', 'Composite Care'];

  const filteredDos = filterTag === 'all'
    ? DOS_AND_DONTS.dos
    : DOS_AND_DONTS.dos.filter((d) => d.tag === filterTag || filterTag === 'all');

  const filteredDonts = filterTag === 'all'
    ? DOS_AND_DONTS.donts
    : DOS_AND_DONTS.donts.filter((d) => d.tag === filterTag || filterTag === 'all');

  return (
    <section id="clinical-care" className="py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              EVIDENCE-BASED CLINICAL CARE
            </span>
            <span className="w-8 h-px bg-[#0284C7]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Treatment Longevity: DOs, DON'Ts & Stain Care.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Premium porcelain veneers and composite bonding have distinct physical properties. Follow our clinical guidance to protect against coffee stains, prevent edge chipping, and maximize your smile's lifespan.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('dos-donts')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'dos-donts'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>DOs & DON'Ts</span>
            </button>
            <button
              onClick={() => setActiveTab('coffee-stains')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'coffee-stains'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Coffee className="w-4 h-4 text-amber-600" />
              <span>Coffee & Stain Protocol</span>
            </button>
            <button
              onClick={() => setActiveTab('longevity-compare')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'longevity-compare'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
              <span>Veneers vs Bonding Comparison</span>
            </button>
          </div>
        </div>

        {/* TAB 1: DOs and DON'Ts */}
        {activeTab === 'dos-donts' && (
          <div className="mt-10">
            {/* Tag Filter */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
              <span className="text-xs text-slate-500 font-medium mr-1">Filter by topic:</span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilterTag(tag)}
                  className={`px-3 py-1 text-xs rounded-full font-medium transition-all cursor-pointer ${
                    filterTag === tag
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tag === 'all' ? 'All Rules' : tag}
                </button>
              ))}
            </div>

            {/* Warranty Highlights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              {/* Composite Bonding Warranty Card */}
              <div className="bg-white rounded-2xl border-2 border-sky-100 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50 rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#0284C7] tracking-wider">
                      Composite Bonding
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      1-Year Warranty + 6-Month Check-Up
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Includes full repair coverage for 12 months. Plus, attend a complimentary clinical inspection and high-gloss polish check-up at month 6.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CalendarCheck className="w-4 h-4" />
                  <span>Free 6-month check-up included in treatment price</span>
                </div>
              </div>

              {/* Premium Porcelain Veneers Warranty Card */}
              <div className="bg-white rounded-2xl border-2 border-[#0284C7]/60 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ring-4 ring-sky-50">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100/50 rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#0284C7] tracking-wider">
                      Premium Porcelain Veneers
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      5-Year Comprehensive Warranty
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Backed by registered clinical documentation and quality certification. 5 years of structural integrity and replacement guarantee.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0284C7]">
                  <Sparkles className="w-4 h-4" />
                  <span>Full digital clinical files provided for your home dentist</span>
                </div>
              </div>
            </div>

            {/* DOs & DON'Ts Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Column 1: DOs */}
              <div className="bg-white rounded-2xl border border-emerald-200/90 p-6 sm:p-7 shadow-sm">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-emerald-100">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif">
                      What to Do (Care & Longevity)
                    </h3>
                    <p className="text-xs text-slate-500">Protecting your investment for the long term</p>
                  </div>
                </div>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                  {filteredDos.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/40 transition-colors">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                            {item.title}
                          </h4>
                          {item.tag && (
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: DON'Ts */}
              <div className="bg-white rounded-2xl border border-rose-200/90 p-6 sm:p-7 shadow-sm">
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-rose-100">
                  <XCircle className="w-6 h-6 text-rose-500" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif">
                      What NOT to Do (Habits to Avoid)
                    </h3>
                    <p className="text-xs text-slate-500">Preventing preventable fractures & discoloration</p>
                  </div>
                </div>
                <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
                  {filteredDonts.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-rose-50/40 transition-colors">
                      <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✕
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                            {item.title}
                          </h4>
                          {item.tag && (
                            <span className="text-[10px] font-semibold text-rose-700 bg-rose-100/70 px-2 py-0.5 rounded-full">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Coffee & Stain Prevention Protocol */}
        {activeTab === 'coffee-stains' && (
          <div className="mt-10 max-w-5xl mx-auto space-y-8">
            {/* Direct Clinical Guidance Alert */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-300 text-slate-900">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-950 font-serif">
                    The Coffee Lover's Guide: Keeping Your Teeth Stain-Free
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-amber-900/80 leading-relaxed">
                    You <strong>do not have to give up coffee forever</strong>! However, composite bonding is a micro-hybrid resin that requires mindful care, while premium porcelain is a high-density glazed ceramic engineered for superior stain resistance. Here are the practical guidelines to follow:
                  </p>
                </div>
              </div>

              {/* 3 Key Takeaways */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/90 border border-amber-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <Droplets className="w-4 h-4 text-sky-500" />
                    <span>The Water Swish</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Take a sip of water and swish right after coffee to flush tannins before they absorb into resin pores.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/90 border border-amber-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Wait 30 Mins to Brush</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Coffee acid temporarily softens enamel and resin. Brushing immediately scratches it. Wait 30 mins!
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/90 border border-amber-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <AlertTriangle className="w-4 h-4 text-rose-500" />
                    <span>48-Hour Cure Window</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    No black coffee, red wine, or curry during the first 48h after composite bonding while resin polymerizes.
                  </p>
                </div>
              </div>
            </div>

            {/* Protocol Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COFFEE_STAIN_PROTOCOLS.map((proto) => (
                <div
                  key={proto.step}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-[#0284C7]/40 transition-all flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#0284C7] font-bold text-sm flex items-center justify-center shrink-0">
                    {proto.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        {proto.title}
                      </h4>
                    </div>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {proto.desc}
                    </p>
                    <div className="mt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        Applies to: {proto.appliesTo}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Toothpaste RDA Abrasivity Warning */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block text-sm">
                    Recommended Toothpaste: RDA Index Below 70
                  </span>
                  <span className="text-slate-600">
                    Use gentle non-abrasive fluoride toothpastes (Sensodyne Pronamel, Colgate Total Gel, or Curaprox). Avoid abrasive charcoal, smoker’s pastes, or baking soda toothpastes that strip protective coatings.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Porcelain Veneers vs Composite Longevity Comparison */}
        {activeTab === 'longevity-compare' && (
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Porcelain Veneers Card */}
              <div className="bg-white rounded-2xl border-2 border-[#0284C7]/80 p-6 shadow-md relative overflow-hidden ring-4 ring-sky-50">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-sky-100 text-[#0284C7] mb-3">
                  Premium Ceramic Standard
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  {TREATMENT_LONGEVITY_GUIDE.emax.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Expected Lifespan: <strong className="text-slate-800">{TREATMENT_LONGEVITY_GUIDE.emax.lifespan}</strong>
                </p>

                <div className="mt-6 space-y-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-700 block">Stain Resistance</span>
                    <span className="text-emerald-700 font-semibold">{TREATMENT_LONGEVITY_GUIDE.emax.stainResistance}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-700 block">Material & Porosity</span>
                    <span className="text-slate-600">{TREATMENT_LONGEVITY_GUIDE.emax.material} ({TREATMENT_LONGEVITY_GUIDE.emax.porosity})</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-700 block">Preparation Level</span>
                    <span className="text-slate-600">{TREATMENT_LONGEVITY_GUIDE.emax.prepDepth}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-700 block">Night Guard Protection</span>
                    <span className="text-slate-600">{TREATMENT_LONGEVITY_GUIDE.emax.nightguardNeed}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-200">
                    <span className="font-bold text-[#0284C7] block">Official Warranty</span>
                    <span className="text-slate-800 font-semibold">{TREATMENT_LONGEVITY_GUIDE.emax.warranty}</span>
                  </div>
                </div>
              </div>

              {/* Composite Bonding Card */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-md relative overflow-hidden">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-slate-100 text-slate-700 mb-3">
                  Direct Sculpting Standard
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  {TREATMENT_LONGEVITY_GUIDE.bonding.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Expected Lifespan: <strong className="text-slate-800">{TREATMENT_LONGEVITY_GUIDE.bonding.lifespan}</strong>
                </p>

                <div className="mt-6 space-y-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-700 block">Stain Resistance</span>
                    <span className="text-amber-700 font-semibold">{TREATMENT_LONGEVITY_GUIDE.bonding.stainResistance}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-700 block">Material & Porosity</span>
                    <span className="text-slate-600">{TREATMENT_LONGEVITY_GUIDE.bonding.material} ({TREATMENT_LONGEVITY_GUIDE.bonding.porosity})</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-700 block">Preparation Level</span>
                    <span className="text-slate-600">{TREATMENT_LONGEVITY_GUIDE.bonding.prepDepth}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-700 block">Night Guard Protection</span>
                    <span className="text-slate-600">{TREATMENT_LONGEVITY_GUIDE.bonding.nightguardNeed}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <span className="font-bold text-emerald-800 block">Official Warranty</span>
                    <span className="text-slate-800 font-semibold">{TREATMENT_LONGEVITY_GUIDE.bonding.warranty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Palmeraie Guest & Extra Night Advantage Notice */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-sky-900 to-slate-900 p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-white block">
                Palmeraie Advantage: Bring 2 Companions for £0 Extra!
              </span>
              <span className="text-slate-300">
                Choose Mid-Level (£110) or Luxury (£180) Palmeraie stays and bring up to 2 companions to stay with you for completely FREE. Extra nights are 50% OFF!
              </span>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-lg text-xs font-bold border border-emerald-400/30 whitespace-nowrap">
            <Percent className="w-3.5 h-3.5" />
            <span>Extra Nights -50%</span>
          </div>
        </div>
      </div>
    </section>
  );
};
