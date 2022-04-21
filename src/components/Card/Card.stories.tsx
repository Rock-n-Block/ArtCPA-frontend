import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FirstCard } from 'assets/img/icons';
import { Card } from './Card';
import { cardPropsMocked } from './Card.mock';

export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <div style={{ background: 'black' }}>
    <Card image={FirstCard} personName="Name" personPosition="position" />
  </div>
);
export const Default = Template.bind({});

Default.args = cardPropsMocked;
