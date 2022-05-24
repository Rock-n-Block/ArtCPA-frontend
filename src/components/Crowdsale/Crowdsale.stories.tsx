import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Crowdsale } from './Crowdsale';
import { crowdsalePropsMocked } from './Crowdsale.mock';

export default {
  title: 'components/Crowdsale',
  component: Crowdsale,
} as ComponentMeta<typeof Crowdsale>;

const Template: ComponentStory<typeof Crowdsale> = (args) => (
  <>
    <Crowdsale {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = crowdsalePropsMocked;
