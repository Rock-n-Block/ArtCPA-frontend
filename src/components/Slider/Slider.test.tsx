import { render } from '@testing-library/react';

import { Slider } from './Slider';
import { sliderPropsMocked } from './Slider.mock';

describe('Slider', () => {
  it('should render', () => {
    const { container } = render(
      <Slider
        {...sliderPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
