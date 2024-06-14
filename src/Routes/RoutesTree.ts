import {
  homeRoute,
  loginRoute,
  registerRoute,
  testingRoute,
  forgotRoute,
  myAccountTree,
  authTree
} from './AllRoutes';
import tanstackRootRoute from './RootRoute';

const routeTree = tanstackRootRoute.addChildren([
  homeRoute,
  registerRoute,
  loginRoute,
  testingRoute,
  forgotRoute,
  myAccountTree,
  authTree
]);

export default routeTree;
