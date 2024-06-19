// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZRUButton } from '@/components/RadixUI';
import { useZModal, useZSideBar } from '@/hooks/globalComponents.hook';
import ZExpenseFormSideBar from '../ZExpenseFormSideBar';
import overlays from '@/utils/constants/overlays';
import ZSettleUpModal from '../ZSettleUpModal';
import ZInviteMemberModal from '../ZInviteMemberModal';

// #endregion

// #region ---- Types Imports ----
import { ZRUColorE } from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import {
  ZAddCircleOutlineIcon,
  ZReceiptOutlineIcon,
  ZSendOutlineIcon
} from '@/assets';

// #endregion

export const ZAddExpenseBtn: React.FC = () => {
  const { openSidebar } = useZSideBar({
    component: ZExpenseFormSideBar,
    width: overlays.sidebarsWidth.expenseForm
  });

  return (
    <ZRUButton
      onClick={() => {
        openSidebar();
      }}
      size='3'
      color={ZRUColorE.violet}
      className='!gap-1'
    >
      <ZAddCircleOutlineIcon className='w-5 h-5' /> Add an Expense
    </ZRUButton>
  );
};

export const ZSettleUpBtn: React.FC = () => {
  const { showModal: showZSettleUpModal } = useZModal({
    component: ZSettleUpModal,
    width: overlays.modalsWidth.settleUpForm
  });
  return (
    <ZRUButton
      size='3'
      color={ZRUColorE.indigo}
      className='!gap-2'
      onClick={() => {
        showZSettleUpModal();
      }}
    >
      <ZReceiptOutlineIcon className='w-5 h-5' /> Settle Up
    </ZRUButton>
  );
};

export const ZInviteMemberBtn: React.FC = () => {
  const { showModal: showZInviteMemberModal } = useZModal({
    component: ZInviteMemberModal,
    width: overlays.modalsWidth.settleUpForm
  });
  return (
    <ZRUButton
      size='3'
      color={ZRUColorE.violet}
      className='!gap-2'
      onClick={() => {
        showZInviteMemberModal();
      }}
    >
      <ZSendOutlineIcon className='w-5 h-5' /> Invite a Member
    </ZRUButton>
  );
};
