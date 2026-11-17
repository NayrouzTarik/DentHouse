import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Car, Sparkles, ShieldCheck, MapPin, MessageCircle, ArrowRight, CheckCircle2, Clock, UserCheck, Stethoscope, Award, Calculator } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';
import { SEOHead } from '../components/SEOHead';

interface JourneyPageProps {
  onOpenConsultation: () => void;
}

export const JourneyPage: React.FC<JourneyPageProps> = () => {
  const journeySteps = [
    {
      step: '01',
      title: 'Arrival & VIP Airport Transfer',
      subtitle: 'Day 1: Welcome to Marrakech',
      desc: 'Your private chauffeur meets you at Marrakech Airport (RAK) terminal exit and drives you directly to your central city accommodation.',
      icon: Car,
      tag: 'Chauffeur Included',
    },
    {
      step: '02',
      title: 'Smile Design & Treatment',
      subtitle: '2 Nights (Bonding) or 4 Nights (E.max)',
      desc: 'Bespoke smile design, customized shade matching, and precision crafting. No endless appointments or unnecessary delays.',
      icon: Sparkles,
      tag: '2 or 4 Nights Luxury Stay',
    },
    {
      step: '03',
      title: 'Smile Reveal & Safe Return',
      subtitle: 'Final Day: Departure',
      desc: 'Final bite check, high-gloss diamond polish, official clinical records handover, and private chauffeur transfer back to the airport.',
      icon: Plane,
      tag: 'Aftercare & Guarantee',
    },
  ];

  const clinicStrengths = [
    {
      title: 'Bespoke Smile Design & Shade Matching',
      desc: 'Tailored smile planning and natural shade selection matched carefully to your facial symmetry and goals.',
    },
    {
      title: 'High-Grade Aesthetic Materials',
      desc: 'Handcrafted E.max porcelain veneers and high-grade aesthetic composite resin chosen for durability and natural finish.',
    },
    {
      title: 'Modern Clinical Suite',
      desc: 'Modern, sterile clinical suite equipped with advanced dental technology, designed for patient comfort.',
    },
    {
      title: 'Dedicated International Team',
      desc: 'Fluent English and French speaking dental specialists dedicated to your individual case.',
    },
  ];

  const realPhotos = [
    {
      src: '/images/cabinet/chauffeur.webp',
      width: 2048,
      height: 1143,
      title: 'VIP Mercedes Chauffeur Transfer',
      subtitle: 'Private airport meet & greet and direct clinic transfers in our Mercedes fleet',
      tag: 'Mercedes VIP Van',
    },
    {
      src: '/images/cabinet/team_patient.webp',
      width: 1529,
      height: 2048,
      title: 'Gentle Chairside Treatment',
      subtitle: 'Precision cosmetic care and gentle chairside treatment by our experienced aesthetic dentist',
      tag: 'Chairside Care',
    },
    {
      src: '/images/cabinet/cabinet.webp',
      width: 1529,
      height: 2048,
      title: 'High-Tech Treatment Operatory',
      subtitle: 'Surgically sterile environment with ergonomic dental suites and ambient lighting',
      tag: 'Clinical Excellence',
    },
    {
      src: '/images/cabinet/staying.webp',
      width: 2048,
      height: 1143,
      title: 'Central Marrakech Accommodation',
      subtitle: 'Curated premium stays in central Marrakech for optimal rest between visits',
      tag: 'Central Stay',
    },
  ];

  const flightCorridors = [
    {
      region: 'London & South East (England)',
      airports: 'London Gatwick (LGW), Stansted (STN) & Luton (LTN)',
      route: 'Direct to Marrakech Menara (RAK)',
      duration: '~3h 30m',
      airlines: 'British Airways, easyJet, Ryanair, Wizz Air',
    },
    {
      region: 'North West (England)',
      airports: 'Manchester (MAN)',
      route: 'Direct to Marrakech Menara (RAK)',
      duration: '~3h 45m',
      airlines: 'easyJet, Ryanair, TUI',
    },
    {
      region: 'Midlands (England)',
      airports: 'Birmingham (BHX)',
      route: 'Direct to Marrakech Menara (RAK)',
      duration: '~3h 35m',
      airlines: 'Ryanair, easyJet, TUI',
    },
    {
      region: 'South West England & Wales',
      airports: 'Bristol (BRS) / Cardiff (via BRS)',
      route: 'Direct to Marrakech Menara (RAK)',
      duration: '~3h 25m',
      airlines: 'easyJet, Ryanair',
    },
    {
      region: 'Ireland & Northern Ireland',
      airports: 'Dublin (DUB) & Belfast (via DUB / LON)',
      route: 'Direct from Dublin to Marrakech (RAK)',
      duration: '~3h 45m',
      airlines: 'Ryanair, Aer Lingus (seasonal)',
    },
    {
      region: 'Scotland',
      airports: 'Edinburgh (EDI) & Glasgow (GLA)',
      route: 'Direct seasonal / 1-stop via London',
      duration: '~4h 00m',
      airlines: 'Ryanair, easyJet, British Airways',
    },
  ];

  return (
    <div className="pt-6">
      <SEOHead routePath="/journey" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center max-w-4xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          UK &amp; IRELAND TRAVEL HUB · MARRAKECH, MOROCCO
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-1.5 tracking-tight">
          Dental Tourism in Marrakech for UK &amp; Ireland Patients
        </h1>
        <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Everything coordinated around your direct ~3.5-hour flight: VIP airport meet &amp; greet, central Marrakech stays, and minimally invasive care led by Dr. Mouad.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-14">
        {/* 1. Simple 3-Step Journey */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              How Your Trip Unfolds in 3 Simple Steps
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Zero stress. Your dedicated chauffeur and clinical team handle every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeySteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-extrabold text-[#0284C7]/30">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-50 text-[#0284C7] px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                    <div className="text-xs font-semibold text-[#0284C7] mt-0.5">{item.subtitle}</div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included in every package</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Meet Our Team Section - Alternating Experience Showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest font-sans">
              THE PEOPLE BEHIND YOUR SMILE
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mt-1.5 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From the moment you touch down in Marrakech, our dedicated transport team, expert cosmetic dentists, and multilingual coordinators look after every single detail of your journey.
            </p>
          </div>

          <div className="space-y-8">
            {/* ROW 1: Text Left, Image Right - VIP Airport Transport & Black Van */}
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Text Left */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] text-xs font-bold uppercase tracking-wider">
                  <Car className="w-3.5 h-3.5" />
                  <span>Private Airport Chauffeur & Transfers</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-snug">
                  VIP Airport Meet & Greet in Our Black Van
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your journey starts the second you step out of Marrakech Menara Airport (RAK). Your dedicated private chauffeur, Aymane, greets you directly at the terminal exit holding a personalized name board and assists with all luggage.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Travel in total comfort in our executive black VIP van with air conditioning, chilled water, and Wi-Fi. All roundtrip transfers between the airport, your central hotel, and the clinic are fully coordinated and included in every stay package.
                </p>
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Airport Terminal Meet & Greet</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Executive Black Mercedes Fleet</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>All Clinic Transfers Included</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Zero Local Navigation Stress</span>
                  </div>
                </div>
              </div>

              {/* Image Right */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 sm:aspect-16/10 group">
                  <img
                    src="/images/cabinet/chauffeur.webp"
                    alt="Private Chauffeur with Black VIP Van at Marrakech Airport"
                    width={2048}
                    height={1143}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                      Marrakech Menara Airport (RAK)
                    </span>
                    <span className="text-[11px] font-bold text-sky-300 bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                      Executive Black Van
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Image Left, Text Right - The Clinic & Cosmetic Dentist */}
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              {/* Text Right */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Cosmetic Dentists & Advanced Clinic</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-snug">
                  Master Cosmetic Dentists & Precision Digital Suites
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Led by Dr Mouad, our cosmetic dental surgeons specialize in minimally invasive smile transformations, with specialized post-graduate training and over a decade of aesthetic expertise. Every procedure is tailored to your unique facial features and natural tooth dynamics.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Inside our modern operatory, we use bespoke smile design and shade matching to map your bite and proportions with precision. Experience gentle care, comfortable treatment protocols, and high-grade aesthetic materials.
                </p>
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Specialist Cosmetic Dentists</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Bespoke Smile Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Painless, Gentle Clinical Care</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Natural Micro-Shade Layering</span>
                  </div>
                </div>
              </div>

              {/* Image Left */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 sm:aspect-16/10 group">
                  <img
                    src="/images/cabinet/team_patient.webp"
                    alt="Dr. Mouad performing gentle chairside cosmetic bonding treatment at Dent House Marrakech"
                    width={1529}
                    height={2048}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                      Gentle Chairside Treatment
                    </span>
                    <span className="text-[11px] font-bold text-sky-300 bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                      Expert Aesthetic Dentist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 3: Text Left, Image Right - The Reception with Official Logo */}
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Text Left */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] text-xs font-bold uppercase tracking-wider">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Welcome & International Concierge</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 leading-snug">
                  Warm Patient Reception & Multilingual Coordination
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Step into our modern, tranquil clinic in the heart of Marrakech. Our welcoming patient lounge is designed to give you a relaxing, stress-free setting from your initial consultation through your final smile reveal.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our international coordinators speak fluent English and French, staying by your side to answer questions, guide your treatment steps, and coordinate aftercare guarantees. We treat every visitor with authentic Moroccan hospitality.
                </p>
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Fluent English & French Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Personal Care Coordinator</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Relaxing Patient Lounge</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>Modern & Relaxing Setting</span>
                  </div>
                </div>
              </div>

              {/* Image Right - Reception with Logo */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 sm:aspect-16/10 group">
                  <img
                    src="/images/cabinet/reception.webp"
                    alt="Dent House Marrakech Clinic Reception with Official 3D Logo"
                    width={960}
                    height={1280}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                      Dent House Marrakech Reception
                    </span>
                    <span className="text-[11px] font-bold text-sky-300 bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                      Official Clinic
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Real Behind-the-Scenes Photo Gallery (Mercedes Van, Clinic, Consultation) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
              AUTHENTIC GLIMPSE
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">
              Real Clinic & Transfer Photos
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Authentic behind-the-scenes photography of our Mercedes VIP fleet, digital consult rooms, and treatment operatories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {realPhotos.map((photo, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-4/3 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={photo.src}
                    alt={`${photo.title} — Dent House Marrakech cosmetic dentistry`}
                    width={photo.width}
                    height={photo.height}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-slate-950/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {photo.tag}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. The Clinic & Technology Strengths */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Photo */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md aspect-4/3 bg-slate-200 relative group">
              <img
                src="/images/cabinet/cabinet.webp"
                alt="Dent House Marrakech Modern Clinic Suite on Bd. Allal Al Fassi"
                width={1529}
                height={2048}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white p-2.5 rounded-xl text-xs flex items-center justify-between">
                <span className="font-semibold">Modern Clinical Suite</span>
                <span className="text-sky-300 font-bold">Marrakech</span>
              </div>
            </div>

            {/* 4 Clean Strengths */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                  CLINICAL EXCELLENCE
                </span>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">
                  World-Class Standards & Digital Care
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  We combine European digital dental technology with genuine Moroccan hospitality.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {clinicStrengths.map((s, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <h4 className="text-xs font-bold text-slate-900">{s.title}</h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4B. Meet Dr. Mouad & Clinical Standards (E-E-A-T Authority) */}
        <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200/70">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Clinical Governance &amp; E-E-A-T Standards</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Meet Dr. Mouad &amp; Our Clinical Standards in Marrakech
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your dental transformation is led personally by <strong className="text-slate-900">Dr. Mouad</strong>, a licensed cosmetic dental surgeon registered with the{' '}
                <strong className="text-slate-900">Ordre National des Médecins Dentistes du Maroc</strong>. Every smile makeover follows conservative European prosthodontic principles—protecting healthy tooth structure while delivering natural shade translucency.
              </p>
            </div>
            <div className="shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-1.5 min-w-[240px]">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Clinic Address</span>
              </div>
              <p className="text-slate-600">Bd. Allal Al Fassi, Marrakech, Morocco</p>
              <p className="text-[11px] text-emerald-700 font-semibold pt-1">
                15 mins from Marrakech Menara Airport (RAK)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Strict International Hygiene</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict international hygiene and clinical standards, individually sealed sterile instruments opened chairside, and rigorous cross-infection control protocols.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                <Stethoscope className="w-4 h-4" />
                <span>Premium Aesthetic Materials</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Exclusively <strong>handcrafted E.max porcelain veneers</strong>, <strong>high-grade aesthetic composite resin</strong>, and <strong>bespoke smile design &amp; shade matching</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-[#0284C7] font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Zero Aggressive Shaving Policy</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We reject &ldquo;Turkey teeth&rdquo; peg-crown preparation. Direct bonding requires zero enamel drilling, and E.max veneers preserve natural enamel with sub-0.3 mm prep.
              </p>
            </div>
          </div>
        </section>

        {/* 4C. Direct UK & Ireland Flight Corridors Table */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
              DIRECT ~3.5-HOUR FLIGHTS TO MARRAKECH (RAK)
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1.5">
              UK &amp; Ireland Flight Corridors to Marrakech
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Marrakech Menara Airport (RAK) sits just 15 minutes from Dent House with direct daily flights across England, Wales, Scotland, Ireland, and Northern Ireland connections.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-3.5 px-5 font-semibold">UK / Ireland Region</th>
                  <th className="py-3.5 px-5 font-semibold">Departure Airports</th>
                  <th className="py-3.5 px-5 font-semibold">Flight Route</th>
                  <th className="py-3.5 px-5 font-semibold text-sky-300">Flight Time</th>
                  <th className="py-3.5 px-5 font-semibold">Typical Carriers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {flightCorridors.map((fc, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <th scope="row" className="py-3.5 px-5 font-bold text-slate-900">
                      {fc.region}
                    </th>
                    <td className="py-3.5 px-5 text-slate-700">{fc.airports}</td>
                    <td className="py-3.5 px-5 text-slate-700">{fc.route}</td>
                    <td className="py-3.5 px-5 font-bold text-[#0284C7] whitespace-nowrap">{fc.duration}</td>
                    <td className="py-3.5 px-5 text-slate-600">{fc.airlines}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contextual Internal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7] hover:bg-sky-100 text-xs sm:text-sm font-bold transition-colors"
            >
              <Calculator className="w-4 h-4" />
              <span>Estimate your smile &amp; stay cost</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0284C7] hover:border-sky-200 text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Read our UK &amp; Ireland dental travel FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* 5. Flight & Travel Assistance (Crisp Banner) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-sky-400 text-xs font-bold uppercase">
              <Plane className="w-4 h-4" />
              <span>Easy Travel from the UK & Europe</span>
            </div>
            <h3 className="text-xl font-serif font-bold">
              Direct 3.5h flights arrive daily in Marrakech (RAK).
            </h3>
            <p className="text-xs text-slate-300 max-w-lg">
              Low-cost direct flights from London Gatwick, Stansted, Manchester, Bristol, and major European cities.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Hello, I would like to check available appointment dates and travel advice for Marrakech.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center gap-2 shadow-xs transition-all whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Check Travel Dates on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
