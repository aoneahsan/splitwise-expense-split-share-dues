// #region ---- Core Imports ----
import React, { useCallback, useMemo } from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Outlet, useMatchRoute } from '@tanstack/react-router';

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUBox,
  ZRUFlex,
  ZRUHeading,
  ZRUScrollArea,
  ZRUText
} from '@/components/RadixUI';
import { ZPage } from '@/components/Elements';
import ZAuthNavigation from '@/components/auth/ZAuthNavigation';
import constants from '@/utils/constants';
import { AppRoutes } from '@/Routes/AppRoutes';
import { ZClassNames } from '@/Packages/ClassNames';
import { useZNavigate } from '@/hooks/navigation.hook';

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
import {
  ZFlagIcon,
  ZFriendsOutline,
  ZGroupOutlineIcon,
  ZListIcon,
  ZPresentationChartOutlineIcon,
  ZScaleBalancedIcon,
  zAppStoreLogo,
  zGooglePlayLogo
} from '@/assets';

// #endregion

const Layout: React.FC = () => {
  const matchRoute = useMatchRoute();
  const navigate = useZNavigate();
  // #region Constants
  const pageHelmet = useMemo(
    () => ({
      title: `${constants.productInfo.name} - Dashboard - ${constants.companyBusinessDetails.name}`
    }),
    []
  );

  const items = useMemo(
    () => [
      {
        title: 'Dashboard',
        icon: <ZPresentationChartOutlineIcon className='w-6 h-6' />,
        routes: [AppRoutes.authSub.dashboard.completePath],
        mainRoute: AppRoutes.authSub.dashboard.completePath
      },
      {
        title: 'Recent activity',
        icon: <ZFlagIcon className='w-5 h-5' />,
        routes: [AppRoutes.authSub.recentActivity.completePath],
        mainRoute: AppRoutes.authSub.recentActivity.completePath
      },
      {
        title: 'All expenses',
        icon: <ZListIcon className='w-5 h-5' />,
        routes: [AppRoutes.authSub.allExpenses.completePath],
        mainRoute: AppRoutes.authSub.allExpenses.completePath
      },
      {
        title: 'Groups',
        icon: <ZGroupOutlineIcon className='w-6 h-6' />,
        routes: [
          AppRoutes.authSub.groups.completePath,
          AppRoutes.authSub.groups.singleCompletePath
        ],
        mainRoute: AppRoutes.authSub.groups.completePath
      },
      {
        title: 'Friends',
        icon: <ZFriendsOutline className='w-6 h-6' />,
        routes: [AppRoutes.authSub.friends.completePath],
        mainRoute: AppRoutes.authSub.friends.completePath
      }
    ],
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
        <aside className='h-full max900px:hidden text-sm justify-between flex flex-col bg-white border-e shadow-sm xl:min-w-80 min-w-48 text-white xl:p-3.5'>
          <ZRUBox className='flex flex-col w-full gap-1 p-2 font-sans text-base font-normal text-body'>
            {items?.map((item, index) => {
              const isAnyRouteActive = item?.routes?.some((route) =>
                matchRoute({
                  to: route
                })
              );
              return (
                <ZRUBox
                  key={index}
                  className={ZClassNames(
                    'flex items-center w-full p-3 font-medium leading-tight transition-all rounded-lg outline-none cursor-pointer text-start hover:bg-success-tint/20 hover:bg-opacity-80 hover:text-success-dark',
                    {
                      'bg-success-tint/20 bg-opacity-80 text-success-dark':
                        isAnyRouteActive
                    }
                  )}
                  onClick={() => {
                    navigate({
                      to: item?.mainRoute
                    });
                  }}
                >
                  <ZRUBox className='grid mr-4 place-items-center'>
                    {item.icon}
                  </ZRUBox>
                  <ZRUText>{item?.title}</ZRUText>
                </ZRUBox>
              );
            })}
          </ZRUBox>
        </aside>

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
