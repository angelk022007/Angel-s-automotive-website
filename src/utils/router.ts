import { Article, CategoryId } from '../types';
import { INITIAL_ARTICLES } from '../data/articles';

export interface RouteState {
  view: string;
  articleSlug?: string;
  categoryId?: CategoryId;
  topicSlug?: string;
  specialsTab?: string;
}

export function parseCurrentRoute(): RouteState {
  // Check hash first (e.g. #/article/why-headlights-used-to-blink)
  const hash = window.location.hash.replace(/^#\/?/, '');
  // Or check path (e.g. /article/why-headlights-used-to-blink)
  const pathname = window.location.pathname.replace(/^\//, '');

  const path = hash || pathname;

  if (!path || path === '') {
    return { view: 'home' };
  }

  // Articles: /article/:slug or /articles/:slug
  const articleMatch = path.match(/^(?:articles?|story|stories)\/([^/?#]+)/i);
  if (articleMatch) {
    return { view: 'article', articleSlug: articleMatch[1] };
  }

  // Categories: /category/:id or /cars, /bikes, /brands, etc.
  const categoryMatch = path.match(/^category\/([^/?#]+)/i);
  if (categoryMatch) {
    return { view: `category-${categoryMatch[1]}`, categoryId: categoryMatch[1] as CategoryId };
  }

  // Direct category root names: /cars, /bikes, /history, etc.
  const directCategoryMatch = path.match(/^(cars|bikes|brands|history|technology|motorsport|people|future|sustainability|lifestyle|achievements)\/?$/i);
  if (directCategoryMatch) {
    return { view: `category-${directCategoryMatch[1].toLowerCase()}`, categoryId: directCategoryMatch[1].toLowerCase() as CategoryId };
  }

  // Topics: /topics/:slug or /topic/:slug
  const topicMatch = path.match(/^topics?\/([^/?#]+)/i);
  if (topicMatch) {
    return { view: 'topic', topicSlug: topicMatch[1] };
  }
  if (path === 'topics') {
    return { view: 'topics' };
  }

  // Specials: /specials or /specials/:tab
  const specialsMatch = path.match(/^specials(?:\/([^/?#]+))?/i);
  if (specialsMatch) {
    return { view: 'specials', specialsTab: specialsMatch[1] || 'hall-of-fame' };
  }

  // Direct known views
  if (path.startsWith('community')) return { view: 'community' };
  if (path.startsWith('events')) return { view: 'events' };
  if (path.startsWith('journeys')) return { view: 'journeys' };
  if (path.startsWith('reviews')) return { view: 'reviews' };
  if (path.startsWith('contributor')) return { view: 'contributor' };
  if (path.startsWith('bookmarks')) return { view: 'bookmarks' };
  if (path.startsWith('about')) return { view: 'about' };
  if (path.startsWith('legal')) return { view: 'legal' };

  return { view: 'home' };
}

export function buildUrlForRoute(view: string, payload?: any): string {
  if (view === 'article') {
    const slug = typeof payload === 'string' 
      ? payload 
      : (payload as Article)?.slug || (payload as Article)?.id;
    return `/article/${slug}`;
  }

  if (view.startsWith('category-')) {
    const cat = view.replace('category-', '');
    return `/category/${cat}`;
  }

  if (view === 'category' && payload) {
    return `/category/${payload}`;
  }

  if (view === 'topic' && payload) {
    return `/topics/${payload}`;
  }

  if (view === 'topics') {
    return '/topics';
  }

  if (view === 'specials') {
    return payload ? `/specials/${payload}` : '/specials';
  }

  if (view === 'home') {
    return '/';
  }

  return `/${view}`;
}

export function findArticleBySlugOrId(slugOrId: string): Article | undefined {
  return INITIAL_ARTICLES.find(
    a => a.slug.toLowerCase() === slugOrId.toLowerCase() || a.id.toLowerCase() === slugOrId.toLowerCase()
  );
}
