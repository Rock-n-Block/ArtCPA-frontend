import { AbiRegistry } from '@elrondnetwork/erdjs/out';
import tokenStakingAbi from './cpa-token-staking.abi.json';

const ABI = tokenStakingAbi as any;

export const TokenStakingABI = AbiRegistry.create(ABI);
