import { render } from '@testing-library/react';

import { NotFound } from './NotFound';
import { notFoundPropsMocked } from './NotFound.mock';

describe('NotFound', () => {
  it('should render', () => {
    const { container } = render(
      <NotFound
        {...notFoundPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
