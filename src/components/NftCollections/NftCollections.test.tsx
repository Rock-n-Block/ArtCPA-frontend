import { render } from '@testing-library/react';

import { NftCollections } from './NftCollections';
import { nftCollectionsPropsMocked } from './NftCollections.mock';

describe('NftCollections', () => {
  it('should render', () => {
    const { container } = render(
      <NftCollections
        {...nftCollectionsPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
