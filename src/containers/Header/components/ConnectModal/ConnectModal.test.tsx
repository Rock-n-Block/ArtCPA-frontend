import { render } from '@testing-library/react';

import { ConnectModal } from './ConnectModal';
import { disconnectModalPropsMocked } from './ConnectModal.mock';

describe('ConnectModalProps', () => {
  it('should render', () => {
    const { container } = render(
      <ConnectModal
        {...disconnectModalPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
