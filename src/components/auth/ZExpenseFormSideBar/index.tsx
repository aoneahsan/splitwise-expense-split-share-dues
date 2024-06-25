// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUAvatar,
  ZRUBox,
  ZRUButton,
  ZRUFlex,
  ZRUHeading,
  ZRUInput,
  ZRUInputSlot,
  ZRURadio,
  ZRUScrollArea,
  ZRUText
} from '@/components/RadixUI';
import ZFieldRenderer from '@/components/Elements/ZFieldRenderer';
import { expenseFormFields } from '@/utils/constants/formFields';
import ZSelect from '@/components/Elements/ZSelect';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUJustifyE,
  ZRUScrollbarsE
} from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { ZCloseCircleIcon } from '@/assets';
import { FormFieldType } from '@/utils/enums/index.enum';
import { GroupBase, OptionsOrGroups } from 'react-select';
import { ZRSelectOptions } from '@/types/elements/select.type';

// #endregion

const ZExpenseFormSideBar: React.FC<{ closeSidebar: () => void }> = ({
  closeSidebar
}) => {
  return (
    <ZRUBox className='relative h-full'>
      <ZRUScrollArea
        scrollbars={ZRUScrollbarsE.vertical}
        className='p-5 maxSm:pb-14'
      >
        <ZRUFlex align={ZRUAlignE.center} justify={ZRUJustifyE.between}>
          <ZRUHeading color={ZRUColorE.grass}>Add an Expense</ZRUHeading>
          <ZCloseCircleIcon
            className='w-6 h-6 transition-all cursor-pointer text-tertiary hover:text-success-dark'
            onClick={() => {
              closeSidebar();
            }}
          />
        </ZRUFlex>

        <ZRUBox className='pb-16 mt-4'>
          {(
            Object.keys(expenseFormFields) as Array<
              keyof typeof expenseFormFields
            >
          ).map((el, index) => {
            const element = expenseFormFields[el];
            return (
              <ZFieldRenderer
                key={index}
                type={element.type}
                className='mt-4'
              />
            );
          })}

          <ZSelect options={[]} label='Paid by' className='w-full mt-4' />

          <ZSelect options={[]} label='Participants' className='w-full mt-4' />

          <ZRURadio
            className='mt-5'
            radioClassName='flex-row gap-x-4 gap-y-2 mt-1 flex-wrap'
            color={ZRUColorE.gold}
            options={[
              { value: 'splitEqually', label: 'Split equally' },
              { value: 'splitByExactAmounts', label: 'Split by exact amounts' },
              { value: 'splitByPercentages', label: 'Split by percentages' }
            ]}
          />

          <ZRUBox className='mt-5'>
            <ZRUFlex
              align={ZRUAlignE.center}
              justify={ZRUJustifyE.between}
              className='maxSm:flex-col maxSm:*:w-full maxSm:gap-y-2'
            >
              <ZRUFlex align={ZRUAlignE.center} gap='2'>
                <ZRUAvatar fallback='1' /> <ZRUText>Name here</ZRUText>
              </ZRUFlex>

              <ZRUInput className='w-28'>
                <ZRUInputSlot>$</ZRUInputSlot>
              </ZRUInput>
            </ZRUFlex>
          </ZRUBox>
        </ZRUBox>
      </ZRUScrollArea>

      <ZRUFlex
        className='absolute bottom-0 left-0 w-full sm:h-16 gap-3 px-4 shadow-inner bg-light maxSm:flex-col maxSm:*:w-full maxSm:py-2'
        justify={ZRUJustifyE.end}
        align={ZRUAlignE.center}
      >
        <ZRUButton
          size='3'
          onClick={() => {
            closeSidebar();
          }}
        >
          Cancel
        </ZRUButton>
        <ZRUButton size='3' color={ZRUColorE.violet}>
          Create
        </ZRUButton>
      </ZRUFlex>
    </ZRUBox>
  );
};

export default ZExpenseFormSideBar;
