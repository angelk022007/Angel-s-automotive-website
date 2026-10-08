import { CarReview, ProductGuide } from '../types';

export const CAR_REVIEWS: CarReview[] = [
  {
    id: 'rev-1-mahindra-thar-roxx',
    vehicle: 'Mahindra Thar Roxx 4x4 AX7L',
    modelYear: '2026',
    priceContext: '₹12.99 – ₹22.49 Lakh (Ex-Showroom India)',
    category: 'Indian 4x4 & Rugged SUVs',
    rating: 9.3,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80',
    verdict: 'The 5-door Thar Roxx executes an astonishing transformation: marrying hardcore off-road locking differentials with refined multi-link frequency-selective damping and family-friendly luxury.',
    designAnalysis: 'Maintaining iconic vertical slats and flared wheel arches while stretching the wheelbase by 400mm. The squared-off rear side glass and integrated metal steps lend it muscular international posture without mimicking Jeep or Bronco tropes.',
    interiorTech: 'White leatherette upholstery, panoramic Skyroof, twin 10.25-inch high-resolution displays, wireless Apple CarPlay, Harman Kardon 9-speaker acoustics, and Level-2 ADAS calibrated specifically for Indian highway chaos.',
    performanceExperience: 'The 2.2-litre mHawk diesel delivers 175 horsepower and a thumping 370 Nm of torque from 1,500 RPM. On broken tarmac, the Watt’s linkage rear suspension prevents the traditional tail wag of old ladder-frames. In 4L low range, it walks up 40-degree incline boulders with serene mechanical authority.',
    practicality: 'Generous rear knee room for six-foot adults, rear AC vents, and a cavernous 644-liter boot make it a genuine single-car garage solution for cross-country Indian expeditions.',
    strengths: [
      'Authentic low-range 4x4 transfer case with electronic locking differentials',
      'Refined ride comfort courtesy of frequency-dependent dampers and Watt’s linkage',
      'Commanding, elevated driving position giving complete road authority'
    ],
    limitations: [
      'White cabin upholstery requires constant detailing vigilance against monsoon grime',
      'Extended waiting periods stretching past nine months in major Indian metros'
    ]
  },
  {
    id: 'rev-2-tata-curvv-ev',
    vehicle: 'Tata Curvv.ev 55kWh Empowered+',
    modelYear: '2026',
    priceContext: '₹17.49 – ₹21.99 Lakh (Ex-Showroom India)',
    category: 'Electric SUV Coupes · India',
    rating: 9.0,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    verdict: 'Tata Motors delivers India’s first mass-market SUV Coupe on the pure-electric Acti.ev skateboard, combining 420 km real-world range with fast-charging highway composure.',
    designAnalysis: 'The sloping aerodynamic fastback roofline terminates in a split ducktail spoiler and connected kinetic LED lightbar. Flush pop-out door handles and aero-disc 18-inch wheels deliver a slippery drag coefficient.',
    interiorTech: 'Minimalist burgundy two-tone dashboard, 12.3-inch floating cinematic display by Harman, ventilated front seats, powered tailgate with gesture control, and vehicle-to-load (V2L) power discharge.',
    performanceExperience: 'Permanent magnet synchronous motor pushes 167 horsepower with instantaneous 215 Nm torque. 0–100 km/h arrives in 8.6 seconds without torque steer. Multi-mode regenerative braking paddles make one-pedal city driving in Mumbai effortless.',
    practicality: 'Generous 500-liter boot space unaffected by battery packaging; 55 kWh LFP pack supports 70 kW DC fast-charging, replenishing 150 km of highway range in under 15 minutes.',
    strengths: [
      'Acti.ev skateboard balances low center of gravity with 190mm ground clearance',
      'Class-leading 55 kWh LFP battery thermal stability in 45°C summer conditions',
      'Striking aerodynamic design language turning heads on every city street'
    ],
    limitations: [
      'Sloping coupe roofline slightly compromises rear passenger headroom over 6 feet',
      'Rearward three-quarter visibility through split tailgate glass is narrow'
    ]
  },
  {
    id: 'rev-3-royal-enfield-himalayan-450',
    vehicle: 'Royal Enfield Himalayan 450 Hanle Black',
    modelYear: '2026',
    priceContext: '₹2.85 – ₹3.15 Lakh (Ex-Showroom India)',
    category: 'Adventure Motorcycles · India',
    rating: 9.5,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1600&q=80',
    verdict: 'The Sherpa 452 liquid-cooled engine and twin-spar steel chassis transform the Himalayan into a world-class adventure tourer capable of 130 km/h expressway cruising and rugged mountain goat climbing.',
    designAnalysis: 'Functional industrial minimalism: external metal tank exoskeleton guards, high-mounted LED headlight, 21-inch front spoked wheel, and upswept exhaust canister designed for deep Himalayan river crossings.',
    interiorTech: 'Single circular 4-inch TFT Tripper Dash powered by Google Maps full-screen projection, ride-by-wire throttle with Eco and Performance engine maps, switchable rear-wheel ABS.',
    performanceExperience: 'The 452cc DOHC single produces 40.02 metric horsepower and 40 Nm of torque. Mid-range punch past 4,000 RPM pulls hard all the way to 8,000 RPM. 200mm Showa upside-down front forks swallow rocky scree effortlessly.',
    practicality: '17-liter fuel tank yields over 450 km touring range; comfortable 825mm adjustable seat height with accessible narrow waistline.',
    strengths: [
      'Showa long-travel suspension damping is peerless over Indian ruts and rocks',
      'Smooth, high-revving 40 hp Sherpa engine sustains 120 km/h all day long',
      'Full-screen color Google Maps navigation integration in circular cluster'
    ],
    limitations: [
      '196 kg kerb weight requires deliberate technique when picking up in deep mud',
      'Tubeless spoked cross-wheels limited to premium Kamet White and Hanle Black trims'
    ]
  },
  {
    id: 'rev-4-mercedes-e-class-lwb',
    vehicle: 'Mercedes-Benz E-Class LWB (V214 Assembled in Pune)',
    modelYear: '2026',
    priceContext: '₹78.50 – ₹92.50 Lakh (Ex-Showroom India)',
    category: 'Executive Luxury Sedans · India',
    rating: 9.4,
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1600&q=80',
    verdict: 'The king of Chakan-assembled luxury sedans. Tailored specifically for Indian business leaders with Maybach-style reclining rear seats, extended legroom, and adaptive air suspension.',
    designAnalysis: 'Classic three-box profile stretched by 140mm between axles. Star-motif LED taillights, illuminated front grille surround, and flush door handles create refined presence in corporate boardrooms.',
    interiorTech: 'MBUX Superscreen spanning across the passenger dashboard, Burmester 4D surround sound with sound transducers in seatbacks, wireless charging in rear center armrest, and electric rear sunblinds.',
    performanceExperience: 'The 2.0-liter turbocharged mild-hybrid engine delivers silken acceleration through the 9G-TRONIC transmission. Cabin soundproofing cuts out Mumbai auto-rickshaw horns completely.',
    practicality: 'The ultimate chauffeur-driven machine in India; rear seat backrest reclines up to 36 degrees with electric calf supports.',
    strengths: [
      'Unmatched rear-seat executive luxury at half the cost of an imported S-Class',
      'Airmatic adaptive air suspension floats over Indian expansion joints and ridges',
      'Prestige and resale value unmatched in the Indian corporate ecosystem'
    ],
    limitations: [
      'Low 145mm ground clearance demands caution over sharp unscientific speed breakers',
      'Over-reliance on touch-capacitive sliders on the steering wheel'
    ]
  },
  {
    id: 'rev-5-porsche-911-gt3',
    vehicle: 'Porsche 911 GT3 Touring (992.2)',
    modelYear: '2026',
    priceContext: '₹2.75 – ₹3.20 Crore (India CBU Import)',
    category: 'Global Supercars & Benchmark',
    rating: 9.7,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80',
    verdict: 'A triumphant defense of the naturally aspirated, 9,000 RPM flat-six paired with double-wishbone front-axle precision.',
    designAnalysis: 'Clean silhouette without the giant rear wing. Underbody venturi diffusers deliver real high-speed downforce.',
    interiorTech: 'Analog center tachometer flanked by configurable screens; lightweight carbon bucket seats.',
    performanceExperience: '4.0-liter atmospheric motor revs with urgent ferocity to 9,000 RPM. Unmatched steering feel.',
    practicality: 'Firm low-speed ride, but front-axle lift enables clearing city ramps and speed bumps.',
    strengths: [
      'Atmospheric 9,000 RPM flat-six induction soundtrack',
      'Laser-accurate front-axle double wishbone turn-in',
      'Tactile manual transmission option'
    ],
    limitations: [
      'Tyre noise from Cup 2 compound on coarse highways',
      'Strict allocations and heavy import tariffs'
    ]
  }
];

export const PRODUCT_GUIDES: ProductGuide[] = [
  {
    id: 'gde-1-ceramic-coatings',
    title: 'The Truth About Ceramic Coatings: Indian Monsoon & Dust Protection',
    type: 'detailing',
    category: 'Car Detailing & Maintenance',
    summary: 'Silicon dioxide (SiO2) nano-coatings provide hydrophobic protection against acidic monsoon rains, bird droppings, and UV oxidation under 45°C Indian summer sunlight.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1600&q=80',
    guidePoints: [
      'Preparation is 90% of the result: clay bar decontamination and single-stage machine polish remove stubborn industrial fallout and water spots.',
      'Ceramic coatings repel water and grime, but do NOT prevent stone chips—combine with Paint Protection Film (PPF) on the front bumper and bonnet.',
      'Regular maintenance wash using pH-neutral shampoo and de-mineralized water prevents hard groundwater scaling from clogging nano-pores.'
    ],
    recommendedChoice: 'Gyeon Q² Mohs EVO or CarPro CQuartz UK 3.0'
  },
  {
    id: 'gde-2-brake-pads',
    title: 'Brake Pads & Thermal Fade: Engineering for High-Speed Indian Expressways',
    type: 'part',
    category: 'Auto Parts & Upgrades',
    summary: 'Choosing friction materials capable of surviving sudden 120 km/h emergency braking on expressways in 40°C heat without catastrophic pedal fade.',
    image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=1600&q=80',
    guidePoints: [
      'Ceramic pads: Low dust, quiet operation, ideal for street cruising, but lack bite when cold or pushed to extreme track temperatures.',
      'Semi-metallic pads: High thermal conductivity, strong initial bite, excellent fade resistance, higher rotor wear and moderate brake dust.',
      'Performance street upgrade: Ferodo DS2500 or EBC Yellowstuff pads deliver exceptional bite for heavy SUVs at triple-digit speeds.'
    ],
    recommendedChoice: 'Ferodo DS2500 or EBC Yellowstuff high-friction pads'
  },
  {
    id: 'gde-3-dashcam-testing',
    title: 'Supercapacitor Dashcams for Indian Conditions: Heat Resilience & Dual-Channel Video',
    type: 'gear',
    category: 'Popular Products & Tech',
    summary: 'Why lithium-battery dashcams swell and fail in 60°C windshield cabins, and why supercapacitor Sony Starvis 2 sensors are mandatory for Indian driving defense.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
    guidePoints: [
      'Supercapacitors withstand windshield soak temperatures up to 75°C without dangerous battery swelling or sudden thermal failure.',
      'Sony Starvis 2 sensors provide superior High Dynamic Range (HDR) to read license plates through glaring high-beam LED lights.',
      'Dual-channel front and rear coverage with parking hardwire surveillance provides irrefutable evidence in disputed traffic incidents.'
    ],
    recommendedChoice: 'VIOFO A229 Pro 4K Dual Channel (Sony Starvis 2)'
  }
];
