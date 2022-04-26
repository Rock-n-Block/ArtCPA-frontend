import React from 'react';

import { BaseSVGIcon } from 'assets/icons/icons/components/BaseSVGIcon';
import { IconProps } from 'assets/icons/icons/icons.types';

export const ArrowIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M0.221001 1.25871C-0.0911684 0.954347 -0.0700798 0.479854 0.268104 0.198901C0.606288 -0.0820516 1.1335 -0.0630718 1.44567 0.241293L4.779 3.49129C5.07367 3.77859 5.07367 4.22141 4.779 4.50871L1.44567 7.75871C1.1335 8.06307 0.606288 8.08205 0.268104 7.8011C-0.0700798 7.52015 -0.0911684 7.04565 0.221001 6.74129L3.03258 4L0.221001 1.25871Z" fill="white" />

  </BaseSVGIcon>
);
