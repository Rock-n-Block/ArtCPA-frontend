import React from 'react';

import { BaseSVGIcon } from 'assets/icons/icons/components/BaseSVGIcon';
import { IconProps } from 'assets/icons/icons/icons.types';

export const Telegram: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48 24.1982C48 37.4522 37.254 48.1982 24 48.1982C10.746 48.1982 0 37.4522 0 24.1982C0 10.9442 10.746 0.198242 24 0.198242C37.254 0.198242 48 10.9442 48 24.1982ZM24.86 17.9162C22.526 18.8862 17.86 20.8962 10.864 23.9442C9.728 24.3962 9.132 24.8382 9.078 25.2702C8.986 26.0022 9.902 26.2902 11.146 26.6802C11.316 26.7342 11.492 26.7882 11.672 26.8482C12.898 27.2462 14.546 27.7122 15.402 27.7302C16.18 27.7462 17.048 27.4262 18.006 26.7702C24.542 22.3562 27.916 20.1262 28.128 20.0782C28.278 20.0442 28.486 20.0002 28.626 20.1262C28.766 20.2502 28.752 20.4862 28.738 20.5502C28.646 20.9362 25.058 24.2742 23.198 26.0022C22.618 26.5402 22.208 26.9222 22.124 27.0102C21.936 27.2042 21.744 27.3902 21.56 27.5682C20.42 28.6642 19.568 29.4882 21.608 30.8322C22.588 31.4782 23.372 32.0122 24.154 32.5442C25.008 33.1262 25.86 33.7062 26.964 34.4302C27.244 34.6142 27.512 34.8042 27.774 34.9902C28.768 35.7002 29.662 36.3362 30.766 36.2362C31.406 36.1762 32.07 35.5742 32.406 33.7762C33.2 29.5242 34.764 20.3162 35.126 16.5202C35.148 16.2051 35.1346 15.8884 35.086 15.5762C35.0569 15.3241 34.9341 15.0921 34.742 14.9262C34.456 14.6922 34.012 14.6422 33.812 14.6462C32.91 14.6622 31.526 15.1442 24.86 17.9162Z"
      fill="#0D99FF"
    />
  </BaseSVGIcon>
);
