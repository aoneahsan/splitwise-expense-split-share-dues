// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUBox,
  ZRUFlex,
  ZRUHeading,
  ZRUInput,
  ZRUInputSlot,
  ZRUText
} from '@/components/RadixUI';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUHeadingAsE,
  ZRUJustifyE,
  ZRUSideE
} from '@/types/radixUI/index.type';
import { ZCloseCircleIcon } from '@/assets';
import { ZFieldRenderer } from '@/components/Elements/ZDynamicFormBuilder';
import { FormFieldType } from '@/utils/enums/index.enum';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

const ZExpenseFormModal: React.FC<{ hideModal: () => void }> = ({
  hideModal
}) => {
  return (
    <ZRUBox>
      <ZRUFlex align={ZRUAlignE.center} justify={ZRUJustifyE.between}>
        <ZRUHeading
          as={ZRUHeadingAsE.h2}
          className='text-2xl font-medium'
          color={ZRUColorE.gold}
        >
          Add an Expense
        </ZRUHeading>

        <ZRUText color={ZRUColorE.gold}>
          <ZCloseCircleIcon
            className='w-6 h-6 cursor-pointer'
            onClick={() => hideModal()}
          />
        </ZRUText>
      </ZRUFlex>
      <ZRUBox className='mt-4'>
        <ZFieldRenderer type={FormFieldType.password} value='123453' />
      </ZRUBox>
    </ZRUBox>
  );
};

export default ZExpenseFormModal;
