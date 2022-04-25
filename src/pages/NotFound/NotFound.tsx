import { VFC } from 'react';

import cn from 'clsx';
import { Text, H3 } from 'components/Typography';

import { MainLogo } from 'components/MainLogo';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export interface NotFoundProps {
  className?: string;
}

export const NotFound: VFC<NotFoundProps> = ({ className }) => {
  const navigate = useNavigate();
  const onButtonClick = () => navigate('/');

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
        <Button
          variant="filled"
          onClick={onButtonClick}
          className={styles.returnButton}
        >
          Go to home page
        </Button>
      </div>
    </div>
  );
};
