import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotFound } from './NotFound';
import { notFoundPropsMocked } from './NotFound.mock';

export default {
  title: 'components/NotFound',
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => (
  <>
    <NotFound {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = notFoundPropsMocked;
