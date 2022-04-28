export * from './store';
export * from './components';

export type TNullable<T> = T | null;
export type TOptionable<T> = T | undefined;

export interface IModalProps {
  className?: string;
  visible: boolean;
  onClose: () => void;
}

// eslint-disable-next-line no-shadow
export enum WalletProviders {
  metamask = 'MetaMask',
}

export type DateLike = string | number | Date;
export type Nullable<T> = null | T;
export type Optinable<T> = undefined | T;
