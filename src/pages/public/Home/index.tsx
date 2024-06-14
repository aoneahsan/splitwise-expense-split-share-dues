// #region ---- Core Imports ----
import React, { useCallback } from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZPage } from '@/components/Elements';
import {
  ZRUBox,
  ZRUButton,
  ZRUFlex,
  ZRUSpinner,
  ZRUText
} from '@/components/RadixUI';
import constants from '@/utils/constants';
import { ZRUAlignE, ZRUJustifyE } from '@/types/radixUI/index.type';
import { useZNavigate } from '@/hooks/navigation.hook';
import { AppRoutes } from '@/Routes/AppRoutes';

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----

// #endregion

const Home: React.FC = () => {
  // #region Custom Hooks
  const navigate = useZNavigate();
  // #endregion

  // #region Functions
  const dashboard = useCallback(() => {
    navigate({
      to: AppRoutes.auth
    });
  }, []);

  // #endregion

  return (
    <ZPage>
      <ZRUBox className='flex items-center justify-center w-full p-4 shadow-md'>
        <ZRUBox className='flex items-center flex-1 gap-3'>
          <ZRUText className='text-lg font-medium tracking-wide capitalize'>
            {constants.productInfo.name}
          </ZRUText>
        </ZRUBox>
        <ZRUBox className='flex items-center justify-end flex-1 gap-3'>
          <ZRUButton onClick={dashboard}>Dashboard</ZRUButton>
          <ZRUButton>Login</ZRUButton>
          <ZRUButton>Register</ZRUButton>
        </ZRUBox>
      </ZRUBox>

      <ZRUBox className='text-center pt-7'>
        <ZRUText className='text-xl font-medium'>Home Page</ZRUText>
      </ZRUBox>
    </ZPage>
  );
};

export default Home;
