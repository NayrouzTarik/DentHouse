import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  schemaData?: Record<string, any> | Record<string, any>[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://denthousemarrakech.com/images/hero_denthouse_consultation_1791832441772.jpg',
  schemaData,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta description
    setMetaTag('name', 'description', description);

    // 3. OpenGraph tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);

    // 4. Twitter tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Optional page-specific JSON-LD Schema
    const schemaScriptId = 'page-specific-schema-ld';
    let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement | null;

    if (schemaData) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = schemaScriptId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Clean up page-specific schema on unmount
      const existingScript = document.getElementById(schemaScriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, ogImage, schemaData]);

  return null;
};
