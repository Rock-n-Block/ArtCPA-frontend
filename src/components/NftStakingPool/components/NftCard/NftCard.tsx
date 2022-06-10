import { VFC } from 'react';

import cn from 'clsx';
import { H3, Button } from 'components';
import { Card } from 'components/Card';
import styles from './styles.module.scss';

export interface NftCardProps {
  className?: string;
  isNew?: boolean;
  staked?: boolean;
  showModal?: () => void;

  name?: string;
  identifier?: string;
  src?: string;

  onAction?: () => void;
}

export const NftCard: VFC<NftCardProps> = ({ className, isNew = false, showModal, staked = false, name, identifier, src, onAction }) => {
  return (
    isNew ? (
      <Button className={cn(className, styles.addNew)} onClick={() => showModal()}>
        +
      </Button>
    ) : (
      <Card className={cn(className, styles.nftCard)}>
        <img src={src} alt={name} className={styles.imgCard} />
        <H3 align="center" className={styles.title}>{identifier}</H3>
        <Button
          size="md"
          variant="outlined"
          className={styles.viewButton}
          onClick={() => {
            onAction();
          }}
        >
          { staked ? 'UNSTAKE' : 'STAKE' }
        </Button>
      </Card>
    )
  );
};
