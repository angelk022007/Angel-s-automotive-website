import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, payload?: any) => void;
  onOpenNewsletter: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenNewsletter }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setQuickEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#F0EDE6] text-[#1C1917] pt-20 pb-12 border-t border-[#DDD8CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand & Newsletter Tier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#DDD8CE]">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
              MOTOR CHRONICLES
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#B32025] font-semibold">
              Stories Behind the Machines.
            </p>
            <p className="text-sm text-[#57534E] max-w-lg leading-relaxed">
              An independent automotive digital publication exploring cars, bikes, engineering heritage, motorsport breakthroughs, human convictions, and the future of mobility.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-8 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1C1917]">
              The Motor Chronicles Weekly
            </h4>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Delivered every Thursday morning: long-form stories, engineering analyses, and curated archive features. No clickbait, no spam.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#1C1917] bg-white p-3 border-l-2 border-[#B32025] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#B32025]" />
                <span>Thank you. You are subscribed to The Motor Chronicles Weekly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 pt-1">
                <input
                  type="email"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-white text-[#1C1917] placeholder-[#78716C] text-xs px-4 py-2.5 flex-1 focus:outline-none focus:ring-1 focus:ring-[#B32025] border border-[#DDD8CE] shadow-xs"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#B32025] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#8F161A] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-Column Editorial Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-[#DDD8CE] text-xs">
          {/* Col 1: Explore */}
          <div className="space-y-4">
            <h5 className="font-semibold uppercase tracking-widest text-[#1C1917] text-[11px]">
              Explore
            </h5>
            <ul className="space-y-2.5 text-[#57534E]">
              <li>
                <button onClick={() => onNavigate('category', 'cars')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Cars & Platforms
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category', 'bikes')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Bikes & Motorcycles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category', 'brands')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Brands & Heritage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category', 'stories')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Lead Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category', 'technology')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Technology & Software
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category', 'motorsport')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Motorsport & Formula 1
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category', 'history')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Historic Archives
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category', 'future')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Future Mobility 2035
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Discover */}
          <div className="space-y-4">
            <h5 className="font-semibold uppercase tracking-widest text-[#1C1917] text-[11px]">
              Discover
            </h5>
            <ul className="space-y-2.5 text-[#57534E]">
              <li>
                <button onClick={() => onNavigate('specials', 'hall-of-fame')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Automotive Hall of Fame
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('specials', 'then-vs-now')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Then vs Now Comparisons
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('specials', 'behind-the-badge')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Behind the Badge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('specials', 'failures')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Automotive Failures & Lessons
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('specials', 'comebacks')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Great Comeback Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('community')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Automotive Communities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('events')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Events & Concorso
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('journeys')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Featured Journeys
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Reviews & Guides */}
          <div className="space-y-4">
            <h5 className="font-semibold uppercase tracking-widest text-[#1C1917] text-[11px]">
              Reviews & Tech
            </h5>
            <ul className="space-y-2.5 text-[#57534E]">
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Drive Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Auto Parts & Compounds
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Car Detailing & Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('topics')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Topic Index
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category', 'sustainability')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Sustainability & E-Fuels
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category', 'people')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Pioneers & Designers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional */}
          <div className="space-y-4">
            <h5 className="font-semibold uppercase tracking-widest text-[#1C1917] text-[11px]">
              Publication
            </h5>
            <ul className="space-y-2.5 text-[#57534E]">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  About Motor Chronicles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Editorial Code of Ethics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contributor')} className="hover:text-[#B32025] transition-colors cursor-pointer flex items-center gap-1">
                  <span>Become a Contributor</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B32025]" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Masthead & Staff
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Contact the Editors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('legal')} className="hover:text-[#B32025] transition-colors cursor-pointer">
                  Privacy & Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p>© {new Date().getFullYear()} Motor Chronicles Digital Magazine. All rights reserved. Stories Behind the Machines.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('legal')} className="hover:text-[#1C1917] transition-colors cursor-pointer">Privacy Policy</button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('legal')} className="hover:text-[#1C1917] transition-colors cursor-pointer">Terms of Service</button>
            <span aria-hidden="true">·</span>
            <button onClick={() => onNavigate('legal')} className="hover:text-[#1C1917] transition-colors cursor-pointer">Editorial Disclaimer</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
