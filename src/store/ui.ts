import { atomFamily, atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';
import { StacksMainnet, StacksTestnet } from '@stacks/network';

export enum LOADING_KEYS {
  AUTH = 'loading/AUTH',
}

export const loadingAtom = atomFamily(key => atom(false));
export const networkAtom = atom(() => {
  const _network = new StacksTestnet();
  _network.coreApiUrl = 'https://stacks-node-api.regtest.stacks.co';
  return _network;
});
// Used temporarily to force getting names from mainnet
export const mainnetNetworkAtom = atom(() => {
  const _network = new StacksMainnet();
  _network.coreApiUrl = 'https://stacks-node-api.stacks.co';
  return _network;
});
export const showPendingOverlayAtom = atom(false);

export const showAboutAtom = atomWithStorage('show-welcome', true);
export const booleanAtom = atomFamily((key: string) => atom(false));
