import { render } from '@testing-library/react';

import { FollowCard } from './FollowCard';
import { followCardPropsMocked } from './FollowCard.mock';

describe('FollowCard', () => {
  it('should render', () => {
    const { container } = render(
      <FollowCard
        {...followCardPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
