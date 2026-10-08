import { CategoryId } from '../types';

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  subcategories: string[];
}

export const CATEGORIES: Record<CategoryId, CategoryMeta> = {
  cars: {
    id: 'cars',
    name: 'Cars',
    tagline: 'Engineering, Silhouettes, and Road Machines',
    description: 'From lightweight hatchbacks and grand tourers to hypercars, electric platforms, and all-terrain 4x4s.',
    coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Hatchbacks', 'Sedans', 'SUVs', 'Coupes', 'Convertibles', 'Supercars', 'Hypercars', 'Luxury Cars', 'Electric Cars', 'Hybrid Cars', '4x4 / Off-Road']
  },
  bikes: {
    id: 'bikes',
    name: 'Bikes',
    tagline: 'Two Wheels, Balance, and Mechanical Soul',
    description: 'Exploring the raw thrill of motorcycling across superbikes, adventure tourers, cruisers, and electric two-wheelers.',
    coverImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Motorcycles', 'Superbikes', 'Adventure Bikes', 'Cruisers', 'Electric Bikes', 'Racing Bikes', 'Scooters']
  },
  brands: {
    id: 'brands',
    name: 'Brands',
    tagline: 'Marque Heritage, Founders, and Design Conviction',
    description: 'How enduring automotive brands forge cultural immortality through design philosophy, triumphs, and transformations.',
    coverImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Brand Histories', 'Founders', 'Design Philosophy', 'Iconic Models', 'Brand Achievements', 'Brand Transformations', 'Future Plans']
  },
  history: {
    id: 'history',
    name: 'History',
    tagline: 'The Mechanical Archives of Humanity',
    description: 'Chronicles of automotive inventions, engineering breakthroughs, historic races, and milestones that propelled civilization forward.',
    coverImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Automotive Inventions', 'Historic Vehicles', 'Automotive Milestones', 'Evolution of Design', 'Historic Racing Moments']
  },
  technology: {
    id: 'technology',
    name: 'Technology',
    tagline: 'From Combustion Thermodynamics to Edge Compute',
    description: 'Deep dives into powertrain engineering, battery electrochemistry, ADAS software, aerodynamics, and lightweight metallurgy.',
    coverImage: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Engines', 'EV Technology', 'Batteries', 'Autonomous Driving', 'ADAS', 'Software & AI', 'Materials', 'Safety Engineering']
  },
  motorsport: {
    id: 'motorsport',
    name: 'Motorsport',
    tagline: 'The Ultimate Proving Ground Under the Chequered Flag',
    description: 'Formula 1, World Endurance Championship, World Rally, MotoGP, and grass-roots racing where engineering is pushed past breaking point.',
    coverImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Formula 1', 'WEC & Le Mans', 'Rally & WRC', 'Moto Racing', 'Drifting', 'Racing Technology', 'Racing Legends', 'Driving Schools']
  },
  people: {
    id: 'people',
    name: 'People',
    tagline: 'The Minds, Hands, and Convictions Behind the Wheel',
    description: 'Portraits of master designers, visionary engineers, test drivers, team principals, and eccentric inventors who built the machines.',
    coverImage: 'https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Engineers', 'Designers', 'Founders', 'Drivers', 'Team Principals', 'Inventors', 'Automotive Personalities']
  },
  future: {
    id: 'future',
    name: 'Future',
    tagline: 'Grounded Forecasts for Mobility in 2035 and Beyond',
    description: 'Separating science-fiction hype from realistic automotive advancements in solid-state energy, steer-by-wire, and sustainable urban transport.',
    coverImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Solid-State Energy', 'AI & Autonomy', 'Concept Vehicles', 'New Propulsion', 'Future Interiors', 'Circular Manufacturing']
  },
  sustainability: {
    id: 'sustainability',
    name: 'Sustainability',
    tagline: 'Circular Materials, Synthetic Fuels, and Clean Speed',
    description: 'Examining the environmental footprint of automotive production, closed-loop battery recycling, natural composites, and carbon-neutral fuels.',
    coverImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['EV Lifecycle', 'Synthetic E-Fuels', 'Flax & Bio-Composites', 'Battery Recycling', 'Green Manufacturing']
  },
  stories: {
    id: 'stories',
    name: 'Stories',
    tagline: 'Long-Form Narratives and Unsung Automotive Sagas',
    description: 'Immersive literary journalism uncovering forgotten prototypes, dramatic comebacks, design revolutions, and road adventures.',
    coverImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Lead Stories', 'Hall of Fame', 'Then vs Now', 'Behind the Badge', 'Automotive Failures', 'Comeback Stories']
  },
  lifestyle: {
    id: 'lifestyle',
    name: 'Lifestyle',
    tagline: 'Travel, Architecture, Journeys, and Automotive Culture',
    description: 'Connecting driving culture with alpine passes, classic rallies, automotive architecture, timepieces, and travel memoirs.',
    coverImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Featured Journeys', 'Travel & Routes', 'Car Museums', 'Automotive Design', 'Luxury Experiences']
  },
  achievements: {
    id: 'achievements',
    name: 'Achievements',
    tagline: 'Records, Speed Barriers, and Triumphs of Steel',
    description: 'Speed records, endurance runs, world-first inventions, and production triumphs that redefined human capability.',
    coverImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80',
    subcategories: ['Speed Records', 'Endurance Milestones', 'Engineering Firsts', 'Production Triumphs']
  }
};

export const POPULAR_TOPICS = [
  { slug: 'suv', name: 'SUV', count: 18 },
  { slug: 'ev', name: 'EV', count: 24 },
  { slug: 'bmw', name: 'BMW', count: 12 },
  { slug: 'f1', name: 'F1', count: 16 },
  { slug: '4x4', name: '4x4', count: 14 },
  { slug: 'luxury', name: 'Luxury', count: 19 },
  { slug: 'off-roading', name: 'Off-Roading', count: 11 },
  { slug: 'ai', name: 'AI', count: 8 },
  { slug: 'history', name: 'History', count: 27 },
  { slug: 'drifting', name: 'Drifting', count: 6 },
  { slug: 'supercars', name: 'Supercars', count: 21 },
  { slug: 'classics', name: 'Classics', count: 17 },
  { slug: 'racing', name: 'Racing', count: 23 },
  { slug: 'technology', name: 'Technology', count: 31 },
  { slug: 'road-trips', name: 'Road Trips', count: 15 },
  { slug: 'design', name: 'Design', count: 19 },
  { slug: 'bikes', name: 'Bikes', count: 13 },
  { slug: 'safety', name: 'Safety', count: 10 },
  { slug: 'sustainability', name: 'Sustainability', count: 14 }
];

export interface ExploreMenuItem {
  label: string;
  category?: string;
  view?: string;
  tab?: string;
  tag?: string;
}

export interface ExploreMenuSection {
  title: string;
  items: ExploreMenuItem[];
}

export const EXPLORE_MENU_SECTIONS: ExploreMenuSection[] = [
  {
    title: 'Automotive',
    items: [
      { label: 'Cars', category: 'cars' },
      { label: 'Bikes', category: 'bikes' },
      { label: 'Brands', category: 'brands' },
      { label: 'Reviews', view: 'reviews' },
      { label: 'Auto Parts & Guides', view: 'parts' },
      { label: 'Car Detailing', view: 'detailing' },
      { label: 'Popular Products', view: 'products' }
    ]
  },
  {
    title: 'Knowledge',
    items: [
      { label: 'History', category: 'history' },
      { label: 'Technology', category: 'technology' },
      { label: 'Achievements', category: 'achievements' },
      { label: 'Sustainability', category: 'sustainability' },
      { label: 'Future Mobility', category: 'future' },
      { label: 'People & Pioneers', category: 'people' },
      { label: 'World of Automotive', category: 'stories' }
    ]
  },
  {
    title: 'Motorsport',
    items: [
      { label: 'Formula 1', category: 'motorsport', tag: 'Formula 1' },
      { label: 'Endurance & Le Mans', category: 'motorsport', tag: 'WEC & Le Mans' },
      { label: 'Rally & WRC', category: 'motorsport', tag: 'Rally & WRC' },
      { label: 'Racing Technology', category: 'motorsport', tag: 'Racing Technology' },
      { label: 'Racing Legends', category: 'motorsport', tag: 'Racing Legends' }
    ]
  },
  {
    title: 'Stories & Specials',
    items: [
      { label: 'Lead Stories', view: 'lead-stories' },
      { label: 'Hall of Fame', view: 'specials', tab: 'hall-of-fame' },
      { label: 'Then vs Now', view: 'specials', tab: 'then-vs-now' },
      { label: 'Behind the Badge', view: 'specials', tab: 'behind-the-badge' },
      { label: 'Automotive Failures', view: 'specials', tab: 'failures' },
      { label: 'Comeback Stories', view: 'specials', tab: 'comebacks' }
    ]
  },
  {
    title: 'Lifestyle & Community',
    items: [
      { label: 'Featured Journeys', view: 'journeys' },
      { label: 'Automotive Community', view: 'community' },
      { label: 'Calendar & Events', view: 'events' },
      { label: 'Drive Reviews', view: 'reviews' },
      { label: 'Become a Contributor', view: 'contributor' }
    ]
  }
];
