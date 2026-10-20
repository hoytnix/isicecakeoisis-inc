import React from 'react';

interface AmbientGlowProps {
  className?: string;
  style?: React.CSSProperties;
}

export const AmbientGlow: React.FC<AmbientGlowProps> = ({ className = '', style }) => {
  return (
    <div
      className={`ambient-glow animate-pulse-glow ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};
