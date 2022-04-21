import { VFC } from 'react';
import { Text } from 'components';

import cn from 'clsx';

import styles from './styles.module.scss';

export interface MenuProps {
  className?: string;
}

export const Menu: VFC<MenuProps> = ({ className }) => {
  return (
    <div className={cn(styles.menu, className)}>
      <Text size="l">Menu</Text>
    </div>
  );
};
