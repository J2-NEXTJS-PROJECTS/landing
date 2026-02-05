import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  width = 220, 
  height = 65, 
  className = "" 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 45" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#1d4ed8', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      <path 
        d="M 10.8 13.4 L 36 0.8 L 61.2 13.4 L 61.2 38.6 L 36 51.2 L 10.8 38.6 Z" 
        fill="url(#logoGradient)"
      />
      
      <text 
        x="36" 
        y="26" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="28" 
        fontWeight="700" 
        fill="white" 
        textAnchor="middle"
        dominantBaseline="middle"
      >
        J2
      </text>
      
      <text 
        x="65" 
        y="35" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="38" 
        fontWeight="600" 
        fill="#1f2937"
        letterSpacing="-0.5"
        className="dark:fill-white"
      >
        Systems
      </text>
      
      <line 
        x1="65" 
        y1="37" 
        x2="212" 
        y2="37" 
        stroke="#3b82f6" 
        strokeWidth="2.5"
        opacity="0.3"
      />
    </svg>
  );
};
