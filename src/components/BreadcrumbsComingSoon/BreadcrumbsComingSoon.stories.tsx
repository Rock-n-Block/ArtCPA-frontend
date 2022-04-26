import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BreadcrumbsComingSoon } from './BreadcrumbsComingSoon';
import { breadcrumbsComingSoonListMocked, breadcrumbsComingSoonPropsMocked } from './BreadcrumbsComingSoon.mock';

export default {
  title: 'components/BreadcrumbsComingSoon',
  component: BreadcrumbsComingSoon,
} as ComponentMeta<typeof BreadcrumbsComingSoon>;

const Template: ComponentStory<typeof BreadcrumbsComingSoon> = () => (
  <>
    {
    breadcrumbsComingSoonListMocked.map((props) => (
      <BreadcrumbsComingSoon {...props} />

    ))
  }
  </>
);
export const Default = Template.bind({});

Default.args = breadcrumbsComingSoonPropsMocked;
