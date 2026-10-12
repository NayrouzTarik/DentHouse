import React, { useState, useEffect } from 'react';
import {
  X,
  MessageCircle,
  Upload,
  Check,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Hotel,
  Car,
  Users,
  Gift,
  Calendar,
} from 'lucide-react';
import { TREATMENTS } from '../data/dentHouseData';

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
  const [treatment, setTreatment] = useState<string>('Swiss E.max® Porcelain Veneers');
  const [party, setParty] = useState<string>('duo');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Synchronize when prefilledPlan changes or modal opens
  useEffect(() => {
    if (prefilledPlan) {
      if (prefilledPlan.treatment) setTreatment(prefilledPlan.treatment);
      if (prefilledPlan.party) setParty(prefilledPlan.party);
    }
  }, [prefilledPlan, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Build the complete, rich WhatsApp message including every single selected detail
  const buildWhatsAppMessage = () => {
    const selectedTreatObj = TREATMENTS.find((t) => t.name === treatment) || TREATMENTS[1];
    const warrantyText = prefilledPlan?.warranty || selectedTreatObj.warranty;
    const checkupText = prefilledPlan?.checkup || selectedTreatObj.checkup;
    const stayText = prefilledPlan?.stay || 'Comfort Palmeraie Villa & Pool (Mid-Level)';
    const nightsCount = prefilledPlan?.nights || 2;
    const guestPerk = prefilledPlan?.freeGuestsIncluded > 0 ? ' [Perk: Bringing 2 Guests for Free]' : '';
    const extraNightsDiscount = prefilledPlan?.extraNights > 0 ? ` [${prefilledPlan.extraNights} Extra Night(s) at 50% OFF]` : '';
    const rideText = prefilledPlan?.ride || 'Standard Private Ride (All 4 Transfers Included)';
    const extrasList = prefilledPlan?.extras && prefilledPlan.extras.length > 0
      ? prefilledPlan.extras.join(', ')
      : 'None selected';
    const priceText = prefilledPlan?.perPersonPrice
      ? `£${prefilledPlan.perPersonPrice.toLocaleString()} per person (£${prefilledPlan.grandTotal.toLocaleString()} total for ${prefilledPlan.partyCount || 2} patients)`
      : `From £${selectedTreatObj.dentHousePriceGBP.toLocaleString()} per person`;
    const savingsText = prefilledPlan?.savings
      ? `Saving £${prefilledPlan.savings.toLocaleString()} vs UK Private Clinics`
      : 'Saving over 65% vs Harley Street';

    const textLines = [
      `Hello Dent House Marrakech!`,
      ``,
      `I would like to book my 2-Day Marrakech Dental Package. Here is my exact plan:`,
      ``,
      `📋 MY PACKAGE DETAILS:`,
      `• Party: ${party.toUpperCase()} (${party === 'solo' ? '1 Patient' : party === 'duo' ? '2 Patients - 15% Off' : '3 Patients - 20% Off'})`,
      `• Treatment: ${treatment} (Full Set of 20 Teeth)`,
      `• Warranty: ${warrantyText} (${checkupText})`,
      `• Palmeraie Stay: ${stayText} (${nightsCount} Nights)${guestPerk}${extraNightsDiscount}`,
      `• Chauffeur: ${rideText} (All 4 Airport & Clinic Shuttles Included)`,
      `• Extras: ${extrasList}`,
      `• Total Price: ${priceText}`,
      `• UK Advantage: ${savingsText}`,
      ``,
      `👤 PATIENT DETAILS:`,
      `• Name: ${name || 'UK Patient'}`,
      `• Phone: +44 ${phone || 'Not provided'}`,
      notes ? `• Special Requests: ${notes}` : `• Status: Requesting 3D smile review and earliest travel dates`,
      photoUploaded ? `• Photos: I have 2 smile photos ready to send on this chat` : ``,
      ``,
      `Could you please review my smile and confirm available travel dates?`
    ].filter(Boolean);

    return encodeURIComponent(textLines.join('\n'));
  };

  const whatsappUrl = `https://wa.me/212600000000?text=${buildWhatsAppMessage()}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-4">
        {/* Header */}
        <div className="bg-[#0284C7] p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast UK WhatsApp Response (Within 2 Hours)</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            {prefilledPlan ? 'Confirm Your 2-Day Package' : 'Free 3D Smile Consultation & Assessment'}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-sky-100">
            {prefilledPlan
              ? 'Your custom plan selections are ready. Review below and connect directly with our clinical team on WhatsApp.'
              : 'Zero obligation. Receive a preliminary 3D simulation and guaranteed fixed quote.'}
          </p>
        </div>

        {/* Selected Plan Preview Banner (Displays everything the user picked!) */}
        {prefilledPlan && (
          <div className="bg-sky-50/80 border-b border-sky-100 p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7]">
                Configured Package Summary
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Saving £{prefilledPlan.savings?.toLocaleString()} vs UK
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span>{prefilledPlan.treatment} (20 teeth)</span>
                <span>£{prefilledPlan.perPersonPrice?.toLocaleString()} / person</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-[11px]">
                <Users className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>Party: <strong className="capitalize">{prefilledPlan.party}</strong> ({prefilledPlan.partyCount} patients)</span>
                <span className="text-slate-300">·</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{prefilledPlan.warranty}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-[11px]">
                <Hotel className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Palmeraie Stay: {prefilledPlan.stay} ({prefilledPlan.nights} nights)</span>
              </div>
              {prefilledPlan.freeGuestsIncluded > 0 && (
                <div className="text-[11px] text-emerald-700 font-semibold pl-5">
                  ★ Included Perk: Bring up to 2 guests to stay for FREE!
                </div>
              )}
              {prefilledPlan.extraNights > 0 && (
                <div className="text-[11px] text-emerald-700 font-semibold pl-5">
                  ★ Included Perk: {prefilledPlan.extraNights} extra night(s) charged at 50% OFF!
                </div>
              )}
              <div className="flex items-center gap-2 text-slate-600 text-[11px]">
                <Car className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>Transfers: {prefilledPlan.ride} (4 Shuttles Included)</span>
              </div>
              {prefilledPlan.extras && prefilledPlan.extras.length > 0 && (
                <div className="text-[11px] text-slate-600 pl-5">
                  Extras: {prefilledPlan.extras.join(', ')}
                </div>
              )}
            </div>
          </div>
        )}

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-serif font-bold text-slate-900">
              Ready to Send to WhatsApp!
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your custom package has been compiled with your exact selections. Click the button below to open WhatsApp with your message already pre-filled.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md transition-all text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Open in WhatsApp Now with Custom Plan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-500 hover:text-slate-800 underline pt-2 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {/* Treatment Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Treatment
              </label>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full text-xs sm:text-sm rounded-xl border border-slate-200 px-3.5 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0284C7] cursor-pointer"
              >
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name} (Set of 20 teeth · £{t.dentHousePriceGBP} · {t.warranty})
                  </option>
                ))}
              </select>
            </div>

            {/* Party Selector */}
            <div className="grid grid-cols-3 gap-2">
              {(['solo', 'duo', 'trio'] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setParty(p)}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                    party === p
                      ? 'border-[#0284C7] bg-sky-50 text-[#0284C7]'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="capitalize">{p}</span>
                  {p === 'duo' && <span className="block text-[10px] text-emerald-600 font-bold">-15%</span>}
                  {p === 'trio' && <span className="block text-[10px] text-emerald-600 font-bold">-20%</span>}
                  {p === 'solo' && <span className="block text-[10px] text-slate-400">1 person</span>}
                </button>
              ))}
            </div>

            {/* Patient Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. James Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm rounded-xl border border-slate-200 px-3.5 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  UK WhatsApp Phone (Optional)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">
                    +44
                  </span>
                  <input
                    type="tel"
                    placeholder="7911 123456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm rounded-xl border border-slate-200 pl-11 pr-3.5 py-2.5 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>
              </div>
            </div>

            {/* Photo Upload (Optional) */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center justify-between">
                <span>Upload Smile Photos (Optional)</span>
                <span className="text-[11px] text-slate-400">Can also send directly in chat</span>
              </label>
              <div
                onClick={() => setPhotoUploaded(!photoUploaded)}
                className={`border border-dashed rounded-xl p-3 text-center cursor-pointer transition-colors ${
                  photoUploaded
                    ? 'border-emerald-400 bg-emerald-50/50'
                    : 'border-slate-300 hover:border-[#0284C7] bg-slate-50/50'
                }`}
              >
                {photoUploaded ? (
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>2 Smile Photos Attached (Ready for Assessment)</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                    <Upload className="w-4 h-4 text-[#0284C7]" />
                    <span>Click to attach front smile photo (JPEG/PNG)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Any specific requests or preferred travel dates?
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Planning travel next month, bringing 2 guests to stay in Palmeraie..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-xs sm:text-sm rounded-xl border border-slate-200 px-3.5 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              />
            </div>

            {/* Privacy note */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Strict medical confidentiality. Zero spam. No advance card required.</span>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Open in WhatsApp with My Plan</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="submit"
                className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <span>Save & Preview</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
