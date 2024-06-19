// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----
import { RadioGroup } from '@radix-ui/themes';

// #endregion

// #region ---- Custom Imports ----
import ZRURadioItem from './Item';
import ZRUBox from '../../Layout/ZRUBox';
import ZRUText from '../../Typography/ZRUText';
import { ZClassNames } from '@/Packages/ClassNames';

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from '@radix-ui/themes/dist/cjs/props';
import {
  ZRUColorE,
  ZRUOrientationE,
  ZRUSelectValueI,
  ZRUTextAsE
} from '@/types/radixUI/index.type';
interface ZRURadioI {
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  size?: Responsive<'1' | '2' | '3'>;
  color?: ZRUColorE;
  highContrast?: boolean;
  value?: string;
  defaultValue?: string;
  name?: string;
  options?: Array<ZRUSelectValueI>;
  label?: string;
  labelClassName?: string;
  isValid?: boolean;
  errorNode?: React.ReactNode;
  infoText?: React.ReactNode;
  required?: boolean;
  labelOrientation?: ZRUOrientationE;
  radioClassName?: string;
  onChange?: React.FormEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
}
// #endregion

/**
 * A customized Radix RadioGroup component.
 */
const ZRURadio: React.FC<ZRURadioI> = (props) => {
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

      <RadioGroup.Root {...props} className={props?.radioClassName}>
        {props?.options?.map((el, index) => {
          return (
            <ZRURadioItem value={el?.value} key={index}>
              {el?.label}
            </ZRURadioItem>
          );
        })}
      </RadioGroup.Root>
    </ZRUBox>
  );
};

export default ZRURadio;
