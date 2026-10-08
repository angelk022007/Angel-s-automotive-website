import React from 'react';
import { ArrowRight, Navigation, Compass } from 'lucide-react';
import { JOURNEYS } from '../data/journeys';

interface JourneysTeaserProps {
  onNavigateJourneys: () => void;
}

export const JourneysTeaser: React.FC<JourneysTeaserProps> = ({ onNavigateJourneys }) => {
  return (
    <section className="py-16 bg-[#F5F3ED]/50 border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-[#E7E5E0] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Drives & Experiences
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
              Featured Journeys
            </h2>
          </div>
          <button
            onClick={onNavigateJourneys}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#B32025] transition-colors cursor-pointer group"
          >
            <span>All Driving Routes & Guides</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Journey Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNEYS.map((j) => (
            <article
              key={j.id}
              onClick={onNavigateJourneys}
              className="bg-white border border-[#E7E5E0] p-5 cursor-pointer group hover:border-[#B32025]/50 transition-colors flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                  <img
                    src={j.image}
                    alt={j.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#78716C] border-b border-[#E7E5E0] pb-2">
                  <span className="flex items-center gap-1 font-medium text-[#44403C]">
                    <Compass className="w-3 h-3 text-[#B32025]" />
                    {j.destination}
                  </span>
                  <span className="font-mono text-[#78716C]">{j.distance}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug">
                  {j.title}
                </h3>

                <p className="text-xs text-[#57534E] line-clamp-3 leading-relaxed">
                  {j.subtitle}
                </p>

                <div className="pt-2 text-xs text-[#78716C]">
                  <span className="font-semibold text-[#1C1917]">Recommended Vehicle: </span>
                  <span>{j.vehicle}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C] group-hover:text-[#1C1917]">
                <span className="flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-[#B32025]" />
                  <span>Route Dossier</span>
                </span>
                <span className="font-semibold text-[#B32025] uppercase text-[10px] tracking-wider">
                  View Route Map →
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
