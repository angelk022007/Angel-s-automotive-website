import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadHero } from './components/LeadHero';
import { FeaturedGrid } from './components/FeaturedGrid';
import { TrendingNow } from './components/TrendingNow';
import { LatestFeed } from './components/LatestFeed';
import { SpecialsTeaser } from './components/SpecialsTeaser';
import { CommunityTeaser } from './components/CommunityTeaser';
import { JourneysTeaser } from './components/JourneysTeaser';
import { TopicCloud } from './components/TopicCloud';
import { NewsletterSection } from './components/NewsletterSection';
import { ExploreCategories } from './components/ExploreCategories';
import { MotorsportSection } from './components/MotorsportSection';
import { PopularArticles } from './components/PopularArticles';
import { ArticleView } from './components/ArticleView';
import { CategoryView } from './components/CategoryView';
import { TopicView } from './components/TopicView';
import { SpecialsView } from './components/SpecialsView';
import { CommunityView } from './components/CommunityView';
import { EventsView } from './components/EventsView';
import { JourneysView } from './components/JourneysView';
import { ReviewsView } from './components/ReviewsView';
import { ContributorView } from './components/ContributorView';
import { BookmarksView } from './components/BookmarksView';
import { AboutView } from './components/AboutView';
import { SearchModal } from './components/SearchModal';
import { NewsletterModal } from './components/NewsletterModal';

import { INITIAL_ARTICLES } from './data/articles';
import { CATEGORIES } from './data/categories';
import { Article, CategoryId } from './types';
import { parseCurrentRoute, buildUrlForRoute, findArticleBySlugOrId } from './utils/router';
import { updatePageSEO } from './utils/seo';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(INITIAL_ARTICLES[0]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('cars');
  const [selectedTopic, setSelectedTopic] = useState<string>('suv');
  const [specialsTab, setSpecialsTab] = useState<string>('hall-of-fame');
  
  // Bookmarks
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(['art-1-headlights']);

  // Modals
  const [searchOpen, setSearchOpen] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  // Sync Document Title & SEO based on current view and state
  const syncSEOForView = useCallback((view: string, article?: Article | null, category?: CategoryId, topic?: string) => {
    const origin = window.location.origin;

    if (view === 'article' && article) {
      const canonicalUrl = `${origin}/article/${article.slug}`;
      updatePageSEO(
        `${article.title} — Motor Chronicles`,
        article.subtitle || article.excerpt,
        canonicalUrl,
        'article',
        article
      );
      return;
    }

    if (view.startsWith('category-')) {
      const catKey = (category || view.replace('category-', '')) as CategoryId;
      const catMeta = CATEGORIES[catKey];
      const title = catMeta ? `${catMeta.name} — Motor Chronicles` : 'Category — Motor Chronicles';
      const desc = catMeta ? catMeta.description : 'Automotive journalism category archive.';
      updatePageSEO(title, desc, `${origin}/category/${catKey}`);
      return;
    }

    if (view === 'topic') {
      const topicName = (topic || selectedTopic).toUpperCase();
      updatePageSEO(
        `#${topicName} Articles & Dossiers — Motor Chronicles`,
        `Explore all automotive investigations, historical analyses, and dispatches regarding #${topicName}.`,
        `${origin}/topics/${topic || selectedTopic}`
      );
      return;
    }

    if (view === 'topics') {
      updatePageSEO(
        'Thematic Topic Directory — Motor Chronicles',
        'Explore all short-tail automotive topics, marques, racing categories, and engineering indexes.',
        `${origin}/topics`
      );
      return;
    }

    if (view === 'specials') {
      updatePageSEO(
        'The Motor Chronicles Specials — Hall of Fame & Retrospectives',
        'Permanent monuments of engineering, heraldic marque lore, and pivotal technological evolutions.',
        `${origin}/specials`
      );
      return;
    }

    if (view === 'community') {
      updatePageSEO(
        'Motor Chronicles Community — Owner Guilds & Registries',
        'Connecting regional owner groups, historic preservation registries, and overland trail builders.',
        `${origin}/community`
      );
      return;
    }

    if (view === 'events') {
      updatePageSEO(
        'Automotive Events Calendar & Concorso — Motor Chronicles',
        'Official calendar of international concorso d’eleganza, 24-hour endurance classics, and dawn drives.',
        `${origin}/events`
      );
      return;
    }

    if (view === 'journeys') {
      updatePageSEO(
        'Featured Journeys & Drives — Motor Chronicles',
        'Rigorously scouted driving routes with vehicle recommendations, terrain profiles, and driver tips.',
        `${origin}/journeys`
      );
      return;
    }

    if (view === 'reviews') {
      updatePageSEO(
        'Drive Reviews & Technical Guides — Motor Chronicles',
        'Unvarnished road evaluations, brake friction analyses, and detailing chemistry testing.',
        `${origin}/reviews`
      );
      return;
    }

    if (view === 'contributor') {
      updatePageSEO(
        'Become a Contributor — Motor Chronicles Editorial Desk',
        'Write for Motor Chronicles: submission guidelines for automotive historians and mechanical engineers.',
        `${origin}/contributor`
      );
      return;
    }

    if (view === 'bookmarks') {
      updatePageSEO(
        'Saved Articles & Reading List — Motor Chronicles',
        'Personal reading list and saved dossiers for deep offline reading.',
        `${origin}/bookmarks`
      );
      return;
    }

    if (view === 'about') {
      updatePageSEO(
        'About Motor Chronicles — Stories Behind the Machines',
        'An independent automotive digital publication exploring the stories, machines, people, and ideas shaping mobility.',
        `${origin}/about`
      );
      return;
    }

    // Default Home
    updatePageSEO(
      'Motor Chronicles — Stories Behind the Machines',
      'Stories Behind the Machines. A premier digital automotive editorial publication exploring cars, bikes, engineering heritage, motorsport, culture, and future mobility.',
      `${origin}/`
    );
  }, [selectedTopic]);

  // Synchronize Scroll & History Navigation
  const navigateTo = useCallback((view: string, payload?: any, pushHistory: boolean = true) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let targetUrl = '';
    let newView = view;
    let targetArticle: Article | null = selectedArticle;
    let targetCat = selectedCategory;
    let targetTop = selectedTopic;

    if (view === 'article') {
      newView = 'article';
      if (typeof payload === 'string') {
        const found = findArticleBySlugOrId(payload);
        if (found) {
          targetArticle = found;
          setSelectedArticle(found);
        }
      } else if (payload) {
        targetArticle = payload as Article;
        setSelectedArticle(payload as Article);
      }
      targetUrl = buildUrlForRoute('article', targetArticle);
    } else if (view === 'category') {
      const cat = (payload || selectedCategory) as CategoryId;
      targetCat = cat;
      setSelectedCategory(cat);
      newView = `category-${cat}`;
      targetUrl = buildUrlForRoute('category', cat);
    } else if (view === 'topic') {
      const t = payload || selectedTopic;
      targetTop = t;
      setSelectedTopic(t);
      newView = 'topic';
      targetUrl = buildUrlForRoute('topic', t);
    } else if (view === 'topics') {
      newView = 'topics';
      targetUrl = '/topics';
    } else if (view === 'specials') {
      if (payload) setSpecialsTab(payload);
      newView = 'specials';
      targetUrl = buildUrlForRoute('specials', payload);
    } else {
      newView = view;
      targetUrl = buildUrlForRoute(view, payload);
    }

    setCurrentView(newView);

    // Update browser URL and history
    if (pushHistory) {
      try {
        window.history.pushState({ view: newView, payload }, '', targetUrl);
      } catch {
        // Fallback to hash if pathname manipulation is constrained
        window.location.hash = targetUrl;
      }
    }

    // Synchronize SEO & Page Title
    syncSEOForView(newView, targetArticle, targetCat, targetTop);
  }, [selectedArticle, selectedCategory, selectedTopic, syncSEOForView]);

  // Handle Initial Route on Mount and Browser Popstate/Hashchange
  useEffect(() => {
    const applyRouteFromUrl = () => {
      const route = parseCurrentRoute();

      if (route.view === 'article' && route.articleSlug) {
        const found = findArticleBySlugOrId(route.articleSlug);
        if (found) {
          setSelectedArticle(found);
          setCurrentView('article');
          syncSEOForView('article', found);
          return;
        }
      }

      if (route.categoryId) {
        setSelectedCategory(route.categoryId);
        setCurrentView(`category-${route.categoryId}`);
        syncSEOForView(`category-${route.categoryId}`, null, route.categoryId);
        return;
      }

      if (route.view === 'topic' && route.topicSlug) {
        setSelectedTopic(route.topicSlug);
        setCurrentView('topic');
        syncSEOForView('topic', null, undefined, route.topicSlug);
        return;
      }

      if (route.view === 'specials') {
        if (route.specialsTab) setSpecialsTab(route.specialsTab);
        setCurrentView('specials');
        syncSEOForView('specials');
        return;
      }

      setCurrentView(route.view);
      syncSEOForView(route.view);
    };

    applyRouteFromUrl();

    const handlePopState = () => applyRouteFromUrl();
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [syncSEOForView]);

  const handleToggleBookmark = (article: Article) => {
    if (savedArticleIds.includes(article.id)) {
      setSavedArticleIds(savedArticleIds.filter(id => id !== article.id));
    } else {
      setSavedArticleIds([...savedArticleIds, article.id]);
    }
  };

  const savedArticles = INITIAL_ARTICLES.filter(a => savedArticleIds.includes(a.id));

  // Lead and featured articles
  const leadArticle = INITIAL_ARTICLES.find(a => a.leadStory) || INITIAL_ARTICLES[0];
  const featuredArticles = INITIAL_ARTICLES.filter(a => a.featured && a.id !== leadArticle.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1C1917]">
      
      {/* 1. Elegant navigation / header */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenNewsletter={() => setNewsletterOpen(true)}
        savedCount={savedArticleIds.length}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {/* VIEW 1: HOME PAGE */}
        {currentView === 'home' && (
          <div>
            {/* 2. Large Lead Story with a strong automotive image */}
            <LeadHero
              article={leadArticle}
              onReadArticle={(art) => navigateTo('article', art)}
            />

            {/* 3. Featured Stories in an editorial grid */}
            <FeaturedGrid
              articles={featuredArticles}
              onReadArticle={(art) => navigateTo('article', art)}
            />

            {/* 4. Trending Stories */}
            <TrendingNow
              articles={INITIAL_ARTICLES}
              onReadArticle={(art) => navigateTo('article', art)}
            />

            {/* 5. Latest Stories */}
            <LatestFeed
              articles={INITIAL_ARTICLES}
              onReadArticle={(art) => navigateTo('article', art)}
            />

            {/* 6. Explore Automotive Categories */}
            <ExploreCategories
              onSelectCategory={(catId) => navigateTo('category', catId)}
            />

            {/* 7. Special Features */}
            <SpecialsTeaser
              onNavigateSpecials={(tab) => navigateTo('specials', tab)}
            />

            {/* 8. Motorsport section */}
            <MotorsportSection
              articles={INITIAL_ARTICLES}
              onReadArticle={(art) => navigateTo('article', art)}
              onNavigateMotorsport={() => navigateTo('category', 'motorsport')}
            />

            {/* 9. Community section */}
            <CommunityTeaser
              onNavigateCommunity={() => navigateTo('community')}
            />

            {/* 10. Featured Journeys / Travel */}
            <JourneysTeaser
              onNavigateJourneys={() => navigateTo('journeys')}
            />

            {/* 11. Popular Articles */}
            <PopularArticles
              articles={INITIAL_ARTICLES}
              onReadArticle={(art) => navigateTo('article', art)}
            />

            {/* 12. Explore by Topic */}
            <TopicCloud
              onSelectTopic={(slug) => navigateTo('topic', slug)}
            />

            {/* 13. Newsletter */}
            <NewsletterSection />
          </div>
        )}

        {/* VIEW 2: ARTICLE READER */}
        {currentView === 'article' && selectedArticle && (
          <ArticleView
            article={selectedArticle}
            allArticles={INITIAL_ARTICLES}
            onNavigate={navigateTo}
            onReadArticle={(art) => navigateTo('article', art)}
            isBookmarked={savedArticleIds.includes(selectedArticle.id)}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {/* VIEW 3: CATEGORY PAGE */}
        {currentView.startsWith('category-') && (
          <CategoryView
            categoryId={selectedCategory}
            articles={INITIAL_ARTICLES}
            onNavigate={navigateTo}
            onReadArticle={(art) => navigateTo('article', art)}
          />
        )}

        {/* VIEW 4: TOPIC PAGE */}
        {currentView === 'topic' && (
          <TopicView
            topicSlug={selectedTopic}
            articles={INITIAL_ARTICLES}
            onNavigate={navigateTo}
            onReadArticle={(art) => navigateTo('article', art)}
            onSelectTopic={(slug) => navigateTo('topic', slug)}
          />
        )}

        {/* VIEW 5: TOPICS DIRECTORY */}
        {currentView === 'topics' && (
          <div className="min-h-screen bg-[#F5F3EF] pb-24">
            <section className="bg-[#111111] text-[#F5F3EF] py-14 border-b border-[#252525]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">Directory</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">All Thematic Topics</h1>
                <p className="text-sm text-[#8A8A8A] max-w-xl">Curated indices across powertrains, chassis architecture, historical periods, and subcultures.</p>
              </div>
            </section>
            <div className="pt-12">
              <TopicCloud onSelectTopic={(slug) => navigateTo('topic', slug)} />
            </div>
          </div>
        )}

        {/* VIEW 6: THE SPECIALS */}
        {currentView === 'specials' && (
          <SpecialsView
            initialTab={specialsTab}
            onNavigate={navigateTo}
          />
        )}

        {/* VIEW 7: COMMUNITY HUB */}
        {currentView === 'community' && (
          <CommunityView onNavigate={navigateTo} />
        )}

        {/* VIEW 8: EVENTS CALENDAR */}
        {currentView === 'events' && (
          <EventsView onNavigate={navigateTo} />
        )}

        {/* VIEW 9: FEATURED JOURNEYS */}
        {currentView === 'journeys' && (
          <JourneysView onNavigate={navigateTo} />
        )}

        {/* VIEW 10: DRIVE REVIEWS & PARTS GUIDES */}
        {currentView === 'reviews' && (
          <ReviewsView onNavigate={navigateTo} />
        )}

        {/* VIEW 11: BECOME A CONTRIBUTOR */}
        {currentView === 'contributor' && (
          <ContributorView onNavigate={navigateTo} />
        )}

        {/* VIEW 12: BOOKMARKS */}
        {currentView === 'bookmarks' && (
          <BookmarksView
            savedArticles={savedArticles}
            onReadArticle={(art) => navigateTo('article', art)}
            onRemoveBookmark={handleToggleBookmark}
            onNavigate={navigateTo}
          />
        )}

        {/* VIEW 13: ABOUT PAGE */}
        {currentView === 'about' && (
          <AboutView onNavigate={navigateTo} />
        )}

        {/* VIEW 14: LEGAL / PRIVACY */}
        {currentView === 'legal' && (
          <div className="min-h-screen bg-[#F5F3EF] pb-24">
            <section className="bg-[#111111] text-[#F5F3EF] py-14 border-b border-[#252525]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">Compliance & Ethics</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">Editorial Policies & Privacy</h1>
              </div>
            </section>
            <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 space-y-8 text-sm text-[#252525] leading-relaxed">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#111111]">Privacy & Reader Data</h2>
                <p>Motor Chronicles respects reader autonomy. We do not sell reading logs or personal demographic dossiers to third-party data brokers. Email subscriptions are utilized solely for delivering The Weekly Edition.</p>
              </section>
              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#111111]">Fact-Checking & Retraction Policy</h2>
                <p>Technical data (displacement, compression ratio, lap times, patent filings) is verified against manufacturer engineering archives or regulatory bodies. If an error is detected, an updated correction notice is affixed directly to the article header.</p>
              </section>
            </main>
          </div>
        )}
      </main>

      {/* Editorial Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenNewsletter={() => setNewsletterOpen(true)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        articles={INITIAL_ARTICLES}
        onReadArticle={(art) => navigateTo('article', art)}
        onSelectTopic={(slug) => navigateTo('topic', slug)}
        onNavigate={navigateTo}
      />

      {/* Newsletter Subscription Modal */}
      <NewsletterModal
        isOpen={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />

    </div>
  );
}
