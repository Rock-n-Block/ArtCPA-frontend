import { useEffect, VFC } from 'react';

import cn from 'clsx';
import { Text, H3 } from 'components/Typography';

import { Logo } from 'components/Logo';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export interface NotFoundProps {
  className?: string;
}

export const NotFound: VFC<NotFoundProps> = ({ className }) => {
  const navigate = useNavigate();
  const onButtonClick = () => navigate('/');

  useEffect(() => {
    const footers = document.getElementsByTagName('footer');
    const headers = document.getElementsByTagName('header');
    const oldFooterDisplay = footers[0].style.display;
    const oldHeaderDisplay = headers[0].style.display;
    footers[0].style.display = 'none';
    headers[0].style.display = 'none';

    return () => {
      footers[0].style.display = oldFooterDisplay;
      headers[0].style.display = oldHeaderDisplay;
    };
  }, []);

  return (
    <div className={cn(styles.notFound, className)}>
      <Logo className={styles.logo} />
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
