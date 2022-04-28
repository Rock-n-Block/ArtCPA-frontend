import { Button, Logo } from 'components';
import { Link as RSLink } from 'react-scroll';
import { VFC, useEffect, useMemo, useState } from 'react';
import { useWindowState } from 'hooks';
import { useGetAccountInfo, logout } from '@elrondnetwork/dapp-core';
import { useDispatch } from 'react-redux';
import { updateUserState } from 'store/user/reducer';
import { LogoIcon } from 'assets/img/icons';
import { HomePageAnchors, homePageNavigation } from './Header.helpers';

import styles from './styles.module.scss';
import { MenuButton } from './components/MenuButton';
import { ConnectButton } from './components/ConnectButton';

export interface HeaderProps {
  className?: string;
}

export const Header: VFC<HeaderProps> = () => {
  const { width } = useWindowState();
  const dispatch = useDispatch();

  const { address: elraddress } = useGetAccountInfo();

  const isTablet = useMemo(() => {
    return width < 1200;
  }, [width]);

  const isMobile = useMemo(() => {
    return width < 768;
  }, [width]);

  const [isConnectModalOpen, setConnectModalOpen] = useState(false);

  const handleDisconnect = () => {
    dispatch(updateUserState({
      address: '',
    }));
    logout();
  };

  const closeModal = () => setConnectModalOpen(false);
  const openModal = () => setConnectModalOpen(true);

  useEffect(() => {
    if (elraddress) {
      dispatch(updateUserState({
        address: elraddress,
      }));
    }
    closeModal();
  }, [dispatch, elraddress]);

  return (
    <header className={styles.header}>
      {isMobile ? (
        <>
          <MenuButton isMobile={isTablet} />
          <img src={LogoIcon} alt="coin" className={styles.coin} />
          <ConnectButton
            isMobile
            onCloseModal={closeModal}
            onOpenModal={openModal}
            onDisconnect={handleDisconnect}
            address={elraddress}
            isOpen={isConnectModalOpen}
          />
        </>
      ) : (
        <>
          <Logo />
          {!isTablet && (
          <>
            {homePageNavigation.map(({ label, anchorId, isOuterLink, link }) => {
              if (isOuterLink) {
                return (
                  <Button key={label} className={styles.headerNav} href={link} variant="text">{label}</Button>
                );
              }
              return (
                <RSLink key={label} smooth to={anchorId} delay={0} className={styles.navLink}>
                  <Button className={styles.headerNav} variant="text">{label}</Button>
                </RSLink>
              );
            })}
          </>
          )}
          <RSLink smooth to={HomePageAnchors.BUY}>
            <Button className={styles.buyButton}>Buy CPA</Button>
          </RSLink>
          <ConnectButton
            isMobile={false}
            onCloseModal={closeModal}
            onOpenModal={openModal}
            onDisconnect={handleDisconnect}
            address={elraddress}
            isOpen={isConnectModalOpen}
          />
          <MenuButton isMobile={isTablet} />
        </>
      )}
    </header>
  );
};
