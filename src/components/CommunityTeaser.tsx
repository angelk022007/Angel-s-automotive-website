import React from 'react';
import { Users, ArrowRight, MapPin } from 'lucide-react';
import { COMMUNITIES } from '../data/communities';

interface CommunityTeaserProps {
  onNavigateCommunity: () => void;
}

export const CommunityTeaser: React.FC<CommunityTeaserProps> = ({ onNavigateCommunity }) => {
  const spotlight = COMMUNITIES[0];
  const sideCommunities = COMMUNITIES.slice(1, 4);

  return (
    <section className="py-16 bg-[#FAF9F6] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-[#E7E5E0] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Human Connection
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
              Motor Chronicles Community
            </h2>
          </div>
          <button
            onClick={onNavigateCommunity}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#B32025] transition-colors cursor-pointer group"
          >
            <span>Browse All Enthusiast Guilds</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Layout: Spotlight + Side Registry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Spotlight Guild */}
          <div 
            onClick={onNavigateCommunity}
            className="lg:col-span-7 bg-white border border-[#E7E5E0] p-6 sm:p-8 cursor-pointer group hover:border-[#B32025]/50 transition-colors space-y-4 shadow-xs"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E7E5E0] text-xs text-[#78716C]">
              <span className="text-[#B32025] font-semibold uppercase tracking-wider">
                Community Spotlight
              </span>
              <span>Est. {spotlight.established}</span>
            </div>

            <div className="aspect-[16/9] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
              <img
                src={spotlight.image}
                alt={spotlight.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors">
              {spotlight.name}
            </h3>

            <p className="text-sm text-[#57534E] leading-relaxed font-normal">
              {spotlight.description}
            </p>

            <div className="pt-4 border-t border-[#E7E5E0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#78716C]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 font-mono tabular-nums text-[#1C1917] font-semibold">
                  <Users className="w-3.5 h-3.5 text-[#B32025]" />
                  {spotlight.membersCount.toLocaleString()} Members
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#78716C]" />
                  {spotlight.location}
                </span>
              </div>
              <span className="text-xs font-semibold uppercase text-[#1C1917] group-hover:text-[#B32025]">
                View Guild Details →
              </span>
            </div>
          </div>

          {/* Side Registry List */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#78716C] border-b border-[#E7E5E0] pb-2">
              Featured Regional & Marque Chapters
            </h4>
            <div className="space-y-3">
              {sideCommunities.map((c) => (
                <div
                  key={c.id}
                  onClick={onNavigateCommunity}
                  className="bg-white border border-[#E7E5E0] p-4 cursor-pointer hover:border-[#B32025]/50 transition-colors group space-y-2 shadow-xs"
                >
                  <div className="flex items-center justify-between text-[11px] text-[#78716C]">
                    <span className="text-[#B32025] font-semibold uppercase tracking-wider">{c.categoryLabel}</span>
                    <span className="font-mono tabular-nums">{c.membersCount.toLocaleString()} members</span>
                  </div>
                  <h5 className="font-serif text-base font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug">
                    {c.name}
                  </h5>
                  <p className="text-xs text-[#78716C] line-clamp-2">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onNavigateCommunity}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#B32025] hover:bg-[#8F161A] transition-colors cursor-pointer shadow-xs"
              >
                Find Your Automotive Community
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
