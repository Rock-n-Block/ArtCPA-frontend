import { render } from '@testing-library/react';

import { BreadcrumbsComingSoon } from './BreadcrumbsComingSoon';
import { breadcrumbsComingSoonPropsMocked } from './BreadcrumbsComingSoon.mock';

describe('Breadcrumbs', () => {
  it('should render', () => {
    const { container } = render(
      <BreadcrumbsComingSoon
        {...breadcrumbsComingSoonPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
