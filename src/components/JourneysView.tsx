import React, { useState } from 'react';
import { Compass, Navigation, ChevronRight, Check } from 'lucide-react';
import { JOURNEYS } from '../data/journeys';
import { Journey } from '../types';

interface JourneysViewProps {
  onNavigate: (view: string, payload?: any) => void;
}

export const JourneysView: React.FC<JourneysViewProps> = ({ onNavigate }) => {
  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24 text-[#1C1917]">
      
      {/* Header */}
      <section className="bg-[#F4F1EA] text-[#1C1917] pt-12 pb-14 border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#78716C]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#1C1917] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <ChevronRight className="w-3 h-3 text-[#78716C]" />
              <li className="text-[#B32025] font-semibold">
                Drives & Experiences
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Drives & Experiences
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
              Featured Journeys
            </h1>
            <p className="text-sm text-[#57534E] leading-relaxed max-w-2xl font-normal">
              Connecting automotive culture with geography, architecture, and the open road. Rigorously scouted driving routes complete with vehicle recommendations, terrain analyses, and practical tips.
            </p>
          </div>

        </div>
      </section>

      {/* Journeys List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {JOURNEYS.map((journey) => (
          <article
            key={journey.id}
            className="bg-white border border-[#E7E5E0] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xs"
          >
            <div className="lg:col-span-5 space-y-4">
              <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                <img
                  src={journey.image}
                  alt={journey.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Technical Specifications definitional box */}
              <div className="p-4 bg-[#F5F3ED] border border-[#E7E5E0] text-xs space-y-2">
                <div className="flex items-center justify-between pb-1 border-b border-[#E7E5E0]">
                  <span className="text-[#78716C]">Recommended Machine:</span>
                  <span className="font-semibold text-[#1C1917]">{journey.vehicle}</span>
                </div>
                <div className="flex items-center justify-between pb-1 border-b border-[#E7E5E0]">
                  <span className="text-[#78716C]">Route & Distance:</span>
                  <span className="font-mono font-semibold text-[#1C1917]">{journey.distance}</span>
                </div>
                <div className="flex items-center justify-between pb-1 border-b border-[#E7E5E0]">
                  <span className="text-[#78716C]">Duration:</span>
                  <span className="text-[#1C1917]">{journey.duration}</span>
                </div>
                <div>
                  <span className="text-[#78716C] block mb-0.5">Terrain Profile:</span>
                  <span className="text-[#44403C] font-medium">{journey.terrain}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B32025]">
                <Compass className="w-3.5 h-3.5" />
                <span>{journey.destination}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight">
                {journey.title}
              </h2>

              <p className="text-sm text-[#57534E] font-medium">
                {journey.subtitle}
              </p>

              <div className="text-sm text-[#44403C] leading-relaxed pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                  The Driving Experience
                </h3>
                <p>{journey.experience}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E7E5E0]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                  Scenic Halts & Waypoints
                </h3>
                <ul className="space-y-1.5 text-xs text-[#44403C]">
                  {journey.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B32025]">◆</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E7E5E0]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#B32025]">
                  Practical Driver Tips
                </h3>
                <ul className="space-y-1.5 text-xs text-[#44403C]">
                  {journey.practicalTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedJourney(journey)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Download Expedition Notes</span>
                </button>
              </div>
            </div>
          </article>
        ))}

      </main>

      {/* Modal for notes */}
      {selectedJourney && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF9F6] max-w-lg w-full p-6 sm:p-8 space-y-4 border border-[#E7E5E0] shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">{selectedJourney.title}</h3>
            <p className="text-xs text-[#78716C]">Expedition route brief prepared for offline cockpit reference.</p>
            <div className="p-4 bg-white text-xs text-[#44403C] space-y-2 border border-[#E7E5E0] shadow-xs">
              <div><strong>Route:</strong> {selectedJourney.route}</div>
              <div><strong>Terrain:</strong> {selectedJourney.terrain}</div>
              <div><strong>Recommended Pressure:</strong> OEM Cold + 0.2 Bar for mountain hairpins</div>
              <div><strong>Emergency Frequency:</strong> Regional VHF Channel 16 / 112 Satellite Relay</div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedJourney(null)}
                className="px-5 py-2 bg-[#B32025] text-white text-xs font-semibold uppercase cursor-pointer hover:bg-[#8F161A] shadow-xs"
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
