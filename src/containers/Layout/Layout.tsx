import { UrlObject } from 'url';

import { FC } from 'react';

import { Footer, Header } from 'containers';
import { MobileNavigation } from 'containers/MobileNavigation';
import { useWindowState } from 'hooks';
import { NotificationModal } from 'containers/NotificationModal';
import { useSmoothTopScroll } from 'hooks/useSmoothTopScroll';
import { RoadMap } from 'components/RoadMap';
import styles from './styles.module.scss';

export interface LayoutProps {
  route?: UrlObject | string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { width } = useWindowState();

  useSmoothTopScroll();

  return (
    <div className={styles.content}>
      <NotificationModal />
      {!!width && +width < 800 && <MobileNavigation />}
      <Header />
      <RoadMap />
      {children}
      <Footer />
    </div>
  );
};
