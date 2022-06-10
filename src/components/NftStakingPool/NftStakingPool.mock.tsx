import { noop } from 'lodash';
import { NftStakingPoolProps } from './NftStakingPool';

export const nftStakingPoolPropsMocked: NftStakingPoolProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stake: (any) => new Promise(() => {}),
    unstake: noop,
    reinvest: noop,
    claim: noop,
};
