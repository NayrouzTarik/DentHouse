/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseDentHouse } from './components/WhyChooseDentHouse';
import { TreatmentsSection } from './components/TreatmentsSection';
import { PlanCalculator } from './components/PlanCalculator';
import { YourJourneySection } from './components/YourJourneySection';
import { TheClinicSection } from './components/TheClinicSection';
import { SocialProofAndTestimonials } from './components/SocialProofAndTestimonials';
import { FaqSection } from './components/FaqSection';
import { DosAndDontsSection } from './components/DosAndDontsSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<any>(null);
  const [activeTreatmentForCalculator, setActiveTreatmentForCalculator] = useState<string>('veneers');

  const handleOpenConsultation = () => {
    setSelectedPlanDetails(null);
    setConsultationModalOpen(true);
  };

  const handleOpenConsultationWithPlan = (plan: any) => {
    setSelectedPlanDetails(plan);
    setConsultationModalOpen(true);
  };

  const handleSelectTreatmentForCalculator = (treatmentId: string) => {
    setActiveTreatmentForCalculator(treatmentId);
    // Smooth scroll to packages section
    const elem = document.getElementById('packages');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePackages = () => {
    const elem = document.getElementById('packages');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">


      {/* Strict 3-zone Header Navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        activeSection="home"
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExplorePackages={handleExplorePackages}
        />

        {/* Why Choose Dent House (Inspo Mobile Pillars & Trust Reasons) */}
        <WhyChooseDentHouse onOpenConsultation={handleOpenConsultation} />

        {/* Treatments Section (Strictly Composite Bonding & Swiss E.max Veneers) */}
        <TreatmentsSection
          onSelectTreatment={handleSelectTreatmentForCalculator}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 5-Step Custom Plan & Pricing Calculator (Palmeraie stays, extra nights -50%, bring 2 guests free) */}
        <PlanCalculator
          onOpenConsultationWithPlan={handleOpenConsultationWithPlan}
          initialTreatmentId={activeTreatmentForCalculator}
        />

        {/* Your 2-Day Marrakech Journey (Luxury Palmeraie Stays & 4 Private Transfers) */}
        <YourJourneySection onOpenConsultation={handleOpenConsultation} />

        {/* The Clinic (Swiss E.max, 3Shape Trios 5, Zero Laser) */}
        <TheClinicSection onOpenConsultation={handleOpenConsultation} />

        {/* What to Do & What Not to Do (Clear Dos & Don'ts + 1yr/5yr Warranties) */}
        <DosAndDontsSection />

        {/* Real UK Patient Reviews & Testimonials */}
        <SocialProofAndTestimonials onOpenConsultation={handleOpenConsultation} />

        {/* UK FAQs */}
        <FaqSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Consultation & Smile Review Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        prefilledPlan={selectedPlanDetails}
      />

      {/* Floating Sticky Quick Action for Mobile/Desktop */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={handleOpenConsultation}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer active:scale-95 group"
          aria-label="Chat with UK Concierge on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white/20 shrink-0" />
          <span className="text-xs sm:text-sm font-bold pr-1">
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}
