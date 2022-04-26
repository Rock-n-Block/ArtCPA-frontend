import { render } from '@testing-library/react';

import { DisconnectModal } from './DisconnectModal';
import { connectModalPropsMocked } from './DisconnectModal.mock';

describe('ConnectModal', () => {
  it('should render', () => {
    const { container } = render(
      <DisconnectModal
        {...connectModalPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
