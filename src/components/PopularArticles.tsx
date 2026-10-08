import React from 'react';
import { TrendingUp, Clock, User, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface PopularArticlesProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

export const PopularArticles: React.FC<PopularArticlesProps> = ({
  articles,
  onReadArticle,
}) => {
  // Sort by popularRank or use top read articles
  const popularList = [...articles]
    .sort((a, b) => (a.popularRank || 99) - (b.popularRank || 99))
    .slice(0, 5);

  const [topStory, ...subStories] = popularList;

  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-[#E7E5E0] gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#B32025]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Audience Dossiers
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
              Most Read Articles
            </h2>
          </div>
          <span className="text-xs text-[#78716C] font-mono uppercase tracking-wider">
            Ranked by Reading Engagement & Dossier Shares
          </span>
        </div>

        {/* Asymmetrical Layout: Dominant 01 Card (5 cols) + Ranked Rows (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Top Story Feature (01) */}
          {topStory && (
            <div 
              onClick={() => onReadArticle(topStory)}
              className="lg:col-span-5 bg-white border border-[#E7E5E0] p-6 shadow-xs group cursor-pointer space-y-4 hover:border-[#B32025]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                  <ImageWithFallback
                    src={topStory.heroImage}
                    alt={topStory.heroImageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-[#B32025] text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                    01
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#78716C]">
                  <span className="text-[#B32025] font-bold uppercase tracking-wider text-[11px]">
                    {topStory.categoryLabel}
                  </span>
                  <span className="font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {topStory.readTime}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-[#78716C] bg-[#F5F3ED] px-2 py-0.5 border border-[#E7E5E0] truncate">
                  /article/{topStory.slug}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug">
                  {topStory.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3">
                  {topStory.subtitle}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C]">
                <span>By {topStory.author.name}</span>
                <span className="text-[#B32025] font-semibold uppercase tracking-wider group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          )}

          {/* Ranked 02 - 05 Rows */}
          <div className="lg:col-span-7 space-y-4">
            {subStories.map((story, idx) => (
              <div
                key={story.id}
                onClick={() => onReadArticle(story)}
                className="bg-white border border-[#E7E5E0] p-4 sm:p-5 shadow-xs group cursor-pointer hover:border-[#B32025]/50 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              >
                {/* Ranking Number */}
                <div className="font-mono font-bold text-2xl sm:text-3xl text-[#B32025] w-10 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  0{idx + 2}
                </div>

                {/* Small Thumbnail */}
                <div className="w-24 h-16 sm:w-28 sm:h-20 bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0] shrink-0">
                  <ImageWithFallback
                    src={story.heroImage}
                    alt={story.heroImageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 text-[11px] text-[#78716C]">
                    <span className="text-[#B32025] font-bold uppercase tracking-wider">
                      {story.categoryLabel}
                    </span>
                    <span>·</span>
                    <span className="font-mono">{story.readTime}</span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug line-clamp-2">
                    {story.title}
                  </h4>
                  <div className="text-[10px] font-mono text-[#78716C] truncate">
                    /article/{story.slug}
                  </div>
                </div>

                <div className="hidden sm:block shrink-0">
                  <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:text-[#B32025] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
