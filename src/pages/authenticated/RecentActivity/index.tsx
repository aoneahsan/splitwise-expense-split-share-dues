// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZRUBox, ZRUHeading } from '@/components/RadixUI';

// #endregion

// #region ---- Types Imports ----
import { ZRUColorE, ZRUHeadingAsE } from '@/types/radixUI/index.type';
import ZAuthNotification from '@/components/auth/ZAuthNotification';
import { ZNotificationTypesEnum } from '@/types/auth/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

const RecentActivity: React.FC = () => {
  return (
    <>
      <ZRUBox className='w-full px-1 py-2'>
        <ZRUHeading
          className='text-2xl font-medium xl:text-3xl'
          as={ZRUHeadingAsE.h2}
          color={ZRUColorE.grass}
        >
          Recent activity
        </ZRUHeading>
      </ZRUBox>

      <ZRUBox className='flex flex-col w-full gap-4 px-1 mt-1 md:mt-5'>
        <ZAuthNotification
          notificationType={ZNotificationTypesEnum.expenseAdded}
          primaryText='Expense Was added'
          secondaryText='You own $1'
          date='monday'
        />

        <ZAuthNotification
          notificationType={ZNotificationTypesEnum.groupCreated}
          primaryText='Group Was Created'
          date='monday'
        />
      </ZRUBox>
    </>
  );
};

export default RecentActivity;
