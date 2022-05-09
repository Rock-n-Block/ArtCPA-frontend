import { UrlObject } from 'url';

import { FC, useEffect } from 'react';

import { Footer, Header } from 'containers';
import { MobileNavigation } from 'containers/MobileNavigation';
import { useWindowState } from 'hooks';
import { NotificationModal } from 'containers/NotificationModal';
import { useSmoothTopScroll } from 'hooks/useSmoothTopScroll';
import { useContractMethods } from 'containers/Contract';
import styles from './styles.module.scss';

export interface LayoutProps {
  route?: UrlObject | string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { width } = useWindowState();

  const { requestCurrentStage, requestStageTimeLeft, requestAllowedTokensMap } = useContractMethods();

  useEffect(() => {
    requestCurrentStage();
    requestStageTimeLeft();
    requestAllowedTokensMap();
  }, [requestCurrentStage, requestStageTimeLeft, requestAllowedTokensMap]);

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
