// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----
import { TextArea } from '@radix-ui/themes';

// #endregion

// #region ---- Custom Imports ----
import { ZRUBox, ZRUText } from '@/components/RadixUI';
import { isZNonEmptyString } from '@/utils/helpers';

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from '@radix-ui/themes/dist/cjs/props';
import {
  type ZRUTriggerVariantE,
  type ZRURadiusE,
  ZRUColorE,
  ZRUTextAsE
} from '@/types/radixUI/index.type';
import { ZClassNames } from '@/Packages/ClassNames';
interface ZRUTextAreaI {
  className?: string;
  textAriaClassName?: string;
  textAriaStyle?: Record<string, unknown>;
  style?: Record<string, unknown>;
  value?: string;
  size?: Responsive<'1' | '2' | '3'>;
  variant?: ZRUTriggerVariantE;
  color?: ZRUColorE;
  name?: string;
  radius?: ZRURadiusE;
  required?: boolean;
  labelClassName?: string;
  label?: string;
  placeholder?: string;
  isValid?: boolean;
  errorNode?: React.ReactNode;
  infoText?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}
// #endregion

/**
 * A customized Radix TextArea component.
 */
const ZRUTextArea: React.FC<ZRUTextAreaI> = ({
  className,
  textAriaClassName,
  textAriaStyle,
  style,
  value,
  size,
  labelClassName,
  variant,
  color,
  name,
  radius,
  required,
  label,
  placeholder,
  isValid,
  errorNode,
  infoText,
  onChange,
  onBlur
}) => {
  return (
    <ZRUBox className={className} style={style}>
      {isZNonEmptyString(label) ? (
        <ZRUText as={ZRUTextAsE.label}>
          {label}
          {required ? (
            <ZRUText
              as={ZRUTextAsE.span}
              className={ZClassNames('ms-1', labelClassName)}
              color={ZRUColorE.tomato}
            >
              *
            </ZRUText>
          ) : null}
        </ZRUText>
      ) : null}
      <TextArea
        placeholder={placeholder}
        className={textAriaClassName}
        style={textAriaStyle}
        value={value}
        size={size}
        variant={variant}
        color={color}
        name={name}
        radius={radius}
        onChange={onChange}
        onBlur={onBlur}
      />

      {/* Error */}
      {isValid === false &&
      ((typeof errorNode === 'string' && isZNonEmptyString(errorNode)) ||
        (errorNode !== null && errorNode !== undefined)) ? (
        <ZRUText
          as={ZRUTextAsE.span}
          size='1'
          color={ZRUColorE.tomato}
          className='font-medium'
        >
          {errorNode}
        </ZRUText>
      ) : null}

      {/* Info */}
      {isValid &&
      ((typeof infoText === 'string' && isZNonEmptyString(infoText)) ||
        (infoText !== null && infoText !== undefined)) ? (
        <ZRUText
          as={ZRUTextAsE.span}
          size='1'
          color={ZRUColorE.gold}
          className='font-medium'
        >
          {infoText}
        </ZRUText>
      ) : null}
    </ZRUBox>
  );
};

export default ZRUTextArea;
