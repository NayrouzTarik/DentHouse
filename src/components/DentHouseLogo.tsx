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
  // Balanced sizing so the logo mark and typography are crisp and proportional
  const heightClasses =
    size === 'sm'
      ? 'h-8 sm:h-9'
      : size === 'lg'
      ? 'h-13 sm:h-16'
      : 'h-10 sm:h-12';

  const logoSrc =
    theme === 'dark'
      ? '/images/logo-dark-mode.png'
      : '/images/logo-transparent.png';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Dent House Marrakech"
        className={`${heightClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
        onError={(e) => {
          // Robust fallback to root logo.png if customized version fails
          const target = e.currentTarget;
          if (!target.src.endsWith('/images/logo.png')) {
            target.src = '/images/logo.png';
          }
        }}
      />
    </div>
  );
};
