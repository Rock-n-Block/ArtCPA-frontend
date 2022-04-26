import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FirstCard, SecondCard, ThirdCard, FourthCard } from 'assets/img/icons';

import { Team } from './Team';

export default {
  title: 'components/Team',
  component: Team,
} as ComponentMeta<typeof Team>;

const data = [
  { image: FirstCard, personName: 'Name', personPosition: 'position' },
  { image: SecondCard, personName: 'Name', personPosition: 'position' },
  { image: ThirdCard, personName: 'Name', personPosition: 'position' },
  { image: FourthCard, personName: 'Name', personPosition: 'position' },

];

const Template: ComponentStory<typeof Team> = () => (
  <div style={{ background: 'black' }}>
    <Team cards={data} />
  </div>
);
export const Default = Template.bind({});
