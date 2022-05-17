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
    address: isDev ? 'erd1qqqqqqqqqqqqqpgqhnydh72fuxhh69sv7qgtu4mzm9h44am4p0wqa9whkj' : 'erd1qqqqqqqqqqqqqpgqhnydh72fuxhh69sv7qgtu4mzm9h44am4p0wqa9whkj',
    abi: CrowdSaleABI,
  },
};

export const getContract = (contract: EContracts) => {
  return contracts[contract];
};
