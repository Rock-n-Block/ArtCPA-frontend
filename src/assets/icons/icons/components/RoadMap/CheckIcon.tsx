import React from 'react';

import { BaseSVGIcon } from 'assets/icons/icons/components/BaseSVGIcon';
import { IconProps } from 'assets/icons/icons/icons.types';

export const CheckIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path d="M23 2L9 16L2 9" stroke="#E1E365" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </BaseSVGIcon>
);
