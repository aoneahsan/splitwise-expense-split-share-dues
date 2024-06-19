// #region Packages imports
import {
  lazyRouteComponent,
  redirect,
  createRoute
} from '@tanstack/react-router';
// #endregion

// #region Custom imports
import { Storage } from '@/utils/helpers';
import constants from '@/utils/constants';
import tanstackRootRoute from './RootRoute';
import { AppRoutes } from '@/Routes/AppRoutes';
// #endregion

// on window refresh
const privateRouteHandler = async (): Promise<void> => {
  await Promise.all([
    Storage.get(constants.localstorageKeys.authToken),
    Storage.get(constants.localstorageKeys.userData)
  ]).then(async ([authToken, userData]) => {
    if (authToken === undefined || authToken === null || userData === null) {
      // check api result
      // await zAxiosApiRequest({
      //   _url: ApiUrlEnum.verifyAuthenticationStatus,
      //   _method: "post",
      //   //     search: {
      //   //       redirect: location.href,
      //   //     },
      // });

      // eslint-disable-next-line
      throw redirect({
        to: AppRoutes.login
      });
    }
  });
};

const publicRouteHandler = async (): Promise<void> => {
  await Promise.all([
    Storage.get(constants.localstorageKeys.authToken),
    Storage.get(constants.localstorageKeys.userData)
  ]).then(async ([authToken, userData]) => {
    if (authToken !== undefined && userData !== undefined) {
      // eslint-disable-next-line
      // throw redirect({
      //   to: AppRoutes.authRoutes.invoices,
      //   params: {
      //     invoiceType: ZInvoiceTypeE.inv
      //   }
      // });
    }
  });
};

// #region  ----- Public routes -----
// --- Home
export const homeRoute = createRoute({
  getParentRoute: () => tanstackRootRoute,
  path: AppRoutes.home,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/public/Home')
  )
  // beforeLoad: async ({ location }) => {},
});

// --- Login
export const loginRoute = createRoute({
  getParentRoute: () => tanstackRootRoute,
  path: AppRoutes.login,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/public/Login')
  ),
  beforeLoad: publicRouteHandler
});

// --- Register
export const registerRoute = createRoute({
  getParentRoute: () => tanstackRootRoute,
  path: AppRoutes.register,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/public/Register')
  ),
  beforeLoad: publicRouteHandler
});

export const forgotRoute = createRoute({
  getParentRoute: () => tanstackRootRoute,
  path: AppRoutes.forgotPassword,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/public/ForgotPassword')
  ),
  beforeLoad: publicRouteHandler
});

// #endregion

// #region  ----- Auth routes -----

// #region My Account
// const myAccountRoute = createRoute({
//   getParentRoute: () => tanstackRootRoute,
//   path: AppRoutes.myAccount,
//   component: lazyRouteComponent(
//     async (): Promise<Record<string, unknown>> =>
//       await import('@/pages/authenticated/MyAccount')
//   )
//   // beforeLoad: privateRouteHandler
// });

/// --- -- Account tree
// export const myAccountTree = myAccountRoute.addChildren([]);
// #endregion

// #region Auth (Dashboard)
const authRoute = createRoute({
  getParentRoute: () => tanstackRootRoute,
  path: AppRoutes.auth,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/authenticated/Layout')
  )
  // beforeLoad: privateRouteHandler
});

const dashboardRoute = createRoute({
  getParentRoute: () => authRoute,
  path: AppRoutes.authSub.dashboard.path,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/authenticated/Dashboard')
  )
});

const recentActivityRoute = createRoute({
  getParentRoute: () => authRoute,
  path: AppRoutes.authSub.recentActivity.path,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/authenticated/RecentActivity')
  )
});

const allExpensesRoute = createRoute({
  getParentRoute: () => authRoute,
  path: AppRoutes.authSub.allExpenses.path,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/authenticated/AllExpenses')
  )
});

const groupsRoute = createRoute({
  getParentRoute: () => authRoute,
  path: AppRoutes.authSub.groups.path,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/authenticated/Groups')
  )
});

const ViewGroupRoute = createRoute({
  getParentRoute: () => authRoute,
  path: AppRoutes.authSub.groups.single,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/authenticated/Groups/View')
  )
});

const friendsRoute = createRoute({
  getParentRoute: () => authRoute,
  path: AppRoutes.authSub.friends.path,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/authenticated/Friends')
  )
});

const accountRoute = createRoute({
  getParentRoute: () => authRoute,
  path: AppRoutes.authSub.account.path,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/authenticated/MyAccount')
  )
});

// Auth tree
export const authTree = authRoute.addChildren([
  dashboardRoute,
  recentActivityRoute,
  allExpensesRoute,
  groupsRoute,
  ViewGroupRoute,
  friendsRoute,
  accountRoute
]);
// #endregion

// #endregion => Auth routes

// #region  ----- Common routes -----

// #endregion => Common routes

// #region  ----- Testing routes -----
export const testingRoute = createRoute({
  getParentRoute: () => tanstackRootRoute,
  path: AppRoutes.Testing,
  component: lazyRouteComponent(
    async (): Promise<Record<string, unknown>> =>
      await import('@/pages/TestingPage')
  )
  // beforeLoad: privateRouteHandler
});

// #endregion => Testing routes
