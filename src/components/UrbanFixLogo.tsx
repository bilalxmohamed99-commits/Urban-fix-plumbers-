import React from 'react';
import logoImg from '../assets/images/urbanfix_logo_1786645442972.jpg';

interface UrbanFixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  variant?: 'full' | 'icon' | 'badge';
}

export const UrbanFixLogo: React.FC<UrbanFixLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'full',
}) => {
  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-base', sub: 'text-[9px]' },
    md: { img: 'w-10 h-10', text: 'text-xl', sub: 'text-[10px]' },
    lg: { img: 'w-14 h-14', text: 'text-2xl', sub: 'text-xs' },
    xl: { img: 'w-20 h-20', text: 'text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  if (variant === 'icon') {
    return (
      <div className={`relative rounded-xl overflow-hidden shadow-md shrink-0 ${currentSize.img} ${className}`}>
        <img
          src={logoImg}
          alt="Urban Fix Plumbers Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain bg-white"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Circular Logo Image */}
      <div className={`relative rounded-full overflow-hidden border-2 border-orange-500/80 shadow-md shrink-0 bg-white p-0.5 ${currentSize.img}`}>
        <img
          src={logoImg}
          alt="Urban Fix Plumbers Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className={`font-black tracking-tight leading-none ${currentSize.text} font-heading flex items-center`}>
          <span className="text-white">URBAN</span>
          <span className="text-[#FF6600] ml-0.5">FIX</span>
          <span className="text-[#0EA5E9] uppercase text-[10px] tracking-widest font-black ml-1.5 px-1.5 py-0.5 bg-sky-950 rounded border border-sky-500/30">
            PLUMBERS
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] text-slate-300 font-semibold tracking-wider uppercase mt-1">
            Reliable • Professional • On Time
          </span>
        )}
      </div>
    </div>
  );
};
