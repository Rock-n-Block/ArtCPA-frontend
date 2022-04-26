import { render } from '@testing-library/react';

import { SelectCurrency } from './SelectCurrency';
import { selectCurrencyPropsMocked } from './SelectCurrency.mock';

describe('SelectCurrency', () => {
  it('should render', () => {
    const { container } = render(
      <SelectCurrency
        {...selectCurrencyPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
