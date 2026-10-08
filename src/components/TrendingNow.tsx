import React from 'react';
import { Article } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface TrendingNowProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

export const TrendingNow: React.FC<TrendingNowProps> = ({ articles, onReadArticle }) => {
  // Sort or take top 5
  const trendingArticles = [...articles]
    .sort((a, b) => (a.trendingRank || 99) - (b.trendingRank || 99))
    .slice(0, 5);

  return (
    <section className="py-12 bg-[#F5F3ED]/50 border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#E7E5E0]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917]">
              Trending Now
            </h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#78716C] font-medium">
            Most Discussed This Week
          </span>
        </div>

        {/* 5-Column Horizontal Editorial Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trendingArticles.map((article, index) => {
            const rankStr = String(index + 1).padStart(2, '0');
            return (
              <article
                key={article.id}
                onClick={() => onReadArticle(article)}
                className="group cursor-pointer flex flex-col justify-between space-y-3 p-3.5 bg-white border border-[#E7E5E0] shadow-xs hover:border-[#B32025]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E7E5E0]">
                    <span className="font-mono tabular-nums text-lg font-bold text-[#B32025]">
                      {rankStr}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold truncate max-w-[100px]">
                      {article.categoryLabel}
                    </span>
                  </div>

                  <div className="aspect-[16/9] bg-[#EAE6DD] overflow-hidden mb-3 border border-[#E7E5E0]">
                    <ImageWithFallback
                      src={article.heroImage}
                      alt={article.heroImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 
                    className="font-serif text-sm font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug line-clamp-3"
                    style={{ textWrap: 'balance' }}
                  >
                    {article.title}
                  </h3>
                </div>

                <div className="pt-2 text-[10px] font-mono text-[#78716C] border-t border-[#E7E5E0] flex items-center justify-between">
                  <span>{article.readTime}</span>
                  <span className="truncate max-w-[80px]">/{article.slug}</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
