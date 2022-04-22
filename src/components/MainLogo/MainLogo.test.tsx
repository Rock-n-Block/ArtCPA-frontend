import { render } from '@testing-library/react';

import { MainLogo } from './MainLogo';
import { mainLogoPropsMocked } from './MainLogo.mock';

describe('MainLogo', () => {
  it('should render', () => {
    const { container } = render(
      <MainLogo
        {...mainLogoPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
