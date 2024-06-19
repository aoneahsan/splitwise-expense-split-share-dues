// #region ---- Core Imports ----
import React, { useState } from 'react';

// #endregion

// #region ---- Packages Imports ----
import Select, {
  type SingleValue,
  type ActionMeta,
  type MultiValue,
  type PropsValue,
  type GroupBase,
  type OptionsOrGroups,
  type DropdownIndicatorProps,
  components,
  type StylesConfig
} from 'react-select';
import { ZClassNames } from '@/Packages/ClassNames';

// #endregion

// #region ---- Custom Imports ----
import { isZNonEmptyString } from '@/utils/helpers';
import { ZRUBox, ZRUText } from '@/components/RadixUI';

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

// #region ---- Types Imports ----
import { type ZRSelectOptions } from '@/types/elements/select.type';
import { type SelectComponents } from 'react-select/dist/declarations/src/components';
import { ZRUColorE, ZRUTextAsE } from '@/types/radixUI/index.type';
type ZSelectI = {
  className?: string;
  labelClassName?: string;
  label?: string;
  selectClassName?: string;
  classNamePrefix?: string;
  required?: boolean;
  name?: string;
  placeholder?: React.ReactNode;
  disabled?: boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  isRtl?: boolean;
  isSearchable?: boolean;
  isValid?: boolean;
  errorNode?: React.ReactNode;
  value?: PropsValue<ZRSelectOptions>;
  defaultValue?: PropsValue<ZRSelectOptions>;
  options: OptionsOrGroups<ZRSelectOptions, GroupBase<ZRSelectOptions>>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
  infoText?: React.ReactNode;
  styles?: StylesConfig<ZRSelectOptions, boolean, GroupBase<ZRSelectOptions>>;
  components?: Partial<
    SelectComponents<ZRSelectOptions, boolean, GroupBase<ZRSelectOptions>>
  >;
  // isMulti: false | true;
  // onChange?: (
  //   newValue: ZSelectValue,
  //   actionMeta: ActionMeta<ZRSelectOptions>
  // ) => void;
} & (
  | {
      isMulti?: false;
      onChange?: (
        newValue: SingleValue<ZRSelectOptions>,
        actionMeta: ActionMeta<ZRSelectOptions>
      ) => void;
    }
  | {
      isMulti: true;
      onChange?: (
        newValue: MultiValue<ZRSelectOptions>,
        actionMeta: ActionMeta<ZRSelectOptions>
      ) => void;
    }
);

// Define a conditional type based on the isMulti prop
// type ZSelectValue = ZSelectI["isMulti"] extends true
//   ? MultiValue<ZRSelectOptions>
//   : SingleValue<ZRSelectOptions>;
// type ZSelectValue = MultiValue<ZRSelectOptions> | SingleValue<ZRSelectOptions>;

// #endregion

export const ZSelect: React.FC<ZSelectI> = ({
  defaultValue,
  isMulti = false,
  name,
  placeholder,
  isClearable,
  isDisabled,
  isRtl,
  isSearchable,
  options,
  value,
  className,
  classNamePrefix,
  styles,
  components,
  label,
  labelClassName,
  required = false,
  isValid = true,
  errorNode,
  infoText,
  selectClassName,
  onFocus,
  onBlur,
  onChange
}) => {
  return (
    <ZRUBox className={className}>
      {isZNonEmptyString(label) ? (
        <ZRUText as={ZRUTextAsE.label} className={labelClassName}>
          {label}
          {required ? (
            <ZRUText
              as={ZRUTextAsE.span}
              className='ms-1'
              color={ZRUColorE.tomato}
            >
              *
            </ZRUText>
          ) : null}
        </ZRUText>
      ) : null}

      <Select
        styles={styles}
        defaultValue={defaultValue}
        isMulti={isMulti}
        name={name}
        components={components}
        placeholder={placeholder}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isRtl={isRtl}
        isSearchable={isSearchable}
        options={options}
        value={value}
        className={selectClassName}
        classNamePrefix={classNamePrefix}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(value, actionMeta: ActionMeta<ZRSelectOptions>) => {
          if (onChange !== undefined) {
            const _value = value as ZRSelectOptions &
              MultiValue<ZRSelectOptions>;
            onChange(_value, actionMeta);
          }
        }}
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

export default ZSelect;
