import React from 'react';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';
import { Article } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface LeadHeroProps {
  article: Article;
  onReadArticle: (article: Article) => void;
}

export const LeadHero: React.FC<LeadHeroProps> = ({ article, onReadArticle }) => {
  return (
    <section className="relative bg-[#F4F1EA] text-[#1C1917] overflow-hidden border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Section Lead Kicker */}
        <div className="flex items-center justify-between border-b border-[#E7E5E0] pb-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C1917]">
              Lead Story
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-[#78716C]">
            <span className="font-mono text-[#B32025] font-semibold bg-white px-2 py-0.5 border border-[#E7E5E0]">
              /article/{article.slug}
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Volume I · Digital Edition</span>
          </div>
        </div>

        {/* Hero Grid: Typography & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Unboxed Metadata (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#78716C]">
              <span className="text-[#B32025] font-semibold uppercase tracking-wider">
                {article.categoryLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 inline text-[#78716C]" />
                {article.publishedAt}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 inline text-[#78716C]" />
                {article.readTime}
              </span>
            </div>

            {/* Headline */}
            <h1 
              onClick={() => onReadArticle(article)}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.15] cursor-pointer hover:text-[#B32025] transition-colors"
              style={{ textWrap: 'balance' }}
            >
              {article.title}
            </h1>

            {/* Deck / Introduction excerpt */}
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl font-normal">
              {article.subtitle}
            </p>

            {/* Author Credit & Action */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E7E5E0]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#EAE6DD] border border-[#DDD8CE] flex items-center justify-center text-xs font-serif font-bold text-[#1C1917]">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1C1917] flex items-center gap-1">
                    <User className="w-3 h-3 text-[#B32025]" />
                    {article.author.name}
                  </div>
                  <div className="text-[11px] text-[#78716C]">
                    {article.author.role}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onReadArticle(article)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer group shadow-xs"
              >
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Cinematic Real Photography */}
          <div className="lg:col-span-6">
            <figure 
              onClick={() => onReadArticle(article)}
              className="relative group cursor-pointer overflow-hidden border border-[#E7E5E0] bg-white shadow-sm"
            >
              <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden">
                <ImageWithFallback
                  src={article.heroImage}
                  alt={article.heroImageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <figcaption className="p-3 text-[11px] text-[#57534E] bg-white border-t border-[#E7E5E0] italic font-serif flex items-center justify-between">
                <span>{article.heroImageCaption}</span>
                <span className="text-[#B32025] not-italic font-sans font-semibold text-[10px] uppercase tracking-wider ml-2 shrink-0">
                  Full Dossier →
                </span>
              </figcaption>
            </figure>
          </div>

        </div>
      </div>
    </section>
  );
};
