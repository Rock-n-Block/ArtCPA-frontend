import React from 'react';

import { IconProps } from '../icons.types';

import { BaseSVGIcon } from './BaseSVGIcon';

export const SignOutIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24"
    height="24"
    fill="#141417"
    viewBox="0 0 24 18"
    {...props}
  >
    <path d="M10.136 5.32825L12.9996 8.88311L10.136 12.438" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.36353 8.88312H12.9999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.36339 16.3314H1.54521C1.40055 16.3314 1.26181 16.2601 1.15952 16.1331C1.05722 16.0061 0.999756 15.8339 0.999756 15.6543V2.11196C0.999756 1.93238 1.05722 1.76015 1.15952 1.63317C1.26181 1.50618 1.40055 1.43484 1.54521 1.43484H5.36339" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </BaseSVGIcon>
);
