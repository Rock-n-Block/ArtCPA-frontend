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
    address: isDev ? 'erd1qqqqqqqqqqqqqpgq638hwduyr523mg840ft4m6usp7aldhefp0wq8l6hzg' : 'erd1qqqqqqqqqqqqqpgq638hwduyr523mg840ft4m6usp7aldhefp0wq8l6hzg',
    abi: CrowdSaleABI,
  },
};

export const getContract = (contract: EContracts) => {
  return contracts[contract];
};
