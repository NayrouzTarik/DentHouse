import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import {
  CLINIC_WHATSAPP_DISPLAY,
  DEFAULT_CONSULTATION_MESSAGE,
  getWhatsAppUrl,
} from '../data/dentHouseData';
import { trackWhatsAppClick, trackBookingClick } from '../utils/analytics';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPlan?: any;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledPlan,
}) => {
  const [message, setMessage] = useState<string>(DEFAULT_CONSULTATION_MESSAGE);

  useEffect(() => {
    if (prefilledPlan) {
      const treatmentName = prefilledPlan.treatment || 'Premium Porcelain Veneers';
      const partyText =
        prefilledPlan.party === 'solo'
          ? 'Solo (1 patient)'
          : prefilledPlan.party === 'duo'
          ? 'Duo (2 patients - 15% discount)'
          : 'Trio (3 patients - 20% discount)';
      const stayText = prefilledPlan.stay || 'City Center Residence';
      const priceText = prefilledPlan.perPersonPrice
        ? `£${prefilledPlan.perPersonPrice.toLocaleString()} / person`
        : '';

      const planMessage = [
        "Hi Dent House Marrakech, I'd like to book a free consultation with my custom plan:",
        ``,
        `• Treatment: ${treatmentName} (20 teeth)`,
        `• Party: ${partyText}`,
        `• Stay: ${stayText} (${prefilledPlan.nights || 2} nights)`,
        priceText ? `• Estimated Price: ${priceText}` : '',
        `• Private Chauffeur: All 4 transfers included`,
        ``,
        'Could you please confirm available dates and earliest appointments?',
      ]
        .filter(Boolean)
        .join('\n');

      setMessage(planMessage);
    } else {
      setMessage(DEFAULT_CONSULTATION_MESSAGE);
    }
  }, [prefilledPlan, isOpen]);

  if (!isOpen) return null;

  const whatsappUrl = getWhatsAppUrl(message);

  const handleOpenWhatsApp = () => {
    trackWhatsAppClick({
      placement: 'consultation_modal',
      linkText: 'Open in WhatsApp',
      destinationUrl: 'whatsapp',
    });
    trackBookingClick({
      bookingType: prefilledPlan ? 'custom_plan_consultation' : 'free_consultation',
      placement: 'consultation_modal',
      treatmentType: prefilledPlan?.treatment || 'consultation',
    });
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-4">
        {/* Header bar matching the clean 1-click WhatsApp experience */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
              <MessageCircle className="w-4 h-4 fill-white/20" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block">
                Direct WhatsApp
              </span>
              <h3 className="text-base font-bold text-slate-900 leading-none">
                Message {CLINIC_WHATSAPP_DISPLAY}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {prefilledPlan && (
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-xs text-[#0284C7] font-medium">
              <Sparkles className="w-4 h-4 shrink-0 text-[#0284C7]" />
              <span>Your custom plan has been compiled into the message below.</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
              Message preview
            </label>
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={prefilledPlan ? 6 : 3}
                className="w-full text-sm rounded-xl border border-slate-200 p-3.5 bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:bg-white transition-all resize-none font-sans leading-relaxed"
                placeholder="Type your message..."
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              You can edit this message or send it directly.
            </p>
          </div>

          {/* Primary One-Click Action */}
          <div className="pt-2">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 text-sm cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Open in WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </button>
          </div>

          {/* Reassurance */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Fast response within 2 hours • Direct clinical team</span>
          </div>
        </div>
      </div>
    </div>
  );
};
