import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { CategoryId } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ExploreCategoriesProps {
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const ExploreCategories: React.FC<ExploreCategoriesProps> = ({ onSelectCategory }) => {
  const categoryKeys: CategoryId[] = [
    'cars',
    'bikes',
    'brands',
    'motorsport',
    'history',
    'technology',
    'future',
    'sustainability'
  ];

  const primaryCategory = CATEGORIES.cars;
  const secondaryCategory = CATEGORIES.bikes;
  const remainingCategories = categoryKeys.slice(2).map(key => CATEGORIES[key]);

  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-[#E7E5E0] gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#B32025]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Editorial Desks
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
              Explore Automotive Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#57534E] max-w-md leading-relaxed">
            Curated coverage across engineering disciplines, vehicle genres, motorsport leagues, and historic archives.
          </p>
        </div>

        {/* Asymmetrical Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Featured Large Category Card 1 (Cars - 6 cols) */}
          <div 
            onClick={() => onSelectCategory(primaryCategory.id)}
            className="lg:col-span-6 group cursor-pointer bg-white border border-[#E7E5E0] p-6 shadow-xs hover:border-[#B32025]/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                <ImageWithFallback
                  src={primaryCategory.coverImage}
                  alt={primaryCategory.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <span className="text-[#B32025] font-bold uppercase tracking-widest text-[11px]">
                  Category 01
                </span>
                <span className="font-mono">{primaryCategory.subcategories.length} Sub-genres</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors">
                {primaryCategory.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {primaryCategory.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E5E0] flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5 max-w-sm">
                {primaryCategory.subcategories.slice(0, 4).map((sub, idx) => (
                  <span key={idx} className="text-[11px] text-[#78716C]">
                    {sub}{idx < 3 ? ' ·' : ''}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B32025] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Featured Large Category Card 2 (Bikes - 6 cols) */}
          <div 
            onClick={() => onSelectCategory(secondaryCategory.id)}
            className="lg:col-span-6 group cursor-pointer bg-white border border-[#E7E5E0] p-6 shadow-xs hover:border-[#B32025]/50 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                <ImageWithFallback
                  src={secondaryCategory.coverImage}
                  alt={secondaryCategory.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <span className="text-[#B32025] font-bold uppercase tracking-widest text-[11px]">
                  Category 02
                </span>
                <span className="font-mono">{secondaryCategory.subcategories.length} Disciplines</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors">
                {secondaryCategory.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {secondaryCategory.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E5E0] flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5 max-w-sm">
                {secondaryCategory.subcategories.slice(0, 4).map((sub, idx) => (
                  <span key={idx} className="text-[11px] text-[#78716C]">
                    {sub}{idx < 3 ? ' ·' : ''}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B32025] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

        </div>

        {/* 6 Supporting Categories in 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingCategories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer bg-white border border-[#E7E5E0] p-5 shadow-xs hover:border-[#B32025]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="aspect-[16/9] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                  <ImageWithFallback
                    src={cat.coverImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#78716C]">
                  <span className="text-[#B32025] font-bold uppercase tracking-widest">
                    Category 0{idx + 3}
                  </span>
                  <span className="font-mono truncate">{cat.tagline.split(',')[0]}</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors">
                  {cat.name}
                </h4>
                <p className="text-xs text-[#57534E] leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C]">
                <span className="truncate max-w-[160px] text-[11px]">
                  {cat.subcategories.slice(0, 2).join(' · ')}
                </span>
                <span className="text-[#B32025] font-semibold text-[11px] uppercase tracking-wider group-hover:translate-x-0.5 transition-transform flex items-center gap-1 shrink-0">
                  <span>View</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
