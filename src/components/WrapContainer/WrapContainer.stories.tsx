import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WrapContainer } from './WrapContainer';
import { wrapContainerPropsMocked } from './WrapContainer.mock';

export default {
  title: 'components/WrapContainer',
  component: WrapContainer,
} as ComponentMeta<typeof WrapContainer>;

const Template: ComponentStory<typeof WrapContainer> = (args) => (
  <>
    <WrapContainer {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = wrapContainerPropsMocked;
