import { render } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';
import { progressBarPropsMocked } from './ProgressBar.mock';

describe('ProgressBar', () => {
  it('should render', () => {
    const { container } = render(
      <ProgressBar
        {...progressBarPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
