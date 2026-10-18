/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { EnquiryTrackingProvider } from './components/EnquiryTrackingProvider';
import { trackBookingClick } from './utils/analytics';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from './data/dentHouseData';

// Pages
import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { PackagesPage } from './pages/PackagesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { StoriesPage } from './pages/StoriesPage';
import { AftercarePage } from './pages/AftercarePage';
import { JourneyPage } from './pages/JourneyPage';
import { FaqPage } from './pages/FaqPage';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<any>(null);
  const [activeTreatmentForCalculator, setActiveTreatmentForCalculator] = useState<string>('veneers');

  const handleOpenConsultation = () => {
    trackBookingClick({
      bookingType: 'open_consultation_modal',
      placement: 'cta_trigger',
    });
    setSelectedPlanDetails(null);
    setConsultationModalOpen(true);
  };

  const handleOpenConsultationWithPlan = (plan: any) => {
    trackBookingClick({
      bookingType: 'open_consultation_modal_with_plan',
      placement: 'plan_calculator',
      treatmentType: plan?.treatment || undefined,
    });
    setSelectedPlanDetails(plan);
    setConsultationModalOpen(true);
  };

  const handleSelectTreatmentForCalculator = (treatmentId: string) => {
    setActiveTreatmentForCalculator(treatmentId);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <EnquiryTrackingProvider>
        <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
          {/* Navigation Bar */}
          <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/treatments"
              element={
                <TreatmentsPage
                  onOpenConsultation={handleOpenConsultation}
                  onSelectTreatmentForCalculator={handleSelectTreatmentForCalculator}
                />
              }
            />
            <Route
              path="/packages"
              element={<PackagesPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/calculator"
              element={
                <CalculatorPage
                  onOpenConsultationWithPlan={handleOpenConsultationWithPlan}
                  activeTreatmentId={activeTreatmentForCalculator}
                />
              }
            />
            <Route path="/plan" element={<Navigate to="/calculator" replace />} />
            <Route
              path="/stories"
              element={<StoriesPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/aftercare"
              element={<AftercarePage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/journey"
              element={<JourneyPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/faqs"
              element={<FaqPage onOpenConsultation={handleOpenConsultation} />}
            />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenConsultation={handleOpenConsultation} />

        {/* Consultation & Smile Review Modal */}
        <ConsultationModal
          isOpen={consultationModalOpen}
          onClose={() => setConsultationModalOpen(false)}
          prefilledPlan={selectedPlanDetails}
        />

        {/* Floating Quick WhatsApp Action */}
        <div className="fixed bottom-5 right-5 z-40">
          <a
            href={getWhatsAppUrl("Hello, I would like to request a free consultation at Dent House Marrakech.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer active:scale-95 group"
            aria-label="Chat with Concierge on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white/20 shrink-0" />
            <span className="text-xs sm:text-sm font-bold pr-1">
              Chat on WhatsApp
            </span>
          </a>
        </div>
      </div>
      </EnquiryTrackingProvider>
    </BrowserRouter>
  );
}
