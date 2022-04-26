import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MainVideo } from './MainVideo';
import { mainVideoPropsMocked } from './MainVideo.mock';

export default {
  title: 'components/MainVideo',
  component: MainVideo,
} as ComponentMeta<typeof MainVideo>;

const Template: ComponentStory<typeof MainVideo> = (args) => (
  <>
    <MainVideo {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = mainVideoPropsMocked;
