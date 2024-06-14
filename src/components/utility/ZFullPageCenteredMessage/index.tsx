// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { AppRoutes } from '@/Routes/AppRoutes';
import { ZRUButton, ZRUFlex, ZRUHeading } from '@/components/RadixUI';
import { useZNavigate } from '@/hooks/navigation.hook';
import messages from '@/utils/messages';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUDirectionE,
  ZRUGeneralAlignE,
  ZRUJustifyE
} from '@/types/radixUI/index.type';
interface IZFullPageCenteredMessageProps {
  message?: string;
  showGoToHomeButton?: boolean;
}
// #endregion

const ZFullPageCenteredMessage: React.FC<IZFullPageCenteredMessageProps> = ({
  message = messages.general.failed,
  showGoToHomeButton = true
}) => {
  const navigate = useZNavigate();

  const navigateBackToHome = () => {
    navigate({
      to: AppRoutes.home
    });
  };

  return (
    <ZRUFlex
      minHeight='68vh'
      justify={ZRUJustifyE.center}
      align={ZRUAlignE.center}
      direction={ZRUDirectionE.column}
    >
      <ZRUHeading align={ZRUGeneralAlignE.center}>{message}</ZRUHeading>
      {showGoToHomeButton ? (
        <ZRUButton onClick={navigateBackToHome} mt='4'>
          Go Back Home
        </ZRUButton>
      ) : null}
    </ZRUFlex>
  );
};
export default ZFullPageCenteredMessage;
