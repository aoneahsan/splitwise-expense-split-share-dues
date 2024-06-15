// #region ---- Core Imports ----
import { ZEllipsisVerticalIcon } from '@/assets';
import { ZRUAvatar, ZRUBox, ZRUFlex, ZRUText } from '@/components/RadixUI';
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
  return (
    <ZRUFlex
      align={ZRUAlignE.center}
      className='px-4 py-3 rounded-md bg-medium/10'
    >
      <ZRUFlex align={ZRUAlignE.center} gap='3' className='w-2/3'>
        <ZRUBox className='relative'>
          <ZRUAvatar
            fallback='1'
            variant='solid'
            size='5'
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
          <ZRUText as={ZRUTextAsE.p} className='text-base font-medium'>
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
        className='w-1/3'
      >
        <ZRUFlex align={ZRUAlignE.center} className='gap-20'>
          <ZRUBox>
            <ZRUText
              as={ZRUTextAsE.p}
              color={ZRUColorE.teal}
              className='text-base font-medium'
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

          <ZRUBox>
            <ZRUText
              as={ZRUTextAsE.p}
              color={ZRUColorE.ruby}
              className='text-base font-medium'
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

        <ZEllipsisVerticalIcon className='w-5 h-5 transition-all cursor-pointer text-medium hover:text-secondary' />
      </ZRUFlex>
    </ZRUFlex>
  );
};

export default ZAuthGroupUser;
