import { render } from '@testing-library/react';

import { NftStakingPool } from './NftStakingPool';
import { nftStakingPoolPropsMocked } from './NftStakingPool.mock';

describe('StakingPool', () => {
  it('should render', () => {
    const { container } = render(
      <NftStakingPool
        {...nftStakingPoolPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
