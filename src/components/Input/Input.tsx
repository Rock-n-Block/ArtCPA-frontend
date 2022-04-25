import React, {
  VFC,
  ChangeEvent,
  FocusEvent,
  createElement,
  ReactElement,
} from 'react';
import cn from 'clsx';
import { Text } from 'components';
import styles from './styles.module.scss';

export interface InputProps {
  id?: string;
  component?: 'input' | 'textarea';
  type?: 'text' | 'number' | 'password';
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
  classNameInput?: string;
  classNameInputWrap?: string;
  classNameLabel?: string;
  error?: boolean | string;
  success?: boolean;
  endAdorment?: ReactElement | string;
  disabled?: boolean;
  isCorrect?: boolean | '';
  autoComplete?: 'off' | 'on';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const Input:VFC<InputProps> = ({
  id,
  type = 'text',
  component = 'input',
  label,
  name,
  value,
  className,
  classNameInput,
  classNameInputWrap,
  classNameLabel,
  placeholder,
  error,
  success,
  endAdorment,
  disabled = false,
  isCorrect = false,
  autoComplete = 'off',
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  required,
}) => (
  <>
    <label
      htmlFor={id || name}
      className={cn(
        styles.label,
        className,
      )}
    >
      <div
        className={cn(
          styles.inputWrap,
          { [styles.textareaWrapper]: component === 'textarea' },
          { [styles.required]: required },
          classNameInputWrap,
        )}
      >
        {createElement(
          component,
          {
            id: id || name,
            type,
            name,
            value,
            placeholder: component === 'input' ? ' ' : placeholder,
            autoComplete,
            disabled,
            className: cn(
              styles[component],
              { [styles.error]: error },
              { [styles.success]: success },
              { [styles.bigRightPadding]: error || isCorrect },
              classNameInput,
            ),
            onChange,
            onFocus,
            onBlur,
          },
        )}
        {label && (
          <Text
            size="m"
            className={cn(
              styles.labelText,
              classNameLabel,
              // { [styles.noneLabel]: value },
            )}
          >
            {label}
          </Text>
        )}
        {(endAdorment && component !== 'textarea') && <span className={styles.endAdorment}>{endAdorment}</span>}
      </div>
    </label>
    {error && typeof error === 'string' && (
      <span className={styles.textError}>
        {error}
      </span>
    )}
  </>

);
