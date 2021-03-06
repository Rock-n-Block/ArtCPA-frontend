import React from 'react';

import { IconProps } from '../icons.types';

import { BaseSVGIcon } from './BaseSVGIcon';

export const WalletIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="28"
    height="24"
    fill="#141417"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M1.5 3V19C1.5 19.5304 1.71071 20.0391 2.08579 20.4142C2.46086 20.7893 2.96957 21 3.5 21H23.5C23.7652 21 24.0196 20.8946 24.2071 20.7071C24.3946 20.5196 24.5 20.2652 24.5 20V6C24.5 5.73478 24.3946 5.48043 24.2071 5.29289C24.0196 5.10536 23.7652 5 23.5 5H3.5C2.96957 5 2.46086 4.78929 2.08579 4.41421C1.71071 4.03914 1.5 3.53043 1.5 3ZM1.5 3C1.5 2.46957 1.71071 1.96086 2.08579 1.58579C2.46086 1.21071 2.96957 1 3.5 1H20.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ fill: 'none' }}
    />
    <path d="M19 14.5C19.8284 14.5 20.5 13.8284 20.5 13C20.5 12.1716 19.8284 11.5 19 11.5C18.1716 11.5 17.5 12.1716 17.5 13C17.5 13.8284 18.1716 14.5 19 14.5Z" style={{ fill: 'currentcolor' }} />
  </BaseSVGIcon>
);
