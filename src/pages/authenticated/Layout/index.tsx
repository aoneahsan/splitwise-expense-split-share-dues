// #region ---- Core Imports ----
import React, { useCallback, useMemo } from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Outlet, useMatchRoute } from '@tanstack/react-router';

// #endregion

// #region ---- Custom Imports ----
import { ZRUBox, ZRUFlex, ZRUHeading, ZRUText } from '@/components/RadixUI';
import { ZPage } from '@/components/Elements';
import ZAuthNavigation from '@/components/auth/ZAuthNavigation';
import constants from '@/utils/constants';

// #endregion

// #region ---- Types Imports ----

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
import { AppRoutes } from '@/Routes/AppRoutes';
import { ZClassNames } from '@/Packages/ClassNames';
import { useZNavigate } from '@/hooks/navigation.hook';
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUDirectionE,
  ZRUHeadingAsE,
  ZRUTextAsE
} from '@/types/radixUI/index.type';

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

  // const balance =
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
      <ZRUBox className='flex w-full'>
        <aside className='h-screen text-sm sidebar-home justify-between flex flex-col bg-white border-e shadow-sm w-80 min-w-[auto] text-white p-3.5'>
          <ZRUBox className='flex flex-col gap-1 p-2 font-sans text-base font-normal text-body'>
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
                  {item?.title}
                </ZRUBox>
              );
            })}
          </ZRUBox>
        </aside>

        {/* Content */}
        <ZRUBox className='flex-1 h-screen px-5 py-4 bg-light'>
          <ZRUFlex className='w-full gap-5' align={ZRUAlignE.start}>
            <ZRUBox className='flex-1'>
              <Outlet />
            </ZRUBox>
            <ZRUBox className='pt-2 w-80'>
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
                      className='mt-2 text-3xl font-medium'
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
                      className='mt-2 text-3xl font-medium'
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
                      className='mt-2 text-3xl font-medium'
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
                      className='mt-2 text-3xl font-medium'
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
        </ZRUBox>
      </ZRUBox>
    </ZPage>
  );
};

export default Layout;
