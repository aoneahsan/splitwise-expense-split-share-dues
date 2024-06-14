// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Spinner } from '@radix-ui/themes';

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from '@radix-ui/themes/dist/cjs/props';

interface ZRUSpinnerI {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  style?: Record<string, unknown>;
  size?: Responsive<'1' | '2' | '3'>;
}
// #endregion

const ZRUSpinner: React.FC<ZRUSpinnerI> = (props) => {
  return <Spinner {...props}>{props?.children}</Spinner>;
};

export default ZRUSpinner;
