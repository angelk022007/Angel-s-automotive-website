import React from 'react';
import { Tag } from 'lucide-react';
import { POPULAR_TOPICS } from '../data/categories';

interface TopicCloudProps {
  onSelectTopic: (topicSlug: string) => void;
}

export const TopicCloud: React.FC<TopicCloudProps> = ({ onSelectTopic }) => {
  return (
    <section className="py-16 bg-[#FAF9F6] border-b border-[#E7E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Tag className="w-4 h-4 text-[#B32025]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
              Taxonomy & Indices
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1C1917]">
            Explore by Topic
          </h2>
          <p className="text-xs text-[#78716C] leading-relaxed">
            Navigate through focused thematic indexes, engineering disciplines, and automotive genres.
          </p>
        </div>

        {/* Clickable Topics Cloud */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {POPULAR_TOPICS.map((topic) => (
            <button
              key={topic.slug}
              onClick={() => onSelectTopic(topic.slug)}
              className="px-4 py-2 bg-white hover:bg-[#B32025] hover:text-white border border-[#E7E5E0] text-xs font-semibold uppercase tracking-wider text-[#1C1917] transition-all cursor-pointer shadow-xs group"
            >
              <span>{topic.name}</span>
              <span className="ml-1.5 text-[10px] text-[#78716C] group-hover:text-white font-mono tabular-nums">
                ({topic.count})
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
