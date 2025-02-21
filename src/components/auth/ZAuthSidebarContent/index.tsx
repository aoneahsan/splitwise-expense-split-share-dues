// #region ---- Core Imports ----
import React, { useMemo } from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { useZNavigate } from '@/hooks/navigation.hook';
import { useMatchRoute } from '@tanstack/react-router';
import { AppRoutes } from '@/Routes/AppRoutes';
import { ZRUBox, ZRUText } from '@/components/RadixUI';
import { ZClassNames } from '@/Packages/ClassNames';

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
  ZPresentationChartOutlineIcon
} from '@/assets';

// #endregion

const ZAuthSidebarContent: React.FC = () => {
  const matchRoute = useMatchRoute();
  const navigate = useZNavigate();
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
  return (
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
  );
};

export default ZAuthSidebarContent;
