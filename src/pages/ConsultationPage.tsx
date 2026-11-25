import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Lock,
  ArrowRight,
  Send,
  Loader2,
} from 'lucide-react';
import {
  CLINIC_WHATSAPP_DISPLAY,
  CLINIC_PHONE_DISPLAY,
  CLINIC_WHATSAPP_NUMBER,
  getWhatsAppUrl,
  GOOGLE_SHEET_LEAD_WEBHOOK_URL,
} from '../data/dentHouseData';
import { trackGenerateLead, trackGoogleAdsConversion } from '../utils/analytics';
import { SEOHead } from '../components/SEOHead';

interface ConsultationPageProps {
  onOpenConsultation?: () => void;
}

export const ConsultationPage: React.FC<ConsultationPageProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: '',
    travelDates: '',
    patients: '1 (Solo)',
    message: '',
    consent: false,
  });

  const [customTreatment, setCustomTreatment] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === 'treatment' && value !== 'Custom treatment') {
        setCustomTreatment('');
      }
    }
  };

  const finalTreatmentName =
    formData.treatment === 'Custom treatment'
      ? customTreatment.trim()
        ? `Custom: ${customTreatment.trim()}`
        : ''
      : formData.treatment;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !finalTreatmentName) {
      setErrorMessage('Please fill in your name, phone number, and select or specify your treatment.');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Please confirm your consent to process your enquiry details.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const submissionPayload = {
      timestamp: new Date().toISOString(),
      formattedDate: new Date().toLocaleString('en-GB', { timeZone: 'Africa/Casablanca' }),
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      treatment: finalTreatmentName,
      travelDates: formData.travelDates.trim(),
      patients: formData.patients,
      message: formData.message.trim(),
      consent: formData.consent ? 'Yes' : 'No',
      source: 'consultation_page',
    };

    // 1. Local storage backup so leads are never lost
    try {
      const existing = JSON.parse(localStorage.getItem('denthouse_leads') || '[]');
      existing.unshift(submissionPayload);
      localStorage.setItem('denthouse_leads', JSON.stringify(existing.slice(0, 50)));
    } catch {
      // LocalStorage access restricted or unavailable
    }

    // 2. Track analytics & Google Ads conversions
    try {
      trackGenerateLead({
        leadMethod: 'form_submission',
        formName: 'consultation_form',
        treatmentInterest: finalTreatmentName,
      });
      trackGoogleAdsConversion();
    } catch {
      // Fail-safe tracking
    }

    // 3. Send to Google Sheets webhook (Google Apps Script Web App)
    if (GOOGLE_SHEET_LEAD_WEBHOOK_URL && GOOGLE_SHEET_LEAD_WEBHOOK_URL.startsWith('http')) {
      try {
        await fetch(GOOGLE_SHEET_LEAD_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors', // Google Apps Script web apps redirect with 302
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionPayload),
        });
      } catch (err) {
        console.warn('Google Sheet webhook network error, saved to local backup:', err);
      }
    }

    setStatus('success');
  };

  const whatsappFollowUpText = `Hi Dent House Marrakech, I just submitted a consultation enquiry on your website:
• Name: ${formData.fullName}
• Treatment: ${finalTreatmentName || 'Consultation'}
• Travel: ${formData.travelDates || 'Flexible'}

I would like to share photos of my smile for a clinical assessment.`;

  return (
    <>
      <SEOHead routePath="/consultation" />

      <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-16 md:py-20 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mb-10">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Book your consultation
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Tell us a little about what you&apos;re looking for. We only ask for what we need to reply.
            </p>
          </div>

          {/* Main Grid: Form Left (7 cols on lg), Clinic Details Right (5 cols on lg) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200/80">
              {status === 'success' ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      Thank you, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your consultation enquiry has been safely received. Our patient concierge will review your details and reach out within 2 hours.
                    </p>
                  </div>

                  <div className="p-4 bg-sky-50/70 border border-sky-100 rounded-2xl max-w-md mx-auto text-left text-xs text-slate-700 space-y-2">
                    <div className="flex items-center gap-2 font-semibold text-sky-900">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Optional: Send photos on WhatsApp for quicker assessment</span>
                    </div>
                    <p className="text-slate-600">
                      If you have close-up photos of your smile or dental records, sending them on WhatsApp allows Dr. Mouad to prepare your preliminary plan faster.
                    </p>
                    <a
                      href={getWhatsAppUrl(whatsappFollowUpText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-full shadow-xs transition-colors"
                    >
                      <span>Open WhatsApp with my details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setCustomTreatment('');
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          treatment: '',
                          travelDates: '',
                          patients: '1 (Solo)',
                          message: '',
                          consent: false,
                        });
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 underline transition-colors"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Row 1: Full name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 outline-hidden text-sm text-slate-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        WhatsApp or phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+44 ..."
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 outline-hidden text-sm text-slate-900 transition-colors placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Treatment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email (optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 outline-hidden text-sm text-slate-900 transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="treatment" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Treatment of interest *
                      </label>
                      <select
                        id="treatment"
                        name="treatment"
                        required
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 outline-hidden text-sm text-slate-900 transition-colors bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="Composite Bonding (Up to 20 Teeth)">Direct Composite Bonding (Up to 20 Teeth)</option>
                        <option value="E.max Porcelain Veneers (Set of 20 Teeth)">Handcrafted E.max Porcelain Veneers (Set of 20 Teeth)</option>
                        <option value="Both / Compare Bonding & Veneers">Both / Compare Bonding &amp; Veneers</option>
                        <option value="Custom treatment">Custom treatment (specify below)...</option>
                      </select>

                      {formData.treatment === 'Custom treatment' && (
                        <div className="mt-2.5 animate-in fade-in duration-200">
                          <label htmlFor="customTreatment" className="block text-[11px] font-semibold text-sky-800 mb-1">
                            Type your custom treatment *
                          </label>
                          <input
                            id="customTreatment"
                            type="text"
                            required
                            placeholder="e.g. 8 upper veneers, dental implants, gap closure, whitening..."
                            value={customTreatment}
                            onChange={(e) => setCustomTreatment(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-sky-300 focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 outline-hidden text-sm text-slate-900 transition-colors bg-sky-50/20 placeholder:text-slate-400"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Travel Dates & Patients */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="travelDates" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Preferred travel dates (optional)
                      </label>
                      <input
                        id="travelDates"
                        type="text"
                        name="travelDates"
                        placeholder="e.g. mid-March"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 outline-hidden text-sm text-slate-900 transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="patients" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Number of patients
                      </label>
                      <select
                        id="patients"
                        name="patients"
                        value={formData.patients}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 outline-hidden text-sm text-slate-900 transition-colors bg-white"
                      >
                        <option value="1 (Solo)">1 (Solo)</option>
                        <option value="2 (Duo - 15% discount)">2 (Duo - 15% discount)</option>
                        <option value="3 (Trio - 20% discount)">3 (Trio - 20% discount)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Your message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us what you'd like to change about your smile."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 outline-hidden text-sm text-slate-900 transition-colors placeholder:text-slate-400 resize-y"
                    />
                    <p className="mt-1.5 text-[11px] text-slate-500">
                      Please don&apos;t upload photos here — send them securely on WhatsApp after submitting.
                    </p>
                  </div>

                  {/* Row 5: Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded text-slate-900 border-slate-300 focus:ring-slate-900 cursor-pointer"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed">
                        I consent to Dent House Marrakech processing my details, including any health information I share, to respond to my enquiry, as described in the{' '}
                        <Link to="/privacy" className="text-slate-900 underline hover:text-[#0284C7]">
                          Privacy Policy
                        </Link>
                        . My data is transferred to Morocco for this purpose.
                      </span>
                    </label>
                  </div>

                  {/* Row 6: Submit Button & WhatsApp Inline Link */}
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium text-sm rounded-full shadow-xs transition-all cursor-pointer active:scale-95"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send enquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <span>Prefer to chat?</span>
                      <a
                        href={getWhatsAppUrl("Hello, I would like to enquire about a smile consultation at Dent House Marrakech.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-900 hover:text-[#0284C7] underline transition-colors"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Clinic Details & Privacy Notice */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Clinic Details */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                  Clinic details
                </h2>

                <div className="space-y-5 text-xs text-slate-600">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">Address</div>
                      <div className="text-slate-600 mt-0.5">Bd. Allal Al Fassi, Marrakech, Morocco</div>
                    </div>
                  </div>

                  {/* WhatsApp concierge */}
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">WhatsApp concierge</div>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 font-medium hover:text-[#0284C7] transition-colors mt-0.5 block"
                      >
                        {CLINIC_WHATSAPP_DISPLAY}
                      </a>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Our team aims to reply on WhatsApp within 2 hours.
                      </p>
                    </div>
                  </div>

                  {/* Reception */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">Reception</div>
                      <a
                        href={`tel:${CLINIC_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                        className="text-slate-900 font-medium hover:text-[#0284C7] transition-colors mt-0.5 block"
                      >
                        {CLINIC_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">Email</div>
                      <a
                        href="mailto:contact@denthousemarrakech.com"
                        className="text-slate-900 font-medium hover:text-[#0284C7] transition-colors mt-0.5 block"
                      >
                        contact@denthousemarrakech.com
                      </a>
                    </div>
                  </div>

                  {/* Opening hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">Opening hours</div>
                      <div className="text-slate-600 mt-0.5 leading-relaxed">
                        Monday to Saturday: 09:00 - 19:00 (GMT+1). Closed Sundays for clinical deep-sterilisation.
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">
                        UK &amp; international patient support available 7 days a week on WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Action */}
                <div className="mt-7">
                  <a
                    href="https://maps.google.com/?q=Boulevard+Allal+Al+Fassi+Marrakech+Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 font-medium text-xs hover:bg-slate-50 transition-colors text-center block"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Card 2: Your Privacy */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/80">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-slate-700" />
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                    Your privacy
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Photos of your teeth may count as health data. We use them only to assess your enquiry, with your explicit consent, and never publish them without a separate written consent form.
                </p>
              </div>

              {/* Card 3: What Happens Next */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/80">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-4">
                  What happens next?
                </h3>
                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Clinical Review</div>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        Dr. Mouad and our cosmetic dental coordinators assess your enquiry, tooth anatomy, and treatment preferences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Personalized Quote &amp; Advice</div>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        Within 2 hours, we provide transparent fixed package pricing in GBP (£) and EUR (€) with zero hidden fees.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Travel &amp; Stay Coordination</div>
                      <p className="text-slate-600 mt-0.5 leading-relaxed">
                        Once you decide to proceed, we reserve your preferred clinic dates, hotel stay, and private chauffeur transfers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
