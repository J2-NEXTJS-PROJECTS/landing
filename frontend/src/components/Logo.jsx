import React from 'react';

const Logo = ({ className = "", width = 200, height = 60 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 60" 
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
        d="M 15 10 L 30 2 L 45 10 L 45 26 L 30 34 L 15 26 Z" 
        fill="url(#logoGradient)"
      />
      
      {/* J2 text in white inside the hexagon */}
      <text 
        x="30" 
        y="24" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="16" 
        fontWeight="700" 
        fill="white" 
        textAnchor="middle"
      >
        J2
      </text>
      
      {/* Systems text - modern sans-serif */}
      <text 
        x="55" 
        y="26" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="24" 
        fontWeight="600" 
        fill="#1f2937"
        letterSpacing="-0.5"
      >
        Systems
      </text>
      
      {/* Subtle accent line */}
      <line 
        x1="55" 
        y1="32" 
        x2="155" 
        y2="32" 
        stroke="#3b82f6" 
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  );
};

export default Logo;
