import React from 'react';

interface MbGuitarLogoProps {
  className?: string;
  size?: number;
}

export const MbGuitarLogo: React.FC<MbGuitarLogoProps> = ({
  className = '',
  size = 36,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-full shrink-0 ${className}`}
      aria-label="MB Guitar Logo"
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="98" fill="#0c0e12" />
      
      {/* Subtle reddish-burgundy accent ring matching logo */}
      <circle cx="100" cy="100" r="95" stroke="#8c2b2b" strokeWidth="2.5" />

      {/* Bold M on the left */}
      <text
        x="38"
        y="124"
        fill="#FFFFFF"
        fontFamily="sans-serif, Arial, Helvetica"
        fontSize="68"
        fontWeight="900"
        letterSpacing="-2"
        textAnchor="middle"
      >
        M
      </text>

      {/* Bold B on the right */}
      <text
        x="162"
        y="124"
        fill="#FFFFFF"
        fontFamily="sans-serif, Arial, Helvetica"
        fontSize="68"
        fontWeight="900"
        letterSpacing="-2"
        textAnchor="middle"
      >
        B
      </text>

      {/* Central Electric Guitar Silhouette in crisp white */}
      <g fill="#FFFFFF" transform="translate(0, 0)">
        {/* Headstock at top with 6 tuning pegs */}
        {/* Pegs */}
        <circle cx="91" cy="42" r="2.2" fill="#FFFFFF" />
        <circle cx="90" cy="48" r="2.2" fill="#FFFFFF" />
        <circle cx="91" cy="54" r="2.2" fill="#FFFFFF" />
        <circle cx="93" cy="60" r="2.2" fill="#FFFFFF" />
        <circle cx="107" cy="48" r="2" fill="#FFFFFF" />
        <circle cx="107" cy="55" r="2" fill="#FFFFFF" />

        {/* Headstock body */}
        <path
          d="M 95 38 C 93 40 94 62 96 64 L 104 64 C 106 62 106 43 103 38 C 99 36 96 36 95 38 Z"
          fill="#FFFFFF"
        />

        {/* Guitar Neck / Fretboard */}
        <rect x="96" y="64" width="8" height="54" fill="#FFFFFF" />
        
        {/* Fret lines in dark overlay */}
        <line x1="96" y1="72" x2="104" y2="72" stroke="#0c0e12" strokeWidth="1" />
        <line x1="96" y1="80" x2="104" y2="80" stroke="#0c0e12" strokeWidth="1" />
        <line x1="96" y1="88" x2="104" y2="88" stroke="#0c0e12" strokeWidth="1" />
        <line x1="96" y1="96" x2="104" y2="96" stroke="#0c0e12" strokeWidth="1" />
        <line x1="96" y1="104" x2="104" y2="104" stroke="#0c0e12" strokeWidth="1" />
        <line x1="96" y1="112" x2="104" y2="112" stroke="#0c0e12" strokeWidth="1" />

        {/* Electric Guitar Solid Body with Double Cutaway */}
        <path
          d="M 96 118 
             C 90 114 84 102 82 106 
             C 80 110 84 122 83 130 
             C 81 142 84 156 93 162 
             C 97 165 103 165 107 162 
             C 116 156 119 142 117 130 
             C 116 122 120 110 118 106 
             C 116 102 110 114 104 118 
             Z"
          fill="#FFFFFF"
        />

        {/* Pickups (dark cutouts) */}
        <rect x="95" y="124" width="10" height="4" rx="1" fill="#0c0e12" />
        <rect x="95" y="132" width="10" height="4" rx="1" fill="#0c0e12" />
        
        {/* Bridge */}
        <rect x="94" y="142" width="12" height="4" rx="0.5" fill="#0c0e12" />

        {/* Volume & Tone Knobs */}
        <circle cx="111" cy="144" r="2" fill="#0c0e12" />
        <circle cx="109" cy="151" r="2" fill="#0c0e12" />
      </g>
    </svg>
  );
};
