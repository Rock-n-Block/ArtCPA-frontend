import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NftCollections } from './NftCollections';
import { nftCollectionsPropsMocked } from './NftCollections.mock';

export default {
  title: 'components/NftCollections',
  component: NftCollections,
} as ComponentMeta<typeof NftCollections>;

const Template: ComponentStory<typeof NftCollections> = (args) => (
  <>
    <NftCollections {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = nftCollectionsPropsMocked;
