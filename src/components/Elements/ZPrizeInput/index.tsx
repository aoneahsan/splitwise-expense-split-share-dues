// #region ---- Core Imports ----
import React, { useState } from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUFlex,
  ZRUInput,
  ZRUInputSlot,
  ZRUSelect,
  ZRUText
} from '@/components/RadixUI';
import { ZCurrenciesData } from '@/data/currencies.data';

// #endregion

// #region ---- Types Imports ----
import { ZRUAlignE } from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

const ZPrizeInput: React.FC = () => {
  const [currency, setCurrency] = useState<{
    value: string;
    label: string;
    symbol: string;
  }>(ZCurrenciesData[0]);

  return (
    <ZRUFlex align={ZRUAlignE.center} gap='2'>
      <ZRUSelect
        className='w-20'
        options={ZCurrenciesData}
        onValueChange={(value) => {
          const item = ZCurrenciesData?.find((el) => el.value === value);
          if (item !== undefined) {
            setCurrency(() => ({ ...item }));
          }
        }}
        value={currency?.value}
        triggerClassName='w-full'
      />
      <ZRUInput className='flex-1'>
        <ZRUInputSlot>
          <ZRUText className='ps-1'>{currency?.symbol}</ZRUText>
        </ZRUInputSlot>
      </ZRUInput>
    </ZRUFlex>
  );
};

export default ZPrizeInput;
