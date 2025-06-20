// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZRUBox, ZRUButton, ZRUFlex, ZRUText } from '@/components/RadixUI';

// #endregion

// #region ---- Images Imports ----
import {
  ZChevronLeftIcon,
  ZChevronRightIcon,
  ZDoubleArrowLeftIcon,
  ZDoubleArrowRightIcon,
  ZEllipsisHorizontalIcon
} from '@/assets';

// #endregion

// #region ---- Types Imports ----
import {
  ZRUAlignE,
  ZRUJustifyE,
  ZRUVariantE
} from '@/types/radixUI/index.type';
import { ZClassNames } from '@/Packages/ClassNames';
import { useZMediaQueryScale } from '@/hooks/helpers.hook';
interface ZPaginationI {
  disablePrevious?: boolean;
  disableNext?: boolean;
  disableFirst?: boolean;
  disableLast?: boolean;
  currentPage?: number;
  paginationItems?: Array<string | number>;
  firstOnClick?: React.MouseEventHandler<HTMLElement>;
  lastOnClick?: React.MouseEventHandler<HTMLElement>;
  previousOnClick?: () => void;
  nextOnClick?: () => void;
  itemOnClick?: (e: number) => void;
}

// #endregion

const ZPagination: React.FC<ZPaginationI> = ({
  disablePrevious = false,
  disableNext = false,
  disableFirst = false,
  disableLast = false,
  currentPage,
  paginationItems,
  firstOnClick,
  lastOnClick,
  previousOnClick,
  nextOnClick,
  itemOnClick
}) => {
  const { isMdScale, isXsScale } = useZMediaQueryScale();
  return (
    <ZRUFlex
      align={ZRUAlignE.center}
      className='gap-3 px-3 py-2 font-medium bg-white border rounded-md shadow-sm maxMd:w-full w-max maxXs:*:w-full  maxXs:flex-col'
    >
      <ZRUText
        onClick={firstOnClick}
        className={ZClassNames('md:text-xs', {
          'opacity-75 cursor-not-allowed': disableFirst,
          'cursor-pointer': !disableFirst
        })}
      >
        {isMdScale ? (
          'FIRST'
        ) : isXsScale ? (
          <ZDoubleArrowLeftIcon />
        ) : (
          <ZRUButton className='w-full' variant={ZRUVariantE.soft}>
            First
          </ZRUButton>
        )}
      </ZRUText>
      <ZRUFlex
        align={ZRUAlignE.center}
        onClick={previousOnClick}
        className={ZClassNames('gap-1 text-sm', {
          'opacity-75 cursor-not-allowed': disablePrevious,
          'cursor-pointer': !disablePrevious
        })}
      >
        {isXsScale ? (
          <>
            <ZChevronLeftIcon /> {isMdScale ? 'PREV' : null}
          </>
        ) : (
          <ZRUButton className='w-full' variant={ZRUVariantE.soft}>
            Prev
          </ZRUButton>
        )}
      </ZRUFlex>

      <ZRUFlex
        align={ZRUAlignE.center}
        className='mx-1 gap-2 *:text-sm text-tertiary maxMd:flex-1 maxMd:justify-center'
      >
        {paginationItems?.map((el, index) => {
          if (typeof el === 'number') {
            return (
              <ZRUFlex
                key={index}
                className={ZClassNames('w-5 h-5 rounded-full cursor-pointer', {
                  'text-white bg-primary': currentPage === el
                })}
                align={ZRUAlignE.center}
                justify={ZRUJustifyE.center}
                onClick={() => {
                  itemOnClick !== undefined && itemOnClick(el);
                }}
              >
                {el}
              </ZRUFlex>
            );
          } else if (typeof el === 'string') {
            return (
              <ZRUFlex
                key={index}
                className='w-5 h-5 text-tertiary'
                align={ZRUAlignE.center}
                justify={ZRUJustifyE.center}
              >
                <ZEllipsisHorizontalIcon className='w-10 h-10' />
              </ZRUFlex>
            );
          } else {
            return null;
          }
        })}
      </ZRUFlex>

      <ZRUFlex
        align={ZRUAlignE.center}
        onClick={nextOnClick}
        className={ZClassNames('gap-1 text-sm', {
          'opacity-75 cursor-not-allowed': disableNext,
          'cursor-pointer': !disableNext
        })}
      >
        {isXsScale ? (
          <>
            {isMdScale ? 'NEXT' : null} <ZChevronRightIcon />
          </>
        ) : (
          <ZRUButton className='w-full' variant={ZRUVariantE.soft}>
            Next
          </ZRUButton>
        )}
      </ZRUFlex>
      <ZRUText
        onClick={lastOnClick}
        className={ZClassNames('md:text-xs', {
          'opacity-75 cursor-not-allowed': disableLast,
          'cursor-pointer': !disableLast
        })}
      >
        {isMdScale ? (
          'LAST'
        ) : isXsScale ? (
          <ZDoubleArrowRightIcon />
        ) : (
          <ZRUButton className='w-full' variant={ZRUVariantE.soft}>
            Last
          </ZRUButton>
        )}
      </ZRUText>
    </ZRUFlex>
  );
};

export default ZPagination;
