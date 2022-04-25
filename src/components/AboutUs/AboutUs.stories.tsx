import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AboutUs } from './AboutUs';
import { aboutUsPropsMocked } from './AboutUs.mock';

export default {
  title: 'components/AboutUs',
  component: AboutUs,
} as ComponentMeta<typeof AboutUs>;

const Template: ComponentStory<typeof AboutUs> = (args) => (
  <>
    <AboutUs {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = aboutUsPropsMocked;
