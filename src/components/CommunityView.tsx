import React, { useState } from 'react';
import { Users, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { COMMUNITIES } from '../data/communities';
import { Community } from '../types';

interface CommunityViewProps {
  onNavigate: (view: string, payload?: any) => void;
}

export const CommunityView: React.FC<CommunityViewProps> = ({ onNavigate }) => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [activeCommunity, setActiveCommunity] = useState<Community | null>(null);
  const [joinedCommunities, setJoinedCommunities] = useState<string[]>([]);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const filtered = COMMUNITIES.filter(c => {
    const matchRegion = selectedRegion === 'All' || c.region === selectedRegion || c.region === 'International';
    const matchType = selectedType === 'All' || c.vehicleType === selectedType;
    return matchRegion && matchType;
  });

  const handleJoin = (id: string) => {
    if (!joinedCommunities.includes(id)) {
      setJoinedCommunities([...joinedCommunities, id]);
    }
    setJoinSuccess(true);
    setTimeout(() => setJoinSuccess(false), 3000);
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
                Community Hub
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B32025]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">
                Guilds, Registries & Clubs
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
              Motor Chronicles Community
            </h1>
            <p className="text-sm text-[#57534E] leading-relaxed max-w-2xl font-normal">
              Connecting regional owner groups, historic preservation registries, overland trail builders, and grassroots motorsport circles. More than a machine: human connection built on mechanical craft.
            </p>
          </div>

          {/* Filtering Engine */}
          <div className="pt-6 border-t border-[#E7E5E0] flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#78716C] uppercase font-semibold">Region:</span>
              <div className="flex items-center gap-1 bg-[#EAE6DD] p-1 border border-[#DDD8CE]">
                {['All', 'North', 'West', 'East', 'International'].map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1 font-medium transition-colors cursor-pointer ${
                      selectedRegion === reg ? 'bg-[#B32025] text-white shadow-xs' : 'text-[#1C1917] hover:text-[#B32025]'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#78716C] uppercase font-semibold">Vehicle Focus:</span>
              <div className="flex items-center gap-1 bg-[#EAE6DD] p-1 border border-[#DDD8CE]">
                {['All', 'Classics', 'Off-Road / 4x4', 'Track / Racing', 'Bikes', 'EVs'].map((typ) => (
                  <button
                    key={typ}
                    onClick={() => setSelectedType(typ)}
                    className={`px-3 py-1 font-medium transition-colors cursor-pointer ${
                      selectedType === typ ? 'bg-[#B32025] text-white shadow-xs' : 'text-[#1C1917] hover:text-[#B32025]'
                    }`}
                  >
                    {typ}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E0]">
          <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
            Registered Guilds & Chapters ({filtered.length})
          </h2>
          <span className="text-xs text-[#78716C]">
            Showing authenticated owner collectives
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((comm) => {
            const isJoined = joinedCommunities.includes(comm.id);
            return (
              <div
                key={comm.id}
                className="bg-white border border-[#E7E5E0] p-6 space-y-4 hover:border-[#B32025]/50 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="aspect-[16/10] bg-[#EAE6DD] overflow-hidden border border-[#E7E5E0]">
                    <img
                      src={comm.image}
                      alt={comm.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#78716C] border-b border-[#E7E5E0] pb-2">
                    <span className="text-[#B32025] font-semibold uppercase tracking-wider">{comm.categoryLabel}</span>
                    <span className="font-mono">Est. {comm.established}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917] leading-snug">
                    {comm.name}
                  </h3>

                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {comm.description}
                  </p>

                  <div className="pt-2 space-y-1 text-xs text-[#78716C]">
                    <div className="flex items-center gap-1.5 text-[#1C1917]">
                      <MapPin className="w-3.5 h-3.5 text-[#B32025]" />
                      <span>{comm.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono">
                      <Users className="w-3.5 h-3.5 text-[#78716C]" />
                      <span>{comm.membersCount.toLocaleString()} Verified Members</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E5E0] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveCommunity(comm)}
                    className="text-xs font-semibold uppercase text-[#1C1917] hover:text-[#B32025] transition-colors cursor-pointer"
                  >
                    View Charter →
                  </button>
                  <button
                    onClick={() => handleJoin(comm.id)}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs ${
                      isJoined 
                        ? 'bg-emerald-700 text-white' 
                        : 'bg-[#B32025] hover:bg-[#8F161A] text-white'
                    }`}
                  >
                    {isJoined ? 'Joined' : 'Join Guild'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </main>

      {/* Community Detail Modal */}
      {activeCommunity && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF9F6] max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-[#E7E5E0] shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#E7E5E0] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B32025]">Community Dossier</span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] mt-1">{activeCommunity.name}</h3>
              </div>
              <button 
                onClick={() => setActiveCommunity(null)}
                className="text-[#78716C] hover:text-[#1C1917] text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#44403C] leading-relaxed">
              {activeCommunity.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">Core Highlights & Initiatives</h4>
              <ul className="space-y-1.5 text-xs text-[#44403C]">
                {activeCommunity.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#B32025] font-bold">―</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white border border-[#E7E5E0] text-xs text-[#57534E] space-y-1 shadow-xs">
              <div className="font-semibold text-[#1C1917]">Recent Activity & Dispatch:</div>
              <p>{activeCommunity.recentActivity}</p>
            </div>

            {joinSuccess && (
              <div className="p-3 bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2 border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>You have officially joined {activeCommunity.name}. Welcome to the guild!</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#E7E5E0]">
              <button
                onClick={() => setActiveCommunity(null)}
                className="px-4 py-2 border border-[#E7E5E0] text-xs font-semibold uppercase text-[#1C1917] hover:bg-[#F5F3ED] cursor-pointer shadow-xs"
              >
                Close
              </button>
              <button
                onClick={() => handleJoin(activeCommunity.id)}
                className="px-6 py-2 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              >
                {joinedCommunities.includes(activeCommunity.id) ? 'Already a Member' : 'Confirm Registration'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
