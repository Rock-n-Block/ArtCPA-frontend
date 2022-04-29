/* eslint-disable global-require */
import { VFC } from 'react';

import cn from 'clsx';

import { Select } from 'components/Select/Select';
import { OptionType } from 'components/Select/Select.types';
import { CRU, EFFORT, EGLD, JEX, MEX, ISET, USDC, ZPAY } from 'assets/icons/icons';
import styles from './styles.module.scss';

export interface SelectCurrencyProps {
  className?: string;
  defaultValue?: OptionType;
  onChange?:(event) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any
}

export const SelectCurrency: VFC<SelectCurrencyProps> = ({ className, onChange, value }) => {
  const options = [
    {
      value: 'CRU',
      label: 'CRU',
      icon: <CRU />,
    },
    {
      value: 'EFFORT',
      label: 'EFFORT',
      icon: <EFFORT />,
    },
    {
      value: 'EGLD',
      label: 'EGLD',
      icon: <EGLD />,
    },
    {
      value: 'JEX',
      label: 'JEX',
      icon: <JEX />,
    },
    {
      value: 'MEX',
      label: 'MEX',
      icon: <MEX />,
    },
    {
      value: 'ISET',
      label: 'ISET',
      icon: <ISET />,
    },
    {
      value: 'USDC',
      label: 'USDC',
      icon: <USDC />,
    },
    {
      value: 'ZPAY',
      label: 'ZPAY',
      icon: <ZPAY />,
    },
  ];
  return (
    <div className={cn(styles.selectCurrency, className)}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        classNameValueContainer={styles.valueContainer}
        classNameOptionText={styles.optionText}
        classNameControl={styles.control}
        classNameMenu={styles.menu}
        classNameMenuList={styles.menuList}
        classNameSelect={styles.selectClassName}
        classNameOption={styles.option}
        classNamePlaceholder={styles.placeholder}
        classNameSingleValue={styles.singleValue}
        classNameIndicatorsContainer={styles.indicatorsContainer}
        classNameDropdownIndicator={styles.indicator}
      />
    </div>
  );
};
