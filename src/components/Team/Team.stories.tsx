import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Team } from './Team';

export default {
  title: 'components/Team',
  component: Team,
} as ComponentMeta<typeof Team>;

const Template: ComponentStory<typeof Team> = () => (
  <div style={{ background: 'black' }}>
    <Team />
  </div>
);
export const Default = Template.bind({});
