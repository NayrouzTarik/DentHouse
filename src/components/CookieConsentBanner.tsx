import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ShieldCheck, X } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user already made a consent choice
    try {
      const savedChoice = localStorage.getItem('denthouse_cookie_consent');
      if (!savedChoice) {
        // Small delay so page loads gracefully first
        const timer = setTimeout(() => setIsOpen(true), 700);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage disabled/restricted
    }

    // Listen for custom trigger from footer or privacy page
    const handleReopen = () => setIsOpen(true);
    window.addEventListener('open-cookie-banner', handleReopen);
    return () => window.removeEventListener('open-cookie-banner', handleReopen);
  }, []);

  const updateConsent = (type: 'all' | 'essential') => {
    try {
      localStorage.setItem('denthouse_cookie_consent', type);
    } catch {
      // Ignore
    }

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      if (type === 'all') {
        window.gtag('consent', 'update', {
          ad_storage: 'granted',
          analytics_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
      } else {
        window.gtag('consent', 'update', {
          ad_storage: 'denied',
          analytics_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
        });
      }
    }

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Preferences"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-slate-800">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 text-sky-400">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
              <Cookie className="w-4 h-4 text-sky-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Cookie & Privacy Choice
            </span>
          </div>
          <button
            onClick={() => updateConsent('essential')}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Dismiss cookie banner with essential only"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-3 text-xs text-slate-300 leading-relaxed">
          We use cookies and Google tags (Google Ads & GA4) to ensure site functionality, analyze visitor traffic, and evaluate ad campaigns. We respect your choice under UK GDPR.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={() => updateConsent('all')}
            className="flex-1 py-2 px-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-sm transition-all cursor-pointer text-center"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => updateConsent('essential')}
            className="flex-1 py-2 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-all cursor-pointer text-center"
          >
            Essential Only
          </button>
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <Link
            to="/privacy#cookies-tracking"
            className="underline hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Cookie Policy & Rights
          </Link>
          <span className="flex items-center gap-1 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            Google Consent Mode v2
          </span>
        </div>
      </div>
    </div>
  );
};
