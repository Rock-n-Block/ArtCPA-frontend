import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ComingSoon } from './ComingSoon';
import { comingSoonPropsMocked } from './ComingSoon.mock';

export default {
  title: 'components/ComingSoon',
  component: ComingSoon,
} as ComponentMeta<typeof ComingSoon>;

const Template: ComponentStory<typeof ComingSoon> = (args) => (
  <>
    <ComingSoon {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = comingSoonPropsMocked;
