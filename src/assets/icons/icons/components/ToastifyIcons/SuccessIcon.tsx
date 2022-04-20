import React from 'react';

import { BaseSVGIcon } from 'assets/icons/icons/components/BaseSVGIcon';
import { IconProps } from 'assets/icons/icons/icons.types';

export const SuccessIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12.0005 2.0005C6.47749 2.0005 2.00049 6.4775 2.00049 12.0005C2.00049 17.5225 6.47749 22.0005 12.0005 22.0005C17.5235 22.0005 22.0005 17.5225 22.0005 12.0005C22.0005 6.4775 17.5235 2.0005 12.0005 2.0005Z" fill="#8A7FF6" />
    <mask id="mask0_1062_705" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="21">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0005 2.00049C6.47749 2.00049 2.00049 6.47749 2.00049 12.0005C2.00049 17.5225 6.47749 22.0005 12.0005 22.0005C17.5235 22.0005 22.0005 17.5225 22.0005 12.0005C22.0005 6.47749 17.5235 2.00049 12.0005 2.00049Z" fill="white" />
    </mask>
    <g mask="url(#mask0_1062_705)">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.7955 9.60543L12.2275 15.6054C12.0395 15.8524 11.7485 15.9984 11.4385 16.0004H11.4315C11.1245 16.0004 10.8345 15.8584 10.6445 15.6164L8.21248 12.5094C7.87248 12.0754 7.94848 11.4464 8.38348 11.1064C8.81748 10.7654 9.44748 10.8414 9.78748 11.2774L11.4205 13.3634L15.2045 8.39443C15.5385 7.95543 16.1655 7.86943 16.6065 8.20443C17.0455 8.53943 17.1305 9.16643 16.7955 9.60543Z" fill="#254B07" />
    </g>
  </BaseSVGIcon>
);
