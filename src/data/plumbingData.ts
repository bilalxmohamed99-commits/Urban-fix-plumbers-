import { PlumbingService, ReviewItem, NairobiArea, FAQItem, BeforeAfterProject } from '../types';

export const BUSINESS_INFO = {
  name: 'Urban Fix Plumbers',
  phoneDisplay: '0714 409 033',
  phoneRaw: '0714409033',
  phoneIntl: '+254 714 409 033',
  whatsappRaw: '254714409033',
  location: 'Nairobi, Kenya',
  hours: 'Open 24 Hours',
  rating: 4.8,
  reviewCount: 17,
  website: 'fundiflani.co.ke',
  googleMapsUrl: 'https://maps.google.com/?q=Nairobi,+Kenya',
};

export const getWhatsAppUrl = (customText?: string) => {
  const defaultText = customText || 'Hi Urban Fix Plumbers, I need help with a plumbing problem. My location is _____ and the issue is _____.';
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(defaultText)}`;
};

export const SERVICES: PlumbingService[] = [
  {
    id: 'leak-repairs',
    title: 'Leak Repairs',
    shortDesc: 'Fix leaking pipes, faucets, toilets and plumbing connections before they cause expensive damage.',
    fullDesc: 'Water leaks can quietly cause structural damage, high water bills, and mold growth. Our experienced plumbers identify hidden leaks using non-invasive tools and provide durable pipe repairs, washer replacements, and fitting overhauls for homes and commercial spaces in Nairobi.',
    iconName: 'Droplets',
    urgencyLevel: 'Emergency 24/7',
    commonIssues: ['Slab leaks & wall leaks', 'Dripping kitchen & bathroom taps', 'Leaking toilet tanks & seals', 'Burst water supply lines'],
    whatsAppMessage: 'Hi Urban Fix Plumbers, I have a leaking pipe/faucet that needs repair. My location is ____.'
  },
  {
    id: 'blocked-drains',
    title: 'Blocked Drains',
    shortDesc: 'Clear clogged sinks, toilets, showers and drainage systems quickly and effectively.',
    fullDesc: 'A clogged drain or backed-up toilet creates unsanitary conditions fast. We deploy professional drain snaking and high-pressure unblocking equipment to clear organic debris, grease, soap buildup, and foreign objects from residential and commercial drains.',
    iconName: 'ShowerHead',
    urgencyLevel: 'Emergency 24/7',
    commonIssues: ['Overflowing toilets', 'Slow draining kitchen sinks', 'Shower & bath drain blockages', 'Main sewer line backup'],
    whatsAppMessage: 'Hi Urban Fix Plumbers, I have a blocked drain/toilet. My location is ____.'
  },
  {
    id: 'pipe-repairs',
    title: 'Pipe Repairs',
    shortDesc: 'Repair damaged, leaking or broken water pipes and plumbing connections.',
    fullDesc: 'Whether you are dealing with corroded metallic pipes, cracked PPR water lines, or damaged PVC drainage, our skilled fundis offer long-lasting pipe replacement, soldering, and seamless sleeve repairs.',
    iconName: 'Wrench',
    urgencyLevel: 'Emergency 24/7',
    commonIssues: ['Burst PPR water pipes', 'Corroded galvanized iron lines', 'Cracked PVC waste pipes', 'Low water pressure from damaged pipes'],
    whatsAppMessage: 'Hi Urban Fix Plumbers, I need assistance with broken or damaged water pipes. My location is ____.'
  },
  {
    id: 'water-heater-services',
    title: 'Water Heater Services',
    shortDesc: 'Installation, troubleshooting, repairs and maintenance for water heating systems.',
    fullDesc: 'Get instant hot water restored in your home or apartment. We install, repair, and maintain instant electric shower heads, solar water heating systems, and central water boilers across Nairobi.',
    iconName: 'Flame',
    urgencyLevel: 'Urgent',
    commonIssues: ['Instant shower heater tripping breaker', 'Solar water heater not heating water', 'Boiler leaks & thermostat failures', 'New shower heater installations'],
    whatsAppMessage: 'Hi Urban Fix Plumbers, I need water heater / shower heater repair or installation. My location is ____.'
  },
  {
    id: 'bathroom-plumbing',
    title: 'Bathroom Plumbing',
    shortDesc: 'Professional installation and repair of toilets, showers, taps, sinks and other bathroom fixtures.',
    fullDesc: 'From modernizing bathroom fittings to fixing running flush toilets and installing elegant rain shower heads, Urban Fix Plumbers guarantees leak-free, clean craftsmanship for your bathroom space.',
    iconName: 'Bath',
    urgencyLevel: 'Standard',
    commonIssues: ['Constant running flush valves', 'Basin mixer tap replacements', 'Shower mixer installation', 'Toilet bowl & seat fitting'],
    whatsAppMessage: 'Hi Urban Fix Plumbers, I need help with bathroom plumbing fixtures. My location is ____.'
  },
  {
    id: 'kitchen-plumbing',
    title: 'Kitchen Plumbing',
    shortDesc: 'Sink, faucet, pipe and drainage installation and repairs.',
    fullDesc: 'Keep your kitchen fully functional. We handle double-bowl stainless steel sink fittings, kitchen mixer taps, dishwasher water lines, and grease trap unclogging.',
    iconName: 'UtensilsCrossed',
    urgencyLevel: 'Standard',
    commonIssues: ['Leaking under kitchen sink', 'Kitchen faucet replacement', 'Garbage disposal & waste trap sealing', 'Washing machine inlet hookups'],
    whatsAppMessage: 'Hi Urban Fix Plumbers, I need kitchen plumbing service. My location is ____.'
  },
  {
    id: 'plumbing-installations',
    title: 'Plumbing Installations',
    shortDesc: 'Professional plumbing installation for homes, apartments, offices and commercial spaces.',
    fullDesc: 'Planning a new building project, apartment renovation, or office fit-out? We install complete fresh water distribution systems, waste lines, overhead water tanks, and booster pumps.',
    iconName: 'Building2',
    urgencyLevel: 'Standard',
    commonIssues: ['Overhead & underground water tank plumbing', 'Water booster pump installation', 'Whole-house pipe rough-in', 'Commercial restroom fit-outs'],
    whatsAppMessage: 'Hi Urban Fix Plumbers, I need a quote for new plumbing installation. My location is ____.'
  },
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    shortDesc: 'Fast assistance for urgent leaks, blocked toilets, burst pipes and other plumbing emergencies.',
    fullDesc: 'Plumbing crises don\'t wait for normal office hours. Our 24/7 mobile plumber team in Nairobi prioritizes emergency calls day and night with rapid dispatch.',
    iconName: 'AlertTriangle',
    urgencyLevel: 'Emergency 24/7',
    commonIssues: ['Midnight burst pipe in apartment', 'Major water flooding', 'Completely blocked sole toilet', 'Sudden water supply failure'],
    whatsAppMessage: 'Hi Urban Fix Plumbers, EMERGENCY! I need a plumber right now. My location is ____ and the emergency is ____.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Available 24/7',
    description: 'Plumbing problems don\'t follow business hours. We\'re available around the clock across Nairobi.',
    icon: 'Clock'
  },
  {
    title: 'Fast Response',
    description: 'We prioritize urgent plumbing problems and aim to respond quickly when you need us most.',
    icon: 'Zap'
  },
  {
    title: 'Professional Service',
    description: 'Clean, practical and reliable plumbing work for homes, apartments, offices, and commercial sites.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Experienced Solutions',
    description: 'We diagnose the root problem properly before recommending the right, long-lasting solution.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Transparent Communication',
    description: 'Keep customers informed about the work needed, recommended repairs, and clear honest pricing.',
    icon: 'MessageSquareText'
  },
  {
    title: 'Residential & Commercial',
    description: 'We serve homeowners, landlords, estate managers, offices, shops, restaurants, and businesses.',
    icon: 'Building'
  }
];

export const NAIROBI_AREAS: NairobiArea[] = [
  { name: 'Kilimani', description: 'Apartments, residential homes & commercial offices', popular: true },
  { name: 'Westlands', description: 'Commercial hubs, restaurants & residential estates', popular: true },
  { name: 'Lavington', description: 'Residential estates, villas & schools', popular: true },
  { name: 'Karen', description: 'Private residences, estates & commercial centers', popular: true },
  { name: 'Kileleshwa', description: 'Modern apartment blocks & family residences', popular: true },
  { name: 'South C', description: 'Residential estates & commercial properties', popular: true },
  { name: 'Parklands', description: 'Hospitals, apartments & commercial properties', popular: true },
  { name: 'Lang\'ata', description: 'Residential estates & shopping precincts', popular: true },
  { name: 'Roysambu', description: 'High-density residential apartments', popular: false },
  { name: 'Kasarani', description: 'Residential & commercial properties', popular: false },
  { name: 'Embakasi', description: 'Residential estates, go-downs & commercial spaces', popular: false },
  { name: 'Ruaka', description: 'Modern apartment developments', popular: false },
  { name: 'Kiambu Road', description: 'Gated communities & commercial malls', popular: false },
  { name: 'Ngong Road', description: 'Mixed residential & office complexes', popular: false },
  { name: 'Upper Hill', description: 'Corporate offices, hotels & hospitals', popular: false },
  { name: 'Nairobi CBD', description: 'Shops, office towers & commercial buildings', popular: false }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: '1',
    author: 'Maina K.',
    rating: 5,
    date: '2 weeks ago',
    location: 'Kilimani, Nairobi',
    text: 'Had a major burst water pipe under my kitchen sink at 10 PM. Called Urban Fix Plumbers and they arrived promptly, fixed the PPR pipe cleanly and tested everything. Very reliable emergency service!',
    serviceProvided: 'Emergency Pipe Repair'
  },
  {
    id: '2',
    author: 'Sarah N.',
    rating: 5,
    date: '1 month ago',
    location: 'Westlands, Nairobi',
    text: 'Great work unblocking our restaurant kitchen drain system. Efficient, clean work, and explained how to prevent future blockages. Highly recommend Urban Fix for commercial plumbing.',
    serviceProvided: 'Drain Unblocking'
  },
  {
    id: '3',
    author: 'David O.',
    rating: 5,
    date: '2 months ago',
    location: 'Lavington, Nairobi',
    text: 'Installed new instant shower water heaters and replaced our bathroom mixer taps. Professional attitude, clean installation, and fair pricing. Will definitely use them again.',
    serviceProvided: 'Water Heater & Fixture Fitting'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do you offer emergency plumbing services?',
    answer: 'Yes. Urban Fix Plumbers is available 24 hours for urgent plumbing issues including burst pipes, severe water leaks, blocked toilets, and flooding across Nairobi.'
  },
  {
    question: 'What plumbing problems do you handle?',
    answer: 'We handle common plumbing problems including leaks, blocked drains, pipe repairs, bathroom and kitchen plumbing, water heater services, water tank installations, and commercial plumbing.'
  },
  {
    question: 'Do you serve homes and businesses?',
    answer: 'Yes. Plumbing services are available for residential homeowners, tenants, landlords, estate managers, offices, restaurants, and commercial facilities.'
  },
  {
    question: 'Can I contact you through WhatsApp?',
    answer: 'Yes! You can message Urban Fix Plumbers on WhatsApp (0714 409 033) anytime to send photos/videos of your plumbing issue for quick diagnosis and assistance.'
  },
  {
    question: 'How quickly can a plumber respond?',
    answer: 'Response time depends on your specific location in Nairobi, current traffic, and the urgency of the problem. For urgent emergencies, we prioritize immediate dispatch.'
  },
  {
    question: 'Are you available at night?',
    answer: 'Yes. Urban Fix Plumbers operates 24 hours a day, 7 days a week, 365 days a year.'
  }
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'p1',
    title: 'Burst PPR Water Pipe Repair',
    beforeLabel: 'Leaking Burst Pipe',
    afterLabel: 'Clean Repaired Line',
    beforeDesc: 'Under-sink PPR line burst causing wall dampness and severe water leakage.',
    afterDesc: 'New heavy-duty pressure pipe welded, pressure tested, and neatly sealed.',
    beforeImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p2',
    title: 'Kitchen Sink Drainage Unblocking',
    beforeLabel: 'Severe Grease Blockage',
    afterLabel: 'Clear Draining System',
    beforeDesc: 'Standing dirty water and clogged grease trap in busy commercial kitchen.',
    afterDesc: 'Cleared using mechanical drain auger and high-pressure jet cleaning.',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p3',
    title: 'Bathroom Rain Shower & Mixer Installation',
    beforeLabel: 'Old Corroded Fittings',
    afterLabel: 'Modern Bathroom Upgrade',
    beforeDesc: 'Dripping old tap valves and rusty shower head with poor water pressure.',
    afterDesc: 'Premium brass mixer and stainless steel rain shower installed cleanly.',
    beforeImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
  }
];
