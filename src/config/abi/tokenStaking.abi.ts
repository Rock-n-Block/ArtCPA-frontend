import { AbiRegistry } from '@elrondnetwork/erdjs/out';
import tokenStakingAbi from './cpa-token-staking.abi.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ABI = tokenStakingAbi as any;

export const TokenStakingABI = AbiRegistry.create(ABI);
