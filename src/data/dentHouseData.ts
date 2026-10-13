export interface TreatmentOption {
  id: string;
  name: string;
  subtitle: string;
  teethCount: string;
  duration: string;
  dentHousePriceGBP: number;
  ukPrivatePriceGBP: number;
  highlight?: string;
  warranty: string;
  checkup: string;
  description: string;
  features: string[];
}

export interface StayOption {
  id: string;
  name: string;
  tier: 'luxury' | 'comfort' | 'budget' | 'none';
  basePricePerNightGBP: number;
  freeGuestsIncluded: number; // 0 for essential, 2 for comfort and luxury
  description: string;
  perks: string[];
}

export interface RideOption {
  id: string;
  name: string;
  tier: 'standard' | 'comfort' | 'premium';
  vehicle: string;
  surchargeGBP: number;
  description: string;
}

export interface ExtraOption {
  id: string;
  name: string;
  priceGBP: number;
  description: string;
}

export const TREATMENTS: TreatmentOption[] = [
  {
    id: 'bonding',
    name: 'Composite Bonding',
    subtitle: 'Direct micro-hybrid aesthetic resin sculpting',
    teethCount: 'Full Set of 20 Teeth',
    duration: '2 Days in Marrakech',
    dentHousePriceGBP: 1850,
    ukPrivatePriceGBP: 6500,
    warranty: '1-Year Warranty',
    checkup: 'Complimentary Check-Up at 6 Months',
    description: 'Minimally invasive cosmetic transformation shaped and polished chairside by our master aesthetic dentists in just 48 hours without drilling natural enamel.',
    features: [
      'Zero drilling of healthy enamel structure',
      'Completed in 2 comfortable appointments',
      'Custom multi-layer aesthetic shade-matching',
      '1-Year Warranty with free 6-month check-up',
      'Smooth high-gloss micro-hybrid polish'
    ]
  },
  {
    id: 'veneers',
    name: 'Premium Porcelain Veneers',
    subtitle: 'Ultra-thin handcrafted ceramic shields',
    teethCount: 'Full Set of 20 Teeth',
    duration: '2 Days in Marrakech',
    dentHousePriceGBP: 3450,
    ukPrivatePriceGBP: 14500,
    highlight: 'Top Choice for UK & International Patients',
    warranty: '5-Year Comprehensive Warranty',
    checkup: 'Full Digital Records & International Handover Files',
    description: 'Hand-layered premium medical-grade porcelain. Lifelike optical translucency, stain resistance, and backed by a 5-year replacement guarantee.',
    features: [
      'Certified premium medical-grade porcelain ceramic',
      'Conservative sub-0.3mm preparation',
      '5-Year Comprehensive Replacement Warranty',
      '3D Intraoral Digital Simulation preview before fitting',
      'Stain-proof against coffee, tea, and red wine'
    ]
  }
];

export const STAY_OPTIONS: StayOption[] = [
  {
    id: 'essential-palmeraie',
    name: 'Essential Palmeraie Garden Suite',
    tier: 'budget',
    basePricePerNightGBP: 70,
    freeGuestsIncluded: 0,
    description: 'Serene, clean Palmeraie garden residence surrounded by date palms, 10 minutes from the clinic.',
    perks: ['Fresh Moroccan breakfast', 'Peaceful pool access', 'Extra nights at 50% OFF (£35/night)']
  },
  {
    id: 'comfort-palmeraie',
    name: 'Comfort Palmeraie Villa & Pool (Mid-Level)',
    tier: 'comfort',
    basePricePerNightGBP: 110,
    freeGuestsIncluded: 2,
    description: 'Boutique villa retreat in Palmeraie with private sun terrace and lagoon swimming pool. BRING 2 GUESTS FOR FREE!',
    perks: [
      '★ Bring 2 people to stay with you for FREE',
      'Courtyard breakfast & poolside loungers',
      'Extra nights at 50% OFF (£55/night)'
    ]
  },
  {
    id: 'luxury-palmeraie',
    name: '5★ Luxury Palmeraie Oasis & Suite (Luxury Level)',
    tier: 'luxury',
    basePricePerNightGBP: 180,
    freeGuestsIncluded: 2,
    description: 'Prestigious 5-star Palmeraie resort suite with private terrace, Olympic-sized swimming pool, and butler service. BRING 2 GUESTS FOR FREE!',
    perks: [
      '★ Bring 2 people to stay with you for FREE',
      'Gourmet buffet breakfast & VIP concierge',
      'Extra nights at 50% OFF (£90/night)'
    ]
  },
  {
    id: 'no-stay',
    name: 'Self-Arranged Accommodation',
    tier: 'none',
    basePricePerNightGBP: 0,
    freeGuestsIncluded: 0,
    description: 'Book your own hotel, Airbnb, or villa in Marrakech. All 4 VIP chauffeur transfers remain 100% included.',
    perks: ['4 VIP chauffeur transfers still 100% included', 'Schedule coordinated to your location']
  }
];

export const RIDE_OPTIONS: RideOption[] = [
  {
    id: 'standard',
    name: 'Standard Private Ride',
    tier: 'standard',
    vehicle: 'Peugeot 308 / 208 Sedan',
    surchargeGBP: 0,
    description: 'Clean air-conditioned private vehicle with courteous driver for all 4 transfers.'
  },
  {
    id: 'comfort',
    name: 'Comfort SUV Transfer',
    tier: 'comfort',
    vehicle: 'Dacia Duster / Renault SUV',
    surchargeGBP: 40,
    description: 'Spacious high-riding SUV with elevated suspension and extra boot luggage room.'
  },
  {
    id: 'premium',
    name: 'VIP Executive Mercedes-Benz',
    tier: 'premium',
    vehicle: 'Mercedes-Benz E-Class / V-Class Chauffeur',
    surchargeGBP: 95,
    description: 'Luxury executive chauffeur with chilled bottled water and meet-and-greet terminal service.'
  }
];

export const EXTRAS_OPTIONS: ExtraOption[] = [
  {
    id: 'hammam',
    name: 'Traditional Royal Moroccan Hammam & Argan Spa',
    priceGBP: 60,
    description: 'Black soap body scrub, eucalyptus steam bath, and relaxing argan oil massage to unwind between appointments.'
  },
  {
    id: 'desert-dinner',
    name: 'Agafay Desert Sunset Dinner & Stargazing',
    priceGBP: 85,
    description: 'Scenic 40-minute drive to the Agafay stone desert for a candlelight Moroccan tagine dinner with fire show under the stars.'
  },
  {
    id: 'medina-guide',
    name: 'Private Guided Historic Medina & Jardin Majorelle Tour',
    priceGBP: 50,
    description: '3-hour private walking tour through hidden artisan quarters, Yves Saint Laurent gardens, and spice markets.'
  }
];

export const PRECONFIGURED_PACKAGES = [
  {
    id: 'duo-escape',
    badge: 'Best Value For Couples & Friends',
    name: 'The Duo Smile Holiday',
    partyType: 'duo',
    treatmentId: 'veneers',
    pricePerPersonGBP: 2932,
    totalPriceGBP: 5865,
    ukHarleyStreetPerPerson: 14500,
    totalSaving: 23135,
    stayName: 'Comfort Palmeraie Villa & Pool (Mid-Level)',
    rideName: '4 Private Chauffeur Transfers Included',
    perks: [
      '20 Premium Porcelain Veneers each',
      '15% Group Discount on treatments',
      '4 Private Chauffeur Transfers Included (Airport & Clinic)',
      '5-Year Comprehensive Warranty & international documentation',
      'Package covers treatment, stay & chauffeur (Flights not included)'
    ]
  },
  {
    id: 'solo-executive',
    badge: 'Popular Weekend Trip',
    name: 'The 48H Solo Palmeraie Transformation',
    partyType: 'solo',
    treatmentId: 'veneers',
    pricePerPersonGBP: 3810,
    totalPriceGBP: 3810,
    ukHarleyStreetPerPerson: 14500,
    totalSaving: 10690,
    stayName: '2 Nights 5★ Luxury Palmeraie Oasis',
    rideName: 'VIP Private Chauffeur Included',
    perks: [
      '20 Hand-layered Premium Porcelain Veneers',
      '5-Star Palmeraie Luxury Stay (2 days)',
      'Option to bring 2 guests to stay for FREE',
      '5-Year Warranty with digital authentication',
      'Package covers treatment, stay & chauffeur (Flights not included)'
    ]
  },
  {
    id: 'solo-bonding',
    badge: 'Minimally Invasive Weekend Glow',
    name: 'The Natural Composite Bonding Escape',
    partyType: 'solo',
    treatmentId: 'bonding',
    pricePerPersonGBP: 1990,
    totalPriceGBP: 1990,
    ukHarleyStreetPerPerson: 6500,
    totalSaving: 4510,
    stayName: '2 Nights Essential Palmeraie Garden Suite (£70/nt)',
    rideName: 'Private Chauffeur Shuttles Included',
    perks: [
      '20 Composite Bondings (No drilling of enamel)',
      '1-Year Warranty + Free 6-Month Check-Up',
      '2 Nights Essential Palmeraie Garden Suite',
      'Completed in 2 comfortable days',
      'Package covers treatment, stay & chauffeur (Flights not included)'
    ]
  }
];

export const TREATMENT_LONGEVITY_GUIDE = {
  emax: {
    name: 'Premium Porcelain Veneers',
    lifespan: '10 to 20+ Years',
    material: 'High-Density Medical-Grade Porcelain & Ceramic',
    porosity: 'High-density glazed ceramic structure',
    stainResistance: 'High stain resistance against coffee, tea, and red wine',
    vulnerablePoint: 'Resin cement line at the gum margin if oral hygiene is neglected',
    prepDepth: 'Ultra-conservative sub-0.3mm (No aggressive drilling)',
    nightguardNeed: 'Mandatory custom nightguard to prevent bruxism micro-fractures',
    toothpasteRDA: 'RDA < 70 (Non-abrasive gel, avoid gritty whitening powders)',
    warranty: '5-Year Comprehensive Replacement Warranty with registered documentation'
  },
  bonding: {
    name: 'Composite Bonding',
    lifespan: '4 to 7 Years (Re-polishable chairside)',
    material: 'Micro-hybrid nano-composite resin matrix',
    porosity: 'Micro-porous polymer (Absorbs chromogens if unattended)',
    stainResistance: 'Moderate (Requires immediate water rinse after coffee and 6-mo polish)',
    vulnerablePoint: 'Direct incisal biting edges and surface staining from tannins',
    prepDepth: 'Conservative additive technique with zero drilling of healthy enamel',
    nightguardNeed: 'Essential to shield lower flexural strength (120–160 MPa)',
    toothpasteRDA: 'RDA < 50 (Ultra-gentle paste, zero baking soda or charcoal)',
    warranty: '1-Year Warranty + Complimentary 6-Month High-Gloss Diamond Check-Up'
  }
};

export const COFFEE_STAIN_PROTOCOLS = [
  {
    step: '1',
    title: 'The 48-Hour Curing Window (Composite Bonding)',
    desc: 'During the first 48 hours post-sculpting, the resin matrix completes free-radical polymerization. Strictly avoid black coffee, espresso, red wine, turmeric curry, and dark berries during this window.',
    appliesTo: 'Composite Bonding'
  },
  {
    step: '2',
    title: 'The "Water Swish" Rule (Immediate Post-Coffee)',
    desc: 'Whenever you drink coffee or black tea, swish your mouth with still water immediately after your last sip. This flushes staining tannins (chromogens) before they settle into resin micro-pores or ceramic margins.',
    appliesTo: 'Both Treatments'
  },
  {
    step: '3',
    title: 'Never Brush Right After Coffee (Wait 25–30 Mins)',
    desc: 'Coffee has an acidic pH (~4.9), which temporarily softens tooth enamel and resin surface layers. Brushing immediately acts like sandpaper! Wait 30 minutes for saliva to remineralize, or simply rinse with water.',
    appliesTo: 'Both Treatments'
  },
  {
    step: '4',
    title: 'Strict Non-Abrasive Toothpaste Rule (RDA < 70)',
    desc: 'Avoid aggressive whitening toothpastes containing hydrated silica, charcoal, or baking soda. Abrasives scratch the high-fire glaze of porcelain veneers and dull the composite polish, creating microscopic traps for stains.',
    appliesTo: 'Both Treatments'
  },
  {
    step: '5',
    title: 'The Iced Drink Straw Technique',
    desc: 'For iced lattes, cold brew, or iced teas, use a straw. This bypasses your front aesthetic smile zone completely, keeping pigments away from facial surfaces.',
    appliesTo: 'Composite Bonding'
  },
  {
    step: '6',
    title: 'Biannual High-Gloss Diamond Polish',
    desc: 'Attend your free 6-month check-up at Dent House (or your home dentist). Professional polishing with sub-micron diamond paste and flexible discs restores factory high-gloss and erases micro-stains effortlessly.',
    appliesTo: 'Composite Bonding'
  }
];

export const PALMERAIE_SEASONALITY_DATA = [
  {
    month: 'January',
    season: 'Winter Sun / Gentle Pace',
    temp: '19°C / 6°C',
    airbnbAvgGBP: 220,
    dentHouseGBP: 110,
    savingGBP: 110,
    demand: 'Moderate',
    status: 'Stable Dental Bookings',
    note: 'Crisp sunny days, peaceful Palmeraie garden pools, escape bleak UK January.'
  },
  {
    month: 'February',
    season: 'Shoulder / Pre-Spring',
    temp: '21°C / 8°C',
    airbnbAvgGBP: 260,
    dentHouseGBP: 110,
    savingGBP: 150,
    demand: 'High',
    status: 'High Demand Window',
    note: 'UK half-term travel, warmer afternoons, almond blossoms blooming in Palmeraie.'
  },
  {
    month: 'March',
    season: 'Spring High Peak',
    temp: '25°C / 11°C',
    airbnbAvgGBP: 360,
    dentHouseGBP: 110,
    savingGBP: 250,
    demand: 'Peak',
    status: 'Airbnb Surge Pricing (Dent House Locks Flat £110)',
    note: 'Ideal 25°C weather. Standard Palmeraie Airbnbs surge past £350+/night; Dent House keeps fixed rate.'
  },
  {
    month: 'April',
    season: 'Spring High Peak',
    temp: '27°C / 12°C',
    airbnbAvgGBP: 390,
    dentHouseGBP: 110,
    savingGBP: 280,
    demand: 'Peak',
    status: 'Max Palmeraie Surge',
    note: 'Easter holidays & peak European tourism. Patients save £500+ on a 2-day Palmeraie stay.'
  },
  {
    month: 'May',
    season: 'Late Spring Peak',
    temp: '29°C / 15°C',
    airbnbAvgGBP: 340,
    dentHouseGBP: 110,
    savingGBP: 230,
    demand: 'High',
    status: 'Premium Holiday Season',
    note: 'Long sunny days, warm evening terraces, peak private villa pool enjoyment.'
  },
  {
    month: 'June',
    season: 'Early Summer Shoulder',
    temp: '34°C / 18°C',
    airbnbAvgGBP: 240,
    dentHouseGBP: 110,
    savingGBP: 130,
    demand: 'Moderate',
    status: 'Stable Clinic Flow',
    note: 'Direct flights from all UK airports, relaxed uncrowded Palmeraie boutique villas.'
  },
  {
    month: 'July',
    season: 'Sunshine Summer Retreat',
    temp: '41°C / 21°C',
    airbnbAvgGBP: 170,
    dentHouseGBP: 110,
    savingGBP: 60,
    demand: 'Clinic Advantage',
    status: 'Consistent Demand via Scheduled Treatment Packages',
    note: 'Scheduled dental packages provide consistent year-round occupancy for partner Palmeraie villas across all seasons.'
  },
  {
    month: 'August',
    season: 'Sunshine Summer Retreat',
    temp: '42°C / 22°C',
    airbnbAvgGBP: 160,
    dentHouseGBP: 110,
    savingGBP: 50,
    demand: 'Clinic Advantage',
    status: 'High Margin Package Bundle',
    note: 'Bypasses empty Airbnb summer lull. Bundled medical packages keep villa income steady 365 days a year.'
  },
  {
    month: 'September',
    season: 'Autumn Rebound',
    temp: '33°C / 19°C',
    airbnbAvgGBP: 270,
    dentHouseGBP: 110,
    savingGBP: 160,
    demand: 'High',
    status: 'Rapid Demand Rebound',
    note: 'Heat subsides, golden autumn sunlight returns, European aesthetic patients resume high-season trips.'
  },
  {
    month: 'October',
    season: 'Autumn High Peak',
    temp: '28°C / 15°C',
    airbnbAvgGBP: 380,
    dentHouseGBP: 110,
    savingGBP: 270,
    demand: 'Peak',
    status: 'Top Season for UK & International Patients',
    note: 'Marrakech film and cultural season. Superb weather for walking through Jardin Majorelle between fittings.'
  },
  {
    month: 'November',
    season: 'Autumn High Peak (Your Airbnb Benchmark)',
    temp: '23°C / 11°C',
    airbnbAvgGBP: 350,
    dentHouseGBP: 110,
    savingGBP: 240,
    demand: 'Peak',
    status: 'Peak Palmeraie Villa Season',
    note: 'The exact month in your search! High Airbnb demand (£350+/nt). Dent House locks in £110 flat rate + 2 Free Guests.'
  },
  {
    month: 'December',
    season: 'Festive Holidays / Winter Sun',
    temp: '20°C / 7°C',
    airbnbAvgGBP: 420,
    dentHouseGBP: 110,
    savingGBP: 310,
    demand: 'Peak',
    status: 'Festive Surge Protection',
    note: 'Christmas & New Year celebrations. Palmeraie rates spike to year highs. Dent House patients protected from holiday surges.'
  }
];

export const DOS_AND_DONTS = {
  dos: [
    {
      title: 'Practice the post-coffee "Water Swish" immediately',
      desc: 'After drinking espresso, coffee, or dark tea, immediately rinse with still water to wash away staining chromogens before they bond to porous composite or ceramic margins.',
      tag: 'Coffee & Stains'
    },
    {
      title: 'Wear your custom transparent night guard nightly',
      desc: 'We craft and provide a bespoke protective splint upon fitting. Grinding or clenching (bruxism) is the #1 cause of chipped edges; the night guard absorbs all bite pressure.',
      tag: 'Bite Protection'
    },
    {
      title: 'Use non-abrasive toothpaste (RDA < 70) & soft bristles',
      desc: 'Brush gently with a soft-bristled brush using non-abrasive gel toothpaste. Never use gritty charcoal or baking soda pastes that scratch the ceramic glaze or composite polish.',
      tag: 'Hygiene & Polish'
    },
    {
      title: 'Attend your complimentary 6-month check-up (Bonding)',
      desc: 'For composite bonding, our 1-year warranty includes a free 6-month clinical review and professional high-gloss diamond polish to keep your teeth gleaming.',
      tag: 'Warranty & Care'
    },
    {
      title: 'Send clear smile photos before flying to Marrakech',
      desc: 'Take 2 simple smartphone photos (smiling and teeth slightly parted) so our clinical team can design your 3D digital smile mockup and confirm your fixed quote beforehand.',
      tag: 'Preparation'
    },
    {
      title: 'Bring up to 2 companions to stay with you for £0 FREE',
      desc: 'Select our Mid-Level (£110) or Luxury (£180) Palmeraie stay and bring 2 companions at no extra lodging cost. Extra nights are 50% OFF (£55 or £90/night).',
      tag: 'Palmeraie Stay'
    }
  ],
  donts: [
    {
      title: 'Never brush immediately after drinking coffee (Wait 30 mins)',
      desc: 'Coffee acid softens surface matrices temporarily. Brushing immediately scrubs acid into the material. Swish water first and wait 30 minutes before gentle brushing.',
      tag: 'Coffee & Stains'
    },
    {
      title: 'No dark staining foods/drinks in the first 48h (Bonding)',
      desc: 'Avoid red wine, black coffee, turmeric curry, and soy sauce during the first 48 hours while the composite polymer completes its free-radical post-cure hardening.',
      tag: 'Composite Care'
    },
    {
      title: 'Never use front teeth as mechanical tools',
      desc: 'Do not open packaging, bite cellotape, tear clothing tags, crack pistachio/olive shells, or chew on ice cubes or pen caps with your front teeth.',
      tag: 'Habits & Safety'
    },
    {
      title: 'No abrasive whitening powders or harsh scraping',
      desc: 'Avoid DIY whitening kits, acidic lemon rinses, or abrasive whitening pastes that corrode composite margins and micro-scratch porcelain veneer shine.',
      tag: 'Hygiene'
    },
    {
      title: 'No aggressive tooth shaving or laser tissue cutting',
      desc: 'We never aggressively drill healthy enamel (porcelain veneers are sub-0.3mm; bonding is 0mm drilling). We also reject laser gum burning to protect biological gingival integrity.',
      tag: 'Clinical Ethics'
    },
    {
      title: 'Never bargain with airport taxis or worry about transfers',
      desc: 'All 4 private VIP chauffeur transfers (Airport ➔ Palmeraie ➔ Clinic ➔ Palmeraie ➔ Airport) are fully pre-scheduled and included in your plan.',
      tag: 'Logistics'
    }
  ]
};

export const JOURNEY_STEPS = [
  {
    step: 'Day 1',
    phase: 'Arrival & Precision Design',
    title: 'Touchdown in Marrakech & Digital Smile Design',
    time: 'Morning & Afternoon',
    summary: 'From the moment your plane lands at Marrakech Menara, everything is coordinated and private.',
    points: [
      {
        time: '10:00',
        label: 'VIP Airport Welcome',
        desc: 'Your private chauffeur greets you at Arrivals with a personalized sign, handles all luggage, and drives you directly to your Palmeraie residence.'
      },
      {
        time: '11:15',
        label: 'Palmeraie Check-In & Refresh',
        desc: 'Check in to your Palmeraie suite or villa (remember: you can bring 2 guests to stay for free on Mid-level and Luxury tiers).'
      },
      {
        time: '14:30',
        label: '3D Intraoral Scanning & Consultation',
        desc: 'Private chauffeur drives you to Dent House. 3Shape Trios® wireless digital scanning with zero goopy silicone trays. Preview your bespoke 3D smile on screen.'
      },
      {
        time: '16:00',
        label: 'Micro-Preparation or Initial Sculpting',
        desc: 'For Veneers: Ultra-conservative sub-0.3mm preparation with comfortable temporaries. For Bonding: Initial micro-hybrid layering.'
      },
      {
        time: '19:00',
        label: 'Evening at Leisure in Palmeraie',
        desc: 'Chauffeur returns you to your Palmeraie resort. Enjoy Moroccan mint tea by the pool.'
      }
    ]
  },
  {
    step: 'Day 2',
    phase: 'Fitting & Celebration',
    title: 'Premium Porcelain / Bonding Placement & Handover',
    time: 'Morning & Afternoon',
    summary: 'Our dedicated lab completes your smile overnight. Day 2 is where your new smile is revealed.',
    points: [
      {
        time: '10:00',
        label: 'Palmeraie Poolside Morning',
        desc: 'Relax by the pool or sun terrace while our master ceramists add the finishing ceramic micro-textures.'
      },
      {
        time: '14:00',
        label: 'Try-In & Patient Shade Approval',
        desc: 'Try-in paste inspection. You check every tooth in natural daylight mirrors and confirm the shade and shape.'
      },
      {
        time: '15:30',
        label: 'Permanent Bonding & Diamond Polish',
        desc: 'Medical-grade resin bonding and silky smooth diamond polishing for a completely natural feel.'
      },
      {
        time: '17:00',
        label: 'Warranty Certificate & International Handover Files',
        desc: 'Receive your official Warranty Certificate (1 Year + 6-month check-up for bonding, 5 Years for porcelain veneers), bite guard, and dental records.'
      },
      {
        time: '18:30',
        label: 'Celebrate in Marrakech',
        desc: 'Chauffeur takes you to a celebratory dinner or back to your Palmeraie villa.'
      }
    ]
  },
  {
    step: 'Day 3',
    phase: 'Flexible Return',
    title: 'Fly Home with Total Confidence & Peace of Mind',
    time: 'Flexible Departure',
    summary: 'Fly back home with 50% discount on extra nights if you choose to extend your holiday.',
    points: [
      {
        time: 'Flexible',
        label: 'Direct Flight Back Home (UK & International)',
        desc: 'Private chauffeur transfer to Marrakech Menara Airport for your flight back to the UK, Europe, or beyond.'
      },
      {
        time: 'Ongoing',
        label: 'Warranty Coverage & 6-Month Check-Up',
        desc: 'Direct WhatsApp communication with our clinic. 1-Year warranty for bonding with 6-month check-up, and 5-Year warranty for porcelain veneers.'
      }
    ]
  }
];

export const CLINIC_HIGHLIGHTS = [
  {
    title: 'Certified Premium Medical-Grade Materials',
    desc: 'We exclusively use certified, top-tier aesthetic porcelain and micro-hybrid composites tailored to each patient.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Trios® 3Shape Wireless 3D Digital Scanners',
    desc: 'Micron-accurate intraoral digital scanning. Zero messy silicone impression putty, zero gagging, instant 3D smile previews.',
    icon: 'Award'
  },
  {
    title: 'Honest Warranties: 5 Years Veneers, 1 Year Bonding',
    desc: 'Clear, realistic warranties. 5-Year comprehensive replacement warranty for porcelain veneers, and 1-year warranty with free 6-month check-up for bonding.',
    icon: 'FileCheck'
  },
  {
    title: 'Conservative Medicine (Zero Laser, Zero Over-Drilling)',
    desc: 'We do not burn gum tissue with lasers or aggressively shave teeth. We prioritize healthy biological tooth preservation.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Palmeraie Luxury Stays (Bring 2 Guests Free)',
    desc: 'All accommodations are in Palmeraie. On Mid-Level and Luxury tiers, bring up to 2 companions to stay with you for £0 extra.',
    icon: 'Sparkles'
  },
  {
    title: 'Extra Nights at 50% OFF',
    desc: 'Palmeraie suites start at £70. Want to extend your stay for a longer sunshine holiday? Extra nights are discounted by 50%.',
    icon: 'Activity'
  }
];

export const PATIENT_STORIES = [
  {
    name: 'Sophie & Mark T.',
    location: 'Surrey, UK',
    treatment: 'Duo Premium Porcelain Veneers (20 teeth each)',
    saving: 'Duo Smile Transformation',
    rating: 5,
    quote: 'We chose the Duo package and stayed in a stunning Palmeraie villa. We even brought our daughter along because of the 2-free-guests perk! The teeth look completely natural, the 5-year warranty was clearly registered, and private chauffeur transfers made everything stress-free once we landed.'
  },
  {
    name: 'Oliver B.',
    location: 'Manchester, UK',
    treatment: '20 Composite Bondings',
    saving: 'Composite Bonding Weekend',
    rating: 5,
    quote: 'Completed across 2 days with zero drilling of my healthy natural enamel. The master aesthetic dentists shaped them with absolute precision. Having the 1-year warranty and a free 6-month checkup gives me massive peace of mind. Flew from Manchester on Thursday, back Sunday evening.'
  },
  {
    name: 'Chloe M.',
    location: 'Chelsea, London',
    treatment: 'Premium Porcelain Veneers',
    saving: 'Premium Porcelain Makeover',
    rating: 5,
    quote: 'I compared London clinic options for 20 veneers before choosing Dent House. At £3,450 for hand-layered premium porcelain, combined with the Palmeraie resort where my partner joined me at no extra lodging cost, the transparent package and 5-year warranty documentation were outstanding.'
  }
];

export const FAQS = [
  {
    q: 'Are flights included in the dental packages?',
    a: 'No. Flights are not included and are booked independently by the patient. Direct flights to Marrakech Menara (RAK) operate daily from London, Manchester, Bristol, and Birmingham (approx. 3h 20m). All 4 private chauffeur transfers within Marrakech (Airport ➔ Accommodation ➔ Clinic) are fully included in your package.'
  },
  {
    q: 'What treatments do you offer at Dent House Marrakech?',
    a: 'We specialize strictly in two cosmetic treatments: (1) Direct Composite Bonding (£1,850 for 20 teeth) and (2) Premium Porcelain Veneers (£3,450 for 20 teeth). Both are completed in 2 days. Packages include treatment, accommodation, and private transfers; flights are not included.'
  },
  {
    q: 'What are the warranty terms for Bonding and Porcelain Veneers?',
    a: 'We believe in honest, realistic warranties: Composite Bonding carries a 1-Year Warranty plus a complimentary clinical check-up at 6 months. Premium Porcelain Veneers carry a 5-Year Comprehensive Replacement Warranty backed by registered documentation.'
  },
  {
    q: 'How does the Palmeraie accommodation work? Can I bring guests?',
    a: 'All our accommodations are located in Palmeraie, Marrakech’s prestigious palm oasis. Pricing starts at £70/night for the Essential Suite. If you select the Mid-Level (£110/night) or Luxury (£180/night) Palmeraie stay, you can bring up to 2 people with you to stay for FREE! Furthermore, any extra nights added beyond the 2 base treatment days are discounted by 50%.'
  },
  {
    q: 'Are all 4 chauffeur transfers included even if I book my own hotel?',
    a: 'Yes. All 4 private chauffeur transfers (Airport ➔ Hotel, Hotel ➔ Clinic, Clinic ➔ Hotel, Hotel ➔ Airport) are fully included in every single plan, whether you stay with us in Palmeraie or arrange your own accommodation.'
  },
  {
    q: 'What makes the Duo and Trio plans such a good deal?',
    a: 'Duo gives both patients a 15% group discount on dental treatments. Trio gives a 20% group discount on dental treatments. Sharing Palmeraie accommodation and chauffeur transfers keeps total trip costs substantially lower per person while traveling together.'
  },
  {
    q: 'Do you offer laser gum treatment or laser whitening?',
    a: 'No. We respect natural tooth biology. We do not perform laser gum trimming or aggressive laser whitening that can cause severe sensitivity. Our cosmetic smile designs rely on conservative prep, biocompatible premium ceramics, and master artisan hand-layering.'
  }
];
