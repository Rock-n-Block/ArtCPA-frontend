import { render } from '@testing-library/react';

import { MainVideo } from './MainVideo';
import { mainVideoPropsMocked } from './MainVideo.mock';

describe('MainVideo', () => {
  it('should render', () => {
    const { container } = render(
      <MainVideo
        {...mainVideoPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
