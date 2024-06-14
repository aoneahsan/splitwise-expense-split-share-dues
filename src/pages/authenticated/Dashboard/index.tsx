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
  ZRUText
} from '@/components/RadixUI';

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
import {
  ZAddCircleOutlineIcon,
  ZPayMoneyIcon,
  ZReceiptOutlineIcon,
  ZReceiveMoneyIcon,
  ZWalletIcon
} from '@/assets';

// #endregion

const Dashboard: React.FC = () => {
  return (
    <>
      <ZRUFlex
        className='px-1 py-2'
        align={ZRUAlignE.center}
        justify={ZRUJustifyE.between}
        width='100%'
      >
        <ZRUHeading
          className='text-3xl font-medium'
          as={ZRUHeadingAsE.h2}
          color={ZRUColorE.grass}
        >
          Dashboard
        </ZRUHeading>
        <ZRUFlex
          className='gap-2'
          align={ZRUAlignE.center}
          justify={ZRUJustifyE.end}
        >
          <ZRUButton size='3' color={ZRUColorE.violet} className='!gap-1'>
            <ZAddCircleOutlineIcon className='w-5 h-5' /> Add an Expense
          </ZRUButton>

          <ZRUButton size='3' color={ZRUColorE.indigo} className='!gap-2'>
            <ZReceiptOutlineIcon className='w-5 h-5' /> Settle Up
          </ZRUButton>
        </ZRUFlex>
      </ZRUFlex>

      <ZRUFlex
        className='gap-6 mt-5'
        align={ZRUAlignE.center}
        justify={ZRUJustifyE.between}
      >
        <ZRUFlex
          align={ZRUAlignE.center}
          className='gap-2 px-3 py-4 rounded-md min-w-max w-[20rem] border-s-[3px] border-success bg-success/20'
        >
          <ZWalletIcon className='w-16 h-16 text-success-dark' />
          <ZRUBox>
            <ZRUText className='font-medium' color={ZRUColorE.grass}>
              Total balance
            </ZRUText>
            <ZRUHeading
              className='font-mono text-3xl font-semibold'
              as={ZRUHeadingAsE.h2}
              color={ZRUColorE.grass}
            >
              $20000
            </ZRUHeading>
          </ZRUBox>
        </ZRUFlex>

        <ZRUFlex
          align={ZRUAlignE.center}
          className='gap-2 px-3 py-4 rounded-md min-w-max w-[20rem] border-s-[3px] border-success bg-success/20'
        >
          <ZReceiveMoneyIcon className='w-16 h-16 text-success-dark' />
          <ZRUBox>
            <ZRUText className='font-medium' color={ZRUColorE.grass}>
              You are Owed
            </ZRUText>
            <ZRUHeading
              className='font-mono text-3xl font-semibold'
              as={ZRUHeadingAsE.h2}
              color={ZRUColorE.grass}
            >
              $20000
            </ZRUHeading>
          </ZRUBox>
        </ZRUFlex>

        <ZRUFlex
          align={ZRUAlignE.center}
          className='gap-2 px-3 py-4 rounded-md min-w-max w-[20rem] border-s-[3px] border-success bg-success/20'
        >
          <ZPayMoneyIcon className='w-16 h-16 text-success-dark' />
          <ZRUBox>
            <ZRUText className='font-medium' color={ZRUColorE.grass}>
              You Owe
            </ZRUText>
            <ZRUHeading
              className='font-mono text-3xl font-semibold'
              as={ZRUHeadingAsE.h2}
              color={ZRUColorE.grass}
            >
              $20000
            </ZRUHeading>
          </ZRUBox>
        </ZRUFlex>
      </ZRUFlex>
    </>
  );
};

export default Dashboard;
