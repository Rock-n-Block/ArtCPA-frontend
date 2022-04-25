import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FollowUs } from './FollowUs';
import { followUsPropsMocked } from './FollowUs.mock';

export default {
  title: 'components/FollowUs',
  component: FollowUs,
} as ComponentMeta<typeof FollowUs>;

const Template: ComponentStory<typeof FollowUs> = (args) => (
  <>
    <FollowUs {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = followUsPropsMocked;
