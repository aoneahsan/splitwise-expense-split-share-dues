// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Select } from '@radix-ui/themes';

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import {
  ZRUColorE,
  type ZRUBasicVariantE,
  type ZRURadiusE,
  type ZRUMarginI,
  type ZRUSelectValueI,
  ZRUSelectContentPositionE,
  ZRUTextAsE,
  ZRUOrientationE
} from '@/types/radixUI/index.type';
import { Responsive } from '@radix-ui/themes/dist/cjs/props';
import ZRUBox from '../../Layout/ZRUBox';
import ZRUText from '../../Typography/ZRUText';
import { ZClassNames } from '@/Packages/ClassNames';
import { isZNonEmptyString } from '@/utils/helpers';
interface ZRUSelectI {
  children?: React.ReactNode;
  label?: string;
  labelClassName?: string;
  asChild?: boolean;
  className?: string;
  style?: Record<string, unknown>;
  size?: Responsive<'1' | '2' | '3'>;
  defaultOpen?: boolean;
  defaultValue?: string;
  autoComplete?: string;
  disabled?: boolean;
  name?: string;
  open?: boolean;
  required?: boolean;
  value?: string;
  onOpenChange?(open: boolean): void;
  onValueChange?(value: string): void;

  trigger?: {
    variant?: ZRUBasicVariantE;
    color?: ZRUColorE;
    radius?: ZRURadiusE;
    placeholder?: string;
    className?: string;
  } & ZRUMarginI;

  content?: {
    color?: ZRUColorE;
    highContrast?: boolean;
    position?: ZRUSelectContentPositionE;
  };

  options?: Array<ZRUSelectValueI>;
  labelOrientation?: ZRUOrientationE;
  triggerClassName?: string;
  isValid?: boolean;
  errorNode?: React.ReactNode;
  infoText?: React.ReactNode;
}
// #endregion

const ZRUSelect: React.FC<ZRUSelectI> = (props) => {
  return (
    <ZRUBox
      className={ZClassNames(props.className, {
        'flex items-center gap-1 overflow-hidden text-ellipsis':
          props?.labelOrientation === ZRUOrientationE.horizontal
      })}
    >
      {props?.label !== undefined && props?.label?.trim()?.length > 0 ? (
        <ZRUText
          as={ZRUTextAsE.label}
          size='1'
          className={ZClassNames(
            'block mb-[2px] text-[16px]',
            props?.labelClassName
          )}
        >
          {props?.label}
          {props?.required ? (
            <ZRUText
              as={ZRUTextAsE.span}
              className='ms-1'
              color={ZRUColorE.tomato}
            >
              *
            </ZRUText>
          ) : null}
        </ZRUText>
      ) : null}

      <Select.Root
        size={props.size}
        name={props.name}
        open={props.open}
        value={props.value}
        disabled={props.disabled}
        required={props.required}
        defaultOpen={props.defaultOpen}
        defaultValue={props.defaultValue}
        autoComplete={props.autoComplete}
        onOpenChange={props.onOpenChange}
        onValueChange={props.onValueChange}
      >
        <Select.Trigger
          {...props?.trigger}
          className={props.triggerClassName}
        />

        <Select.Content
          {...props?.content}
          position={
            props?.content?.position ?? ZRUSelectContentPositionE.popper
          }
        >
          {props?.options?.map((option, index) => {
            return (
              <Select.Item value={option?.value} key={index}>
                {option?.label}
              </Select.Item>
            );
          })}
        </Select.Content>
      </Select.Root>

      {/* Error */}
      {props?.isValid === false &&
      ((typeof props?.errorNode === 'string' &&
        isZNonEmptyString(props?.errorNode)) ||
        (props?.errorNode !== null && props?.errorNode !== undefined)) ? (
        <ZRUText
          as={ZRUTextAsE.span}
          size='1'
          color={ZRUColorE.tomato}
          className='font-medium'
        >
          {props?.errorNode}
        </ZRUText>
      ) : null}

      {/* Info */}
      {props?.isValid &&
      ((typeof props?.infoText === 'string' &&
        isZNonEmptyString(props?.infoText)) ||
        (props?.infoText !== null && props?.infoText !== undefined)) ? (
        <ZRUText
          as={ZRUTextAsE.span}
          size='1'
          color={ZRUColorE.gold}
          className='font-medium'
        >
          {props?.infoText}
        </ZRUText>
      ) : null}
    </ZRUBox>
  );
};

export default ZRUSelect;
