import React, { useState } from 'react';
import { Star, ChevronRight, Wrench, Sparkles, Check, AlertCircle } from 'lucide-react';
import { CAR_REVIEWS, PRODUCT_GUIDES } from '../data/reviews';

interface ReviewsViewProps {
  onNavigate: (view: string, payload?: any) => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'drives' | 'parts' | 'detailing'>('drives');

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
                Reviews & Technical Guides
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Independent Technical Evaluation
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
              Drive Reviews & Technical Guides
            </h1>
            <p className="text-sm text-[#57534E] leading-relaxed max-w-2xl">
              Unvarnished driving impressions, brake friction analyses, paint protection science, and enthusiast equipment testing. Zero commercial sponsorship interference.
            </p>
          </div>

          {/* Sub Tabs */}
          <div className="pt-6 border-t border-[#E7E5E0] flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('drives')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border ${
                activeTab === 'drives'
                  ? 'bg-[#B32025] text-white border-[#B32025]'
                  : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
              }`}
            >
              Drive Reviews
            </button>
            <button
              onClick={() => setActiveTab('parts')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border ${
                activeTab === 'parts'
                  ? 'bg-[#B32025] text-white border-[#B32025]'
                  : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
              }`}
            >
              Auto Parts & Engineering
            </button>
            <button
              onClick={() => setActiveTab('detailing')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border ${
                activeTab === 'detailing'
                  ? 'bg-[#B32025] text-white border-[#B32025]'
                  : 'bg-white text-[#1C1917] border-[#E7E5E0] hover:border-[#B32025]'
              }`}
            >
              Detailing & Paint Protection
            </button>
          </div>

        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Drive Reviews */}
        {activeTab === 'drives' && (
          <div className="space-y-16">
            <div className="border-b border-[#E7E5E0] pb-4 flex items-center justify-between">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Road & Circuit Evaluations
              </h2>
              <span className="text-xs text-[#78716C]">Motor Chronicles 10-Point Score Standard</span>
            </div>

            <div className="space-y-16">
              {CAR_REVIEWS.map((rev) => (
                <article
                  key={rev.id}
                  className="bg-white border border-[#E7E5E0] p-6 sm:p-10 shadow-xs space-y-8"
                >
                  {/* Top Bar with Score */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7E5E0] pb-6">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#B32025] font-semibold">{rev.category}</div>
                      <h3 className="font-serif text-3xl font-bold text-[#1C1917]">{rev.vehicle}</h3>
                      <div className="text-xs text-[#78716C] mt-1 font-mono">Model Year: {rev.modelYear} · {rev.priceContext}</div>
                    </div>

                    <div className="flex items-center gap-3 bg-[#F5F3ED] p-3 border border-[#E7E5E0] self-start sm:self-auto">
                      <Star className="w-5 h-5 text-[#B32025] fill-current" />
                      <div>
                        <div className="text-xl font-mono font-bold text-[#1C1917]">{rev.rating.toFixed(1)} <span className="text-xs text-[#78716C] font-normal">/ 10</span></div>
                        <div className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold">Editorial Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Image & Verdict */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                      <img
                        src={rev.image}
                        alt={rev.vehicle}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                      <div className="p-4 bg-[#F4F1EA] text-[#1C1917] border-l-4 border-[#B32025] border border-y-[#E7E5E0] border-r-[#E7E5E0]">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#B32025] mb-1">Editorial Verdict</div>
                        <p className="text-sm italic font-serif text-[#1C1917]">{rev.verdict}</p>
                      </div>

                      <div className="space-y-2 text-xs text-[#44403C] leading-relaxed">
                        <h4 className="font-bold uppercase tracking-wider text-[#1C1917]">Driving Dynamics & Steering Feedback</h4>
                        <p>{rev.performanceExperience}</p>
                      </div>

                      <div className="space-y-2 text-xs text-[#44403C] leading-relaxed">
                        <h4 className="font-bold uppercase tracking-wider text-[#1C1917]">Cabin Architecture & Ergonomics</h4>
                        <p>{rev.interiorTech}</p>
                      </div>
                    </div>
                  </div>

                  {/* Strengths & Limitations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E7E5E0] text-xs">
                    <div className="space-y-2 p-4 bg-[#F5F3ED] border-l-2 border-emerald-600 border border-y-[#E7E5E0] border-r-[#E7E5E0]">
                      <h4 className="font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600" />
                        Key Dynamic Strengths
                      </h4>
                      <ul className="space-y-1.5 text-[#44403C]">
                        {rev.strengths.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 p-4 bg-[#F5F3ED] border-l-2 border-[#B32025] border border-y-[#E7E5E0] border-r-[#E7E5E0]">
                      <h4 className="font-bold uppercase tracking-wider text-[#B32025] flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-[#B32025]" />
                        Critical Limitations
                      </h4>
                      <ul className="space-y-1.5 text-[#44403C]">
                        {rev.limitations.map((l, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#B32025] font-bold">•</span>
                            <span>{l}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </article>
              ))}
            </div>
          </div>
        )}

        {/* Parts & Detailing Guides */}
        {(activeTab === 'parts' || activeTab === 'detailing') && (
          <div className="space-y-12">
            <div className="border-b border-[#E7E5E0] pb-4">
              <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
                Technical Guides & Enthusiast Gear
              </h2>
              <p className="text-xs text-[#78716C] uppercase tracking-wider mt-1">
                Objective mechanical teardowns, friction material breakdowns, and detailing chemistry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCT_GUIDES.map((g) => (
                <div key={g.id} className="bg-white border border-[#E7E5E0] p-6 space-y-4 flex flex-col justify-between shadow-xs">
                  <div className="space-y-3">
                    <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                      <img
                        src={g.image}
                        alt={g.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#B32025] font-semibold uppercase tracking-wider">
                      {g.type === 'detailing' ? <Sparkles className="w-3.5 h-3.5" /> : <Wrench className="w-3.5 h-3.5" />}
                      <span>{g.category}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1C1917] leading-snug">
                      {g.title}
                    </h3>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {g.summary}
                    </p>
                    <div className="pt-2 border-t border-[#E7E5E0] space-y-1.5 text-xs text-[#78716C]">
                      <div className="font-semibold text-[#1C1917]">Editorial Assessment:</div>
                      {g.guidePoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[#44403C]">
                          <span className="text-[#B32025]">✓</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {g.recommendedChoice && (
                    <div className="p-3 bg-[#F5F3ED] border-l-2 border-[#1C1917] border border-y-[#E7E5E0] border-r-[#E7E5E0] text-xs">
                      <span className="font-bold text-[#1C1917] block">Tested Benchmark:</span>
                      <span className="text-[#57534E]">{g.recommendedChoice}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
