import React, { useState } from 'react';
import { Search, Bookmark, Menu, X, ChevronDown, Compass } from 'lucide-react';
import { EXPLORE_MENU_SECTIONS, ExploreMenuItem } from '../data/categories';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, payload?: any) => void;
  onOpenSearch: () => void;
  onOpenNewsletter: () => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenNewsletter,
  savedCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreMenuOpen, setExploreMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E7E5E0] transition-colors">
      {/* Top Editorial Utility Bar */}
      <div className="hidden lg:block border-b border-[#E7E5E0]/60 text-[11px] uppercase tracking-widest text-[#78716C] py-1 px-8 bg-[#F5F3ED]/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>Stories Behind the Machines</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2026</span>
            <span aria-hidden="true">·</span>
            <span>Independent Automotive Journalism</span>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('contributor')}
              className="hover:text-[#1C1917] transition-colors cursor-pointer"
            >
              Become a Contributor
            </button>
            <span aria-hidden="true">·</span>
            <button 
              onClick={onOpenNewsletter}
              className="text-[#B32025] hover:text-[#1C1917] transition-colors cursor-pointer font-medium"
            >
              The Weekly Edition
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav Links) — Zone 3 (Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="text-left group cursor-pointer focus:outline-none"
            aria-label="Motor Chronicles Home"
          >
            <span className="block font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#B32025] transition-colors">
              MOTOR CHRONICLES
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium uppercase tracking-wider text-[#44403C]">
          <button
            onClick={() => onNavigate('home')}
            className={`cursor-pointer transition-colors hover:text-[#B32025] ${
              currentView === 'home' ? 'text-[#B32025] border-b-2 border-[#B32025] pb-1 font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('category', 'cars')}
            className={`cursor-pointer transition-colors hover:text-[#B32025] ${
              currentView === 'category-cars' ? 'text-[#B32025] border-b-2 border-[#B32025] pb-1 font-semibold' : ''
            }`}
          >
            Cars
          </button>
          <button
            onClick={() => onNavigate('category', 'bikes')}
            className={`cursor-pointer transition-colors hover:text-[#B32025] ${
              currentView === 'category-bikes' ? 'text-[#B32025] border-b-2 border-[#B32025] pb-1 font-semibold' : ''
            }`}
          >
            Bikes
          </button>
          <button
            onClick={() => onNavigate('category', 'stories')}
            className={`cursor-pointer transition-colors hover:text-[#B32025] ${
              currentView === 'category-stories' ? 'text-[#B32025] border-b-2 border-[#B32025] pb-1 font-semibold' : ''
            }`}
          >
            Stories
          </button>

          {/* Explore Mega Menu Trigger */}
          <div className="relative">
            <button
              onClick={() => setExploreMenuOpen(!exploreMenuOpen)}
              onMouseEnter={() => setExploreMenuOpen(true)}
              className="flex items-center gap-1 cursor-pointer transition-colors hover:text-[#B32025] py-2"
              aria-expanded={exploreMenuOpen}
            >
              <span>Explore</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreMenuOpen ? 'rotate-180 text-[#B32025]' : ''}`} />
            </button>

            {/* Explore Mega Menu Panel */}
            {exploreMenuOpen && (
              <div
                onMouseLeave={() => setExploreMenuOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[860px] bg-[#FFFFFF] border border-[#E7E5E0] shadow-xl p-6 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="grid grid-cols-5 gap-6 text-left">
                  {EXPLORE_MENU_SECTIONS.map((section) => (
                    <div key={section.title} className="space-y-3">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#78716C] border-b border-[#E7E5E0] pb-1.5">
                        {section.title}
                      </h4>
                      <ul className="space-y-2 text-xs normal-case tracking-normal">
                        {section.items.map((item: ExploreMenuItem) => (
                          <li key={item.label}>
                            <button
                              onClick={() => {
                                setExploreMenuOpen(false);
                                if (item.category) {
                                  onNavigate('category', item.category);
                                } else if (item.view === 'specials') {
                                  onNavigate('specials', item.tab);
                                } else if (item.view) {
                                  onNavigate(item.view);
                                }
                              }}
                              className="text-[#44403C] hover:text-[#B32025] hover:translate-x-0.5 transition-all block text-left w-full cursor-pointer"
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#78716C] bg-[#FAF9F6] -mx-6 -mb-6 p-4">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#B32025]" />
                    <span>Browse all topics, marques, racing archives, and historical retrospectives</span>
                  </div>
                  <button
                    onClick={() => {
                      setExploreMenuOpen(false);
                      onNavigate('topics');
                    }}
                    className="text-[#B32025] hover:underline font-semibold cursor-pointer"
                  >
                    View Topic Directory →
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('community')}
            className={`cursor-pointer transition-colors hover:text-[#B32025] ${
              currentView === 'community' ? 'text-[#B32025] border-b-2 border-[#B32025] pb-1 font-semibold' : ''
            }`}
          >
            Community
          </button>
          <button
            onClick={() => onNavigate('events')}
            className={`cursor-pointer transition-colors hover:text-[#B32025] ${
              currentView === 'events' ? 'text-[#B32025] border-b-2 border-[#B32025] pb-1 font-semibold' : ''
            }`}
          >
            Events
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`cursor-pointer transition-colors hover:text-[#B32025] ${
              currentView === 'about' ? 'text-[#B32025] border-b-2 border-[#B32025] pb-1 font-semibold' : ''
            }`}
          >
            About
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#44403C] hover:text-[#B32025] transition-colors cursor-pointer"
            aria-label="Search articles"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('bookmarks')}
            className="relative p-2 text-[#44403C] hover:text-[#B32025] transition-colors cursor-pointer"
            aria-label="Saved Articles"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#B32025] text-white text-[10px] font-medium flex items-center justify-center rounded-full">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenNewsletter}
            className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#B32025] hover:bg-[#8F161A] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            Subscribe
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C1917] hover:text-[#B32025] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-[#E7E5E0] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-wider text-[#1C1917]">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('home'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Home
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('category', 'cars'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Cars
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('category', 'bikes'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Bikes
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('category', 'brands'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Brands
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('category', 'stories'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Stories & Lead Features
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('category', 'history'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              History
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('category', 'technology'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Technology & Engineering
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('category', 'motorsport'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Motorsport
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('specials'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              The Specials (Hall of Fame, Then vs Now)
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('community'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Community
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('events'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Events Calendar
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('journeys'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Featured Journeys
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('reviews'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Drive Reviews & Tech Guides
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('contributor'); }}
              className="text-left py-2 hover:text-[#B32025] border-b border-[#E7E5E0]"
            >
              Become a Contributor
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('about'); }}
              className="text-left py-2 hover:text-[#B32025]"
            >
              About the Magazine
            </button>
            <div className="pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenNewsletter(); }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#B32025] hover:bg-[#8F161A] transition-colors"
              >
                Subscribe to Weekly Edition
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
