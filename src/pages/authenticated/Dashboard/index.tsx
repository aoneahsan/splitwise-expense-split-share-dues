// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZRUBox, ZRUFlex, ZRUHeading, ZRUText } from '@/components/RadixUI';
import { ZAddExpenseBtn, ZSettleUpBtn } from '@/components/auth/ZBtns';
import { useZMediaQueryScale } from '@/hooks/helpers.hook';

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
import { ZPayMoneyIcon, ZReceiveMoneyIcon, ZWalletIcon } from '@/assets';

// #endregion

const Dashboard: React.FC = () => {
  const { isSmScale } = useZMediaQueryScale();

  return (
    <>
      <ZRUFlex
        className='px-1 py-2 maxSm:flex-col maxSm:gap-y-2'
        align={isSmScale ? ZRUAlignE.center : ZRUAlignE.start}
        justify={ZRUJustifyE.between}
        width='100%'
      >
        <ZRUHeading
          className='text-2xl font-medium xl:text-3xl'
          as={ZRUHeadingAsE.h2}
          color={ZRUColorE.grass}
        >
          Dashboard
        </ZRUHeading>
        <ZRUFlex
          className='gap-2 xs:ms-2 maxSm:*:w-1/2 maxSm:w-full maxXs:*:!w-full maxXs:flex-col'
          align={ZRUAlignE.center}
          justify={ZRUJustifyE.end}
        >
          <ZAddExpenseBtn />

          <ZSettleUpBtn />
        </ZRUFlex>
      </ZRUFlex>

      <ZRUFlex
        className='gap-3 md:mt-5 mt-3 xl:gap-6 maxMd:flex-col maxMd:*:w-full'
        align={ZRUAlignE.center}
        justify={ZRUJustifyE.between}
      >
        <ZRUFlex
          align={ZRUAlignE.center}
          className='gap-2 px-3 py-4 rounded-md min-w-max flex-1 border-s-[3px] border-success bg-success/20'
        >
          <ZWalletIcon className='w-10 h-10 xl:w-16 md:w-14 xl:h-16 md:h-14 text-success-dark' />
          <ZRUBox>
            <ZRUText
              className='font-medium maxMd:text-sm'
              color={ZRUColorE.grass}
            >
              Total balance
            </ZRUText>
            <ZRUHeading
              className='font-mono text-xl font-semibold md:text-2xl xl:text-3xl'
              as={ZRUHeadingAsE.h2}
              color={ZRUColorE.grass}
            >
              $20000
            </ZRUHeading>
          </ZRUBox>
        </ZRUFlex>

        <ZRUFlex
          align={ZRUAlignE.center}
          className='gap-2 px-3 py-4 rounded-md min-w-max flex-1 border-s-[3px] border-success bg-success/20'
        >
          <ZReceiveMoneyIcon className='w-10 h-10 xl:w-16 md:w-14 xl:h-16 md:h-14 text-success-dark' />
          <ZRUBox>
            <ZRUText
              className='font-medium maxMd:text-sm'
              color={ZRUColorE.grass}
            >
              You are Owed
            </ZRUText>
            <ZRUHeading
              className='font-mono text-xl font-semibold md:text-2xl xl:text-3xl'
              as={ZRUHeadingAsE.h2}
              color={ZRUColorE.grass}
            >
              $20000
            </ZRUHeading>
          </ZRUBox>
        </ZRUFlex>

        <ZRUFlex
          align={ZRUAlignE.center}
          className='gap-2 px-3 py-4 rounded-md min-w-max flex-1 border-s-[3px] border-success bg-success/20'
        >
          <ZPayMoneyIcon className='w-10 h-10 xl:w-16 md:w-14 xl:h-16 md:h-14 text-success-dark' />
          <ZRUBox>
            <ZRUText
              className='font-medium maxMd:text-sm'
              color={ZRUColorE.grass}
            >
              You Owe
            </ZRUText>
            <ZRUHeading
              className='font-mono text-xl font-semibold md:text-2xl xl:text-3xl'
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
