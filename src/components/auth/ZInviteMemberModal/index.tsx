// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import {
  ZRUBox,
  ZRUButton,
  ZRUFlex,
  ZRUHeading,
  ZRUInput,
  ZRUInputSlot,
  ZRUText,
  ZRUTextArea
} from '@/components/RadixUI';
import { useZMediaQueryScale } from '@/hooks/helpers.hook';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUHeadingAsE,
  ZRUJustifyE
} from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { ZCloseCircleIcon } from '@/assets';

// #endregion

const ZInviteMemberModal: React.FC<{ hideModal: () => void }> = ({
  hideModal
}) => {
  const { isSmScale } = useZMediaQueryScale();
  return (
    <ZRUBox>
      <ZRUFlex align={ZRUAlignE.center} justify={ZRUJustifyE.between}>
        <ZRUHeading
          as={ZRUHeadingAsE.h2}
          className='text-2xl font-medium'
          color={ZRUColorE.gold}
        >
          Invite friends
        </ZRUHeading>

        <ZRUText color={ZRUColorE.gold}>
          <ZCloseCircleIcon
            className='w-6 h-6 cursor-pointer'
            onClick={() => hideModal()}
          />
        </ZRUText>
      </ZRUFlex>

      <ZRUBox className='mt-4 *:mt-4'>
        <ZRUInput>
          <ZRUInputSlot className='font-semibold'>To:</ZRUInputSlot>
        </ZRUInput>

        <ZRUTextArea placeholder='include a optional message...' />
      </ZRUBox>

      <ZRUFlex
        className='mt-5 maxSm:flex-col maxSm:*:w-full'
        align={ZRUAlignE.center}
        justify={ZRUJustifyE.end}
        gap='3'
      >
        <ZRUButton
          size={isSmScale ? '3' : '2'}
          onClick={() => {
            hideModal();
          }}
        >
          Cancel
        </ZRUButton>
        <ZRUButton size={isSmScale ? '3' : '2'} color={ZRUColorE.violet}>
          Send
        </ZRUButton>
      </ZRUFlex>
    </ZRUBox>
  );
};

export default ZInviteMemberModal;
