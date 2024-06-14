// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Theme } from '@radix-ui/themes';

// #endregion

// #region ---- Types Imports ----
import {
  type ZRUColorE,
  type ZRUAppearanceE,
  type ZGrayColorE,
  type ZPanelBackgroundE,
  type ZRURadiusE
} from '@/types/radixUI/index.type';
interface ZRUThemeI {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  style?: Record<string, unknown>;
  hasBackground?: boolean;
  appearance?: ZRUAppearanceE;
  accentColor?: ZRUColorE;
  grayColor?: ZGrayColorE;
  panelBackground?: ZPanelBackgroundE;
  radius?: ZRURadiusE;
  scaling?: '90%' | '95%' | '100%' | '105%' | '110%';
}
// #endregion

const ZRUTheme: React.FC<ZRUThemeI> = (props) => {
  return <Theme {...props}>{props?.children}</Theme>;
};

export default ZRUTheme;
