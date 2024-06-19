// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUBox,
  ZRUButton,
  ZRUFlex,
  ZRUHeading,
  ZRUInput,
  ZRUInputSlot,
  ZRUText,
  ZRUTextArea
} from '@/components/RadixUI';
import { ZPrizeInput, ZSelect } from '@/components/Elements';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUHeadingAsE,
  ZRUJustifyE
} from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { ZCloseCircleIcon } from '@/assets';

// #endregion

const ZSettleUpModal: React.FC<{ hideModal: () => void }> = ({ hideModal }) => {
  return (
    <ZRUBox>
      <ZRUFlex align={ZRUAlignE.center} justify={ZRUJustifyE.between}>
        <ZRUHeading
          as={ZRUHeadingAsE.h2}
          className='text-2xl font-medium'
          color={ZRUColorE.gold}
        >
          Settle up
        </ZRUHeading>

        <ZRUText color={ZRUColorE.gold}>
          <ZCloseCircleIcon
            className='w-6 h-6 cursor-pointer'
            onClick={() => hideModal()}
          />
        </ZRUText>
      </ZRUFlex>

      <ZRUBox className='mt-4 *:mt-4'>
        <ZSelect label='Paid by' options={[]} />
        <ZSelect label='Paid to' options={[]} />
        <ZPrizeInput />
        <ZSelect label='Group' options={[]} />
        <ZRUTextArea label='Notes' />
      </ZRUBox>

      <ZRUFlex
        className='mt-5'
        align={ZRUAlignE.center}
        justify={ZRUJustifyE.end}
        gap='3'
      >
        <ZRUButton
          size='3'
          onClick={() => {
            hideModal();
          }}
        >
          Cancel
        </ZRUButton>
        <ZRUButton size='3' color={ZRUColorE.violet}>
          Settle
        </ZRUButton>
      </ZRUFlex>
    </ZRUBox>
  );
};

export default ZSettleUpModal;
