// #region ---- Core Imports ----
import React, { useCallback, useEffect, useState } from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUBox,
  ZRUFlex,
  ZRUInput,
  ZRUInputSlot,
  ZRUSelect,
  ZRUText
} from '@/components/RadixUI';
import { ZCurrenciesData } from '@/data/currencies.data';
import { ZClassNames } from '@/Packages/ClassNames';
import constants from '@/utils/constants';

// #endregion

// #region ---- Types Imports ----
import { ZRUAlignE, ZRUColorE, ZRUTextAsE } from '@/types/radixUI/index.type';
import {
  type ZPrizeInputOnChange,
  type ZPrizeInputStateI
} from '@/types/elements/prize.type';

export interface ZPrizeInputI {
  onChange?: ZPrizeInputOnChange;
  value?: ZPrizeInputStateI;
  className?: string;
  labelClassName?: string;
  required?: boolean;
  isValid?: boolean;
  errorNode?: React.ReactNode;
  infoText?: React.ReactNode;
}
// #endregion

const ZPrizeInput: React.FC<ZPrizeInputI> = ({
  onChange,
  value,
  className,
  labelClassName,
  required = false,
  isValid = true,
  errorNode,
  infoText
}) => {
  const [compState, setCompState] = useState<ZPrizeInputStateI>({
    currency: constants.defaultValues.currency,
    prize: '0'
  });

  const handleCurrencyChange = useCallback(
    (newValue: string) => {
      const selectedCurrency = ZCurrenciesData.find(
        (currency) => currency?.value === newValue
      );
      if (selectedCurrency) {
        const updatedState = {
          ...compState,
          currency: selectedCurrency
        };
        setCompState(() => updatedState);
        if (onChange) {
          onChange(updatedState);
        }
      }
    },
    [compState, onChange]
  );

  const handlePrizeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const updatedState = {
        ...compState,
        prize: e?.target?.value
      };
      setCompState(() => updatedState);
      if (onChange) {
        onChange(updatedState);
      }
    },
    [compState, onChange]
  );

  useEffect(() => {
    if (value !== undefined && value !== null) {
      setCompState(() => ({
        ...value
      }));
    }
  }, []);

  return (
    <ZRUBox className={ZClassNames(className)}>
      <ZRUText
        as={ZRUTextAsE.label}
        className={ZClassNames(labelClassName, 'maxSm:!text-sm')}
      >
        Prize
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
      <ZRUFlex align={ZRUAlignE.start} gap='1' className='maxSm:flex-col'>
        <ZRUSelect
          size='3'
          className='w-full sm:w-20'
          options={ZCurrenciesData}
          value={compState?.currency?.value}
          triggerClassName='w-full'
          onValueChange={handleCurrencyChange}
        />
        <ZRUInput
          size='3'
          className='flex-1 maxSm:w-full'
          isValid={isValid}
          errorNode={errorNode}
          infoText={infoText}
          onChange={handlePrizeChange}
        >
          <ZRUInputSlot>
            <ZRUText className='ps-1'>{compState?.currency?.symbol}</ZRUText>
          </ZRUInputSlot>
        </ZRUInput>
      </ZRUFlex>
    </ZRUBox>
  );
};

export default ZPrizeInput;
