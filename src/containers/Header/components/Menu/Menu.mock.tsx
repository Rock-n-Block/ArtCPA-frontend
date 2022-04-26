import { noop } from 'lodash';
import { MenuProps } from './Menu';

export const menuPropsMocked: MenuProps = {
  isOpen: false,
  onClose: noop,
};
