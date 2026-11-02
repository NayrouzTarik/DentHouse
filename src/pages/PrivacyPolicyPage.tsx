import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Cookie, 
  Sliders, 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CLINIC_WHATSAPP_DISPLAY, getWhatsAppUrl } from '../data/dentHouseData';

interface PrivacyPolicyPageProps {
  onOpenConsultation?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onOpenConsultation }) => {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy & Cookie Policy | Dent House Marrakech',
    description:
      'Official Privacy and Cookie Policy of Dent House Marrakech. Learn how we handle patient data, medical confidentiality, Google Ads tracking, and cookies in compliance with UK GDPR and Google advertising policies.',
    url: 'https://denthousemarrakech.com/privacy',
    publisher: {
      '@type': 'Dentist',
      name: 'Dent House Marrakech',
      url: 'https://denthousemarrakech.com/',
      telephone: '+212789668454',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bd. Allal Al Fassi',
        addressLocality: 'Marrakech',
        addressCountry: 'MA',
      },
    },
  };

  return (
    <div className="pt-6 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      <SEOHead
        title="Privacy Policy & Google Ads Compliance | Dent House Marrakech"
        description="Official Privacy Policy for Dent House Marrakech. Disclosures on patient data protection, medical confidentiality, Google Ads conversion tracking, GA4, and cookie preferences."
        canonicalUrl="https://denthousemarrakech.com/privacy"
        schemaData={privacySchema}
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Patient Privacy & Regulatory Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Privacy Policy & Data Protection
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            At Dent House Marrakech, patient confidentiality and data integrity are central to our medical practice. This policy outlines our standards for collecting, using, protecting, and managing your personal information, in full compliance with UK GDPR, Moroccan Law No. 09-08, and Google Advertising Policies.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
            <span><strong>Effective Date:</strong> November 2026</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> November 2026</span>
            <span>•</span>
            <span><strong>Entity:</strong> Dent House Marrakech (Cosmetic Dentistry)</span>
          </div>
        </div>
      </section>

      {/* Quick Summary Highlights for Google Ads Transparency */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-sky-300">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Google Advertising & Privacy Transparency Statement</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                In compliance with Google’s Advertising Policies for Google Ads and Remarketing, we explicitly notify visitors that this website uses third-party cookies (including Google tags) to track conversions, analyze website performance, and deliver relevant advertisements across the internet. You have full control over your advertising preferences and can opt out at any time.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Google Ads Settings (Opt-Out)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Google Analytics Opt-Out</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Sticky Table of Contents on Desktop */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Contents
              </span>
              <nav className="text-xs space-y-2 text-slate-600">
                <a href="#data-controller" className="block hover:text-[#0284C7] transition-colors">1. Data Controller</a>
                <a href="#data-collected" className="block hover:text-[#0284C7] transition-colors">2. Information We Collect</a>
                <a href="#lawful-basis" className="block hover:text-[#0284C7] transition-colors">3. Lawful Basis for Processing</a>
                <a href="#how-we-use-data" className="block hover:text-[#0284C7] transition-colors">4. How We Use Data</a>
                <a href="#google-ads" className="block hover:text-[#0284C7] font-semibold text-sky-700 transition-colors">5. Google Ads & Tag Disclosures</a>
                <a href="#google-analytics" className="block hover:text-[#0284C7] transition-colors">6. Google Analytics 4 (GA4)</a>
                <a href="#cookies" className="block hover:text-[#0284C7] transition-colors">7. Cookies & Tracking Technologies</a>
                <a href="#medical-confidentiality" className="block hover:text-[#0284C7] transition-colors">8. Medical & Photo Confidentiality</a>
                <a href="#whatsapp-policy" className="block hover:text-[#0284C7] transition-colors">9. WhatsApp Communications</a>
                <a href="#data-retention" className="block hover:text-[#0284C7] transition-colors">10. Data Retention & Transfers</a>
                <a href="#patient-rights" className="block hover:text-[#0284C7] transition-colors">11. Your Legal Rights (UK/EU)</a>
                <a href="#contact-dpo" className="block hover:text-[#0284C7] transition-colors">12. Contact & Data Inquiries</a>
              </nav>
            </div>
          </aside>

          {/* Legal Content Body */}
          <div className="lg:col-span-3 space-y-10 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
            
            {/* Section 1 */}
            <section id="data-controller" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Section 1</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                1. Who We Are & Data Controller Information
              </h2>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>
                  Dent House Marrakech operates a dedicated cosmetic dental clinic located at Bd. Allal Al Fassi, Marrakech, Morocco. In this Privacy Policy, references to <em>"Dent House"</em>, <em>"we"</em>, <em>"us"</em>, or <em>"our"</em> refer to Dent House Marrakech as the responsible <strong>Data Controller</strong>.
                </p>
                <p>
                  We provide direct composite bonding, porcelain veneers, and personalized smile makeover packages designed specifically for international and UK patients. We are committed to treating personal and clinical data with the highest medical standards of confidentiality, ethics, and legal compliance.
                </p>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 2 */}
            <section id="data-collected" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Section 2</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                2. Information We Collect
              </h2>
              <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
                <p>We may collect, record, and process the following categories of information:</p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">A. Contact & Personal Identity Data</h3>
                  <p className="text-xs text-slate-600">
                    Your name, email address, WhatsApp mobile phone number, country of residence, and preferred dates for consultation or travel to Marrakech.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">B. Clinical & Pre-Assessment Dental Data (Special Category Data)</h3>
                  <p className="text-xs text-slate-600">
                    Photographs of your teeth, smile recordings, dental histories, relevant dental records or radiographs (X-rays) you voluntarily submit via our digital assessment form or WhatsApp concierge. This data is treated as privileged medical data.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">C. Travel & Hospitality Coordination Data</h3>
                  <p className="text-xs text-slate-600">
                    Flight arrival and departure times (for complimentary VIP private airport transfers) and hotel booking preferences for our curated partner accommodations in Marrakech.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">D. Technical & Browsing Data</h3>
                  <p className="text-xs text-slate-600">
                    Internet protocol (IP) address (anonymized where applicable), browser type and version, device identifier, time zone, operating system, and data on how you interact with our website pages, buttons, and tools (such as our Treatment Calculator).
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 3 */}
            <section id="lawful-basis" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Section 3</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                3. Lawful Basis for Processing
              </h2>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>
                  Under the UK General Data Protection Regulation (UK GDPR), EU GDPR, and Moroccan Law 09-08, we process personal information strictly according to the following legal grounds:
                </p>
                <ul className="space-y-2.5 list-disc pl-5 text-xs sm:text-sm">
                  <li>
                    <strong>Explicit Consent:</strong> When you voluntarily submit a smile assessment request, provide dental photographs, or message us on WhatsApp, you give explicit consent for our clinical team to review your request and contact you.
                  </li>
                  <li>
                    <strong>Contractual Necessity:</strong> To fulfill the dental treatment plan, reserve clinic slots, schedule transfers, and provide the agreed package services.
                  </li>
                  <li>
                    <strong>Legitimate Interests:</strong> To optimize our website user experience, defend against fraudulent requests, and evaluate the efficacy of our advertising campaigns.
                  </li>
                  <li>
                    <strong>Provision of Healthcare & Medical Assessment:</strong> Under Article 9(2)(h) GDPR, clinical information is processed for the provision of healthcare, dental diagnostics, and medical treatment planning under professional confidentiality obligations.
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 4 */}
            <section id="how-we-use-data" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Section 4</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                4. How We Use Your Data
              </h2>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>We use your information exclusively for:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Preparing customized smile assessments and transparent fee quotations</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Coordinating clinical appointments at our clinic in Marrakech</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Arranging luxury hotel stays and VIP private chauffeur transfers</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Providing post-treatment aftercare advice, warranty checks, and night guards</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Measuring advertising performance on Google Ads and search engines</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Ensuring website security, debugging, and preventing unauthorized spam</span>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 5: Google Ads & Tag Disclosures */}
            <section id="google-ads" className="scroll-mt-24 p-5 sm:p-6 rounded-2xl bg-sky-50/70 border border-sky-200">
              <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase tracking-wider">
                <Sliders className="w-4 h-4 text-sky-700" />
                <span>Section 5 — Google Ads Transparency Disclosure</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                5. Google Ads, Conversion Tracking & Remarketing Notice
              </h2>
              <div className="text-sm text-slate-700 space-y-4 leading-relaxed">
                <p>
                  Dent House Marrakech uses <strong>Google Ads</strong> (operated by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, or Google Ireland Limited for European/UK users). We have implemented the Google Tag (<code className="px-1.5 py-0.5 bg-white rounded border border-sky-200 text-xs text-sky-900 font-mono">gtag.js</code>) with tag identifier <strong className="font-mono text-sky-900">AW-18548397646</strong>.
                </p>

                <div className="space-y-3 bg-white p-4 rounded-xl border border-sky-100 text-xs sm:text-sm">
                  <h3 className="font-bold text-slate-900">How Google Ads Uses Data on Our Site:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 text-xs">
                    <li>
                      <strong>Conversion Tracking:</strong> When you click on an advertisement placed by Google and reach our site or click to book an assessment, a temporary conversion cookie or data beacon is set. This enables Google and us to count conversions and evaluate the cost-effectiveness of our advertising.
                    </li>
                    <li>
                      <strong>Remarketing & Audience Segments:</strong> Third-party vendors, including Google, may use cookies to serve ads to you on third-party websites across the internet based on your prior visits to <span className="font-medium text-slate-800">denthousemarrakech.com</span>.
                    </li>
                    <li>
                      <strong>Non-PII Collection:</strong> Google Ads tracking records aggregated technical actions (e.g., page views, button clicks). It does not collect medical records or unencrypted personal identification.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm">How You Can Opt Out of Google Personalized Ads:</h3>
                  <p className="text-xs text-slate-600">
                    You can manage or disable personalized advertising by Google at any time by visiting the following links:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <a
                      href="https://adssettings.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      <span>Google Ads Settings</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://optout.networkadvertising.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
                    >
                      <span>Network Advertising Initiative (NAI) Opt-Out</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.youronlinechoices.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
                    >
                      <span>Your Online Choices (EDAA)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 6 */}
            <section id="google-analytics" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Section 6</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                6. Google Analytics 4 (GA4)
              </h2>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>
                  We use <strong>Google Analytics 4</strong> (Property Measurement ID: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-xs font-mono text-slate-800">G-084Y9CMNQR</code>) to understand how international patients discover our treatments and navigate our pages.
                </p>
                <p>
                  GA4 collects pseudonymized data such as session duration, device type, geographic location at the country/city level, and referral paths. IP anonymization is active by default in GA4. No patient names, telephone numbers, or medical photos are passed to Google Analytics.
                </p>
                <p className="text-xs">
                  To permanently prevent Google Analytics from processing your data across all websites, you can install the official{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0284C7] underline font-medium hover:text-sky-800"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 7 */}
            <section id="cookies" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <Cookie className="w-4 h-4" />
                <span>Section 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                7. Cookies & Local Storage Policy
              </h2>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>
                  Cookies are small text files placed on your device to ensure web functionality and measure traffic. Our website uses:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong>1. Strictly Necessary Cookies / Storage:</strong> Required for page navigation, session persistence (such as keeping selected treatments in the Plan Calculator), and basic site security.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong>2. Analytical & Performance Cookies:</strong> Set by Google Analytics 4 to evaluate visitor counts and popular dental packages.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong>3. Marketing & Advertising Cookies:</strong> Set by Google Ads (gtag.js) to measure ad engagement and show relevant dental tourism information.
                  </div>
                </div>
                <p className="text-xs text-slate-500 pt-2">
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. Note that disabling cookies may affect certain interactive tools such as the smile cost calculator.
                </p>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 8 */}
            <section id="medical-confidentiality" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Section 8</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                8. Medical Confidentiality & Smile Assessment Photographs
              </h2>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs sm:text-sm">
                  <strong>Strict Medical Guarantee:</strong> Any photographs, smile close-ups, or X-rays you share with Dent House Marrakech for assessment purposes are treated as strictly confidential medical records.
                </div>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>Photographs are reviewed only by certified cosmetic dentists and clinical coordinators.</li>
                  <li>We <strong>never</strong> publish, share, or broadcast patient photographs on Instagram, TikTok, Google Ads, or our website without <em>explicit, separate, written consent</em>.</li>
                  <li>You may request the immediate deletion of your submitted photos at any time.</li>
                </ul>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 9 */}
            <section id="whatsapp-policy" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Section 9</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                9. WhatsApp Concierge Communication
              </h2>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>
                  For the convenience of UK and international travelers, we provide direct communication via WhatsApp (official clinic desk: <span className="font-semibold text-slate-900">{CLINIC_WHATSAPP_DISPLAY}</span>).
                </p>
                <p>
                  WhatsApp messages, voice notes, and sent media are protected by WhatsApp's end-to-end encryption. By initiating a conversation on WhatsApp, you acknowledge that communication occurs across Meta Platforms Ireland Ltd. services according to WhatsApp’s own Terms and Privacy Policy.
                </p>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 10 */}
            <section id="data-retention" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Section 10</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                10. Data Retention & International Data Transfers
              </h2>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>
                  <strong>Retention Period:</strong> General inquiry records and calculation requests that do not proceed to treatment are securely deleted or anonymized within 24 months. For patients who undergo composite bonding or porcelain veneers at our clinic, clinical treatment records, shade logs, and warranty certificates are retained in accordance with Moroccan dental council statutory medical retention obligations.
                </p>
                <p>
                  <strong>International Transfers:</strong> Our clinic operates in Morocco. When patients from the UK, EU, or elsewhere transmit information to us, data is processed in Morocco under technical and organizational measures compliant with Moroccan Law 09-08 and contractual safeguards aligned with UK GDPR standards.
                </p>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 11 */}
            <section id="patient-rights" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Section 11</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                11. Your Legal Rights (UK GDPR, GDPR & CNDP)
              </h2>
              <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>Depending on your location, you hold statutory rights regarding your personal data:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong>Right to Access:</strong> Request a copy of the personal information and clinical notes we hold about you.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong>Right to Rectification:</strong> Request correction of inaccurate contact or personal details.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong>Right to Erasure ("To Be Forgotten"):</strong> Request deletion of inquiry data, photographs, and records where no statutory medical retention obligation applies.
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong>Right to Restrict or Object:</strong> Object to marketing communications or processing based on legitimate interests.
                  </div>
                </div>
                <p className="text-xs text-slate-500 pt-1">
                  You also have the right to lodge a complaint with your relevant supervisory authority (such as the UK Information Commissioner's Office - ICO, or the Moroccan CNDP - Commission Nationale de contrôle de la protection des Données à Caractère Personnel).
                </p>
              </div>
            </section>

            <hr className="border-slate-100" />

            {/* Section 12 */}
            <section id="contact-dpo" className="scroll-mt-24">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Section 12</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-1 mb-4">
                12. Contact Our Data Protection Team
              </h2>
              <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
                <p>
                  If you have questions about this Privacy Policy, your rights, or wish to opt out of any communications, contact our Data Protection Coordinator:
                </p>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                    <span><strong>Clinic Address:</strong> Dent House Marrakech, Bd. Allal Al Fassi, Marrakech, Morocco</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                    <span><strong>Phone / WhatsApp:</strong> {CLINIC_WHATSAPP_DISPLAY}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                    <span><strong>Privacy Inquiries:</strong> contact@denthousemarrakech.com</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={getWhatsAppUrl("Hello, I have a privacy or data inquiry regarding Dent House Marrakech.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <span>Contact Privacy Desk on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {onOpenConsultation && (
                    <button
                      type="button"
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all cursor-pointer"
                    >
                      <span>Book Free Smile Assessment</span>
                    </button>
                  )}
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
