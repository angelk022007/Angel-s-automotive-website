import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  categoryLabel?: string;
}

const DEFAULT_EDITORIAL_FALLBACK = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80';

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Motor Chronicles Editorial Photography',
  fallbackSrc = DEFAULT_EDITORIAL_FALLBACK,
  className = '',
  categoryLabel,
  ...props
}) => {
  const [errorCount, setErrorCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // If both original and fallback fail, render a stylish editorial magazine graphic block
  if (errorCount >= 2 || !src) {
    return (
      <div className={`bg-[#EAE6DD] flex flex-col items-center justify-center p-6 text-center select-none ${className}`}>
        <div className="w-10 h-10 rounded-full border border-[#D6D3D1] flex items-center justify-center text-[#B32025] mb-2 bg-white/70">
          <Compass className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#78716C] font-semibold">
          Motor Chronicles Archive
        </span>
        {alt && (
          <span className="text-xs font-serif text-[#1C1917] mt-1 line-clamp-2 max-w-[80%] italic">
            {alt}
          </span>
        )}
      </div>
    );
  }

  const currentSrc = errorCount === 0 ? src : fallbackSrc;

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => {
        setErrorCount((prev) => prev + 1);
      }}
      onLoad={() => {
        setLoaded(true);
      }}
      className={`${className} ${loaded ? 'opacity-100' : 'opacity-90'} transition-opacity duration-300`}
      {...props}
    />
  );
};
