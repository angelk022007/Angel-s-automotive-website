import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface FeaturedGridProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

export const FeaturedGrid: React.FC<FeaturedGridProps> = ({ articles, onReadArticle }) => {
  if (articles.length === 0) return null;

  const [primaryArticle, ...secondaryArticles] = articles;
  const sideArticles = secondaryArticles.slice(0, 3);
  const horizontalFeature = secondaryArticles[3];
  const galleryArticles = secondaryArticles.slice(4, 6);

  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#E7E5E0] gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Curated Dossiers
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
              Featured Stories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#57534E] max-w-sm leading-relaxed">
            Major investigative journalism, mechanical philosophy, and historic milestones selected by the editors.
          </p>
        </div>

        {/* Tier 1: Asymmetric Editorial Grid (7 / 5 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Primary Featured Story (7 Cols) */}
          {primaryArticle && (
            <article 
              onClick={() => onReadArticle(primaryArticle)}
              className="lg:col-span-7 group cursor-pointer space-y-4 bg-white p-6 border border-[#E7E5E0] shadow-xs hover:border-[#B32025]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                  <ImageWithFallback
                    src={primaryArticle.heroImage}
                    alt={primaryArticle.heroImageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/95 backdrop-blur-xs text-[10px] font-mono text-[#B32025] font-semibold border border-[#E7E5E0]">
                    /article/{primaryArticle.slug}
                  </span>
                </div>

                {/* Unboxed Metadata */}
                <div className="flex items-center justify-between text-xs text-[#78716C]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#B32025] font-bold uppercase tracking-wider text-[11px]">
                      {primaryArticle.categoryLabel}
                    </span>
                    <span>·</span>
                    <span>{primaryArticle.publishedAt}</span>
                  </div>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#78716C]" />
                    {primaryArticle.readTime}
                  </span>
                </div>

                <h3 
                  className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug"
                  style={{ textWrap: 'balance' }}
                >
                  {primaryArticle.title}
                </h3>

                <p className="text-sm text-[#57534E] leading-relaxed font-normal">
                  {primaryArticle.subtitle}
                </p>
              </div>

              <div className="pt-4 mt-2 flex items-center justify-between border-t border-[#E7E5E0]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] group-hover:text-[#B32025]">
                  <span>Read Feature</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[11px] text-[#78716C]">
                  By {primaryArticle.author.name}
                </span>
              </div>
            </article>
          )}

          {/* Secondary Stack (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onReadArticle(article)}
                className="group cursor-pointer p-4 bg-white border border-[#E7E5E0] shadow-xs space-y-2 hover:border-[#B32025]/50 transition-all"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-4 aspect-[4/3] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0] shrink-0">
                    <ImageWithFallback
                      src={article.heroImage}
                      alt={article.heroImageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="col-span-8 space-y-1.5">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-[11px] text-[#78716C]">
                      <span className="text-[#B32025] font-semibold uppercase tracking-wider">
                        {article.categoryLabel}
                      </span>
                      <span>·</span>
                      <span className="font-mono">{article.readTime}</span>
                    </div>

                    <h4 
                      className="font-serif text-base font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug line-clamp-2"
                      style={{ textWrap: 'balance' }}
                    >
                      {article.title}
                    </h4>

                    <div className="text-[10px] font-mono text-[#78716C] truncate">
                      /article/{article.slug}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Tier 2: Wide Side-by-Side Editorial Feature + Complementary Cards */}
        {horizontalFeature && (
          <div className="pt-6 border-t border-[#E7E5E0]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Wide Horizontal Split Card (8 cols) */}
              <div 
                onClick={() => onReadArticle(horizontalFeature)}
                className="lg:col-span-8 bg-white border border-[#E7E5E0] p-6 shadow-xs group cursor-pointer hover:border-[#B32025]/50 transition-all grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
              >
                <div className="sm:col-span-5 aspect-[16/11] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                  <ImageWithFallback
                    src={horizontalFeature.heroImage}
                    alt={horizontalFeature.heroImageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#78716C]">
                    <span className="text-[#B32025] font-bold uppercase tracking-wider text-[11px]">
                      {horizontalFeature.categoryLabel}
                    </span>
                    <span>·</span>
                    <span className="font-mono">{horizontalFeature.readTime}</span>
                  </div>

                  <div className="text-[10px] font-mono text-[#78716C] truncate">
                    /article/{horizontalFeature.slug}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug">
                    {horizontalFeature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3">
                    {horizontalFeature.subtitle}
                  </p>

                  <div className="pt-2 text-xs font-semibold uppercase tracking-wider text-[#B32025] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Complementary Tall Card (4 cols) */}
              {galleryArticles[0] && (
                <div 
                  onClick={() => onReadArticle(galleryArticles[0])}
                  className="lg:col-span-4 bg-white border border-[#E7E5E0] p-6 shadow-xs group cursor-pointer hover:border-[#B32025]/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                      <ImageWithFallback
                        src={galleryArticles[0].heroImage}
                        alt={galleryArticles[0].heroImageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#78716C]">
                      <span className="text-[#B32025] font-bold uppercase tracking-wider text-[11px]">
                        {galleryArticles[0].categoryLabel}
                      </span>
                      <span className="font-mono">{galleryArticles[0].readTime}</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug">
                      {galleryArticles[0].title}
                    </h4>
                    <p className="text-xs text-[#57534E] line-clamp-2">
                      {galleryArticles[0].subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C]">
                    <span>By {galleryArticles[0].author.name}</span>
                    <span className="text-[#B32025] font-semibold uppercase tracking-wider flex items-center gap-1">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
