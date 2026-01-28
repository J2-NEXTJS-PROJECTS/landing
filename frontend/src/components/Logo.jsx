import React from 'react';

const Logo = ({ className = "", width = 240, height = 70 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Geometric shape - modern hexagon with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#1d4ed8', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      {/* Modern hexagonal badge */}
      <path 
        d="M 18 12 L 36 3 L 54 12 L 54 30 L 36 39 L 18 30 Z" 
        fill="url(#logoGradient)"
      />
      
      {/* J2 text in white inside the hexagon */}
      <text 
        x="36" 
        y="27" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="19" 
        fontWeight="700" 
        fill="white" 
        textAnchor="middle"
      >
        J2
      </text>
      
      {/* Systems text - modern sans-serif */}
      <text 
        x="65" 
        y="30" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="28" 
        fontWeight="600" 
        fill="#1f2937"
        letterSpacing="-0.5"
      >
        Systems
      </text>
      
      {/* Subtle accent line */}
      <line 
        x1="65" 
        y1="37" 
        x2="185" 
        y2="37" 
        stroke="#3b82f6" 
        strokeWidth="2.5"
        opacity="0.3"
      />
    </svg>
  );
};

export default Logo;