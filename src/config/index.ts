import { AbiRegistry } from '@elrondnetwork/erdjs/out';
import { TSingleToken } from 'types';
import { CrowdSaleABI } from './abi/crowdsale.abi';

export const isDev = false;

export const MainToken: TSingleToken = {
  symbol: 'CPA',
  address: 'CPA-97530a',
  decimals: '6',
  price: '',
};

export enum EContracts{
  crowdSale = 'crowdSale',
}

type TContracts = {
  [key in EContracts]: {
    address: string;
    abi: AbiRegistry
  }
};

export const contracts:TContracts = {
  [EContracts.crowdSale]: {
    address: isDev ? 'erd1qqqqqqqqqqqqqpgq39zg5nzasxr3xkmlqwcyc3tn5cgqn9kzp0wqs0vqk3' : 'erd1qqqqqqqqqqqqqpgqvj2repz2kxuzhr8tfmf4dqu9xtck3fxkvszqgmytlr',
    abi: CrowdSaleABI,
  },
};

export const getContract = (contract: EContracts) => {
  return contracts[contract];
};
