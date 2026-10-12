import React from 'react';

interface DentHouseLogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const DentHouseLogo: React.FC<DentHouseLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
}) => {
  const toothWidth = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
  const toothHeight = size === 'sm' ? 32 : size === 'lg' ? 50 : 42;

  const textColorDENT = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const textColorHOUSE = 'text-[#0284C7]';
  const subtextColor = theme === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const lineColor = theme === 'dark' ? 'border-sky-400/40' : 'border-[#0284C7]';

  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtitleSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG stylized Tooth Mark forming 'D' inspired by the brand mark */}
      <svg
        width={toothWidth}
        height={toothHeight}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm"
      >
        <defs>
          <linearGradient id="dentBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="45%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
          <linearGradient id="dentDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        {/* Outer tooth contour ribbon with smooth curves */}
        <path
          d="M48 12 C30 12, 10 24, 8 46 C6 64, 18 88, 28 106 C30 110, 35 110, 36 105 C40 85, 45 68, 50 68 C55 68, 60 85, 64 105 C65 110, 70 110, 72 106 C82 88, 94 64, 92 46 C90 24, 70 12, 52 12 C50 12, 49 12, 48 12 Z"
          stroke="url(#dentBlueGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Dynamic crest loop resembling upper cusp and D letter accent */}
        <path
          d="M26 34 C36 20, 64 20, 74 34 C80 43, 76 60, 68 70 C60 80, 48 85, 38 78"
          stroke="url(#dentDarkGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Subtle white enamel highlight */}
        <path
          d="M20 40 C19 50, 24 64, 30 76"
          stroke="#BAE6FD"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`font-serif tracking-tight font-bold ${titleSize} flex items-baseline`}>
          <span className={textColorDENT}>DENT</span>
          <span className={textColorHOUSE}>HOUSE</span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <div className={`flex-1 border-t ${lineColor}`} />
          <span className={`font-sans uppercase tracking-[0.22em] font-semibold ${subtextColor} ${subtitleSize} whitespace-nowrap`}>
            MARRAKECH
          </span>
          <div className={`flex-1 border-t ${lineColor}`} />
        </div>
      </div>
    </div>
  );
};
