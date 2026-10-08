import React, { useState } from 'react';
import { Clock, User } from 'lucide-react';
import { Article, CategoryId } from '../types';

interface LatestFeedProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
  onSelectCategory?: (category: CategoryId) => void;
}

const FILTER_OPTIONS: { id: string; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'cars', label: 'Cars' },
  { id: 'bikes', label: 'Bikes' },
  { id: 'history', label: 'History' },
  { id: 'technology', label: 'Technology' },
  { id: 'motorsport', label: 'Motorsport' },
  { id: 'people', label: 'People' },
  { id: 'future', label: 'Future' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'stories', label: 'Stories' }
];

export const LatestFeed: React.FC<LatestFeedProps> = ({ articles, onReadArticle }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredArticles = activeFilter === 'all'
    ? articles
    : articles.filter(a => a.category === activeFilter);

  return (
    <section className="py-16 bg-[#FAF9F6] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-[#E7E5E0] gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
                Latest from Motor Chronicles
              </h2>
            </div>
            <p className="text-xs text-[#78716C] uppercase tracking-wider">
              Chronicles, Dispatches, and Critical Analyses
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F3ED] border border-[#E7E5E0]">
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === opt.id
                    ? 'bg-[#B32025] text-white shadow-xs'
                    : 'text-[#44403C] hover:text-[#B32025] hover:bg-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Article Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="group cursor-pointer flex flex-col justify-between bg-white border border-[#E7E5E0] hover:border-[#B32025]/50 transition-colors p-4 shadow-xs"
            >
              <div className="space-y-3">
                <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0] relative">
                  <img
                    src={article.heroImage}
                    alt={article.heroImageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 bg-white/95 backdrop-blur-xs text-[10px] font-mono text-[#78716C] font-semibold border border-[#E7E5E0] truncate max-w-[90%]">
                    /article/{article.slug}
                  </span>
                </div>

                {/* Unboxed Metadata (Zero-Pill Rule) */}
                <div className="flex items-center gap-2 text-[11px] text-[#78716C]">
                  <span className="text-[#B32025] font-semibold uppercase tracking-wider">
                    {article.categoryLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{article.publishedAt}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#78716C]" />
                    {article.readTime}
                  </span>
                </div>

                <h3 
                  className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug line-clamp-2"
                  style={{ textWrap: 'balance' }}
                >
                  {article.title}
                </h3>

                <p className="text-xs text-[#57534E] line-clamp-3 leading-relaxed font-normal">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C]">
                <span className="flex items-center gap-1.5 font-medium text-[#44403C]">
                  <User className="w-3 h-3 text-[#B32025]" />
                  {article.author.name}
                </span>
                <span className="text-[#1C1917] font-semibold uppercase text-[10px] tracking-wider group-hover:text-[#B32025] transition-colors">
                  Read Article →
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-[#F5F3ED]/40 border border-[#E7E5E0]">
            <p className="font-serif text-lg text-[#1C1917]">No articles in this category yet.</p>
            <p className="text-xs text-[#78716C] mt-1">Explore all categories or check back with our weekly dispatches.</p>
          </div>
        )}

      </div>
    </section>
  );
};
