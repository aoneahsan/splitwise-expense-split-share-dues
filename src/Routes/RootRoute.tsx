import React, { Suspense } from 'react';
import ZGlobalComponents from '@/HOCs/ZGlobalComponents';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NotFound404Page from '@/pages/common/404';
import ZFullPageFallbackLoader from '@/components/Elements/ZFallbackLoader';

// Radix UI
import { ZRUTheme } from '@/components/RadixUI';

// eslint-disable-next-line react-refresh/only-export-components
const ZaionsTSRAppRoot: React.FC = () => {
  //
  return (
    <>
      <ZRUTheme>
        <Outlet />
        <ZGlobalComponents />
        <ToastContainer />
      </ZRUTheme>

      {/* React Query Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

const tanstackRootRoute = createRootRoute({
  component: ZaionsTSRAppRoot,
  notFoundComponent: () => {
    return (
      <Suspense fallback={<ZFullPageFallbackLoader />}>
        <NotFound404Page />
      </Suspense>
    );
  }
});

export default tanstackRootRoute;
