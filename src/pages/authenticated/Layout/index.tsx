// #region ---- Core Imports ----
import React, { useCallback, useMemo } from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Outlet, useMatchRoute } from '@tanstack/react-router';

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUBox,
  ZRUButton,
  ZRUFlex,
  ZRUHeading,
  ZRUScrollArea,
  ZRUText
} from '@/components/RadixUI';
import { ZPage } from '@/components/Elements';
import ZAuthSidebarContent from '@/components/auth/ZAuthSidebarContent';
import ZAuthNavigation from '@/components/auth/ZAuthNavigation';
import constants from '@/utils/constants';
import { AppRoutes } from '@/Routes/AppRoutes';
import { useZMediaQueryScale } from '@/hooks/helpers.hook';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUDirectionE,
  ZRUHeadingAsE,
  ZRUScrollbarsE,
  ZRUTextAsE
} from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { ZScaleBalancedIcon, zAppStoreLogo, zGooglePlayLogo } from '@/assets';

// #endregion

const Layout: React.FC = () => {
  const matchRoute = useMatchRoute();
  const { is900pxScale } = useZMediaQueryScale();

  // #region Constants
  const pageHelmet = useMemo(
    () => ({
      title: `${constants.productInfo.name} - Dashboard - ${constants.companyBusinessDetails.name}`
    }),
    []
  );

  const balance = [
    matchRoute({
      to: AppRoutes.authSub.allExpenses.completePath
    }),
    matchRoute({
      to: AppRoutes.authSub.groups.completePath
    }),
    matchRoute({
      to: AppRoutes.authSub.groups.singleCompletePath
    }),
    matchRoute({
      to: AppRoutes.authSub.friends.completePath
    })
  ];
  // #endregion

  return (
    <ZPage helmet={pageHelmet}>
      <ZAuthNavigation />
      <ZRUBox className='flex w-full h-[calc(100vh-3.3125rem)]'>
        {is900pxScale ? (
          <aside className='h-full text-sm justify-between flex flex-col bg-white border-e shadow-sm xl:min-w-80 min-w-48 text-white xl:p-3.5'>
            <ZAuthSidebarContent />
          </aside>
        ) : null}

        <ZRUBox className='flex-1 h-full px-2 py-4 xl:px-5 bg-light'>
          <ZRUScrollArea scrollbars={ZRUScrollbarsE.vertical}>
            <ZRUFlex
              className='w-full gap-3 xl:gap-5 maxLg:flex-col'
              align={ZRUAlignE.start}
            >
              <ZRUBox className='flex-1 overflow-hidden maxLg:w-full'>
                <Outlet />
              </ZRUBox>
              <ZRUBox className='w-full pt-2 maxLg:border-t xl:w-80 lg:w-64 maxLg:mt-3 maxLg:pt-3'>
                {/* Group Balance */}
                {matchRoute({
                  to: AppRoutes.authSub.groups.singleCompletePath
                }) ? (
                  <ZRUBox className='p-3 mb-5 bg-white rounded-md shadow-md'>
                    <ZRUText
                      as={ZRUTextAsE.p}
                      className='flex gap-2 pb-2 font-medium uppercase item-center text-medium'
                    >
                      <ZScaleBalancedIcon className='w-6 h-6' /> Group Balance
                    </ZRUText>
                    <ZRUBox className='p-2 text-center rounded-md shadow-sm bg-success/30'>
                      <ZRUText
                        as={ZRUTextAsE.p}
                        className='text-sm font-medium uppercase'
                        color={ZRUColorE.grass}
                      >
                        Get back
                      </ZRUText>
                      <ZRUHeading
                        as={ZRUHeadingAsE.h3}
                        className='mt-2 text-2xl font-medium xl:text-3xl'
                        color={ZRUColorE.grass}
                      >
                        $30.00
                      </ZRUHeading>
                    </ZRUBox>

                    <ZRUBox className='p-2 mt-2 text-center rounded-md shadow-sm bg-danger/30'>
                      <ZRUText
                        as={ZRUTextAsE.p}
                        className='text-sm font-medium uppercase'
                        color={ZRUColorE.bronze}
                      >
                        Owes
                      </ZRUText>
                      <ZRUHeading
                        as={ZRUHeadingAsE.h3}
                        className='mt-2 text-2xl font-medium xl:text-3xl'
                        color={ZRUColorE.bronze}
                      >
                        $30.00
                      </ZRUHeading>
                    </ZRUBox>
                  </ZRUBox>
                ) : null}

                {/* Your Total Balance */}
                {balance?.some((el) => el !== false) ? (
                  <ZRUBox className='p-3 mb-5 bg-white rounded-md shadow-md'>
                    <ZRUText
                      as={ZRUTextAsE.p}
                      className='flex gap-2 pb-2 font-medium uppercase item-center text-medium'
                    >
                      <ZScaleBalancedIcon className='w-6 h-6' /> Your Total
                      Balance
                    </ZRUText>
                    <ZRUBox className='p-2 text-center rounded-md shadow-sm bg-success/30'>
                      <ZRUText
                        as={ZRUTextAsE.p}
                        className='text-sm font-medium uppercase'
                        color={ZRUColorE.grass}
                      >
                        you are owed
                      </ZRUText>
                      <ZRUHeading
                        as={ZRUHeadingAsE.h3}
                        className='mt-2 text-2xl font-medium xl:text-3xl'
                        color={ZRUColorE.grass}
                      >
                        $30.00
                      </ZRUHeading>
                    </ZRUBox>

                    <ZRUBox className='p-2 mt-2 text-center rounded-md shadow-sm bg-danger/30'>
                      <ZRUText
                        as={ZRUTextAsE.p}
                        className='text-sm font-medium uppercase'
                        color={ZRUColorE.bronze}
                      >
                        you owe
                      </ZRUText>
                      <ZRUHeading
                        as={ZRUHeadingAsE.h3}
                        className='mt-2 text-2xl font-medium xl:text-3xl'
                        color={ZRUColorE.bronze}
                      >
                        $30.00
                      </ZRUHeading>
                    </ZRUBox>
                  </ZRUBox>
                ) : null}

                {/*  */}
                <ZRUBox className='p-3 bg-white rounded-md shadow-md'>
                  <ZRUHeading
                    as={ZRUHeadingAsE.h4}
                    className='text-lg text-center uppercase text-secondary'
                  >
                    {constants.productInfo.name}
                    on the go
                  </ZRUHeading>
                  <ZRUText className='block font-medium text-center'>
                    Get the free {constants.productInfo.name} app and add IOUs
                    from anywhere:
                  </ZRUText>

                  <ZRUFlex
                    align={ZRUAlignE.center}
                    direction={ZRUDirectionE.column}
                    gapY='2'
                    className='mt-4 *:cursor-pointer'
                  >
                    <img src={zGooglePlayLogo} className='w-40' />
                    <img src={zAppStoreLogo} className='w-40' />
                  </ZRUFlex>
                </ZRUBox>
              </ZRUBox>
            </ZRUFlex>
          </ZRUScrollArea>
        </ZRUBox>
      </ZRUBox>
    </ZPage>
  );
};

export default Layout;
