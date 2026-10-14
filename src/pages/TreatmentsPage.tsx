import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TreatmentsSection } from '../components/TreatmentsSection';
import { DosAndDontsSection } from '../components/DosAndDontsSection';
import { Sparkles, Sliders, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';

interface TreatmentsPageProps {
  onOpenConsultation: () => void;
  onSelectTreatmentForCalculator: (treatmentId: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onOpenConsultation,
  onSelectTreatmentForCalculator,
}) => {
  const navigate = useNavigate();

  const handleSelectTreatment = (treatmentId: string) => {
    onSelectTreatmentForCalculator(treatmentId);
    navigate('/calculator');
  };

  return (
    <div className="pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
            CLINICAL EXCELLENCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
            Our Cosmetic Dental Treatments
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Dent House Marrakech focuses strictly on aesthetic dentistry: minimally-invasive Composite Bonding and handcrafted Porcelain Veneers, designed to enhance your natural facial harmony.
          </p>
        </div>
      </div>

      {/* Main Treatments Comparison Section */}
      <TreatmentsSection
        onSelectTreatment={handleSelectTreatment}
        onOpenConsultation={onOpenConsultation}
      />

      {/* Dos & Don'ts + Stain Care Guide */}
      <DosAndDontsSection />

      {/* Conversion Banner */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                TAKE THE NEXT STEP
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-2">
                Ready to design your custom smile?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                Use our 5-step custom calculator to see pricing with Palmeraie accommodation and private transfers, or send your photos on WhatsApp for an assessment.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate('/calculator')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Sliders className="w-4 h-4 text-[#0284C7]" />
                  <span>Open Price Calculator</span>
                </button>
                <a
                  href={getWhatsAppUrl("Hello, I would like to request a free photo assessment for cosmetic dentistry at Dent House Marrakech.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Chat with Dental Team</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
