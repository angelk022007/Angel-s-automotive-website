import React, { useState } from 'react';
import { ChevronRight, Clock, User, ArrowRight } from 'lucide-react';
import { Article, CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';

interface CategoryViewProps {
  categoryId: CategoryId;
  articles: Article[];
  onNavigate: (view: string, payload?: any) => void;
  onReadArticle: (article: Article) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  categoryId,
  articles,
  onNavigate,
  onReadArticle
}) => {
  const meta = CATEGORIES[categoryId] || CATEGORIES.cars;
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');

  const categoryArticles = articles.filter(a => a.category === categoryId);
  const leadArticle = categoryArticles[0];
  const remainingArticles = categoryArticles.slice(1);

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24 text-[#1C1917]">
      
      {/* Category Hero / Masthead */}
      <section className="bg-[#F4F1EA] text-[#1C1917] pt-12 pb-16 border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumb */}
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
              <li className="text-[#B32025] font-semibold">
                {meta.name}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                {meta.tagline}
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917]">
              {meta.name}
            </h1>
            <p className="text-base text-[#57534E] leading-relaxed max-w-2xl font-normal">
              {meta.description}
            </p>
          </div>

          {/* Subcategories Filter Bar */}
          {meta.subcategories && meta.subcategories.length > 0 && (
            <div className="pt-6 border-t border-[#E7E5E0]">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                <button
                  onClick={() => setSelectedSubcategory('All')}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer shadow-xs ${
                    selectedSubcategory === 'All'
                      ? 'bg-[#B32025] text-white'
                      : 'bg-white text-[#57534E] hover:text-[#B32025] border border-[#E7E5E0]'
                  }`}
                >
                  All {meta.name}
                </button>
                {meta.subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer shadow-xs ${
                      selectedSubcategory === sub
                        ? 'bg-[#B32025] text-white'
                        : 'bg-white text-[#57534E] hover:text-[#B32025] border border-[#E7E5E0]'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Curated Lead Story in this Category */}
        {leadArticle && (
          <section className="bg-white border border-[#E7E5E0] p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0] relative">
                <img
                  src={leadArticle.heroImage}
                  alt={leadArticle.heroImageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-700 cursor-pointer"
                  onClick={() => onReadArticle(leadArticle)}
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-white/95 backdrop-blur-xs text-[10px] font-mono text-[#B32025] font-semibold border border-[#E7E5E0]">
                  /article/{leadArticle.slug}
                </span>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="text-[11px] uppercase tracking-wider text-[#B32025] font-bold">
                  Curated Category Lead
                </div>

                <h2 
                  onClick={() => onReadArticle(leadArticle)}
                  className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] hover:text-[#B32025] transition-colors cursor-pointer leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  {leadArticle.title}
                </h2>

                <p className="text-sm text-[#57534E] leading-relaxed font-normal">
                  {leadArticle.subtitle}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#78716C] pt-1">
                  <span>{leadArticle.author.name}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadArticle.readTime}</span>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onReadArticle(leadArticle)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Read Lead Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Articles Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E0]">
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Dispatches & Investigations in {meta.name}
            </h3>
            <span className="text-xs text-[#78716C] font-mono">
              {categoryArticles.length} Stories Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onReadArticle(article)}
                className="group cursor-pointer bg-white border border-[#E7E5E0] p-5 space-y-3 hover:border-[#B32025]/50 transition-colors flex flex-col justify-between shadow-xs"
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

                  <div className="flex items-center gap-2 text-[11px] text-[#78716C]">
                    <span className="text-[#B32025] font-semibold uppercase tracking-wider">{article.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 
                    className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug line-clamp-2"
                    style={{ textWrap: 'balance' }}
                  >
                    {article.title}
                  </h4>

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
                    Read Article →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {categoryArticles.length === 0 && (
            <div className="text-center py-20 bg-white border border-[#E7E5E0] p-8 space-y-3 shadow-xs">
              <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                Category Archive in Preparation
              </h4>
              <p className="text-xs text-[#78716C] max-w-md mx-auto">
                Our editorial team is currently researching long-form investigations for this section. Check back with our Thursday newsletter.
              </p>
              <button
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#B32025] transition-colors cursor-pointer shadow-xs"
              >
                Return to Front Page
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};
