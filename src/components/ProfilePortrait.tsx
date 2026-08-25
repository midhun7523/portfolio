import React from 'react';

export const ProfilePortrait: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full object-cover select-none ${className}`}
      aria-label="Portrait of Midhun Balaji"
    >
      <defs>
        {/* Soft Studio Background Gradient */}
        <radialGradient id="bgGrad" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#f4f6f8" />
          <stop offset="70%" stopColor="#e2e8ee" />
          <stop offset="100%" stopColor="#cfd7de" />
        </radialGradient>

        {/* Skin Gradient & Shading */}
        <linearGradient id="skinTone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c8926a" />
          <stop offset="60%" stopColor="#b9825b" />
          <stop offset="100%" stopColor="#a36e47" />
        </linearGradient>

        <linearGradient id="skinHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d8a37b" />
          <stop offset="100%" stopColor="#be855c" />
        </linearGradient>

        {/* Hair Gradient */}
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1f1a18" />
          <stop offset="60%" stopColor="#120f0e" />
          <stop offset="100%" stopColor="#080707" />
        </linearGradient>

        {/* Shirt Gradient */}
        <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22252a" />
          <stop offset="40%" stopColor="#141619" />
          <stop offset="100%" stopColor="#0d0e10" />
        </linearGradient>

        {/* Subtle shadow filter */}
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Clean Studio Background */}
      <rect width="400" height="400" fill="url(#bgGrad)" />

      {/* Subtle Background Glow behind head */}
      <circle cx="200" cy="180" r="140" fill="#ffffff" opacity="0.6" />

      {/* Black Button-down Shirt & Shoulders */}
      <g filter="url(#softShadow)">
        {/* Shoulders / Torso */}
        <path
          d="M 60 400 
             C 65 330 90 280 145 265 
             L 200 295 
             L 255 265 
             C 310 280 335 330 340 400 
             Z"
          fill="url(#shirtGrad)"
        />

        {/* Shirt Collar Left */}
        <path
          d="M 145 265 L 180 320 L 200 295 L 175 255 Z"
          fill="#1c1f24"
        />

        {/* Shirt Collar Right */}
        <path
          d="M 255 265 L 220 320 L 200 295 L 225 255 Z"
          fill="#252930"
        />

        {/* Center Placket & Buttons */}
        <line x1="200" y1="295" x2="200" y2="400" stroke="#0a0b0d" strokeWidth="2" />
        <circle cx="200" cy="335" r="3.5" fill="#3a3e46" stroke="#0a0b0d" strokeWidth="1" />
        <circle cx="200" cy="375" r="3.5" fill="#3a3e46" stroke="#0a0b0d" strokeWidth="1" />
      </g>

      {/* Neck & Adam's apple shadow */}
      <path
        d="M 172 230 L 172 270 C 172 285 228 285 228 270 L 228 230 Z"
        fill="#9e6741"
      />
      {/* Neck highlight */}
      <path
        d="M 180 235 L 180 265 C 180 275 220 275 220 265 L 220 235 Z"
        fill="url(#skinTone)"
      />

      {/* Ears */}
      {/* Left Ear */}
      <ellipse cx="132" cy="188" rx="14" ry="24" fill="#b9825b" transform="rotate(-5 132 188)" />
      <ellipse cx="134" cy="188" rx="8" ry="14" fill="#9e6741" transform="rotate(-5 134 188)" />
      {/* Right Ear */}
      <ellipse cx="268" cy="188" rx="14" ry="24" fill="#b9825b" transform="rotate(5 268 188)" />
      <ellipse cx="266" cy="188" rx="8" ry="14" fill="#9e6741" transform="rotate(5 266 188)" />

      {/* Head / Face Oval Structure */}
      <path
        d="M 136 160 
           C 136 105 160 85 200 85 
           C 240 85 264 105 264 160 
           C 264 210 248 248 200 248 
           C 152 248 136 210 136 160 Z"
        fill="url(#skinTone)"
      />

      {/* Face highlights (cheekbones and forehead) */}
      <ellipse cx="200" cy="135" rx="42" ry="30" fill="url(#skinHighlight)" opacity="0.4" />
      <ellipse cx="168" cy="182" rx="18" ry="12" fill="url(#skinHighlight)" opacity="0.45" />
      <ellipse cx="232" cy="182" rx="18" ry="12" fill="url(#skinHighlight)" opacity="0.45" />

      {/* Eyebrows */}
      <path
        d="M 152 150 C 162 144 176 145 184 149 C 176 147 162 147 152 150 Z"
        fill="#120f0e"
        stroke="#120f0e"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 248 150 C 238 144 224 145 216 149 C 224 147 238 147 248 150 Z"
        fill="#120f0e"
        stroke="#120f0e"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Eyes */}
      {/* Left Eye */}
      <g>
        <path d="M 155 165 C 164 158 176 158 183 165 C 176 170 164 170 155 165 Z" fill="#ffffff" />
        <circle cx="169" cy="164" r="5" fill="#2c1a12" />
        <circle cx="169" cy="164" r="2.5" fill="#0c0705" />
        <circle cx="170.5" cy="162.5" r="1.2" fill="#ffffff" />
        <path d="M 154 164 C 163 157 175 157 184 164" stroke="#1f1a18" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Right Eye */}
      <g>
        <path d="M 217 165 C 224 158 236 158 245 165 C 236 170 224 170 217 165 Z" fill="#ffffff" />
        <circle cx="231" cy="164" r="5" fill="#2c1a12" />
        <circle cx="231" cy="164" r="2.5" fill="#0c0705" />
        <circle cx="232.5" cy="162.5" r="1.2" fill="#ffffff" />
        <path d="M 216 164 C 225 157 237 157 246 164" stroke="#1f1a18" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Nose */}
      <path
        d="M 200 155 L 197 188 C 192 192 195 198 200 198 C 205 198 208 192 203 188 L 200 155 Z"
        fill="#a7704b"
        opacity="0.6"
      />
      <path
        d="M 193 194 C 196 198 204 198 207 194"
        stroke="#845333"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Warm Smile with White Teeth */}
      <g>
        {/* Smile base lip background */}
        <path
          d="M 174 212 C 182 232 218 232 226 212 C 218 214 182 214 174 212 Z"
          fill="#863d3d"
        />
        {/* Clean White Teeth */}
        <path
          d="M 178 213 C 185 224 215 224 222 213 C 215 215 185 215 178 213 Z"
          fill="#ffffff"
        />
        {/* Upper Lip */}
        <path
          d="M 174 212 C 186 208 196 211 200 209 C 204 211 214 208 226 212 C 216 215 184 215 174 212 Z"
          fill="#a45656"
        />
        {/* Lower Lip */}
        <path
          d="M 180 224 C 188 232 212 232 220 224 C 212 229 188 229 180 224 Z"
          fill="#b36464"
        />
      </g>

      {/* Neat Hair (Short Black Hair with Natural Texture) */}
      <path
        d="M 134 150 
           C 130 110 148 70 200 68 
           C 252 70 270 110 266 150 
           C 260 115 245 92 200 90 
           C 155 92 140 115 134 150 Z"
        fill="url(#hairGrad)"
      />
      {/* Front fringe hair styling */}
      <path
        d="M 136 130 
           C 145 95 170 82 200 82 
           C 230 82 255 95 264 130 
           C 255 106 232 98 200 98 
           C 168 98 145 106 136 130 Z"
        fill="#120f0e"
      />
      {/* Hair strands & volume */}
      <path
        d="M 148 100 C 170 78 215 76 248 94 C 225 82 180 82 148 100 Z"
        fill="#2e2724"
        opacity="0.7"
      />
    </svg>
  );
};
