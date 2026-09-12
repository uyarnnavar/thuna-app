import type { CategoryInfo, Worker, Review, CommunityTip } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: 'Wrench',
    description: 'Taps, leakages, flush tanks & apartment washroom fixes',
    emergencySupported: true,
    color: 'bg-blue-500'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: 'Zap',
    description: 'Switches, fans, short circuits, flat wiring & lights',
    emergencySupported: true,
    color: 'bg-amber-500'
  },
  {
    id: 'carpenter',
    name: 'Carpenter',
    icon: 'Hammer',
    description: 'Work desk repair, door locks, hinges & furniture assembly',
    emergencySupported: false,
    color: 'bg-emerald-600'
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: 'Sparkles',
    description: 'Deep home cleaning, bathroom sanitization & flat move-out',
    emergencySupported: false,
    color: 'bg-teal-500'
  },
  {
    id: 'ac_appliance',
    name: 'AC & Appliance',
    icon: 'Snowflake',
    description: 'AC servicing, gas refill, fridge & washing machine repair',
    emergencySupported: true,
    color: 'bg-cyan-600'
  },
  {
    id: 'mechanic',
    name: 'Mechanic',
    icon: 'Car',
    description: 'Two-wheeler puncture, engine start issue & battery jumpstart',
    emergencySupported: true,
    color: 'bg-red-500'
  },
  {
    id: 'locksmith',
    name: 'Locksmith',
    icon: 'Key',
    description: 'Locked out of PG/flat, duplicate keys & emergency lock opening',
    emergencySupported: true,
    color: 'bg-violet-600'
  },
  {
    id: 'device_repair',
    name: 'Laptop & Phone',
    icon: 'Smartphone',
    description: 'Screen replacement, battery, charger port & water damage fix',
    emergencySupported: false,
    color: 'bg-indigo-600'
  },
  {
    id: 'moving_transport',
    name: 'Moving & Pick-up',
    icon: 'Truck',
    description: 'Luggage shifting, PG/flat relocation & pick-up goods vehicle',
    emergencySupported: false,
    color: 'bg-orange-500'
  }
];

export const DISTRICTS_CITIES = [
  'Ernakulam / Kochi',
  'Malappuram (Kuttippuram / Manjeri / Tirur)',
  'Kozhikode / Calicut',
  'Thrissur',
  'Thiruvananthapuram / Trivandrum',
  'Palakkad',
  'Kottayam',
  'Kannur'
];

export const LOCALITIES_BY_DISTRICT: Record<string, string[]> = {
  'Ernakulam / Kochi': ['Edappally', 'Kalamassery', 'Kakkanad (InfoPark Area)', 'Fort Kochi', 'Kaloor / MG Road', 'Vyttila'],
  'Malappuram (Kuttippuram / Manjeri / Tirur)': ['Kuttippuram Town', 'Valanchery', 'Manjeri Central', 'Tirur Station Road', 'Perinthalmanna'],
  'Kozhikode / Calicut': ['Mavoor Road', 'Chathamangalam', 'Calicut Beach Area', 'Palayam', 'Thondayad Junction'],
  'Thrissur': ['Thrissur Town', 'Swaraj Round', 'East Fort', 'Ollur'],
  'Thiruvananthapuram / Trivandrum': ['Technopark (Kazhakkoottam)', 'Vazhuthacaud', 'Pattam', 'Kowdiar'],
  'Palakkad': ['Palakkad Town', 'Kanjikode'],
  'Kottayam': ['Kottayam Town', 'Ettumanoor'],
  'Kannur': ['Kannur Town', 'Thalassery']
};

export const INITIAL_WORKERS: Worker[] = [
  {
    id: 'w1',
    name: 'Rahul K. (Rahul Plumbing Services)',
    avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'plumbing',
    serviceName: 'Plumbing & Pipe Leakage Specialist',
    distanceKm: 0.8,
    locality: 'Kuttippuram Town',
    cityDistrict: 'Malappuram (Kuttippuram / Manjeri / Tirur)',
    rating: 4.9,
    reviewCount: 48,
    communityRecommendationsCount: 38,
    startingPrice: 200,
    isVerified: true,
    availabilityStatus: 'Available Now',
    isEmergencyAvailable: true,
    phone: '+91 98470 12345',
    whatsapp: '+919847012345',
    experienceYears: 7,
    serviceArea: ['Kuttippuram Town', 'Valanchery Road', 'PG & Flat Colonies'],
    bio: 'Trusted plumber working with young professionals, PG residents, and flat owners for 5+ years. Express service for pipe bursts, tap leakages, and flush repairs.',
    workPhotos: [
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=500&auto=format&fit=crop&q=80'
    ],
    priceList: [
      { item: 'Tap Replacement / Fix', price: 150 },
      { item: 'Flush Tank Repair', price: 250 },
      { item: 'Pipe Leakage Repair', price: 300 },
      { item: 'Bathroom Drain Blockage Removal', price: 350 }
    ],
    badges: ['District Favorite', 'Verified Identity', '24/7 Emergency']
  },
  {
    id: 'w2',
    name: 'Anwar Sadath (Anwar Electricals)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'electrical',
    serviceName: 'Certified Electrical Technician',
    distanceKm: 1.1,
    locality: 'Edappally / Kalamassery',
    cityDistrict: 'Ernakulam / Kochi',
    rating: 4.8,
    reviewCount: 56,
    communityRecommendationsCount: 42,
    startingPrice: 180,
    isVerified: true,
    availabilityStatus: 'Available Now',
    isEmergencyAvailable: true,
    phone: '+91 98471 23456',
    whatsapp: '+919847123456',
    experienceYears: 9,
    serviceArea: ['Edappally', 'Kalamassery', 'Kakkanad InfoPark'],
    bio: 'Provides fast electrical support for rented flats, PGs, and young adult apartments. Expert in ceiling fan capacitor change, room wiring, and MCB trips.',
    workPhotos: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=80'
    ],
    priceList: [
      { item: 'Fan Capacitor Change', price: 180 },
      { item: 'Switchboard Repair & Socket Installation', price: 200 },
      { item: 'MCB Trip & Short Circuit Fixing', price: 350 },
      { item: 'Work From Home Desk Light Setup', price: 150 }
    ],
    badges: ['Top Recommended', 'Verified Technician', 'Kochi Local Partner']
  },
  {
    id: 'w3',
    name: 'Suresh Kumar (Suresh Woodworks)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'carpenter',
    serviceName: 'Furniture & Lock Repair Carpenter',
    distanceKm: 1.5,
    locality: 'Kakkanad (InfoPark Area)',
    cityDistrict: 'Ernakulam / Kochi',
    rating: 4.7,
    reviewCount: 31,
    communityRecommendationsCount: 26,
    startingPrice: 250,
    isVerified: true,
    availabilityStatus: 'In 30 mins',
    isEmergencyAvailable: false,
    phone: '+91 98472 34567',
    whatsapp: '+919847234567',
    experienceYears: 12,
    serviceArea: ['Kakkanad', 'Edappally'],
    bio: 'Specialist in apartment furniture repair, work desks, wardrobe door hinges, and custom wooden shelves for rented flats.',
    workPhotos: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&auto=format&fit=crop&q=80'
    ],
    priceList: [
      { item: 'Door Lock Installation / Hinge Fix', price: 250 },
      { item: 'Work Desk Repair', price: 300 },
      { item: 'Wardrobe Latch Adjustment', price: 200 }
    ],
    badges: ['Verified Master Carpenter', 'Friendly Service']
  },
  {
    id: 'w4',
    name: 'Fasil AC & Cooling Experts',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'ac_appliance',
    serviceName: 'AC Servicing & Fridge Technician',
    distanceKm: 2.1,
    locality: 'Kalamassery',
    cityDistrict: 'Ernakulam / Kochi',
    rating: 4.9,
    reviewCount: 64,
    communityRecommendationsCount: 51,
    startingPrice: 450,
    isVerified: true,
    availabilityStatus: 'Available Now',
    isEmergencyAvailable: true,
    phone: '+91 98473 45678',
    whatsapp: '+919847345678',
    experienceYears: 8,
    serviceArea: ['Kalamassery', 'Edappally', 'InfoPark Area'],
    bio: 'Fast AC foam washing, filter cleaning, gas recharging, and mini-fridge repairs for young professionals and rented flat residents.',
    workPhotos: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&auto=format&fit=crop&q=80'
    ],
    priceList: [
      { item: 'AC General Service & Filter Clean', price: 450 },
      { item: 'AC Gas Top Up', price: 900 },
      { item: 'Washing Machine Drain Fix', price: 350 },
      { item: 'Fridge Thermostat Repair', price: 400 }
    ],
    badges: ['Super Rated', 'Fast Arrival', 'Kochi Reliable']
  },
  {
    id: 'w5',
    name: 'Kabeer (Quick Key Locksmith)',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'locksmith',
    serviceName: '24/7 Emergency Locksmith',
    distanceKm: 0.5,
    locality: 'Kuttippuram Town',
    cityDistrict: 'Malappuram (Kuttippuram / Manjeri / Tirur)',
    rating: 4.9,
    reviewCount: 39,
    communityRecommendationsCount: 35,
    startingPrice: 200,
    isVerified: true,
    availabilityStatus: 'Available Now',
    isEmergencyAvailable: true,
    phone: '+91 98474 56789',
    whatsapp: '+919847456789',
    experienceYears: 10,
    serviceArea: ['Town Center', 'All PGs & Flats within 5km'],
    bio: 'Locked out of your flat or PG late at night? Kabeer arrives within 15 minutes. Non-destructive lock opening and duplicate key cutting.',
    workPhotos: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=500&auto=format&fit=crop&q=80'
    ],
    priceList: [
      { item: 'Emergency Door Opening (Non-destructive)', price: 250 },
      { item: 'Duplicate Key Cutting (Pair)', price: 150 },
      { item: 'Padlock / Latch Replacement', price: 200 }
    ],
    badges: ['Night Emergency Responder', '15 Min Express', 'Community Trusted']
  },
  {
    id: 'w6',
    name: 'Shinoz (TechFix Laptop & Mobile)',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'device_repair',
    serviceName: 'Tech Repair & Screen Specialist',
    distanceKm: 1.3,
    locality: 'Mavoor Road',
    cityDistrict: 'Kozhikode / Calicut',
    rating: 4.8,
    reviewCount: 72,
    communityRecommendationsCount: 58,
    startingPrice: 300,
    isVerified: true,
    availabilityStatus: 'Available Now',
    isEmergencyAvailable: false,
    phone: '+91 98475 67890',
    whatsapp: '+919847567890',
    experienceYears: 6,
    serviceArea: ['Mavoor Road', 'Chathamangalam', 'Palayam'],
    bio: 'Specialist in work laptop RAM upgrade, SSD installation, keyboard replacement, smartphone screen fix, and coffee/water damage recovery.',
    workPhotos: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format&fit=crop&q=80'
    ],
    priceList: [
      { item: 'Laptop Cleaning & Thermal Paste', price: 400 },
      { item: 'SSD Installation + OS Cloning', price: 500 },
      { item: 'Phone Screen & Battery Replacement', price: 350 },
      { item: 'Charger Port Solder Fix', price: 300 }
    ],
    badges: ['Quick Turnaround', 'Hardware Specialist', 'Calicut Trusted']
  },
  {
    id: 'w7',
    name: 'Lakshmi Deep Clean & Home Hygiene',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'cleaning',
    serviceName: 'PG & Rented Flat Deep Cleaning',
    distanceKm: 1.0,
    locality: 'Technopark (Kazhakkoottam)',
    cityDistrict: 'Thiruvananthapuram / Trivandrum',
    rating: 4.8,
    reviewCount: 42,
    communityRecommendationsCount: 31,
    startingPrice: 350,
    isVerified: true,
    availabilityStatus: 'Available Tomorrow',
    isEmergencyAvailable: false,
    phone: '+91 98476 78901',
    whatsapp: '+919847678901',
    experienceYears: 5,
    serviceArea: ['Technopark Area', 'Kazhakkoottam', 'Pattam'],
    bio: 'Hassle-free deep cleaning when moving into a new rented flat or shifting PGs. Includes bathroom scrubbing, kitchen degreasing, and mattress sanitization.',
    workPhotos: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop&q=80'
    ],
    priceList: [
      { item: 'Single Room / Studio Deep Cleaning', price: 450 },
      { item: 'Bathroom Scrubbing & Sanitization', price: 350 },
      { item: '2BHK Move-out Deep Cleaning', price: 1200 }
    ],
    badges: ['Eco-Friendly Products', 'Trusted Team', 'Technopark Choice']
  },
  {
    id: 'w8',
    name: 'Dileep Auto Repairs & Puncture Express',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'mechanic',
    serviceName: 'Two-Wheeler Roadside & Puncture Assist',
    distanceKm: 0.9,
    locality: 'Kuttippuram Town',
    cityDistrict: 'Malappuram (Kuttippuram / Manjeri / Tirur)',
    rating: 4.7,
    reviewCount: 33,
    communityRecommendationsCount: 29,
    startingPrice: 150,
    isVerified: true,
    availabilityStatus: 'Available Now',
    isEmergencyAvailable: true,
    phone: '+91 98477 89012',
    whatsapp: '+919847789012',
    experienceYears: 11,
    serviceArea: ['5km radius around Town Highway'],
    bio: 'Scooter/bike stuck on your way to work? Dileep comes directly to your location with portable puncture kit, battery jumpstart cabling, and oil check.',
    workPhotos: [
      'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=500&auto=format&fit=crop&q=80'
    ],
    priceList: [
      { item: 'On-Spot Tubeless Puncture Patch', price: 150 },
      { item: 'Battery Jumpstart / Charge', price: 200 },
      { item: 'Chain Lube & General Checkup', price: 180 }
    ],
    badges: ['Roadside Assistance', 'Mobile Unit', 'Fast Dispatch']
  },
  {
    id: 'w9',
    name: 'Riyas (Luggage Shifting & Pick-up Van)',
    avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'moving_transport',
    serviceName: 'Flat Move-in & Goods Carrier Auto',
    distanceKm: 0.7,
    locality: 'Edappally',
    cityDistrict: 'Ernakulam / Kochi',
    rating: 4.9,
    reviewCount: 51,
    communityRecommendationsCount: 44,
    startingPrice: 300,
    isVerified: true,
    availabilityStatus: 'In 30 mins',
    isEmergencyAvailable: false,
    phone: '+91 98478 90123',
    whatsapp: '+919847890123',
    experienceYears: 7,
    serviceArea: ['Kochi City', 'Edappally to Kakkanad'],
    bio: 'Friendly pick-up auto and mini truck driver helping young adults move heavy suitcases, mattresses, and office desks from bus/train stations to new flats.',
    workPhotos: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80'
    ],
    priceList: [
      { item: 'Station to PG/Flat (Auto Goods)', price: 300 },
      { item: 'Inter-Flat Furniture Shift', price: 450 },
      { item: 'Mini Truck City Move', price: 800 }
    ],
    badges: ['Luggage Helper Included', 'Fair Meter Rate', 'Popular Relocation Partner']
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'r1',
    workerId: 'w1',
    userName: 'Anoop V.',
    cityDistrict: 'Malappuram (Kuttippuram / Manjeri / Tirur)',
    livingSituation: 'Shared Apartment',
    roomAddress: 'Green Acres Flat 3B',
    rating: 5,
    comment: 'Tap burst late night in our flat washroom. Rahul chettan arrived in 15 minutes and fixed the pipe valve. Saved us from major water damage!',
    date: '3 days ago',
    isRecommended: true,
    serviceType: 'Pipe Leakage Repair'
  },
  {
    id: 'r2',
    workerId: 'w2',
    userName: 'Sneha R.',
    cityDistrict: 'Ernakulam / Kochi',
    livingSituation: 'PG',
    roomAddress: 'Olive Executive PG, Edappally',
    rating: 5,
    comment: 'Anwar fixed our ceiling fan capacitor in 10 minutes after work hours. Very respectful, super reasonable charge (₹180 only). High recommendation!',
    date: '1 week ago',
    isRecommended: true,
    serviceType: 'Fan Capacitor Change'
  },
  {
    id: 'r3',
    workerId: 'w5',
    userName: 'Rohan Sharma',
    cityDistrict: 'Malappuram (Kuttippuram / Manjeri / Tirur)',
    livingSituation: 'PG',
    roomAddress: 'Metro PG Room 102',
    rating: 5,
    comment: 'Accidentally locked my keys inside room right before leaving for work. Kabeer unlocked it safely without damaging the door lock. 10/10 service!',
    date: '2 weeks ago',
    isRecommended: true,
    serviceType: 'Emergency Lock Opening'
  },
  {
    id: 'r4',
    workerId: 'w6',
    userName: 'Fathima Nizar',
    cityDistrict: 'Kozhikode / Calicut',
    livingSituation: 'Single Flat',
    roomAddress: 'Skyline Apartments Flat 402',
    rating: 5,
    comment: 'Spilled coffee on my work laptop keyboard. Shinoz cleaned the motherboard and replaced the key module overnight. Saved my project deadline!',
    date: '4 days ago',
    isRecommended: true,
    serviceType: 'Laptop Cleaning & Repair'
  },
  {
    id: 'r5',
    workerId: 'w9',
    userName: 'Muhammed Basil',
    cityDistrict: 'Ernakulam / Kochi',
    livingSituation: 'Shared Apartment',
    roomAddress: 'Edappally High Street Flat',
    rating: 5,
    comment: 'Shifted all my luggage and mattress from railway station to my new apartment. Riyas even helped carry heavy bags up 2 floors!',
    date: 'Yesterday',
    isRecommended: true,
    serviceType: 'Station Pickup & Shifting'
  }
];

export const INITIAL_TIPS: CommunityTip[] = [
  {
    id: 't1',
    author: 'Vishnu M. (Software Engineer)',
    cityDistrict: 'Ernakulam / Kochi',
    category: 'Relocation Tips',
    title: 'Who to call for late night flat lockouts in Kochi?',
    content: 'Always keep Kabeer Locksmith (+91 98474 56789) saved in your phone! Building security guards usually don\'t have master keys, but Kabeer can open standard door locks safely.',
    likes: 42,
    createdAt: '2 days ago'
  },
  {
    id: 't2',
    author: 'Divya Nair (Marketing Lead)',
    cityDistrict: 'Ernakulam / Kochi',
    category: 'Flat Setup',
    title: 'Monsoon PG & Flat AC Servicing tip',
    content: 'When moving into new rented apartments near Edappally / Kakkanad, ask Fasil or Anwar to check the switchboard earthing before plugging in high-power appliances.',
    likes: 29,
    createdAt: '5 days ago'
  }
];
