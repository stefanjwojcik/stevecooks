import React from 'react';

interface PixelIconProps {
  type: string;
  size?: number;
  className?: string;
}

const PixelIcon: React.FC<PixelIconProps> = ({ type, size = 64, className = '' }) => {
  const getIcon = () => {
    switch (type) {
      case 'fish':
      case 'salmon':
      case 'shrimp':
      case 'tilapia':
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
            <rect x="8" y="12" width="4" height="4" fill="var(--neon-orange)" />
            <rect x="12" y="8" width="4" height="4" fill="var(--neon-orange)" />
            <rect x="12" y="12" width="4" height="4" fill="var(--pastel-pink)" />
            <rect x="12" y="16" width="4" height="4" fill="var(--neon-orange)" />
            <rect x="16" y="12" width="4" height="4" fill="var(--pastel-pink)" />
            <rect x="16" y="8" width="4" height="4" fill="var(--neon-orange)" />
            <rect x="16" y="16" width="4" height="4" fill="var(--neon-orange)" />
            <rect x="20" y="12" width="4" height="4" fill="var(--neon-orange)" />
            <rect x="24" y="8" width="4" height="4" fill="var(--neon-orange)" />
            <rect x="24" y="16" width="4" height="4" fill="var(--neon-orange)" />
            <rect x="14" y="14" width="2" height="2" fill="var(--dark-bg)" />
          </svg>
        );

      case 'tofu':
      case 'proteins':
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
            <rect x="8" y="8" width="16" height="16" fill="var(--pastel-yellow)" />
            <rect x="8" y="8" width="16" height="4" fill="var(--neon-yellow)" />
            <rect x="8" y="8" width="4" height="16" fill="var(--neon-yellow)" />
            <rect x="20" y="8" width="4" height="16" fill="rgba(0,0,0,0.2)" />
            <rect x="8" y="20" width="16" height="4" fill="rgba(0,0,0,0.2)" />
            <rect x="10" y="10" width="2" height="2" fill="var(--dark-bg)" />
            <rect x="18" y="10" width="2" height="2" fill="var(--dark-bg)" />
            <rect x="14" y="16" width="4" height="2" fill="rgba(0,0,0,0.3)" />
          </svg>
        );

      case 'grain':
      case 'grains':
      case 'rice':
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
            <rect x="10" y="12" width="2" height="4" fill="var(--neon-yellow)" />
            <rect x="14" y="10" width="2" height="6" fill="var(--neon-yellow)" />
            <rect x="18" y="12" width="2" height="4" fill="var(--neon-yellow)" />
            <rect x="12" y="18" width="2" height="3" fill="var(--pastel-yellow)" />
            <rect x="16" y="17" width="2" height="4" fill="var(--pastel-yellow)" />
            <rect x="20" y="18" width="2" height="3" fill="var(--pastel-yellow)" />
            <rect x="8" y="14" width="2" height="3" fill="var(--pastel-yellow)" />
            <rect x="22" y="14" width="2" height="3" fill="var(--pastel-yellow)" />
          </svg>
        );

      case 'bread':
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
            <rect x="6" y="14" width="20" height="10" fill="var(--neon-orange)" />
            <rect x="8" y="12" width="16" height="2" fill="var(--neon-orange)" />
            <rect x="10" y="10" width="12" height="2" fill="var(--neon-orange)" />
            <rect x="8" y="14" width="16" height="6" fill="var(--pastel-yellow)" />
            <rect x="10" y="16" width="2" height="2" fill="rgba(0,0,0,0.1)" />
            <rect x="14" y="17" width="2" height="2" fill="rgba(0,0,0,0.1)" />
            <rect x="19" y="16" width="2" height="2" fill="rgba(0,0,0,0.1)" />
          </svg>
        );

      case 'sauce':
      case 'sauces':
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
            <rect x="12" y="8" width="8" height="2" fill="var(--neon-purple)" />
            <rect x="10" y="10" width="12" height="14" fill="var(--pastel-purple)" />
            <rect x="10" y="10" width="12" height="6" fill="var(--neon-pink)" />
            <rect x="14" y="12" width="2" height="2" fill="rgba(255,255,255,0.5)" />
            <rect x="8" y="24" width="16" height="2" fill="var(--neon-purple)" />
          </svg>
        );

      case 'salad':
      case 'salads':
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
            <rect x="8" y="16" width="16" height="8" fill="var(--pastel-blue)" />
            <rect x="10" y="10" width="4" height="4" fill="var(--neon-green)" />
            <rect x="14" y="12" width="4" height="4" fill="var(--neon-green)" />
            <rect x="18" y="10" width="4" height="4" fill="var(--neon-green)" />
            <rect x="12" y="8" width="4" height="4" fill="var(--pastel-green)" />
            <rect x="16" y="9" width="4" height="4" fill="var(--pastel-green)" />
            <rect x="20" y="14" width="2" height="2" fill="var(--neon-pink)" />
          </svg>
        );

      case 'broth':
      case 'broths':
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
            <rect x="8" y="12" width="16" height="12" fill="var(--pastel-blue)" />
            <rect x="6" y="24" width="20" height="2" fill="var(--neon-blue)" />
            <rect x="10" y="14" width="2" height="1" fill="rgba(255,255,255,0.6)" />
            <rect x="14" y="16" width="3" height="1" fill="rgba(255,255,255,0.6)" />
            <rect x="19" y="15" width="2" height="1" fill="rgba(255,255,255,0.6)" />
            <rect x="12" y="18" width="2" height="1" fill="rgba(255,255,255,0.6)" />
            <rect x="6" y="12" width="2" height="12" fill="var(--neon-blue)" />
            <rect x="24" y="12" width="2" height="12" fill="var(--neon-blue)" />
          </svg>
        );

      case 'meal':
      case 'meals':
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
            <circle cx="16" cy="16" r="12" fill="var(--pastel-pink)" />
            <rect x="12" y="12" width="3" height="3" fill="var(--neon-orange)" />
            <rect x="17" y="11" width="4" height="2" fill="var(--neon-green)" />
            <rect x="11" y="17" width="5" height="3" fill="var(--neon-yellow)" />
            <rect x="18" y="17" width="3" height="4" fill="var(--pastel-purple)" />
            <rect x="4" y="16" width="24" height="2" fill="var(--neon-pink)" />
          </svg>
        );

      default:
        return (
          <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
            <rect x="8" y="8" width="16" height="16" fill="var(--neon-purple)" />
          </svg>
        );
    }
  };

  return <div className="inline-block" style={{ imageRendering: 'pixelated' }}>{getIcon()}</div>;
};

export default PixelIcon;
