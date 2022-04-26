import { render } from '@testing-library/react';

import { MenuButton } from './MenuButton';
import { menuButtonPropsMocked } from './MenuButton.mock';

describe('MenuButton', () => {
  it('should render', () => {
    const { container } = render(
      <MenuButton
        {...menuButtonPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
