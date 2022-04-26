import React from 'react';

import { render } from '@testing-library/react';

import { Copyable } from './Copyable';
import { copyablePropsMocked } from './Copyable.mock';

describe('Copyable', () => {
  it('should render', () => {
    const { container } = render(
      <Copyable
        {...copyablePropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
