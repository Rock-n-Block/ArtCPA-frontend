import { render } from '@testing-library/react';

import { WrapContainer } from './WrapContainer';
import { wrapContainerPropsMocked } from './WrapContainer.mock';

describe('WrapContainer', () => {
  it('should render', () => {
    const { container } = render(
      <WrapContainer
        {...wrapContainerPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
