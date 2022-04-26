import { render } from '@testing-library/react';

import { ConnectButton } from './ConnectButton';
import { menuButtonPropsMocked } from './ConnectButton.mock';

describe('ConnectButton', () => {
  it('should render', () => {
    const { container } = render(
      <ConnectButton
        {...menuButtonPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
