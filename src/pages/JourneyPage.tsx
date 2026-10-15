import React from 'react';
import { Plane, Car, Sparkles, ShieldCheck, MapPin, MessageCircle, ArrowRight, CheckCircle2, Clock, UserCheck, Stethoscope } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';

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
      desc: 'Digital 3D intraoral scanning, customized shade selection, and precision crafting. No endless appointments or unnecessary delays.',
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
      title: '3Shape Trios® 3D Scanning',
      desc: 'Instant digital accuracy with zero uncomfortable impression trays or gagging putty.',
    },
    {
      title: 'Certified Medical Materials',
      desc: 'Genuine Ivoclar E.max lithium disilicate ceramics and micro-hybrid composite resins.',
    },
    {
      title: 'Prestigious Guéliz District',
      desc: 'Modern, sterile clinical suite located in central Marrakech, close to cafes and top residences.',
    },
    {
      title: 'Dedicated International Team',
      desc: 'Fluent English and French speaking dental specialists dedicated to your individual case.',
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Adil Benali',
      role: 'Lead Cosmetic Dental Surgeon & Smile Architect',
      credentials: 'Faculty of Odontology (Bordeaux) · 14+ Years Aesthetic Dentistry',
      specialty: 'Expert in Digital Smile Design, minimally invasive preparation, and bespoke E.max lithium disilicate veneers.',
      languages: 'English, French, Arabic',
    },
    {
      name: 'Dr. Leila Mansouri',
      role: 'Senior Aesthetic Dental Specialist',
      credentials: 'Faculty of Dental Surgery (Paris Diderot) · 10+ Years Practice',
      specialty: 'Specialist in multi-layered composite bonding, chairside anatomy replication, and high-gloss polish finishes.',
      languages: 'English, French',
    },
    {
      name: 'Hassan El Idrissi',
      role: 'Head of International Patient Hospitality & VIP Transfers',
      credentials: 'Luxury Concierge Management · 8+ Years Experience',
      specialty: 'Coordinates airport arrivals, dedicated Mercedes chauffeur transfers, and seamless city accommodations.',
      languages: 'English, French, Arabic',
    },
  ];

  const realPhotos = [
    {
      src: '/images/chauffeur_vip_transfer_1791832484434.jpg',
      title: 'VIP Mercedes Chauffeur Transfer',
      subtitle: 'Private airport meet & greet and direct clinic transfers in our Mercedes fleet',
      tag: 'Mercedes VIP Van',
    },
    {
      src: '/images/hero_denthouse_consultation_1791832441772.jpg',
      title: 'Digital Consultation Suite',
      subtitle: 'Interactive 3Shape Trios® 3D smile planning with our lead cosmetic surgeons',
      tag: '3D Digital Design',
    },
    {
      src: '/images/clinic_interior_luxury_1791832453390.jpg',
      title: 'High-Tech Treatment Operatory',
      subtitle: 'Surgically sterile environment with ergonomic dental suites and ambient lighting',
      tag: 'Guéliz Medical Center',
    },
    {
      src: '/images/marrakech_palmeraie_resort_1791832462639.jpg',
      title: 'Central Marrakech Accommodation',
      subtitle: 'Curated premium stays in central Marrakech for optimal rest between visits',
      tag: 'Central Stay',
    },
  ];

  return (
    <div className="pt-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center max-w-3xl">
        <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
          YOUR MARRAKECH EXPERIENCE
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-1.5 tracking-tight">
          Your Journey & The Clinic
        </h1>
        <p className="mt-2.5 text-sm sm:text-base text-slate-600">
          Everything arranged for you: private VIP transfers, central accommodation, and modern appointments in Marrakech.
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

        {/* 2. Meet Our Team Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
              EXPERT CLINICIANS & HOSPITALITY
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">
              Meet Our Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Senior cosmetic dental surgeons, certified ceramists, and dedicated VIP hospitality coordinators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-sky-300 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-4">
                    {i === 2 ? <UserCheck className="w-6 h-6" /> : <Stethoscope className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <div className="text-xs font-semibold text-[#0284C7] mt-0.5">{member.role}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{member.credentials}</div>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">{member.specialty}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Languages:</span>
                  <span className="font-semibold text-slate-700">{member.languages}</span>
                </div>
              </div>
            ))}
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
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
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
                src="/images/clinic_interior_luxury_1791832453390.jpg"
                alt="Dent House Marrakech Modern Clinic Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white p-2.5 rounded-xl text-xs flex items-center justify-between">
                <span className="font-semibold">Guéliz Medical District</span>
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
