import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MenuButton } from './MenuButton';
import { menuButtonPropsMocked } from './MenuButton.mock';

export default {
  title: 'components/MenuButton',
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => (
  <>
    <MenuButton {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = menuButtonPropsMocked;
