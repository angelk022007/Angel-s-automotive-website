import { SpecialFeature } from '../types';

export const HALL_OF_FAME_ENTRIES: SpecialFeature[] = [
  {
    id: 'hof-1-tata-indica',
    type: 'hall-of-fame',
    title: 'Tata Indica (1998)',
    subtitle: 'Ratan Tata’s Indigenous Miracle: "More Car Per Car"',
    yearOrEra: '1998 – 2018',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
    details: 'Unveiled at the 1998 Geneva Motor Show, the Tata Indica was India’s first indigenously developed passenger car. Styled by I.DE.A Institute in Turin and engineered in Pune, it promised the cabin space of an Ambassador at the price of a Maruti Zen. Despite early teething troubles, it laid the foundation for India’s domestic passenger car manufacturing sovereignty.',
    keyFacts: [
      'Over 115,000 bookings received within a week of public launch.',
      'Exported to the UK as the CityRover through MG Rover partnership.',
      'Proved that an Indian commercial truck builder could engineer passenger monocoques.'
    ]
  },
  {
    id: 'hof-2-royal-enfield-bullet',
    type: 'hall-of-fame',
    title: 'Royal Enfield Bullet 350 (1955–Present)',
    subtitle: 'The Undying Thump: Longest Continuous Motorcycle Production in History',
    yearOrEra: '1955 – Present',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80',
    details: 'Originally ordered in 1955 by the Indian Army for patrolling the disputed Himalayan borders of Jammu & Kashmir and Punjab, the Bullet 350 became the cultural heartbeat of Indian motorcycling. Its rhythmic cast-iron exhaust thump, hand-painted gold pinstripes by the brothers of Chennai, and unbreakable steel frame transformed it from military tool into timeless folk icon.',
    keyFacts: [
      'Continuous production for over 70 years, the longest of any motorcycle chassis in human history.',
      'Distinctive neutral finder lever and right-side gear shifter on classic cast-iron engines.',
      'Cultural symbol of pride, authority, and trans-Himalayan overland expeditions.'
    ]
  },
  {
    id: 'hof-3-porsche-911',
    type: 'hall-of-fame',
    title: 'Porsche 911 (1963–Present)',
    subtitle: 'The Defiance of Physics: Six Decades of Rear-Engine Perfection',
    yearOrEra: '1963 – Present',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    details: 'Conceived by Ferdinand "Butzi" Porsche as the type 901, the 911 defied packaging logic to become the most successful sports and endurance racing machine in human history. With over 30,000 racing victories and an unbroken silhouette across eight generations, it stands as the benchmark against which all sports cars are measured.',
    keyFacts: [
      'Over 1.2 million units manufactured across eight model generations.',
      'Won the 24 Hours of Le Mans, Monte Carlo Rally, and Paris-Dakar Rally.',
      'Preserved rear-engine boxer architecture through continuous engineering refinement.'
    ]
  }
];

export const THEN_VS_NOW_ENTRIES: SpecialFeature[] = [
  {
    id: 'tvn-1-mahindra-suvs',
    type: 'then-vs-now',
    title: 'Then vs Now: The Indian 4x4 Revolution',
    subtitle: 'From the leaf-sprung, utilitarian Mahindra Armada to the multi-link, Level-2 ADAS Thar Roxx.',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80',
    details: 'How Indian all-terrain vehicles transformed from bare-metal agricultural workhorses into sophisticated family adventure machines with panoramic glass roofs and electronic locking differentials.',
    before: {
      title: '1996: Mahindra Armada (Utilitarian Workhorse)',
      year: '1996',
      description: 'Solid front and rear axles with stiff semi-elliptical leaf springs, Peugeot-derived naturally aspirated diesel with 72 hp, manual steering demanding heavy biceps, vinyl seats, and zero air-conditioning.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80'
    },
    after: {
      title: '2026: Mahindra Thar Roxx (Global Refinement)',
      year: '2026',
      description: 'Pentalink rear suspension with Watt’s linkage and frequency-dependent damping, 175 hp mHawk common-rail turbo, twin 10.25-inch high-resolution displays, ventilated leatherette seats, and Level-2 ADAS radar suite.',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80'
    }
  },
  {
    id: 'tvn-2-himalayan-bikes',
    type: 'then-vs-now',
    title: 'Then vs Now: Adventure Motorcycling in India',
    subtitle: 'From oxygen-starved carburetors on cast-iron Bullets to liquid-cooled Sherpa 452 engines with Google Maps TFT dash.',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1600&q=80',
    details: 'How Himalayan expeditions evolved from carrying spare clutch cables and points ignition to ride-by-wire dual-channel ABS adventure tourers.',
    before: {
      title: '1980s: Royal Enfield Cast-Iron 350',
      year: '1985',
      description: 'Heavy cast-iron cylinder head, contact breaker point ignition prone to water stall, 4-speed gearbox with separate grease-packed clutch case, and drum brakes fading on steep mountain descents.',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80'
    },
    after: {
      title: '2026: Royal Enfield Himalayan 450 (Sherpa)',
      year: '2026',
      description: 'All-aluminium liquid-cooled 40 hp DOHC engine, 200mm Showa upside-down front forks, switchable rear ABS, 6-speed slip-and-assist transmission, and circular TFT navigation cluster with integrated Google Maps.',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1600&q=80'
    }
  }
];

export const BEHIND_THE_BADGE_ENTRIES: SpecialFeature[] = [
  {
    id: 'btb-1-tata-motors',
    title: 'Tata Motors: The Flow of Trust & Aspiration',
    type: 'behind-the-badge',
    subtitle: 'How a fluid interlocking chrome emblem represents the bond between maker, road, and driver.',
    yearOrEra: 'Introduced 1998',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    details: 'Created during the launch of the Indica in 1998, the Tata Motors emblem features an ellipse enclosing two upward-curving chrome arcs. The lower curve represents the engineering foundation and customer trust, while the soaring upper arc symbolizes technological ambition and boundless forward progress.',
    keyFacts: [
      'Designed to signal Tata’s bold transition from commercial locomotives and trucks into passenger vehicles.',
      'Featured prominently across Jaguar Land Rover acquisition and modern Acti.ev electric architectures.'
    ]
  },
  {
    id: 'btb-2-mahindra-twin-peaks',
    title: 'Mahindra Twin Peaks: The Wings of Modern Exploration',
    type: 'behind-the-badge',
    subtitle: 'Designed under Pratap Bose to represent the dual peaks of performance and adventure.',
    yearOrEra: 'Unveiled 2021',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80',
    details: 'Replacing the historic oval ‘M’ road badge, the Twin Peaks emblem debuted on the XUV700. It features two metallic interlocking winged chevron peaks forming an abstract ‘M’. It captures Mahindra’s transformation into an international SUV powerhouse that marries sophisticated design with rugged capability.',
    keyFacts: [
      'Symbolizes the courage to explore the untamed outdoors and reach peak achievements.',
      'Rendered in satin chrome on flagship SUVs and copper accents on the Born Electric EV portfolio.'
    ]
  },
  {
    id: 'btb-3-royal-enfield',
    title: 'Royal Enfield: "Made Like a Gun" Heritage',
    type: 'behind-the-badge',
    subtitle: 'From the Royal Small Arms Factory cannon to the winged Madras tank emblem.',
    yearOrEra: 'Originated 1893',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80',
    details: 'Originating in Redditch from Enfield’s precision firearm engineering for the British Crown, the motto ‘Made Like a Gun, Goes Like a Bullet’ featured a field cannon on early tank badges. When production moved to Madras in 1955, the badge evolved into the proud winged tank insignia still hand-detailed in Tamil Nadu today.',
    keyFacts: [
      'Reflects the military firearm tolerances required for early internal combustion cylinder castings.',
      'One of the oldest unbroken automotive brand identities in the world.'
    ]
  }
];

export const COMEBACK_STORIES_ENTRIES: SpecialFeature[] = [
  {
    id: 'cmb-1-royal-enfield-turnaround',
    type: 'comebacks',
    title: 'The Royal Enfield Resurrection (2000–Present)',
    subtitle: 'How Siddhartha Lal saved a loss-making Chennai icon and built an international mid-weight giant.',
    yearOrEra: '2000 – Present',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80',
    details: 'In 2000, Royal Enfield was on the verge of liquidation, selling barely 24,000 motorcycles a year with oil-leaking cast-iron engines. Young Siddhartha Lal convinced the Eicher board to divest thirteen other businesses and bet everything on Royal Enfield. Investing in world-class robotic plants in Oragadam and the UK Technology Centre at Bruntingthorpe, Royal Enfield modernized its engines (UCE, J-Series, 650 Twins, Sherpa 450) and now produces nearly one million motorcycles annually.',
    keyFacts: [
      'Annual sales grew from 24,000 units in 2000 to over 900,000 units in 2025-2026.',
      'Now outsells Harley-Davidson globally in the middleweight motorcycle sector.',
      'Revived British motorcycling heritage from state-of-the-art factories in Chennai.'
    ]
  },
  {
    id: 'cmb-2-tata-motors-pv',
    type: 'comebacks',
    title: 'Tata Motors: From Sub-5% Share to #2 and EV Hegemony',
    subtitle: 'How the IMPACT design language, GNCAP 5-star crash safety, and the Ziptron gamble reclaimed the market.',
    yearOrEra: '2016 – 2026',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    details: 'A decade ago, Tata Motors was relegated to commercial taxi fleets with aging Indica and Indigo platforms, holding less than 5% passenger vehicle market share. Under Project Turnaround, Pratap Bose introduced the IMPACT design philosophy, while engineers made 5-star GNCAP safety non-negotiable across Tiago, Nexon, Altroz, and Harrier. Then came the electric masterstroke: the Nexon EV and Acti.ev skateboard, transforming Tata Motors into India’s dominant EV leader with over 68% market share.',
    keyFacts: [
      'Turned a multi-year loss-making passenger car division into a multi-billion dollar enterprise.',
      'Pioneered mass-market 5-star crash safety culture across the Indian consumer mindset.',
      'Established undisputed market leadership in electric mobility across India.'
    ]
  }
];
