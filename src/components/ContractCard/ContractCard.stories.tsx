import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ContractCard } from './ContractCard';
import { сheckoutPropsMocked } from './ContractCard.mock';

export default {
  title: 'components/ContractCard',
  component: ContractCard,
} as ComponentMeta<typeof ContractCard>;

const Template: ComponentStory<typeof ContractCard> = (args) => (
  <>
    <ContractCard {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = сheckoutPropsMocked;
