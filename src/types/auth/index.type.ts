import { type FetchUserAttributesOutput } from 'aws-amplify/auth';
import { type ZRSelectOptions } from '@/types/elements/select.type';

// Enums
export enum ZNotificationTypesEnum {
  expenseAdded = 'expenseAdded',
  expenseDeleted = 'expenseDeleted',
  expenseUpdated = 'expenseUpdated',
  commented = 'commented',
  commentUpdated = 'commentUpdated',
  commentDeleted = 'commentDeleted',
  groupCreated = 'groupCreated',
  addedUserToGroup = 'addedUserToGroup',
  groupUpdated = 'groupUpdated',
  groupDeleted = 'groupDeleted',
}

export enum RegisterStepEnum {
  registerForm = 'registerForm',
  profileForm = 'profileForm',
  currencyAndLogoForm = 'currencyAndLogoForm',
  bankDetailsForm = 'bankDetailsForm'
}

export enum ZErrorCodeEnum {
  badRequest = 400,
  unauthorized = 402,
  accessForbidden = 403,
  notFound = 404,
  serverError = 500,
  unauthenticated = 401,
  reachedLimit = 429
}

// Interfaces
export interface ZUserI {
  id?: string;
  attributes?: FetchUserAttributesOutput;
  username?: string;
  email?: string;
  password?: string;
  canViewPassword?: boolean; // for frontend only
  canViewConfirmPassword?: boolean; // for frontend only
  confirmPassword?: string;

  nickname?: string;
  company?: string;
  address?: string;
  zipCode?: number;
  city?: string;
  country?: string;
  logo?: {
    url: string;
    path: string;
    file: null | File;
  };
  phoneNumber?: string;
  note?: string;

  //
  verificationCode?: string;
}
export interface ZAuthI {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  company?: string;
  bank_details?: string;
  address?: string;
  zipcode?: number;
  city?: string;
  country?: string;
  company_registration_number?: string;
  vat_number?: string;
  default_currency?: ZRSelectOptions | null;
  logo?: {
    url: string;
    path: string;
    file: null | File;
  };
  onboarding_details?: {
    register: boolean;
    profile: boolean;
    currency: boolean;
    bank_details: boolean;
  };
  contact_full_name?: string;
  note?: string;

  // Fields for frontend use
  step?: RegisterStepEnum;
  isApiError?: boolean;
  isRegisterPending?: boolean;
  logoUrl?: string;
  logoFile?: null | File;
}

export interface UserAuthTokenI {
  token?: string;
  accessToken?: string;
}

export interface ZFileI {
  file: null | File;
  fileName: string;
  filePath: string;
  fileUrl: string;
}

export interface ZFilterOptions {
  search?: string;
  showAll?: string;
  itemPerPage: number;
  currentPage: number;
}

export interface ZPaginationInfoI {
  from?: number;
  to?: number;
  range?: Array<string | number>;
  currentPage: number;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

// Types
