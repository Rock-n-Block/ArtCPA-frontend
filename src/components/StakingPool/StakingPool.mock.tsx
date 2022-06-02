import { noop } from 'lodash';
import { StakingPoolProps } from './StakingPool';

export const stakingPoolPropsMocked: StakingPoolProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stake: (any) => new Promise(() => {}),
    unstake: noop,
    reinvest: noop,
    claim: noop,
};
