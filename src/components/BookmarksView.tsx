import React from 'react';
import { Bookmark, Trash2, ArrowLeft, Clock, User } from 'lucide-react';
import { Article } from '../types';

interface BookmarksViewProps {
  savedArticles: Article[];
  onReadArticle: (article: Article) => void;
  onRemoveBookmark: (article: Article) => void;
  onNavigate: (view: string, payload?: any) => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  savedArticles,
  onReadArticle,
  onRemoveBookmark,
  onNavigate
}) => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24 text-[#1C1917]">
      
      {/* Header */}
      <section className="bg-[#F4F1EA] text-[#1C1917] pt-12 pb-14 border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B32025]">
            <Bookmark className="w-4 h-4 fill-current" />
            <span>Personal Archive</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
            Saved Articles & Reading List
          </h1>
          <p className="text-sm text-[#57534E] max-w-xl">
            {savedArticles.length} {savedArticles.length === 1 ? 'dossier' : 'dossiers'} curated for offline reference and deep reading.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {savedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-[#E7E5E0] p-5 space-y-4 flex flex-col justify-between hover:border-[#B32025]/50 transition-colors shadow-xs"
              >
                <div 
                  onClick={() => onReadArticle(article)}
                  className="space-y-3 cursor-pointer group"
                >
                  <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0] relative">
                    <img
                      src={article.heroImage}
                      alt={article.heroImageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 bg-white/95 backdrop-blur-xs text-[10px] font-mono text-[#78716C] font-semibold border border-[#E7E5E0] truncate max-w-[90%]">
                      /article/{article.slug}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#78716C]">
                    <span className="text-[#B32025] font-semibold uppercase tracking-wider">{article.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#57534E] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C]">
                  <span className="flex items-center gap-1 text-[#1C1917] font-medium">
                    <User className="w-3 h-3 text-[#B32025]" />
                    {article.author.name}
                  </span>
                  
                  <button
                    onClick={() => onRemoveBookmark(article)}
                    className="text-[#78716C] hover:text-[#B32025] transition-colors p-1 cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#E7E5E0] p-16 text-center space-y-4 max-w-xl mx-auto shadow-xs">
            <Bookmark className="w-12 h-12 text-[#78716C] mx-auto opacity-50" />
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Your Reading List Is Empty
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              As you browse Motor Chronicles, click the bookmark icon on any article header or card to store it in your personal reading archive.
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Explore Featured Stories</span>
            </button>
          </div>
        )}

      </main>

    </div>
  );
};
