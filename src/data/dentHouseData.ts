export const CLINIC_WHATSAPP_NUMBER = '212789668454';
export const CLINIC_WHATSAPP_DISPLAY = '+212 789-668454';
export const CLINIC_PHONE_NUMBER = '0789668454';
export const CLINIC_PHONE_DISPLAY = '+212 789-668454';
export const DEFAULT_CONSULTATION_MESSAGE =
  'Hello, I would like to request a free consultation at Dent House Marrakech.';

export const getWhatsAppUrl = (message: string = DEFAULT_CONSULTATION_MESSAGE) =>
  `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

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
    teethCount: 'Up to 20 Teeth',
    duration: '2 Nights or Treatment Only',
    dentHousePriceGBP: 1199,
    ukPrivatePriceGBP: 5500,
    warranty: '1-Year Warranty',
    checkup: 'Complimentary Check-Up at 6 Months',
    description: 'Minimally invasive cosmetic transformation for up to 20 teeth shaped and polished chairside by our master aesthetic dentists in just one visit. Available as Standard Package or Full Package with a 2-night luxury stay.',
    features: [
      'Full Set Composite Bonding (20 Teeth)',
      'Completed in One Visit (Approx. 2–3 Hours)',
      'Your New Smile in Just One Day',
      '1-Year Treatment Warranty',
      'Standard Package (£1,199) or Full Package with 2-Night Luxury Stay (£1,399)'
    ]
  },
  {
    id: 'veneers',
    name: 'E.max Porcelain Veneers',
    subtitle: 'Ultra-thin handcrafted ceramic shields',
    teethCount: 'Full Set of 20 Teeth',
    duration: '4 Night Luxury Stay',
    dentHousePriceGBP: 3450,
    ukPrivatePriceGBP: 14500,
    highlight: 'Top Choice for UK & International Patients',
    warranty: '5-Year Comprehensive Warranty',
    checkup: 'Full Digital Records & International Handover Files',
    description: 'Hand-layered premium E.max ceramic shields crafted in our digital lab with a 4 night luxury stay. 10 to 15 year lifespan, unmatched optical translucency, and stain resistance.',
    features: [
      'Certified premium E.max medical-grade ceramic',
      'Ultra-conservative sub-0.3mm preparation',
      '4 Night luxury stay with precision digital lab crafting & VIP transfer',
      '10 to 15 Year lifespan with registered warranty',
      '3D Intraoral Digital Simulation preview before fitting',
      '100% stain-proof against coffee, tea, and red wine'
    ]
  }
];

export const STAY_OPTIONS: StayOption[] = [
  {
    id: 'no-stay',
    name: 'Self-Arranged Accommodation',
    tier: 'none',
    basePricePerNightGBP: 0,
    freeGuestsIncluded: 0,
    description: 'Book your own hotel, Airbnb, or riad in Marrakech. All private chauffeur transfers remain 100% included.',
    perks: ['£0 extra accommodation cost', 'Private chauffeur transfers included']
  },
  {
    id: 'city-center-1room',
    name: 'Dent House City Center (1-Room House)',
    tier: 'comfort',
    basePricePerNightGBP: 70,
    freeGuestsIncluded: 0,
    description: 'Modern, private 1-room residence in Marrakech city center, 5–10 minutes from the clinic and restaurants.',
    perks: ['Private 1-room city home', 'Central Marrakech location', 'Extra nights at 50% OFF (£35/nt)']
  },
  {
    id: 'city-center-2room',
    name: 'Deluxe 2-Room City House (Upgrade)',
    tier: 'luxury',
    basePricePerNightGBP: 110,
    freeGuestsIncluded: 2,
    description: 'Spacious 2-room residence in prime city center. Upgrade with a small fee and bring 2 companions to stay for FREE!',
    perks: [
      '★ Bring 2 people to stay with you for FREE',
      'Spacious 2-room city residence',
      'Prime central location near clinic',
      'Extra nights at 50% OFF (£55/nt)'
    ]
  }
];

export const RIDE_OPTIONS: RideOption[] = [
  {
    id: 'included-chauffeur',
    name: 'Private Chauffeur Transfers',
    tier: 'standard',
    vehicle: 'Private Air-Conditioned Vehicle & Dedicated Chauffeur',
    surchargeGBP: 0,
    description: '100% included in treatment: Airport pickup, clinic appointments return, and departure transfer.'
  }
];

export const EXTRAS_OPTIONS: ExtraOption[] = [
  {
    id: 'medina-tour',
    name: 'Historic Medina & Souks Guided Tour',
    priceGBP: 45,
    description: 'Private driver transfer to Medina with guided walking tour through historic quarters, Bahia Palace, and artisan souks.'
  },
  {
    id: 'agafay-tour',
    name: 'Agafay Desert Sunset Excursion & Dinner',
    priceGBP: 75,
    description: 'Private chauffeur scenic drive to Agafay stone desert for sunset dinner with traditional Moroccan tagine and stargazing.'
  },
  {
    id: 'atlas-tour',
    name: 'Atlas Mountains & Ourika Valley Day Trip',
    priceGBP: 65,
    description: 'Private scenic day tour through the High Atlas Mountains, Berber riverside villages, and waterfalls.'
  }
];

export const EMAX_PACKAGES = [
  {
    id: 'emax-solo',
    badge: 'Solo Traveler',
    name: 'E.max Solo Smile Holiday',
    treatmentType: 'E.max Porcelain Veneers',
    duration: '4 Night Luxury Stay',
    partyType: 'solo',
    treatmentId: 'veneers',
    pricePerPersonGBP: 3660,
    totalPriceGBP: 3660,
    ukHarleyStreetPerPerson: 14500,
    totalSaving: 10840,
    stayName: '4 Nights Dent House City Center House',
    rideName: 'All Private Chauffeur Transfers Included',
    perks: [
      'Full set of 20 Handcrafted E.max Porcelain Veneers',
      '4 Night luxury stay for precision laboratory crafting',
      '4 Nights Private City Center House',
      'All Private Chauffeur Transfers Included (Airport & Clinic)',
      'Dedicated Aftercare & Clinical Follow-Up'
    ]
  },
  {
    id: 'emax-duo',
    badge: 'Best Value for 2',
    name: 'E.max Duo Smile Holiday',
    treatmentType: 'E.max Porcelain Veneers',
    duration: '4 Night Luxury Stay',
    partyType: 'duo',
    treatmentId: 'veneers',
    pricePerPersonGBP: 3090,
    totalPriceGBP: 6180,
    ukHarleyStreetPerPerson: 14500,
    totalSaving: 22820,
    stayName: '4 Nights Dent House City Center House',
    rideName: 'All Private Chauffeur Transfers Included',
    perks: [
      '20 E.max Porcelain Veneers for EACH person (2 patients)',
      'Save £570/person by traveling together',
      '4 Night luxury stay for precision laboratory crafting',
      '4 Nights Private City Center House Included',
      'Dedicated Aftercare & Clinical Follow-Up'
    ]
  },
  {
    id: 'emax-trio',
    badge: 'Maximum Savings',
    name: 'E.max Trio Smile Holiday',
    treatmentType: 'E.max Porcelain Veneers',
    duration: '4 Night Luxury Stay',
    partyType: 'trio',
    treatmentId: 'veneers',
    pricePerPersonGBP: 2820,
    totalPriceGBP: 8460,
    ukHarleyStreetPerPerson: 14500,
    totalSaving: 35040,
    stayName: 'Deluxe 2-Room City House (Stay Together Free)',
    rideName: 'All Private Chauffeur Transfers Included',
    perks: [
      '20 E.max Porcelain Veneers for EACH person (3 patients)',
      'Save £840/person with group rate',
      '4 Night luxury stay for precision laboratory crafting',
      'Deluxe 2-Room City House (Guests stay free)',
      'Dedicated Aftercare & Clinical Follow-Up'
    ]
  }
];

export const BONDING_PACKAGES = [
  {
    id: 'bonding-pkg1-treatment-only',
    badge: 'Solo · Standard',
    name: 'Standard Package',
    subtitle: 'treatment only full set of composite veneers',
    treatmentType: 'Composite Bonding',
    duration: 'Treatment Only',
    partyType: 'solo',
    tierType: 'treatment_only',
    treatmentId: 'bonding',
    pricePerPersonGBP: 1199,
    totalPriceGBP: 1199,
    ukHarleyStreetPerPerson: 5500,
    totalSaving: 4301,
    stayName: '',
    rideName: '',
    clinicalNote: 'Treatment subject to the dentist’s clinical assessment',
    perks: [
      'Full Set Composite Bonding (20 Teeth)',
      'Completed in One Visit (Approx. 2–3 Hours)',
      'Your New Smile in Just One Day',
      '1-Year Treatment Warranty',
      'All dental materials included',
      'Treatment subject to the dentist’s clinical assessment'
    ]
  },
  {
    id: 'bonding-pkg2-treatment-accommodation',
    badge: 'Solo · Full Package',
    name: 'Package 2 · Full Package',
    subtitle: 'full set of composite veneers with 2 nights luxury stay & transfers',
    treatmentType: 'Composite Bonding',
    duration: '2 Nights Luxury Stay',
    partyType: 'solo',
    tierType: 'with_stay',
    treatmentId: 'bonding',
    pricePerPersonGBP: 1399,
    totalPriceGBP: 1399,
    ukHarleyStreetPerPerson: 6500,
    totalSaving: 5101,
    stayName: '2 Nights Luxury Stay in Marrakech Included',
    rideName: 'Private Airport & Clinic Transfers Included',
    upgradeNote: 'Upgrade for only £200 extra — don\'t bother yourself with accommodation or taxis, we handle your entire 2-night luxury stay & private transfers!',
    clinicalNote: 'Treatment subject to the dentist’s clinical assessment',
    perks: [
      'Full Set Composite Bonding (20 Teeth)',
      'Completed in One Visit (Approx. 2–3 Hours)',
      'Your New Smile in Just One Day',
      '1-Year Treatment Warranty',
      '2 Nights Luxury Stay in Marrakech',
      'Private Airport & Clinic Chauffeur Transfers',
      'All dental materials included',
      'Treatment subject to the dentist’s clinical assessment'
    ]
  },
  {
    id: 'bonding-duo-standard',
    badge: 'Duo · Standard',
    name: 'Standard Duo Package',
    subtitle: 'treatment only full set of composite veneers',
    treatmentType: 'Composite Bonding',
    duration: 'Treatment Only · 2 People',
    partyType: 'duo',
    tierType: 'treatment_only',
    treatmentId: 'bonding',
    pricePerPersonGBP: 1099.5,
    totalPriceGBP: 2199,
    ukHarleyStreetPerPerson: 5500,
    totalSaving: 8801,
    stayName: '',
    rideName: '',
    clinicalNote: 'Treatment subject to the dentist’s clinical assessment',
    perks: [
      'Full Set Composite Bonding (20 Teeth per person)',
      'Completed in One Visit (Approx. 2–3 Hours)',
      'Your New Smile in Just One Day',
      '1-Year Treatment Warranty',
      'All dental materials included',
      'Treatment subject to the dentist’s clinical assessment'
    ]
  },
  {
    id: 'bonding-duo-accommodation',
    badge: 'Duo · Full Package',
    name: 'Duo Full Package',
    subtitle: 'full set of composite veneers for 2 with 2 nights luxury stay & transfers',
    treatmentType: 'Composite Bonding',
    duration: '2 Nights Luxury Stay · 2 People',
    partyType: 'duo',
    tierType: 'with_stay',
    treatmentId: 'bonding',
    pricePerPersonGBP: 1199.5,
    totalPriceGBP: 2399,
    ukHarleyStreetPerPerson: 6500,
    totalSaving: 10601,
    stayName: '2 Nights Luxury Stay in Marrakech Included',
    rideName: 'Private Airport & Clinic Transfers Included',
    upgradeNote: 'Upgrade for just £200 extra for both people — no accommodation or transfer hassle, we handle everything for you!',
    clinicalNote: 'Treatment subject to the dentist’s clinical assessment',
    perks: [
      'Full Set Composite Bonding (20 Teeth per person)',
      'Completed in One Visit (Approx. 2–3 Hours)',
      'Your New Smile in Just One Day',
      '1-Year Treatment Warranty',
      '2 Nights Luxury Stay in Marrakech',
      'Private Airport & Clinic Chauffeur Transfers',
      'All dental materials included',
      'Treatment subject to the dentist’s clinical assessment'
    ]
  },
  {
    id: 'bonding-trio-standard',
    badge: 'Trio · Standard',
    name: 'Standard Trio Package',
    subtitle: 'treatment only full set of composite veneers',
    treatmentType: 'Composite Bonding',
    duration: 'Treatment Only · 3 People',
    partyType: 'trio',
    tierType: 'treatment_only',
    treatmentId: 'bonding',
    pricePerPersonGBP: 1066.33,
    totalPriceGBP: 3199,
    ukHarleyStreetPerPerson: 5500,
    totalSaving: 13301,
    stayName: '',
    rideName: '',
    clinicalNote: 'Treatment subject to the dentist’s clinical assessment',
    perks: [
      'Full Set Composite Bonding (20 Teeth per person)',
      'Completed in One Visit (Approx. 2–3 Hours)',
      'Your New Smile in Just One Day',
      '1-Year Treatment Warranty',
      'All dental materials included',
      'Treatment subject to the dentist’s clinical assessment'
    ]
  },
  {
    id: 'bonding-trio-accommodation',
    badge: 'Trio · Full Package',
    name: 'Trio Full Package',
    subtitle: 'full set of composite veneers for 3 with 2 nights luxury stay & transfers',
    treatmentType: 'Composite Bonding',
    duration: '2 Nights Luxury Stay · 3 People',
    partyType: 'trio',
    tierType: 'with_stay',
    treatmentId: 'bonding',
    pricePerPersonGBP: 1133,
    totalPriceGBP: 3399,
    ukHarleyStreetPerPerson: 6500,
    totalSaving: 16101,
    stayName: '2 Nights Luxury Stay in Marrakech Included',
    rideName: 'Private Airport & Clinic Transfers Included',
    upgradeNote: 'Upgrade for just £200 extra for the whole group — no accommodation or transfer hassle, we handle everything for you!',
    clinicalNote: 'Treatment subject to the dentist’s clinical assessment',
    perks: [
      'Full Set Composite Bonding (20 Teeth per person)',
      'Completed in One Visit (Approx. 2–3 Hours)',
      'Your New Smile in Just One Day',
      '1-Year Treatment Warranty',
      '2 Nights Luxury Stay in Marrakech',
      'Private Airport & Clinic Chauffeur Transfers',
      'All dental materials included',
      'Treatment subject to the dentist’s clinical assessment'
    ]
  }
];

export const PRECONFIGURED_PACKAGES = EMAX_PACKAGES;

export const TREATMENT_LONGEVITY_GUIDE = {
  emax: {
    name: 'Premium Porcelain Veneers',
    lifespan: '10 to 15 Years (Maximum 15 Years)',
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
      desc: 'Private VIP chauffeur transfers are pre-scheduled and included in your plan (hotel to clinic, plus airport transfers for package guests). Ask us on WhatsApp for custom arrangements.',
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

export interface PatientReview {
  id: string;
  authorName: string;
  authorAvatar?: string;
  authorInitials?: string;
  avatarBg?: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
  rating: number;
  timeAgo: string;
  location: string;
  treatment: string;
  treatmentType: 'bonding' | 'veneers';
  duration?: string;
  badges?: string[];
  reviewText: string;
  clinicResponse?: {
    date: string;
    text: string;
  };
  ownerResponse?: {
    date: string;
    text: string;
  };
}

export type GoogleReview = PatientReview;

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    authorName: 'Charlotte D.',
    authorInitials: 'CD',
    avatarBg: '#0284C7',
    rating: 5,
    timeAgo: 'Recent patient',
    location: 'London, UK',
    treatment: 'Composite Bonding (20 Teeth)',
    treatmentType: 'bonding',
    reviewText: "I was hesitant about traveling abroad for dental work, having been quoted nearly £7,000 for composite bonding in London. After exchanging videos and WhatsApp messages with Dr. Leila and the Dent House team, I felt reassured enough to book.\n\nFrom the moment I landed at Marrakech Menara, everything was organized. Their chauffeur (Hassan) was waiting with a name card and took me straight to my hotel in Guéliz. The clinic itself is spotless, calm, and very modern.\n\nThe 20-tooth composite bonding was done chairside in two appointments across Friday and Saturday with zero drilling or pain. They matched my shade to a natural BL3 with realistic translucency rather than a flat, chalky white. I flew home Sunday evening with full warranty paperwork and aftercare instructions. Genuinely couldn't be happier with the outcome.",
    clinicResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you for the thoughtful feedback Charlotte! Your smile looks radiant and completely natural. Remember your 6-month check-up is covered under your warranty—reach out to our WhatsApp team anytime."
    },
    ownerResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you for the thoughtful feedback Charlotte! Your smile looks radiant and completely natural. Remember your 6-month check-up is covered under your warranty—reach out to our WhatsApp team anytime."
    }
  },
  {
    id: 'rev-2',
    authorName: 'Marcus S.',
    authorInitials: 'MS',
    avatarBg: '#0369A1',
    rating: 5,
    timeAgo: '1 month ago',
    location: 'Manchester, UK',
    treatment: 'E.max Porcelain Veneers (20 Teeth)',
    treatmentType: 'veneers',
    reviewText: "Top-tier care from start to finish. I had 20 E.max porcelain veneers done over 4 days. In the UK, I was looking at £14,000+ for the same lithium disilicate ceramics. Dent House handled the whole package including 4 nights in Palmeraie and chauffeur for a fraction of that cost.\n\n• Day 1: 3D Trios intraoral scan and digital design preview. No unpleasant impression trays.\n• Day 2: Minor sub-0.3mm prep and temporary mockups. Virtually painless with gentle numbing.\n• Day 3: Rest day enjoying the Palmeraie resort and French cuisine in Guéliz.\n• Day 4: Final veneer placement and bite calibration with the aesthetic dentist.\n\nThe 5-year replacement warranty is formally registered in my paperwork. My bite feels 100% natural and I can eat normally without worrying. Credit to the clinical team.",
    clinicResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you Marcus! We truly enjoyed hosting you in Marrakech. E.max lithium disilicate is the gold standard in dental ceramics, and your smile transformation turned out beautifully. All digital scan files are saved securely in our cloud system."
    },
    ownerResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you Marcus! We truly enjoyed hosting you in Marrakech. E.max lithium disilicate is the gold standard in dental ceramics, and your smile transformation turned out beautifully. All digital scan files are saved securely in our cloud system."
    }
  },
  {
    id: 'rev-3',
    authorName: 'Sophie M.',
    authorInitials: 'SM',
    avatarBg: '#0f766e',
    rating: 5,
    timeAgo: '2 months ago',
    location: 'Bristol, UK',
    treatment: 'Duo E.max Veneers + Partner Stay',
    treatmentType: 'veneers',
    reviewText: "Booked the Duo package with my partner so we could both get our smiles perfected together. The Palmeraie villa stay was magnificent, and bringing our daughter along for free under the 2-guest policy made it feel like a holiday rather than a stressful medical trip.\n\nThe porcelain work is true artistry. They spent 45 minutes on shade and tooth shape micro-customization before bonding. It's been two months now: zero sensitivity to hot or cold, and people constantly ask if I had whitening because it looks so effortless.",
    clinicResponse: {
      date: 'Clinical Follow-up',
      text: "Warm regards to you and your lovely family Sophie! It was wonderful having you both at Dent House. Thank you for placing your trust in us."
    },
    ownerResponse: {
      date: 'Clinical Follow-up',
      text: "Warm regards to you and your lovely family Sophie! It was wonderful having you both at Dent House. Thank you for placing your trust in us."
    }
  },
  {
    id: 'rev-4',
    authorName: 'Oliver R.',
    authorInitials: 'OR',
    avatarBg: '#1e3a5f',
    rating: 4,
    timeAgo: '3 months ago',
    location: 'Birmingham, UK',
    treatment: 'Composite Bonding (20 Teeth)',
    treatmentType: 'bonding',
    reviewText: "Really pleased with the composite bonding results. The teeth look completely natural, zero drilling of my enamel, and saved thousands compared to Birmingham private clinic quotes. Only dropping 1 star because Friday morning's appointment ran about 20 minutes behind schedule, but the dentists took their time afterwards and didn't rush my treatment at all. Driver Hassan was great too.",
    clinicResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you for the honest and balanced feedback Oliver! We apologize again for the short wait on Friday morning—we always ensure our dentists give each patient full dedicated chairside time without rushing. We're thrilled you love your new smile."
    },
    ownerResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you for the honest and balanced feedback Oliver! We apologize again for the short wait on Friday morning—we always ensure our dentists give each patient full dedicated chairside time without rushing. We're thrilled you love your new smile."
    }
  },
  {
    id: 'rev-5',
    authorName: 'Dr. Liam P.',
    authorInitials: 'LP',
    avatarBg: '#1e3a5f',
    rating: 5,
    timeAgo: '4 months ago',
    location: 'Leeds, UK',
    treatment: 'Composite Bonding (20 Teeth)',
    treatmentType: 'bonding',
    reviewText: "As an NHS GP in the UK, I am inherently particular about clinical sterilization protocols, PPE, and practitioner qualifications. Dent House exceeded expectations. Autoclave pouches opened directly in front of me, digital 3Shape scanners, and high-magnification loupes used throughout the bonding.\n\nThe aesthetic finish is immaculate. I've already recommended two of my medical colleagues to travel out to Marrakech.",
    clinicResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you Dr. Liam for your professional recommendation. Maintaining hospital-grade sterility and surgical precision is the core foundation of Dent House. Warm regards from our entire clinical team."
    },
    ownerResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you Dr. Liam for your professional recommendation. Maintaining hospital-grade sterility and surgical precision is the core foundation of Dent House. Warm regards from our entire clinical team."
    }
  },
  {
    id: 'rev-6',
    authorName: 'Hannah W.',
    authorInitials: 'HW',
    avatarBg: '#0f766e',
    rating: 4,
    timeAgo: '5 months ago',
    location: 'Edinburgh, UK',
    treatment: 'E.max Porcelain Veneers (20 Teeth)',
    treatmentType: 'veneers',
    reviewText: "Flew from Edinburgh for 20 E.max veneers. The ceramic finish and natural translucency are lovely—definitely not the fake 'Turkey teeth' look I was worried about. 4 stars only because navigating Marrakech airport at night was a bit hectic with passport queues, although Hassan was waiting with my name card once I came through. Clinical care and veneers themselves were 5/5.",
    clinicResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you Hannah! Marrakech Menara arrivals can indeed get busy on evening flights, but we're glad Hassan met you smoothly. Enjoy your radiant E.max smile!"
    },
    ownerResponse: {
      date: 'Clinical Follow-up',
      text: "Thank you Hannah! Marrakech Menara arrivals can indeed get busy on evening flights, but we're glad Hassan met you smoothly. Enjoy your radiant E.max smile!"
    }
  }
];

export const GOOGLE_REVIEWS: PatientReview[] = PATIENT_REVIEWS;

export const PATIENT_STORIES = [
  {
    name: 'Sophie & Mark T.',
    location: 'Surrey, UK',
    treatment: 'Duo E.max Porcelain Veneers',
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
    name: 'Charlotte D.',
    location: 'London, UK',
    treatment: 'Composite Bonding',
    saving: 'Natural Aesthetic Bonding',
    rating: 5,
    quote: 'I compared London clinic options for bonding before choosing Dent House. At £1,199 for up to 20 teeth with zero drilling, combined with the Marrakech city stay and chauffeur, the transparent package and aftercare documentation were outstanding.'
  }
];

export const FAQS = [
  {
    q: 'Are flights included in the dental packages?',
    a: 'No. Flights are not included and are booked independently by the patient. Direct flights to Marrakech Menara (RAK) operate daily from London, Manchester, Bristol, and Birmingham (approx. 3h 20m). Dedicated private chauffeur transfers within Marrakech are arranged as part of your package.'
  },
  {
    q: 'What treatments do you offer at Dent House Marrakech?',
    a: 'Our core specialities and bundled travel packages focus on complete smile makeovers: Direct Composite Bonding (including a 2 night luxury stay) and Handcrafted E.max Porcelain Veneers (including a 4 night luxury stay). Beyond cosmetic transformations, as a comprehensive modern dental center, we offer a full suite of advanced clinical treatments: Dental Implants (Swiss & German titanium), Full-Arch Restorations, Surgical Wisdom Teeth Extractions, High-Strength Zirconia & E.max Crowns, Specialist Root Canal Therapy, Gum Contouring, and In-Clinic Laser Whitening. If you require additional dental care alongside your smile makeover, message our team on WhatsApp for a personalized assessment.'
  },
  {
    q: 'How does accommodation work in Marrakech? Can I bring guests?',
    a: 'All our partner accommodations are located in the heart of Marrakech (Centre-Ville / Guéliz), close to upscale dining, cafes, and our clinic. We offer flexible arrangements tailored to your style and party size, and you can bring companion guests with you. Contact our concierge on WhatsApp to personalize your stay without rigid nightly constraints.'
  },
  {
    q: 'How do transfers work if I arrange my own accommodation?',
    a: 'If you choose self-accommodation, our private chauffeur handles your transfers between your hotel and the clinic for all appointments. Please note that airport-to-hotel arrival and departure transfers are reserved for patients booking our complete accommodation packages. If you have specific transfer requirements, simply ask us directly on WhatsApp!'
  },
  {
    q: 'What makes the Duo and Trio plans such a good deal?',
    a: 'Duo gives both patients a 15% group discount on dental treatments. Trio gives a 20% group discount on dental treatments. Sharing central city accommodation and chauffeur transfers keeps total trip costs substantially lower per person while traveling together.'
  },
  {
    q: 'Do you offer laser gum treatment or laser whitening?',
    a: 'Whether we perform laser gum treatment or laser whitening depends on your individual clinical assessment and personal preference. During your digital consultation, our clinical team evaluates your gum line, tooth anatomy, and enamel shade to recommend the ideal aesthetic approach for you.'
  }
];
