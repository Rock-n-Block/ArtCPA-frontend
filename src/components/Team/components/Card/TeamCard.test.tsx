import { render } from '@testing-library/react';

import { TeamCard } from './TeamCard';
// import { cardPropsMocked } from './TeamCard.mock';

describe('TeamCard', () => {
  it('should render', () => {
    const { container } = render(
      <TeamCard />,
    );
    expect(container).toMatchSnapshot();
  });
});
