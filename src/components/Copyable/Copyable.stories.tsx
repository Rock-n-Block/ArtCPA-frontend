import React from 'react';

import { Text } from 'components';
import { Copyable } from './Copyable';
import { copyablePropsMocked } from './Copyable.mock';

export default {
  title: 'components/Copyable',
  component: Copyable,
};

export const Default: React.FC = () => (
  <div style={{ width: 300 }}>
    <Copyable {...copyablePropsMocked}>
      <Text>{copyablePropsMocked.valueToCopy}</Text>
    </Copyable>
  </div>
);
