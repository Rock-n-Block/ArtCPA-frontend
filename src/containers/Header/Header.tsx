import { Button, Logo } from 'components';
import { VFC, useEffect, useMemo, useState, useCallback } from 'react';
import { useWindowState } from 'hooks';
import { useGetAccountInfo, logout } from '@elrondnetwork/dapp-core';
import { useDispatch } from 'react-redux';
import { updateUserState } from 'store/user/reducer';
import { WrapContainer } from 'components/WrapContainer';
import { LogoIcon } from 'assets/img/icons';
import { useElrondApi } from 'containers/ElrondAPI';
import { Link } from 'react-router-dom';
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
  const { getAccountsTokens } = useElrondApi();

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

  const closeModal = useCallback(() => setConnectModalOpen(false), []);
  const openModal = useCallback(() => setConnectModalOpen(true), []);

  const getUserData = useCallback(async (address: string) => {
    const userTokens = await getAccountsTokens();
    dispatch(updateUserState({
      address,
      tokens: userTokens,
    }));
  }, [dispatch, getAccountsTokens]);

  useEffect(() => {
    if (elraddress) {
      getUserData(elraddress);
    }
    closeModal();
  }, [closeModal, dispatch, elraddress, getUserData]);

  return (
    <WrapContainer className={styles.header}>
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
                <Link key={label} to={anchorId} className={styles.navLink}>
                  <Button className={styles.headerNav} variant="text">{label}</Button>
                </Link>
              );
            })}
          </>
          )}
          <Link to={HomePageAnchors.BUY}>
            <Button className={styles.buyButton}>Buy CPA</Button>
          </Link>
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
    </WrapContainer>
  );
};
