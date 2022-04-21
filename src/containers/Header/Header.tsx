/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Logo } from 'components';
import { Link as RSLink } from 'react-scroll';
import { useCallback, VFC } from 'react';
import { Chains, WalletProviders } from 'types';
import { MenuIcon } from 'assets/icons/icons';
import { HomePageAnchors, homePageNavigation } from './Header.helpers';

import styles from './styles.module.scss';

export interface HeaderProps {
  address: string;
  disconnect: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onConnectWallet: (provider: any, newChain: any) => void;
  onToggleChainType: () => void;
  isHomePage: boolean;
  isUserInfoLoading: boolean;
  chainType: 'testnet' | 'mainnet';
}

export const Header: VFC<HeaderProps> = ({ address, disconnect, onConnectWallet, onToggleChainType, chainType }) => {
  return (
    <header className={styles.header}>
      <Logo />
      {homePageNavigation.map(({ label, anchorId, isOuterLink, href }) => {
        if (isOuterLink) {
          return (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Button variant="text">{label}</Button>
            </a>
          );
        }
        return (
          <RSLink smooth to={anchorId} key={anchorId} className={styles.navLink}>
            <Button variant="text">{label}</Button>
          </RSLink>
        );
      })}
      <RSLink smooth to={HomePageAnchors.BUY}>
        <Button>Buy CPA</Button>
      </RSLink>
      <Button variant="filled">Connect to wallet</Button>
      <Button endAdorment={<MenuIcon />}>Menu</Button>
    </header>
  );
};
