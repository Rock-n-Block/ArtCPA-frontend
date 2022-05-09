import { AbiRegistry } from '@elrondnetwork/erdjs/out';
import { CrowdSaleABI } from './abi/crowdsale.abi';

export const isDev = true;

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
    address: isDev ? 'erd1qqqqqqqqqqqqqpgqeprmgjlv90jfxgqfa82sc2aqkua99hjtp0wqkrqgqu' : 'erd1qqqqqqqqqqqqqpgqeprmgjlv90jfxgqfa82sc2aqkua99hjtp0wqkrqgqu',
    abi: CrowdSaleABI,
  },
};
