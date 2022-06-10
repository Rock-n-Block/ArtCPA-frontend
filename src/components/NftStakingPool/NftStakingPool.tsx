import { VFC, useState } from 'react';

import cn from 'clsx';

import { H3, Modal, Button } from 'components';

import { NftCard } from './components/NftCard';

import styles from './styles.module.scss';

export interface NftStakingPoolProps {
  className?: string;
  loggedIn?: string;
  reward?: number;
  stakedNfts?: any [];
  ownedNfts?: any [];
  stake?: (collection, nonce) => void;
  unstake?: (collection, nonce) => void;
  unstakeAllOrClaim?: (method) => void;
}

export const NftStakingPool: VFC<NftStakingPoolProps> = ({
  className,
  ownedNfts,
  stakedNfts,
  stake,
  unstake,
  unstakeAllOrClaim,
  loggedIn,
  reward,
}) => {
  const [showStakeModal, setShowStakeModal] = useState(false);

  return (
    <>
      <div className={styles.buttonGroup}>
        <H3 className={styles.nftInfo}>
          You can stake <a href="https://isengard.market/collection/CPA-8f71d0" rel="noreferrer" target="_blank" className={styles.highlight}>EarthSpirits</a> and <a href="https://isengard.market/collection/CPA-c6d2fb" rel="noreferrer" target="_blank" className={styles.highlight}>Community</a> NFTs
        </H3>
        <Button
          disabled={!loggedIn || !stakedNfts.length}
          className={styles.button}
          onClick={() => unstakeAllOrClaim('unstakeAll')}
        >
          UNSTAKE ALL
        </Button>
        <Button
          disabled={!loggedIn || !reward}
          className={styles.button}
          onClick={() => unstakeAllOrClaim('claimReward')}
        >
          CLAIM REWARD
        </Button>
      </div>

      <div className={cn(className, styles.wrapperCard)}>
        {stakedNfts.map((nftCard) => (
          <div className={styles.nft} key={nftCard.identifier}>
            <NftCard
              {...nftCard}
              staked
              onAction={() => unstake(nftCard.collection, nftCard.nonce)}
            />
          </div>
        ))}
        <div className={styles.nft}>
          <NftCard
            isNew
            showModal={() => {
              if(!loggedIn) return;
              setShowStakeModal(true);
            }}
          />
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
        {
          ownedNfts.map((nftCard) => (
            <div
              key={nftCard.identifier}
              className={styles.nft}
              style={{ padding: 10 }}
            >
              <NftCard
                {...nftCard}
                onAction={() => {
                  setShowStakeModal(false);
                  stake(nftCard.collection, nftCard.nonce);
                }}
              />
            </div>
          ))
        }
        {
          !ownedNfts.length && (
            <H3
              className={styles.blankText}
            >
              No available nfts to stake.
            </H3>
          )
        }
      </Modal>
    </>
  );
};
