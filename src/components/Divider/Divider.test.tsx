import React from 'react';

import { render } from '@testing-library/react';

import { Divider } from './Divider';
import { dividerPropsMocked } from './Divider.mock';

describe('Divider', () => {
  it('should render', () => {
    const { container } = render(
      <Divider
        {...dividerPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
