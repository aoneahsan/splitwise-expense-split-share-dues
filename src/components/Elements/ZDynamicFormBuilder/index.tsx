// #region ---- Core Imports ----
import { ZClassNames } from '@/Packages/ClassNames';
import { ZRUInput, ZRUInputSlot } from '@/components/RadixUI';
import { ZRUSideE } from '@/types/radixUI/index.type';
import { FormFieldType } from '@/utils/enums/index.enum';
import { isZNonEmptyString, makeWorkCapitalize } from '@/utils/helpers';
import React, { useCallback, useState } from 'react';
import ZPrizeInput from '../ZPrizeInput';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

export const ZFieldRenderer: React.FC<{
  type: FormFieldType;
  name?: string;
  className?: string;
  placeholder?: string;
  label?: string;
  isValid?: boolean;
  errorNode?: React.ReactNode;
  infoNode?: React.ReactNode;
  value?: string;
  labelClassName?: string;
  required?: boolean;
}> = ({
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
  required
}) => {
  // if type is password
  const [showPassword, setShowPassword] = useState(false);

  switch (type) {
    case FormFieldType.text:
    case FormFieldType.email:
    case FormFieldType.password:
      return (
        <ZRUInput
          className={ZClassNames(className)}
          placeholder={placeholder}
          label={isZNonEmptyString(label) ? label : makeWorkCapitalize(type)}
          errorNode={errorNode}
          infoText={infoNode}
          isValid={isValid}
          name={name}
          required={required}
          labelClassName={ZClassNames(labelClassName)}
          value={
            type === FormFieldType.password
              ? showPassword
                ? value
                : '*'.repeat(value?.length ?? 0)
              : value
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
      return <ZPrizeInput />;

    default:
      break;
  }
  return <></>;
};

const ZDynamicFormBuilder: React.FC = () => {
  return <></>;
};

export default ZDynamicFormBuilder;
