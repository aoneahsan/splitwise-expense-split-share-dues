// #region ---- Core Imports ----
import React, { useMemo } from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUAvatar,
  ZRUBox,
  ZRUButton,
  ZRUDropdownMenu,
  ZRUDropdownMenuItem,
  ZRUFlex,
  ZRUHeading,
  ZRUText
} from '@/components/RadixUI';
import constants from '@/utils/constants';
import { AppRoutes } from '@/Routes/AppRoutes';
import { useZNavigate } from '@/hooks/navigation.hook';
import { isZNonEmptyString } from '@/utils/helpers';
import { useZSideBar } from '@/hooks/globalComponents.hook';
import ZAuthSidebarContent from '../ZAuthSidebarContent';
import { useZMediaQueryScale } from '@/hooks/helpers.hook';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUHeadingAsE,
  ZRURadiusE
} from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { ZChevronDownIcon, ZMenuIcon } from '@/assets';

// #endregion

const ZAuthNavigation: React.FC = () => {
  const navigate = useZNavigate();

  const { openSidebar } = useZSideBar({
    component: ZAuthSidebarContent
  });

  const { is900pxScale, isSmScale } = useZMediaQueryScale();

  const items = useMemo(
    () => [
      {
        title: 'Your Account',
        route: AppRoutes.authSub.account.completePath
      },
      {
        title: 'Log out',
        route: AppRoutes.authSub.account.completePath
      }
    ],
    []
  );
  return (
    <ZRUBox className='flex items-center justify-between w-full px-5 bg-white border-b shadow-sm'>
      <ZRUFlex align={ZRUAlignE.center} className='max900px:gap-5'>
        {!is900pxScale ? (
          <ZMenuIcon
            className='cursor-pointer'
            onClick={() => {
              openSidebar();
            }}
          />
        ) : null}
        <ZRUHeading as={ZRUHeadingAsE.h1} className='text-body'>
          {constants.productInfo.name}
        </ZRUHeading>
      </ZRUFlex>

      <ZRUFlex align={ZRUAlignE.center}>
        <ZRUDropdownMenu
          trigger={{
            children: (
              <ZRUFlex
                align={ZRUAlignE.center}
                gap='2'
                className='sm:px-2 py-2.5 cursor-pointer border-s border-tertiary/20 sm:ps-5 ps-3'
              >
                <ZRUAvatar
                  fallback='1'
                  size='2'
                  variant='solid'
                  color={ZRUColorE.gray}
                  radius={ZRURadiusE.full}
                />
                {isSmScale ? (
                  <ZRUFlex
                    align={ZRUAlignE.center}
                    className='font-medium tracking-wide text-body'
                  >
                    Talha123
                    <ZChevronDownIcon className='w-5 h-5 ps-1' />
                  </ZRUFlex>
                ) : null}
              </ZRUFlex>
            )
          }}
        >
          <ZRUBox className='w-36'>
            {items?.map((el, index) => {
              return (
                <ZRUDropdownMenuItem
                  key={index}
                  onClick={() => {
                    if (isZNonEmptyString(el?.route)) {
                      navigate({
                        to: el?.route
                      });
                    }
                  }}
                >
                  {el.title}
                </ZRUDropdownMenuItem>
              );
            })}
          </ZRUBox>
        </ZRUDropdownMenu>
      </ZRUFlex>
    </ZRUBox>
  );
};

export default ZAuthNavigation;
