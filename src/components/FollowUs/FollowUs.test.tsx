import { render } from '@testing-library/react';

import { FollowUs } from './FollowUs';
import { followUsPropsMocked } from './FollowUs.mock';

describe('FollowUs', () => {
  it('should render', () => {
    const { container } = render(
      <FollowUs
        {...followUsPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
