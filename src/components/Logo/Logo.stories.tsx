import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Logo } from './Logo';
import { logoPropsMocked } from './Logo.mock';

export default {
  title: 'components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => (
  <div style={{ background: 'black' }}>
    <Logo />
  </div>
);
export const Default = Template.bind({});

Default.args = logoPropsMocked;
