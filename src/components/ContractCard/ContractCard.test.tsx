import { render } from '@testing-library/react';

import { ContractCard } from './ContractCard';
import { сheckoutPropsMocked } from './ContractCard.mock';

describe('ContractCard', () => {
  it('should render', () => {
    const { container } = render(
      <ContractCard
        {...сheckoutPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
