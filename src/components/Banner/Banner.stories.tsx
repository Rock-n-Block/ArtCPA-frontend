import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Banner } from './Banner';
import { bannerPropsMocked } from './Banner.mock';

export default {
  title: 'components/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => (
  <>
    <Banner {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = bannerPropsMocked;
