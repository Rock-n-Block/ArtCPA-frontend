import { render } from '@testing-library/react';

import { StakingPool } from './StakingPool';
import { stakingPoolPropsMocked } from './StakingPool.mock';

describe('StakingPool', () => {
  it('should render', () => {
    const { container } = render(
      <StakingPool
        {...stakingPoolPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
