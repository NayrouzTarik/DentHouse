import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl, CLINIC_WHATSAPP_DISPLAY } from '../data/dentHouseData';
import { SEOHead } from '../components/SEOHead';
import { Check, ShieldCheck, Sparkles, MessageCircle, ArrowRight, Clock, HelpCircle, Microscope } from 'lucide-react';

interface TreatmentsPageProps {
  onOpenConsultation: () => void;
  onSelectTreatmentForCalculator: (treatmentId: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = () => {
  const comparisonRows = [
    {
      feature: 'Certified Clinical Material',
      bonding: '3M™ Filtek / GC G-aenial nano-hybrid composite resin',
      veneers: 'Ivoclar Vivadent IPS e.max® lithium disilicate ceramic',
    },
    {
      feature: 'Digital Diagnostics & Scan',
      bonding: '3Shape TRIOS® 3D intraoral digital scanner & shade map',
      veneers: '3Shape TRIOS® 3D intraoral digital scanner & CAD/CAM lab',
    },
    {
      feature: 'Tooth Preparation',
      bonding: 'Zero drilling of healthy natural enamel (non-invasive)',
      veneers: 'Conservative sub-0.3 mm enamel prep (never shaved pegs)',
    },
    {
      feature: 'Marrakech Stay Length',
      bonding: '1 clinical visit · 2-night luxury stay (or treatment only)',
      veneers: '4-night luxury stay for master ceramic layering & try-in',
    },
    {
      feature: 'Expected Durability',
      bonding: '5–7 years (100% chairside repairable & re-polishable)',
      veneers: '10–15 years (100% stain-resistant medical ceramic)',
    },
    {
      feature: 'Fixed Price (£ GBP / € EUR)',
      bonding: 'From £1,299 (€1,520) · £1,499 (€1,755) with 2-night stay',
      veneers: 'From £3,450 (€4,040) including 4-night stay & transfers',
    },
    {
      feature: 'Written Clinical Warranty',
      bonding: '1-year full warranty + complimentary 6-month check-up',
      veneers: '5-year comprehensive ceramic replacement warranty',
    },
  ];

  return (
    <div className="pt-6">
      <SEOHead routePath="/treatments" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center max-w-4xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          OUR SMILE SERVICES · MARRAKECH, MOROCCO
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
          Composite Bonding &amp; E.max Veneers in Marrakech, Morocco
        </h1>
        <p className="mt-3 text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Compare our two signature smile makeovers engineered for UK and Ireland patients: zero-drill direct composite bonding using{' '}
          <strong className="text-slate-800">3M™ Filtek / GC G-aenial nano-hybrid composite resin</strong> and handcrafted{' '}
          <strong className="text-slate-800">Ivoclar Vivadent IPS e.max® lithium disilicate</strong> porcelain veneers, planned digitally with our{' '}
          <strong className="text-slate-800">3Shape TRIOS® 3D intraoral digital scanner</strong>.
        </p>

        {/* Quick Section Anchor Pills */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold">
          <a
            href="#composite-bonding"
            className="px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 hover:bg-sky-100 transition-colors"
          >
            Composite Bonding (Zero Drilling)
          </a>
          <a
            href="#emax-veneers"
            className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors"
          >
            E.max Porcelain Veneers
          </a>
          <a
            href="#comparison"
            className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            Bonding vs. E.max Comparison Table
          </a>
        </div>
      </div>

      {/* Main Treatments Cards — Both Permanently Rendered in DOM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Composite Bonding */}
          <section
            id="composite-bonding"
            className="scroll-mt-24 rounded-2xl border-2 border-[#0284C7] bg-gradient-to-b from-sky-50/40 via-white to-white p-8 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0284C7] text-white">
                  Minimally Invasive Glow
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  1 Visit · Direct Sculpt
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-4 leading-tight">
                Direct Composite Bonding in Marrakech (Zero Enamel Drilling)
              </h2>
              <div className="flex items-center gap-2 mt-1.5 text-xs font-semibold text-[#0284C7]">
                <Clock className="w-3.5 h-3.5" />
                <span>1 Clinical Visit · 2 Night Luxury Stay</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">3M™ Filtek / GC G-aenial Resin</span>
              </div>

              {/* Concise Explanation of Treatment */}
              <div className="mt-4 text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed">
                <p>
                  Our cosmetic dentists hand-sculpt genuine <strong>3M™ Filtek and GC G-aenial nano-hybrid composite resin</strong> directly onto your natural teeth to close gaps (diastemas), smooth chipped edges, and harmonize colour and symmetry in a single chairside session.
                </p>
                <p>
                  Because there is <strong>zero drilling or shaving of healthy tooth enamel</strong>, your natural teeth remain 100% intact. Guided by a <strong>3Shape TRIOS® 3D intraoral digital scanner</strong>, your full 20-tooth transformation finishes cleanly during a relaxing 2-night Marrakech stay.
                </p>
              </div>

              {/* What We Offer */}
              <div className="mt-5 p-4 rounded-xl bg-white border border-sky-100 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  What we offer with this treatment:
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>Zero drilling or shaving of natural tooth enamel (never &ldquo;Turkey teeth&rdquo;)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>Certified 3M™ Filtek &amp; GC G-aenial nano-hybrid composite layering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>2 nights central stay with VIP Mercedes airport &amp; clinic transfers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>1-year warranty, complimentary 6-month polish &amp; written UK clinical passport</span>
                  </li>
                </ul>
              </div>

              {/* Starting Price */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Up to 20 Teeth</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-slate-500 font-medium">Starting from</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0284C7] font-sans">
                      £1,299
                    </span>
                    <span className="text-xs text-slate-500 font-medium">(~€1,520)</span>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <span className="block font-medium">Treatment Only or With Stay</span>
                  <span className="text-emerald-700 font-semibold">Full Stay Package £1,499 (~€1,755)</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl("Hello, I would like to ask questions about Composite Bonding (2 night luxury stay) at Dent House Marrakech.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Ask Us on WhatsApp</span>
              </a>
              <Link
                to="/packages"
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:text-[#0284C7] transition-all flex items-center justify-center gap-1.5"
              >
                <span>View fixed £1,299 &amp; £3,450 packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* Card 2: E.max Porcelain Veneers */}
          <section
            id="emax-veneers"
            className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                  Top Choice for UK &amp; Ireland
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  IPS e.max® Ceramic
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-4 leading-tight">
                Handcrafted E.max Porcelain Veneers in Morocco
              </h2>
              <div className="flex items-center gap-2 mt-1.5 text-xs font-semibold text-[#0284C7]">
                <Clock className="w-3.5 h-3.5" />
                <span>4 Night Luxury Stay</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">Ivoclar Vivadent IPS e.max®</span>
              </div>

              {/* Concise Explanation of Treatment */}
              <div className="mt-4 text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed">
                <p>
                  Individually hand-layered from authentic <strong>Ivoclar Vivadent IPS e.max® lithium disilicate</strong> ceramic in our digital lab, our veneers replicate the subtle incisal translucency, surface texture, and light reflection of natural enamel.
                </p>
                <p>
                  Captured with our <strong>3Shape TRIOS® 3D intraoral digital scanner</strong> and bonded using conservative sub-0.3 mm enamel-only preparation, E.max veneers deliver 10–15 years of strength and 100% stain resistance against coffee, tea, and red wine.
                </p>
              </div>

              {/* What We Offer */}
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  What we offer with this treatment:
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>3Shape TRIOS® 3D intraoral digital scanning &amp; live trial smile simulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>Genuine Ivoclar Vivadent IPS e.max® lithium disilicate with ingot batch certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>Conservative sub-0.3 mm enamel prep &amp; 4-night central Marrakech luxury stay</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>5-year replacement warranty &amp; complete digital clinical handover for UK/Irish dentists</span>
                  </li>
                </ul>
              </div>

              {/* Starting Price */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Full Smile Set (20 Teeth)</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-slate-500 font-medium">Starting from</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">
                      £3,450
                    </span>
                    <span className="text-xs text-slate-500 font-medium">(~€4,040)</span>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <span className="block font-medium">Includes 4-Night Stay &amp; Transfers</span>
                  <span className="text-emerald-700 font-semibold">Save up to 70% vs UK &amp; Ireland</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl("Hello, I would like to ask questions about E.max Porcelain Veneers (4 night luxury stay) at Dent House Marrakech.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Ask Us on WhatsApp</span>
              </a>
              <Link
                to="/packages"
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:text-[#0284C7] transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </div>

        {/* Full Clinical Comparison Table */}
        <section id="comparison" className="scroll-mt-24 mt-14">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              <Microscope className="w-4 h-4" />
              <span>SIDE-BY-SIDE CLINICAL SPECIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1.5">
              Composite Bonding vs. E.max Veneers: Full Clinical Comparison
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Transparent clinical breakdown to help UK and Irish patients choose the safest, longest-lasting aesthetic option for their natural teeth.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-4 px-5 font-semibold w-1/4">Clinical Factor</th>
                  <th className="py-4 px-5 font-semibold text-sky-300 w-[37.5%]">
                    Direct Composite Bonding
                  </th>
                  <th className="py-4 px-5 font-semibold text-emerald-300 w-[37.5%]">
                    Ivoclar IPS e.max® Veneers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <th scope="row" className="py-3.5 px-5 font-bold text-slate-900 align-top">
                      {row.feature}
                    </th>
                    <td className="py-3.5 px-5 text-slate-700 align-top leading-relaxed">
                      {row.bonding}
                    </td>
                    <td className="py-3.5 px-5 text-slate-700 align-top leading-relaxed">
                      {row.veneers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contextual Internal Links Strip */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/packages"
              className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 hover:border-[#0284C7] transition-all flex items-center justify-between gap-3 group"
            >
              <div>
                <div className="text-xs font-bold text-[#0284C7] uppercase">All-Inclusive Pricing</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  View fixed £1,299 &amp; £3,450 packages
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0284C7] shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/aftercare"
              className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 hover:border-emerald-500 transition-all flex items-center justify-between gap-3 group"
            >
              <div>
                <div className="text-xs font-bold text-emerald-700 uppercase">1-Yr &amp; 5-Yr Guarantees</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  Read our UK warranty &amp; aftercare protocol
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-700 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/stories"
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all flex items-center justify-between gap-3 group"
            >
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase">Verified Results</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  See real UK patient before &amp; afters
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-700 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Action Prompt: Ask questions directly to help choose */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Not sure which treatment is best for your teeth?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold">
              Send us a photo on WhatsApp for a personalized recommendation.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Every smile is unique. Dr. Mouad and our clinical team will assess your enamel, alignment, and goals, then explain the best approach without any sales pressure.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello, I would like to send photos of my teeth and ask your dentists which treatment is best for me.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center gap-2 shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Send Photos on WhatsApp ({CLINIC_WHATSAPP_DISPLAY})</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
