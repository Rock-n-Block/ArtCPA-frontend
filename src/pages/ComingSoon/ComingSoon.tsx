import { VFC } from 'react';

import cn from 'clsx';
import { Text, H1 } from 'components/Typography';

import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export interface ComingSoonProps {
  className?: string;
  title: string;
}

export const ComingSoon: VFC<ComingSoonProps> = ({ className, title }) => {
  const navigate = useNavigate();
  const onButtonClick = () => navigate('/');
  return (
    <div className={cn(styles.comingSoon, className)}>
      <div className={styles.container}>
        <H1 weight="bold" align="center" className={styles.title}>{title}</H1>
        <Text weight="bold" className={styles.bodyText} align="center"> Coming soon </Text>
        <Button variant="filled" className={styles.returnButton} onClick={onButtonClick}> Go to home page </Button>
      </div>
    </div>
  );
};
