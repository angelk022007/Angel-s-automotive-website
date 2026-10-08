import React from 'react';
import { ArrowRight, Award, History, Shield, AlertTriangle, RefreshCw } from 'lucide-react';
import { HALL_OF_FAME_ENTRIES, THEN_VS_NOW_ENTRIES, BEHIND_THE_BADGE_ENTRIES } from '../data/specials';

interface SpecialsTeaserProps {
  onNavigateSpecials: (tab?: string) => void;
}

export const SpecialsTeaser: React.FC<SpecialsTeaserProps> = ({ onNavigateSpecials }) => {
  const hof = HALL_OF_FAME_ENTRIES[0];
  const tvn = THEN_VS_NOW_ENTRIES[0];
  const btb = BEHIND_THE_BADGE_ENTRIES[0];

  return (
    <section className="py-16 bg-[#F4F1EA] text-[#1C1917] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-[#E7E5E0] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Special Archives
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
              The Motor Chronicles Specials
            </h2>
          </div>
          <button
            onClick={() => onNavigateSpecials()}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#B32025] transition-colors cursor-pointer group"
          >
            <span>Explore All Special Series</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Hall of Fame */}
          <div 
            onClick={() => onNavigateSpecials('hall-of-fame')}
            className="group cursor-pointer bg-white border border-[#E7E5E0] hover:border-[#B32025]/50 transition-colors p-6 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[#78716C] border-b border-[#E7E5E0] pb-3">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                  <Award className="w-4 h-4 text-[#B32025]" />
                  Hall of Fame
                </span>
                <span className="text-[11px] font-mono text-[#78716C]">{hof.yearOrEra}</span>
              </div>

              <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                <img
                  src={hof.image}
                  alt={hof.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors">
                {hof.title}
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed line-clamp-3">
                {hof.details}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C] group-hover:text-[#B32025]">
              <span className="font-semibold uppercase tracking-wider text-[11px]">View Inductees</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Then vs Now */}
          <div 
            onClick={() => onNavigateSpecials('then-vs-now')}
            className="group cursor-pointer bg-white border border-[#E7E5E0] hover:border-[#B32025]/50 transition-colors p-6 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[#78716C] border-b border-[#E7E5E0] pb-3">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                  <History className="w-4 h-4 text-[#B32025]" />
                  Then vs Now
                </span>
                <span className="text-[11px] font-mono text-[#78716C]">Evolution</span>
              </div>

              <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                <img
                  src={tvn.image}
                  alt={tvn.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors">
                {tvn.title}
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed line-clamp-3">
                {tvn.subtitle}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C] group-hover:text-[#B32025]">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Compare Eras</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Behind the Badge */}
          <div 
            onClick={() => onNavigateSpecials('behind-the-badge')}
            className="group cursor-pointer bg-white border border-[#E7E5E0] hover:border-[#B32025]/50 transition-colors p-6 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[#78716C] border-b border-[#E7E5E0] pb-3">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                  <Shield className="w-4 h-4 text-[#B32025]" />
                  Behind the Badge
                </span>
                <span className="text-[11px] font-mono text-[#78716C]">{btb.yearOrEra}</span>
              </div>

              <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                <img
                  src={btb.image}
                  alt={btb.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors">
                {btb.title}
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed line-clamp-3">
                {btb.subtitle}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C] group-hover:text-[#B32025]">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Uncover Marque Lore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* Bottom Quick Bar for Failures & Comebacks */}
        <div className="mt-8 pt-6 border-t border-[#E7E5E0] grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            onClick={() => onNavigateSpecials('failures')}
            className="flex items-center justify-between p-4 bg-white hover:bg-[#FAF9F6] border border-[#E7E5E0] cursor-pointer transition-colors shadow-xs"
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-[#B32025]" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">Automotive Failures</h4>
                <p className="text-[11px] text-[#78716C]">Engineering missteps, rotary dilemmas, and lessons that altered design</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#78716C]" />
          </div>

          <div 
            onClick={() => onNavigateSpecials('comebacks')}
            className="flex items-center justify-between p-4 bg-white hover:bg-[#FAF9F6] border border-[#E7E5E0] cursor-pointer transition-colors shadow-xs"
          >
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-[#B32025]" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">Comeback Stories</h4>
                <p className="text-[11px] text-[#78716C]">Brands and models that clawed their way back from the edge of extinction</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#78716C]" />
          </div>
        </div>

      </div>
    </section>
  );
};
