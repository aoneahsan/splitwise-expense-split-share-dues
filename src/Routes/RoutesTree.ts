import {
  homeRoute,
  loginRoute,
  registerRoute,
  testingRoute,
  forgotRoute,
  authTree
} from './AllRoutes';
import tanstackRootRoute from './RootRoute';

const routeTree = tanstackRootRoute.addChildren([
  homeRoute,
  registerRoute,
  loginRoute,
  testingRoute,
  forgotRoute,
  authTree
]);

export default routeTree;
