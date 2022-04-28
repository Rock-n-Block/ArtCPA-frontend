/* eslint-disable global-require */
import { VFC } from 'react';

import cn from 'clsx';

import { Select } from 'components/Select/Select';
import { OptionType } from 'components/Select/Select.types';
import styles from './styles.module.scss';

export interface SelectCurrencyProps {
  className?: string;
  options?: OptionType[];
  defaultValue?: OptionType;
  onChange?:(event) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any
}

export const SelectCurrency: VFC<SelectCurrencyProps> = ({ className, options, onChange, value }) => {
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
