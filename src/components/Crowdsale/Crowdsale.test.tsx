import { render } from '@testing-library/react';

import { Crowdsale } from './Crowdsale';
import { crowdsalePropsMocked } from './Crowdsale.mock';

describe('Crowdsale', () => {
  it('should render', () => {
    const { container } = render(
      <Crowdsale
        {...crowdsalePropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
