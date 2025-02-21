// #region ---- Core Imports ----
import React, { useCallback, useMemo } from 'react';

// #endregion

// #region ---- Packages Imports ----
import { IconType } from 'react-icons';

// #endregion

// #region ---- Custom Imports ----
import { ZClassNames } from '@/Packages/ClassNames';
import {
  ZRUAvatar,
  ZRUBox,
  ZRUButton,
  ZRUFlex,
  ZRUText
} from '@/components/RadixUI';
import {
  ZCommentDotsIcon,
  ZEllipsisVerticalIcon,
  ZExpenseIcon,
  ZGroupOutlineIcon,
  ZNotificationsIcon,
  ZTrashSharpIcon
} from '@/assets';

// #endregion

// #region ---- Types Imports ----
import { ZNotificationTypesEnum } from '@/types/auth/index.type';
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUJustifyE,
  ZRURadiusE,
  ZRUTextAsE
} from '@/types/radixUI/index.type';
import { useZMediaQueryScale } from '@/hooks/helpers.hook';
interface ZAuthNotificationI {
  showEllipsis?: boolean;
  ellipsisOnClick?: React.MouseEventHandler<SVGElement>;
  primaryText?: string;
  primaryTextClassName?: string;
  secondaryText?: string;
  secondaryTextClassName?: string;
  date?: string;
  dateTextClassName?: string;
  notificationType?: ZNotificationTypesEnum;
}
// #endregion

const ZAuthNotification: React.FC<ZAuthNotificationI> = ({
  showEllipsis = true,
  primaryText,
  primaryTextClassName,
  secondaryText,
  secondaryTextClassName,
  date,
  dateTextClassName,
  notificationType,
  ellipsisOnClick
}) => {
  const { isXsScale } = useZMediaQueryScale();
  // #region Functions
  const IconComponent: React.FC<{ className?: string }> = useCallback(
    (props) => {
      switch (notificationType) {
        case ZNotificationTypesEnum.expenseAdded:
        case ZNotificationTypesEnum.expenseUpdated:
          return <ZExpenseIcon {...props} />;

        case ZNotificationTypesEnum.expenseDeleted:
        case ZNotificationTypesEnum.commentDeleted:
        case ZNotificationTypesEnum.groupDeleted:
          return <ZTrashSharpIcon {...props} />;

        case ZNotificationTypesEnum.commented:
        case ZNotificationTypesEnum.commentUpdated:
          return <ZCommentDotsIcon {...props} />;

        case ZNotificationTypesEnum.groupCreated:
        case ZNotificationTypesEnum.groupUpdated:
          return <ZGroupOutlineIcon {...props} />;

        default:
          return <ZNotificationsIcon {...props} />;
      }
    },
    [notificationType]
  );

  const getIconBgColor = useCallback((): string => {
    switch (notificationType) {
      case ZNotificationTypesEnum.expenseAdded:
      case ZNotificationTypesEnum.addedUserToGroup:
      case ZNotificationTypesEnum.commented:
      case ZNotificationTypesEnum.groupCreated:
        return 'bg-primary-shade';
      case ZNotificationTypesEnum.expenseUpdated:
      case ZNotificationTypesEnum.groupUpdated:
      case ZNotificationTypesEnum.commentUpdated:
        return 'bg-secondary';
      case ZNotificationTypesEnum.commentDeleted:
      case ZNotificationTypesEnum.expenseDeleted:
      case ZNotificationTypesEnum.groupDeleted:
        return 'bg-danger';
      default:
        return 'bg-tertiary';
    }
  }, [notificationType]);
  // #endregion

  return (
    <ZRUFlex
      align={ZRUAlignE.center}
      justify={ZRUJustifyE.between}
      className='px-4 py-3 rounded-md bg-medium/10 maxXs:flex-col maxXs:gap-y-3'
    >
      <ZRUFlex
        align={isXsScale ? ZRUAlignE.start : ZRUAlignE.center}
        gap='3'
        className='maxXs:flex-col maxXs:text-center'
      >
        <ZRUBox className='relative'>
          <ZRUBox className='w-12 h-12 p-[2px] overflow-hidden border rounded-full border-secondary'>
            <ZRUFlex
              align={ZRUAlignE.center}
              justify={ZRUJustifyE.center}
              className={ZClassNames(
                'w-full h-full text-white rounded-full',
                getIconBgColor()
              )}
            >
              <IconComponent className='w-6 h-6' />
            </ZRUFlex>
          </ZRUBox>

          <ZRUBox className='absolute right-[-0.1rem] bottom-[-0.1rem]'>
            <ZRUAvatar
              fallback='1'
              variant='solid'
              size='1'
              color={ZRUColorE.gray}
              radius={ZRURadiusE.full}
            />
          </ZRUBox>
        </ZRUBox>

        {/*  */}
        <ZRUBox className='mt-px'>
          <ZRUText
            as={ZRUTextAsE.p}
            className={ZClassNames(
              'font-medium leading-tight',
              primaryTextClassName
            )}
          >
            {primaryText}
          </ZRUText>
          <ZRUText
            as={ZRUTextAsE.p}
            className={ZClassNames(
              'text-sm leading-tight',
              secondaryTextClassName
            )}
          >
            {secondaryText}
          </ZRUText>
          <ZRUText
            as={ZRUTextAsE.p}
            className={ZClassNames(
              'text-sm leading-tight text-medium',
              dateTextClassName
            )}
          >
            {date}
          </ZRUText>
        </ZRUBox>
      </ZRUFlex>
      {showEllipsis === true ? (
        isXsScale ? (
          <ZEllipsisVerticalIcon
            onClick={ellipsisOnClick}
            className='w-5 h-5 transition-all cursor-pointer text-medium hover:text-secondary'
          />
        ) : (
          <ZRUButton className='w-full'>Actions</ZRUButton>
        )
      ) : null}
    </ZRUFlex>
  );
};

export default ZAuthNotification;
