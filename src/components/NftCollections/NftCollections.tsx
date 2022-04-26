import { VFC } from 'react';

import cn from 'clsx';
import { H1 } from 'components';
import { NftCard } from 'components/NftCard';
import { NftCollectionsHelper } from './NftCollections.helper';
import styles from './styles.module.scss';

export interface NftCollectionsProps {
  className?: string;
}

export const NftCollections: VFC<NftCollectionsProps> = ({ className }) => {
  return (
    <div className={cn(styles.nftCollections, className)}>
      <H1 align="center">NFT Collections</H1>
      <div className={styles.wrapperCard}>
        {NftCollectionsHelper.map((nftCard) => (
          <NftCard image={nftCard.image} title={nftCard.title} />
        ))}
      </div>
    </div>
  );
};
