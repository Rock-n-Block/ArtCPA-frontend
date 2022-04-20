import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Breadcrumbs } from './Breadcrumbs';
import { breadcrumbsListMocked, breadcrumbsPropsMocked } from './Breadcrumbs.mock';

export default {
  title: 'components/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = () => (
  <>
    {
    breadcrumbsListMocked.map((props) => (
      <Breadcrumbs {...props} />

    ))
  }
  </>
);
export const Default = Template.bind({});

Default.args = breadcrumbsPropsMocked;
