/**
 * Google Analytics 4 (GA4) & Google Ads Tag (gtag.js) Utility
 * GA4 Measurement ID: G-084Y9CMNQR
 * Google Ads ID: AW-18548397646
 * Strictly non-PII: No personal info, message content, or visitor details are transmitted.
 */

export const GOOGLE_ADS_ID = 'AW-18548397646';
export const GA4_MEASUREMENT_ID = 'G-084Y9CMNQR';

// Google Ads Conversion Action: "whatsapp clicl conversion page"
export const GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL = 'QU1ZCMLJ568dEM6syIxF';
export const GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO = `${GOOGLE_ADS_ID}/${GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL}`;

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Throttle map to prevent duplicate event triggers on rapid multi-clicks
const lastEventMap: Record<string, number> = {};
const DEDUPLICATION_INTERVAL_MS = 600;

function shouldThrottleEvent(eventType: string, key: string): boolean {
  const compositeKey = `${eventType}:${key}`;
  const now = Date.now();
  const lastTime = lastEventMap[compositeKey] || 0;
  if (now - lastTime < DEDUPLICATION_INTERVAL_MS) {
    return true;
  }
  lastEventMap[compositeKey] = now;
  return false;
}

export function sendGAEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    if (typeof window === 'undefined') return;

    // Clean params to ensure no PII
    const cleanParams: Record<string, any> = {
      page_path: window.location.pathname,
      page_title: document.title,
      ...params,
    };

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, cleanParams);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...cleanParams,
      });
    }
  } catch {
    // Fail silently in case of ad-blockers or analytics blockers
  }
}

/**
 * 1. Track WhatsApp Clicks
 * Dispatches both Google Analytics 4 event and Google Ads conversion action
 */
export function trackWhatsAppClick(params: {
  placement?: string;
  linkText?: string;
  destinationUrl?: string;
}) {
  const key = `${params.placement || ''}_${params.destinationUrl || ''}`;
  if (shouldThrottleEvent('whatsapp_click', key)) return;

  // 1. Google Analytics 4 (GA4) Event
  sendGAEvent('whatsapp_click', {
    event_category: 'engagement',
    destination_type: 'whatsapp',
    placement: params.placement || 'unknown',
    link_text: params.linkText ? params.linkText.slice(0, 40) : 'WhatsApp',
  });

  // 2. Google Ads Conversion Action ("whatsapp clicl conversion page")
  trackGoogleAdsConversion(GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL);
}

/**
 * 2. Track Phone Clicks
 */
export function trackPhoneClick(params: {
  placement?: string;
  phoneNumber?: string;
}) {
  const key = `${params.placement || ''}_${params.phoneNumber || ''}`;
  if (shouldThrottleEvent('phone_click', key)) return;

  sendGAEvent('phone_click', {
    event_category: 'contact',
    destination_type: 'phone',
    placement: params.placement || 'unknown',
    phone_number: params.phoneNumber || '+212789668454',
  });
}

/**
 * 3. Track Email Clicks
 */
export function trackEmailClick(params: {
  placement?: string;
}) {
  const key = params.placement || 'unknown';
  if (shouldThrottleEvent('email_click', key)) return;

  sendGAEvent('email_click', {
    event_category: 'contact',
    destination_type: 'email',
    placement: params.placement || 'unknown',
  });
}

/**
 * 4. Track Booking Actions
 */
export function trackBookingClick(params: {
  bookingType?: string;
  placement?: string;
  treatmentType?: string;
}) {
  const key = `${params.bookingType || ''}_${params.placement || ''}`;
  if (shouldThrottleEvent('booking_click', key)) return;

  sendGAEvent('booking_click', {
    event_category: 'conversion_intent',
    booking_type: params.bookingType || 'consultation',
    placement: params.placement || 'unknown',
    treatment_type: params.treatmentType || undefined,
  });
}

/**
 * 5. Track Genuine Confirmed Leads (Ready for when an on-site backend form confirms success)
 */
export function trackGenerateLead(params: {
  leadMethod?: string;
  formName?: string;
  treatmentInterest?: string;
}) {
  sendGAEvent('generate_lead', {
    event_category: 'lead',
    lead_method: params.leadMethod || 'form_confirmed',
    form_name: params.formName || 'consultation_form',
    treatment_interest: params.treatmentInterest || undefined,
  });
}

/**
 * 6. Track Google Ads Conversions
 * Useful for firing Google Ads conversion actions configured in Google Ads campaign.
 * Defaults to WhatsApp click conversion: AW-18548397646/QU1ZCMLJ568dEM6syIxF
 */
export function trackGoogleAdsConversion(
  conversionTarget: string = GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL,
  value?: number,
  currency: string = 'GBP'
) {
  try {
    if (typeof window === 'undefined') return;

    const sendTo = conversionTarget.includes('/')
      ? conversionTarget
      : `${GOOGLE_ADS_ID}/${conversionTarget}`;

    const payload: Record<string, any> = {
      send_to: sendTo,
    };

    if (typeof value === 'number') {
      payload.value = value;
      payload.currency = currency;
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', payload);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'conversion',
        ...payload,
      });
    }
  } catch {
    // Fail silently in case of ad-blocker
  }
}

// Global debug/test helper for browser console testing
if (typeof window !== 'undefined') {
  (window as any).trackDentHouseWhatsAppConversion = () => {
    trackGoogleAdsConversion(GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL);
    console.log('[Google Ads] Conversion event triggered:', GOOGLE_ADS_WHATSAPP_CONVERSION_SEND_TO);
  };
}

