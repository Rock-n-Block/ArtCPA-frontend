import { render } from '@testing-library/react';

import { Team } from './Team';
import { teamPropsMocked } from './Team.mock';

describe('Team', () => {
  it('should render', () => {
    const { container } = render(
      <Team
        {...teamPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
