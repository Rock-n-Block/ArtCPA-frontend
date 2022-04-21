import { VFC } from 'react';

import cn from 'clsx';
import { H2, Button } from 'components';
import { Card } from 'components/Card';
import styles from './styles.module.scss';

export interface NftCardProps {
  className?: string;
  image: string;
  title: string
}

export const NftCard: VFC<NftCardProps> = ({ className, image, title }) => {
  return (
    <div className={cn(styles.nftCard, className)}>
      <Card className={styles.card}>
        <img src={image} alt={title} />
        <H2 align="center" className={styles.title}>{title}</H2>
        <Button size="lg" variant="filled" className={styles.viewButton}>VIEW</Button>
      </Card>
    </div>
  );
};
