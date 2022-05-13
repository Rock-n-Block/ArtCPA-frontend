import { AbiRegistry } from '@elrondnetwork/erdjs/out';
import { TSingleToken } from 'types';
import { CrowdSaleABI } from './abi/crowdsale.abi';

export const isDev = true;

export const MainToken: TSingleToken = {
  symbol: 'CPA',
  address: 'CPA-123456',
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
    address: isDev ? 'erd1qqqqqqqqqqqqqpgqhp2u6acq08wjlt36jh293w4lyrspf9nvp0wq7s6tht' : 'erd1qqqqqqqqqqqqqpgqhp2u6acq08wjlt36jh293w4lyrspf9nvp0wq7s6tht',
    abi: CrowdSaleABI,
  },
};
