import { AbiRegistry } from '@elrondnetwork/erdjs/out';
import { TSingleToken } from 'types';
import { CrowdSaleABI } from './abi/crowdsale.abi';

export const isDev = true;

export const MainToken: TSingleToken = {
  symbol: 'WUSDC',
  address: 'WUSDC-553207',
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
    address: isDev ? 'erd1qqqqqqqqqqqqqpgqzndquqemkylnmwcpu6vkf8pt6umnypgap0wqyduahe' : 'erd1qqqqqqqqqqqqqpgqzndquqemkylnmwcpu6vkf8pt6umnypgap0wqyduahe',
    abi: CrowdSaleABI,
  },
};

export const getContract = (contract: EContracts) => {
  return contracts[contract];
};
