// #region ---- Core Imports ----
import { ZEllipsisVerticalIcon } from '@/assets';
import {
  ZRUAvatar,
  ZRUBox,
  ZRUButton,
  ZRUFlex,
  ZRUText
} from '@/components/RadixUI';
import { useZMediaQueryScale } from '@/hooks/helpers.hook';
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUJustifyE,
  ZRURadiusE,
  ZRUTextAsE
} from '@/types/radixUI/index.type';
import React from 'react';

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

const ZAuthGroupUser: React.FC = () => {
  const { isLgScale, isMdScale } = useZMediaQueryScale();
  return (
    <ZRUFlex
      align={ZRUAlignE.center}
      className='px-4 py-3 rounded-md maxMd:flex-col bg-medium/10 maxMd:gap-y-3'
    >
      <ZRUFlex
        align={ZRUAlignE.center}
        gap='3'
        className='w-2/4 minXl:w-1/2 min1150px:w-2/3 maxXs:flex-col maxXs:text-center'
      >
        <ZRUBox className='relative'>
          <ZRUAvatar
            fallback='1'
            variant='solid'
            size={isLgScale ? '5' : '4'}
            color={ZRUColorE.gray}
            radius={ZRURadiusE.full}
          />
          <ZRUBox className='absolute right-[-0.1rem] bottom-[-0.1rem]'>
            <ZRUAvatar
              fallback='1'
              variant='solid'
              size='1'
              color={ZRUColorE.grass}
              radius={ZRURadiusE.full}
            />
          </ZRUBox>
        </ZRUBox>
        <ZRUBox>
          <ZRUText
            as={ZRUTextAsE.p}
            className='text-sm font-medium lg:text-base'
          >
            Name
          </ZRUText>
          <ZRUText
            color={ZRUColorE.gray}
            as={ZRUTextAsE.p}
            className='text-sm font-medium'
          >
            name@gmail.com
          </ZRUText>
        </ZRUBox>
      </ZRUFlex>

      <ZRUFlex
        align={ZRUAlignE.center}
        justify={ZRUJustifyE.between}
        className='w-2/4 minXl:w-1/2 min1150px:w-1/3 maxMd:flex-col maxMd:gap-y-3 maxMd:w-full'
      >
        <ZRUFlex
          align={ZRUAlignE.center}
          className='md:gap-20 gap-3 maxSm:*:w-full maxSm:flex-col maxMd:w-full maxMd:*:flex-1 maxMd:*:text-center maxMd:*:py-2 maxMd:*:overflow-hidden maxMd:*:rounded-md'
        >
          <ZRUBox className='maxMd:bg-success-dark/30'>
            <ZRUText
              as={ZRUTextAsE.p}
              color={ZRUColorE.teal}
              className='text-sm font-medium lg:text-base'
            >
              Get back
            </ZRUText>
            <ZRUText
              color={ZRUColorE.teal}
              as={ZRUTextAsE.p}
              className='font-medium'
            >
              $30.00
            </ZRUText>
          </ZRUBox>

          <ZRUBox className='maxMd:bg-danger/30'>
            <ZRUText
              as={ZRUTextAsE.p}
              color={ZRUColorE.ruby}
              className='text-sm font-medium lg:text-base'
            >
              Owns
            </ZRUText>
            <ZRUText
              color={ZRUColorE.ruby}
              as={ZRUTextAsE.p}
              className='font-medium'
            >
              $30.00
            </ZRUText>
          </ZRUBox>
        </ZRUFlex>

        {isMdScale ? (
          <ZEllipsisVerticalIcon className='w-5 h-5 transition-all cursor-pointer text-medium hover:text-secondary' />
        ) : (
          <ZRUButton className='w-full'>Actions</ZRUButton>
        )}
      </ZRUFlex>
    </ZRUFlex>
  );
};

export default ZAuthGroupUser;
