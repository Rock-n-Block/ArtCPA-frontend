import { VFC } from 'react';

import cn from 'clsx';
import { H3, Button } from 'components';
import { Card } from 'components/Card';
import styles from './styles.module.scss';

export interface NftCardProps {
  className?: string;
  isNew?: boolean;
  image?: string;
  title?: string;
  href?: string;
  staked?: boolean;
  showModal?: () => void;
}

// @ts-ignore
export const NftCard: VFC<NftCardProps> = ({ className, isNew = false, image, title, href, showModal, staked = false }) => {
  const nftCardGroup = () => {
    if(staked) {
      return (
        <Card className={cn(className, styles.nftCard)}>
          <img src={image} alt={title} className={styles.imgCard} />
          <H3 align="center" className={styles.title}>CCP-123455-1</H3>
          <Button href={href} size="md" variant="outlined" className={styles.viewButton}>UNSTAKE</Button>
        </Card>
      );
    }

    return(
      <Card className={cn(className, styles.nftCard)}>
        <img src={image} alt={title} className={styles.imgCard} />
        <H3 align="center" className={styles.title}>CCP-123455-1</H3>
        <Button href={href} size="md" variant="outlined" className={styles.viewButton}>STAKE</Button>
      </Card>
    );
  };

  return (
    isNew ? (
      <Button className={cn(className, styles.addNew)} onClick={() => showModal()}>
        +
      </Button>
    ) : nftCardGroup()
  );
};
