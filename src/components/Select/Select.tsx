import React, { ReactElement, useCallback, useMemo } from 'react';
import cn from 'clsx';
import { ChevronDown } from 'assets/icons/icons';
import RSelect, {
  components as component,
  ControlProps,
  OptionProps,
  PlaceholderProps,
  MenuListProps,
  MenuProps,
  IndicatorsContainerProps,
  Props as ReactSelectProps, SingleValueProps, DropdownIndicatorProps,
} from 'react-select';
import { GroupBase } from 'react-select/dist/declarations/src/types';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import { Text } from '..';
import styles from './styles.module.scss';
import { CustomStyles, OptionType } from './Select.types';

const ROOT = document.querySelector('body');

export interface SelectProps<
  Option extends OptionType = OptionType,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends ReactSelectProps<Option, IsMulti, Group> {
  label?: string;
  customLabel?: ReactElement;
  error?: string;
  value?: Option;
  withErrorText?: boolean;
  disabled?: boolean;
  customStyles?: CustomStyles;
  isMulti?: IsMulti;
  classNameSelect?: string;
  classNameControl?: string;
  classNameOption?: string;
  classNameOptionText?: string;
  classNamePlaceholder?: string;
  classNameMenuList?: string;
  classNameMenu?: string;
  classNameIndicatorsContainer?: string;
  classNameDropdownIndicator?: string;
  classNameValueContainer?: string;
  classNameSingleValue?: string;
  classNameLabel?: string;
  classNameSelectWithErrorWrap?: string;
  withPortal?: boolean;
  components?: SelectComponents<Option, IsMulti, Group>
}

export const Select = ({
  name,
  options,
  value,
  placeholder = 'Select value',
  onChange = () => {},
  label = '',
  customLabel = undefined,
  error = '',
  withErrorText = true,
  disabled,
  closeMenuOnSelect,
  hideSelectedOptions,
  controlShouldRenderValue,
  isClearable = false,
  isSearchable = false,
  isMulti = false,
  customStyles = {},
  classNameSelect = '',
  classNameControl = '',
  classNameOption = '',
  classNameOptionText = '',
  classNamePlaceholder = '',
  classNameMenuList = '',
  classNameMenu = '',
  classNameIndicatorsContainer = '',
  classNameDropdownIndicator = '',
  classNameValueContainer = '',
  classNameSingleValue = '',
  classNameLabel = '',
  classNameSelectWithErrorWrap = '',
  className,
  onMenuOpen,
  onMenuClose,
  withPortal = false,
  menuPortalTarget,
  components,
}: SelectProps<OptionType, boolean, GroupBase<OptionType>>) => {
  const Control = useCallback((props: ControlProps<OptionType, boolean>) => (
    <component.Control
      {...props}
      className={cn(
        styles.control,
        props.isFocused && styles.focused,
        props.menuIsOpen && styles.open,
        error && styles.errorControl,
        classNameControl,
      )}
    />
  ), [classNameControl, error]);

  const Option = useCallback((props: OptionProps<OptionType, boolean>) => (
    <component.Option
      {...props}
      className={cn(
        styles.option,
        props.isSelected && styles.selected,
        props.isFocused && styles.focused,
        classNameOption,
      )}
    >
      {props.data.icon && <img src={props.data.icon} alt="icon" className={styles.iconOption} />}
      <Text
        {...props}
        tag="span"
        weight="medium"
        className={cn(
          styles.optionText,
          classNameOptionText,
        )}
      />
    </component.Option>
  ), [classNameOption, classNameOptionText]);

  const Placeholder = useCallback((props: PlaceholderProps<OptionType, boolean>) => (
    <component.Placeholder
      {...props}
      isFocused={props.isFocused}
      className={cn(
        styles.placeholder,
        classNamePlaceholder,
      )}
    />
  ), [classNamePlaceholder]);

  const MenuList = useCallback((props: MenuListProps<OptionType, boolean>) => (
    <component.MenuList
      {...props}
      maxHeight={props.maxHeight}
      className={cn(
        styles.menuList,
        classNameMenuList,
      )}
    />
  ), [classNameMenuList]);

  const Menu = useCallback((props: MenuProps<OptionType, boolean, GroupBase<OptionType>>) => (
    <component.Menu
      {...props}
      className={cn(
        styles.menu,
        classNameMenu,
      )}
    />
  ), [classNameMenu]);

  const ValueContainer = useCallback((props) => (
    <component.ValueContainer
      {...props}
      className={cn(
        styles.valueContainer,
        classNameValueContainer,
      )}
    >
      <component.Placeholder
        {...props}
        isFocused={props.isFocused}
        className={cn(
          styles.placeholder,
          classNamePlaceholder,
        )}
      >
        {props.selectProps.placeholder}
      </component.Placeholder>
      {React.Children.map(props.children, (child) => (child && child.type !== Placeholder ? child : null))}
    </component.ValueContainer>
  ), [Placeholder, classNamePlaceholder, classNameValueContainer]);

  const SingleValue = useCallback(({ children, ...props }: SingleValueProps<OptionType, boolean, GroupBase<OptionType>>) => (
    <component.SingleValue
      {...props}
      className={cn(styles.singleValue, classNameSingleValue)}
    >
      {props.data.icon && <img src={props.data.icon} alt="icon" className={styles.iconOption} />}
      {children}
    </component.SingleValue>
  ), [classNameSingleValue]);

  const IndicatorsContainer = useCallback((props: IndicatorsContainerProps<OptionType, boolean>) => (
    <component.IndicatorsContainer
      {...props}
      className={cn(
        styles.indicatorsContainer,
        classNameIndicatorsContainer,
      )}
    />
  ), [classNameIndicatorsContainer]);

  const DropdownIndicator = useCallback(({
    selectProps,
  }: DropdownIndicatorProps<OptionType, boolean, GroupBase<OptionType>>) => (
    <ChevronDown
      className={cn(
        styles.dropdownIndicator,
        selectProps.menuIsOpen && styles.open,
        classNameDropdownIndicator,
      )}
    />
  ), [classNameDropdownIndicator]);

  const NoOptionsMessage = useCallback(() => (
    <Text
      className={styles.noOptionsMessage}
      align="center"
    >
      Nothing found
    </Text>
  ), []);

  const menuPortalTargetInfo = withPortal
    ? menuPortalTarget || ROOT
    : null;

  const filterOptions = useMemo(() => {
    return options?.filter((option) => {
      if ('value' in option) {
        return option.value !== value?.value;
      }

      return true;
    });
  }, [options, value]);

  return (
    <div className={cn(styles.selectWrap, className)}>
      {customLabel}
      {(label && !customLabel) && (
        <Text
          className={cn(
            styles.label,
            disabled && styles.disabled,
            classNameLabel,
          )}
          tag="span"
          weight="medium"
        >
          {label}
        </Text>
      )}
      <div className={cn(styles.selectWithErrorWrap, classNameSelectWithErrorWrap)}>
        <RSelect
          components={{
            Option: components?.Option || Option,
            Control: components?.Control || Control,
            IndicatorSeparator: components?.IndicatorSeparator || null,
            IndicatorsContainer: components?.IndicatorsContainer || IndicatorsContainer,
            Placeholder: components?.Placeholder || Placeholder,
            Menu: components?.Menu || Menu,
            ValueContainer: components?.ValueContainer || ValueContainer,
            MenuList: components?.MenuList || MenuList,
            DropdownIndicator: components?.DropdownIndicator || DropdownIndicator,
            SingleValue: components?.SingleValue || SingleValue,
            NoOptionsMessage,
          }}
          isDisabled={disabled}
          options={filterOptions}
          closeMenuOnSelect={closeMenuOnSelect}
          hideSelectedOptions={hideSelectedOptions}
          controlShouldRenderValue={controlShouldRenderValue}
          value={value}
          name={name}
          placeholder={placeholder}
          className={cn(
            styles.select,
            error && styles.error,
            disabled && styles.disabled,
            classNameSelect,
          )}
          isOptionSelected={() => true}
          onChange={onChange}
          styles={{
            ...customStyles,
            placeholder: (provided, state) => ({
              ...provided,
              position: 'absolute',
              top: state.hasValue || state.selectProps.inputValue ? 5 : '30%',
              left: 24,
              transition: 'top 0.1s, font-size 0.1s',
              fontSize: `${(state.hasValue || state.selectProps.inputValue) ? '12px ' : '16px '} !important`,
            }),
          }}
          menuPortalTarget={menuPortalTargetInfo}
          onMenuOpen={onMenuOpen}
          onMenuClose={onMenuClose}
          isMulti={isMulti}
          isClearable={isClearable}
          isSearchable={isSearchable}
        />
        {error && withErrorText && (
          <Text
            size="s"
            color="error"
            align="left"
            className={styles.errorText}
          >
            {error}
          </Text>
        )}
      </div>
    </div>
  );
};
