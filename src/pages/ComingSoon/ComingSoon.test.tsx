import { render } from '@testing-library/react';

import { ComingSoon } from './ComingSoon';
import { comingSoonPropsMocked } from './ComingSoon.mock';

describe('NotFound', () => {
  it('should render', () => {
    const { container } = render(
      <ComingSoon
        {...comingSoonPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
