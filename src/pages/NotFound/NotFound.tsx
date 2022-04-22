import { VFC } from 'react';

import cn from 'clsx';
import { Text, H3 } from 'components/Typography';

import { MainLogo } from 'components/MainLogo';
import { Button } from 'components/Button';
import styles from './styles.module.scss';

export interface NotFoundProps {
  className?: string;
  onButtonClick: () => void;
}

export const NotFound: VFC<NotFoundProps> = ({ className, onButtonClick }) => {
  return (
    <div className={cn(styles.notFound, className)}>
      <MainLogo className={styles.logo} />
      <div className={styles.container}>
        <div className={styles.headerText}>
          <Text weight="bold" className={styles.errorCode}> 404 </Text>
          <H3 weight="semiBold" className={styles.errorText}> Page not found. </H3>
          <Text align="center" className={styles.textBody}>
            Our apologies, this is almost certainly not the page
            you were looking for.
          </Text>
        </div>
        <Button variant="filled" onClick={onButtonClick}> Go to home page </Button>
      </div>
    </div>
  );
};
