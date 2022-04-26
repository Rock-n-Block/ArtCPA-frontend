import React from 'react';

import { BaseSVGIcon } from 'assets/icons/icons/components/BaseSVGIcon';
import { IconProps } from 'assets/icons/icons/icons.types';

export const YouTubeLogo: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="90"
    height="90"
    fill="none"
    viewBox="0 0 120 120"
    {...props}
  >
    <g filter="url(#filter0_d_123_527)">
      <circle cx="66" cy="58" r="50" fill="url(#paint0_linear_123_527)" />
    </g>
    <defs>
      <filter id="filter0_d_123_527" x="0" y="0" width="132" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="8" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.796078 0 0 0 0 0.807843 0 0 0 0 0 0 0 0 0.28 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_123_527" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_123_527" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_123_527" x1="66" y1="8" x2="66" y2="108" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E1E365" />
        <stop offset="1" stopColor="#CBCE00" />
      </linearGradient>
    </defs>
  </BaseSVGIcon>
);
