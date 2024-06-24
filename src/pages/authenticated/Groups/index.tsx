// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUBox,
  ZRUCheckbox,
  ZRUFlex,
  ZRUHeading,
  ZRUSelect,
  ZRUText
} from '@/components/RadixUI';
import ZPagination from '@/components/Elements/ZPagination';
import { useZNavigate } from '@/hooks/navigation.hook';
import { AppRoutes } from '@/Routes/AppRoutes';
import { ZAddExpenseBtn, ZSettleUpBtn } from '@/components/auth/ZBtns';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUHeadingAsE,
  ZRUJustifyE,
  ZRUOrientationE,
  ZRUSelectContentPositionE
} from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

const Groups: React.FC = () => {
  const navigate = useZNavigate();
  return (
    <>
      <ZRUFlex
        className='px-1 py-2 maxSm:flex-col maxSm:gap-y-2'
        align={ZRUAlignE.center}
        justify={ZRUJustifyE.between}
        width='100%'
      >
        <ZRUHeading
          className='text-2xl font-medium xl:text-3xl'
          as={ZRUHeadingAsE.h2}
          color={ZRUColorE.grass}
        >
          Groups
        </ZRUHeading>
        <ZRUFlex
          className='gap-2 xs:ms-2 maxSm:*:w-1/2 maxSm:w-full maxXs:*:!w-full maxXs:flex-col'
          align={ZRUAlignE.center}
          justify={ZRUJustifyE.end}
        >
          <ZAddExpenseBtn />

          <ZSettleUpBtn />
        </ZRUFlex>
      </ZRUFlex>

      <ZRUBox className='w-full px-1 mt-5'>
        {/* Table */}
        <ZRUBox className='w-full'>
          {/* Header */}
          <ZRUBox className='*:flex *:item-center flex w-full items-center ps-1 pe-2 *:px-2 *:py-3 *:flex-1 bg-secondary/40 font-medium rounded-md text-tertiary shadow-sm'>
            <ZRUBox className='!flex-initial w-max me-2'>
              <ZRUCheckbox />
            </ZRUBox>
            <ZRUBox>Name</ZRUBox>
            <ZRUBox>Admin</ZRUBox>
            <ZRUBox>No of Members</ZRUBox>
            <ZRUBox>Date</ZRUBox>
            <ZRUBox className='!flex-initial w-max'>Actions</ZRUBox>
          </ZRUBox>

          {/* Body */}
          <ZRUBox className='mt-4 overflow-hidden rounded-md *:flex *:w-full *:items-center *:ps-1 *:pe-2 *:font-normal *:text-tertiary *:*:flex *:*:item-center *:*:px-2 *:*:py-2 *:*:flex-1'>
            <ZRUBox className='bg-medium/20'>
              <ZRUBox className='!flex-initial w-max me-2'>
                <ZRUCheckbox />
              </ZRUBox>
              <ZRUBox>
                <ZRUText
                  color={ZRUColorE.grass}
                  className='transition-all border-b border-transparent cursor-pointer hover:border-success-dark/30'
                  onClick={() => {
                    navigate({
                      to: AppRoutes.authSub.groups.singleCompletePath,
                      params: {
                        groupId: '123'
                      }
                    });
                  }}
                >
                  Name
                </ZRUText>
              </ZRUBox>
              <ZRUBox>Admin</ZRUBox>
              <ZRUBox>Members</ZRUBox>
              <ZRUBox>Date</ZRUBox>
              <ZRUBox className='!flex-initial w-max'>Actions</ZRUBox>
            </ZRUBox>

            <ZRUBox className='bg-tertiary/20'>
              <ZRUBox className='!flex-initial w-max me-2'>
                <ZRUCheckbox />
              </ZRUBox>
              <ZRUBox>
                <ZRUText
                  color={ZRUColorE.grass}
                  className='transition-all border-b border-transparent cursor-pointer hover:border-success-dark/30'
                  onClick={() => {
                    navigate({
                      to: AppRoutes.authSub.groups.singleCompletePath,
                      params: {
                        groupId: '123'
                      }
                    });
                  }}
                >
                  Name
                </ZRUText>
              </ZRUBox>
              <ZRUBox>Admin</ZRUBox>
              <ZRUBox>Members</ZRUBox>
              <ZRUBox>Date</ZRUBox>
              <ZRUBox className='!flex-initial w-max'>Actions</ZRUBox>
            </ZRUBox>

            <ZRUBox className='bg-medium/20'>
              <ZRUBox className='!flex-initial w-max me-2'>
                <ZRUCheckbox />
              </ZRUBox>
              <ZRUBox>
                <ZRUText
                  color={ZRUColorE.grass}
                  className='transition-all border-b border-transparent cursor-pointer hover:border-success-dark/30'
                  onClick={() => {
                    navigate({
                      to: AppRoutes.authSub.groups.singleCompletePath,
                      params: {
                        groupId: '123'
                      }
                    });
                  }}
                >
                  Name
                </ZRUText>
              </ZRUBox>
              <ZRUBox>Admin</ZRUBox>
              <ZRUBox>Members</ZRUBox>
              <ZRUBox>Date</ZRUBox>
              <ZRUBox className='!flex-initial w-max'>Actions</ZRUBox>
            </ZRUBox>
          </ZRUBox>

          {/* footer */}
          <ZRUBox className='flex justify-between w-full mt-4 md:items-center maxMd:gap-y-2 maxMd:flex-col text-tertiary'>
            <ZRUBox>
              <ZRUSelect
                label='Row per page'
                labelClassName='font-medium text-sm'
                triggerClassName='maxMd:flex-1'
                labelOrientation={ZRUOrientationE.horizontal}
                options={[
                  { label: '10', value: '10' },
                  { label: '20', value: '20' },
                  { label: '30', value: '30' }
                ]}
                content={{
                  position: ZRUSelectContentPositionE.popper
                }}
                defaultValue='10'
              />
            </ZRUBox>
            <ZRUFlex align={ZRUAlignE.center} justify={ZRUJustifyE.end}>
              <ZPagination
                paginationItems={[1, 2, 3, '...', 8, 9, 10]}
                currentPage={2}
              />
            </ZRUFlex>
          </ZRUBox>
        </ZRUBox>
      </ZRUBox>
    </>
  );
};

export default Groups;
