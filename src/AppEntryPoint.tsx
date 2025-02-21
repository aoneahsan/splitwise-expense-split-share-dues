import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import AppRouter from './Routes';
import FetchRequiredAppDataHOC from './HOCs/FetchRequiredAppDataHOC';
import ZNetworkDetectHOC from './components/utility/ZNetworkDetectHOC';

// React-toastify package css
import 'react-toastify/dist/ReactToastify.css';

// QueryClient From tanstack/react-query
const queryClientObj = new QueryClient();

// App entry point
const AppEntryPoint: React.FC = () => {
  return (
    <>
      {/* Recoil State HOC */}
      <RecoilRoot>
        {/* React Query */}
        <QueryClientProvider client={queryClientObj}>
          <ZNetworkDetectHOC>
            {/* HOC to fetch required data from api or local storage for app */}
            <FetchRequiredAppDataHOC>
              {/* Tanstack router */}
              <RouterProvider router={AppRouter} />
            </FetchRequiredAppDataHOC>
          </ZNetworkDetectHOC>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};

export default AppEntryPoint;
