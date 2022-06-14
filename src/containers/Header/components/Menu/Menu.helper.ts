import { homePageNavigation } from 'containers/Header/Header.helpers';

export const menuNavLinks = [
  {
    label: 'Marketplace',
    link: '/marketplace',
  },
  {
    label: 'CPA Staking',
    link: '/staking',
  },
  {
    label: 'NFT Staking',
    link: '/nft_staking',
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
