import { render } from '@testing-library/react';

import { Banner } from './Banner';
import { bannerPropsMocked } from './Banner.mock';

describe('Banner', () => {
  it('should render', () => {
    const { container } = render(
      <Banner
        {...bannerPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
