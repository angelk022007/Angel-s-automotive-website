import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  User, 
  Bookmark, 
  Share2, 
  Check, 
  ArrowLeft, 
  MessageSquare, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { Article } from '../types';

interface ArticleViewProps {
  article: Article;
  allArticles: Article[];
  onNavigate: (view: string, payload?: any) => void;
  onReadArticle: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  allArticles,
  onNavigate,
  onReadArticle,
  isBookmarked,
  onToggleBookmark
}) => {
  const [copied, setCopied] = useState(false);
  const [comments, setComments] = useState<string[]>([
    "Fascinating historical depth. I never knew that about the acetylene drip systems on the running boards!",
    "The engineering evolution from Bilux bulbs to micro-mirror matrices is one of the most underrated triumphs in automotive safety."
  ]);
  const [newComment, setNewComment] = useState('');

  const currentArticleUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/article/${article.slug}`
    : `https://motorchronicles.com/article/${article.slug}`;

  const handleShare = () => {
    navigator.clipboard?.writeText(currentArticleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }
  };

  // Related articles
  const related = allArticles
    .filter(a => a.id !== article.id && (a.category === article.category || a.tags.some(t => article.tags.includes(t))))
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-[#FAF9F6] pb-24 text-[#1C1917]">
      
      {/* Editorial Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4 border-b border-[#E7E5E0]">
        <ol className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#78716C]">
          <li>
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#1C1917] transition-colors cursor-pointer"
            >
              Home
            </button>
          </li>
          <ChevronRight className="w-3 h-3 text-[#78716C]" />
          <li>
            <button 
              onClick={() => onNavigate('category', article.category)} 
              className="hover:text-[#1C1917] transition-colors cursor-pointer text-[#B32025] font-semibold"
            >
              {article.categoryLabel}
            </button>
          </li>
          <ChevronRight className="w-3 h-3 text-[#78716C]" />
          <li className="truncate max-w-[200px] sm:max-w-xs text-[#44403C]">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* Article Header Tier */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8 space-y-6">
        
        {/* Unboxed Category & Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E7E5E0] pb-4">
          <div className="flex items-center gap-2 text-xs text-[#78716C]">
            <span className="text-[#B32025] font-bold uppercase tracking-widest text-xs">
              {article.categoryLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#78716C]" />
              {article.publishedAt}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#78716C]" />
              {article.readTime}
            </span>
          </div>

          {/* Social Share & Bookmark Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggleBookmark(article)}
              className={`p-2 border text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs ${
                isBookmarked 
                  ? 'bg-[#B32025] text-white border-[#B32025]' 
                  : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
              }`}
              title={isBookmarked ? "Remove from Saved" : "Save Article"}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline font-semibold">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 bg-white border border-[#E7E5E0] hover:border-[#B32025] text-[#1C1917] text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              title="Copy canonical article URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#B32025]" />}
              <span className="hidden sm:inline font-semibold">{copied ? 'URL Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Permanent URL Indicator */}
        <div className="py-2.5 px-3.5 bg-[#F5F3ED] border border-[#E7E5E0] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#78716C] shadow-xs">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-[#B32025] font-bold uppercase tracking-wider font-sans text-[10px] shrink-0">Article URL:</span>
            <span className="text-[#1C1917] font-semibold truncate selection:bg-[#B32025] selection:text-white">
              {currentArticleUrl}
            </span>
          </div>
          <button
            onClick={handleShare}
            className="text-[#B32025] hover:text-[#8F161A] transition-colors cursor-pointer font-sans uppercase font-bold text-[10px] tracking-wider shrink-0 bg-white px-2.5 py-1 border border-[#E7E5E0]"
          >
            {copied ? '✓ Copied' : 'Copy URL'}
          </button>
        </div>

        {/* Title & Deck */}
        <h1 
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.12]"
          style={{ textWrap: 'balance' }}
        >
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#57534E] font-normal leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author Byline */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#E7E5E0]">
          <div className="w-11 h-11 rounded-full bg-[#EAE6DD] text-[#1C1917] border border-[#DDD8CE] flex items-center justify-center font-serif font-bold text-sm">
            {article.author.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-[#1C1917] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#B32025]" />
              {article.author.name}
            </div>
            <div className="text-xs text-[#78716C]">
              {article.author.role}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Presentation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-6">
        <figure className="space-y-2 border border-[#E7E5E0] p-2 bg-white shadow-xs">
          <div className="aspect-[16/9] bg-[#EAE6DD] overflow-hidden">
            <img
              src={article.heroImage}
              alt={article.heroImageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="text-xs font-serif italic text-[#57534E] px-2 py-1 flex items-center justify-between">
            <span>{article.heroImageCaption}</span>
            <span className="not-italic font-sans text-[10px] text-[#78716C] uppercase tracking-wider">
              Motor Chronicles Photographic Archive
            </span>
          </figcaption>
        </figure>
      </div>

      {/* Main Editorial Reading Column (Constrained Measure: 65-75ch) */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 space-y-10">
        
        {/* Drop Cap Opening Paragraph */}
        <div className="drop-cap text-base sm:text-lg text-[#1C1917] leading-[1.8] font-normal">
          {article.introduction}
        </div>

        {/* Key Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <aside aria-label="Key Takeaways" className="my-8 p-6 bg-white border-l-4 border-[#B32025] shadow-xs border border-y-[#E7E5E0] border-r-[#E7E5E0]">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#B32025] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Key Takeaways & Engineering Context</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#44403C] leading-relaxed">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#B32025] font-bold">―</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Structured Sections */}
        {article.sections.map((section, idx) => (
          <section key={idx} className="space-y-4 pt-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] pt-2 border-t border-[#E7E5E0]">
              {section.heading}
            </h2>
            
            <div className="text-base sm:text-[17px] text-[#44403C] leading-[1.8] space-y-4 font-normal">
              {section.content.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Optional Section Figure */}
            {section.image && (
              <figure className="my-6 space-y-2 border border-[#E7E5E0] p-2 bg-white shadow-xs">
                <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden">
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-xs font-serif italic text-[#78716C] px-2 py-1">
                  {section.image.caption}
                </figcaption>
              </figure>
            )}
          </section>
        ))}

        {/* Wide Asymmetric Pull Quote */}
        {article.pullQuote && (
          <blockquote className="my-12 py-8 px-6 sm:px-10 border-y border-[#E7E5E0] bg-[#F5F3ED] text-center space-y-3">
            <p className="font-serif italic text-xl sm:text-2xl text-[#1C1917] leading-relaxed">
              "{article.pullQuote.quote}"
            </p>
            {article.pullQuote.attribution && (
              <cite className="block text-xs uppercase tracking-widest text-[#B32025] font-semibold not-italic">
                — {article.pullQuote.attribution}
              </cite>
            )}
          </blockquote>
        )}

        {/* Conclusion */}
        <section className="space-y-4 pt-6">
          <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
            Conclusion
          </h2>
          <p className="text-base sm:text-[17px] text-[#44403C] leading-[1.8] font-normal">
            {article.conclusion}
          </p>
        </section>

        {/* Editorial Footnote */}
        {article.editorialNote && (
          <aside className="p-4 bg-[#F5F3ED] border border-[#E7E5E0] text-xs text-[#78716C] italic">
            <span className="font-semibold not-italic text-[#1C1917]">Editorial Note: </span>
            {article.editorialNote}
          </aside>
        )}

        {/* Article Tags Cloud */}
        <div className="pt-6 border-t border-[#E7E5E0]">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#78716C] mb-3">
            Thematic Tags & Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onNavigate('topic', tag.toLowerCase())}
                className="px-3 py-1 bg-white hover:bg-[#B32025] hover:text-white border border-[#E7E5E0] text-xs uppercase tracking-wider text-[#1C1917] transition-colors cursor-pointer shadow-xs"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Author Profile Card */}
        <section className="p-6 bg-white border border-[#E7E5E0] space-y-3 shadow-xs">
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#B32025]">
            About the Author
          </div>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#EAE6DD] text-[#1C1917] border border-[#DDD8CE] flex items-center justify-center font-serif text-xl font-bold shrink-0">
              {article.author.name.charAt(0)}
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                {article.author.name}
              </h3>
              <p className="text-xs text-[#78716C] font-medium">
                {article.author.role}
              </p>
              <p className="text-xs text-[#57534E] leading-relaxed pt-1">
                {article.author.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Reader Discussion Section */}
        <section className="pt-8 border-t border-[#E7E5E0] space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#B32025]" />
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Reader Dialogue ({comments.length})
              </h3>
            </div>
            <span className="text-xs text-[#78716C]">Moderated Community Thoughts</span>
          </div>

          <form onSubmit={handleAddComment} className="space-y-3">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Contribute your observation, historical detail, or mechanical inquiry..."
              rows={3}
              required
              className="w-full p-3 bg-white border border-[#E7E5E0] text-xs text-[#1C1917] focus:outline-none focus:border-[#B32025] shadow-xs"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              >
                Post Observation
              </button>
            </div>
          </form>

          <div className="space-y-3 divide-y divide-[#E7E5E0]">
            {comments.map((c, i) => (
              <div key={i} className="pt-3 text-xs space-y-1">
                <div className="flex items-center gap-2 text-[#78716C]">
                  <span className="font-semibold text-[#1C1917]">Reader Dispatch #{i + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span>Verified Enthusiast</span>
                </div>
                <p className="text-[#44403C] leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Related Stories Tier */}
      {related.length > 0 && (
        <aside className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 mt-16 border-t border-[#E7E5E0]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Related Investigations & Chronicles
            </h3>
            <span className="text-xs uppercase tracking-wider text-[#78716C]">
              Selected by Editorial Desk
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onReadArticle(rel);
                }}
                className="group cursor-pointer bg-white border border-[#E7E5E0] p-4 space-y-3 hover:border-[#B32025]/50 transition-colors shadow-xs"
              >
                <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                  <img
                    src={rel.heroImage}
                    alt={rel.heroImageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#B32025] font-semibold uppercase tracking-wider">
                    {rel.categoryLabel}
                  </span>
                  <span className="font-mono text-[10px] text-[#78716C]">
                    /{rel.slug}
                  </span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#1C1917] group-hover:text-[#B32025] transition-colors leading-snug line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#78716C] line-clamp-2">
                  {rel.subtitle}
                </p>
              </div>
            ))}
          </div>
        </aside>
      )}

      {/* Back to Home Button */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 text-center">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] hover:bg-[#B32025] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Front Page</span>
        </button>
      </div>

    </article>
  );
};
