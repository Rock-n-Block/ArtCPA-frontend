import {
  FC,
  PropsWithChildren,
  createElement,
  CSSProperties,
} from 'react';
import cn from 'clsx';
import {
  TextAlign as Align,
  TextColor as Color,
  TextSize as Size,
  TextWeight as Weight,
} from 'types';

import styles from './styles.module.scss';

type Tag = 'p' | 'span';

type Props = {
  tag?: Tag,
  className?: string,
  style?: CSSProperties,
  size?: Size,
  color?: Color,
  align?: Align,
  weight?: Weight,
  noWrap?: boolean;
};

const Text: FC<PropsWithChildren<Props>> = ({
  tag = 'p',
  children,
  className,
  style = { },
  size = 'm',
  color = 'default',
  align = 'left',
  weight = 'normal',
  noWrap = true,
}) => (
  createElement(
    tag,
    {
      style,
      className: cn(
        styles.text,
        styles[size],
        styles[color],
        styles[align],
        styles[`${weight}Weight`],
        { [styles.noWrap]: noWrap },
        className,
      ),
    },
    [children],
  )
);

export default Text;
