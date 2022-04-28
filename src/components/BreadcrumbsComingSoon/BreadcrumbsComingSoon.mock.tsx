import { HomeIcon } from 'assets/icons/icons';
import { BreadcrumbsComingSoonProps } from './BreadcrumbsComingSoon';

export const breadcrumbsComingSoonListMocked: BreadcrumbsComingSoonProps[] = [
  {
    paths: [
      {
        icon: <HomeIcon />,
        label: 'Home',
        path: '/Home',
      },
      {
        label: 'MarketPlace',
        path: '/MarketPlace',
      },
    ],
  },
  {
    paths: [
      {
        label: '1',
        path: '/',
      },
      {
        label: '123',
        path: '/123',
      },
    ],
  },
];

export const breadcrumbsComingSoonPropsMocked: BreadcrumbsComingSoonProps = {
  paths: [],
};
