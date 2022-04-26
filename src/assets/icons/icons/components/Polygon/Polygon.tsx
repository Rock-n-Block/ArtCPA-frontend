import React from 'react';

import { BaseSVGIcon } from 'assets/icons/icons/components/BaseSVGIcon';
import { IconProps } from 'assets/icons/icons/icons.types';

export const Polygon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="90"
    height="90"
    fill="none"
    viewBox="0 0 120 120"
    {...props}
  >
    <path d="M20.7379 12L0.691325 23.2583L0.691326 0.741669L20.7379 12Z" fill="#303030" />
  </BaseSVGIcon>
);
