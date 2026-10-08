import React from 'react';
import { Shield, BookOpen, ChevronRight, Award, Compass, Heart } from 'lucide-react';
import { AUTHORS } from '../data/articles';

interface AboutViewProps {
  onNavigate: (view: string, payload?: any) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-24 text-[#1C1917]">
      
      {/* Header */}
      <section className="bg-[#F4F1EA] text-[#1C1917] pt-12 pb-16 border-b border-[#E7E5E0]">
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
                About the Publication
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Charter & Masthead
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917]">
              MOTOR CHRONICLES
            </h1>
            <p className="text-lg text-[#57534E] font-serif italic">
              Stories Behind the Machines.
            </p>
            <p className="text-sm text-[#57534E] leading-relaxed max-w-2xl pt-2 font-normal">
              Motor Chronicles is an independent automotive digital publication exploring the stories, machines, people, and ideas shaping the automotive world.
            </p>
          </div>

        </div>
      </section>

      {/* Main Narrative */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Core Mission */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#1C1917] border-b border-[#E7E5E0] pb-4">
            Our Editorial Purpose
          </h2>
          <div className="text-base sm:text-[17px] text-[#44403C] leading-[1.8] space-y-4">
            <p className="drop-cap">
              The modern media landscape is inundated with rapid-fire press releases, speculative CGI renderings, and generic vehicle marketplace listings. Motor Chronicles was founded to restore patience, literary craftsmanship, and technical rigor to automotive journalism.
            </p>
            <p>
              We believe the automobile is the most complex cultural and mechanical artifact of industrial civilization. It represents the meeting point of physics, chemistry, human ambition, national identity, artistic expression, and visceral emotion. Whether dissecting the failure of 1960s rotary seals or celebrating a dawn drive over an alpine pass, our mission is to tell the complete human and engineering truth behind every wheel turned.
            </p>
          </div>
        </section>

        {/* What We Cover Grid */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#1C1917] border-b border-[#E7E5E0] pb-4">
            What Motor Chronicles Explores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#44403C]">
            <div className="p-5 bg-white border border-[#E7E5E0] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-[#1C1917] uppercase tracking-wider text-sm">
                <BookOpen className="w-4 h-4 text-[#B32025]" />
                Historic Archives & Inventions
              </div>
              <p className="text-[#78716C] leading-relaxed">
                Examining forgotten patents, pioneer expeditions, regulatory turning points, and legendary race cars that altered transport history.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#E7E5E0] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-[#1C1917] uppercase tracking-wider text-sm">
                <Shield className="w-4 h-4 text-[#B32025]" />
                Powertrain & Computing Architecture
              </div>
              <p className="text-[#78716C] leading-relaxed">
                Objective investigations into battery chemistry, aerodynamics, steer-by-wire, synthetic e-fuels, and software-defined chassis dynamics.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#E7E5E0] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-[#1C1917] uppercase tracking-wider text-sm">
                <Award className="w-4 h-4 text-[#B32025]" />
                Motorsport Crucible & Grand Prix
              </div>
              <p className="text-[#78716C] leading-relaxed">
                Paddock reportage from Le Mans, Formula 1, WRC, and grassroots club racing where engineering is tested at the threshold of physical destruction.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#E7E5E0] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-[#1C1917] uppercase tracking-wider text-sm">
                <Compass className="w-4 h-4 text-[#B32025]" />
                Communities, Culture & Journeys
              </div>
              <p className="text-[#78716C] leading-relaxed">
                Documenting the human bonds formed around open engine bays, desert overland convoys, regional owner registries, and scenic mountain passes.
              </p>
            </div>
          </div>
        </section>

        {/* Masthead */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#1C1917] border-b border-[#E7E5E0] pb-4">
            The Editorial Masthead
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(AUTHORS).map((author) => (
              <div key={author.id} className="p-5 bg-white border border-[#E7E5E0] flex items-start gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-full bg-[#EAE6DD] text-[#1C1917] border border-[#DDD8CE] flex items-center justify-center font-serif text-lg font-bold shrink-0">
                  {author.name.charAt(0)}
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-bold text-[#1C1917]">{author.name}</h3>
                  <div className="text-[11px] text-[#B32025] font-semibold uppercase tracking-wider">{author.role}</div>
                  <p className="text-xs text-[#78716C] leading-relaxed pt-1">{author.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Integrity Pledge */}
        <section className="p-8 bg-white border border-[#E7E5E0] border-l-4 border-l-[#B32025] space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B32025]">
            <Heart className="w-4 h-4" />
            <span>Our Independence Pledge</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#1C1917]">
            Uncompromised Independence
          </h3>
          <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
            Motor Chronicles does not accept paid editorial placement, sponsored reviews masquerading as journalism, or manufacturer review embargoes that compromise critical evaluation. When we review a vehicle, test brake friction pads, or document an engineering failure, our allegiance is solely to our readers and to the truth of the machine.
          </p>
        </section>

      </main>
    </div>
  );
};
