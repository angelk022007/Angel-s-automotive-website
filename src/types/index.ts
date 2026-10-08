export type CategoryId = 
  | 'cars'
  | 'bikes'
  | 'brands'
  | 'history'
  | 'technology'
  | 'motorsport'
  | 'people'
  | 'future'
  | 'sustainability'
  | 'stories'
  | 'lifestyle'
  | 'achievements';

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  articlesCount: number;
}

export interface ArticleSection {
  heading: string;
  content: string; // Paragraphs separated by newlines
  image?: {
    src: string;
    caption: string;
    alt: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: CategoryId;
  categoryLabel: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageCaption: string;
  leadStory?: boolean;
  featured?: boolean;
  trendingRank?: number; // 1 to 5
  popularRank?: number;
  tags: string[];
  excerpt: string;
  introduction: string;
  sections: ArticleSection[];
  keyTakeaways: string[];
  pullQuote: {
    quote: string;
    attribution?: string;
  };
  conclusion: string;
  editorialNote?: string;
  relatedArticleIds?: string[];
}

export interface Community {
  id: string;
  name: string;
  type: 'brand' | 'regional' | 'interest';
  categoryLabel: string;
  brand?: string;
  region: 'North' | 'South' | 'East' | 'West' | 'International';
  vehicleType: 'Supercars' | 'Off-Road / 4x4' | 'Classics' | 'EVs' | 'Bikes' | 'Track / Racing' | 'General';
  description: string;
  membersCount: number;
  established: string;
  location: string;
  recentActivity: string;
  image: string;
  highlights: string[];
}

export interface AutomotiveEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  category: 'Car Meets' | 'Bike Meets' | 'Auto Shows' | 'Motorsport Events' | 'Off-Road Events' | 'EV Events' | 'Launch Events' | 'Driving Schools' | 'Community Drives';
  description: string;
  image: string;
  venue: string;
  entryType: 'Public' | 'Ticketed' | 'Invitation / Registration';
  highlights: string[];
}

export interface Journey {
  id: string;
  title: string;
  subtitle: string;
  destination: string;
  vehicle: string;
  route: string;
  distance: string;
  terrain: string;
  duration: string;
  image: string;
  highlights: string[];
  experience: string;
  practicalTips: string[];
}

export interface SpecialFeature {
  id: string;
  type: 'hall-of-fame' | 'then-vs-now' | 'behind-the-badge' | 'failures' | 'comebacks';
  title: string;
  subtitle: string;
  image: string;
  details: string;
  keyFacts?: string[];
  yearOrEra?: string;
  before?: {
    title: string;
    year: string;
    description: string;
    image: string;
  };
  after?: {
    title: string;
    year: string;
    description: string;
    image: string;
  };
}

export interface CarReview {
  id: string;
  vehicle: string;
  modelYear: string;
  priceContext: string;
  category: string;
  rating: number; // 0-10
  image: string;
  verdict: string;
  designAnalysis: string;
  interiorTech: string;
  performanceExperience: string;
  practicality: string;
  strengths: string[];
  limitations: string[];
}

export interface ProductGuide {
  id: string;
  title: string;
  type: 'part' | 'detailing' | 'gear';
  category: string;
  summary: string;
  image: string;
  guidePoints: string[];
  recommendedChoice?: string;
}
