import { UrlObject } from 'url';

import { FC, useCallback, useEffect } from 'react';

import { Footer, Header } from 'containers';
import { MobileNavigation } from 'containers/MobileNavigation';
import { useWindowState } from 'hooks';
import { NotificationModal } from 'containers/NotificationModal';
import { useSmoothTopScroll } from 'hooks/useSmoothTopScroll';
import { useContractMethods } from 'containers/Contract';
import { useDispatch } from 'react-redux';
import { getAvailableTokens } from 'store/tokens/actions';
import { getCurrentStage } from 'store/crowdsale/actions';
import { useElrondApi } from 'containers/ElrondAPI';
import { nftWithDiscount } from 'appConstants/tokens';
import { updateUserNfts } from 'store/user/reducer';
import styles from './styles.module.scss';

export interface LayoutProps {
  route?: UrlObject | string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { width } = useWindowState();
  const dispatch = useDispatch();

  const { requestCurrentStage, requestStageTimeLeft, requestAllowedTokensMap } = useContractMethods();
  const { getAccountsNFTs } = useElrondApi();

  const initialRequest = useCallback(async () => {
    dispatch(getAvailableTokens());
    dispatch(getCurrentStage());
    const userNfts = await getAccountsNFTs();
    const discountNfts = userNfts.filter((nft) => nftWithDiscount.includes(nft.collection)).map((nft) => nft.collection);
    dispatch(updateUserNfts(discountNfts));
  }, [dispatch, getAccountsNFTs]);

  useEffect(() => {
    initialRequest();
    requestCurrentStage();
    requestStageTimeLeft();
    requestAllowedTokensMap();
  }, [requestCurrentStage, requestStageTimeLeft, requestAllowedTokensMap, initialRequest]);

  useSmoothTopScroll();

  return (
    <div className={styles.content}>
      <NotificationModal />
      {!!width && +width < 800 && <MobileNavigation />}
      <Header />
      {children}
      <Footer />
    </div>
  );
};
