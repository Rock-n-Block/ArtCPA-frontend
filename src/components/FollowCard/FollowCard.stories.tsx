import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FollowCard } from './FollowCard';
import { followCardPropsMocked } from './FollowCard.mock';

export default {
  title: 'components/FollowCard',
  component: FollowCard,
} as ComponentMeta<typeof FollowCard>;

const Template: ComponentStory<typeof FollowCard> = (args) => (
  <>
    <FollowCard {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = followCardPropsMocked;
