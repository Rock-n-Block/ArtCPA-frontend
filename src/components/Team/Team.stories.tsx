import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FirstCard, SecondCard, ThirdCard, FourthCard } from 'assets/img/icons';
import { Card } from 'components/Card';

import { Team } from './Team';

export default {
  title: 'components/Team',
  component: Team,
} as ComponentMeta<typeof Team>;

const data = [
  { image: FirstCard, name: 'Name', position: 'position' },
  { image: SecondCard, name: 'Name', position: 'position' },
  { image: ThirdCard, name: 'Name', position: 'position' },
  { image: FourthCard, name: 'Name', position: 'position' },

];
const cards = data.map((item) => (
  <Card
    image={item.image}
    personName={item.name}
    personPosition={item.position}
    className="inputCard"
  />
));
const Template: ComponentStory<typeof Team> = () => (
  <div style={{ background: 'black' }}>
    <Team cards={cards} />
  </div>
);
export const Default = Template.bind({});
