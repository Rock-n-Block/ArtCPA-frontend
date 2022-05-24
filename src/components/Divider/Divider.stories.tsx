import React from 'react';

import { Divider } from './Divider';
import { dividerPropsMocked } from './Divider.mock';

export default {
  title: 'components/Divider',
  component: Divider,
};

export const Default: React.FC = () => (
  <div style={{ padding: 3 }}>
    <Divider {...dividerPropsMocked} />
  </div>
);
