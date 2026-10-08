import React from 'react';
import { Tag, ChevronRight, Clock, User, ArrowLeft } from 'lucide-react';
import { Article } from '../types';
import { POPULAR_TOPICS } from '../data/categories';

interface TopicViewProps {
  topicSlug: string;
  articles: Article[];
  onNavigate: (view: string, payload?: any) => void;
  onReadArticle: (article: Article) => void;
  onSelectTopic: (slug: string) => void;
}

export const TopicView: React.FC<TopicViewProps> = ({
  topicSlug,
  articles,
  onNavigate,
  onReadArticle,
  onSelectTopic
}) => {
  const currentTopic = POPULAR_TOPICS.find(t => t.slug.toLowerCase() === topicSlug.toLowerCase()) || {
    slug: topicSlug,
    name: topicSlug.toUpperCase(),
    count: 0
  };

  // Find articles matching topic by tag or title/subtitle/category
  const matchingArticles = articles.filter(a => 
    a.tags.some(t => t.toLowerCase() === topicSlug.toLowerCase()) ||
    a.title.toLowerCase().includes(topicSlug.toLowerCase()) ||
    a.subtitle.toLowerCase().includes(topicSlug.toLowerCase()) ||
    a.category.toLowerCase() === topicSlug.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24 text-[#1C1917]">
      
      {/* Header */}
      <section className="bg-[#F4F1EA] text-[#1C1917] pt-12 pb-14 border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#78716C]">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#1C1917] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <ChevronRight className="w-3 h-3 text-[#78716C]" />
              <li>
                <button 
                  onClick={() => onNavigate('topics')} 
                  className="hover:text-[#1C1917] transition-colors cursor-pointer"
                >
                  Topic Index
                </button>
              </li>
              <ChevronRight className="w-3 h-3 text-[#78716C]" />
              <li className="text-[#B32025] font-semibold">
                #{currentTopic.name}
              </li>
            </ol>
          </nav>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#B32025]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Thematic Directory
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
              Topic: #{currentTopic.name}
            </h1>
            <p className="text-sm text-[#57534E] max-w-xl leading-relaxed">
              Every critical analysis, mechanical retrospective, and editorial dispatch exploring the subject of {currentTopic.name}.
            </p>
          </div>

        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E0]">
          <span className="font-serif text-xl font-bold text-[#1C1917]">
            Curated Dossiers ({matchingArticles.length})
          </span>
          <button
            onClick={() => onNavigate('topics')}
            className="text-xs font-semibold uppercase tracking-wider text-[#B32025] hover:underline cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Topics</span>
          </button>
        </div>

        {matchingArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matchingArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onReadArticle(article)}
                className="group cursor-pointer bg-white border border-[#E7E5E0] p-5 space-y-3 hover:border-[#B32025]/50 transition-all flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                    <img
                      src={article.heroImage}
                      alt={article.heroImageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#78716C]">
                    <span className="text-[#B32025] font-semibold uppercase tracking-wider">{article.categoryLabel}</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Explicit Article URL Tag */}
                  <div className="text-[10px] font-mono text-[#78716C] bg-[#F5F3ED] px-2 py-0.5 border border-[#E7E5E0] truncate">
                    /article/{article.slug}
                  </div>

                  <h3 
                    className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug line-clamp-2"
                    style={{ textWrap: 'balance' }}
                  >
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#57534E] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C]">
                  <span className="flex items-center gap-1 font-medium text-[#1C1917]">
                    <User className="w-3 h-3 text-[#B32025]" />
                    {article.author.name}
                  </span>
                  <span className="text-[#B32025] font-semibold uppercase text-[10px] tracking-wider">
                    Read Story →
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#E7E5E0] p-12 text-center space-y-4 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              No articles indexed for #{currentTopic.name} yet
            </h3>
            <p className="text-xs text-[#78716C] max-w-md mx-auto">
              Our writers are actively cataloging material on this subject. In the meantime, discover related topics below.
            </p>
          </div>
        )}

        {/* Other Related Topics Cloud */}
        <div className="pt-10 border-t border-[#E7E5E0] space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#78716C]">
            Discover Other Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TOPICS.map((t) => (
              <button
                key={t.slug}
                onClick={() => onSelectTopic(t.slug)}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer border ${
                  t.slug === topicSlug
                    ? 'bg-[#1C1917] text-white border-[#1C1917]'
                    : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
                }`}
              >
                #{t.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
