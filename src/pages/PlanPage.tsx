import React from 'react';
import { PlanCalculator } from '../components/PlanCalculator';
import { ShieldCheck, Calendar, Users, Car } from 'lucide-react';

interface PlanPageProps {
  onOpenConsultationWithPlan: (plan: any) => void;
  activeTreatmentId: string;
}

export const PlanPage: React.FC<PlanPageProps> = ({
  onOpenConsultationWithPlan,
  activeTreatmentId,
}) => {
  return (
    <div className="pt-6">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#0284C7] uppercase font-sans">
            PACKAGE CALCULATOR
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-2 tracking-tight">
            Build Your 2-Day Marrakech Package
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Customize your complete treatment, luxury Palmeraie accommodation, and 4 private transfers. See real package prices before you travel.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-[#0284C7]">
              <Calendar className="w-4 h-4" />
              2 Days Base Stay (Extra nights 50% off)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800">
              <Users className="w-4 h-4" />
              Group Discounts: Duo 15% · Trio 20%
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700">
              <Car className="w-4 h-4 text-[#0284C7]" />
              4 Private Chauffeur Transfers Included
            </span>
          </div>
        </div>
      </div>

      {/* Interactive 5-Step Plan Calculator */}
      <PlanCalculator
        onOpenConsultationWithPlan={onOpenConsultationWithPlan}
        initialTreatmentId={activeTreatmentId}
      />
    </div>
  );
};
