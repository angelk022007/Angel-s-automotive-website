import React, { useState } from 'react';
import { X, Mail, CheckCircle2 } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [preferences, setPreferences] = useState({
    heritage: true,
    motorsport: true,
    technology: true,
    journeys: true
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        setName('');
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF9F6] text-[#1C1917] border border-[#E7E5E0] max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#78716C] hover:text-[#1C1917] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B32025]">
            <Mail className="w-4 h-4" />
            <span>The Weekly Dispatch</span>
          </div>
          <h3 className="font-serif text-3xl font-bold tracking-tight text-[#1C1917]">
            The Motor Chronicles Weekly
          </h3>
          <p className="text-xs text-[#57534E] leading-relaxed">
            Stories, machines, and ideas delivered directly to your inbox every Thursday morning. Strictly journalistic, zero promotional spam.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-white border-l-4 border-[#B32025] border border-y-[#E7E5E0] border-r-[#E7E5E0] flex items-center gap-3 text-sm text-[#1C1917] shadow-xs">
            <CheckCircle2 className="w-6 h-6 text-[#B32025] shrink-0" />
            <div>
              <div className="font-bold">Subscription Confirmed</div>
              <div className="text-xs text-[#78716C] mt-0.5">Check your inbox for the inaugural welcome dispatch.</div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">Reader Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full p-3 bg-white text-[#1C1917] placeholder-[#78716C] text-xs border border-[#DDD8CE] focus:outline-none focus:border-[#B32025] shadow-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917]">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full p-3 bg-white text-[#1C1917] placeholder-[#78716C] text-xs border border-[#DDD8CE] focus:outline-none focus:border-[#B32025] shadow-xs"
              />
            </div>

            {/* Reading Preferences */}
            <div className="pt-2 space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917] block">Curated Editorial Desks</label>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#44403C]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.heritage}
                    onChange={(e) => setPreferences({ ...preferences, heritage: e.target.checked })}
                    className="accent-[#B32025]"
                  />
                  <span>Historic Archives</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.motorsport}
                    onChange={(e) => setPreferences({ ...preferences, motorsport: e.target.checked })}
                    className="accent-[#B32025]"
                  />
                  <span>Motorsport Paddock</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.technology}
                    onChange={(e) => setPreferences({ ...preferences, technology: e.target.checked })}
                    className="accent-[#B32025]"
                  />
                  <span>Powertrain & Tech</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.journeys}
                    onChange={(e) => setPreferences({ ...preferences, journeys: e.target.checked })}
                    className="accent-[#B32025]"
                  />
                  <span>Expedition Routes</span>
                </label>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 bg-[#B32025] hover:bg-[#8F161A] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              >
                Confirm Subscription
              </button>
            </div>

            <div className="text-[10px] text-[#78716C] text-center pt-1">
              You may unsubscribe at any time. We honor reader privacy.
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
