import { noop } from 'lodash';
import { ConnectModalProps } from './ConnectModal';

export const disconnectModalPropsMocked: ConnectModalProps = {
  isOpen: true,
  onClose: noop,
};
