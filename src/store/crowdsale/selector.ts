import type { State, TCrowdSaleState } from 'types';

const crowdSaleSelector = {
  geTCrowdSaleState: (state: State): TCrowdSaleState => state.crowdSale,
  getProp: <T extends keyof TCrowdSaleState>(propKey: T) => (state: State) => state.crowdSale[propKey],
};

export default crowdSaleSelector;
