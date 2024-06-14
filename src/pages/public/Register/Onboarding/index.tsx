// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Outlet } from '@tanstack/react-router';

// #endregion

// #region ---- Custom Imports ----
import Copyright from '@/components/inpage/ZCopyright';
import { useZNavigate } from '@/hooks/navigation.hook';
import { AppRoutes } from '@/Routes/AppRoutes';

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { productLogo } from '@/assets';

// #endregion

// #region ---- Types Imports ----

// #endregion

const ZOnBoarding: React.FC = () => {
  // #region custom hooks
  const navigate = useZNavigate();
  // #endregion
  return (
    <div className='relative flex flex-col items-center justify-between w-full min-h-screen pt-10 bg-secondary h max-h-max pe-8'>
      <div className='flex flex-col items-center w-[25.5625rem] max-w-full h-full mt-6'>
        <img
          className='w-[4.8rem] cursor-pointer h-[4.8rem] maxSm:mx-auto relative'
          alt='Logo'
          src={productLogo}
          onClick={() => {
            void navigate({ to: AppRoutes.home });
          }}
        />
        <Outlet />
      </div>

      <div className='flex items-end w-full text-center'>
        <Copyright className='pb-[1.2rem] pt-[2.5rem] w-full' />
      </div>
    </div>
  );
};

export default ZOnBoarding;
