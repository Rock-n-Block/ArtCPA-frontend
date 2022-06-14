import { AbiRegistry } from '@elrondnetwork/erdjs/out';
import { TSingleToken } from 'types';
import { CrowdSaleABI } from './abi/crowdsale.abi';
import { TokenStakingABI } from './abi/tokenStaking.abi';

export const isDev = true;

export const MainToken: TSingleToken = {
  symbol: 'CPA',
  address: isDev ? 'CPA-eabe32' : 'CPA-97530a',
  decimals: '6',
  price: '',
};

export const FounderToken = {
  symbol: 'CPA',
  id: isDev ? 'CPA-60c1a9' : 'CPA-76d979',
  amount: '1',
};

export enum EContracts{
  crowdSale = 'crowdSale',
  tokenStaking = 'tokenStaking',
}

type TContracts = {
  [key in EContracts]: {
    address: string;
    abi: AbiRegistry
  }
};

export const contracts:TContracts = {
  [EContracts.crowdSale]: {
    address: isDev ? 'erd1qqqqqqqqqqqqqpgq39zg5nzasxr3xkmlqwcyc3tn5cgqn9kzp0wqs0vqk3' : 'erd1qqqqqqqqqqqqqpgql0n9dc8vs4zwzrk008awmfrvv63qks3f3wkqmdjm2t',
    abi: CrowdSaleABI,
  },
  [EContracts.tokenStaking]: {
    address: isDev ? 'erd1qqqqqqqqqqqqqpgqstufvpxt4up7nvss30xmw72kkugr9gxrgn8qzzhxns' : 'erd1qqqqqqqqqqqqqpgq73van5qa6flg4emchzk89s0amyd8yv6gfy8q8w428k',
    abi: TokenStakingABI,
  },
};

export const getContract = (contract: EContracts) => {
  return contracts[contract];
};
