// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUAccordingGroup,
  ZRUAccordionContent,
  ZRUAccordionItem,
  ZRUAccordionTrigger,
  ZRUBox,
  ZRUButton,
  ZRUCheckbox,
  ZRUFlex,
  ZRUHeading,
  ZRUInput,
  ZRUInputSlot,
  ZRUSelect,
  ZRUText
} from '@/components/RadixUI';
import ZPagination from '@/components/Elements/ZPagination';
import { ZAddExpenseBtn, ZSettleUpBtn } from '@/components/auth/ZBtns';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUHeadingAsE,
  ZRUJustifyE,
  ZRUOrientationE,
  ZRUSelectContentPositionE,
  ZRUTextAsE
} from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { ZBarChartOutlineIcon, ZSearchIcon, ZTrendingUpIcon } from '@/assets';

// #endregion

const AllExpenses: React.FC = () => {
  return (
    <>
      <ZRUFlex
        className='px-1 py-2'
        align={ZRUAlignE.center}
        justify={ZRUJustifyE.between}
        width='100%'
      >
        <ZRUHeading
          className='text-3xl font-medium'
          as={ZRUHeadingAsE.h2}
          color={ZRUColorE.grass}
        >
          All Expenses
        </ZRUHeading>
        <ZRUFlex
          className='gap-2'
          align={ZRUAlignE.center}
          justify={ZRUJustifyE.end}
        >
          <ZAddExpenseBtn />

          <ZSettleUpBtn />
        </ZRUFlex>
      </ZRUFlex>

      <ZRUBox className='w-full px-1 mt-5'>
        {/* Trends */}
        <ZRUAccordingGroup type='multiple' className='mb-5'>
          <ZRUAccordionItem
            value='trendsThisMonth'
            className='shadow-sm bg-medium/20'
          >
            <ZRUAccordionTrigger>
              <ZRUFlex align={ZRUAlignE.center} gap='2'>
                <ZTrendingUpIcon className='w-6 h-6' />
                <ZRUText>Trends This Month</ZRUText>
              </ZRUFlex>
            </ZRUAccordionTrigger>
            <ZRUAccordionContent className='*:!p-0'>
              <ZRUBox className='px-4 pt-3 pb-4 bg-success-dark/20'>
                <ZRUBox className='w-full text-right'>
                  <ZRUButton className='mb-3'>
                    <ZBarChartOutlineIcon className='w-5 h-5' /> View Full
                    Charts
                  </ZRUButton>
                </ZRUBox>
                <ZRUFlex
                  align={ZRUAlignE.center}
                  className='gap-4 *:flex-1 *:px-5 *:py-4 *:text-center *:rounded-md *:shadow-sm *:bg-white/80'
                >
                  <ZRUBox>
                    <ZRUText
                      as={ZRUTextAsE.p}
                      className='text-[0.975rem] font-semibold'
                      color={ZRUColorE.gray}
                    >
                      Total you paid for
                    </ZRUText>
                    <ZRUHeading
                      as={ZRUHeadingAsE.h3}
                      className='mt-2 text-2xl font-medium'
                      color={ZRUColorE.gray}
                    >
                      $30.00
                    </ZRUHeading>
                  </ZRUBox>

                  <ZRUBox>
                    <ZRUText
                      as={ZRUTextAsE.p}
                      className='text-[0.975rem] font-semibold'
                      color={ZRUColorE.gray}
                    >
                      Your total share
                    </ZRUText>
                    <ZRUHeading
                      as={ZRUHeadingAsE.h3}
                      className='mt-2 text-2xl font-medium'
                      color={ZRUColorE.gray}
                    >
                      $30.00
                    </ZRUHeading>
                  </ZRUBox>

                  <ZRUBox>
                    <ZRUText
                      as={ZRUTextAsE.p}
                      className='text-[0.975rem] font-semibold'
                      color={ZRUColorE.gray}
                    >
                      Payments made
                    </ZRUText>
                    <ZRUHeading
                      as={ZRUHeadingAsE.h3}
                      className='mt-2 text-2xl font-medium'
                      color={ZRUColorE.gray}
                    >
                      $30.00
                    </ZRUHeading>
                  </ZRUBox>

                  <ZRUBox>
                    <ZRUText
                      as={ZRUTextAsE.p}
                      className='text-[0.975rem] font-semibold'
                      color={ZRUColorE.gray}
                    >
                      Payments received
                    </ZRUText>
                    <ZRUHeading
                      as={ZRUHeadingAsE.h3}
                      className='mt-2 text-2xl font-medium'
                      color={ZRUColorE.gray}
                    >
                      $30.00
                    </ZRUHeading>
                  </ZRUBox>
                </ZRUFlex>
              </ZRUBox>
            </ZRUAccordionContent>
          </ZRUAccordionItem>
        </ZRUAccordingGroup>

        {/* Table Filters */}
        <ZRUFlex
          align={ZRUAlignE.center}
          justify={ZRUJustifyE.between}
          className='px-1 py-2 my-2'
        >
          <ZRUFlex align={ZRUAlignE.center}>
            <ZRUInput placeholder='Search...'>
              <ZRUInputSlot>
                <ZSearchIcon className='w-5 h-5' />
              </ZRUInputSlot>
            </ZRUInput>
          </ZRUFlex>
          <ZRUFlex
            align={ZRUAlignE.center}
            justify={ZRUJustifyE.end}
            className='gap-3'
          >
            <ZRUSelect
              trigger={{
                placeholder: "Filter by 'Paid by'"
              }}
              content={{
                position: ZRUSelectContentPositionE.popper
              }}
              options={[{ value: 'user', label: 'user' }]}
            />

            <ZRUSelect
              trigger={{
                placeholder: "Filter by 'Group'"
              }}
              content={{
                position: ZRUSelectContentPositionE.popper
              }}
              options={[{ value: 'user', label: 'user' }]}
            />
          </ZRUFlex>
        </ZRUFlex>

        {/* Table */}
        <ZRUBox className='w-full'>
          {/* Header */}
          <ZRUBox className='*:flex *:item-center flex w-full items-center ps-1 pe-2 *:px-2 *:py-3 *:flex-1 bg-secondary/40 font-medium rounded-md text-tertiary shadow-sm'>
            <ZRUBox className='!flex-initial w-max me-2'>
              <ZRUCheckbox />
            </ZRUBox>
            <ZRUBox>
              Expense
              {/* Expense (group) */}
            </ZRUBox>
            <ZRUBox>Paid by</ZRUBox>
            <ZRUBox>Amount</ZRUBox>
            <ZRUBox>Lent you</ZRUBox>
            <ZRUBox>Date</ZRUBox>
            <ZRUBox className='!flex-initial w-max'>Actions</ZRUBox>
          </ZRUBox>

          {/* Body */}
          <ZRUBox className='mt-4 overflow-hidden rounded-md *:flex *:w-full *:items-center *:ps-1 *:pe-2 *:font-normal *:text-tertiary *:*:flex *:*:item-center *:*:px-2 *:*:py-2 *:*:flex-1'>
            <ZRUBox className='bg-medium/20'>
              <ZRUBox className='!flex-initial w-max me-2'>
                <ZRUCheckbox />
              </ZRUBox>
              <ZRUBox>Expense</ZRUBox>
              <ZRUBox>Paid by</ZRUBox>
              <ZRUBox>Amount</ZRUBox>
              <ZRUBox>Lent you</ZRUBox>
              <ZRUBox>Date</ZRUBox>
              <ZRUBox className='!flex-initial w-max'>Actions</ZRUBox>
            </ZRUBox>

            <ZRUBox className='bg-tertiary/20'>
              <ZRUBox className='!flex-initial w-max me-2'>
                <ZRUCheckbox />
              </ZRUBox>
              <ZRUBox>Expense</ZRUBox>
              <ZRUBox>Paid by</ZRUBox>
              <ZRUBox>Amount</ZRUBox>
              <ZRUBox>Lent you</ZRUBox>
              <ZRUBox>Date</ZRUBox>
              <ZRUBox className='!flex-initial w-max'>Actions</ZRUBox>
            </ZRUBox>

            <ZRUBox className='bg-medium/20'>
              <ZRUBox className='!flex-initial w-max me-2'>
                <ZRUCheckbox />
              </ZRUBox>
              <ZRUBox>Expense</ZRUBox>
              <ZRUBox>Paid by</ZRUBox>
              <ZRUBox>Amount</ZRUBox>
              <ZRUBox>Lent you</ZRUBox>
              <ZRUBox>Date</ZRUBox>
              <ZRUBox className='!flex-initial w-max'>Actions</ZRUBox>
            </ZRUBox>
          </ZRUBox>

          {/* footer */}
          <ZRUBox className='flex items-center justify-between w-full mt-4 text-tertiary'>
            <ZRUBox>
              <ZRUSelect
                label='Row per page'
                labelClassName='font-medium text-sm'
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

export default AllExpenses;
