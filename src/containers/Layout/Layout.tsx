import { UrlObject } from 'url';

import { FC, useEffect, useCallback } from 'react';

import { Footer, Header, useInteraction } from 'containers';
import { MobileNavigation } from 'containers/MobileNavigation';
import { useWindowState } from 'hooks';
import { NotificationModal } from 'containers/NotificationModal';
import { useSmoothTopScroll } from 'hooks/useSmoothTopScroll';
import { EContracts } from 'config';
import { useDispatch } from 'react-redux';
import { updateCrowdSaleStage } from 'store/crowdsale';
import { camelize } from 'utils';
import styles from './styles.module.scss';

export interface LayoutProps {
  route?: UrlObject | string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { width } = useWindowState();

  const { callMethod } = useInteraction();
  const dispatch = useDispatch();

  const requestCurrentStage = useCallback(async () => {
    const { firstValue } = await callMethod({ contract: EContracts.crowdSale, method: 'stage', implementInterface: ['Adder'] });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(updateCrowdSaleStage(camelize(firstValue.valueOf() as any) as any));
  }, [callMethod, dispatch]);

  useEffect(() => {
    requestCurrentStage();
  }, [requestCurrentStage]);

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
