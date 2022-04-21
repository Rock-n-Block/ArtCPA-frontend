import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MainLogo } from './MainLogo';
import { mainLogoPropsMocked } from './MainLogo.mock';

export default {
  title: 'components/MainLogo',
  component: MainLogo,
} as ComponentMeta<typeof MainLogo>;

const Template: ComponentStory<typeof MainLogo> = () => (
  <div style={{ background: 'black' }}>
    <MainLogo />
  </div>
);
export const Default = Template.bind({});

Default.args = mainLogoPropsMocked;
