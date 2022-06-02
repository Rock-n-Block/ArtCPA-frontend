import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StakingPool } from './StakingPool';
import { stakingPoolPropsMocked } from './StakingPool.mock';

export default {
  title: 'components/StakingPool',
  component: StakingPool,
} as ComponentMeta<typeof StakingPool>;

const Template: ComponentStory<typeof StakingPool> = (args) => (
  <>
    <StakingPool {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = stakingPoolPropsMocked;
