import { homePageNavigation } from 'containers/Header/Header.helpers';

export const menuNavLinks = [
  {
    label: 'Crowdsale',
    link: '/crowdsale',
  },
  {
    label: 'Marketplace',
    link: '/marketplace',
  },
  {
    label: 'Staking',
    link: '/staking',
  },
  {
    label: 'DEX',
    link: '/dex',
  },
];

export const tableMenuNavLink = [
  ...menuNavLinks,
  ...homePageNavigation,
];
