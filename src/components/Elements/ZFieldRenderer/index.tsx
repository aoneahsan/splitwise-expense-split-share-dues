// #region ---- Core Imports ----
import { ZClassNames } from '@/Packages/ClassNames';
import {
  ZRUInput,
  ZRUInputSlot,
  ZRURadio,
  ZRUSelect,
  ZRUTextArea
} from '@/components/RadixUI';
import {
  ZRUColorE,
  ZRUSelectValueI,
  ZRUSideE
} from '@/types/radixUI/index.type';
import { FormFieldType } from '@/utils/enums/index.enum';
import { isZNonEmptyString, makeWordCapitalize } from '@/utils/helpers';
import React, { useCallback, useState } from 'react';
import ZPrizeInput from '../ZPrizeInput';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import {
  ZPrizeInputStateI,
  type ZPrizeInputOnChange
} from '@/types/elements/prize.type';
import ZSelect from '../ZSelect';
import {
  ActionMeta,
  GroupBase,
  MultiValue,
  OptionsOrGroups,
  PropsValue,
  SingleValue
} from 'react-select';
import { ZRSelectOptions } from '@/types/elements/select.type';
type ZFieldRendererBaseProps = {
  name?: string;
  className?: string;
  placeholder?: string;
  label?: string;
  isValid?: boolean;
  errorNode?: React.ReactNode;
  infoNode?: React.ReactNode;
  labelClassName?: string;
  required?: boolean;
};

type ZFieldRendererTextProps = ZFieldRendererBaseProps & {
  type:
    | FormFieldType.text
    | FormFieldType.password
    | FormFieldType.email
    | FormFieldType.date;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

type ZFieldRendererPrizeProps = ZFieldRendererBaseProps & {
  type: FormFieldType.prize;
  onChange?: ZPrizeInputOnChange;
  value?: ZPrizeInputStateI;
};

type ZFieldRendererSelectProps = ZFieldRendererBaseProps & {
  type: FormFieldType.select;
  value?: PropsValue<ZRSelectOptions>;
  options: OptionsOrGroups<ZRSelectOptions, GroupBase<ZRSelectOptions>>;
  isMulti?: boolean;
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

type ZFieldRendererDescriptionProps = ZFieldRendererBaseProps & {
  type: FormFieldType.description;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
};

type ZFieldRendererRatioProps = ZFieldRendererBaseProps & {
  type: FormFieldType.ratio;
  onChange?: React.FormEventHandler<HTMLDivElement>;
  value?: string;
  options: ZRUSelectValueI[];
};

type ZFieldRendererI =
  | ZFieldRendererTextProps
  | ZFieldRendererPrizeProps
  | ZFieldRendererSelectProps
  | ZFieldRendererDescriptionProps
  | ZFieldRendererRatioProps;
// #endregion

const ZFieldRenderer: React.FC<ZFieldRendererI> = ({
  type = FormFieldType.text,
  name,
  className,
  placeholder,
  labelClassName,
  label,
  errorNode,
  infoNode,
  isValid,
  value,
  required,
  onChange,
  ...rest
}) => {
  // if type is password
  const [showPassword, setShowPassword] = useState(false);

  switch (type) {
    case FormFieldType.text:
    case FormFieldType.email:
    case FormFieldType.password:
    case FormFieldType.date:
      return (
        <ZRUInput
          size='3'
          className={ZClassNames(className)}
          placeholder={placeholder}
          label={isZNonEmptyString(label) ? label : makeWordCapitalize(type)}
          errorNode={errorNode}
          infoText={infoNode}
          isValid={isValid}
          name={name}
          required={required}
          labelClassName={ZClassNames(labelClassName)}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          type={type === FormFieldType.date ? 'date' : 'text'}
          value={
            type === FormFieldType.password
              ? showPassword
                ? (value as string)
                : '*'.repeat((value as string)?.length ?? 0)
              : (value as string)
          }
        >
          {type === FormFieldType.password ? (
            <ZRUInputSlot
              side={ZRUSideE.right}
              className='text-sm cursor-pointer'
              onClick={() => {
                setShowPassword((oldValue) => !oldValue);
              }}
            >
              {showPassword ? 'Show' : 'Hide'}
            </ZRUInputSlot>
          ) : null}
        </ZRUInput>
      );

    case FormFieldType.prize:
      return (
        <ZPrizeInput
          onChange={onChange as ZPrizeInputOnChange}
          labelClassName={ZClassNames(labelClassName)}
          className={ZClassNames(className)}
          required={required}
          errorNode={errorNode}
          infoText={infoNode}
          isValid={isValid}
          value={value as ZPrizeInputStateI}
        />
      );

    case FormFieldType.select:
      const { isMulti, options: _selectOption } =
        rest as ZFieldRendererSelectProps;
      return (
        <ZSelect
          label={isZNonEmptyString(label) ? label : makeWordCapitalize(type)}
          labelClassName={ZClassNames(labelClassName)}
          value={value as PropsValue<ZRSelectOptions>}
          className={ZClassNames(className)}
          required={required}
          errorNode={errorNode}
          infoText={infoNode}
          isValid={isValid}
          isMulti={isMulti}
          options={
            _selectOption as OptionsOrGroups<
              ZRSelectOptions,
              GroupBase<ZRSelectOptions>
            >
          }
          onChange={
            onChange as (
              newValue:
                | MultiValue<ZRSelectOptions>
                | SingleValue<ZRSelectOptions>,
              actionMeta: ActionMeta<ZRSelectOptions>
            ) => void
          }
        />
      );

    case FormFieldType.description:
      return (
        <ZRUTextArea
          label={isZNonEmptyString(label) ? label : makeWordCapitalize(type)}
          labelClassName={ZClassNames(labelClassName)}
          value={value as string}
          className={ZClassNames(className)}
          required={required}
          errorNode={errorNode}
          infoText={infoNode}
          isValid={isValid}
          name={name}
          placeholder={placeholder}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
        ></ZRUTextArea>
      );

    case FormFieldType.ratio:
      const { options: _ratioOption } = rest as ZFieldRendererRatioProps;
      return (
        <ZRURadio
          label={isZNonEmptyString(label) ? label : makeWordCapitalize(type)}
          labelClassName={ZClassNames(labelClassName)}
          value={value as string}
          required={required}
          errorNode={errorNode}
          infoText={infoNode}
          isValid={isValid}
          className={ZClassNames(className)}
          color={ZRUColorE.gold}
          options={_ratioOption}
          onChange={onChange as React.FormEventHandler<HTMLDivElement>}
        />
      );
    default:
      return <></>;
  }
};

export default ZFieldRenderer;
