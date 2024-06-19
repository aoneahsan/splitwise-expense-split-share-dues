const authUrlCommonPath = '/app';

const routeParams = {
  groupId: '$groupId',
  friendId: '$friendId',
} as const;

const AppRoutesCommonPath = {
  onBoarding: '/onboarding',
  auth: '/auth',
} as const;

const AppRoutesE = {
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',

  authSub: {
    dashboard: {
      path: '/dashboard',
      completePath: `${AppRoutesCommonPath.auth}/dashboard`
    },
    recentActivity: {
      path: '/recent-activity',
      completePath: `${AppRoutesCommonPath.auth}/recent-activity`
    },
    allExpenses: {
      path: '/all-expenses',
      completePath: `${AppRoutesCommonPath.auth}/all-expenses`
    },
    groups: {
      path: '/groups',
      completePath: `${AppRoutesCommonPath.auth}/groups`,
      single: `/groups/${routeParams.groupId}`,
      singleCompletePath: `${AppRoutesCommonPath.auth}/groups/${routeParams.groupId}`
    },
    friends: {
      path: '/friends',
      completePath: `${AppRoutesCommonPath.auth}/friends`,
      single: `/friends/${routeParams.groupId}`,
      singleCompletePath: `${AppRoutesCommonPath.auth}/friends/${routeParams.friendId}`
    },
    account: {
      path: '/my-account',
      completePath: `${AppRoutesCommonPath.auth}/my-account`
    }
  },

  onBoardingSub: {
    profileDetailsStep: {
      path: '/profile-details',
      completePath: `${AppRoutesCommonPath.onBoarding}/profile-details`
    },
    currencyDetailsStep: {
      path: '/currency-details',
      completePath: `${AppRoutesCommonPath.onBoarding}/currency-details`
    },
    bankDetailsStep: {
      path: '/bank-details',
      completePath: `${AppRoutesCommonPath.onBoarding}/bank-details`
    }
  },

  myAccountSub: {

  },

  Testing: '/testing'
} as const;

// export const getFullPage

export const AppRoutes = {
  ...AppRoutesCommonPath,
  ...AppRoutesE
} as const;
