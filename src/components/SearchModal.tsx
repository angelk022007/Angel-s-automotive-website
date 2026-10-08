import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, Calendar, Users, MapPin, ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { EVENTS } from '../data/events';
import { COMMUNITIES } from '../data/communities';
import { POPULAR_TOPICS } from '../data/categories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onReadArticle: (article: Article) => void;
  onSelectTopic: (topic: string) => void;
  onNavigate: (view: string, payload?: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  articles,
  onReadArticle,
  onSelectTopic,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'articles' | 'events' | 'communities' | 'topics'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  // Results
  const matchedArticles = cleanQ
    ? articles.filter(a =>
        a.title.toLowerCase().includes(cleanQ) ||
        a.subtitle.toLowerCase().includes(cleanQ) ||
        a.tags.some(t => t.toLowerCase().includes(cleanQ)) ||
        a.author.name.toLowerCase().includes(cleanQ) ||
        a.categoryLabel.toLowerCase().includes(cleanQ)
      )
    : articles.slice(0, 4);

  const matchedEvents = cleanQ
    ? EVENTS.filter(e =>
        e.name.toLowerCase().includes(cleanQ) ||
        e.location.toLowerCase().includes(cleanQ) ||
        e.category.toLowerCase().includes(cleanQ)
      )
    : EVENTS.slice(0, 2);

  const matchedCommunities = cleanQ
    ? COMMUNITIES.filter(c =>
        c.name.toLowerCase().includes(cleanQ) ||
        c.description.toLowerCase().includes(cleanQ) ||
        c.vehicleType.toLowerCase().includes(cleanQ) ||
        (c.brand && c.brand.toLowerCase().includes(cleanQ))
      )
    : COMMUNITIES.slice(0, 2);

  const matchedTopics = cleanQ
    ? POPULAR_TOPICS.filter(t => t.name.toLowerCase().includes(cleanQ) || t.slug.toLowerCase().includes(cleanQ))
    : POPULAR_TOPICS.slice(0, 8);

  const totalCount = matchedArticles.length + matchedEvents.length + matchedCommunities.length + matchedTopics.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      <div className="bg-[#FAF9F6] border border-[#E7E5E0] max-w-3xl w-full shadow-2xl p-6 sm:p-8 space-y-6 max-h-[85vh] flex flex-col">
        
        {/* Top Input Bar */}
        <div className="flex items-center gap-3 border-b-2 border-[#1C1917] pb-3">
          <Search className="w-5 h-5 text-[#B32025]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, engine archives, brands, topics, events, communities..."
            className="flex-1 bg-transparent text-sm sm:text-base font-medium text-[#1C1917] placeholder-[#78716C] focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-[#78716C] hover:text-[#1C1917] uppercase font-mono cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#78716C] hover:text-[#1C1917] cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold uppercase tracking-wider text-[#78716C]">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 cursor-pointer transition-colors border ${
              activeTab === 'all' 
                ? 'bg-[#B32025] text-white border-[#B32025]' 
                : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
            }`}
          >
            All Results ({totalCount})
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-3 py-1.5 cursor-pointer transition-colors border ${
              activeTab === 'articles' 
                ? 'bg-[#B32025] text-white border-[#B32025]' 
                : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
            }`}
          >
            Articles ({matchedArticles.length})
          </button>
          <button
            onClick={() => setActiveTab('topics')}
            className={`px-3 py-1.5 cursor-pointer transition-colors border ${
              activeTab === 'topics' 
                ? 'bg-[#B32025] text-white border-[#B32025]' 
                : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
            }`}
          >
            Topics ({matchedTopics.length})
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-3 py-1.5 cursor-pointer transition-colors border ${
              activeTab === 'events' 
                ? 'bg-[#B32025] text-white border-[#B32025]' 
                : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
            }`}
          >
            Events ({matchedEvents.length})
          </button>
          <button
            onClick={() => setActiveTab('communities')}
            className={`px-3 py-1.5 cursor-pointer transition-colors border ${
              activeTab === 'communities' 
                ? 'bg-[#B32025] text-white border-[#B32025]' 
                : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
            }`}
          >
            Communities ({matchedCommunities.length})
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto space-y-8 pr-1">
          
          {/* Topics Chips */}
          {(activeTab === 'all' || activeTab === 'topics') && matchedTopics.length > 0 && (
            <div className="space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#B32025]">
                Matching Topic Indices
              </div>
              <div className="flex flex-wrap gap-2">
                {matchedTopics.map((t) => (
                  <button
                    key={t.slug}
                    onClick={() => {
                      onClose();
                      onSelectTopic(t.slug);
                    }}
                    className="px-3 py-1.5 bg-white border border-[#E7E5E0] hover:bg-[#B32025] hover:text-white text-xs font-semibold uppercase tracking-wider text-[#1C1917] transition-colors cursor-pointer shadow-xs"
                  >
                    #{t.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles Section */}
          {(activeTab === 'all' || activeTab === 'articles') && (
            <div className="space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#B32025]">
                Editorial Articles & Investigations
              </div>
              <div className="space-y-3 divide-y divide-[#E7E5E0]">
                {matchedArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      onClose();
                      onReadArticle(art);
                    }}
                    className="pt-3 group cursor-pointer space-y-1 hover:translate-x-1 transition-transform"
                  >
                    <div className="flex items-center gap-2 text-[11px] text-[#78716C]">
                      <span className="text-[#B32025] font-semibold uppercase">{art.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" />
                        {art.readTime}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors">
                      {art.title}
                    </h4>
                    <p className="text-xs text-[#57534E] line-clamp-1">{art.subtitle}</p>
                  </div>
                ))}
                {matchedArticles.length === 0 && (
                  <p className="text-xs text-[#78716C] py-2">No articles matching query.</p>
                )}
              </div>
            </div>
          )}

          {/* Events Section */}
          {(activeTab === 'all' || activeTab === 'events') && matchedEvents.length > 0 && (
            <div className="space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#B32025]">
                Automotive Events & Concorso
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchedEvents.map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => {
                      onClose();
                      onNavigate('events');
                    }}
                    className="p-3 bg-white border border-[#E7E5E0] space-y-1 cursor-pointer hover:border-[#B32025] transition-colors shadow-xs"
                  >
                    <div className="text-[10px] uppercase font-bold text-[#B32025]">{evt.category}</div>
                    <h5 className="font-serif text-sm font-bold text-[#1C1917]">{evt.name}</h5>
                    <div className="text-[11px] text-[#78716C] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{evt.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Communities Section */}
          {(activeTab === 'all' || activeTab === 'communities') && matchedCommunities.length > 0 && (
            <div className="space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#B32025]">
                Owner Guilds & Communities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {matchedCommunities.map((comm) => (
                  <div
                    key={comm.id}
                    onClick={() => {
                      onClose();
                      onNavigate('community');
                    }}
                    className="p-3 bg-white border border-[#E7E5E0] space-y-1 cursor-pointer hover:border-[#B32025] transition-colors shadow-xs"
                  >
                    <div className="text-[10px] uppercase font-bold text-[#B32025]">{comm.categoryLabel}</div>
                    <h5 className="font-serif text-sm font-bold text-[#1C1917]">{comm.name}</h5>
                    <div className="text-[11px] text-[#78716C] flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{comm.membersCount.toLocaleString()} members</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C]">
          <span>Press ESC or click close to exit</span>
          <button
            onClick={() => {
              onClose();
              onNavigate('home');
            }}
            className="text-[#1C1917] hover:text-[#B32025] font-semibold flex items-center gap-1 cursor-pointer"
          >
            <span>Explore Front Page</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};
