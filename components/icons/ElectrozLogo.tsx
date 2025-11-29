
import React from 'react';

export const ElectrozLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Group for the main logo part */}
    <g>
      {/* "ELECTRO" Text */}
      <text 
        x="10" 
        y="65" 
        fontFamily="'Arial Black', 'Impact', sans-serif" 
        fontSize="60" 
        fontWeight="900" 
        fill="#27345b"
      >
        ELECTRO
      </text>

      {/* The Z graphic - orange */}
      <g fill="#F97316">
        <path d="M255 20 L305 20 L245 70 L195 70 Z" />
        <path d="M305 20 L355 20 L295 70 L245 70 Z" />
        <path d="M355 20 L420 20 L415 30 L350 30 Z" />
      </g>

      {/* "smart" text - styled as per image */}
      <text 
        x="415" 
        y="80" 
        fontFamily="'Arial', sans-serif" 
        fontSize="20" 
        fontWeight="bold" 
        fill="#F97316"
        textAnchor="end"
      >
        smart
      </text>
    </g>
    
    {/* Group for the "ASSISTANT APP" part */}
    <g transform="translate(0, 80)">
        {/* Blue rectangle */}
        <rect x="70" y="0" width="280" height="45" rx="5" fill="#0ea5e9" />
        
        {/* "ASSISTANT" Text with black 'I' */}
        <text 
            x="210"
            y="32" 
            fontFamily="'Arial Black', 'Impact', sans-serif" 
            fontSize="24" 
            fill="white" 
            letterSpacing="1"
            textAnchor="middle"
        >
            <tspan>ASS</tspan>
            <tspan fill="black">I</tspan>
            <tspan>STANT</tspan>
        </text>

        {/* "APP" Text with glow effect */}
        <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <text 
            x="210" 
            y="58"
            fontFamily="'Arial', sans-serif" 
            fontSize="22" 
            fill="white" 
            fontWeight="bold"
            filter="url(#glow)"
            textAnchor="middle"
        >
            APP
        </text>
    </g>
  </svg>
);
