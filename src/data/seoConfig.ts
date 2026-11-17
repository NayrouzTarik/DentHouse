import { FAQS, PATIENT_REVIEWS } from './dentHouseData';

export const SITE_URL = 'https://denthousemarrakech.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero_denthouse_consultation_1791832441772.jpg`;
export const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

/**
 * Official clinic profile URLs for Schema.org sameAs.
 * Add live Google Business Profile, Instagram, TikTok, and Trustpilot/WhatClinic URLs here once published.
 */
export const CLINIC_SAME_AS: string[] = [];

export const PRERENDER_ROUTES = [
  '/',
  '/treatments',
  '/packages',
  '/stories',
  '/calculator',
  '/journey',
  '/aftercare',
  '/faqs',
  '/privacy',
] as const;

export const NOINDEX_ROUTES = [
  '/thank-you',
  '/conversion',
  '/whatsapp-conversion',
  '/confirmation',
] as const;

export interface RouteSEOConfig {
  path: string;
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  robots?: string;
  breadcrumbName?: string;
  schemaData: Record<string, any>;
}

export const DR_MOUAD_ENTITY = {
  '@type': ['Physician', 'Person'],
  '@id': `${SITE_URL}/#dr-mouad`,
  name: 'Dr. Mouad',
  jobTitle: 'Lead Cosmetic Dentist & Clinical Director',
  medicalSpecialty: 'CosmeticDentistry',
  worksFor: {
    '@id': `${SITE_URL}/#dentist`,
  },
  memberOf: {
    '@type': 'Organization',
    name: 'Ordre National des Médecins Dentistes du Maroc',
  },
  knowsAbout: [
    'Direct Composite Bonding',
    'Handcrafted E.max Porcelain Veneers',
    'High-Grade Aesthetic Composite Resin',
    'Bespoke Smile Design and Shade Matching',
    'Minimally Invasive Cosmetic Dentistry',
  ],
};

export const CLINIC_DENTIST_ENTITY = {
  '@type': ['Dentist', 'MedicalBusiness'],
  '@id': `${SITE_URL}/#dentist`,
  name: 'Dent House Marrakech',
  alternateName: 'Dent House Cosmetic Dental Clinic',
  description:
    'Cosmetic dental clinic in Marrakech, Morocco specialising in direct composite bonding with high-grade aesthetic composite resin and handcrafted E.max porcelain veneers for UK & Irish patients. Packages include central city accommodation and private VIP transfers; flights arranged independently.',
  url: `${SITE_URL}/`,
  telephone: '+212789668454',
  priceRange: '££',
  currenciesAccepted: 'GBP, EUR, USD, MAD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  medicalSpecialty: 'CosmeticDentistry',
  areaServed: ['GB', 'IE', 'MA', 'FR', 'EU'],
  logo: `${SITE_URL}/images/logo.png`,
  image: DEFAULT_OG_IMAGE,
  founder: { '@id': `${SITE_URL}/#dr-mouad` },
  employee: { '@id': `${SITE_URL}/#dr-mouad` },
  ...(CLINIC_SAME_AS.length > 0 ? { sameAs: CLINIC_SAME_AS } : {}),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bd. Allal Al Fassi',
    addressLocality: 'Marrakech',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6346,
    longitude: -8.0125,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
    ratingCount: String(PATIENT_REVIEWS.length),
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marrakech Cosmetic Dental Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Composite Bonding Standard (Full Set of 20 Teeth)',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Direct Composite Bonding (Set of 20 Teeth)',
          description:
            'Direct high-grade aesthetic composite resin sculpting chairside in Marrakech for up to 20 teeth. Zero drilling of healthy natural enamel, 1-year warranty, and complimentary 6-month review.',
          procedureType: 'NoninvasiveProcedure',
        },
        price: '1299',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Composite Bonding Full Package with 2-Night Luxury Stay',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Composite Bonding Package with 2-Night Luxury Stay & VIP Transfers',
          description:
            'Full set composite bonding (up to 20 teeth) with 2 nights luxury accommodation in Marrakech, all private chauffeur airport & clinic transfers, and 1-year warranty. Flights arranged independently.',
          procedureType: 'NoninvasiveProcedure',
        },
        price: '1499',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'E.max Porcelain Veneers (Set of 20 Teeth)',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Handcrafted E.max Porcelain Veneers Package',
          description:
            'Handcrafted E.max porcelain veneers with bespoke smile design and shade matching, 4 nights luxury stay, private transfers, and 5-year replacement warranty. Flights arranged independently.',
          procedureType: 'NoninvasiveProcedure',
        },
        price: '3450',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export function buildBreadcrumbSchema(pageName: string, pageUrl: string) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };
}

export const GLOBAL_SCHEMA_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [CLINIC_DENTIST_ENTITY, DR_MOUAD_ENTITY],
};

export const SEO_ROUTES: Record<string, RouteSEOConfig> = {
  '/': {
    path: '/',
    title: 'Composite Bonding & E.max Veneers Marrakech | Dent House',
    description:
      'Luxury composite bonding (£1,299) & E.max veneers (£3,450) in Marrakech, Morocco. Save 70% vs UK prices with hotel & VIP transfers. Free WhatsApp quote.',
    canonicalUrl: `${SITE_URL}/`,
    robots: DEFAULT_ROBOTS,
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Dent House Marrakech',
      inLanguage: 'en-GB',
      publisher: { '@id': `${SITE_URL}/#dentist` },
    },
  },
  '/treatments': {
    path: '/treatments',
    title: 'Composite Bonding & E.max Veneers Morocco | Dent House',
    description:
      'Compare direct composite bonding (zero drilling, 1 visit) & handcrafted E.max porcelain veneers in Marrakech. Bespoke care for UK & Ireland patients.',
    canonicalUrl: `${SITE_URL}/treatments`,
    robots: DEFAULT_ROBOTS,
    breadcrumbName: 'Treatments',
    schemaData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema('Treatments', `${SITE_URL}/treatments`),
        {
          '@type': 'MedicalWebPage',
          '@id': `${SITE_URL}/treatments#webpage`,
          name: 'Composite Bonding & E.max Veneers in Marrakech, Morocco',
          description:
            'Compare direct composite bonding with high-grade aesthetic composite resin (zero enamel drilling) and handcrafted E.max porcelain veneers at Dent House Marrakech.',
          url: `${SITE_URL}/treatments`,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          reviewedBy: { '@id': `${SITE_URL}/#dr-mouad` },
          about: [
            {
              '@type': 'MedicalProcedure',
              name: 'Direct Composite Bonding in Marrakech',
              procedureType: 'NoninvasiveProcedure',
              description:
                'Chairside high-grade aesthetic composite resin sculpting for up to 20 teeth with zero drilling of healthy tooth enamel during a 2-night Marrakech stay.',
            },
            {
              '@type': 'MedicalProcedure',
              name: 'Handcrafted E.max Porcelain Veneers in Morocco',
              procedureType: 'NoninvasiveProcedure',
              description:
                'Ultra-thin handcrafted E.max porcelain veneers with bespoke smile design and shade matching, a 4-night stay, and a 5-year warranty.',
            },
          ],
        },
      ],
    },
  },
  '/packages': {
    path: '/packages',
    title: 'Composite Bonding & Veneers Prices Morocco | Packages',
    description:
      'Marrakech dental packages for UK & Irish patients: 20-tooth composite bonding from £1,299 (€1,520) or E.max veneers from £3,450 with hotel & chauffeur.',
    canonicalUrl: `${SITE_URL}/packages`,
    robots: DEFAULT_ROBOTS,
    breadcrumbName: 'Packages & Prices',
    schemaData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema('Packages & Prices', `${SITE_URL}/packages`),
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/packages#webpage`,
          name: 'Marrakech Smile Makeover Packages & Prices (UK vs. Morocco)',
          description:
            'Fixed-price Marrakech smile makeover packages in GBP (£) and EUR (€) comparing UK and Ireland private dental prices with Dent House Marrakech.',
          url: `${SITE_URL}/packages`,
          mainEntity: CLINIC_DENTIST_ENTITY.hasOfferCatalog,
        },
      ],
    },
  },
  '/journey': {
    path: '/journey',
    title: 'Dental Tourism Morocco: UK & Ireland Patients | Dent House',
    description:
      'Plan your 2-to-4 day dental trip to Marrakech. Direct flights from London, Manchester, Birmingham, Bristol & Dublin, VIP airport chauffeur & stays.',
    canonicalUrl: `${SITE_URL}/journey`,
    robots: DEFAULT_ROBOTS,
    breadcrumbName: 'Journey & Clinic',
    schemaData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema('Journey & Clinic', `${SITE_URL}/journey`),
        {
          '@type': 'MedicalWebPage',
          '@id': `${SITE_URL}/journey#webpage`,
          name: 'Dental Tourism in Marrakech for UK & Ireland Patients',
          description:
            'Step-by-step UK & Ireland dental travel guide to Marrakech including direct flight corridors, Dr. Mouad clinical credentials, VIP airport chauffeur transfers, and central stays.',
          url: `${SITE_URL}/journey`,
          about: { '@id': `${SITE_URL}/#dentist` },
          reviewedBy: { '@id': `${SITE_URL}/#dr-mouad` },
        },
      ],
    },
  },
  '/stories': {
    path: '/stories',
    title: 'Composite Bonding & Veneers Before & After Marrakech',
    description:
      'View real composite bonding and E.max porcelain veneers before & after smile makeovers in Marrakech. Verified reviews from UK and Ireland patients.',
    canonicalUrl: `${SITE_URL}/stories`,
    robots: DEFAULT_ROBOTS,
    breadcrumbName: 'Before & After Stories',
    schemaData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema('Before & After Stories', `${SITE_URL}/stories`),
        {
          '@type': 'CollectionPage',
          '@id': `${SITE_URL}/stories#webpage`,
          name: 'Composite Bonding & E.max Veneers Before & After Results',
          description:
            'Verified UK and European patient before-and-after composite bonding and E.max porcelain veneer transformations at Dent House Marrakech.',
          url: `${SITE_URL}/stories`,
          about: { '@id': `${SITE_URL}/#dentist` },
        },
      ],
    },
  },
  '/aftercare': {
    path: '/aftercare',
    title: 'Dental Tourism Warranty & UK Aftercare | Dent House',
    description:
      'UK & Ireland peace-of-mind aftercare: 1-year composite bonding & 5-year E.max veneers warranties, 6-month review, clinical passport & WhatsApp support.',
    canonicalUrl: `${SITE_URL}/aftercare`,
    robots: DEFAULT_ROBOTS,
    breadcrumbName: 'Warranty & Aftercare',
    schemaData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema('Warranty & Aftercare', `${SITE_URL}/aftercare`),
        {
          '@type': 'MedicalWebPage',
          '@id': `${SITE_URL}/aftercare#webpage`,
          name: 'Composite Bonding & Veneers Aftercare & UK Warranty',
          description:
            'UK & Ireland Peace of Mind aftercare protocol, written clinical passport, 1-year composite bonding warranty with 6-month polish, and 5-year E.max porcelain veneer warranty.',
          url: `${SITE_URL}/aftercare`,
          reviewedBy: { '@id': `${SITE_URL}/#dr-mouad` },
        },
      ],
    },
  },
  '/calculator': {
    path: '/calculator',
    title: 'Morocco Veneers & Composite Bonding Cost Calculator',
    description:
      'Estimate your Marrakech composite bonding or E.max veneers cost in GBP (£) & EUR (€). Compare solo, duo & trio packages with hotel and VIP transfers.',
    canonicalUrl: `${SITE_URL}/calculator`,
    robots: DEFAULT_ROBOTS,
    breadcrumbName: 'Cost Calculator',
    schemaData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema('Cost Calculator', `${SITE_URL}/calculator`),
        {
          '@type': 'WebApplication',
          '@id': `${SITE_URL}/calculator#webapp`,
          name: 'Composite Bonding & E.max Veneers Cost Calculator',
          description:
            'Interactive smile makeover price calculator for Marrakech composite bonding and E.max porcelain veneers in GBP (£) and EUR (€), including solo, duo (-15%), and trio (-20%) packages.',
          url: `${SITE_URL}/calculator`,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'Web',
          provider: { '@id': `${SITE_URL}/#dentist` },
        },
      ],
    },
  },
  '/faqs': {
    path: '/faqs',
    title: 'Composite Bonding & Veneers in Morocco FAQ | Dent House',
    description:
      'Answers for UK & Irish patients on composite bonding & E.max veneers in Marrakech: safety, zero tooth shaving, pricing, direct flights & UK aftercare.',
    canonicalUrl: `${SITE_URL}/faqs`,
    robots: DEFAULT_ROBOTS,
    breadcrumbName: 'FAQs',
    schemaData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema('FAQs', `${SITE_URL}/faqs`),
        {
          '@type': 'FAQPage',
          '@id': `${SITE_URL}/faqs#faqpage`,
          url: `${SITE_URL}/faqs`,
          name: 'Composite Bonding, E.max Veneers & Dental Tourism FAQ',
          mainEntity: FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        },
      ],
    },
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy & UK GDPR Disclosures | Dent House',
    description:
      'Official Privacy Policy for Dent House Marrakech. Learn how we protect patient health data, UK GDPR & CNDP rights, and Google Ads cookie preferences.',
    canonicalUrl: `${SITE_URL}/privacy`,
    robots: DEFAULT_ROBOTS,
    breadcrumbName: 'Privacy Policy',
    schemaData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema('Privacy Policy', `${SITE_URL}/privacy`),
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/privacy#webpage`,
          name: 'Privacy Policy | Dent House Marrakech',
          description:
            'Official Privacy Policy of Dent House Marrakech covering UK GDPR, Moroccan CNDP data protection, patient confidentiality, and Google Ads Consent Mode v2.',
          url: `${SITE_URL}/privacy`,
          publisher: { '@id': `${SITE_URL}/#dentist` },
        },
      ],
    },
  },
  '/thank-you': {
    path: '/thank-you',
    title: 'Thank You | Dent House Marrakech Consultation Request',
    description:
      'Thank you for contacting Dent House Marrakech. Dr. Mouad and our smile makeover concierge team will review your enquiry promptly.',
    canonicalUrl: `${SITE_URL}/thank-you`,
    robots: 'noindex, nofollow',
    schemaData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Thank You | Dent House Marrakech',
      url: `${SITE_URL}/thank-you`,
    },
  },
};

export function getRouteSEO(path: string): RouteSEOConfig {
  const normalized = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
  if (
    normalized === '/conversion' ||
    normalized === '/whatsapp-conversion' ||
    normalized === '/confirmation'
  ) {
    return SEO_ROUTES['/thank-you'];
  }
  return SEO_ROUTES[normalized] || SEO_ROUTES['/'];
}
