import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TeamCard } from './TeamCard';
import { cardPropsMocked } from './TeamCard.mock';

export default {
  title: 'components/TeamCard',
  component: TeamCard,
} as ComponentMeta<typeof TeamCard>;

const Template: ComponentStory<typeof TeamCard> = () => (
  <div style={{ background: 'black' }}>
    <TeamCard {...cardPropsMocked} />
  </div>
);
export const Default = Template.bind({});

Default.args = cardPropsMocked;
