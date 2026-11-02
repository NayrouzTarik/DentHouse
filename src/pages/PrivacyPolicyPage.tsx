import React from 'react';
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
  ArrowRight,
  HeartPulse,
  UserCheck,
  Globe2,
  Clock,
  Sparkles
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
    name: 'Privacy Policy | Dent House Marrakech',
    description:
      'Official Privacy Policy of Dent House Marrakech. Full transparency on patient data, health information, Google Ads tracking, UK GDPR rights, and data protection in Marrakech, Morocco.',
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
        title="Privacy Policy | Dent House Marrakech"
        description="Privacy Policy for Dent House Marrakech. Full transparency on data collection, health information, Google Ads and analytics cookies, UK GDPR patient rights, and contact details."
        canonicalUrl="https://denthousemarrakech.com/privacy"
        schemaData={privacySchema}
      />

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>UK GDPR & CNDP Data Protection Policy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500 font-medium">
            <span className="text-slate-900 font-semibold">Dent House Marrakech</span>
            <span>·</span>
            <span className="text-sky-700 font-mono text-xs">denthousemarrakech.com</span>
            <span>·</span>
            <span>Last updated: 2 November 2026</span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            This policy outlines how Dent House Marrakech collects, protects, and processes your personal data and health information when using our website, requesting a smile assessment, or communicating with our clinical team.
          </p>
        </div>
      </section>

      {/* Quick Google Ads & Cookie Controls Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-sky-300">
              <Lock className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm sm:text-base font-bold">Google Advertising & Privacy Transparency Notice</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                We use Google Tag (<code className="px-1.5 py-0.5 bg-white/10 rounded font-mono text-xs text-sky-200">gtag.js</code>, ID: <strong className="text-white font-mono">AW-18548397646</strong>) and Google Analytics (<strong className="text-white font-mono">G-084Y9CMNQR</strong>) to measure ad effectiveness and site traffic. You can adjust your Google Ads preferences or opt out anytime below.
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2.5">
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Google Ads Settings (Opt-Out)</span>
                  <ExternalLink className="w-3 h-3 text-slate-300" />
                </a>
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Google Analytics Opt-Out</span>
                  <ExternalLink className="w-3 h-3 text-slate-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Policy Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-10">

          {/* 1. Who we are */}
          <section id="who-we-are" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>1. Who we are</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              1. Who we are
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                This website is operated by <strong>Dent House Marrakech SARL</strong>, trading as <strong>Dent House Marrakech</strong>, located at <strong>Bd. Allal Al Fassi, Marrakech, Morocco</strong> ("we", "us", "our"). We are the controller of the personal data described in this policy.
              </p>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <div><strong>Contact us about privacy at:</strong> <a href="mailto:contact@denthousemarrakech.com" className="text-sky-700 underline font-medium">contact@denthousemarrakech.com</a> or via WhatsApp on <a href={getWhatsAppUrl("Hello, I have a privacy inquiry.")} target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">{CLINIC_WHATSAPP_DISPLAY}</a>.</div>
                <div><strong>UK & International Patient Desk / Data Protection Contact:</strong> International Patient Desk, Dent House Marrakech, Bd. Allal Al Fassi, Marrakech, Morocco · Email: <span className="font-mono text-slate-900">contact@denthousemarrakech.com</span> · Phone: <span className="font-mono text-slate-900">{CLINIC_WHATSAPP_DISPLAY}</span>.</div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 2. What data we collect */}
          <section id="data-we-collect" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <UserCheck className="w-4 h-4" />
              <span>2. What data we collect</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              2. What data we collect
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>When you fill in our enquiry form, message us on WhatsApp or contact us, we collect:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Your name</li>
                <li>Your WhatsApp or phone number</li>
                <li>Your email address</li>
                <li>Any photos or messages you choose to send us about your smile and the treatment you want</li>
                <li>Your preferred travel dates, if you share them</li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-600 pt-2">
                When you visit our website, we also collect through cookies and similar technologies (only if you accept them): your IP address, device and browser type, the pages you view, how you arrived on our site (for example from a Google ad), and your actions on the site, such as clicking our WhatsApp button or submitting a form.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 3. Health information */}
          <section id="health-information" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <HeartPulse className="w-4 h-4" />
              <span>3. Health information</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              3. Health information
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950">
                <strong>Medical Confidentiality Standard:</strong> Photos of your teeth and information about your dental condition may count as health data, which is a special category of personal data. Please only send us what you are comfortable sharing. We use this information only to assess your enquiry and recommend treatment, and we process it on the basis of your explicit consent, which you can withdraw at any time.
              </div>
              <p className="text-xs text-slate-500">
                Your smile photos and dental records are never published, shared, or displayed publicly without a separate, explicit written consent form signed by you.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 4. Why we use your data and our legal basis */}
          <section id="why-we-use-data" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>4. Legal basis</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              4. Why we use your data and our legal basis
            </h2>
            <div className="text-sm text-slate-600 space-y-2.5 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  <strong>To reply to your enquiry and give you a free assessment.</strong> Legal basis: your consent, and steps taken at your request before entering into a contract.
                </li>
                <li>
                  <strong>To arrange and deliver treatment, accommodation and transfers.</strong> Legal basis: performance of a contract.
                </li>
                <li>
                  <strong>To contact you by WhatsApp, phone and email about your enquiry.</strong> Legal basis: your consent.
                </li>
                <li>
                  <strong>To send marketing messages about our services.</strong> Legal basis: your consent. You can opt out at any time.
                </li>
                <li>
                  <strong>To measure and improve our website and advertising.</strong> Legal basis: your consent (cookies).
                </li>
                <li>
                  <strong>To keep records and meet legal obligations.</strong> Legal basis: legal obligation and our legitimate interests.
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 5. Who we share your data with */}
          <section id="who-we-share-data-with" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>5. Data sharing</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              5. Who we share your data with
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>We do not sell your data. We may share it with:</p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Our dentists and clinical team</strong>, to assess and carry out your treatment</li>
                <li>
                  <strong>Service providers who help us run the business</strong>, such as website hosting (Vercel / Cloudflare), form and email communication tools, WhatsApp Business (Meta Platforms Ireland Ltd.), and analytics and tag providers (Google Analytics 4 with ID <span className="font-mono text-slate-900">G-084Y9CMNQR</span> and Google Tag Manager / Google Ads with tag ID <span className="font-mono text-slate-900">AW-18548397646</span>)
                </li>
                <li><strong>Advertising platforms such as Google</strong>, to measure the performance of our ads (only with your cookie consent)</li>
                <li>
                  <strong>Hotels, drivers and other partners</strong>, only the details needed to organise your stay and transfers (we share only your name, arrival/departure flight times, and hotel booking dates with our partnered luxury Marrakech hotels and licensed private VIP airport chauffeurs)
                </li>
                <li><strong>Authorities</strong>, where the law requires it</li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 6. International transfers */}
          <section id="international-transfers" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <Globe2 className="w-4 h-4" />
              <span>6. International transfers</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              6. International transfers
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                We are based in Morocco, so data you send us from the United Kingdom is transferred outside the UK. Morocco does not currently have a UK adequacy decision, so we protect your data using your explicit informed consent for the transfer (Article 49(1)(a) UK GDPR) when submitting an enquiry or travel booking, complemented by standard contractual clauses, technical encryption measures, and Moroccan statutory medical secrecy protections under Moroccan Law No. 09-08.
              </p>
              <p className="text-xs sm:text-sm">
                Some of our providers (for example Google or Meta) may also process data in other countries under their own safeguards (such as the UK International Data Transfer Addendum and EU Standard Contractual Clauses). Contact us for details.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 7. How long we keep your data */}
          <section id="data-retention" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4" />
              <span>7. Retention</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              7. How long we keep your data
            </h2>
            <div className="text-sm text-slate-600 space-y-2.5 leading-relaxed">
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  <strong>Enquiries that do not go ahead:</strong> 12 months from the date of your last interaction with us, after which records are securely purged.
                </li>
                <li>
                  <strong>Patient and treatment records:</strong> A minimum of 5 years following completed treatment, in compliance with Moroccan dental council statutory medical retention obligations and our smile warranty protocols (5-year porcelain veneers warranty / 1-year composite bonding warranty).
                </li>
                <li>
                  <strong>Marketing contact details:</strong> until you unsubscribe, then only a suppression record to ensure you are not contacted again.
                </li>
                <li>
                  <strong>Cookie data:</strong> see our Cookie Policy below (typically from session duration up to 13 months, or until cleared in your browser).
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 8. Cookies and tracking */}
          <section id="cookies-tracking" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <Cookie className="w-4 h-4" />
              <span>8. Cookies & tracking</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              8. Cookies and tracking
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                We use cookies for essential site functions and, if you accept, for analytics and advertising (for example Google Analytics 4 [<span className="font-mono text-slate-800">G-084Y9CMNQR</span>] and Google Ads [<span className="font-mono text-slate-800">AW-18548397646</span>]).
              </p>
              <p>
                You can change your choice at any time by clicking{' '}
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event('open-cookie-banner'))}
                  className="text-sky-700 font-semibold underline hover:text-sky-900 cursor-pointer"
                >
                  Cookie Preferences
                </button>
                , through your browser settings, or directly via{' '}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 font-semibold underline hover:text-sky-900"
                >
                  Google Ads Settings (Opt-Out)
                </a>{' '}
                and the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 font-semibold underline hover:text-sky-900"
                >
                  Google Analytics Opt-out Add-on
                </a>.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                <strong>Cookie Categories:</strong> (1) Essential cookies (required for site navigation and plan calculator memory); (2) Analytical cookies (anonymized visitor statistics via GA4); (3) Marketing/Ad cookies (measuring campaign performance via Google Ads conversion tracking).
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 9. Your rights */}
          <section id="your-rights" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>9. Your rights</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              9. Your rights
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>Under UK GDPR you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Ask us to delete your data</li>
                <li>Restrict or object to how we use it</li>
                <li>Receive your data in a portable format</li>
                <li>Withdraw your consent at any time, without affecting what we did before</li>
              </ul>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 mt-2 space-y-2">
                <p>
                  To use any of these rights, email <a href="mailto:contact@denthousemarrakech.com" className="text-sky-700 underline font-medium">contact@denthousemarrakech.com</a>. We will reply within one month.
                </p>
                <p className="text-slate-500 text-xs">
                  You can also complain to the UK Information Commissioner's Office (<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">ico.org.uk</a>), or to Morocco's data protection authority, the CNDP (Commission Nationale de contrôle de la protection des Données à Caractère Personnel, <a href="https://www.cndp.ma" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">cndp.ma</a>, Boulevard Annakhil, Hay Riad, Rabat, Morocco), although we hope you will contact us first.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 10. Marketing messages */}
          <section id="marketing-messages" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <Mail className="w-4 h-4" />
              <span>10. Marketing</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              10. Marketing messages
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                If you agree, we may contact you about our services. Every email includes an unsubscribe link, and you can reply "STOP" to any WhatsApp message to opt out immediately.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 11. Security */}
          <section id="security" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4" />
              <span>11. Security</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              11. Security
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                We take reasonable steps to protect your data, including SSL/TLS HTTPS encryption on all web interactions, restricted role-based staff access controls limited strictly to treating dentists and coordinators, end-to-end encrypted messaging via WhatsApp, and password-protected secure clinic systems. No online method is completely secure, so please avoid sending information you do not want to share.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 12. Children */}
          <section id="children" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>12. Children</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              12. Children
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                Our services are for adults. We do not knowingly collect data from anyone under 18 without a parent or guardian's involvement.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 13. Changes to this policy */}
          <section id="changes-to-policy" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>13. Policy updates</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              13. Changes to this policy
            </h2>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                We may update this policy from time to time. The latest version will always be on this page with its date at the top.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 14. Contact */}
          <section id="contact" className="scroll-mt-24">
            <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>14. Contact</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
              14. Contact
            </h2>
            <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2">
                <div className="font-semibold text-slate-900">Dent House Marrakech SARL</div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Bd. Allal Al Fassi, Marrakech, Morocco</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                  <a href="mailto:contact@denthousemarrakech.com" className="text-sky-700 underline font-medium">contact@denthousemarrakech.com</a>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">
                    {CLINIC_WHATSAPP_DISPLAY} (WhatsApp Concierge Desk)
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppUrl("Hello, I have a privacy inquiry regarding Dent House Marrakech.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all cursor-pointer"
                  >
                    <span>Book Free Consultation</span>
                  </button>
                )}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
