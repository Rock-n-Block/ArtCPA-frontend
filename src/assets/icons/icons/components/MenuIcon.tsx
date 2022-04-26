import React from 'react';

import { IconProps } from '../icons.types';

import { BaseSVGIcon } from './BaseSVGIcon';

export const MenuIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4.5 6H20.5M4.5 12H20.5M4.5 18H20.5" stroke="#E1E365" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </BaseSVGIcon>
);
