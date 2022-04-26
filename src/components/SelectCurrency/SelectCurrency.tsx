import { VFC } from 'react';

import cn from 'clsx';

import { Select } from 'components/Select/Select';
import { OptionType } from 'components/Select/Select.types';
import styles from './styles.module.scss';

export interface SelectCurrencyProps {
  className?: string;
  options?: OptionType[];
}

export const SelectCurrency: VFC<SelectCurrencyProps> = ({ className, options }) => {
  return (
    <div className={cn(styles.selectCurrency, className)}>
      <Select
        options={options}
        className={cn(styles.selectCurrency, className)}
        // placeholder="Select currency"
        classNameOptionText={styles.optionText}
        classNameControl={styles.controlCurrency}
        classNameMenu={styles.menu}
        classNameMenuList={styles.menuList}
        classNameSelect={styles.selectClassName}
        classNameOption={styles.option}
        classNamePlaceholder=""
        classNameSingleValue={styles.singleValue}
      />
    </div>
  );
};
