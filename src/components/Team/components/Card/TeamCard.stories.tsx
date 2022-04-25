import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FirstCard } from 'assets/img/icons';
import { TeamCard } from './TeamCard';
import { cardPropsMocked } from './TeamCard.mock';

export default {
  title: 'components/TeamCard',
  component: TeamCard,
} as ComponentMeta<typeof TeamCard>;

const Template: ComponentStory<typeof TeamCard> = () => (
  <div style={{ background: 'black' }}>
    <TeamCard image={FirstCard} personName="Name" personPosition="position" />
  </div>
);
export const Default = Template.bind({});

Default.args = cardPropsMocked;
