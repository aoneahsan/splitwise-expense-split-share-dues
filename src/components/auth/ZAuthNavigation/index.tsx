// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUAvatar,
  ZRUBox,
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
  ZRURadiusE
} from '@/types/radixUI/index.type';
import constants from '@/utils/constants';
import { ZChevronDownIcon } from '@/assets';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

const ZAuthNavigation: React.FC = () => {
  return (
    <ZRUBox className='flex items-center justify-between w-full px-5 bg-white border-b shadow-sm'>
      <ZRUHeading as={ZRUHeadingAsE.h1} className='text-body'>
        {constants.productInfo.name}
      </ZRUHeading>

      <ZRUFlex align={ZRUAlignE.center}>
        <ZRUFlex
          align={ZRUAlignE.center}
          gap='2'
          className='px-2 py-2.5 cursor-pointer border-s border-tertiary/20 ps-5'
        >
          <ZRUAvatar
            fallback='1'
            size='2'
            variant='solid'
            color={ZRUColorE.gray}
            radius={ZRURadiusE.full}
          />
          <ZRUFlex
            align={ZRUAlignE.center}
            className='font-medium tracking-wide text-body'
          >
            Talha123
            <ZChevronDownIcon className='w-5 h-5 ps-1' />
          </ZRUFlex>
        </ZRUFlex>
      </ZRUFlex>
    </ZRUBox>
  );
};

export default ZAuthNavigation;
