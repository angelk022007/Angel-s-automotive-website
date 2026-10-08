import React, { useState } from 'react';
import { PenTool, CheckCircle2, ChevronRight, FileText, Send } from 'lucide-react';

interface ContributorViewProps {
  onNavigate: (view: string, payload?: any) => void;
}

export const ContributorView: React.FC<ContributorViewProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialty: 'Historic Archives & Heritage',
    bio: '',
    pitchTitle: '',
    pitchOutline: '',
    portfolioLink: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                Become a Contributor
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Editorial Desk
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
              Write for Motor Chronicles
            </h1>
            <p className="text-sm text-[#57534E] leading-relaxed max-w-2xl font-normal">
              We commission automotive historians, mechanical engineers, seasoned paddock reporters, and observant essayists who prioritize technical rigour, evocative prose, and original inquiry over clickbait.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Guidelines Sidebar */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E7E5E0] p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B32025]">
              <FileText className="w-4 h-4" />
              <span>Editorial Standards & Guidelines</span>
            </div>

            <ul className="space-y-3 text-xs text-[#44403C] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#B32025] font-bold">01.</span>
                <span><strong>No AI-generated prose:</strong> Every piece is verified by our editorial desk for original observation and personal voice.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B32025] font-bold">02.</span>
                <span><strong>Technical Accuracy:</strong> If citing thermodynamic efficiencies, torque curves, or historical race dates, cite verifiable archives or engineering standards.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B32025] font-bold">03.</span>
                <span><strong>Word Length:</strong> Commissioned features range from 800 to 2,000 words. We prioritize depth and narrative cadence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B32025] font-bold">04.</span>
                <span><strong>Competitive Compensation:</strong> Motor Chronicles pays professional word rates upon acceptance.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#F5F3ED] border border-[#E7E5E0] text-xs text-[#57534E] space-y-2 shadow-xs">
            <h4 className="font-bold text-[#1C1917] uppercase tracking-wider">Current Priority Pitches:</h4>
            <p>• Pre-war Grand Prix mechanics & clandestine fuels</p>
            <p>• Solid-state battery lifecycle teardowns</p>
            <p>• Transcontinental route guides through South America</p>
            <p>• Untold stories of female rally navigators in Group B</p>
          </div>
        </aside>

        {/* Application & Pitch Form */}
        <div className="lg:col-span-7 bg-white border border-[#E7E5E0] p-6 sm:p-10 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#B32025] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                Pitch Dossier Received
              </h3>
              <p className="text-xs text-[#78716C] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our senior features editor reviews submissions every Tuesday and Thursday. If your pitch aligns with our editorial calendar, we will reach out via {formData.email}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-[#B32025] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-[#8F161A] shadow-xs"
              >
                Submit Another Pitch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-[#E7E5E0] pb-3">
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-[#B32025]" />
                  <span>Contributor Application & Pitch</span>
                </h3>
                <p className="text-xs text-[#78716C] mt-1">Submit your credentials and initial feature abstract</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sebastian Davies"
                    className="w-full p-2.5 text-xs bg-white text-[#1C1917] placeholder-[#78716C] border border-[#DDD8CE] focus:outline-none focus:border-[#B32025] shadow-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.davies@motoringpress.com"
                    className="w-full p-2.5 text-xs bg-white text-[#1C1917] placeholder-[#78716C] border border-[#DDD8CE] focus:outline-none focus:border-[#B32025] shadow-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">Primary Beat / Domain</label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full p-2.5 text-xs bg-white text-[#1C1917] border border-[#DDD8CE] focus:outline-none focus:border-[#B32025] shadow-xs"
                >
                  <option>Historic Archives & Heritage</option>
                  <option>Powertrain Engineering & Software</option>
                  <option>Motorsport & Grand Prix</option>
                  <option>Design Criticism & Culture</option>
                  <option>Expedition Routes & Travel</option>
                  <option>Motorcycles & Two-Wheeled Heritage</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">Proposed Feature Headline / Title</label>
                <input
                  type="text"
                  required
                  value={formData.pitchTitle}
                  onChange={(e) => setFormData({ ...formData, pitchTitle: e.target.value })}
                  placeholder="e.g. The Secret Fuel Formulas of 1930s Silver Arrows"
                  className="w-full p-2.5 text-xs bg-white text-[#1C1917] placeholder-[#78716C] border border-[#DDD8CE] focus:outline-none focus:border-[#B32025] shadow-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">Pitch Abstract (3-4 paragraphs)</label>
                <textarea
                  rows={4}
                  required
                  value={formData.pitchOutline}
                  onChange={(e) => setFormData({ ...formData, pitchOutline: e.target.value })}
                  placeholder="Outline the core thesis, key historical or engineering sources you will consult, and why this story matters now..."
                  className="w-full p-2.5 text-xs bg-white text-[#1C1917] placeholder-[#78716C] border border-[#DDD8CE] focus:outline-none focus:border-[#B32025] shadow-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">Portfolio or Writing Samples Link</label>
                <input
                  type="url"
                  value={formData.portfolioLink}
                  onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                  placeholder="https://yourportfolio.com or Substack URL"
                  className="w-full p-2.5 text-xs bg-white text-[#1C1917] placeholder-[#78716C] border border-[#DDD8CE] focus:outline-none focus:border-[#B32025] shadow-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Pitch to Editorial Board</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </main>

    </div>
  );
};
