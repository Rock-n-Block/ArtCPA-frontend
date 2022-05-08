import { homePageNavigation } from 'containers/Header/Header.helpers';

export const menuNavLinks = [
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
  {
    label: 'Buy CPA',
    link: '/crowdsale',
  },
  ...menuNavLinks,
  ...homePageNavigation,
];
