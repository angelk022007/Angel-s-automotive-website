import React from 'react';
import { Flag, ArrowRight, Trophy, Zap, Clock } from 'lucide-react';
import { Article } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface MotorsportSectionProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
  onNavigateMotorsport: () => void;
}

export const MotorsportSection: React.FC<MotorsportSectionProps> = ({
  articles,
  onReadArticle,
  onNavigateMotorsport,
}) => {
  // Find motorsport articles (including Indian motorsport and global)
  const motorsportArticles = articles.filter(a => a.category === 'motorsport' || a.tags.includes('Motorsport'));
  const leadMotorsport = motorsportArticles[0] || articles[0];
  
  const pillars = [
    {
      title: 'Indian Racing League & Night Street Circuits',
      discipline: 'Indian Street Championship',
      description: 'Wolf Racing prototypes roaring under Chennai and Goa street floodlights at 240 km/h.',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Formula 1 & Buddh International Circuit',
      discipline: 'Grand Prix Heritage',
      description: 'The Herman Tilke-designed Greater Noida circuit, sweeping parabola curves, and F1 technical telemetry.',
      image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '24 Hours of Le Mans & WEC Hypercars',
      discipline: 'Global Endurance Grid',
      description: 'Ferrari, Porsche, and Cadillac clashing across 24 hours of non-stop 330 km/h combat.',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <section className="py-20 bg-[#F4F1EA] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-[#E7E5E0] gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4 text-[#B32025]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Circuit & Proving Grounds · India & Global
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
              Motorsport & The Technology Race
            </h2>
          </div>
          <button
            onClick={onNavigateMotorsport}
            className="text-xs font-semibold uppercase tracking-wider text-[#B32025] hover:text-[#8F161A] flex items-center gap-1.5 cursor-pointer"
          >
            <span>All Motorsport Coverage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Asymmetrical Layout: Lead Feature (7 Cols) + Pillars (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Motorsport Story Feature */}
          {leadMotorsport && (
            <div 
              onClick={() => onReadArticle(leadMotorsport)}
              className="lg:col-span-7 bg-white border border-[#E7E5E0] p-6 shadow-xs group cursor-pointer space-y-4 hover:border-[#B32025]/50 transition-all"
            >
              <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                <ImageWithFallback
                  src={leadMotorsport.heroImage}
                  alt={leadMotorsport.heroImageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <div className="flex items-center gap-2">
                  <span className="text-[#B32025] font-bold uppercase tracking-wider text-[11px]">
                    Motorsport Feature
                  </span>
                  <span>·</span>
                  <span className="font-mono">{leadMotorsport.readTime}</span>
                </div>
                <span className="text-[10px] font-mono text-[#78716C] bg-[#F5F3ED] px-2 py-0.5 border border-[#E7E5E0]">
                  /article/{leadMotorsport.slug}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug">
                {leadMotorsport.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {leadMotorsport.subtitle}
              </p>

              <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs">
                <span className="text-[#78716C]">By {leadMotorsport.author.name}</span>
                <span className="text-[#B32025] font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Investigation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          )}

          {/* Motorsport Disciplines Column */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                onClick={onNavigateMotorsport}
                className="bg-white border border-[#E7E5E0] p-4 shadow-xs hover:border-[#B32025]/50 transition-all cursor-pointer group flex gap-4 items-center"
              >
                <div className="w-28 h-20 bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0] shrink-0">
                  <ImageWithFallback
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#B32025] font-bold uppercase tracking-wider">
                    <Trophy className="w-3 h-3 text-[#B32025]" />
                    <span>{pillar.discipline}</span>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-[#57534E] line-clamp-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
