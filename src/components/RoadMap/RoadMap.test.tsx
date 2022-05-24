import { render } from '@testing-library/react';

import { RoadMap } from './RoadMap';
import { roadMapPropsMocked } from './RoadMap.mock';

describe('RoadMap', () => {
  it('should render', () => {
    const { container } = render(
      <RoadMap
        {...roadMapPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
