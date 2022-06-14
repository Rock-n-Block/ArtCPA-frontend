import { AbiRegistry } from '@elrondnetwork/erdjs/out';
import nftStakingAbi from './cpa-nft-staking.abi.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ABI = nftStakingAbi as any;

export const NftStakingABI = AbiRegistry.create(ABI);
