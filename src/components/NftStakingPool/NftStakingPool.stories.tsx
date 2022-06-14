import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NftStakingPool } from './NftStakingPool';
import { nftStakingPoolPropsMocked } from './NftStakingPool.mock';

export default {
  title: 'components/NftStakingPool',
  component: NftStakingPool,
} as ComponentMeta<typeof NftStakingPool>;

const Template: ComponentStory<typeof NftStakingPool> = (args) => (
  <>
    <NftStakingPool {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = nftStakingPoolPropsMocked;
