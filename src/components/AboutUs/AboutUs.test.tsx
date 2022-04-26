import { render } from '@testing-library/react';

import { AboutUs } from './AboutUs';
import { aboutUsPropsMocked } from './AboutUs.mock';

describe('AboutUs', () => {
  it('should render', () => {
    const { container } = render(
      <AboutUs
        {...aboutUsPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
