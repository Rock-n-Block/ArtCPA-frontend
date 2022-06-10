import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NftCard } from './NftCard';
import { nftCardPropsMocked } from './NftCard.mock';

export default {
  title: 'components/NftCard',
  component: NftCard,
} as ComponentMeta<typeof NftCard>;

const Template: ComponentStory<typeof NftCard> = (args) => (
  <>
    <NftCard {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = nftCardPropsMocked;
