import React, { useState } from 'react';
import { Award, History, Shield, AlertTriangle, RefreshCw, ChevronRight, Check } from 'lucide-react';
import { 
  HALL_OF_FAME_ENTRIES, 
  THEN_VS_NOW_ENTRIES, 
  BEHIND_THE_BADGE_ENTRIES, 
  COMEBACK_STORIES_ENTRIES 
} from '../data/specials';

interface SpecialsViewProps {
  initialTab?: string;
  onNavigate: (view: string, payload?: any) => void;
}

export const SpecialsView: React.FC<SpecialsViewProps> = ({ initialTab = 'hall-of-fame', onNavigate }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [thenNowToggle, setThenNowToggle] = useState<'before' | 'after'>('after');

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
                The Specials
              </li>
            </ol>
          </nav>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Curated Special Series
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
              The Motor Chronicles Specials
            </h1>
            <p className="text-sm text-[#57534E] max-w-2xl leading-relaxed">
              In-depth recurring editorial series exploring monuments of engineering, heraldic marque lore, pivotal technological evolutions, and lessons from industrial missteps.
            </p>
          </div>

          {/* Series Tabs */}
          <div className="pt-6 border-t border-[#E7E5E0] flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveTab('hall-of-fame')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border ${
                activeTab === 'hall-of-fame'
                  ? 'bg-[#B32025] text-white border-[#B32025]'
                  : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Hall of Fame</span>
            </button>

            <button
              onClick={() => setActiveTab('then-vs-now')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border ${
                activeTab === 'then-vs-now'
                  ? 'bg-[#B32025] text-white border-[#B32025]'
                  : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Then vs Now</span>
            </button>

            <button
              onClick={() => setActiveTab('behind-the-badge')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border ${
                activeTab === 'behind-the-badge'
                  ? 'bg-[#B32025] text-white border-[#B32025]'
                  : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Behind the Badge</span>
            </button>

            <button
              onClick={() => setActiveTab('failures')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border ${
                activeTab === 'failures'
                  ? 'bg-[#B32025] text-white border-[#B32025]'
                  : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Automotive Failures</span>
            </button>

            <button
              onClick={() => setActiveTab('comebacks')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer border ${
                activeTab === 'comebacks'
                  ? 'bg-[#B32025] text-white border-[#B32025]'
                  : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Comeback Stories</span>
            </button>
          </div>

        </div>
      </section>

      {/* Tab Panels */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Tab 1: Hall of Fame */}
        {activeTab === 'hall-of-fame' && (
          <div className="space-y-12">
            <div className="border-b border-[#111111]/15 pb-4">
              <h2 className="font-serif text-3xl font-bold text-[#111111]">
                Automotive Hall of Fame: Permanent Inductees
              </h2>
              <p className="text-xs text-[#8A8A8A] uppercase tracking-wider mt-1">
                Honouring legendary machines, engineers, and silhouettes that altered the course of transport
              </p>
            </div>

            <div className="space-y-12">
              {HALL_OF_FAME_ENTRIES.map((entry, idx) => (
                <div 
                  key={entry.id}
                  className="bg-white border border-[#111111]/10 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-5 aspect-[16/10] bg-[#E7E5E1] overflow-hidden border border-[#111111]/5">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#8A8A8A] border-b border-[#111111]/10 pb-2">
                      <span className="font-mono text-[#B32025] font-bold">INDUCTEE #{String(idx + 1).padStart(2, '0')}</span>
                      <span>Era: {entry.yearOrEra}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                      {entry.title}
                    </h3>
                    <h4 className="text-xs uppercase tracking-widest text-[#B32025] font-semibold">
                      {entry.subtitle}
                    </h4>
                    <p className="text-sm text-[#252525]/85 leading-relaxed font-normal">
                      {entry.details}
                    </p>

                    {entry.keyFacts && (
                      <div className="pt-2 space-y-2 border-t border-[#111111]/10">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">Key Architectural Milestones:</div>
                        <ul className="space-y-1.5 text-xs text-[#252525]">
                          {entry.keyFacts.map((fact, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <span className="text-[#B32025]">✓</span>
                              <span>{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Then vs Now (Interactive Toggle Comparison) */}
        {activeTab === 'then-vs-now' && (
          <div className="space-y-12">
            <div className="border-b border-[#111111]/15 pb-4">
              <h2 className="font-serif text-3xl font-bold text-[#111111]">
                Then vs Now: The Evolution of Motoring
              </h2>
              <p className="text-xs text-[#8A8A8A] uppercase tracking-wider mt-1">
                Juxtaposing historical mechanical paradigms against contemporary digital systems
              </p>
            </div>

            {THEN_VS_NOW_ENTRIES.map((entry) => (
              <div key={entry.id} className="bg-white border border-[#111111]/10 p-6 sm:p-10 space-y-8">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-[#8A8A8A]">
                    {entry.subtitle}
                  </p>
                </div>

                {/* Interactive Toggle Control */}
                <div className="flex items-center gap-2 p-1 bg-[#E7E5E1] max-w-xs border border-[#111111]/10">
                  <button
                    onClick={() => setThenNowToggle('before')}
                    className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      thenNowToggle === 'before'
                        ? 'bg-[#111111] text-white shadow-sm'
                        : 'text-[#252525] hover:text-[#B32025]'
                    }`}
                  >
                    Historical Baseline
                  </button>
                  <button
                    onClick={() => setThenNowToggle('after')}
                    className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                      thenNowToggle === 'after'
                        ? 'bg-[#111111] text-white shadow-sm'
                        : 'text-[#252525] hover:text-[#B32025]'
                    }`}
                  >
                    Modern Era
                  </button>
                </div>

                {/* Comparison View */}
                {thenNowToggle === 'before' && entry.before && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#F5F3EF] p-6 border border-[#111111]/10">
                    <div className="md:col-span-5 aspect-[16/10] bg-[#E7E5E1] overflow-hidden">
                      <img
                        src={entry.before.image}
                        alt={entry.before.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-7 space-y-3">
                      <div className="text-xs font-mono text-[#B32025] font-bold">ERA: {entry.before.year}</div>
                      <h4 className="font-serif text-xl font-bold text-[#111111]">{entry.before.title}</h4>
                      <p className="text-sm text-[#252525] leading-relaxed">{entry.before.description}</p>
                    </div>
                  </div>
                )}

                {thenNowToggle === 'after' && entry.after && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#F5F3EF] p-6 border border-[#111111]/10">
                    <div className="md:col-span-5 aspect-[16/10] bg-[#E7E5E1] overflow-hidden">
                      <img
                        src={entry.after.image}
                        alt={entry.after.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-7 space-y-3">
                      <div className="text-xs font-mono text-[#B32025] font-bold">ERA: {entry.after.year}</div>
                      <h4 className="font-serif text-xl font-bold text-[#111111]">{entry.after.title}</h4>
                      <p className="text-sm text-[#252525] leading-relaxed">{entry.after.description}</p>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Behind the Badge */}
        {activeTab === 'behind-the-badge' && (
          <div className="space-y-12">
            <div className="border-b border-[#111111]/15 pb-4">
              <h2 className="font-serif text-3xl font-bold text-[#111111]">
                Behind the Badge: Marque Heraldry & Lore
              </h2>
              <p className="text-xs text-[#8A8A8A] uppercase tracking-wider mt-1">
                The origins, myths, and historic symbols sculpted onto famous radiator caps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BEHIND_THE_BADGE_ENTRIES.map((b) => (
                <div key={b.id} className="bg-white border border-[#111111]/10 p-6 space-y-4 shadow-xs">
                  <div className="aspect-[16/10] bg-[#E7E5E1] overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-xs font-mono text-[#B32025] font-semibold">{b.yearOrEra}</div>
                  <h3 className="font-serif text-xl font-bold text-[#111111]">{b.title}</h3>
                  <p className="text-xs text-[#8A8A8A] font-semibold">{b.subtitle}</p>
                  <p className="text-xs text-[#252525] leading-relaxed">{b.details}</p>
                  {b.keyFacts && (
                    <ul className="pt-3 border-t border-[#111111]/10 space-y-1.5 text-xs text-[#8A8A8A]">
                      {b.keyFacts.map((fact, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#B32025] shrink-0" />
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Failures */}
        {activeTab === 'failures' && (
          <div className="space-y-8">
            <div className="border-b border-[#111111]/15 pb-4">
              <h2 className="font-serif text-3xl font-bold text-[#111111]">
                When Great Ideas Go Wrong: Automotive Failures
              </h2>
              <p className="text-xs text-[#8A8A8A] uppercase tracking-wider mt-1">
                Respectful retrospective investigations of engineering missteps, rotary dilemmas, and premature concepts
              </p>
            </div>

            <div className="bg-white border border-[#111111]/10 p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-[#F5F3EF] border-l-2 border-[#B32025] space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#111111]">01. The Wankel Apex Dilemma</h3>
                  <p className="text-xs text-[#252525] leading-relaxed">
                    Licensed by GM, Mercedes, and Porsche, the rotary engine promised vibration-free rotation but succumbed to sealing metallurgy and 1970s fuel appetites.
                  </p>
                </div>
                <div className="p-4 bg-[#F5F3EF] border-l-2 border-[#B32025] space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#111111]">02. The Tucker 48 Collapse</h3>
                  <p className="text-xs text-[#252525] leading-relaxed">
                    Pop-out windshields, directional center headlamps, and aircraft engines arrived twenty years before Detroit or the SEC were prepared to allow them.
                  </p>
                </div>
                <div className="p-4 bg-[#F5F3EF] border-l-2 border-[#B32025] space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#111111]">03. Citroën SM Hydropneumatics</h3>
                  <p className="text-xs text-[#252525] leading-relaxed">
                    Marrying high-pressure hydraulic circuits with a high-maintenance Maserati quad-cam V6 created an avant-garde masterpiece that broke dealer mechanics.
                  </p>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={() => onNavigate('article', 'art-8-automotive-failures')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#B32025] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Read Full Investigation: "When Great Ideas Go Wrong" →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Comebacks */}
        {activeTab === 'comebacks' && (
          <div className="space-y-12">
            <div className="border-b border-[#111111]/15 pb-4">
              <h2 className="font-serif text-3xl font-bold text-[#111111]">
                Great Comeback Stories in Motoring
              </h2>
              <p className="text-xs text-[#8A8A8A] uppercase tracking-wider mt-1">
                How bankrupt marques and dismissed concepts returned to conquer the global market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {COMEBACK_STORIES_ENTRIES.map((c) => (
                <div key={c.id} className="bg-white border border-[#111111]/10 p-6 sm:p-8 space-y-4">
                  <div className="aspect-[16/10] bg-[#E7E5E1] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-xs font-mono text-[#B32025] font-semibold">{c.yearOrEra}</div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">{c.title}</h3>
                  <p className="text-xs font-semibold text-[#8A8A8A]">{c.subtitle}</p>
                  <p className="text-sm text-[#252525] leading-relaxed">{c.details}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
