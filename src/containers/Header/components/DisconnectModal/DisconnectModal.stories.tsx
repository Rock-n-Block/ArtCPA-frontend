import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DisconnectModal } from './DisconnectModal';
import { connectModalPropsMocked } from './DisconnectModal.mock';

export default {
  title: 'components/DisconnectModal',
  component: DisconnectModal,
} as ComponentMeta<typeof DisconnectModal>;

const Template: ComponentStory<typeof DisconnectModal> = (args) => (
  <>
    <DisconnectModal {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = connectModalPropsMocked;
