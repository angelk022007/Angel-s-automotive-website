import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight, Check } from 'lucide-react';
import { EVENTS } from '../data/events';
import { AutomotiveEvent } from '../types';

interface EventsViewProps {
  onNavigate: (view: string, payload?: any) => void;
}

const EVENT_CATEGORIES = [
  'All',
  'Auto Shows',
  'Motorsport Events',
  'Off-Road Events',
  'Car Meets',
  'Community Drives'
];

export const EventsView: React.FC<EventsViewProps> = ({ onNavigate }) => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeEvent, setActiveEvent] = useState<AutomotiveEvent | null>(null);
  const [rsvpEvents, setRsvpEvents] = useState<string[]>([]);

  const filtered = selectedCat === 'All'
    ? EVENTS
    : EVENTS.filter(e => e.category === selectedCat);

  const handleRsvp = (id: string) => {
    if (!rsvpEvents.includes(id)) {
      setRsvpEvents([...rsvpEvents, id]);
    }
  };

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
                Calendar & Events
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                International Calendar
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
              Automotive Events & Gatherings
            </h1>
            <p className="text-sm text-[#57534E] leading-relaxed max-w-2xl font-normal">
              Curated concorso d’eleganza, 24-hour endurance classics, high alpine dawn drives, and underground enthusiast meets around the world.
            </p>
          </div>

          {/* Category Filter */}
          <div className="pt-6 border-t border-[#E7E5E0] flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {EVENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border ${
                  selectedCat === cat
                    ? 'bg-[#B32025] text-white border-[#B32025]'
                    : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Events Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E0]">
          <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
            Scheduled Fixtures ({filtered.length})
          </h2>
          <span className="text-xs text-[#78716C]">Official Editorial Calendar</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((evt) => {
            const isRsvpd = rsvpEvents.includes(evt.id);
            return (
              <div
                key={evt.id}
                className="bg-white border border-[#E7E5E0] p-6 space-y-4 hover:border-[#B32025]/50 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                    <img
                      src={evt.image}
                      alt={evt.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#78716C] border-b border-[#E7E5E0] pb-2">
                    <span className="text-[#B32025] font-semibold uppercase tracking-wider">{evt.category}</span>
                    <span className="font-mono">{evt.entryType}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917] leading-snug">
                    {evt.name}
                  </h3>

                  <div className="space-y-1 text-xs text-[#78716C]">
                    <div className="flex items-center gap-1.5 text-[#1C1917] font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#B32025]" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#78716C]" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#57534E] leading-relaxed pt-1">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveEvent(evt)}
                    className="text-xs font-semibold uppercase text-[#1C1917] hover:text-[#B32025] transition-colors cursor-pointer"
                  >
                    View Event Details →
                  </button>

                  <button
                    onClick={() => handleRsvp(evt.id)}
                    className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs ${
                      isRsvpd
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#B32025] hover:bg-[#8F161A] text-white'
                    }`}
                  >
                    {isRsvpd ? 'Saved' : 'Add to Calendar'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </main>

      {/* Modal Detail */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF9F6] max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-[#E7E5E0] shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#E7E5E0] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">{activeEvent.category}</span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] mt-1">{activeEvent.name}</h3>
              </div>
              <button 
                onClick={() => setActiveEvent(null)}
                className="text-[#78716C] hover:text-[#1C1917] text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs text-[#44403C] bg-white p-4 border border-[#E7E5E0] shadow-xs">
              <div><strong>Dates:</strong> {activeEvent.date}</div>
              <div><strong>Venue:</strong> {activeEvent.venue}</div>
              <div><strong>Location:</strong> {activeEvent.location}</div>
              <div><strong>Access:</strong> {activeEvent.entryType}</div>
            </div>

            <p className="text-sm text-[#44403C] leading-relaxed">
              {activeEvent.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">Event Programme Highlights</h4>
              <ul className="space-y-1.5 text-xs text-[#44403C]">
                {activeEvent.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B32025] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E7E5E0]">
              <button
                onClick={() => setActiveEvent(null)}
                className="px-4 py-2 border border-[#E7E5E0] text-xs font-semibold uppercase text-[#1C1917] hover:bg-[#F5F3ED] cursor-pointer shadow-xs"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleRsvp(activeEvent.id);
                  setActiveEvent(null);
                }}
                className="px-6 py-2 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              >
                Add to My Schedule
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
