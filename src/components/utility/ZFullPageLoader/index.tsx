// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Custom Imports ----
import { ZRUFlex, ZRUSpinner } from '@/components/RadixUI';

// #endregion

// #region ---- Types Imports ----
import { ZRUAlignE, ZRUJustifyE } from '@/types/radixUI/index.type';

// #endregion

const ZFullPageLoader: React.FC = () => {
  return (
    <ZRUFlex
      justify={ZRUJustifyE.center}
      align={ZRUAlignE.center}
      height='100%'
      minHeight='100vh'
    >
      <ZRUSpinner size='3' />
      {/* <ZRUBox className='flex items-center justify-center h-screen'>
          <ZRUBox className='relative'>
            <ZRUBox className='border-t-8 border-b-8 rounded-full border-secondary/50 w-14 h-14'></ZRUBox>
            <ZRUBox className='absolute top-0 left-0 border-t-[6px] border-b-[6px] border-primary rounded-full w-14 h-14 animate-spin'></ZRUBox>
          </ZRUBox>
        </ZRUBox> */}
    </ZRUFlex>
  );
};

export default ZFullPageLoader;
