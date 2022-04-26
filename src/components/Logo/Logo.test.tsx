import { render } from '@testing-library/react';

import { Logo } from './Logo';
import { logoPropsMocked } from './Logo.mock';

describe('Logo', () => {
  it('should render', () => {
    const { container } = render(
      <Logo
        {...logoPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
