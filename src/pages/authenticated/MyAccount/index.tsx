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
  ZRUAvatar,
  ZRUBox,
  ZRUButton,
  ZRUCheckbox,
  ZRUFlex,
  ZRUHeading,
  ZRUInput,
  ZRUText
} from '@/components/RadixUI';
import constants from '@/utils/constants';
import { Notifications } from '@/utils/constants/notification';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUColorE,
  ZRUHeadingAsE,
  ZRUJustifyE,
  ZRURadiusE,
  ZRUTextAsE
} from '@/types/radixUI/index.type';

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import {
  ZMailOutlineIcon,
  ZAppIndicatorIcon,
  ZDiamondOutlineIcon,
  ZAccountBoxLineIcon,
  ZTrashSharpIcon
} from '@/assets';

// #endregion

const MyAccountPage: React.FC = () => {
  // #region Custom hooks
  // #endregion

  // #region Constants

  // #endregion

  // #region Routes

  // #endregion

  // #region Functions

  // #endregion

  return (
    <ZRUBox>
      <ZRUBox className='w-full px-1 py-2'>
        <ZRUHeading
          className='text-3xl font-medium'
          as={ZRUHeadingAsE.h2}
          color={ZRUColorE.grass}
        >
          Your Account
        </ZRUHeading>
      </ZRUBox>

      <ZRUFlex align={ZRUAlignE.center} className='gap-2 mt-3'>
        <ZRUAvatar
          fallback='1'
          size='6'
          radius={ZRURadiusE.full}
          color={ZRUColorE.gray}
        />
        <ZRUBox>
          <ZRUText as={ZRUTextAsE.p} className='text-base font-medium'>
            Profile Picture
          </ZRUText>
          <ZRUText
            as={ZRUTextAsE.p}
            className='text-sm font-medium'
            color={ZRUColorE.gray}
          >
            Max size 5MB
          </ZRUText>
        </ZRUBox>
      </ZRUFlex>

      <ZRUFlex className='gap-4 mt-3 *:w-1/3 flex-wrap' align={ZRUAlignE.end}>
        <ZRUInput label='Your name' size='3' />
        <ZRUInput label='Your email' size='3' />
        <ZRUInput label='Your phone number' size='3' />
        <ZRUInput label='Your default currency (for new expenses)' size='3' />
        <ZRUInput label='Your language' size='3' />
        <ZRUButton size='3'>Save</ZRUButton>
      </ZRUFlex>

      <ZRUBox className='w-full px-1 py-2 mt-5'>
        <ZRUHeading
          className='text-2xl font-medium'
          as={ZRUHeadingAsE.h3}
          color={ZRUColorE.grass}
        >
          Notifications
        </ZRUHeading>
      </ZRUBox>

      <ZRUBox>
        <ZRUAccordingGroup type='multiple'>
          {Notifications.map((element, index) => {
            return (
              <ZRUAccordionItem
                key={index}
                value={element?.value}
                className='shadow-sm bg-medium/20'
              >
                <ZRUAccordionTrigger>
                  <ZRUText>{element?.label}</ZRUText>
                </ZRUAccordionTrigger>
                <ZRUAccordionContent className='*:!p-0'>
                  <ZRUFlex
                    align={ZRUAlignE.center}
                    justify={ZRUJustifyE.between}
                    className='w-full *:mb-2 px-4 pt-3 pb-2 bg-success-dark/20 *:w-[49%] flex-wrap gap-3 *:px-3 *:py-2 *:rounded-md *:bg-light/80'
                  >
                    {element?.items?.map((item, index) => {
                      return (
                        <ZRUFlex
                          key={index}
                          align={ZRUAlignE.center}
                          justify={ZRUJustifyE.between}
                        >
                          <ZRUText
                            className='font-medium'
                            color={ZRUColorE.gray}
                          >
                            {item?.label}
                          </ZRUText>

                          <ZRUFlex
                            align={ZRUAlignE.center}
                            justify={ZRUJustifyE.end}
                            gap='2'
                          >
                            {item?.mail ? (
                              <ZRUText color={ZRUColorE.gray}>
                                <ZMailOutlineIcon className='w-5 h-5 cursor-pointer' />
                              </ZRUText>
                            ) : null}

                            {item?.inApp ? (
                              <ZRUText color={ZRUColorE.gray}>
                                <ZAppIndicatorIcon className='w-5 h-5 cursor-pointer' />
                              </ZRUText>
                            ) : null}
                          </ZRUFlex>
                        </ZRUFlex>
                      );
                    })}
                  </ZRUFlex>
                </ZRUAccordionContent>
              </ZRUAccordionItem>
            );
          })}
        </ZRUAccordingGroup>
      </ZRUBox>

      <ZRUBox className='w-full px-1 py-2 mt-5'>
        <ZRUHeading
          className='text-2xl font-medium'
          as={ZRUHeadingAsE.h3}
          color={ZRUColorE.grass}
        >
          Privacy & Security
        </ZRUHeading>
      </ZRUBox>

      <ZRUBox>
        <ZRUFlex gap='2' align={ZRUAlignE.start}>
          <ZRUCheckbox className='mt-1' />
          <ZRUBox>
            <ZRUText as={ZRUTextAsE.p} className='text-sm'>
              Allow {constants.productInfo.name} to suggest me as a friend to
              other users
            </ZRUText>
            <ZRUText as={ZRUTextAsE.p} className='text-sm'>
              {constants.productInfo.name} will only recommend you to users who
              already have your email address or phone number in their phone’s
              contact book
            </ZRUText>
          </ZRUBox>
        </ZRUFlex>

        <ZRUFlex gap='2' align={ZRUAlignE.center} className='mt-4'>
          <ZRUButton>Your apps</ZRUButton>
          <ZRUButton>Recent visits</ZRUButton>
          <ZRUButton>Log out on all devices</ZRUButton>
          <ZRUButton>Manage your blocklist</ZRUButton>
        </ZRUFlex>
      </ZRUBox>

      <ZRUBox className='w-full px-1 py-2 mt-5'>
        <ZRUHeading
          className='text-2xl font-medium'
          as={ZRUHeadingAsE.h3}
          color={ZRUColorE.grass}
        >
          Advanced features
        </ZRUHeading>
        <ZRUText color={ZRUColorE.gray}>
          Most users don’t need these features – but here they are in case you
          do!
        </ZRUText>
      </ZRUBox>

      <ZRUBox className='mb-4'>
        <ZRUFlex gap='2' align={ZRUAlignE.center} className='mt-4'>
          <ZRUButton className='capitalize' size='3' color={ZRUColorE.jade}>
            <ZDiamondOutlineIcon className='w-5 h-5' /> Get
            {constants.productInfo.name} Pro!
          </ZRUButton>
          <ZRUButton size='3' color={ZRUColorE.brown}>
            <ZAccountBoxLineIcon className='w-6 h-6' /> Manage with another
            account
          </ZRUButton>

          <ZRUButton size='3' color={ZRUColorE.ruby}>
            <ZTrashSharpIcon className='w-5 h-5' /> Delete your account
          </ZRUButton>
        </ZRUFlex>
      </ZRUBox>
    </ZRUBox>
  );
};

export default MyAccountPage;
