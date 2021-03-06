import { VFC } from 'react';

import cn from 'clsx';
import { H1 } from 'components';
import { NftCard } from 'components/NftCard';
import { WrapContainer } from 'components/WrapContainer';
import { NftCollectionsHelper } from './NftCollections.helper';
import styles from './styles.module.scss';

export interface NftCollectionsProps {
  className?: string;
}

export const NftCollections: VFC<NftCollectionsProps> = ({ className }) => {
  return (
    <WrapContainer className={cn(styles.nftCollections, className)}>
      <H1 align="center" weight="bold">NFT Collections</H1>
      <div className={styles.wrapperCard}>
        {NftCollectionsHelper.map((nftCard) => (
          <div className={styles.nft} key={nftCard.title}>
            <NftCard {...nftCard} />
          </div>
        ))}
      </div>
    </WrapContainer>
  );
};
