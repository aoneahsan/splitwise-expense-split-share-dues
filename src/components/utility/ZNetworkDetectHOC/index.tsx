// #region ---- Core Imports ----
import React, { useEffect } from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Network } from '@capacitor/network';
import { useRecoilState } from 'recoil';

// #endregion

// #region ---- Custom Imports ----
import messages from '@/utils/messages';
import { ZRUBox, ZRUText } from '@/components/RadixUI';
import { ZNetworkRStateAtom } from '@/store/global/index.recoil';
import ZFullPageLoader from '../ZFullPageLoader';
import ZFullPageCenteredMessage from '../ZFullPageCenteredMessage';

// #endregion

const ZNetworkDetectHOC: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [zNetworkState, setZNetworkState] = useRecoilState(ZNetworkRStateAtom);

  useEffect(() => {
    void (async () => {
      try {
        const status = await Network.getStatus();
        setZNetworkState((oldState) => ({
          ...oldState,
          processing: false,
          status: { ...status },
          errorOcurred: false
        }));
      } catch (error) {
        setZNetworkState((oldState) => ({
          ...oldState,
          processing: false,
          errorOcurred: true
        }));
      }

      try {
        void Network.addListener('networkStatusChange', (status) => {
          setZNetworkState((oldValues) => ({
            ...oldValues,
            processing: false,
            status: { ...status },
            errorOcurred: false
          }));
        });
      } catch (error) {
        setZNetworkState((oldState) => ({
          ...oldState,
          processing: false,
          errorOcurred: true
        }));
      }
    })();

    return () => {
      void Network.removeAllListeners();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {zNetworkState?.processing ? (
        <ZFullPageLoader />
      ) : zNetworkState?.errorOcurred ? (
        <ZFullPageCenteredMessage />
      ) : (
        <>
          {zNetworkState?.status?.connected === false ? (
            <ZRUBox className='fixed inset-0 z-50 bg-opacity-50 bg-white/70'>
              <ZRUBox className='px-6 py-3 mx-auto shadow-lg bg-warning/70 w-max h-max'>
                <ZRUText className='block text-lg'>
                  {messages.network.noInternet.title}
                </ZRUText>
                <ZRUText className='block text-sm'>
                  {messages.network.noInternet.message}
                </ZRUText>
                {/* <ZIonButton className='mt-3'>Reload</ZIonButton> */}
              </ZRUBox>
            </ZRUBox>
          ) : null}
          {children}
        </>
      )}
    </>
  );
};

export default ZNetworkDetectHOC;
