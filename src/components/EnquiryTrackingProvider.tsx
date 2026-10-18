import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackWhatsAppClick,
  trackPhoneClick,
  trackEmailClick,
  trackBookingClick,
} from '../utils/analytics';

export const EnquiryTrackingProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (!href) return;

      // Extract clean non-PII contextual placement
      let placement = 'general_content';
      if (anchor.closest('header')) {
        placement = 'header';
      } else if (anchor.closest('footer')) {
        placement = 'footer';
      } else if (anchor.closest('[id="faqs"]') || anchor.closest('.faq-section')) {
        placement = 'faq_section';
      } else if (anchor.closest('[id="calculator"]') || anchor.closest('.calculator-section')) {
        placement = 'calculator';
      } else if (anchor.classList.contains('fixed') || anchor.closest('.fixed')) {
        placement = 'floating_widget';
      } else {
        const section = anchor.closest('section');
        if (section?.id) {
          placement = section.id;
        } else {
          placement = location.pathname.replace('/', '') || 'home';
        }
      }

      const text = anchor.textContent?.trim() || '';

      // 1. WhatsApp Links
      if (href.includes('wa.me') || href.startsWith('whatsapp:')) {
        trackWhatsAppClick({
          placement,
          linkText: text,
          destinationUrl: 'whatsapp',
        });

        // Track as booking intent if button text conveys booking or assessment
        const lowerText = text.toLowerCase();
        if (
          lowerText.includes('book') ||
          lowerText.includes('assessment') ||
          lowerText.includes('consultation') ||
          lowerText.includes('plan') ||
          lowerText.includes('package') ||
          lowerText.includes('chat')
        ) {
          trackBookingClick({
            bookingType: 'whatsapp_enquiry',
            placement,
          });
        }
      }

      // 2. Telephone Links
      else if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '').trim();
        trackPhoneClick({
          placement,
          phoneNumber: phone || '+212789668454',
        });
      }

      // 3. Email Links
      else if (href.startsWith('mailto:')) {
        trackEmailClick({
          placement,
        });
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, [location.pathname]);

  return <>{children}</>;
};
