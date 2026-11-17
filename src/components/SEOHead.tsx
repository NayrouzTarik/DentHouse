import React, { useEffect } from 'react';
import { DEFAULT_OG_IMAGE, DEFAULT_ROBOTS, getRouteSEO } from '../data/seoConfig';

export interface SEOHeadProps {
  routePath?: string;
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  robots?: string;
  schemaData?: Record<string, any> | Record<string, any>[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  routePath,
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  robots,
  schemaData,
}) => {
  const routeConfig = routePath ? getRouteSEO(routePath) : undefined;
  const resolvedTitle = title ?? routeConfig?.title ?? 'Composite Bonding & E.max Veneers Marrakech | Dent House';
  const resolvedDescription = description ?? routeConfig?.description ?? '';
  const resolvedCanonical = canonicalUrl ?? routeConfig?.canonicalUrl ?? 'https://denthousemarrakech.com/';
  const resolvedRobots = robots ?? routeConfig?.robots ?? DEFAULT_ROBOTS;
  const resolvedSchema = schemaData ?? routeConfig?.schemaData;

  useEffect(() => {
    // 1. Update Title
    document.title = resolvedTitle;

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

    // 2. Meta description & robots
    setMetaTag('name', 'description', resolvedDescription);
    setMetaTag('name', 'robots', resolvedRobots);

    // 3. OpenGraph tags
    setMetaTag('property', 'og:title', resolvedTitle);
    setMetaTag('property', 'og:description', resolvedDescription);
    setMetaTag('property', 'og:url', resolvedCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);

    // 4. Twitter tags
    setMetaTag('name', 'twitter:title', resolvedTitle);
    setMetaTag('name', 'twitter:description', resolvedDescription);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonical);

    // 6. Hreflang alternate link tags (en-GB, en-IE, en, x-default)
    const hreflangs = ['en-GB', 'en-IE', 'en', 'x-default'];
    hreflangs.forEach((lang) => {
      let altLink = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!altLink) {
        altLink = document.createElement('link');
        altLink.setAttribute('rel', 'alternate');
        altLink.setAttribute('hreflang', lang);
        document.head.appendChild(altLink);
      }
      altLink.setAttribute('href', resolvedCanonical);
    });

    // 7. Page-specific JSON-LD Schema
    const schemaScriptId = 'page-specific-schema-ld';
    let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement | null;

    if (resolvedSchema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = schemaScriptId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(resolvedSchema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [resolvedTitle, resolvedDescription, resolvedCanonical, resolvedRobots, ogType, ogImage, resolvedSchema]);

  return null;
};
