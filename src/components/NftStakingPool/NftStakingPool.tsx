import { VFC, useState } from 'react';

import cn from 'clsx';

import { Modal } from 'components';

import { NftCard } from './components/NftCard';
import { NftCollectionsHelper } from './NftCollections.helper';

import styles from './styles.module.scss';

export interface NftStakingPoolProps {
  className?: string;

  stake?: (amount) => void;
  unstake?: () => void;
  reinvest?: () => void;
  claim?: () => void;
}

export const NftStakingPool: VFC<NftStakingPoolProps> = ({
  className,
  // stake,
  // unstake,
  // reinvest,
  // claim,
}) => {
  const [showStakeModal, setShowStakeModal] = useState(false);

  return (
    <>
      <div className={cn(className, styles.wrapperCard)}>
        {NftCollectionsHelper.map((nftCard) => (
          <div className={styles.nft} key={nftCard.title}>
            <NftCard
              {...nftCard}
              staked
            />
          </div>
        ))}
        <div className={styles.nft}>
          <NftCard isNew showModal={() => setShowStakeModal(true)} />
        </div>
      </div>

      <Modal
        isOpen={showStakeModal}
        onClose={() => setShowStakeModal(false)}
        title="Select NFT to stake"
        className={styles.modalWrapper}
        // size="none"
        isDisabledScroll
      >
        {NftCollectionsHelper.map((nftCard) => (
          <div className={styles.nft} key={nftCard.title} style={{ padding: 10 }}>
            <NftCard {...nftCard} />
          </div>
        ))}
      </Modal>
    </>
  );
};
