import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-[#F4F1EA] text-[#1C1917] border-b border-[#E7E5E0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B32025]">
          <Mail className="w-4 h-4" />
          <span>The Motor Chronicles Weekly</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
          Stories, machines and ideas from across the automotive world—delivered once a week.
        </h2>

        <p className="text-sm text-[#57534E] max-w-xl mx-auto leading-relaxed">
          Curated long-form features, engineering investigations, archive discoveries, and driving route dossiers. Published every Thursday morning.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto p-4 bg-white border-l-2 border-[#B32025] flex items-center justify-center gap-2 text-sm text-[#1C1917] shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-[#B32025]" />
            <span>You have been subscribed to The Weekly Edition. Welcome to Motor Chronicles.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 bg-white text-[#1C1917] placeholder-[#78716C] text-xs border border-[#DDD8CE] focus:outline-none focus:border-[#B32025] shadow-xs"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              Subscribe
            </button>
          </form>
        )}

        <div className="text-[11px] text-[#78716C] pt-2">
          Strictly editorial content. No sponsored product spam. Unsubscribe at any time with a single click.
        </div>

      </div>
    </section>
  );
};
